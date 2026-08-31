import React from 'react';

/* A hairline cell on stone stock — the administrative register. Sizes, weights,
   order numbers, shipping dates. Italic label by default, like a printed form. */
export function LedgerField({ label, value, children, width, align = 'left', emphasis = false, style, ...rest }) {
  return (
    <div
      {...rest}
      style={{ width, border: 'var(--border-hair) solid var(--ledger-400)', background: 'var(--surface-ledger)', padding: '3px 6px 7px', minHeight: 40, display: 'flex', flexDirection: 'column', gap: 2, ...style }}
    >
      <span style={{ font: 'var(--type-form-label)', fontStyle: emphasis ? 'normal' : 'italic', fontWeight: emphasis ? 'var(--weight-bold)' : 'var(--weight-regular)', letterSpacing: 'var(--tracking-form)', color: 'var(--text-form)', textTransform: emphasis ? 'uppercase' : 'none' }}>{label}</span>
      <span style={{ font: 'var(--type-body)', fontSize: 'var(--text-sm)', color: 'var(--text-body)', textAlign: align, marginTop: 'auto' }}>{children != null ? children : value}</span>
    </div>
  );
}
