from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
html = (ROOT / "index.html").read_text(encoding="utf-8")
links = re.findall(r"href=\"([^\"]+)\"", html)
required = [
    "https://github.com/AbzumsAI",
    "https://t.me/AbzumsAI",
    "https://github.com/AbzumsAI/Assignments",
    "https://github.com/AbzumsAI/Assignments/tree/main/MachineLearningHomework",
    "https://github.com/AbzumsAI/Notebooks",
    "https://github.com/AbzumsAI/Problems",
    "https://github.com/AbzumsAI/PreTest",
    "https://github.com/AbzumsAI/Latex",
    "https://github.com/AbzumsAI/QA-Bot",
    "https://github.com/AbzumsAI/.github",
    "https://github.com/AbzumsAI/abzumsai.github.io",
    "https://github.com/amirhoss2004/RavTan_project",
    "https://medcardy.com",
    "https://github.com/2-2-MedCardy/2.2.1-Website-MedCardy",
    "https://github.com/rezaHaj/Alborz_AI_project3rdphase_Reza_Hg",
    "https://github.com/dehghan1384/backtest",
    "https://github.com/alinesmaeili/Final-Project",
    "https://imanm02.github.io/",
    "https://www.sharif.ir/",
    "https://web.unisa.it/en/university",
    "https://www.cuhk.edu.hk/",
    "https://www.ibcol.org/",
    "https://t.me/micromaster_sharif",
    "https://docs.ce.sharif.edu/",
    "https://neurailogic.com/",
    "https://www.mpi-inf.mpg.de/home",
    "https://hkust.edu.hk/",
    "https://tapsi.ir/",
    "https://www.epfl.ch/en/",
    "https://ist.ac.at/en/institute/",
    "https://t.me/Lets_CONNECT_fa",
    "https://t.me/AbzumsAI/72",
    "https://t.me/AbzumsAI/75",
    "https://t.me/AbzumsAI/45",
]

missing = [link for link in required if link not in links]
if missing:
    print("Missing links: " + ", ".join(missing))
    raise SystemExit(1)

print(f"Checked {len(links)} links")
