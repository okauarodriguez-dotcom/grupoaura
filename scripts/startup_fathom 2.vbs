Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "powershell -WindowStyle Hidden -Command ""Start-Process python -ArgumentList 'C:\Users\Desktop\Downloads\grupoaura\scripts\zapier_formatter.py' -WindowStyle Hidden""", 0, False
WScript.Sleep 3000
WshShell.Run """C:\Users\Desktop\AppData\Local\ngrok\ngrok.exe"" http --domain=unlatticed-evon-wrigglier.ngrok-free.dev 5678", 0, False
