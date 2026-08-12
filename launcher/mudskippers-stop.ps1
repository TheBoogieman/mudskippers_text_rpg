# =====================================================================
#  MUDSKIPPERS - give the memory back
#
#  Unloads whatever the storyteller was holding in the graphics card and
#  shuts the server down. Saves are kept in the browser and are not
#  touched by any of this.
# =====================================================================

function Say([string]$t, [string]$c = "Gray") { Write-Host $t -ForegroundColor $c }

Clear-Host
Write-Host ""
Say "  M U D S K I P P E R S" "Yellow"
Say "  giving the memory back" "DarkGray"
Write-Host ""

$exe = Join-Path $env:LOCALAPPDATA "Programs\Ollama\ollama.exe"
$running = $false
try { Invoke-RestMethod "http://127.0.0.1:11434/api/version" -TimeoutSec 3 | Out-Null; $running = $true } catch {}

if (-not $running) {
  Say "  Nothing was running. Your memory is already free." "Green"
} else {
  $freed = 0
  try {
    $ps = Invoke-RestMethod "http://127.0.0.1:11434/api/ps" -TimeoutSec 5
    if ($ps.models.Count -eq 0) {
      Say "  Nothing loaded." "Green"
    } else {
      foreach ($m in $ps.models) {
        Say ("  Unloading {0} ({1:N1} GB)..." -f $m.name, ($m.size_vram / 1GB))
        $freed += $m.size_vram
        if (Test-Path $exe) { & $exe stop $m.name 2>&1 | Out-Null }
      }
      Start-Sleep -Seconds 2
      Say ("  Freed about {0:N1} GB." -f ($freed / 1GB)) "Green"
    }
  } catch { Say "  Could not read what was loaded; shutting down anyway." "DarkYellow" }

  # close the server and the tray app so nothing holds memory in the background
  Get-Process -Name "ollama app", "ollama" -ErrorAction SilentlyContinue |
    Stop-Process -Force -ErrorAction SilentlyContinue
  Start-Sleep -Seconds 1
  Say "  The storyteller has gone home." "Green"
}

Write-Host ""
Say "  Your saves are safe - they live in the browser, not here." "DarkGray"
Say "  Run MUDSKIPPERS-PLAY.bat whenever you want to play again." "DarkGray"
Write-Host ""
Start-Sleep -Seconds 3
