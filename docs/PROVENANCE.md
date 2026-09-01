# Provenance, open decisions and known gaps

## What was provided, and what was made

**Provided by the user**

| Source | What it is |
|---|---|
| `@aori__jewelry` (Instagram) | 6 posts, 1,651 followers. Bio: "AŌRI Handmade Jewelry / Silver925 Jewelry". Read from a user screenshot — Instagram blocks automated access. |
| Painted artwork, 39 files | Watercolour and gouache on cotton paper. Places, figures, motifs, repeats, grounds, emblems. Staged in `assets/illustrations-v2/` (print masters) and `assets/illustrations-v2-web/` (900px web copies). |
| `wordmark.svg` | The brand mark, a vector trace of painted lettering. |
| A prior design system | 20 compiled components, recovered from its bundle and rebuilt as source. The recovered source is **not** in this repository. |

**Made here, and flagged as such**

- **The drawn register** — eight bench drawings in `assets/illustrations-drawn/`, authored
  in-repo in the functional icons' construction (96px grid, 2px carbon, one pigment
  accent). They are not paintings and claim no provenance from the painted plates; the
  motif law (never redraw a painted mark) is untouched.

- **Photography** — nine free-licence Pexels photographs were sourced into
  `assets/photography/` and referenced throughout the guidelines. **The image files are not
  in this repository** — they were absent from the source folder this was published from.
  The eight paths the guidelines call for now hold generated placeholder tiles that say so
  on their face, so the pages lay out correctly and nothing passes itself off as a
  photograph. None showed an AORI piece in any case.
- **Grounds** — three procedural receipt-paper textures in `assets/textures/`. A real scan
  drops straight in over them.
- **Product data** — collections, prices, run counts and the Heraklion workshop are all
  invented, at the user's instruction, and labelled placeholder wherever they appear.

**No logo was invented.** The wordmark supplied by the user is the only mark. The five
painted files that arrived named as logos contain no readable brand name; they are filed as
**emblems** and always sit subordinate to the wordmark.

## Open decisions

1. **The photography route** — 1, 2, 3 or 4 in
   [the specification](SPECIFICATION.md#the-photography-problem--read-this-before-shooting-anything).
   Blocks the shop pages from being real.
2. **Nine positions on photography** — which one, if route 2, 3 or 4.
3. **Fonts** — GFS Didot, Commissioner and Source Serif 4 are Google Fonts substitutions.
   If AORI owns licensed faces, send the files.
4. **The wordmark** — the file is a vector trace with an oil-pastel filter that drops out in
   print and in any capture. The traced outlines are used flat, so letterforms are exact and
   the pastel texture is gone. Send the original painted artwork at full size.
5. **Three motifs have no painting** — a spiral, a hoop and a beaded strand painted as marks
   would complete the set. Currently two of the six are disc crops standing in.

## This edition

Published from the working folder, which held roughly 1 GB of generator output, scratch runs
and duplicated assets around a much smaller system. What survives is the system; what was
cut is listed here so nothing looks lost.

**Cut**

- Generator and experiment code — `generate.py`, `organize.py`, `trials.py`, `run_both.py`,
  `shot-list.json`, `__pycache__/`, and the paint engine and prior bundle.
- Experiment output — `generated-v2/`, `generated-rejected/`, `generated-test/`,
  `generated-sample/`, `generated-proving/`, `trials/` (~270 MB of candidate renders).
- `uploads/` (455 MB) — hash-suffixed duplicates of assets that already live under `assets/`
  with clean names. Every document that pointed into it now points at the canonical file
  instead.
- Source material that is not the system — `aori-images/` (phone photographs),
  `illustrations-refernce/`, an empty `assets 2/`, `.DS_Store`, `.thumbnail`,
  `thumbnail.html`.
- `_ds_manifest.json` and `_adherence.oxlintrc.json` — both generated against the compiled
  bundle, and stale the moment the source moved.

**Repaired**

The documents carried 199 broken image references before this pass and carry none now.

- 101 references into `uploads/` were repointed to `assets/illustrations-v2-web/`, or to the
  new `assets/audit/` for the 21 plates and rejected examples that only `asset-audit.html`
  uses.
- 69 references to three folders that never existed in this tree —
  `assets/illustrations/`, `assets/motifs/`, `assets/brand-images/` — were resolved to their
  real homes under `illustrations-v2-web/` and `motifs-v2/`.
- Four SVG marks (`crescent`, `mountain`, `sea`, `wall`) and `logos/01-wordmark.svg` were
  recovered out of `uploads/` before it was dropped; they were referenced but unfiled.
- The specimen cards and templates loaded four identical copies of `support.js` and a bundle
  from the repository root. Those are deduplicated into `lib/`.

**Corrected**

The component table once listed `Stamp` and a `data/` group containing `LedgerRow`. Neither
exists; both are now marked as specified-but-unbuilt. The colour cards printed 22 hex labels
that did not match the tokens they render; those are now written from the tokens. An earlier
pass changed the token count from 187 to 192 — 187 was right (unique properties; 192 counted
duplicate declarations) and it is restored.

**Known gaps**

- The eight photography placeholders described above.
- `lib/` is compiled output, not source. The specimen cards and templates will not render
  without it, which is the only reason it is here.
- `assets/illustrations-v2/` is 180 MB of print masters. Everything on screen uses the 900px
  copies in `illustrations-v2-web/`; the masters are here for print only, and are the
  obvious first candidate for Git LFS if the repository needs to get smaller.

## Reference material removed

The working folder carried two sets of material that belong to someone else, and neither is
in this repository:

- **`reference/`** — the prior design system's recovered source, its quarantined UI kit, the
  artist research and the theme references.
- **`assets/audit/`** and the `asset-audit.html` page that displayed it — the thirty-three
  scans supplied as the style brief. The system's own audit page described them as
  *"belonging to another artist"* and ruled that they *"must not appear in any AORI
  output."* Two illustration tiles that drew on the same set were removed from
  `step1-palette-and-set.html` and `illustration-proposals.html`.

Both were present in the first published commit. That commit was replaced rather than added
to, so the material is not recoverable from the history either.
