# =====================================================================
#  MUDSKIPPERS - local AI launcher
#
#  For a player who should never have to think about any of this. It
#  finds the graphics card, picks a model that fits it, installs Ollama
#  if it is missing, downloads the model, starts the server with the
#  settings this game actually needs, and opens the game already wired
#  to it.
#
#  Run it with MUDSKIPPERS-PLAY.bat. Free the memory afterwards with
#  MUDSKIPPERS-STOP.bat.
# =====================================================================

$ErrorActionPreference = "Stop"
$GameUrl = "https://theboogieman.github.io/mudskippers_text_rpg/"

function Say([string]$t, [string]$c = "Gray") { Write-Host $t -ForegroundColor $c }
function Head([string]$t) { Write-Host ""; Write-Host $t -ForegroundColor Yellow; Write-Host ("-" * $t.Length) -ForegroundColor DarkYellow }

Clear-Host
Write-Host ""
Say "  M U D S K I P P E R S" "Yellow"
Say "  setting up a storyteller on this computer" "DarkGray"
Write-Host ""

# ---------------------------------------------------------------- VRAM
# Win32_VideoController reports at most 4GB (a 32-bit field), so it is
# useless on modern cards. nvidia-smi is exact; the registry holds the
# true size for everyone else.
function Get-VramMB {
  $smi = Join-Path $env:SystemRoot "System32\nvidia-smi.exe"
  if (Test-Path $smi) {
    try {
      $v = & $smi --query-gpu=memory.total --format=csv,noheader,nounits 2>$null
      $n = ($v | Select-Object -First 1) -as [int]
      if ($n -gt 0) { return $n }
    } catch {}
  }
  $best = 0
  try {
    $base = "HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e968-e325-11ce-bfc1-08002be10318}"
    Get-ChildItem $base -ErrorAction SilentlyContinue | ForEach-Object {
      $q = (Get-ItemProperty $_.PSPath -ErrorAction SilentlyContinue)."HardwareInformation.qwMemorySize"
      if ($q) { $mb = [int]($q / 1MB); if ($mb -gt $best) { $best = $mb } }
    }
  } catch {}
  return $best
}

Head "1 of 5  Looking at your graphics card"
$vram = Get-VramMB
$gpu = (Get-CimInstance Win32_VideoController -ErrorAction SilentlyContinue |
        Sort-Object -Property AdapterRAM -Descending | Select-Object -First 1).Name
if ($gpu) { Say "  $gpu" }
if ($vram -gt 0) { Say ("  {0:N1} GB of video memory" -f ($vram / 1024)) }
else { Say "  No dedicated graphics memory found - it will run on the processor instead." "DarkYellow" }

# --------------------------------------------------------------- model
# Quality matters less than starting at all, so each tier is the biggest
# model that fits comfortably alongside a 24k context window.
# Reasoning models are deliberately excluded: they spend their whole
# budget thinking and hand the game an empty reply.
if     ($vram -ge 18000) { $model = "mistral-small3.2:24b"; $note = "the good one" }
elseif ($vram -ge  9000) { $model = "mistral-nemo:12b";     $note = "a solid middle" }
elseif ($vram -ge  5000) { $model = "llama3.2:3b";          $note = "small and quick" }
else                     { $model = "llama3.2:3b";          $note = "small - expect slow turns on a processor" }

Say ""
Say "  Chosen storyteller: $model  ($note)" "Green"

# -------------------------------------------------------------- ollama
Head "2 of 5  Ollama"
$exe = Join-Path $env:LOCALAPPDATA "Programs\Ollama\ollama.exe"
if (-not (Test-Path $exe)) {
  Say "  Not installed. Installing it now - this takes a minute." "DarkYellow"
  try {
    winget install --id Ollama.Ollama -e --accept-source-agreements --accept-package-agreements --silent | Out-Null
  } catch {
    Say "  Could not install automatically." "Red"
    Say "  Please install it by hand from https://ollama.com and run this again." "Red"
    Read-Host "  Press Enter to close"; exit 1
  }
}
if (-not (Test-Path $exe)) {
  Say "  Installed, but not where expected. Restart the computer and try again." "Red"
  Read-Host "  Press Enter to close"; exit 1
}
Say "  Ready." "Green"

