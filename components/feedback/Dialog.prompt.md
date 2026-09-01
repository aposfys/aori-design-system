A sheet laid over the page — sizing guide, care instructions, an order confirmation. Fades in over a carbon scrim; never scales, bounces or blurs.

```jsx
<Dialog open={open} title="Finding your size" subtitle="Rings · 925 silver" onClose={close}>
  Wrap a strip of paper around the base of your finger and mark where it meets.
</Dialog>
```

Composes `Button` and `Rule`. Default footer is one secondary Close button; pass `footer={null}` for a dialog with no actions, or your own node for confirm/cancel. Clicking the scrim closes it, and so does Escape.

While open, focus is trapped inside the sheet and returns to the opener on close. The title is an `h2` wired in with `aria-labelledby`; for a dialog without a `title`, pass `aria-label`.
