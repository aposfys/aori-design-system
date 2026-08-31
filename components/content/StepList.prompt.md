Use `StepList` for how a piece is made, how to measure a ring, what happens after an order.

```jsx
<StepList items={[
  { label: 'Cast', note: 'Lost wax, in bronze or silver.' },
  { label: 'Filed', note: 'By hand, until the ridge is sharp.' },
  { label: 'Polished' }
]} />
<StepList marker="number" items={['Measure', 'Order', 'Ships in three days']} />
```

- `marker="dot"` cycles the pigment set — the beads are the brand's bullet. `marker="number"` sets two-digit numerals in the ledger voice for anything administrative.
