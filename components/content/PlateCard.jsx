import React from 'react';
import { Plate } from './Plate.jsx';
import { Caption } from './Caption.jsx';

/* A product card is a plate plus a caption. There is no container box, no border, no shadow.
   In a grid, hover dims the SIBLINGS via `dim` — the target itself never moves. */
export function PlateCard({ src, alt = '', field, ratio = 'portrait', title, meta, href, width, tilt = 0, dim = false, style, ...rest }) {
  const Wrapper = href ? 'a' : 'div';
  return (
    <Wrapper
      {...rest}
      href={href}
      style={{ display: 'block', width, textDecoration: 'none', color: 'inherit', opacity: dim ? 0.55 : 1, transition: 'var(--transition-fade)', ...style }}
    >
      <Plate src={src} alt={alt} field={field} ratio={ratio} tilt={tilt} />
      {title ? <Caption>{title}</Caption> : null}
      {meta ? <div style={{ font: 'var(--type-form-label)', color: 'var(--text-muted)', letterSpacing: 'var(--tracking-form)', marginTop: 'var(--space-1)' }}>{meta}</div> : null}
    </Wrapper>
  );
}
