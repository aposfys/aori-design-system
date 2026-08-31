Use `Plate` for every image, illustration and colour field in the system. Nothing sits on the page uncontained.

```jsx
<Plate src="../../assets/illustrations-v2-web/psiloritis.jpg" alt="The ridge" ratio="landscape" />
<Plate field="var(--pigment-crimson)" ratio="square" width={220} />
<Plate src={photo} ratio="portrait" tilt={-1.5} />
```

- Square corners always. The only curve in the brand is the full circle — that is `Dot`.
- No shadow. Reach for `--shadow-sheet` only when depicting a physical sheet resting on a surface.
- `field` renders a flat pigment plate when there is no image yet — the correct placeholder.
