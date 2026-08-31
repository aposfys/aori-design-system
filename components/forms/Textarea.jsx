import React from 'react';

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

export function Textarea({ label, hint, rows = 5, id, style, ...rest }) {
  const inputId = id || 'ta-' + (label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return (
    <div style={{ display: 'grid', gap: 'var(--space-2)', ...style }}>
      {label ? <label htmlFor={inputId} style={{ font: 'var(--type-caption)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase' }}>{label}</label> : null}
      <textarea {...rest} id={inputId} rows={rows} style={{ ...field, resize: 'vertical', lineHeight: 'var(--leading-normal)' }} />
      {hint ? <div style={{ font: 'var(--type-body)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{hint}</div> : null}
    </div>
  );
}
