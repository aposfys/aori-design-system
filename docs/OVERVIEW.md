# Repository overview

The detail that used to live in the README, kept current here.

## What the system is

A playful, illustration-driven design system — watercolour plates, flat pigment, zero
radius, no shadows — for websites and brands that should feel handmade. Not tied to any
product. Its flagship case is **AÓRI**, the handmade-jewellery workshop the system grew out
of (real on Instagram; every collection, price and run count in these pages invented); a
harbourside **taverna** is built from the same tokens to prove the system carries across
products.

Everything is watercolour and gouache on cotton paper. **Terracotta acts, aegean links,
saffron highlights** — four to six colours carry a composition. Three faces, three jobs:
GFS Didot for display, Commissioner for annotation and UI, Source Serif 4 for body. Corner
radius is zero and there are no shadows; depth is a 2px carbon rule, a 1px hairline, or a
flat pigment field — never a blur.

## Contents and status

| | Section | Status |
|---|---|---|
| 01 | Philosophy — what the workshop is, and the voice it speaks in | Documented |
| 02 | Logotype — clear space, minimums, placement, eight misuses | Documented |
| 03 | Colour — two registers, laid flat and opaque | Documented |
| 04 | Typography — three faces, three jobs | Documented |
| 05 | Illustration & photography — the painted hand, the spot register, and the open question | Documented |
| 06 | Iconography — the motif law, plus a sixteen-icon functional set | Documented |
| 07 | Grid & layout — spacing, edges, elevation, motion | Documented |
| 08 | Application — components, templates, storefront kit | Documented |
| 09 | In use — the workshop across six channels, and a taverna website | Documented |

20 components, 36 guideline pages, 194 tokens (machine-readable in `tokens/tokens.json`),
16 icons, 8 painted spots, 6 worked cases. `styles.css` is the entry point; `SKILL.md`
carries Agent Skills front matter for use in Claude Code.

## The tools

- `tools/build_tokens.py` regenerates `tokens/tokens.json` from `tokens/*.css` — edit the
  CSS, regenerate, never edit the JSON.
- `tools/check_contrast.py` is the contrast gate: every declared role pair is measured
  against its WCAG bar on every run, and it exits non-zero if a token edit reopens a
  failure.

## What is real and what is placeholder

- **No logo was invented.** The wordmark supplied by the workshop is the only mark. The
  five painted files that arrived named as logos contain no readable brand name; they are
  filed as **emblems** and always sit subordinate to the wordmark.
- **The product data is invented in both cases.** The workshop exists (the Instagram
  account is real); its collections, prices, run counts and address here are placeholders.
  The taverna is entirely fictional. Both are labelled as such wherever they appear.
- **Eight photography paths hold generated placeholder tiles** that say so on their face.
  The photography route is still an open decision — see
  [PROVENANCE.md](PROVENANCE.md#open-decisions).
- **The spot register is grown here** by the seeded painting engine in
  `tools/spot-painter.html`, and claims no provenance from the painted plates.

## Taking it to a new product

The palette is not decoration-first — the thirteen pigments are sampled by frequency from
the paintings. Commission plates in the same hand (or start from this library) and let the
palette come from the paintings; the registers, type, icons and rules carry unchanged. The
taverna case (`cases/taverna-home.html`) was built exactly this way, with nothing
reskinned.
