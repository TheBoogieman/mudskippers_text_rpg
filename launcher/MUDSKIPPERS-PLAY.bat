@echo off
REM Double-click this to play MUDSKIPPERS with a storyteller running on
REM this computer. It sets everything up the first time, and just opens
REM the game every time after that.
title MUDSKIPPERS
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0mudskippers-launcher.ps1"
