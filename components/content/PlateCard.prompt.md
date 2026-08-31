Use `PlateCard` for a piece in a grid: plate, caption, one line of metadata. No box around it.

```jsx
<PlateCard src={img} title="Psiloritis ridge cuff" meta="Sterling silver · 180,00 €" href="#" />
```

- The hover rule is inverted from convention: when one card is hovered, pass `dim` to every OTHER card. The target stays exactly where it is.
- `meta` sets in the body serif at label size — put material, price and run size there.
