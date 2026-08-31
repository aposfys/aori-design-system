import React from 'react';

const sizes = { sm: 'var(--text-xl)', md: 'var(--text-2xl)', lg: 'var(--text-3xl)' };

/* A line of display lettering standing alone. Caps, tracked, short measure. */
export function PullQuote({ children, attribution, size = 'md', align = 'left', style, ...rest }) {
  return (
    <figure {...rest} style={{ margin: 0, textAlign: align, ...style }}>
      <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: sizes[size], lineHeight: 'var(--leading-display)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase', color: 'var(--text-display)', maxWidth: '22ch' }}>{children}</blockquote>
      {attribution ? <figcaption style={{ font: 'var(--type-caption)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 'var(--space-4)' }}>{attribution}</figcaption> : null}
    </figure>
  );
}
