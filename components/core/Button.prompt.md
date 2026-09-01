Use `Button` for every action in the system — square corners, uppercase annotation voice, no shadow, no radius.

```jsx
<Button>Add to basket</Button>
<Button variant="secondary" size="sm">Sizing guide</Button>
<Button variant="quiet" as="a" href="#">Read how it is made</Button>
```

- `variant` — `primary` (flat pigment field, defaults to `--accent` red ochre), `secondary` (2px carbon outline that inverts on hover), `quiet` (underlined link, no box).
- `size` — `sm` / `md` / `lg`. `md` is the default and correct almost everywhere.
- `pigment` — swap the primary fill for another token, e.g. `pigment="var(--pigment-water)"`.
- Hover darkens the pigment one step — the same direction as press; it never lightens. Press adds `translateY(1px)`. Never scale, never lift, never add a shadow.
- Space and Enter press like the mouse. With `as="a"`, `disabled` renders `aria-disabled`, leaves the tab order and swallows the click — a link-button never silently ignores its disabled state.
