import React from 'react';
import { Dot } from './Dot.jsx';

const PIGMENTS = ['var(--pigment-red)', 'var(--pigment-ultramarine)', 'var(--pigment-yellow)', 'var(--pigment-teal)', 'var(--pigment-pink)', 'var(--pigment-olive)'];

/* An ordered list marked with beads, or with two-digit numbers in the ledger voice. */
export function StepList({ items = [], marker = 'dot', style, ...rest }) {
  return (
    <ol {...rest} style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 'var(--space-4)', ...style }}>
      {items.map((item, i) => {
        const label = typeof item === 'string' ? item : item.label;
        const note = typeof item === 'string' ? null : item.note;
        const pig = (typeof item === 'object' && item.pigment) || PIGMENTS[i % PIGMENTS.length];
        return (
          <li key={i} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
            {marker === 'dot'
              ? <Dot pigment={pig} size={16} style={{ marginTop: 5 }} />
              : <span style={{ font: 'var(--type-form-label)', color: 'var(--text-muted)', width: 22, flex: 'none', marginTop: 4 }}>{String(i + 1).padStart(2, '0')}</span>}
            <div>
              <div style={{ font: 'var(--type-annotation)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase' }}>{label}</div>
              {note ? <div style={{ font: 'var(--type-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 'var(--space-1)' }}>{note}</div> : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
