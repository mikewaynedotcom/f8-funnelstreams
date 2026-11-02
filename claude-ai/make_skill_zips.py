#!/usr/bin/env python3
"""Make one upload-ready ZIP per F8 skill for claude.ai (Customize > Skills > + > Create skill > Upload a skill).

Usage (from the Claude package root):  python3 claude-ai/make_skill_zips.py [out-dir, default ./skill-zips]
                                        python3 claude-ai/make_skill_zips.py out-dir ai-studio-feasibility fab-new-build

Each ZIP holds the skill folder at its top level (<name>/SKILL.md, <name>/references/...), including its copy of
F8_SYSTEM.md (added if missing), because a single uploaded skill can't see the plugin's instructions/ folder.
Standard library only. Creates files only; uploads nothing.
"""
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
out = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "skill-zips"
only = set(sys.argv[2:])
system = (ROOT / "instructions" / "F8_SYSTEM.md").read_bytes()
out.mkdir(parents=True, exist_ok=True)
count = 0
for skill in sorted((ROOT / "skills").iterdir()):
    if not (skill / "SKILL.md").is_file() or (only and skill.name not in only):
        continue
    with zipfile.ZipFile(out / f"{skill.name}.zip", "w", zipfile.ZIP_DEFLATED) as z:
        for f in sorted(skill.rglob("*")):
            if f.is_file():
                z.write(f, f"{skill.name}/{f.relative_to(skill).as_posix()}")
        if not (skill / "F8_SYSTEM.md").is_file():   # current builds already ship a copy in every skill
            z.writestr(f"{skill.name}/F8_SYSTEM.md", system)
    count += 1
print(f"wrote {count} skill ZIPs to {out}")
