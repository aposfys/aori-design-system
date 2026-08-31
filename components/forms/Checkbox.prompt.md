Use `Checkbox` for opt-ins and single confirmations.

```jsx
<Checkbox label="Tell me when a new run is made" checked={on} onChange={e => setOn(e.target.checked)} />
<Checkbox label="Gift wrap" pigment="var(--pigment-water)" checked={wrap} onChange={...} />
```

- Checked state is a flat pigment fill, not a tick. Do not add one.
- The label sets uppercase in the annotation voice, so keep it short.
