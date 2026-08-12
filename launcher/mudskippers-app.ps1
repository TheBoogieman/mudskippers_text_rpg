# =====================================================================
#  MUDSKIPPERS - one launcher, two buttons
#
#  START  sets up a storyteller on this computer and opens the game as
#         its own window, already wired to it.
#  STOP   gives the graphics memory back and closes everything.
#
#  Closing the game window does the same thing on its own: the model is
#  unloaded, the engine is shut down, and this launcher closes behind it.
# =====================================================================

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$GameUrl  = "https://theboogieman.github.io/mudskippers_text_rpg/"
$OllamaEx = Join-Path $env:LOCALAPPDATA "Programs\Ollama\ollama.exe"
$OllamaAp = Join-Path $env:LOCALAPPDATA "Programs\Ollama\ollama app.exe"
$BrowserDir = Join-Path $env:LOCALAPPDATA "Mudskippers\browser"   # note: $Profile is a PowerShell automatic variable

$script:model    = ""
$script:runModel = ""   # the derived model the game actually talks to
$script:ctx      = 16384
$script:browser  = $null
$script:closing  = $false

# ------------------------------------------------------------ the window
$ink    = [Drawing.Color]::FromArgb(232,206,164)
$dim    = [Drawing.Color]::FromArgb(150,130,104)
$panel  = [Drawing.Color]::FromArgb(28,21,14)
$back   = [Drawing.Color]::FromArgb(18,14,10)
$gold   = [Drawing.Color]::FromArgb(232,161,60)

$form                 = New-Object Windows.Forms.Form
$form.Text            = "MUDSKIPPERS"
$form.Size            = New-Object Drawing.Size(460,330)
$form.StartPosition   = "CenterScreen"
$form.FormBorderStyle = "FixedSingle"
$form.MaximizeBox     = $false
$form.BackColor       = $back

$title            = New-Object Windows.Forms.Label
$title.Text       = "M U D S K I P P E R S"
$title.Font       = New-Object Drawing.Font("Consolas",17,[Drawing.FontStyle]::Bold)
$title.ForeColor  = $gold
$title.AutoSize   = $false
$title.TextAlign  = "MiddleCenter"
$title.Size       = New-Object Drawing.Size(440,40)
$title.Location   = New-Object Drawing.Point(10,18)
$form.Controls.Add($title)

$sub           = New-Object Windows.Forms.Label
$sub.Text      = "a storyteller that runs on this computer"
$sub.Font      = New-Object Drawing.Font("Segoe UI",9,[Drawing.FontStyle]::Italic)
$sub.ForeColor = $dim
$sub.AutoSize  = $false
$sub.TextAlign = "MiddleCenter"
$sub.Size      = New-Object Drawing.Size(440,20)
$sub.Location  = New-Object Drawing.Point(10,56)
$form.Controls.Add($sub)

$status           = New-Object Windows.Forms.Label
$status.Text      = "Ready when you are."
$status.Font      = New-Object Drawing.Font("Consolas",9)
$status.ForeColor = $ink
$status.BackColor = $panel
$status.AutoSize  = $false
$status.TextAlign = "MiddleCenter"
$status.Size      = New-Object Drawing.Size(400,58)
$status.Location  = New-Object Drawing.Point(30,90)
$form.Controls.Add($status)

function Set-Status([string]$t, $colour = $null) {
  $status.Text = $t
  if ($colour) { $status.ForeColor = $colour } else { $status.ForeColor = $ink }
  $status.Refresh()
  [Windows.Forms.Application]::DoEvents()
}

$btnPlay              = New-Object Windows.Forms.Button
$btnPlay.Text         = "START LOCAL AI  and  PLAY"
$btnPlay.Font         = New-Object Drawing.Font("Consolas",10,[Drawing.FontStyle]::Bold)
$btnPlay.Size         = New-Object Drawing.Size(400,46)
$btnPlay.Location     = New-Object Drawing.Point(30,164)
$btnPlay.FlatStyle    = "Flat"
$btnPlay.BackColor    = $panel
$btnPlay.ForeColor    = $gold
$btnPlay.FlatAppearance.BorderColor = $gold
$form.Controls.Add($btnPlay)

