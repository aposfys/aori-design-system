One-line stamped note in the page flow — stock status, a shipping caveat, an order confirmation. Never floats, never auto-dismisses.

```jsx
<Notice tone="stop">Twelve made. All twelve gone. We will make more, but not the same.</Notice>
<Notice tone="warm" label="Made to order">Allow ten working days from the workshop in Heraklion.</Notice>
<Notice tone="ledger" ground="ledger">Ref 04 · 925 silver · 18mm · hallmarked</Notice>
```

Tones map to the four status pigments plus a neutral hairline. `ground="ledger"` puts it on stone stock with form-green ink — use inside a specification panel. The pigment appears only as the 4px left rule and the label; the body stays carbon.
