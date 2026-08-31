import React from 'react';

const weights = { hair: '1px', ink: '2px', brush: '3px' };
const colors = { hair: 'var(--rule-hair)', ink: 'var(--rule-ink)', brush: 'var(--rule-ink)' };

/* Three line weights, and only three. */
export function Rule({ weight = 'ink', color, spacing = 'var(--space-6)', style, ...rest }) {
  return (
    <hr
      {...rest}
      style={{
        border: 0,
        borderTop: `${weights[weight]} solid ${color || colors[weight]}`,
        margin: `${spacing} 0`,
        ...style
      }}
    />
  );
}
