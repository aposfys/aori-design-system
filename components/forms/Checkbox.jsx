import React from 'react';

/* An 18px square with a 2px carbon border. Checked fills flat with pigment —
   there is no tick glyph, because a flat field is how this brand marks a thing.
   The real input is visually hidden; keyboard focus draws the ring on the
   painted square via the data-aori-check rule in base/elements.css. */
export function Checkbox({ label, checked, onChange, pigment = 'var(--accent)', disabled, style, ...rest }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 'var(--space-3)', cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.4 : 1, ...style }}>
      <input {...rest} data-aori-check="" type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span aria-hidden="true" style={{ width: 18, height: 18, flex: 'none', marginTop: 1, border: 'var(--border-ink) solid var(--rule-ink)', borderRadius: 'var(--radius-none)', background: checked ? pigment : 'transparent', transition: 'var(--transition-color)' }}></span>
      <span style={{ font: 'var(--type-annotation-sm)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase' }}>{label}</span>
    </label>
  );
}
