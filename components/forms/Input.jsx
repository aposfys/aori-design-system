import React from 'react';

/* Form stock is a hairline cell on raised paper: square, quiet, no radius, no shadow.
   The label is in the annotation voice; the value the customer types is in the body serif. */
const field = {
  width: '100%',
  font: 'var(--type-body)',
  fontSize: 'var(--text-sm)',
  color: 'var(--text-body)',
  background: 'var(--surface-raised)',
  border: 'var(--border-hair) solid var(--ledger-400)',
  borderRadius: 'var(--radius-none)',
  padding: '11px 13px',
  transition: 'var(--transition-color)'
};

export function Input({ label, hint, error, id, style, ...rest }) {
  const inputId = id || 'in-' + (label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return (
    <div style={{ display: 'grid', gap: 'var(--space-2)', ...style }}>
      {label ? <label htmlFor={inputId} style={{ font: 'var(--type-caption)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase' }}>{label}</label> : null}
      <input {...rest} id={inputId} style={{ ...field, borderColor: error ? 'var(--pigment-red)' : 'var(--ledger-400)' }} />
      {error
        ? <div style={{ font: 'var(--type-caption)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase', color: 'var(--pigment-red)' }}>{error}</div>
        : hint ? <div style={{ font: 'var(--type-body)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{hint}</div> : null}
    </div>
  );
}
