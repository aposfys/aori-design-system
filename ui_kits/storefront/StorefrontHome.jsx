const P = '../../assets/photography/';
const PR = '../../assets/products/';
const V = '../../assets/illustrations-v2-web/';
const M = '../../assets/motifs-v2/';

const RUNS = [
  { id: 'livyko', name: 'Livyko', plate: 'livyko', motif: 'hoop', line: 'The Libyan Sea, flat at six in the evening.' },
  { id: 'elia', name: 'Elia', plate: 'olive', motif: 'olive-wreath', line: 'The olive terraces above the village.' },
  { id: 'psiloritis', name: 'Psiloritis', plate: 'psiloritis', motif: 'sun', line: 'The ridge, with snow on it until May.' },
  { id: 'knosos', name: 'Knosos', plate: 'spiral', motif: 'spiral', line: 'Minoan goldwork, and what is left of it.' }
];

const PIECES = [
  { id: 'livyko-stone-ring', run: 'Livyko', motif: 'hoop', name: 'Livyko Stone Ring', price: '210 €', product: 'livyko-stone-ring', ground: '#1890a8', left: 4, of: 12, spec: '6 mm band, sizes 50 to 58', blurb: 'A wide band, hammered and left matte, with two blue stones set rough into the metal. Named for the beach below the village, where the water goes flat at six in the morning.' },
  { id: 'livyko-drop-ring', run: 'Livyko', motif: 'hoop', name: 'Livyko Drop Ring', price: '195 €', product: 'livyko-drop-ring', ground: '#006078', left: 7, of: 12, spec: 'Double dome, sizes 50 to 58', blurb: 'Two domes forged from one piece, with a pale blue drop hung underneath so it moves when you do.' },
  { id: 'elia-teardrop', run: 'Elia', motif: 'olive-wreath', name: 'Elia Teardrop', price: '165 €', product: 'elia-teardrop-ring', ground: '#5f7a46', left: 8, of: 12, spec: 'Sizes 50 to 58', blurb: 'A pointed band with a clear drop at the crown, the shape of an olive before it darkens.' },
  { id: 'psiloritis-sun-drops', run: 'Psiloritis', motif: 'sun', name: 'Psiloritis Sun Drops', price: '140 €', product: 'psiloritis-sun-drops', ground: '#c0a860', left: 6, of: 12, spec: '32 mm drop', blurb: 'A rough nugget at the lobe and a spoked sun hung below it. Cast from a wax pressed by hand, so no two are the same.' },
  { id: 'knosos-stone-ring', run: 'Knosos', motif: 'spiral', name: 'Knosos Stone Ring', price: '240 €', product: 'knosos-stone-ring', ground: '#c05a28', left: 2, of: 12, spec: '6 mm band, sizes 50 to 58', blurb: 'Oxidised silver with a pink and a red stone set side by side, the way colour sits in Minoan fresco.' },
  { id: 'knosos-solitaire', run: 'Knosos', motif: 'spiral', name: 'Knosos Solitaire', price: '260 €', product: 'knosos-solitaire', ground: '#8a3a22', left: 0, of: 12, spec: 'Sizes 50 to 58', blurb: 'One clear stone held in four hand-drawn claws. The band is left uneven on purpose.' },
];

const ann = { font: 'var(--type-annotation-sm)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase' };

function StorefrontHome({ onOpen }) {
  const { Plate, Button, Caption } = window.AORIDesignSystem_12e58c;
  return (
    <div>
      <section style={{ position: 'relative', height: 470, overflow: 'hidden' }}>
        <img src={V + 'livyko.jpg'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'var(--paper-100)', background: 'linear-gradient(rgba(42,38,34,.30), rgba(42,38,34,.52))', padding: 30 }}>
          <div style={{ ...ann, letterSpacing: '.18em' }}>Silver 925 · Crete</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 42, letterSpacing: '.03em', lineHeight: 1.26, marginTop: 16, maxWidth: '26ch', textWrap: 'pretty' }}>
            Made by hand in Heraklion, in runs of twelve, and named after the places they came from.
          </div>
          <div style={{ marginTop: 24 }}><Button variant="primary" size="lg" as="a" onClick={e => { e.preventDefault(); onOpen(PIECES[0].id); }}>See the collections</Button></div>
        </div>
      </section>

      <section style={{ padding: '38px 56px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '2px solid var(--rule-ink)', paddingBottom: 10 }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 27, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 400 }}>Four places</h2>
          <span style={{ ...ann, color: 'var(--text-muted)' }}>Each run closes when it is gone</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22, marginTop: 20 }}>
          {RUNS.map(r => (
            <figure key={r.id} style={{ margin: 0 }}>
              <Plate src={V + r.plate + '.jpg'} ratio="portrait" />
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 11 }}>
                <img src={M + r.motif + '.png'} alt="" style={{ width: 30, height: 30, borderRadius: '50%', display: 'block', flex: 'none' }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, letterSpacing: '.09em', textTransform: 'uppercase', lineHeight: 1 }}>{r.name}</div>
                  <Caption size="sm" tone="muted">{r.line}</Caption>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </section>

      <section style={{ padding: '40px 56px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '2px solid var(--rule-ink)', paddingBottom: 10 }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 27, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 400 }}>In the shop now</h2>
          <span style={{ ...ann, color: 'var(--text-muted)' }}>{PIECES.filter(p => p.left > 0).length} of {PIECES.length} pieces still open</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '28px 22px', marginTop: 20 }}>
          {PIECES.map(p => (
            <a key={p.id} href="#" onClick={e => { e.preventDefault(); onOpen(p.id); }} style={{ textDecoration: 'none', color: 'var(--ink-900)', opacity: p.left === 0 ? .55 : 1 }}>
              <div style={{ background: p.ground, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15%' }}><img src={PR + p.product + '.png'} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} /></div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 11 }}>
                <img src={M + p.motif + '.png'} alt="" style={{ width: 26, height: 26, borderRadius: '50%', display: 'block', flex: 'none' }} />
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, letterSpacing: '.04em', lineHeight: 1.1 }}>{p.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                    <span style={{ ...ann, color: 'var(--text-muted)' }}>{p.price}</span>
                    <span style={{ ...ann, color: p.left === 0 ? 'var(--text-faint)' : 'var(--accent)' }}>{p.left === 0 ? `All ${p.of} gone` : `${p.left} left of ${p.of}`}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section style={{ margin: '46px 56px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, alignItems: 'stretch' }}>
        <img src={P + 'bench-hands.jpg'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 260 }} />
        <div style={{ background: 'var(--surface-toned)', padding: '34px 38px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ ...ann, color: 'var(--text-muted)' }}>The bench</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, letterSpacing: '.08em', textTransform: 'uppercase', marginTop: 11, lineHeight: 1.1 }}>Twelve, then no more</div>
          <p style={{ margin: '15px 0 0', fontSize: 15.5, lineHeight: 1.75, maxWidth: '46ch' }}>
            Every run is twelve pieces. When they are gone we make something else, because the sheet was cut for twelve and the next sheet will be a little different.
          </p>
          <div style={{ marginTop: 20 }}><Button variant="secondary" size="md" as="a">How a piece is made</Button></div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { StorefrontHome, PIECES });
