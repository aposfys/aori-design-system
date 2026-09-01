#!/usr/bin/env python3
"""The contrast gate. Run from the repository root; exits 1 if any declared
role pair falls under its WCAG bar, so a token edit cannot quietly reopen a
failure. Pairs are (foreground, background, minimum, why) — text roles carry
4.5:1, large/display and non-text carry 3:1. Add a pair whenever a token takes
on a new text job."""
import re, sys

CSS = "tokens/colors.css"

# (foreground token, background token, minimum ratio, what the pair is)
PAIRS = [
    ("text-body",        "surface-page",    4.5, "body prose on the page"),
    ("text-muted",       "surface-page",    4.5, "captions and hints"),
    ("text-form",        "surface-ledger",  4.5, "clerical ink on stone"),
    ("link",             "surface-page",    4.5, "body links"),
    ("link-hover",       "surface-page",    4.5, "hovered links"),
    ("link-visited",     "surface-page",    4.5, "visited links"),
    ("text-on-pigment",  "accent",          4.5, "primary button label"),
    ("text-on-pigment",  "accent-hover",    4.5, "primary button label, hovered"),
    ("text-on-pigment",  "accent-press",    4.5, "primary button label, pressed"),
    ("status-stop-ink",  "surface-page",    4.5, "stop spoken as text"),
    ("status-warm-ink",  "surface-page",    4.5, "warm spoken as text"),
    ("status-calm-ink",  "surface-page",    4.5, "calm spoken as text"),
    ("status-go-ink",    "surface-page",    4.5, "go spoken as text"),
    ("status-stop-ink",  "surface-raised",  4.5, "field error line on raised paper"),
    ("text-display",     "surface-toned",   4.5, "display type on the painted mount"),
    ("focus-ring",       "surface-page",    3.0, "the focus ring on the page"),
    ("rule-ink",         "surface-page",    3.0, "the carbon rule"),
    ("accent",           "surface-page",    3.0, "the primary fill against the page"),
]

def tokens(css):
    out = {}
    for m in re.finditer(r'(--[a-zA-Z0-9-]+)\s*:\s*([^;}]+)[;}]', css):
        out[m.group(1)[2:]] = " ".join(m.group(2).split())
    return out

def resolve(name, toks, depth=0):
    if depth > 12 or name not in toks:
        return None
    v = toks[name]
    if v.startswith("var("):
        return resolve(v[4:-1].strip()[2:], toks, depth + 1)
    return v if re.fullmatch(r'#[0-9a-fA-F]{6}', v) else None

def luminance(hexval):
    r, g, b = (int(hexval[i:i + 2], 16) / 255 for i in (1, 3, 5))
    lin = lambda c: c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = lin(r), lin(g), lin(b)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def ratio(a, b):
    la, lb = luminance(a), luminance(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)

def main():
    toks = tokens(open(CSS, encoding="utf-8").read())
    failed = 0
    for fg, bg, minimum, why in PAIRS:
        a, b = resolve(fg, toks), resolve(bg, toks)
        if a is None or b is None:
            print(f"FAIL  --{fg} / --{bg}: token missing or not a resolvable hex")
            failed += 1
            continue
        r = ratio(a, b)
        mark = "ok  " if r >= minimum else "FAIL"
        if r < minimum:
            failed += 1
        print(f"{mark}  {r:5.2f}:1  (needs {minimum})  --{fg} on --{bg} — {why}")
    if failed:
        print(f"\n{failed} pair(s) under the bar. The gate is closed.")
        sys.exit(1)
    print(f"\nAll {len(PAIRS)} pairs clear. The gate is open.")

if __name__ == "__main__":
    main()
