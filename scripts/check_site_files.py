from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
required = [
    "index.html",
    "styles.css",
    "script.js",
    "assets/abzumsai-logo.png",
    "robots.txt",
    "site.webmanifest",
]

html = (ROOT / "index.html").read_text(encoding="utf-8")
sources = re.findall(r"(?:src|data-src)=\"([^\"]+)\"", html)
required.extend(source for source in sources if not source.startswith("http"))

missing = [name for name in required if not (ROOT / name).exists()]
if missing:
    print("Missing files: " + ", ".join(missing))
    raise SystemExit(1)

print("Site files are present")
