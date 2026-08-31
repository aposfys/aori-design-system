Use `Button` for every action in the system — square corners, uppercase annotation voice, no shadow, no radius.

```jsx
<Button>Add to basket</Button>
<Button variant="secondary" size="sm">Sizing guide</Button>
<Button variant="quiet" as="a" href="#">Read how it is made</Button>
```

- `variant` — `primary` (flat pigment field, defaults to `--accent` red ochre), `secondary` (2px carbon outline that inverts on hover), `quiet` (underlined link, no box).
- `size` — `sm` / `md` / `lg`. `md` is the default and correct almost everywhere.
- `pigment` — swap the primary fill for another token, e.g. `pigment="var(--pigment-water)"`.
- Hover changes colour only. Press adds `translateY(1px)`. Never scale, never lift, never add a shadow.
