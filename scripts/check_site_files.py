from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
required = [
    "index.html",
    "styles.css",
    "script.js",
    "assets/abzumsai-logo.png",
    "robots.txt",
    "site.webmanifest",
]

missing = [name for name in required if not (ROOT / name).exists()]
if missing:
    print("Missing files: " + ", ".join(missing))
    raise SystemExit(1)

print("Site files are present")
