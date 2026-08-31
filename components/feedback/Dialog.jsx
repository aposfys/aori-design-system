import React from 'react';
import { Button } from '../core/Button.jsx';
import { Rule } from '../core/Rule.jsx';

/* A sheet of paper laid on top of the page. Fades in, does not scale or bounce.
   The scrim is carbon at low opacity — never blurred. */
export function Dialog({ open = true, title, subtitle, onClose, footer, width = 520, children, style, ...rest }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 40,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'var(--space-6)',
        background: 'color-mix(in oklab, var(--ink-900) 46%, transparent)',
        animation: `aori-dialog-in var(--dur-base) var(--ease-out-soft)`
      }}
      onClick={onClose}
    >
      <style>{'@keyframes aori-dialog-in{from{opacity:0}to{opacity:1}}'}</style>
      <div
        {...rest}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--surface-raised)',
          boxShadow: 'var(--shadow-overlay)',
          borderRadius: 'var(--radius-none)',
          width: '100%', maxWidth: width,
          padding: 'var(--space-6) var(--space-6) var(--space-5)',
          display: 'grid', gap: 'var(--space-4)',
          ...style
        }}
      >
        <div style={{ display: 'grid', gap: 'var(--space-2)' }}>
          {title ? <div style={{ font: 'var(--type-display-sm)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase' }}>{title}</div> : null}
          {subtitle ? <div style={{ font: 'var(--type-annotation-sm)', letterSpacing: 'var(--tracking-annotation)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{subtitle}</div> : null}
        </div>
        <Rule weight="hair" />
        <div style={{ font: 'var(--type-body)' }}>{children}</div>
        {footer === null ? null : (
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end', paddingTop: 'var(--space-1)' }}>
            {footer ?? <Button variant="secondary" size="sm" onClick={onClose}>Close</Button>}
          </div>
        )}
      </div>
    </div>
  );
}
