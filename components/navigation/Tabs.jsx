import React from 'react';

/* Tabs read as a row of stamps on a hairline, not as folder cards.
   The selected one carries the pigment; the rule under the row is unbroken.
   Keyboard: Left/Right move and select (Home/End jump), following the
   automatic-activation tab pattern; only the selected stamp sits in the
   tab order. Give items a panelId to wire aria-controls to their panel. */
export function Tabs({ items = [], value, onChange, size = 'md', pigment = 'var(--accent)', style, ...rest }) {
  const pad = size === 'sm' ? '6px 12px' : '9px 16px';
  const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';
  const refs = React.useRef({});

  const ids = items.map((it) => it.id ?? it.label);
  const activeId = ids.includes(value) ? value : ids[0];
  const selectedIndex = Math.max(0, ids.indexOf(activeId));

  const move = (nextIndex) => {
    const id = ids[nextIndex];
    if (id == null) return;
    onChange && onChange(id);
    const el = refs.current[id];
    if (el) el.focus();
  };

  const onKeyDown = (e) => {
    const last = ids.length - 1;
    if (e.key === 'ArrowRight') { e.preventDefault(); move(selectedIndex === last ? 0 : selectedIndex + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); move(selectedIndex === 0 ? last : selectedIndex - 1); }
    else if (e.key === 'Home') { e.preventDefault(); move(0); }
    else if (e.key === 'End') { e.preventDefault(); move(last); }
  };

  return (
    <div
      {...rest}
      role="tablist"
      onKeyDown={onKeyDown}
      style={{ display: 'flex', gap: 'var(--space-1)', borderBottom: '1px solid var(--rule-hair)', ...style }}
    >
      {items.map((it) => {
        const id = it.id ?? it.label;
        const on = id === value;
        return (
          <button
            key={id}
            ref={(el) => { refs.current[id] = el; }}
            role="tab"
            aria-selected={on}
            aria-controls={it.panelId}
            tabIndex={id === activeId ? 0 : -1}
            onClick={() => onChange && onChange(id)}
            style={{
              font: 'var(--type-ui)',
              fontSize: fs,
              letterSpacing: 'var(--tracking-annotation)',
              textTransform: 'uppercase',
              background: on ? pigment : 'transparent',
              color: on ? 'var(--text-on-pigment)' : 'var(--text-muted)',
              border: 0,
              borderRadius: 'var(--radius-none)',
              padding: pad,
              marginBottom: -1,
              cursor: 'pointer',
              transition: 'var(--transition-color)',
              display: 'inline-flex',
              gap: 'var(--space-2)',
              alignItems: 'center'
            }}
          >
            {it.label}
            {it.count != null ? <span style={{ opacity: on ? 0.75 : 0.6, fontVariantNumeric: 'tabular-nums' }}>{it.count}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
