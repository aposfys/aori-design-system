function Nav({ page, onNav }) {
  const link = (id, label) => (
    <a href="#" onClick={e => { e.preventDefault(); onNav(id); }} style={{
      font: 'var(--type-ui)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase',
      color: 'var(--ink-900)', textDecoration: page === id ? 'underline' : 'none',
      textDecorationThickness: '2px', textUnderlineOffset: '5px', opacity: page === id ? 1 : .62, whiteSpace: 'nowrap'
    }}>{label}</a>
  );
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, padding: '17px 56px', borderBottom: '2px solid var(--rule-ink)', background: 'var(--surface-page)' }}>
      <a href="#" onClick={e => { e.preventDefault(); onNav('home'); }} style={{ display: 'block', flex: 'none' }}><img src="../../assets/logos/wordmark.svg" alt="AÓRI" style={{ height: 30, width: 'auto', display: 'block' }} /></a>
      <div style={{ display: 'flex', gap: 30 }}>
        {link('home', 'Home')}{link('collections', 'Collections')}{link('product', 'A piece')}
        {link('workshop', 'The workshop')}{link('sizing', 'Sizing')}
      </div>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <span style={{ font: 'var(--type-annotation-sm)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Search</span>
        <span style={{ font: 'var(--type-annotation-sm)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase' }}>Basket · 0</span>
      </div>
    </nav>
  );
}

function Footer() {
  const col = (h, items) => (
    <div><div style={{ font: 'var(--type-annotation-sm)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 11 }}>{h}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map(t => <span key={t} style={{ font: 'var(--type-body)', fontSize: 13.5 }}>{t}</span>)}
      </div></div>
  );
  return (
    <footer style={{ borderTop: '2px solid var(--rule-ink)', padding: '34px 56px 40px', background: 'var(--surface-page)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
        <div>
          <img src="../../assets/logos/wordmark.svg" alt="AÓRI" style={{ height: 30, width: 'auto', display: 'block' }} />
          <p style={{ margin: '13px 0 0', font: 'var(--type-body)', fontSize: 13.5, lineHeight: 1.7, maxWidth: '34ch', color: 'var(--text-muted)' }}>
            Silver 925, made by hand in Heraklion. Small runs, named for the places they come from.
          </p>
        </div>
        {col('Shop', ['All pieces', 'Psiloritis', 'Livyko', 'Elia', 'Knosos'])}
        {col('Practical', ['Sizing', 'Care', 'Shipping', 'Returns'])}
        {col('Elsewhere', ['Instagram', 'The workshop', 'Stockists', 'Press'])}
      </div>
      <div style={{ marginTop: 30, paddingTop: 13, borderTop: '1px solid var(--rule-hair)', display: 'flex', justifyContent: 'space-between', font: 'var(--type-annotation-sm)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        <span>Heraklion, Crete</span><span>All prices include VAT</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer });
