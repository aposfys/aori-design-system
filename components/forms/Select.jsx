import React from 'react';
import { Mark } from '../core/Mark.jsx';

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

export function Select({ label, options = [], hint, id, style, ...rest }) {
  const inputId = id || 'sel-' + (label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return (
    <div style={{ display: 'grid', gap: 'var(--space-2)', ...style }}>
      {label ? <label htmlFor={inputId} style={{ font: 'var(--type-caption)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase' }}>{label}</label> : null}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <select {...rest} id={inputId} style={{ ...field, appearance: 'none', paddingRight: '38px', cursor: 'pointer' }}>
          {options.map(o => {
            const value = typeof o === 'string' ? o : o.value;
            const text = typeof o === 'string' ? o : o.label;
            return <option key={value} value={value}>{text}</option>;
          })}
        </select>
        <Mark name="chevron-down" size={16} style={{ position: 'absolute', right: 12, pointerEvents: 'none' }} />
      </div>
      {hint ? <div style={{ font: 'var(--type-body)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{hint}</div> : null}
    </div>
  );
}
