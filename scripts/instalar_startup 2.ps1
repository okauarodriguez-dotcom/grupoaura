$origem  = "C:\Users\Desktop\Downloads\grupoaura\scripts\startup_fathom.vbs"
$startup = [Environment]::GetFolderPath("Startup")
$atalho  = Join-Path $startup "FathomSync.lnk"

$wsh  = New-Object -ComObject WScript.Shell
$link = $wsh.CreateShortcut($atalho)
$link.TargetPath = $origem
$link.Save()

Write-Host "Pronto! FathomSync vai iniciar automaticamente com o Windows."
Write-Host "Atalho criado em: $atalho"
