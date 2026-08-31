import React from 'react';

const base = {
  font: 'var(--type-ui)',
  letterSpacing: 'var(--tracking-annotation)',
  textTransform: 'uppercase',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  border: 'var(--border-ink) solid transparent',
  borderRadius: 'var(--radius-none)',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'var(--transition-color)',
  boxShadow: 'none'
};

const sizes = {
  sm: { padding: '6px 14px', fontSize: 'var(--text-xs)' },
  md: { padding: 'var(--pad-control)', fontSize: 'var(--text-sm)' },
  lg: { padding: '16px 32px', fontSize: 'var(--text-md)' }
};

/* Hover changes colour, never geometry. Press adds 1px of travel and nothing else. */
export function Button({ variant = 'primary', size = 'md', pigment = 'var(--accent)', as = 'button', disabled = false, fullWidth = false, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const skins = {
    primary: {
      background: press ? 'var(--accent-press)' : hover ? 'var(--accent-hover)' : pigment,
      color: 'var(--text-on-pigment)',
      borderColor: 'transparent'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--ink-900)',
      borderColor: 'var(--rule-ink)',
      ...(hover ? { background: 'var(--ink-900)', color: 'var(--paper-200)' } : null)
    },
    quiet: {
      background: 'transparent',
      color: hover ? 'var(--link-hover)' : 'var(--link)',
      borderColor: 'transparent',
      padding: '4px 0',
      textDecoration: 'underline',
      textDecorationThickness: hover ? '2px' : '1px',
      textUnderlineOffset: '4px'
    }
  };

  const El = as;
  return (
    <El
      {...rest}
      disabled={as === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        ...base,
        ...sizes[size],
        ...skins[variant],
        width: fullWidth ? '100%' : undefined,
        opacity: disabled ? 0.4 : 1,
        pointerEvents: disabled ? 'none' : undefined,
        transform: press && variant !== 'quiet' ? 'translateY(1px)' : 'none',
        ...style
      }}
    >{children}</El>
  );
}
