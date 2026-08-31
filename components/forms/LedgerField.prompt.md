Use `LedgerField` for anything the workshop would have written on a printed form: dimensions, weight, run number, dispatch date.

```jsx
<LedgerField label="Material" value="Sterling silver" />
<LedgerField label="Weight" value="14 g" align="right" />
<LedgerField label="Run" emphasis>012 / 012</LedgerField>
```

- Lays out well in a flex or grid row of four to six cells against `--surface-ledger`.
- This is the ONLY place the system uses the cool stone register. Do not use it for marketing copy.
