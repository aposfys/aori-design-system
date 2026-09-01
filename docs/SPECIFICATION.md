# The written specification

## Content fundamentals

The voice is a maker talking, not a brand announcing.

**Person.** First person plural for the workshop, second person for the reader. "We make
twelve. When they are gone we make something else." Never "AORI is proud to present".

**Casing.** Sentence case in prose. Uppercase only in the annotation voice — labels,
buttons, metadata, section markers — where it is always tracked. Display headings are
uppercase and tracked; body copy never is.

**Numbers are load-bearing.** Twelve in a run. Four left. Silver 925. 24 mm. Two working
days. The brand's honesty is arithmetic, so numbers are stated plainly and never rounded up
for effect.

**Scarcity is stated, never sold.** "Four left of twelve", not "Selling fast". A closed run
says "All twelve gone" and keeps its page. The piece stays visible; only the price goes.

**No exclamation marks. No emoji.** The Instagram bio uses a decorative unicode rule
(`—— · · ✳ · ·` ) — that is the one ornamental flourish in the brand and it belongs to the
bio only.

**Greek is reserved for the brand book.** Product surfaces are Latin only. Place names keep
their Latin spelling: Psiloritis, Livyko, Elia, Knosos.

Examples, verbatim from the system:

> Made by hand in Heraklion, in runs of twelve, and named after the places they came from.

> Silver 925, hammered on the bench and left matte. Named for the beach below the village,
> where the water goes flat at six in the evening.

> We will make more, but not the same.

## Colour

Two registers, and they do not mix arbitrarily.

**Lime** is the ground: sun-bleached plaster, not white. `--paper-200` `#fbf7ef` carries
every page. `--stock-100` `#efe3cf` is the toned paper the paintings are drawn on, used as
the mount behind a painted plate so it never floats.

**Pigments** are sampled by frequency out of the paintings themselves — thirteen values,
laid flat and opaque, never tinted, shaded or gradiented.

- `--pigment-aegean` `#1890a8` — the loudest colour in the work. Takes the links.
- `--pigment-terracotta` `#c05a28` — acts. Every primary button.
- `--pigment-saffron` `#c0a860` — highlights. Never a field.
- `--pigment-olive` `#5f7a46`, `--pigment-forest` `#34513c`, `--pigment-rust` `#8a3a22`,
  `--pigment-clay` `#a87860`, and the water range `--pigment-water` / `-shallow` / `-haze`.

**Stone** is the clerical register: `--ledger-100` `#f1f1ee` with form-green ink
`--ledger-ink` `#4a5a52` and 1px hairlines. Used for anything administrative — sizing,
shipping, order status, specification.

Rule: **terracotta acts, aegean links, saffron highlights.** Four to six colours carry a
composition; never more. Maximum two background colours in any one document.

## Type

Three faces, three jobs. All Google-hosted; **no licensed font files were provided**, and
these are the closest available match to the painted lettering.

| Role | Face | Use |
|---|---|---|
| Display | **GFS Didot** | Names, headings, prices. Uppercase and tracked `.09em`–`.14em`. Greek-capable, which is why it won. |
| Annotation / UI | **Commissioner** | Labels, buttons, metadata, nav. Always uppercase, tracked `.07em`–`.14em`, weight 600. |
| Body | **Source Serif 4** | Prose, descriptions, form values. Sentence case, 15–17px, line-height 1.7–1.75. |

Minimum sizes: 24px in a 1920×1080 slide, 12pt in print, 44px hit targets in a mobile mock.

## Illustration

**One hand, two jobs.** Everything is watercolour and gouache on cotton paper — saturated
fields held inside a drawn contour, the paper reading through the lighter passages, nothing
opaque white, nothing greyed to recede.

- **The full plate** — 23 places, figures and still lifes. Mounted with a 5px unpainted
  margin on toned stock.
- **The lifted detail** — 6 motifs, each one cut out of a finished painting. Four are
  knocked out of their painted field, two are cropped to a disc. **All six are circles.**
  A mark is never invented: if a subject has no painting, it has no mark.

**Motifs are circles. Patterns are squares.** That is the shape rule, and it holds
everywhere.

Three patterns (`wave`, `spiral`, `olive`) at three strengths — full for packaging and one
hero band, 30% for section grounds, 8% behind long prose. Never two patterns on one screen.
Applied as a `::before` layer so the opacity never touches the text.

## The photography problem — read this before shooting anything

