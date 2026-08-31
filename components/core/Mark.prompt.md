Use `Mark` for the handful of places an interface genuinely needs a glyph — closing a dialog, stepping a quantity, pointing at the next thing.

```jsx
<Mark name="arrow" />
<Mark name="close" size={16} />
<Mark name="chevron-down" color="var(--text-muted)" />
```

- Seven paths only: `close`, `plus`, `minus`, `arrow`, `arrow-left`, `chevron`, `chevron-down`.
- 2px stroke, square caps, mitred joins. Do not round the caps.
- This brand has no icon set and must not acquire one. For anything larger or more descriptive, use a plate from `assets/motifs/`.
