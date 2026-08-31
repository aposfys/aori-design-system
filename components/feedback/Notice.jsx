import React from 'react';

/* A stamped note on the page, not a floating toast. Sits in the flow, keeps a
   left rule in its pigment and never rounds a corner. */
const tones = {
  calm:  { pigment: 'var(--status-calm)',  label: 'Note' },
  warm:  { pigment: 'var(--status-warm)',  label: 'Please note' },
  stop:  { pigment: 'var(--status-stop)',  label: 'Sold out' },
  go:    { pigment: 'var(--status-go)',    label: 'Confirmed' },
  ledger:{ pigment: 'var(--ledger-400)',   label: 'For the record' }
};

export function Notice({ tone = 'calm', label, ground = 'paper', children, style, ...rest }) {
  const t = tones[tone] || tones.calm;
  return (
    <div
      {...rest}
      style={{
        background: ground === 'ledger' ? 'var(--surface-ledger)' : 'var(--surface-raised)',
        boxShadow: 'inset 0 0 0 1px var(--rule-soft)',
        borderLeft: `4px solid ${t.pigment}`,
        borderRadius: 'var(--radius-none)',
        padding: 'var(--space-4) var(--space-5)',
        display: 'grid',
        gap: 'var(--space-2)',
        ...style
      }}
    >
      <div style={{ font: 'var(--type-annotation-sm)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase', color: t.pigment }}>{label ?? t.label}</div>
      <div style={{ font: 'var(--type-body)', color: ground === 'ledger' ? 'var(--text-form)' : 'var(--text-body)' }}>{children}</div>
    </div>
  );
}
