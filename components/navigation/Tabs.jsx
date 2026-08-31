import React from 'react';

/* Tabs read as a row of stamps on a hairline, not as folder cards.
   The selected one carries the pigment; the rule under the row is unbroken. */
export function Tabs({ items = [], value, onChange, size = 'md', pigment = 'var(--accent)', style, ...rest }) {
  const pad = size === 'sm' ? '6px 12px' : '9px 16px';
  const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';
  return (
    <div
      {...rest}
      role="tablist"
      style={{ display: 'flex', gap: 'var(--space-1)', borderBottom: '1px solid var(--rule-hair)', ...style }}
    >
      {items.map((it) => {
        const id = it.id ?? it.label;
        const on = id === value;
        return (
          <button
            key={id}
            role="tab"
            aria-selected={on}
            onClick={() => onChange && onChange(id)}
            style={{
              font: 'var(--type-ui)',
              fontSize: fs,
              letterSpacing: 'var(--tracking-annotation)',
              textTransform: 'uppercase',
              background: on ? pigment : 'transparent',
              color: on ? 'var(--text-on-pigment)' : 'var(--text-muted)',
              border: 0,
              borderRadius: 'var(--radius-none)',
              padding: pad,
              marginBottom: -1,
              cursor: 'pointer',
              transition: 'var(--transition-color)',
              display: 'inline-flex',
              gap: 'var(--space-2)',
              alignItems: 'center'
            }}
          >
            {it.label}
            {it.count != null ? <span style={{ opacity: on ? 0.75 : 0.6, fontVariantNumeric: 'tabular-nums' }}>{it.count}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
