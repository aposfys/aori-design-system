# Wet Ledger — the algorithmic philosophy behind the spot register

**Movement:** *Wet Ledger* — bookkeeping subjects painted with a wet brush.

The AORI plates are loud: saturated pigment held inside a drawn contour, cotton paper
breathing through every light passage. The service surfaces of a shop — an empty bag, a
closed run, a care instruction — need that same hand at whisper volume. Wet Ledger is the
computational aesthetic that produces them: not vector icons pretending to be paintings,
but genuine simulated gouache, laid down layer by translucent layer by an algorithm that
behaves like a loaded brush. Every spot is grown, not drawn — the same seed always grows
the same painting, and a neighbouring seed grows its sibling.

The pigment field is the first organism. Each wash begins as a coarse polygon and is
deformed by recursive edge subdivision — every midpoint displaced by a Gaussian whose
variance is carried on the vertex itself, so calm edges stay calm and ragged edges stay
ragged through every generation. Sixteen to twenty translucent layers of the same
re-deformed shape accumulate into a field that is dense at heart and broken at the rim,
exactly how gouache pools on cotton: the algorithm never draws an edge, it *arrives* at
one. Granulation speckle, point-tested against the wash body, settles into the field the
way pigment settles into paper tooth. This is the product of painstaking calibration —
layer count against alpha, variance against subdivision depth — the kind of tuning that
reads as countless hours at the bench, because parametrically it was.

The carbon line is the second organism. AORI's contour is a drawn line with a wrist behind
it, so the algorithm walks each path as a chain of stamped daubs whose radius swells and
starves on low-frequency noise, whose position drifts on a second noise channel, and whose
ink occasionally drops out mid-stroke — dry brush, not dashed stroke. Lines overshoot
their corners by a few pixels the way a fast hand does, and the contour never quite
agrees with the wash it encloses: the registration slip between paint and line is the
signature of the whole painted system, and here it is a parameter, not an accident.

Composition is held by the ledger half of the name. Subjects are the shop's own objects —
bag, envelope, tally, bench, pouch — placed with the arithmetic honesty of the brand:
one subject, one accent pigment carrying the meaning, generous unpainted margin on all
sides. The palette is not chosen per spot; it is the thirteen sampled pigments of the
system, and each composition may touch four of them at most. The motif law survives
untouched: nothing with a place's name on it is ever grown here.

Emergence lives in the seed. The wash deformation, the wrist of every line, the leaf
angles of the sprig, the drop of every dry-brush gap — all flow from one integer, so the
register can be reproduced forever or regrown into a fresh sibling set in a minute. A
master-level implementation hides its machinery: at 96px on a care card these read simply
as small paintings by the plate artist's hand on a quieter day, and only the seed number
in the file name admits an algorithm was ever present.

**Expression:** `tools/spot-painter.html` — seeded p5.js, one graphics buffer per spot,
transparent ground so the paper of whatever surface hosts it becomes the paper of the
painting. Sheet mode for choosing seeds; single mode for rendering the shipped assets.