# ------------------------------------------------------------ settings
# The one that actually matters: this game sends a ~12,500 token prompt
# and Ollama's default window is 4096, which would throw most of the
# game's own rules away before the model ever saw them.
Head "3 of 5  Settings"
[Environment]::SetEnvironmentVariable("OLLAMA_CONTEXT_LENGTH", "24576", "User")
[Environment]::SetEnvironmentVariable("OLLAMA_ORIGINS", "*", "User")
[Environment]::SetEnvironmentVariable("OLLAMA_KEEP_ALIVE", "30m", "User")
$env:OLLAMA_CONTEXT_LENGTH = "24576"; $env:OLLAMA_ORIGINS = "*"; $env:OLLAMA_KEEP_ALIVE = "30m"
Say "  Room for the game's full rulebook, and permission to talk to it." "Green"

# Ollama binds 127.0.0.1. Asking for "localhost" can resolve to IPv6 first or
# get routed through a system proxy, and then a perfectly healthy server looks
# dead - so ask the address it actually listens on, and take a listening port as
# proof either way.
function Test-Ollama {
  try { Invoke-RestMethod "http://127.0.0.1:11434/api/version" -TimeoutSec 3 -Proxy $null | Out-Null; return $true } catch {}
  try { if (Get-NetTCPConnection -LocalPort 11434 -State Listen -EA SilentlyContinue) { return $true } } catch {}
  return $false
}
$up = Test-Ollama
if (-not $up) {
  $app = Join-Path $env:LOCALAPPDATA "Programs\Ollama\ollama app.exe"
  if (Test-Path $app) { Start-Process -FilePath $app } else { Start-Process -FilePath $exe -ArgumentList "serve" -WindowStyle Hidden }
  for ($i = 0; $i -lt 30 -and -not $up; $i++) { Start-Sleep -Seconds 1; $up = Test-Ollama }
  if (-not $up) {
    Start-Process -FilePath $exe -ArgumentList "serve" -WindowStyle Hidden
    for ($i = 0; $i -lt 20 -and -not $up; $i++) { Start-Sleep -Seconds 1; $up = Test-Ollama }
  }
}
if ($up) { Say "  The storyteller's engine is running." "Green" }
else {
  # not fatal: the game says so plainly if it cannot reach it, and that is a
  # better place to find out than a script the player cannot read
  Say "  Could not confirm it started. Carrying on anyway - if the game says it" "DarkYellow"
  Say "  cannot connect, restart the computer and run this again." "DarkYellow"
}

# --------------------------------------------------------------- model
Head "4 of 5  The storyteller"
$have = $false
try {
  $tags = Invoke-RestMethod "http://127.0.0.1:11434/api/tags" -TimeoutSec 5
  $have = [bool]($tags.models | Where-Object { $_.name -eq $model })
} catch {}
if ($have) {
  Say "  Already downloaded." "Green"
} else {
  Say "  Downloading $model. This is the slow part - a few GB, once only." "DarkYellow"
  Say "  You can leave it running and come back." "DarkGray"
  Write-Host ""
  & $exe pull $model
  if ($LASTEXITCODE -ne 0) {
    Say "  The download failed. Check the internet connection and run this again." "Red"
    Read-Host "  Press Enter to close"; exit 1
  }
}

# ---------------------------------------------------------------- warm
Say ""
Say "  Waking it up..." "DarkGray"
try {
  $body = @{ model = $model; prompt = "hello"; stream = $false;
             options = @{ num_predict = 1 } } | ConvertTo-Json -Depth 4
  Invoke-RestMethod "http://127.0.0.1:11434/api/generate" -Method Post -Body $body `
    -ContentType "application/json" -TimeoutSec 300 | Out-Null
  Say "  Awake." "Green"
} catch { Say "  (it will wake on the first turn instead)" "DarkGray" }

# ---------------------------------------------------------------- play
Head "5 of 5  Opening the game"
$url = "$GameUrl" + "?ai=ollama&model=" + [uri]::EscapeDataString($model)
Start-Process $url
Say "  The game is set to use $model. You do not need to touch Settings." "Green"
Write-Host ""
Say "  When you have finished playing, run MUDSKIPPERS-STOP.bat" "Yellow"
Say "  to give the memory back to your computer." "Yellow"
Write-Host ""
Read-Host "  Press Enter to close this window"