The paintings are the loudest thing in the system: maximum chroma, hard contour, white
paper. Every treatment that makes a photograph quieter moves it *further* from them.
Converting a photograph into flat washes with a drawn edge is image generation, not CSS.

Four routes, documented in full at `guidelines/photo-blending.html` §05b:

1. **Paintings are the product imagery.** Photographs live only on a plain spec panel. Free.
2. **Have the pieces painted.** Send the artist the actual jewellery. Costs artist time.
3. **Shoot on the painted paper.** Lay pieces on a real painted sheet in daylight. One
   afternoon.
4. **Make the split the identity.** Painted world for romance, clerical sheet for evidence.
   Free.

**Recommendation: 3 now, 2 over time.** This decision is still open.

Nine positions on how a photograph may sit beside a painting are rendered live at
`guidelines/illustration-library.html` §04.

Where photography is untreated regardless of route: sizing and fit shots, the one detail
shot showing hallmark and finish, and anything sent to a stockist or a magazine.

## Image jobs — which picture goes where

Documented in full at `guidelines/image-jobs.html`.

| Surface | Painting | Photograph |
|---|---|---|
| Home hero | **Yes** | Never — a photograph does not open the site |
| Collection grid tile | **Yes**, 3:4 | No — a tile is a *place*, not a piece |
| Product grid tile | No | **Yes**, square |
| Product hero and gallery | No | **Yes** |
| Sizing, shipping, spec | No | **Yes**, untreated |
| Packaging | **Yes** | Never |
| Instagram place post | **Yes** | No |
| Instagram product post | No | **Yes** |

Photographs go **full bleed with no border** — a border on a photograph reads as a frame,
and the brand does not frame things. Paintings keep the toned mount and the 5px unpainted
margin.

## Surface, edge, depth

- **Corner radius is zero.** Everywhere. The only circles in the system are the motif discs
  and the platform-imposed Instagram avatar mask.
- **No shadows.** Depth comes from a 2px carbon rule, a 1px hairline, or a flat pigment
  field — never from a blur.
- **Cards** are a 1px `inset` box-shadow on `--paper-400`, or a flat `--paper-100` panel.
  No border-radius, no drop shadow, no coloured left border.
- **Rules** are structural: 2px carbon `--rule-ink` for a section break, 1px `--rule-hair`
  for a row division inside one.
- **No transparency or blur** except one case: a `linear-gradient` scrim over a hero
  painting so white type stays legible. Never a frosted panel.

## Motion

Restrained to the point of near-absence. Opacity and position only, 140–220ms, standard
ease. No bounce, no spring, no scale-on-hover, no parallax, no scroll-triggered reveals.

- **Hover:** the underline appears, or opacity lifts from .62 to 1. Colour does not change.
- **Press:** the pigment darkens one step (`--accent-press`). Nothing shrinks.
- **Focus:** a 2px `--focus-ring` outline in deep water. Never removed.
- **Disabled:** `--text-faint` on `--paper-300`, no pointer.

## Iconography

Two sets with two jobs, and they never trade.

**The motifs.** The six painted motif discs are decoration with provenance — a section
opener, a divider, a stamp on a pouch, a highlight cover. Each belongs to a place, so using
one is a claim about which place a page is about.

- Minimum 40px. Below that the wash muddies; use nothing instead.
- On lime, on stock, or on a pigment field — the knocked-out marks hold on all three.
- One motif per page or per post. Two is a pattern, and patterns have their own rules.
- **Never redraw one.** A mark that does not exist in a painting does not exist.
- **A motif never acts as a control.**

**The functional set.** Sixteen icons in `assets/icons/` do the interface jobs — search,
bag, account, filter, close, arrows, plus, minus, check, ruler, package, seal, mail, pin,
sparkle. Drawn on a 24px grid with a 16px keystone at the system's own 2px carbon rule:
butt caps, mitre joins, square corners, `currentColor`, one deliberate solid (the seal's
centre dot). Rendered at 24px, or 16px in the clerical register; never above 40px. An icon
never carries meaning alone — the word sits beside it — and an icon never decorates.
Construction, sizes and the misuse sheet: `guidelines/iconography.html`.

An earlier edition of this file said there was no icon set and that typographic characters
(`+`, `−`, `·`, `/`) stood in. Those characters remain fine inside dense text, but the
functional set now exists and takes every control-surface job. The `Mark` component wraps
the motif set; it is **not** a logo component and does not render the functional icons.
