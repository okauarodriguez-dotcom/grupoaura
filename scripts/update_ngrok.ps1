$dest = "C:\Users\Desktop\AppData\Local\ngrok"
New-Item -ItemType Directory -Force -Path $dest | Out-Null
Write-Host "Baixando ngrok..."
Invoke-WebRequest -Uri "https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-windows-amd64.zip" -OutFile "$dest\ngrok.zip" -UseBasicParsing
Write-Host "Extraindo..."
Expand-Archive -Path "$dest\ngrok.zip" -DestinationPath $dest -Force
Write-Host "Configurando authtoken..."
& "$dest\ngrok.exe" config add-authtoken 3BV3Y1zGVQ7BsHaygPnGcbeEvlM_44WVLhJLetY1KjJUbqz9L
Write-Host ""
& "$dest\ngrok.exe" version
Write-Host "ngrok atualizado com sucesso!"
