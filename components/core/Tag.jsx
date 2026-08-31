import React from 'react';

/* A stamped label: material, run size, collection. Square, tracked, uppercase —
   except the ledger variant, which sets in the body serif like a form field. */
export function Tag({ children, pigment, variant = 'outline', size = 'md', style, ...rest }) {
  const pad = size === 'sm' ? '3px 8px' : '5px 11px';
  const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';

  const skins = {
    outline: {
      background: 'transparent',
      color: 'var(--ink-900)',
      border: 'var(--border-hair) solid var(--rule-ink)'
    },
    solid: {
      background: pigment || 'var(--pigment-pink)',
      color: 'var(--text-on-pigment)',
      border: 'var(--border-hair) solid transparent'
    },
    ledger: {
      background: 'var(--surface-ledger)',
      color: 'var(--text-form)',
      border: 'var(--border-hair) solid var(--ledger-400)',
      fontFamily: 'var(--font-body)',
      textTransform: 'none',
      letterSpacing: 'var(--tracking-form)'
    }
  };

  return (
    <span
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: pad,
        font: 'var(--type-caption)',
        fontSize: fs,
        letterSpacing: 'var(--tracking-annotation)',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-none)',
        whiteSpace: 'nowrap',
        ...skins[variant],
        ...style
      }}
    >{children}</span>
  );
}
