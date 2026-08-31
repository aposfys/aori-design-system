Use `Input` for every single-line field — name, email, ring size, postcode.

```jsx
<Input label="Email" type="email" placeholder="you@example.com" />
<Input label="Ring size" hint="Measured in millimetres, inside diameter." />
<Input label="Email" error="We need an email to send the order." />
```

- `hint` sets in the body serif; `error` sets in the caption voice and turns the border red ochre. Only one shows at a time.
- The label is generated as `htmlFor` automatically from the label text unless you pass `id`.
