import React from 'react';

/* A stamped note on the page, not a floating toast. Sits in the flow, keeps a
   left rule in its pigment and never rounds a corner. The rule wears the
   pigment; the label speaks in the tone's ink, which clears 4.5:1 on paper. */
const tones = {
  calm:  { pigment: 'var(--status-calm)',  ink: 'var(--status-calm-ink)', label: 'Note' },
  warm:  { pigment: 'var(--status-warm)',  ink: 'var(--status-warm-ink)', label: 'Please note' },
  stop:  { pigment: 'var(--status-stop)',  ink: 'var(--status-stop-ink)', label: 'Sold out' },
  go:    { pigment: 'var(--status-go)',    ink: 'var(--status-go-ink)',   label: 'Confirmed' },
  ledger:{ pigment: 'var(--ledger-400)',   ink: 'var(--ledger-ink)',      label: 'For the record' }
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
      <div style={{ font: 'var(--type-annotation-sm)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase', color: t.ink }}>{label ?? t.label}</div>
      <div style={{ font: 'var(--type-body)', color: ground === 'ledger' ? 'var(--text-form)' : 'var(--text-body)' }}>{children}</div>
    </div>
  );
}
