Use `Select` for size, length, finish, country.

```jsx
<Select label="Size" options={['52 · 16,6 mm', '54 · 17,2 mm', '56 · 17,8 mm']} hint="Not sure? Read the sizing guide." />
<Select label="Finish" options={[{ value: 'matte', label: 'Matte' }, { value: 'polished', label: 'Polished' }]} />
```

- The native arrow is replaced with `Mark name="chevron-down"`. Do not restyle it further.
