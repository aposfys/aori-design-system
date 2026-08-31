import React from 'react';

/* The bead. A flat circle is the brand's bullet, step marker and progress unit —
   and the only curve permitted anywhere in the system. */
export function Dot({ pigment = 'var(--pigment-pink)', size = 20, style, ...rest }) {
  return (
    <span
      {...rest}
      style={{ display: 'inline-block', flex: 'none', width: size, height: size, borderRadius: 'var(--radius-pill)', background: pigment, ...style }}
    ></span>
  );
}
