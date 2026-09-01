import React from 'react';
import { Button } from '../core/Button.jsx';
import { Rule } from '../core/Rule.jsx';

/* A sheet of paper laid on top of the page. Fades in, does not scale or bounce.
   The scrim is carbon at low opacity — never blurred.
   While open: focus is held inside the sheet, Escape closes, and focus returns
   to wherever the reader was when it opened. */
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Dialog({ open = true, title, subtitle, onClose, footer, width = 520, children, style, ...rest }) {
  const panelRef = React.useRef(null);
  const titleId = title ? 'dlg-' + String(title).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined;

  React.useEffect(() => {
    if (!open) return;
    const opener = document.activeElement;
    const panel = panelRef.current;
    if (panel) {
      const first = panel.querySelector(FOCUSABLE);
      (first || panel).focus();
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose && onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll(FOCUSABLE);
      if (!focusables.length) { e.preventDefault(); return; }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === panelRef.current)) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown, true);
    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      if (opener && opener.focus) opener.focus();
    };
  }, [open, onClose]);

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
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={rest['aria-label'] ? undefined : titleId}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--surface-raised)',
          boxShadow: 'var(--shadow-overlay)',
          borderRadius: 'var(--radius-none)',
          width: '100%', maxWidth: width,
          padding: 'var(--space-6) var(--space-6) var(--space-5)',
          display: 'grid', gap: 'var(--space-4)',
          outline: 'none',
          ...style
        }}
      >
        <div style={{ display: 'grid', gap: 'var(--space-2)' }}>
          {title ? <h2 id={titleId} style={{ font: 'var(--type-display-sm)', letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase', margin: 0 }}>{title}</h2> : null}
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
