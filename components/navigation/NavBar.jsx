import React from 'react';

/* The one fixed element in the system. A hairline under it, nothing else —
   no shadow, no blur, no translucency. The mark is type-set here by design:
   the painted wordmark is only legal at 28px and up, and a nav bar is smaller. */
export function NavBar({ items = [], active, onSelect, right, ground = 'paper', name = 'AÓRI', markSrc, markHref = '#', sticky = true, style, ...rest }) {
  const dark = ground === 'ground';
  return (
    <header
      {...rest}
      style={{
        position: sticky ? 'sticky' : 'static',
        top: 0, zIndex: 20,
        background: dark ? 'var(--surface-ground)' : 'var(--surface-page)',
        borderBottom: `1px solid ${dark ? 'color-mix(in oklab, var(--paper-200) 22%, transparent)' : 'var(--rule-hair)'}`,
        display: 'flex', alignItems: 'center', gap: 'var(--space-7)',
        padding: 'var(--space-4) var(--page-margin)',
        ...style
      }}
    >
      <a
        href={markHref}
        style={{
          display: 'block', textDecoration: 'none', flex: '0 0 auto',
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-lg)',
          letterSpacing: 'var(--tracking-display)',
          textTransform: 'uppercase',
          color: dark ? 'var(--paper-200)' : 'var(--ink-900)',
          lineHeight: 1
        }}
      >{markSrc ? <img src={markSrc} alt={name} style={{ height: 26, display: 'block' }} /> : name}</a>
      <nav style={{ display: 'flex', gap: 'var(--space-6)', flex: 1 }}>
        {items.map((it) => {
          const on = (it.id ?? it.label) === active;
          return (
            <a
              key={it.id ?? it.label}
              href={it.href ?? '#'}
              onClick={onSelect ? (e) => { e.preventDefault(); onSelect(it.id ?? it.label); } : undefined}
              style={{
                font: 'var(--type-ui)',
                letterSpacing: 'var(--tracking-annotation)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: dark ? 'var(--paper-200)' : 'var(--ink-900)',
                paddingBottom: 2,
                borderBottom: `2px solid ${on ? (dark ? 'var(--pigment-saffron)' : 'var(--accent)') : 'transparent'}`,
                transition: 'var(--transition-color)'
              }}
            >{it.label}</a>
          );
        })}
      </nav>
      {right ? <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flex: '0 0 auto' }}>{right}</div> : null}
    </header>
  );
}