$btnStop              = New-Object Windows.Forms.Button
$btnStop.Text         = "SHUT DOWN AND FREE MEMORY"
$btnStop.Font         = New-Object Drawing.Font("Consolas",10)
$btnStop.Size         = New-Object Drawing.Size(400,40)
$btnStop.Location     = New-Object Drawing.Point(30,220)
$btnStop.FlatStyle    = "Flat"
$btnStop.BackColor    = $panel
$btnStop.ForeColor    = [Drawing.Color]::FromArgb(201,138,138)
$btnStop.FlatAppearance.BorderColor = [Drawing.Color]::FromArgb(90,47,47)
$form.Controls.Add($btnStop)

$foot           = New-Object Windows.Forms.Label
$foot.Text      = "Closing the game window shuts all of this down too."
$foot.Font      = New-Object Drawing.Font("Segoe UI",8)
$foot.ForeColor = $dim
$foot.AutoSize  = $false
$foot.TextAlign = "MiddleCenter"
$foot.Size      = New-Object Drawing.Size(440,20)
$foot.Location  = New-Object Drawing.Point(10,266)
$form.Controls.Add($foot)

# ------------------------------------------------------------- machinery
function Get-VramMB {
  $smi = Join-Path $env:SystemRoot "System32\nvidia-smi.exe"
  if (Test-Path $smi) {
    try {
      $n = ((& $smi --query-gpu=memory.total --format=csv,noheader,nounits 2>$null) | Select-Object -First 1) -as [int]
      if ($n -gt 0) { return $n }
    } catch {}
  }
  $best = 0
  try {
    $base = "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e968-e325-11ce-bfc1-08002be10318}"
    Get-ChildItem $base -EA SilentlyContinue | ForEach-Object {
      $q = (Get-ItemProperty $_.PSPath -EA SilentlyContinue)."HardwareInformation.qwMemorySize"
      if ($q) { $mb = [int]($q / 1MB); if ($mb -gt $best) { $best = $mb } }
    }
  } catch {}
  return $best
}
# Measured on this hardware, weights + KV cache together, which is what
# actually has to fit - a model's download size is not its footprint:
#   mistral-small3.2:24b  @24k = 17.3 GB
#   mistral-nemo:12b      @24k = 10.2 GB   @16k = 8.9 GB
#   qwen2.5:7b            @24k =  5.7 GB   @16k = 5.2 GB
# The context has to stay above the prompt, which is ~12,500 tokens, so 16k
# is the floor. Reasoning models are excluded: they spend the whole budget
# thinking and return nothing.
# The tiers are keyed on FREE video memory, not total. A 32 GB card with a desktop
# and the game's own browser window on it is not a 32 GB card, and a model that
# does not fit does not fail - it half-offloads to the processor and every turn
# crawls, which is worse than picking one size down. "need" is the measured
# footprint at the context we ask for, plus about a gigabyte of room to breathe.
# Measured footprints at the context we ask for, not download sizes:
#   qwen2.5:32b            19.9 GB of weights  ~23 GB loaded
#   mistral-small3.2:24b   15.2 GB of weights   17.3 GB loaded (measured on a 5090)
#   the same 24b at 8-bit  25.9 GB of weights  ~28 GB loaded - and that is the trap.
# It fits on a 32 GB card right up until the game opens its own browser window,
# and then it half-offloads and every turn crawls. Bigger is only better while it
# still fits with the rest of the desktop in the room.
$script:TIERS = @(
  @{ model="qwen2.5:32b";                             need=26000; ctx=24576; note="the big one" },
  @{ model="mistral-small3.2:24b";                    need=19000; ctx=24576; note="full scenes" },
  @{ model="mistral-nemo:12b";                        need=11000; ctx=16384; note="shorter scenes" },
  @{ model="qwen2.5:7b";                              need= 7000; ctx=16384; note="brief, but it plays" },
  @{ model="llama3.2:3b";                             need= 4500; ctx=16384; note="very brief" }
)
function Pick-Model([int]$free) {
  foreach ($t in $script:TIERS) { if ($free -ge $t.need) { return $t } }
  return @{ model="llama3.2:3b"; ctx=16384; note="on the processor - slow" }
}

# What is actually available right now. nvidia-smi knows; the registry fallback
# only knows the card's size, so it assumes a couple of gigabytes are already
# spoken for by the desktop.
function Get-VramFreeMB {
  $smi = Join-Path $env:SystemRoot "System32\nvidia-smi.exe"
  if (Test-Path $smi) {
    try {
      $n = ((& $smi --query-gpu=memory.free --format=csv,noheader,nounits 2>$null) | Select-Object -First 1) -as [int]
      if ($n -gt 0) { return $n }
    } catch {}
  }
  $t = Get-VramMB
  if ($t -gt 2500) { return $t - 2000 }
  return $t
}
# Ollama binds 127.0.0.1; "localhost" can resolve to IPv6 or route through a
# proxy, and a healthy server then looks dead.
function Test-Ollama {
  try { Invoke-RestMethod "http://127.0.0.1:11434/api/version" -TimeoutSec 3 -Proxy $null | Out-Null; return $true } catch {}
  try { if (Get-NetTCPConnection -LocalPort 11434 -State Listen -EA SilentlyContinue) { return $true } } catch {}
  return $false
}
function Wait-Proc($p, [string]$msg) {
  while (-not $p.HasExited) { Set-Status $msg; Start-Sleep -Milliseconds 250 }
}
function Find-Browser {
  $c = @(
    (Join-Path ${env:ProgramFiles(x86)} "Microsoft\Edge\Application\msedge.exe"),
    (Join-Path $env:ProgramFiles          "Microsoft\Edge\Application\msedge.exe"),
    (Join-Path ${env:ProgramFiles(x86)} "Google\Chrome\Application\chrome.exe"),
    (Join-Path $env:ProgramFiles          "Google\Chrome\Application\chrome.exe"),
    (Join-Path $env:LOCALAPPDATA          "Google\Chrome\Application\chrome.exe")
  )
  foreach ($p in $c) { if ($p -and (Test-Path $p)) { return $p } }
  return $null
}

function Stop-Everything {
  $freed = 0
  try {
    if (Test-Ollama) {
      $ps = Invoke-RestMethod "http://127.0.0.1:11434/api/ps" -TimeoutSec 5
      foreach ($m in $ps.models) {
        $freed += $m.size_vram
        if (Test-Path $OllamaEx) { & $OllamaEx stop $m.name 2>&1 | Out-Null }
      }
    }
  } catch {}
  # Ollama spawns a separate runner that actually holds the weights. Killing
  # the server alone orphans it, and it keeps the graphics memory for itself -
  # so the runner goes too, or "freed" is a lie.
  Get-Process -Name "ollama app","ollama" -EA SilentlyContinue | Stop-Process -Force -EA SilentlyContinue
  Start-Sleep -Milliseconds 400
  Get-Process -EA SilentlyContinue |
    Where-Object { $_.ProcessName -match '^(llama-server|ollama_llama_server|ollama-runner)$' } |
    Stop-Process -Force -EA SilentlyContinue
  return $freed
}

# ----------------------------------------------------------------- watch
# the game window is the session: when it goes, everything goes
$timer          = New-Object Windows.Forms.Timer
$timer.Interval = 1500
$timer.Add_Tick({
  if ($script:browser -and $script:browser.HasExited -and -not $script:closing) {
    $script:closing = $true
    $timer.Stop()
    Set-Status "Game closed. Giving the memory back..." $gold
    [void](Stop-Everything)
    Start-Sleep -Milliseconds 600
    $form.Close()
  }
})

