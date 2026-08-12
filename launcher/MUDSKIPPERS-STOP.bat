@echo off
REM Frees the memory the storyteller was holding. Safe to run any time -
REM your saves live in the browser and are not touched by this.
title MUDSKIPPERS - freeing memory
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0mudskippers-stop.ps1"
