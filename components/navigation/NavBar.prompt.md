The site header. One hairline underneath and nothing else — no shadow, no blur, no translucency, ever.

```jsx
<NavBar
  items={[{label:'Collections'},{label:'The workshop'},{label:'Journal'}]}
  active="Collections"
  onSelect={setPage}
  right={<Button variant="quiet" size="sm">Basket · 2</Button>}
/>
```

The active item takes a 2px terracotta underline (saffron on `ground="ground"`, because terracotta goes muddy on burnt olive). The mark is **type-set** by default — the painted wordmark is only legal at 28px and up, and a header is smaller than that. Pass `markSrc` only for an oversized header.
