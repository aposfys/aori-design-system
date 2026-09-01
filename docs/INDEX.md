# Repository index

**Root**

- `styles.css` — the entry point. `@import` lines only.
- `README.md` — the overview.
- `SKILL.md` — Agent Skills front matter, for use in Claude Code.

**`tokens/`** — 194 custom properties across `colors`, `typography`, `fonts`, `spacing`,
`shape`, `elevation`, `motion`, `surfaces`, `patterns`.

**`base/`** — `elements.css`, the element-level defaults.

**`components/`** — 20 components, each with `.jsx`, `.d.ts` and `.prompt.md`, plus one
`.card.html` specimen per group.

| Group | Components |
|---|---|
| `core/` | Button, Tag, Mark, Rule |
| `content/` | Plate, PlateCard, Caption, PullQuote, Dot, DotChain, StepList |
| `forms/` | Input, Textarea, LedgerField, Select, Checkbox |
| `feedback/` | Notice, Dialog |
| `navigation/` | NavBar, Tabs |

**`guidelines/`** — 35 pages: the specimen cards (type, colour, spacing, shape, elevation,
motion, brand), the usage sheets `logotype.html` and `iconography.html`, and the decision
documents `photo-blending.html`, `illustration-library.html`, `image-jobs.html`,
`type-decision.html`, `illustration-proposals.html`, `photography-standins.html`,
`logo-proposals.html`.

**`assets/icons/`** — the sixteen functional icons, one SVG each, 24px grid, 2px stroke,
`currentColor`.

**`cases/`** — the six worked-case artboards (Instagram post and story, order email, A5
run card, care card, wholesale line sheet) plus the taverna website; their captures live
in `docs/brandbook/cases/`.

**`templates/`** — starting folders a consuming project can copy.

- `brand-book/` — A4 landscape, print-ready.
- `collection-grid/` — the shop index; closed runs stay visible.
- `media-kit/` — the press sheet.

**`ui_kits/storefront/`** — home and product page, click-through, composed from the
components.

**`assets/`** — `illustrations-v2/` (39 print masters), `illustrations-v2-web/` (41 900px
web copies), `motifs-v2/` (discs and the four SVG marks), `patterns/`, `textures/`,
`logos/`, `products/`, `photography/` (placeholders — see
[Provenance](PROVENANCE.md)).

**`lib/`** — the render runtime the specimen cards and templates load: `ds-bundle.js`,
`support.js`, `doc-page.js`. Not authored here and not part of the language; kept only so
the HTML in `components/`, `templates/` and `ui_kits/` opens.

**`docs/`** — `aori-design-system.pdf`, the whole system as one exported document.

## Intentional additions

- **`Mark`** — a wrapper for the painted motif discs. The source had no icon component and
  something had to enforce the 40px minimum and the circle shape.
- **`LedgerField`** — the clerical register needed a form field visually distinct from the
  warm register. Without it the stone palette had no component to live in.

Two further additions were specified but never built, and are **not** in `components/`:
**`Stamp`** (the emblem-as-seal, which the emblem pairing rule wants) and **`LedgerRow`**
(the clerical table row that would finish the stone register). Earlier drafts listed both as
if they shipped.
