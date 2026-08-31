import React from 'react';

/* The hand-printed caption voice: uppercase, tracked, bold, short. */
const tones = { ink: 'var(--text-body)', muted: 'var(--text-muted)', paper: 'var(--text-on-pigment)' };

export function Caption({ children, align = 'left', tone = 'ink', tilt = 0, size = 'md', style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        font: size === 'sm' ? 'var(--type-caption)' : 'var(--type-annotation-sm)',
        fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-annotation)',
        textTransform: 'uppercase',
        color: tones[tone],
        textAlign: align,
        maxWidth: 'var(--measure-annotation)',
        marginTop: 'var(--gap-caption)',
        transform: tilt ? 'rotate(' + tilt + 'deg)' : undefined,
        ...style
      }}
    >{children}</div>
  );
}
