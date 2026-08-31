import React from 'react';

/* The plate is the unit of the system: a rectangle of flat pigment or a photograph,
   inside an unpainted paper margin. Three proportions carry most work. Never a radius. */
const ratios = { portrait: '3 / 4', landscape: '4 / 3', square: '1 / 1', tall: '2 / 3', wide: '16 / 9' };

export function Plate({ src, alt = '', field = 'var(--plate-default-field)', ratio = 'portrait', margin = 'var(--border-plate)', width, tilt = 0, style, children, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        width,
        border: margin + ' solid var(--paper-200)',
        borderRadius: 'var(--radius-none)',
        background: src ? 'var(--paper-300)' : field,
        aspectRatio: ratios[ratio] || ratio,
        overflow: 'hidden',
        transform: tilt ? 'rotate(' + tilt + 'deg)' : undefined,
        position: 'relative',
        ...style
      }}
    >{src ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> : children}</div>
  );
}
