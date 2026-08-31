Use `DotChain` as a decorative rule, a progress indicator, or an interactive selector.

```jsx
<DotChain />
<DotChain count={5} active={2} size={14} gap={6} />
<DotChain count={4} active={size} onSelect={setSize} />
```

- Beads sit flush by default (`gap: 0`) so the chain reads as a strung necklace. Open the gap only when it is acting as a control.
