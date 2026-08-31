import React from 'react';

/* The only five UI strokes the brand permits. If a project needs a sixth, raise it —
   do not import an icon library. Everything else is a painted motif. */
const paths = {
  close: 'M4 4 L16 16 M16 4 L4 16',
  plus: 'M10 3 L10 17 M3 10 L17 10',
  minus: 'M3 10 L17 10',
  arrow: 'M3 10 L17 10 M11 4 L17 10 L11 16',
  'arrow-left': 'M17 10 L3 10 M9 4 L3 10 L9 16',
  chevron: 'M7 4 L13 10 L7 16',
  'chevron-down': 'M4 7 L10 13 L16 7'
};

export function Mark({ name = 'close', size = 20, strokeWidth = 2, color = 'currentColor', style, ...rest }) {
  return (
    <svg {...rest} width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ display: 'block', flex: 'none', ...style }}>
      <path d={paths[name] || paths.close} stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter"></path>
    </svg>
  );
}