# ------------------------------------------------------------------ play
$btnPlay.Add_Click({
  $btnPlay.Enabled = $false
  try {
    $vram = Get-VramMB
    $free = Get-VramFreeMB
    $pick = Pick-Model $free
    # a dev machine gets to disagree. MUDSKIPPERS_MODEL pins the storyteller and
    # MUDSKIPPERS_CTX its window, without editing any of this.
    if ($env:MUDSKIPPERS_MODEL) { $pick = @{ model=$env:MUDSKIPPERS_MODEL; ctx=$pick.ctx; note="pinned by MUDSKIPPERS_MODEL" } }
    if ($env:MUDSKIPPERS_CTX)   { $pick.ctx = [int]$env:MUDSKIPPERS_CTX }
    $script:model = $pick.model
    $script:ctx   = $pick.ctx
    if ($vram -gt 0) { Set-Status ("{0:N1} GB of video memory, {1:N1} GB free`n{2}  ({3})" -f ($vram/1024), ($free/1024), $script:model, $pick.note) }
    else { Set-Status ("no graphics card found`n{0}  ({1})" -f $script:model, $pick.note) }
    Start-Sleep -Milliseconds 900

    if (-not (Test-Path $OllamaEx)) {
      Set-Status "Installing Ollama - this takes a minute..."
      $p = Start-Process winget -ArgumentList "install --id Ollama.Ollama -e --accept-source-agreements --accept-package-agreements --silent" -PassThru -WindowStyle Hidden
      Wait-Proc $p "Installing Ollama - this takes a minute..."
    }
    if (-not (Test-Path $OllamaEx)) {
      Set-Status "Could not install Ollama.`nInstall it from ollama.com and try again." ([Drawing.Color]::IndianRed)
      $btnPlay.Enabled = $true; return
    }

    [Environment]::SetEnvironmentVariable("OLLAMA_CONTEXT_LENGTH","$($script:ctx)","User")
    [Environment]::SetEnvironmentVariable("OLLAMA_ORIGINS","*","User")
    [Environment]::SetEnvironmentVariable("OLLAMA_KEEP_ALIVE","30m","User")
    $env:OLLAMA_CONTEXT_LENGTH="$($script:ctx)"; $env:OLLAMA_ORIGINS="*"; $env:OLLAMA_KEEP_ALIVE="30m"

    # A SERVER THAT WAS ALREADY UP NEVER SAW ANY OF THAT. Ollama installs itself
    # into Windows startup, so on most machines it is running before this
    # launcher exists - with whatever environment it inherited at login, which on
    # a first run is no context length at all. "Start it if it is absent" then
    # skipped it every single time, the 4096 default stood, and the game quietly
    # lost two thirds of its briefing on every turn. So it gets restarted into
    # OUR environment rather than trusted.
    if (Test-Ollama) {
      Set-Status "Restarting the engine with the right settings..."
      [void](Stop-Everything)
      Start-Sleep -Milliseconds 900
    }
    Set-Status "Starting the engine..."
    if (Test-Path $OllamaAp) { Start-Process $OllamaAp } else { Start-Process $OllamaEx -ArgumentList "serve" -WindowStyle Hidden }
    for ($i=0; $i -lt 30 -and -not (Test-Ollama); $i++) { Set-Status "Starting the engine..."; Start-Sleep -Seconds 1 }
    if (-not (Test-Ollama)) { Start-Process $OllamaEx -ArgumentList "serve" -WindowStyle Hidden; Start-Sleep -Seconds 3 }

    $have = $false
    try {
      $tags = Invoke-RestMethod "http://127.0.0.1:11434/api/tags" -TimeoutSec 5
      $have = [bool]($tags.models | Where-Object { $_.name -eq $script:model })
    } catch {}
    if (-not $have) {
      Set-Status ("Downloading {0}.`nA few GB, once only - you can leave this running." -f $script:model)
      $p = Start-Process $OllamaEx -ArgumentList "pull $($script:model)" -PassThru -WindowStyle Hidden
      Wait-Proc $p ("Downloading {0}.`nA few GB, once only - you can leave this running." -f $script:model)
    }

    # AND THE BELT TO THAT PAIR OF BRACES. An environment variable is a promise
    # about a process; num_ctx baked into the model is a property of the model,
    # and it holds no matter who started the server or what it was holding when
    # it did. This costs nothing on disk - a derived model is a manifest that
    # points at the same weights - and it is the only version of this fix that
    # cannot be undone by something else on the machine.
    $script:runModel = "mudskippers-" + ($script:model -replace "[:.\/]", "-")
    try {
      $mfPath = Join-Path $env:TEMP "mudskippers.Modelfile"
      "FROM $($script:model)`nPARAMETER num_ctx $($script:ctx)" | Out-File -FilePath $mfPath -Encoding ascii
      Set-Status ("Setting the storyteller's memory to {0:N0} tokens..." -f $script:ctx)
      $p = Start-Process $OllamaEx -ArgumentList "create $($script:runModel) -f `"$mfPath`"" -PassThru -WindowStyle Hidden
      Wait-Proc $p ("Setting the storyteller's memory to {0:N0} tokens..." -f $script:ctx)
      $tags2 = Invoke-RestMethod "http://127.0.0.1:11434/api/tags" -TimeoutSec 5
      if (-not ($tags2.models | Where-Object { $_.name -like "$($script:runModel)*" })) { $script:runModel = $script:model }
    } catch { $script:runModel = $script:model }

    Set-Status "Waking the storyteller..."
    try {
      $body = @{ model=$script:runModel; prompt="hello"; stream=$false; options=@{num_predict=1} } | ConvertTo-Json -Depth 4
      Invoke-RestMethod "http://127.0.0.1:11434/api/generate" -Method Post -Body $body -ContentType "application/json" -TimeoutSec 600 | Out-Null
    } catch {}

    $url = $GameUrl + "?ai=ollama&model=" + [uri]::EscapeDataString($script:runModel)
    $exe = Find-Browser
    if ($exe) {
      # its own profile, so it opens as a real window we can watch rather than
      # a tab inside a browser that is already running
      New-Item -ItemType Directory -Path $BrowserDir -Force | Out-Null
      $script:browser = Start-Process $exe -ArgumentList @(
        "--app=$url", "--user-data-dir=`"$BrowserDir`"", "--no-first-run", "--no-default-browser-check"
      ) -PassThru
      $timer.Start()
      Set-Status ("Playing with {0}.`nClose the game window when you are done." -f $script:model) $gold
      $btnPlay.Text = "GAME IS OPEN"
    } else {
      Start-Process $url
      Set-Status "Opened in your browser.`nUse SHUT DOWN here when you finish." $gold
      $btnPlay.Enabled = $true
    }
  } catch {
    Set-Status ("Something went wrong:`n" + $_.Exception.Message) ([Drawing.Color]::IndianRed)
    $btnPlay.Enabled = $true
  }
})

# ------------------------------------------------------------------ stop
$btnStop.Add_Click({
  $script:closing = $true
  $timer.Stop()
  Set-Status "Closing the game and freeing memory..."
  try { if ($script:browser -and -not $script:browser.HasExited) { $script:browser.CloseMainWindow() | Out-Null; Start-Sleep -Milliseconds 700 } } catch {}
  try { if ($script:browser -and -not $script:browser.HasExited) { $script:browser.Kill() } } catch {}
  $freed = Stop-Everything
  if ($freed -gt 0) { Set-Status ("Freed {0:N1} GB. Goodnight." -f ($freed/1GB)) $gold }
  else { Set-Status "All clear. Goodnight." $gold }
  Start-Sleep -Milliseconds 1200
  $form.Close()
})

# closing the launcher itself tears the session down too
$form.Add_FormClosing({
  if (-not $script:closing) {
    $script:closing = $true
    try { if ($script:browser -and -not $script:browser.HasExited) { $script:browser.CloseMainWindow() | Out-Null } } catch {}
    [void](Stop-Everything)
  }
})

[void]$form.ShowDialog()
