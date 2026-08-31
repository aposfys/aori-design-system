const P = '../../assets/photography/';
const PR = '../../assets/products/';
const V = '../../assets/illustrations-v2-web/';
const M = '../../assets/motifs-v2/';
const ann = { font: 'var(--type-annotation-sm)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase' };

function Product({ piece, all, onOpen, onAdd, inBasket }) {
  const { Button, Plate, LedgerField } = window.AORIDesignSystem_12e58c;
  const [size, setSize] = React.useState(0);
  const [open, setOpen] = React.useState('care');
  const sizes = /sizes/i.test(piece.spec) ? ['50', '52', '54', '56', '58'] : piece.id === 'elia-teardrop' ? ['50', '52', '54', '56', '58'] : ['One size'];
  const shots = [{ k: 'product', src: PR + piece.product + '.png', bg: piece.ground }, { k: 'bench', src: P + 'bench-hands.jpg' }, { k: 'worn', src: P + 'hand-thin-rings.jpg' }];
  const [shot, setShot] = React.useState(0);
  const sold = piece.left === 0;
  const related = all.filter(p => p.run === piece.run && p.id !== piece.id).concat(all.filter(p => p.run !== piece.run)).slice(0, 3);

  const row = (id, label, body) => (
    <div style={{ borderTop: '1px solid var(--rule-hair)' }}>
      <button onClick={() => setOpen(open === id ? null : id)} style={{ all: 'unset', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '13px 0', ...ann }}>
        <span>{label}</span><span style={{ color: 'var(--text-muted)' }}>{open === id ? '−' : '+'}</span>
      </button>
      {open === id && <p style={{ margin: '0 0 15px', fontSize: 14.5, lineHeight: 1.72, maxWidth: '52ch' }}>{body}</p>}
    </div>
  );

  return (
    <div>
      <div style={{ padding: '13px 56px', borderBottom: '1px solid var(--rule-hair)', ...ann, color: 'var(--text-muted)' }}>
        Collections / {piece.run} / {piece.name.split(' ').slice(1).join(' ')}
      </div>
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, padding: '30px 56px 0' }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ width: 72, flex: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
            {shots.map((s, i) => (
              <button key={s.k} onClick={() => setShot(i)} style={{ all: 'unset', cursor: 'pointer', display: 'block', boxShadow: i === shot ? 'inset 0 0 0 2px var(--rule-ink)' : 'none' }}>
                <img src={s.src} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: s.bg ? 'contain' : 'cover', background: s.bg || 'transparent', padding: s.bg ? '14%' : 0, boxSizing: 'border-box', display: 'block' }} />
              </button>
            ))}
          </div>
          <img src={shots[shot].src} alt="" style={{ flex: 1, minWidth: 0, aspectRatio: '4/5', objectFit: shots[shot].bg ? 'contain' : 'cover', background: shots[shot].bg || 'transparent', padding: shots[shot].bg ? '10%' : 0, boxSizing: 'border-box', display: 'block' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <img src={M + piece.motif + '.png'} alt="" style={{ width: 52, height: 52, borderRadius: '50%', display: 'block', flex: 'none' }} />
            <div>
              <div style={{ ...ann, color: 'var(--text-muted)' }}>{piece.run}</div>
              <h1 style={{ margin: '3px 0 0', fontFamily: 'var(--font-display)', fontSize: 38, letterSpacing: '.04em', lineHeight: 1.05, fontWeight: 400 }}>{piece.name}</h1>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 20, borderBottom: '1px solid var(--rule-hair)', paddingBottom: 12 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 27, letterSpacing: '.04em' }}>{piece.price}</span>
            <span style={{ ...ann, color: sold ? 'var(--text-faint)' : 'var(--accent)' }}>{sold ? `All ${piece.of} gone` : `${piece.left} left of ${piece.of}`}</span>
          </div>

          <p style={{ margin: '16px 0 0', fontSize: 15.5, lineHeight: 1.75, maxWidth: '48ch' }}>{piece.blurb}</p>

          <div style={{ marginTop: 22 }}>
            <div style={{ ...ann, color: 'var(--text-muted)', marginBottom: 9 }}>{sizes.length > 1 ? 'Size' : 'Made in one size'}</div>
            <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
              {sizes.map((s, i) => (
                <button key={s} onClick={() => setSize(i)} style={{ all: 'unset', cursor: 'pointer', height: 38, padding: '0 17px', display: 'inline-flex', alignItems: 'center', ...ann, boxShadow: i === size ? 'inset 0 0 0 2px var(--rule-ink)' : 'inset 0 0 0 1px var(--rule-hair)', color: i === size ? 'var(--ink-900)' : 'var(--text-muted)' }}>{s}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 11, marginTop: 22, alignItems: 'center' }}>
            <Button variant="primary" size="lg" disabled={sold} onClick={onAdd}>{sold ? 'This run is closed' : inBasket ? 'In the basket' : `Add to basket — ${piece.price}`}</Button>
            <Button variant="quiet" size="md" as="a">Sizing</Button>
          </div>
          {sold && <p style={{ margin: '12px 0 0', fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)', maxWidth: '46ch' }}>We will make more, but not the same. Tell us and we will write when the next run of {piece.run} opens.</p>}

          <div style={{ marginTop: 26 }}>
            {row('care', 'Materials and care', 'Silver 925, matte. It will darken with wear; a soft cloth brings it back. Do not use silver dip on a hammered surface.')}
            {row('fit', 'Sizing and fit', `${piece.spec}. If you are between sizes, take the larger one — the band is filed, not stretched.`)}
            {row('ship', 'Shipping and returns', 'Two working days inside Greece, five to the rest of Europe. In a cotton pouch, in a box, with the run number written on the tag. Thirty days to return it unworn.')}
          </div>
        </div>
      </section>

      <section style={{ margin: '44px 56px 0', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 0 }}>
        <div style={{ background: 'var(--surface-toned)', padding: '30px 34px' }}>
          <div style={{ ...ann, color: 'var(--text-muted)' }}>Where it comes from</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, letterSpacing: '.09em', textTransform: 'uppercase', marginTop: 10 }}>{piece.run}</div>
          <p style={{ margin: '13px 0 0', fontSize: 15, lineHeight: 1.75, maxWidth: '40ch' }}>
            Every run is named for a place, and the painting is how we say which one. This piece belongs to {piece.run}; the painting is the collection's, not the piece's.
          </p>
        </div>
        <img src={V + (piece.run === 'Livyko' ? 'livyko' : piece.run === 'Elia' ? 'olive' : piece.run === 'Knosos' ? 'spiral' : 'psiloritis') + '.jpg'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 240 }} />
      </section>

      <section style={{ padding: '44px 56px 0' }}>
        <div style={{ borderBottom: '2px solid var(--rule-ink)', paddingBottom: 10, ...ann }}>More from the bench</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginTop: 18 }}>
          {related.map(p => (
            <a key={p.id} href="#" onClick={e => { e.preventDefault(); onOpen(p.id); }} style={{ textDecoration: 'none', color: 'var(--ink-900)', opacity: p.left === 0 ? .55 : 1 }}>
              <div style={{ background: p.ground, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15%' }}><img src={PR + p.product + '.png'} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} /></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 9, alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, letterSpacing: '.04em' }}>{p.name}</span>
                <span style={{ ...ann, color: 'var(--text-muted)' }}>{p.price}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Product });
