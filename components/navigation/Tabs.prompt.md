A row of stamps sitting on an unbroken hairline — product detail sections, collection filters. Not folder cards; nothing curves.

```jsx
<Tabs
  items={[{label:'Description'},{label:'Materials'},{label:'Care',count:3}]}
  value={tab} onChange={setTab}
/>
```

The selected tab takes a flat pigment fill with paper-white type; unselected are muted carbon on nothing. `count` renders tabular-nums after the label. Pass `pigment` to switch the fill for a collection page.

Keyboard follows the automatic-activation tab pattern: Left/Right move and select, Home/End jump, and only the selected stamp sits in the tab order. Give each item a `panelId` and the matching panel `role="tabpanel"` with `aria-labelledby` pointing back at the tab.
