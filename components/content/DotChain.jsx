import React from 'react';
import { Dot } from './Dot.jsx';

const DEFAULT = ['var(--pigment-pink)', 'var(--pigment-pink)', 'var(--pigment-ultramarine)', 'var(--pigment-red)', 'var(--pigment-yellow)', 'var(--pigment-pink)', 'var(--pigment-teal)', 'var(--pigment-pink)'];

/* A strung line of beads. Reads as decoration, a stepper, or a size selector. */
export function DotChain({ colors = DEFAULT, size = 20, count, active, gap = 0, style, onSelect, ...rest }) {
  const list = count ? Array.from({ length: count }, (_, i) => colors[i % colors.length]) : colors;
  return (
    <div {...rest} style={{ display: 'flex', alignItems: 'center', gap, ...style }}>
      {list.map((c, i) => (
        <Dot
          key={i}
          size={size}
          pigment={active == null || i === active ? c : 'var(--paper-500)'}
          onClick={onSelect ? () => onSelect(i) : undefined}
          style={onSelect ? { cursor: 'pointer' } : undefined}
        />
      ))}
    </div>
  );
}
