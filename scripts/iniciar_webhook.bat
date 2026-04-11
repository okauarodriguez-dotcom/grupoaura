@echo off
set NGROK="C:\Users\Desktop\AppData\Local\ngrok\ngrok.exe"
set SCRIPT_DIR=%~dp0

echo ============================================
echo   FathomSync — Webhook + Tunnel
echo ============================================
echo.

REM Inicia o webhook Python em background
echo [1/2] Iniciando webhook local (porta 5678)...
start "FathomSync Webhook" python "%SCRIPT_DIR%zapier_formatter.py"
timeout /t 2 /nobreak >nul

REM Inicia o ngrok para expor o webhook
echo [2/2] Abrindo tunnel ngrok...
echo.
echo Copie a URL "Forwarding" abaixo e cole no Zapier:
echo (formato: https://xxxx.ngrok-free.app)
echo.
%NGROK% http --domain=unlatticed-evon-wrigglier.ngrok-free.dev 5678

pause
