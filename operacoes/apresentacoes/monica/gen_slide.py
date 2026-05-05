import sys, json, base64, os, urllib.request, urllib.error

API_KEY = os.environ.get("GEMINI_API_KEY", "AIzaSyCUcgUKtNGtudmnp7ToahYsQEZg2hMWOU8")
MODEL = "gemini-3.1-flash-image-preview"
URL = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"

slide_num = sys.argv[1] if len(sys.argv) > 1 else "01"
prompt_file = sys.argv[2] if len(sys.argv) > 2 else f"slide{slide_num}_prompt.txt"
output = sys.argv[3] if len(sys.argv) > 3 else f"slide-{slide_num}.png"

# Ler prompt de arquivo se for um caminho existente, senão usar como texto direto
if os.path.exists(prompt_file):
    with open(prompt_file, "r", encoding="utf-8") as f:
        prompt = f.read()
else:
    prompt = prompt_file

payload = {
    "contents": [{"role": "user", "parts": [{"text": prompt}]}],
    "generationConfig": {
        "responseModalities": ["TEXT", "IMAGE"],
        "temperature": 0.4
    }
}

data = json.dumps(payload).encode("utf-8")
req = urllib.request.Request(URL, data=data, headers={
    "Content-Type": "application/json",
    "x-goog-api-key": API_KEY
})

try:
    with urllib.request.urlopen(req, timeout=120) as resp:
        body = json.loads(resp.read())
except urllib.error.HTTPError as e:
    err_body = e.read().decode()[:800]
    print("HTTP ERROR:", e.code, err_body)
    sys.exit(1)

if "error" in body:
    print("API ERRO:", body["error"])
    sys.exit(1)

saved = False
for part in body["candidates"][0]["content"]["parts"]:
    if "inlineData" in part:
        img = base64.b64decode(part["inlineData"]["data"])
        os.makedirs(os.path.dirname(os.path.abspath(output)), exist_ok=True)
        with open(output, "wb") as f:
            f.write(img)
        print(f"OK {output}")
        saved = True
    elif "text" in part:
        print("TEXT:", part["text"][:300])

if not saved:
    print("SEM IMAGEM NA RESPOSTA")
    print(json.dumps(body)[:600])
