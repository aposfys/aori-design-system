Use `Textarea` for a message, an engraving request, a delivery note.

```jsx
<Textarea label="Message" rows={6} hint="Tell us what you are looking for and where you are." />
```

- Vertical resize only. Never auto-grow.
- `error` behaves as on `Input`: rust border and message, `aria-invalid`, and the message wired in with `aria-describedby`.
