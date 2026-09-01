#!/usr/bin/env python3
"""Regenerate tokens/tokens.json from tokens/*.css. Run from the repository root."""
import json, re, glob, os

def parse(css):
    out = {}
    for m in re.finditer(r'(--[a-zA-Z0-9-]+)\s*:\s*([^;}]+)[;}]', css):
        name, val = m.group(1)[2:], " ".join(m.group(2).split())
        if val.startswith("var("):
            out[name] = {"$value": "{" + val[4:-1].strip()[2:] + "}", "$type": "alias"}
        elif re.fullmatch(r'#[0-9a-fA-F]{3,8}', val) or val.startswith(("rgba(", "rgb(")):
            out[name] = {"$value": val, "$type": "color"}
        elif re.fullmatch(r'-?[\d.]+(px|rem|em)', val):
            out[name] = {"$value": val, "$type": "dimension"}
        elif re.fullmatch(r'[\d.]+m?s', val):
            out[name] = {"$value": val, "$type": "duration"}
        elif val.startswith("cubic-bezier"):
            out[name] = {"$value": val, "$type": "cubicBezier"}
        else:
            out[name] = {"$value": val}
    return out

doc = {"$description": "AORI design tokens. Generated from tokens/*.css by tools/build_tokens.py — edit the CSS, then regenerate; never edit this file."}
total = 0
for f in sorted(glob.glob("tokens/*.css")):
    group = os.path.splitext(os.path.basename(f))[0]
    toks = parse(open(f, encoding="utf-8").read())
    if toks:
        doc[group] = toks; total += len(toks)
json.dump(doc, open("tokens/tokens.json", "w", encoding="utf-8"), indent=2)
print(f"tokens/tokens.json: {total} tokens in {len(doc)-1} groups")
