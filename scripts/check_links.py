from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
html = (ROOT / "index.html").read_text(encoding="utf-8")
links = re.findall(r"href=\"([^\"]+)\"", html)
required = [
    "https://github.com/AbzumsAI",
    "https://t.me/AbzumsAI",
    "https://github.com/AbzumsAI/Assignments",
    "https://github.com/AbzumsAI/Notebooks",
    "https://github.com/AbzumsAI/Slides",
    "https://github.com/AbzumsAI/Problems",
    "https://github.com/AbzumsAI/PreTest",
    "https://github.com/AbzumsAI/Latex",
    "https://github.com/AbzumsAI/QA-Bot",
    "https://github.com/AbzumsAI/.github",
    "https://github.com/AbzumsAI/abzumsai.github.io",
]

missing = [link for link in required if link not in links]
if missing:
    print("Missing links: " + ", ".join(missing))
    raise SystemExit(1)

print(f"Checked {len(links)} links")
