/* @ds-bundle: {"format":4,"namespace":"AORIDesignSystem_12e58c","components":[{"name":"Caption","sourcePath":"components/content/Caption.jsx"},{"name":"Dot","sourcePath":"components/content/Dot.jsx"},{"name":"DotChain","sourcePath":"components/content/DotChain.jsx"},{"name":"Plate","sourcePath":"components/content/Plate.jsx"},{"name":"PlateCard","sourcePath":"components/content/PlateCard.jsx"},{"name":"PullQuote","sourcePath":"components/content/PullQuote.jsx"},{"name":"StepList","sourcePath":"components/content/StepList.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Mark","sourcePath":"components/core/Mark.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Notice","sourcePath":"components/feedback/Notice.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"LedgerField","sourcePath":"components/forms/LedgerField.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/content/Caption.jsx":"7eaa5fa6e885","components/content/Dot.jsx":"c84b318863c7","components/content/DotChain.jsx":"72c693b6e4b1","components/content/Plate.jsx":"64edd6e9f03e","components/content/PlateCard.jsx":"ccf6b9939582","components/content/PullQuote.jsx":"faf177220d1c","components/content/StepList.jsx":"a0026132f8cb","components/core/Button.jsx":"bc03024af245","components/core/Mark.jsx":"83c43767ef8c","components/core/Rule.jsx":"1ffb176c4bef","components/core/Tag.jsx":"f210d42e3989","components/feedback/Dialog.jsx":"11c2108d2b07","components/feedback/Notice.jsx":"5064d3b97f71","components/forms/Checkbox.jsx":"4d67a5c61df4","components/forms/Input.jsx":"6a01fa8c260f","components/forms/LedgerField.jsx":"ba85b7bad4a3","components/forms/Select.jsx":"be346615ce96","components/forms/Textarea.jsx":"e8e6fa9433b0","components/navigation/NavBar.jsx":"f8fae1e37021","components/navigation/Tabs.jsx":"d7810f662cbf","reference/paint-engine.js":"df6352449244","reference/prior-bundle.js":"7251bcaa56bc","reference/prior-ui-kit/About.jsx":"054de63597fb","reference/prior-ui-kit/Detail.jsx":"003e2305f6bf","reference/prior-ui-kit/Home.jsx":"2255f2f65ffc","reference/prior-ui-kit/Series.jsx":"704e3c8fd6ea","reference/prior-ui-kit/Work.jsx":"e9ba00871527","reference/prior-ui-kit/data.js":"801ea97efb2f","ui_kits/storefront/Chrome.jsx":"d2094e150a0d","ui_kits/storefront/Product.jsx":"bc68d2bcba59","ui_kits/storefront/StorefrontHome.jsx":"20ff5bd6060e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AORIDesignSystem_12e58c = window.AORIDesignSystem_12e58c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Caption.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The hand-printed caption voice: uppercase, tracked, bold, short. */
const tones = {
  ink: 'var(--text-body)',
  muted: 'var(--text-muted)',
  paper: 'var(--text-on-pigment)'
};
function Caption({
  children,
  align = 'left',
  tone = 'ink',
  tilt = 0,
  size = 'md',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      font: size === 'sm' ? 'var(--type-caption)' : 'var(--type-annotation-sm)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase',
      color: tones[tone],
      textAlign: align,
      maxWidth: 'var(--measure-annotation)',
      marginTop: 'var(--gap-caption)',
      transform: tilt ? 'rotate(' + tilt + 'deg)' : undefined,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Caption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Caption.jsx", error: String((e && e.message) || e) }); }

// components/content/Dot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The bead. A flat circle is the brand's bullet, step marker and progress unit —
   and the only curve permitted anywhere in the system. */
function Dot({
  pigment = 'var(--pigment-pink)',
  size = 20,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      background: pigment,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Dot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Dot.jsx", error: String((e && e.message) || e) }); }

// components/content/DotChain.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT = ['var(--pigment-pink)', 'var(--pigment-pink)', 'var(--pigment-ultramarine)', 'var(--pigment-red)', 'var(--pigment-yellow)', 'var(--pigment-pink)', 'var(--pigment-teal)', 'var(--pigment-pink)'];

/* A strung line of beads. Reads as decoration, a stepper, or a size selector. */
function DotChain({
  colors = DEFAULT,
  size = 20,
  count,
  active,
  gap = 0,
  style,
  onSelect,
  ...rest
}) {
  const list = count ? Array.from({
    length: count
  }, (_, i) => colors[i % colors.length]) : colors;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap,
      ...style
    }
  }), list.map((c, i) => /*#__PURE__*/React.createElement(__ds_scope.Dot, {
    key: i,
    size: size,
    pigment: active == null || i === active ? c : 'var(--paper-500)',
    onClick: onSelect ? () => onSelect(i) : undefined,
    style: onSelect ? {
      cursor: 'pointer'
    } : undefined
  })));
}
Object.assign(__ds_scope, { DotChain });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DotChain.jsx", error: String((e && e.message) || e) }); }

// components/content/Plate.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The plate is the unit of the system: a rectangle of flat pigment or a photograph,
   inside an unpainted paper margin. Three proportions carry most work. Never a radius. */
const ratios = {
  portrait: '3 / 4',
  landscape: '4 / 3',
  square: '1 / 1',
  tall: '2 / 3',
  wide: '16 / 9'
};
function Plate({
  src,
  alt = '',
  field = 'var(--plate-default-field)',
  ratio = 'portrait',
  margin = 'var(--border-plate)',
  width,
  tilt = 0,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      width,
      border: margin + ' solid var(--paper-200)',
      borderRadius: 'var(--radius-none)',
      background: src ? 'var(--paper-300)' : field,
      aspectRatio: ratios[ratio] || ratio,
      overflow: 'hidden',
      transform: tilt ? 'rotate(' + tilt + 'deg)' : undefined,
      position: 'relative',
      ...style
    }
  }), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : children);
}
Object.assign(__ds_scope, { Plate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Plate.jsx", error: String((e && e.message) || e) }); }

// components/content/PlateCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A product card is a plate plus a caption. There is no container box, no border, no shadow.
   In a grid, hover dims the SIBLINGS via `dim` — the target itself never moves. */
function PlateCard({
  src,
  alt = '',
  field,
  ratio = 'portrait',
  title,
  meta,
  href,
  width,
  tilt = 0,
  dim = false,
  style,
  ...rest
}) {
  const Wrapper = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Wrapper, _extends({}, rest, {
    href: href,
    style: {
      display: 'block',
      width,
      textDecoration: 'none',
      color: 'inherit',
      opacity: dim ? 0.55 : 1,
      transition: 'var(--transition-fade)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Plate, {
    src: src,
    alt: alt,
    field: field,
    ratio: ratio,
    tilt: tilt
  }), title ? /*#__PURE__*/React.createElement(__ds_scope.Caption, null, title) : null, meta ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-form-label)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--tracking-form)',
      marginTop: 'var(--space-1)'
    }
  }, meta) : null);
}
Object.assign(__ds_scope, { PlateCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PlateCard.jsx", error: String((e && e.message) || e) }); }

// components/content/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 'var(--text-xl)',
  md: 'var(--text-2xl)',
  lg: 'var(--text-3xl)'
};

/* A line of display lettering standing alone. Caps, tracked, short measure. */
function PullQuote({
  children,
  attribution,
  size = 'md',
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      textAlign: align,
      ...style
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: sizes[size],
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-title)',
      textTransform: 'uppercase',
      color: 'var(--text-display)',
      maxWidth: '22ch'
    }
  }, children), attribution ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: 'var(--type-caption)',
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-4)'
    }
  }, attribution) : null);
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/content/StepList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PIGMENTS = ['var(--pigment-red)', 'var(--pigment-ultramarine)', 'var(--pigment-yellow)', 'var(--pigment-teal)', 'var(--pigment-pink)', 'var(--pigment-olive)'];

/* An ordered list marked with beads, or with two-digit numbers in the ledger voice. */
function StepList({
  items = [],
  marker = 'dot',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({}, rest, {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 'var(--space-4)',
      ...style
    }
  }), items.map((item, i) => {
    const label = typeof item === 'string' ? item : item.label;
    const note = typeof item === 'string' ? null : item.note;
    const pig = typeof item === 'object' && item.pigment || PIGMENTS[i % PIGMENTS.length];
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        gap: 'var(--space-4)',
        alignItems: 'flex-start'
      }
    }, marker === 'dot' ? /*#__PURE__*/React.createElement(__ds_scope.Dot, {
      pigment: pig,
      size: 16,
      style: {
        marginTop: 5
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-form-label)',
        color: 'var(--text-muted)',
        width: 22,
        flex: 'none',
        marginTop: 4
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-annotation)',
        letterSpacing: 'var(--tracking-annotation)',
        textTransform: 'uppercase'
      }
    }, label), note ? /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)',
        marginTop: 'var(--space-1)'
      }
    }, note) : null));
  }));
}
Object.assign(__ds_scope, { StepList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepList.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  font: 'var(--type-ui)',
  letterSpacing: 'var(--tracking-annotation)',
  textTransform: 'uppercase',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  border: 'var(--border-ink) solid transparent',
  borderRadius: 'var(--radius-none)',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'var(--transition-color)',
  boxShadow: 'none'
};
const sizes = {
  sm: {
    padding: '6px 14px',
    fontSize: 'var(--text-xs)'
  },
  md: {
    padding: 'var(--pad-control)',
    fontSize: 'var(--text-sm)'
  },
  lg: {
    padding: '16px 32px',
    fontSize: 'var(--text-md)'
  }
};

/* Hover changes colour, never geometry. Press adds 1px of travel and nothing else. */
function Button({
  variant = 'primary',
  size = 'md',
  pigment = 'var(--accent)',
  as = 'button',
  disabled = false,
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const skins = {
    primary: {
      background: press ? 'var(--accent-press)' : hover ? 'var(--accent-hover)' : pigment,
      color: 'var(--text-on-pigment)',
      borderColor: 'transparent'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--ink-900)',
      borderColor: 'var(--rule-ink)',
      ...(hover ? {
        background: 'var(--ink-900)',
        color: 'var(--paper-200)'
      } : null)
    },
    quiet: {
      background: 'transparent',
      color: hover ? 'var(--link-hover)' : 'var(--link)',
      borderColor: 'transparent',
      padding: '4px 0',
      textDecoration: 'underline',
      textDecorationThickness: hover ? '2px' : '1px',
      textUnderlineOffset: '4px'
    }
  };
  const El = as;
  return /*#__PURE__*/React.createElement(El, _extends({}, rest, {
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...sizes[size],
      ...skins[variant],
      width: fullWidth ? '100%' : undefined,
      opacity: disabled ? 0.4 : 1,
      pointerEvents: disabled ? 'none' : undefined,
      transform: press && variant !== 'quiet' ? 'translateY(1px)' : 'none',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Mark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The only five UI strokes the brand permits. If a project needs a sixth, raise it —
   do not import an icon library. Everything else is a painted motif. */
const paths = {
  close: 'M4 4 L16 16 M16 4 L4 16',
  plus: 'M10 3 L10 17 M3 10 L17 10',
  minus: 'M3 10 L17 10',
  arrow: 'M3 10 L17 10 M11 4 L17 10 L11 16',
  'arrow-left': 'M17 10 L3 10 M9 4 L3 10 L9 16',
  chevron: 'M7 4 L13 10 L7 16',
  'chevron-down': 'M4 7 L10 13 L16 7'
};
function Mark({
  name = 'close',
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    width: size,
    height: size,
    viewBox: "0 0 20 20",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flex: 'none',
      ...style
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: paths[name] || paths.close,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "square",
    strokeLinejoin: "miter"
  }));
}
Object.assign(__ds_scope, { Mark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Mark.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const weights = {
  hair: '1px',
  ink: '2px',
  brush: '3px'
};
const colors = {
  hair: 'var(--rule-hair)',
  ink: 'var(--rule-ink)',
  brush: 'var(--rule-ink)'
};

/* Three line weights, and only three. */
function Rule({
  weight = 'ink',
  color,
  spacing = 'var(--space-6)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("hr", _extends({}, rest, {
    style: {
      border: 0,
      borderTop: `${weights[weight]} solid ${color || colors[weight]}`,
      margin: `${spacing} 0`,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A stamped label: material, run size, collection. Square, tracked, uppercase —
   except the ledger variant, which sets in the body serif like a form field. */
function Tag({
  children,
  pigment,
  variant = 'outline',
  size = 'md',
  style,
  ...rest
}) {
  const pad = size === 'sm' ? '3px 8px' : '5px 11px';
  const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';
  const skins = {
    outline: {
      background: 'transparent',
      color: 'var(--ink-900)',
      border: 'var(--border-hair) solid var(--rule-ink)'
    },
    solid: {
      background: pigment || 'var(--pigment-pink)',
      color: 'var(--text-on-pigment)',
      border: 'var(--border-hair) solid transparent'
    },
    ledger: {
      background: 'var(--surface-ledger)',
      color: 'var(--text-form)',
      border: 'var(--border-hair) solid var(--ledger-400)',
      fontFamily: 'var(--font-body)',
      textTransform: 'none',
      letterSpacing: 'var(--tracking-form)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: pad,
      font: 'var(--type-caption)',
      fontSize: fs,
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-none)',
      whiteSpace: 'nowrap',
      ...skins[variant],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A sheet of paper laid on top of the page. Fades in, does not scale or bounce.
   The scrim is carbon at low opacity — never blurred. */
function Dialog({
  open = true,
  title,
  subtitle,
  onClose,
  footer,
  width = 520,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      background: 'color-mix(in oklab, var(--ink-900) 46%, transparent)',
      animation: `aori-dialog-in var(--dur-base) var(--ease-out-soft)`
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes aori-dialog-in{from{opacity:0}to{opacity:1}}'), /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-raised)',
      boxShadow: 'var(--shadow-overlay)',
      borderRadius: 'var(--radius-none)',
      width: '100%',
      maxWidth: width,
      padding: 'var(--space-6) var(--space-6) var(--space-5)',
      display: 'grid',
      gap: 'var(--space-4)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-display-sm)',
      letterSpacing: 'var(--tracking-title)',
      textTransform: 'uppercase'
    }
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-annotation-sm)',
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, subtitle) : null), /*#__PURE__*/React.createElement(__ds_scope.Rule, {
    weight: "hair"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)'
    }
  }, children), footer === null ? null : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end',
      paddingTop: 'var(--space-1)'
    }
  }, footer ?? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: onClose
  }, "Close"))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A stamped note on the page, not a floating toast. Sits in the flow, keeps a
   left rule in its pigment and never rounds a corner. */
const tones = {
  calm: {
    pigment: 'var(--status-calm)',
    label: 'Note'
  },
  warm: {
    pigment: 'var(--status-warm)',
    label: 'Please note'
  },
  stop: {
    pigment: 'var(--status-stop)',
    label: 'Sold out'
  },
  go: {
    pigment: 'var(--status-go)',
    label: 'Confirmed'
  },
  ledger: {
    pigment: 'var(--ledger-400)',
    label: 'For the record'
  }
};
function Notice({
  tone = 'calm',
  label,
  ground = 'paper',
  children,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.calm;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: ground === 'ledger' ? 'var(--surface-ledger)' : 'var(--surface-raised)',
      boxShadow: 'inset 0 0 0 1px var(--rule-soft)',
      borderLeft: `4px solid ${t.pigment}`,
      borderRadius: 'var(--radius-none)',
      padding: 'var(--space-4) var(--space-5)',
      display: 'grid',
      gap: 'var(--space-2)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-annotation-sm)',
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase',
      color: t.pigment
    }
  }, label ?? t.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: ground === 'ledger' ? 'var(--text-form)' : 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notice.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* An 18px square with a 2px carbon border. Checked fills flat with pigment —
   there is no tick glyph, because a flat field is how this brand marks a thing. */
function Checkbox({
  label,
  checked,
  onChange,
  pigment = 'var(--pigment-red)',
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      marginTop: 1,
      border: 'var(--border-ink) solid var(--rule-ink)',
      borderRadius: 'var(--radius-none)',
      background: checked ? pigment : 'transparent',
      transition: 'var(--transition-color)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-annotation-sm)',
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Form stock is a hairline cell on raised paper: square, quiet, no radius, no shadow.
   The label is in the annotation voice; the value the customer types is in the body serif. */
const field = {
  width: '100%',
  font: 'var(--type-body)',
  fontSize: 'var(--text-sm)',
  color: 'var(--text-body)',
  background: 'var(--surface-raised)',
  border: 'var(--border-hair) solid var(--ledger-400)',
  borderRadius: 'var(--radius-none)',
  padding: '11px 13px',
  transition: 'var(--transition-color)'
};
function Input({
  label,
  hint,
  error,
  id,
  style,
  ...rest
}) {
  const inputId = id || 'in-' + (label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--type-caption)',
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    id: inputId,
    style: {
      ...field,
      borderColor: error ? 'var(--pigment-red)' : 'var(--ledger-400)'
    }
  })), error ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase',
      color: 'var(--pigment-red)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/LedgerField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A hairline cell on stone stock — the administrative register. Sizes, weights,
   order numbers, shipping dates. Italic label by default, like a printed form. */
function LedgerField({
  label,
  value,
  children,
  width,
  align = 'left',
  emphasis = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      width,
      border: 'var(--border-hair) solid var(--ledger-400)',
      background: 'var(--surface-ledger)',
      padding: '3px 6px 7px',
      minHeight: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-form-label)',
      fontStyle: emphasis ? 'normal' : 'italic',
      fontWeight: emphasis ? 'var(--weight-bold)' : 'var(--weight-regular)',
      letterSpacing: 'var(--tracking-form)',
      color: 'var(--text-form)',
      textTransform: emphasis ? 'uppercase' : 'none'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      textAlign: align,
      marginTop: 'auto'
    }
  }, children != null ? children : value));
}
Object.assign(__ds_scope, { LedgerField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/LedgerField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const field = {
  width: '100%',
  font: 'var(--type-body)',
  fontSize: 'var(--text-sm)',
  color: 'var(--text-body)',
  background: 'var(--surface-raised)',
  border: 'var(--border-hair) solid var(--ledger-400)',
  borderRadius: 'var(--radius-none)',
  padding: '11px 13px',
  transition: 'var(--transition-color)'
};
function Select({
  label,
  options = [],
  hint,
  id,
  style,
  ...rest
}) {
  const inputId = id || 'sel-' + (label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--type-caption)',
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    id: inputId,
    style: {
      ...field,
      appearance: 'none',
      paddingRight: '38px',
      cursor: 'pointer'
    }
  }), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    name: "chevron-down",
    size: 16,
    style: {
      position: 'absolute',
      right: 12,
      pointerEvents: 'none'
    }
  })), hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const field = {
  width: '100%',
  font: 'var(--type-body)',
  fontSize: 'var(--text-sm)',
  color: 'var(--text-body)',
  background: 'var(--surface-raised)',
  border: 'var(--border-hair) solid var(--ledger-400)',
  borderRadius: 'var(--radius-none)',
  padding: '11px 13px',
  transition: 'var(--transition-color)'
};
function Textarea({
  label,
  hint,
  rows = 5,
  id,
  style,
  ...rest
}) {
  const inputId = id || 'ta-' + (label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--type-caption)',
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase'
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({}, rest, {
    id: inputId,
    rows: rows,
    style: {
      ...field,
      resize: 'vertical',
      lineHeight: 'var(--leading-normal)'
    }
  })), hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The one fixed element in the system. A hairline under it, nothing else —
   no shadow, no blur, no translucency. The mark is type-set here by design:
   the painted wordmark is only legal at 28px and up, and a nav bar is smaller. */
function NavBar({
  items = [],
  active,
  onSelect,
  right,
  ground = 'paper',
  name = 'AÓRI',
  markSrc,
  markHref = '#',
  sticky = true,
  style,
  ...rest
}) {
  const dark = ground === 'ground';
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      position: sticky ? 'sticky' : 'static',
      top: 0,
      zIndex: 20,
      background: dark ? 'var(--surface-ground)' : 'var(--surface-page)',
      borderBottom: `1px solid ${dark ? 'color-mix(in oklab, var(--paper-200) 22%, transparent)' : 'var(--rule-hair)'}`,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7)',
      padding: 'var(--space-4) var(--page-margin)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: markHref,
    style: {
      display: 'block',
      textDecoration: 'none',
      flex: '0 0 auto',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      letterSpacing: 'var(--tracking-display)',
      textTransform: 'uppercase',
      color: dark ? 'var(--paper-200)' : 'var(--ink-900)',
      lineHeight: 1
    }
  }, markSrc ? /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: name,
    style: {
      height: 26,
      display: 'block'
    }
  }) : name), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      flex: 1
    }
  }, items.map(it => {
    const on = (it.id ?? it.label) === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it.id ?? it.label,
      href: it.href ?? '#',
      onClick: onSelect ? e => {
        e.preventDefault();
        onSelect(it.id ?? it.label);
      } : undefined,
      style: {
        font: 'var(--type-ui)',
        letterSpacing: 'var(--tracking-annotation)',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: dark ? 'var(--paper-200)' : 'var(--ink-900)',
        paddingBottom: 2,
        borderBottom: `2px solid ${on ? dark ? 'var(--pigment-saffron)' : 'var(--accent)' : 'transparent'}`,
        transition: 'var(--transition-color)'
      }
    }, it.label);
  })), right ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      flex: '0 0 auto'
    }
  }, right) : null);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tabs read as a row of stamps on a hairline, not as folder cards.
   The selected one carries the pigment; the rule under the row is unbroken. */
function Tabs({
  items = [],
  value,
  onChange,
  size = 'md',
  pigment = 'var(--accent)',
  style,
  ...rest
}) {
  const pad = size === 'sm' ? '6px 12px' : '9px 16px';
  const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-1)',
      borderBottom: '1px solid var(--rule-hair)',
      ...style
    }
  }), items.map(it => {
    const id = it.id ?? it.label;
    const on = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(id),
      style: {
        font: 'var(--type-ui)',
        fontSize: fs,
        letterSpacing: 'var(--tracking-annotation)',
        textTransform: 'uppercase',
        background: on ? pigment : 'transparent',
        color: on ? 'var(--text-on-pigment)' : 'var(--text-muted)',
        border: 0,
        borderRadius: 'var(--radius-none)',
        padding: pad,
        marginBottom: -1,
        cursor: 'pointer',
        transition: 'var(--transition-color)',
        display: 'inline-flex',
        gap: 'var(--space-2)',
        alignItems: 'center'
      }
    }, it.label, it.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: on ? 0.75 : 0.6,
        fontVariantNumeric: 'tabular-nums'
      }
    }, it.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// reference/paint-engine.js
try { (() => {
// AORI illustration engine — gouache in SVG.
// Techniques: hand-jittered silhouettes, per-mass tonal modelling with
// clipped brush strokes, drybrush broken edges, canvas grain + paper tooth.
// Deterministic (seeded) so a scene is reproducible.

function makeRng(seed) {
  let s = seed >>> 0;
  return () => {
    s = s * 1664525 + 1013904223 >>> 0;
    return s / 4294967296;
  };
}
function smooth(p, closed) {
  if (p.length < 3) {
    return 'M' + p.map(q => q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join(' L');
  }
  const P = closed ? [p[p.length - 1], ...p, p[0], p[1]] : [p[0], ...p, p[p.length - 1]];
  let d = 'M' + P[1][0].toFixed(1) + ' ' + P[1][1].toFixed(1);
  for (let i = 1; i < P.length - 2; i++) {
    const [x0, y0] = P[i - 1],
      [x1, y1] = P[i],
      [x2, y2] = P[i + 1],
      [x3, y3] = P[i + 2];
    d += 'C' + (x1 + (x2 - x0) / 6).toFixed(1) + ' ' + (y1 + (y2 - y0) / 6).toFixed(1) + ' ' + (x2 - (x3 - x1) / 6).toFixed(1) + ' ' + (y2 - (y3 - y1) / 6).toFixed(1) + ' ' + x2.toFixed(1) + ' ' + y2.toFixed(1);
  }
  return d + (closed ? 'Z' : '');
}

// organic closed blob around a centre
function blob(cx, cy, rx, ry, n, jit, r) {
  const p = [];
  for (let i = 0; i < n; i++) {
    const a = i / n * Math.PI * 2;
    const k = 1 + (r() * 2 - 1) * jit;
    p.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
  }
  return p;
}
// wavy horizontal edge polyline
function band(x0, x1, y, amp, steps, r) {
  const p = [];
  for (let i = 0; i <= steps; i++) p.push([x0 + (x1 - x0) * i / steps, y + (r() * 2 - 1) * amp]);
  return p;
}
function bbox(pts) {
  let a = 1e9,
    b = 1e9,
    c = -1e9,
    d = -1e9;
  for (const [x, y] of pts) {
    a = Math.min(a, x);
    b = Math.min(b, y);
    c = Math.max(c, x);
    d = Math.max(d, y);
  }
  return [a, b, c, d];
}

// one tapered brush stroke: short smoothed lozenge, angle in rad
function stroke(cx, cy, len, wid, ang, r) {
  const ca = Math.cos(ang),
    sa = Math.sin(ang);
  const pts = [];
  const seg = 5;
  for (let i = 0; i <= seg; i++) {
    const t = i / seg;
    const w = wid * Math.sin(Math.PI * t) * (0.7 + r() * 0.6);
    const lx = (t - 0.5) * len,
      ly = w / 2;
    pts.push([cx + lx * ca - ly * sa, cy + lx * sa + ly * ca]);
  }
  for (let i = seg; i >= 0; i--) {
    const t = i / seg;
    const w = wid * Math.sin(Math.PI * t) * (0.7 + r() * 0.6);
    const lx = (t - 0.5) * len,
      ly = -w / 2;
    pts.push([cx + lx * ca - ly * sa, cy + lx * sa + ly * ca]);
  }
  return smooth(pts, true);
}
let _cid = 0;
// paint a modelled mass. opts: base, dark, light, ang (stroke direction rad),
// density, edge (drybrush colour or null), squit (silhouette jitter)
function mass(pts, opts) {
  const o = Object.assign({
    dark: null,
    light: null,
    ang: 0,
    density: 0.9,
    edge: null,
    squit: 0.05
  }, opts);
  const r = o.r;
  const d = smooth(pts, true);
  const cid = 'c' + _cid++;
  const [minx, miny, maxx, maxy] = bbox(pts);
  let s = '<clipPath id="' + cid + '"><path d="' + d + '"/></clipPath>';
  s += '<path d="' + d + '" fill="' + o.base + '"/>';
  s += '<g clip-path="url(#' + cid + ')">';
  // shadow scumble: a few broad soft patches toward one side
  if (o.dark) {
    const n = Math.round(3 + o.density * 4);
    for (let i = 0; i < n; i++) {
      const cx = minx + (maxx - minx) * (0.15 + r() * 0.7);
      const cy = miny + (maxy - miny) * (0.45 + r() * 0.5);
      const rx = (maxx - minx) * (0.16 + r() * 0.18),
        ry = (maxy - miny) * (0.14 + r() * 0.16);
      s += '<path d="' + smooth(blob(cx, cy, rx, ry, 10, 0.35, r), true) + '" fill="' + o.dark + '" opacity="' + (0.16 + r() * 0.16).toFixed(2) + '"/>';
    }
  }
  // highlight scumble toward the light side (opposite)
  if (o.light) {
    const n = Math.round(2 + o.density * 3);
    for (let i = 0; i < n; i++) {
      const cx = minx + (maxx - minx) * (0.15 + r() * 0.6);
      const cy = miny + (maxy - miny) * (0.05 + r() * 0.4);
      const rx = (maxx - minx) * (0.12 + r() * 0.14),
        ry = (maxy - miny) * (0.1 + r() * 0.12);
      s += '<path d="' + smooth(blob(cx, cy, rx, ry, 10, 0.35, r), true) + '" fill="' + o.light + '" opacity="' + (0.14 + r() * 0.14).toFixed(2) + '"/>';
    }
  }
  // directional brush strokes across the whole mass
  const area = (maxx - minx) * (maxy - miny);
  const ns = Math.round(area / 900 * o.density);
  for (let i = 0; i < ns; i++) {
    const cx = minx + (maxx - minx) * r(),
      cy = miny + (maxy - miny) * r();
    const len = 8 + r() * 16,
      wid = 2.4 + r() * 3;
    const ang = o.ang + (r() * 2 - 1) * 0.28;
    const useDark = r() > 0.5;
    const col = useDark ? o.dark || o.base : o.light || o.base;
    if (!col) continue;
    s += '<path d="' + stroke(cx, cy, len, wid, ang, r) + '" fill="' + col + '" opacity="' + (0.10 + r() * 0.16).toFixed(2) + '"/>';
  }
  s += '</g>';
  // drybrush broken edge along part of silhouette
  if (o.edge) {
    const start = Math.floor(r() * pts.length);
    const run = Math.floor(pts.length * (0.3 + r() * 0.3));
    const seg = [];
    for (let i = 0; i < run; i++) seg.push(pts[(start + i) % pts.length]);
    s += '<path d="' + smooth(seg, false) + '" fill="none" stroke="' + o.edge + '" stroke-width="' + (1.5 + r() * 1.5).toFixed(1) + '" stroke-linecap="round" opacity="0.5" stroke-dasharray="' + (6 + r() * 10).toFixed(0) + ' ' + (3 + r() * 6).toFixed(0) + '"/>';
  }
  return s;
}

// scene chrome ------------------------------------------------------------
function defs(seed) {
  return `<defs>
<filter id="wob" x="-6%" y="-6%" width="112%" height="112%"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.028" numOctaves="2" seed="${seed}" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="4" xChannelSelector="R" yChannelSelector="G"/></filter>
<filter id="tooth" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="${seed + 4}" result="n"/><feColorMatrix in="n" type="saturate" values="0"/><feComponentTransfer result="g"><feFuncA type="linear" slope="0.16"/></feComponentTransfer><feComposite in="g" in2="SourceGraphic" operator="in" result="gg"/><feBlend in="SourceGraphic" in2="gg" mode="multiply"/></filter>
<filter id="fiber" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.16" numOctaves="2" seed="${seed + 9}" result="n"/><feColorMatrix in="n" type="saturate" values="0"/><feComponentTransfer result="g"><feFuncA type="linear" slope="0.07"/></feComponentTransfer><feComposite in="g" in2="SourceGraphic" operator="in" result="gg"/><feBlend in="SourceGraphic" in2="gg" mode="multiply"/></filter>
</defs>`;
}

// paper ground with warm wash + tooth
function paper(W, H, col) {
  return `<rect x="-8" y="-8" width="${W + 16}" height="${H + 16}" fill="${col}"/>`;
}
function svg(W, H, seed, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">` + defs(seed) + `<g filter="url(#fiber)"><g filter="url(#tooth)"><g filter="url(#wob)">` + body + `</g></g></g>` +
  // faint vignette from paper edge
  `<rect x="0" y="0" width="${W}" height="${H}" fill="none" stroke="rgba(20,18,14,0.05)" stroke-width="10"/>` + `</svg>`;
}
module.exports = {
  makeRng,
  smooth,
  blob,
  band,
  bbox,
  stroke,
  mass,
  defs,
  paper,
  svg
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/paint-engine.js", error: String((e && e.message) || e) }); }

// reference/prior-bundle.js
try { (() => {
/* @ds-bundle: {"format":4,"namespace":"VandeplasscheIllustrationDesignSystem_49c744","components":[{"name":"Caption","sourcePath":"components/content/Caption.jsx"},{"name":"Dot","sourcePath":"components/content/Dot.jsx"},{"name":"DotChain","sourcePath":"components/content/DotChain.jsx"},{"name":"Plate","sourcePath":"components/content/Plate.jsx"},{"name":"PlateCard","sourcePath":"components/content/PlateCard.jsx"},{"name":"PullQuote","sourcePath":"components/content/PullQuote.jsx"},{"name":"StepList","sourcePath":"components/content/StepList.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Mark","sourcePath":"components/core/Mark.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Notice","sourcePath":"components/feedback/Notice.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"LedgerField","sourcePath":"components/forms/LedgerField.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/content/Caption.jsx":"206528b617ae","components/content/Dot.jsx":"ef8edc0f1bfc","components/content/DotChain.jsx":"6f472ed0f9fd","components/content/Plate.jsx":"fec03c9efcef","components/content/PlateCard.jsx":"b116d228298e","components/content/PullQuote.jsx":"2c2b3431732e","components/content/StepList.jsx":"2a2ec5ccaf75","components/core/Button.jsx":"18edc49bb4e3","components/core/Mark.jsx":"8fb5bbeb7a8f","components/core/Rule.jsx":"e7635e6ab069","components/core/Tag.jsx":"7513e9370f00","components/feedback/Dialog.jsx":"d9cf46a2c8ec","components/feedback/Notice.jsx":"27d8ba13fa93","components/forms/Checkbox.jsx":"6f7f024628bb","components/forms/Input.jsx":"5d362b49a3b9","components/forms/LedgerField.jsx":"a207ebfe6e8c","components/forms/Select.jsx":"7cfec4882564","components/forms/Textarea.jsx":"693b6f9da7aa","components/navigation/NavBar.jsx":"d0f3aeda7b5d","components/navigation/Tabs.jsx":"dafd88da7178","reference/paint-engine.js":"df6352449244","ui_kits/portfolio/About.jsx":"5dad73edc307","ui_kits/portfolio/Detail.jsx":"003e2305f6bf","ui_kits/portfolio/Home.jsx":"57e0c6512af3","ui_kits/portfolio/Series.jsx":"923140eaf5f0","ui_kits/portfolio/Work.jsx":"e9ba00871527","ui_kits/portfolio/data.js":"6cf200290309"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {
  const __ds_ns = window.VandeplasscheIllustrationDesignSystem_49c744 = window.VandeplasscheIllustrationDesignSystem_49c744 || {};
  const __ds_scope = {};
  __ds_ns.__errors = __ds_ns.__errors || [];

  // components/content/Caption.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      function Caption({
        children,
        align = 'left',
        tone = 'ink',
        tilt = 0,
        size = 'md',
        style,
        ...rest
      }) {
        const tones = {
          ink: 'var(--text-body)',
          muted: 'var(--text-muted)',
          paper: 'var(--text-on-pigment)'
        };
        return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
          style: {
            font: size === 'sm' ? 'var(--type-caption)' : 'var(--type-annotation-sm)',
            fontWeight: 'var(--weight-bold)',
            letterSpacing: 'var(--tracking-annotation)',
            textTransform: 'uppercase',
            color: tones[tone],
            textAlign: align,
            maxWidth: 'var(--measure-annotation)',
            marginTop: 'var(--gap-caption)',
            transform: tilt ? 'rotate(' + tilt + 'deg)' : undefined,
            ...style
          }
        }), children);
      }
      Object.assign(__ds_scope, {
        Caption
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/content/Caption.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/content/Dot.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      function Dot({
        pigment = 'var(--pigment-pink)',
        size = 20,
        style,
        ...rest
      }) {
        return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
          style: {
            display: 'inline-block',
            flex: 'none',
            width: size,
            height: size,
            borderRadius: 'var(--radius-pill)',
            background: pigment,
            ...style
          }
        }));
      }
      Object.assign(__ds_scope, {
        Dot
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/content/Dot.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/content/DotChain.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const DEFAULT = ['var(--pigment-pink)', 'var(--pigment-pink)', 'var(--pigment-ultramarine)', 'var(--pigment-red)', 'var(--pigment-yellow)', 'var(--pigment-pink)', 'var(--pigment-teal)', 'var(--pigment-pink)'];
      function DotChain({
        colors = DEFAULT,
        size = 20,
        count,
        active,
        gap = 0,
        style,
        onSelect,
        ...rest
      }) {
        const list = count ? Array.from({
          length: count
        }, (_, i) => colors[i % colors.length]) : colors;
        return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap,
            ...style
          }
        }), list.map((c, i) => /*#__PURE__*/React.createElement(__ds_scope.Dot, {
          key: i,
          size: size,
          pigment: active == null || i === active ? c : 'var(--paper-500)',
          onClick: onSelect ? () => onSelect(i) : undefined,
          style: onSelect ? {
            cursor: 'pointer'
          } : undefined
        })));
      }
      Object.assign(__ds_scope, {
        DotChain
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/content/DotChain.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/content/Plate.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const ratios = {
        portrait: '3 / 4',
        landscape: '4 / 3',
        square: '1 / 1',
        tall: '2 / 3',
        wide: '16 / 9'
      };
      function Plate({
        src,
        alt = '',
        field = 'var(--plate-default-field)',
        ratio = 'portrait',
        margin = 'var(--border-plate)',
        width,
        tilt = 0,
        style,
        children,
        ...rest
      }) {
        return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
          style: {
            width,
            border: margin + ' solid var(--paper-200)',
            borderRadius: 'var(--radius-none)',
            background: src ? 'var(--paper-300)' : field,
            aspectRatio: ratios[ratio] || ratio,
            overflow: 'hidden',
            transform: tilt ? 'rotate(' + tilt + 'deg)' : undefined,
            position: 'relative',
            ...style
          }
        }), src ? /*#__PURE__*/React.createElement("img", {
          src: src,
          alt: alt,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }
        }) : children);
      }
      Object.assign(__ds_scope, {
        Plate
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/content/Plate.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/content/PlateCard.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      function PlateCard({
        src,
        alt = '',
        field,
        ratio = 'portrait',
        title,
        meta,
        href,
        width,
        tilt = 0,
        dim = false,
        style,
        ...rest
      }) {
        const Wrapper = href ? 'a' : 'div';
        return /*#__PURE__*/React.createElement(Wrapper, _extends({}, rest, {
          href: href,
          style: {
            display: 'block',
            width,
            textDecoration: 'none',
            color: 'inherit',
            opacity: dim ? 0.55 : 1,
            transition: 'var(--transition-fade)',
            ...style
          }
        }), /*#__PURE__*/React.createElement(__ds_scope.Plate, {
          src: src,
          alt: alt,
          field: field,
          ratio: ratio,
          tilt: tilt
        }), title ? /*#__PURE__*/React.createElement(__ds_scope.Caption, null, title) : null, meta ? /*#__PURE__*/React.createElement("div", {
          style: {
            font: 'var(--type-form-label)',
            color: 'var(--text-muted)',
            letterSpacing: 'var(--tracking-form)',
            marginTop: 'var(--space-1)'
          }
        }, meta) : null);
      }
      Object.assign(__ds_scope, {
        PlateCard
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/content/PlateCard.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/content/PullQuote.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      function PullQuote({
        children,
        attribution,
        size = 'md',
        align = 'left',
        style,
        ...rest
      }) {
        const sizes = {
          sm: 'var(--text-xl)',
          md: 'var(--text-2xl)',
          lg: 'var(--text-3xl)'
        };
        return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
          style: {
            margin: 0,
            textAlign: align,
            ...style
          }
        }), /*#__PURE__*/React.createElement("blockquote", {
          style: {
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontSize: sizes[size],
            lineHeight: 'var(--leading-display)',
            letterSpacing: 'var(--tracking-title)',
            textTransform: 'uppercase',
            color: 'var(--text-display)',
            maxWidth: '22ch'
          }
        }, children), attribution ? /*#__PURE__*/React.createElement("figcaption", {
          style: {
            font: 'var(--type-caption)',
            letterSpacing: 'var(--tracking-annotation)',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginTop: 'var(--space-4)'
          }
        }, attribution) : null);
      }
      Object.assign(__ds_scope, {
        PullQuote
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/content/PullQuote.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/content/StepList.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const PIGMENTS = ['var(--pigment-red)', 'var(--pigment-ultramarine)', 'var(--pigment-yellow)', 'var(--pigment-teal)', 'var(--pigment-pink)', 'var(--pigment-olive)'];
      function StepList({
        items = [],
        marker = 'dot',
        style,
        ...rest
      }) {
        return /*#__PURE__*/React.createElement("ol", _extends({}, rest, {
          style: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'grid',
            gap: 'var(--space-4)',
            ...style
          }
        }), items.map((item, i) => {
          const label = typeof item === 'string' ? item : item.label;
          const note = typeof item === 'string' ? null : item.note;
          const pig = typeof item === 'object' && item.pigment || PIGMENTS[i % PIGMENTS.length];
          return /*#__PURE__*/React.createElement("li", {
            key: i,
            style: {
              display: 'flex',
              gap: 'var(--space-4)',
              alignItems: 'flex-start'
            }
          }, marker === 'dot' ? /*#__PURE__*/React.createElement(__ds_scope.Dot, {
            pigment: pig,
            size: 16,
            style: {
              marginTop: 5
            }
          }) : /*#__PURE__*/React.createElement("span", {
            style: {
              font: 'var(--type-form-label)',
              color: 'var(--text-muted)',
              width: 22,
              flex: 'none',
              marginTop: 4
            }
          }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
            style: {
              font: 'var(--type-annotation)',
              letterSpacing: 'var(--tracking-annotation)',
              textTransform: 'uppercase'
            }
          }, label), note ? /*#__PURE__*/React.createElement("div", {
            style: {
              font: 'var(--type-body)',
              fontSize: 'var(--text-sm)',
              color: 'var(--text-muted)',
              marginTop: 'var(--space-1)'
            }
          }, note) : null));
        }));
      }
      Object.assign(__ds_scope, {
        StepList
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/content/StepList.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Button.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const base = {
        font: 'var(--type-ui)',
        letterSpacing: 'var(--tracking-annotation)',
        textTransform: 'uppercase',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-2)',
        border: 'var(--border-ink) solid transparent',
        borderRadius: 'var(--radius-none)',
        cursor: 'pointer',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transition: 'var(--transition-color)',
        boxShadow: 'none'
      };
      const sizes = {
        sm: {
          padding: '6px 14px',
          fontSize: 'var(--text-xs)'
        },
        md: {
          padding: 'var(--pad-control)',
          fontSize: 'var(--text-sm)'
        },
        lg: {
          padding: '16px 32px',
          fontSize: 'var(--text-md)'
        }
      };
      function Button({
        variant = 'primary',
        size = 'md',
        pigment = 'var(--accent)',
        as = 'button',
        disabled = false,
        fullWidth = false,
        children,
        style,
        ...rest
      }) {
        const [hover, setHover] = React.useState(false);
        const [press, setPress] = React.useState(false);
        const skins = {
          primary: {
            background: press ? 'var(--accent-press)' : hover ? 'var(--accent-hover)' : pigment,
            color: 'var(--text-on-pigment)',
            borderColor: 'transparent'
          },
          secondary: {
            background: 'transparent',
            color: 'var(--ink-900)',
            borderColor: 'var(--rule-ink)',
            ...(hover ? {
              background: 'var(--ink-900)',
              color: 'var(--paper-200)'
            } : null)
          },
          quiet: {
            background: 'transparent',
            color: hover ? 'var(--link-hover)' : 'var(--link)',
            borderColor: 'transparent',
            padding: '4px 0',
            textDecoration: 'underline',
            textDecorationThickness: hover ? '2px' : '1px',
            textUnderlineOffset: '4px'
          }
        };
        const Tag = as;
        return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
          disabled: as === 'button' ? disabled : undefined,
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => {
            setHover(false);
            setPress(false);
          },
          onMouseDown: () => setPress(true),
          onMouseUp: () => setPress(false),
          style: {
            ...base,
            ...sizes[size],
            ...skins[variant],
            width: fullWidth ? '100%' : undefined,
            opacity: disabled ? 0.4 : 1,
            pointerEvents: disabled ? 'none' : undefined,
            transform: press && variant !== 'quiet' ? 'translateY(1px)' : 'none',
            ...style
          }
        }), children);
      }
      Object.assign(__ds_scope, {
        Button
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Button.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Mark.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const paths = {
        close: 'M4 4 L16 16 M16 4 L4 16',
        plus: 'M10 3 L10 17 M3 10 L17 10',
        minus: 'M3 10 L17 10',
        arrow: 'M3 10 L17 10 M11 4 L17 10 L11 16',
        'arrow-left': 'M17 10 L3 10 M9 4 L3 10 L9 16',
        chevron: 'M7 4 L13 10 L7 16',
        'chevron-down': 'M4 7 L10 13 L16 7'
      };
      function Mark({
        name = 'close',
        size = 20,
        strokeWidth = 2,
        color = 'currentColor',
        style,
        ...rest
      }) {
        return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
          width: size,
          height: size,
          viewBox: "0 0 20 20",
          fill: "none",
          "aria-hidden": "true",
          style: {
            display: 'block',
            flex: 'none',
            ...style
          }
        }), /*#__PURE__*/React.createElement("path", {
          d: paths[name] || paths.close,
          stroke: color,
          strokeWidth: strokeWidth,
          strokeLinecap: "square",
          strokeLinejoin: "miter"
        }));
      }
      Object.assign(__ds_scope, {
        Mark
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Mark.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Rule.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      function Rule({
        weight = 'ink',
        color,
        spacing = 'var(--space-6)',
        style,
        ...rest
      }) {
        const weights = {
          hair: '1px',
          ink: '2px',
          brush: '3px'
        };
        const colors = {
          hair: 'var(--rule-hair)',
          ink: 'var(--rule-ink)',
          brush: 'var(--rule-ink)'
        };
        return /*#__PURE__*/React.createElement("hr", _extends({}, rest, {
          style: {
            border: 0,
            borderTop: `${weights[weight]} solid ${color || colors[weight]}`,
            margin: `${spacing} 0`,
            ...style
          }
        }));
      }
      Object.assign(__ds_scope, {
        Rule
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Rule.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Tag.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      function Tag({
        children,
        pigment,
        variant = 'outline',
        size = 'md',
        style,
        ...rest
      }) {
        const pad = size === 'sm' ? '3px 8px' : '5px 11px';
        const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';
        const skins = {
          outline: {
            background: 'transparent',
            color: 'var(--ink-900)',
            border: 'var(--border-hair) solid var(--rule-ink)'
          },
          solid: {
            background: pigment || 'var(--pigment-pink)',
            color: 'var(--text-on-pigment)',
            border: 'var(--border-hair) solid transparent'
          },
          ledger: {
            background: 'var(--surface-ledger)',
            color: 'var(--text-form)',
            border: 'var(--border-hair) solid var(--ledger-400)',
            fontFamily: 'var(--font-body)',
            textTransform: 'none',
            letterSpacing: 'var(--tracking-form)'
          }
        };
        return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            padding: pad,
            font: 'var(--type-caption)',
            fontSize: fs,
            letterSpacing: 'var(--tracking-annotation)',
            textTransform: 'uppercase',
            borderRadius: 'var(--radius-none)',
            whiteSpace: 'nowrap',
            ...skins[variant],
            ...style
          }
        }), children);
      }
      Object.assign(__ds_scope, {
        Tag
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Tag.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/feedback/Dialog.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      function Dialog({
        open = true,
        title,
        onClose,
        children,
        footer,
        width = 480,
        style,
        ...rest
      }) {
        if (!open) return null;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'fixed',
            inset: 0,
            background: 'rgba(11,10,8,.28)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--space-6)',
            zIndex: 50
          },
          onClick: onClose
        }, /*#__PURE__*/React.createElement("div", _extends({}, rest, {
          role: "dialog",
          "aria-modal": "true",
          onClick: e => e.stopPropagation(),
          style: {
            width,
            maxWidth: '100%',
            background: 'var(--surface-raised)',
            borderRadius: 'var(--radius-none)',
            boxShadow: 'var(--shadow-overlay)',
            padding: 'var(--space-7)',
            ...style
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 'var(--space-5)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-xl)',
            letterSpacing: 'var(--tracking-title)',
            lineHeight: 'var(--leading-display)',
            textTransform: 'uppercase'
          }
        }, title), onClose ? /*#__PURE__*/React.createElement("button", {
          onClick: onClose,
          "aria-label": "Close",
          style: {
            background: 'none',
            border: 0,
            padding: 4,
            margin: '-4px -4px 0 0',
            cursor: 'pointer',
            color: 'var(--ink-900)'
          }
        }, /*#__PURE__*/React.createElement(__ds_scope.Mark, {
          name: "close",
          size: 20
        })) : null), /*#__PURE__*/React.createElement("div", {
          style: {
            font: 'var(--type-body)',
            fontSize: 'var(--text-sm)',
            marginTop: 'var(--space-5)'
          }
        }, children), footer ? /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 'var(--space-3)',
            marginTop: 'var(--space-6)'
          }
        }, footer) : null));
      }
      Object.assign(__ds_scope, {
        Dialog
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/feedback/Dialog.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/feedback/Notice.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const TONES = {
        stop: 'var(--status-stop)',
        warm: 'var(--status-warm)',
        calm: 'var(--status-calm)',
        go: 'var(--status-go)',
        neutral: 'var(--rule-ink)'
      };
      function Notice({
        tone = 'neutral',
        title,
        children,
        onDismiss,
        style,
        ...rest
      }) {
        return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
          role: "status",
          style: {
            background: 'var(--surface-raised)',
            border: 'var(--border-hair) solid var(--rule-soft)',
            borderTop: 'var(--border-brush) solid ' + (TONES[tone] || TONES.neutral),
            borderRadius: 'var(--radius-none)',
            padding: 'var(--pad-card)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'var(--space-4)',
            maxWidth: 520,
            ...style
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, title ? /*#__PURE__*/React.createElement("div", {
          style: {
            font: 'var(--type-annotation)',
            letterSpacing: 'var(--tracking-annotation)',
            textTransform: 'uppercase',
            marginBottom: 'var(--space-2)'
          }
        }, title) : null, /*#__PURE__*/React.createElement("div", {
          style: {
            font: 'var(--type-body)',
            fontSize: 'var(--text-sm)',
            color: 'var(--text-muted)'
          }
        }, children)), onDismiss ? /*#__PURE__*/React.createElement("button", {
          onClick: onDismiss,
          "aria-label": "Dismiss",
          style: {
            background: 'none',
            border: 0,
            padding: 4,
            margin: -4,
            cursor: 'pointer',
            color: 'var(--ink-900)'
          }
        }, /*#__PURE__*/React.createElement(__ds_scope.Mark, {
          name: "close",
          size: 16
        })) : null);
      }
      Object.assign(__ds_scope, {
        Notice
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/feedback/Notice.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Checkbox.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      function Checkbox({
        label,
        checked,
        onChange,
        pigment = 'var(--pigment-red)',
        disabled,
        style,
        ...rest
      }) {
        return /*#__PURE__*/React.createElement("label", {
          style: {
            display: 'inline-flex',
            alignItems: 'flex-start',
            gap: 'var(--space-3)',
            cursor: disabled ? 'default' : 'pointer',
            opacity: disabled ? 0.4 : 1,
            ...style
          }
        }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
          type: "checkbox",
          checked: checked,
          onChange: onChange,
          disabled: disabled,
          style: {
            position: 'absolute',
            opacity: 0,
            width: 0,
            height: 0
          }
        })), /*#__PURE__*/React.createElement("span", {
          "aria-hidden": "true",
          style: {
            width: 18,
            height: 18,
            flex: 'none',
            marginTop: 1,
            border: 'var(--border-ink) solid var(--rule-ink)',
            borderRadius: 'var(--radius-none)',
            background: checked ? pigment : 'transparent',
            transition: 'var(--transition-color)'
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            font: 'var(--type-annotation-sm)',
            letterSpacing: 'var(--tracking-annotation)',
            textTransform: 'uppercase'
          }
        }, label));
      }
      Object.assign(__ds_scope, {
        Checkbox
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Checkbox.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Input.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const field = {
        width: '100%',
        font: 'var(--type-body)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-body)',
        background: 'var(--surface-raised)',
        border: 'var(--border-hair) solid var(--ledger-400)',
        borderRadius: 'var(--radius-none)',
        padding: '11px 13px',
        transition: 'var(--transition-color)'
      };
      function Input({
        label,
        hint,
        error,
        id,
        style,
        ...rest
      }) {
        const inputId = id || 'in-' + (label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gap: 'var(--space-2)',
            ...style
          }
        }, label ? /*#__PURE__*/React.createElement("label", {
          htmlFor: inputId,
          style: {
            font: 'var(--type-caption)',
            letterSpacing: 'var(--tracking-annotation)',
            textTransform: 'uppercase'
          }
        }, label) : null, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
          id: inputId,
          style: {
            ...field,
            borderColor: error ? 'var(--pigment-red)' : 'var(--ledger-400)'
          }
        })), error ? /*#__PURE__*/React.createElement("div", {
          style: {
            font: 'var(--type-caption)',
            letterSpacing: 'var(--tracking-annotation)',
            textTransform: 'uppercase',
            color: 'var(--pigment-red)'
          }
        }, error) : hint ? /*#__PURE__*/React.createElement("div", {
          style: {
            font: 'var(--type-body)',
            fontSize: 'var(--text-xs)',
            color: 'var(--text-muted)'
          }
        }, hint) : null);
      }
      Object.assign(__ds_scope, {
        Input
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Input.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/LedgerField.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      function LedgerField({
        label,
        value,
        children,
        width,
        align = 'left',
        emphasis = false,
        style,
        ...rest
      }) {
        return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
          style: {
            width,
            border: 'var(--border-hair) solid var(--ledger-400)',
            background: 'var(--surface-ledger)',
            padding: '3px 6px 7px',
            minHeight: 40,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            ...style
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            font: 'var(--type-form-label)',
            fontStyle: emphasis ? 'normal' : 'italic',
            fontWeight: emphasis ? 'var(--weight-bold)' : 'var(--weight-regular)',
            letterSpacing: 'var(--tracking-form)',
            color: 'var(--text-form)',
            textTransform: emphasis ? 'uppercase' : 'none'
          }
        }, label), /*#__PURE__*/React.createElement("span", {
          style: {
            font: 'var(--type-body)',
            fontSize: 'var(--text-sm)',
            color: 'var(--text-body)',
            textAlign: align,
            marginTop: 'auto'
          }
        }, children != null ? children : value));
      }
      Object.assign(__ds_scope, {
        LedgerField
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/LedgerField.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Select.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const field = {
        width: '100%',
        font: 'var(--type-body)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-body)',
        background: 'var(--surface-raised)',
        border: 'var(--border-hair) solid var(--ledger-400)',
        borderRadius: 'var(--radius-none)',
        padding: '11px 13px',
        transition: 'var(--transition-color)'
      };
      function Select({
        label,
        options = [],
        hint,
        id,
        style,
        ...rest
      }) {
        const inputId = id || 'sel-' + (label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gap: 'var(--space-2)',
            ...style
          }
        }, label ? /*#__PURE__*/React.createElement("label", {
          htmlFor: inputId,
          style: {
            font: 'var(--type-caption)',
            letterSpacing: 'var(--tracking-annotation)',
            textTransform: 'uppercase'
          }
        }, label) : null, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
          id: inputId,
          style: {
            ...field,
            appearance: 'none',
            paddingRight: '38px',
            cursor: 'pointer'
          }
        }), options.map(o => {
          const value = typeof o === 'string' ? o : o.value;
          const text = typeof o === 'string' ? o : o.label;
          return /*#__PURE__*/React.createElement("option", {
            key: value,
            value: value
          }, text);
        })), /*#__PURE__*/React.createElement(__ds_scope.Mark, {
          name: "chevron-down",
          size: 16,
          style: {
            position: 'absolute',
            right: 12,
            pointerEvents: 'none'
          }
        })), hint ? /*#__PURE__*/React.createElement("div", {
          style: {
            font: 'var(--type-body)',
            fontSize: 'var(--text-xs)',
            color: 'var(--text-muted)'
          }
        }, hint) : null);
      }
      Object.assign(__ds_scope, {
        Select
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Select.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Textarea.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      const field = {
        width: '100%',
        font: 'var(--type-body)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-body)',
        background: 'var(--surface-raised)',
        border: 'var(--border-hair) solid var(--ledger-400)',
        borderRadius: 'var(--radius-none)',
        padding: '11px 13px',
        transition: 'var(--transition-color)'
      };
      function Textarea({
        label,
        hint,
        rows = 5,
        id,
        style,
        ...rest
      }) {
        const inputId = id || 'ta-' + (label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gap: 'var(--space-2)',
            ...style
          }
        }, label ? /*#__PURE__*/React.createElement("label", {
          htmlFor: inputId,
          style: {
            font: 'var(--type-caption)',
            letterSpacing: 'var(--tracking-annotation)',
            textTransform: 'uppercase'
          }
        }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({}, rest, {
          id: inputId,
          rows: rows,
          style: {
            ...field,
            resize: 'vertical',
            lineHeight: 'var(--leading-normal)'
          }
        })), hint ? /*#__PURE__*/React.createElement("div", {
          style: {
            font: 'var(--type-body)',
            fontSize: 'var(--text-xs)',
            color: 'var(--text-muted)'
          }
        }, hint) : null);
      }
      Object.assign(__ds_scope, {
        Textarea
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Textarea.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/navigation/NavBar.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      function NavBar({
        brand = 'AORI',
        items = [],
        active,
        onNavigate,
        right,
        style,
        ...rest
      }) {
        return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-7)',
            padding: 'var(--space-4) var(--page-margin)',
            borderBottom: 'var(--border-ink) solid var(--rule-ink)',
            background: 'var(--surface-page)',
            ...style
          }
        }), /*#__PURE__*/React.createElement("a", {
          href: "#",
          onClick: e => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate('home');
            }
          },
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            textDecoration: 'none'
          }
        }, /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 460 250",
          style: {
            height: 44,
            width: 'auto'
          }
        }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
          id: "navOilPastelB",
          x: "-10%",
          y: "-10%",
          width: "120%",
          height: "120%",
          filterUnits: "objectBoundingBox"
        }, /*#__PURE__*/React.createElement("feTurbulence", {
          type: "fractalNoise",
          baseFrequency: "0.45",
          numOctaves: "3",
          result: "noise"
        }), /*#__PURE__*/React.createElement("feDisplacementMap", {
          in: "SourceGraphic",
          in2: "noise",
          scale: "3",
          xChannelSelector: "R",
          yChannelSelector: "G",
          result: "textured"
        }))), /*#__PURE__*/React.createElement("g", {
          fill: "none",
          stroke: "#a96a38",
          strokeWidth: "6",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          filter: "url(#navOilPastelB)"
        }, /*#__PURE__*/React.createElement("path", {
          d: "M 40,175 Q 62,108 84,52 M 84,52 Q 106,108 126,175 M 48,135 Q 84,128 124,124"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 188,20 Q 200,38 212,52",
          strokeWidth: "5.5"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 198,60 C 166,62 156,105 166,144 C 176,174 214,174 230,138 C 242,102 225,58 198,60 Z"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 320,52 L 320,180"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 320,52 C 285,48 268,78 285,108 C 300,114 315,110 320,108"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 285,108 Q 248,170 208,235"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 348,60 L 428,54 M 388,56 L 388,165 M 348,172 L 438,164"
        })))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'baseline',
            gap: 'var(--space-6)'
          }
        }, items.map(item => {
          const id = typeof item === 'string' ? item : item.id;
          const label = typeof item === 'string' ? item : item.label;
          const isActive = active === id;
          return /*#__PURE__*/React.createElement("a", {
            key: id,
            href: typeof item === 'object' && item.href || '#',
            onClick: onNavigate ? e => {
              e.preventDefault();
              onNavigate(id);
            } : undefined,
            style: {
              font: 'var(--type-ui)',
              letterSpacing: 'var(--tracking-annotation)',
              textTransform: 'uppercase',
              color: 'var(--ink-900)',
              textDecoration: isActive ? 'underline' : 'none',
              textDecorationThickness: isActive ? '3px' : undefined,
              textUnderlineOffset: '5px',
              opacity: isActive ? 1 : 0.62,
              whiteSpace: 'nowrap',
              transition: 'var(--transition-fade)'
            }
          }, label);
        }), right));
      }
      Object.assign(__ds_scope, {
        NavBar
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/navigation/NavBar.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/navigation/Tabs.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      function Tabs({
        items = [],
        active,
        onSelect,
        style,
        ...rest
      }) {
        return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
          role: "tablist",
          style: {
            display: 'flex',
            gap: 'var(--space-6)',
            borderBottom: 'var(--border-hair) solid var(--rule-hair)',
            ...style
          }
        }), items.map(item => {
          const id = typeof item === 'string' ? item : item.id;
          const label = typeof item === 'string' ? item : item.label;
          const isActive = active === id;
          return /*#__PURE__*/React.createElement("button", {
            key: id,
            role: "tab",
            "aria-selected": isActive,
            onClick: onSelect ? () => onSelect(id) : undefined,
            style: {
              font: 'var(--type-ui)',
              letterSpacing: 'var(--tracking-annotation)',
              textTransform: 'uppercase',
              background: 'none',
              border: 0,
              borderBottom: 'var(--border-brush) solid ' + (isActive ? 'var(--rule-ink)' : 'transparent'),
              padding: '0 0 10px',
              marginBottom: -1,
              color: 'var(--ink-900)',
              opacity: isActive ? 1 : 0.55,
              cursor: 'pointer',
              transition: 'var(--transition-fade)'
            }
          }, label);
        }));
      }
      Object.assign(__ds_scope, {
        Tabs
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/navigation/Tabs.jsx",
      error: String(e && e.message || e)
    });
  }

  // reference/paint-engine.js
  try {
    (() => {
      // AORI illustration engine — gouache in SVG.
      // Techniques: hand-jittered silhouettes, per-mass tonal modelling with
      // clipped brush strokes, drybrush broken edges, canvas grain + paper tooth.
      // Deterministic (seeded) so a scene is reproducible.

      function makeRng(seed) {
        let s = seed >>> 0;
        return () => {
          s = s * 1664525 + 1013904223 >>> 0;
          return s / 4294967296;
        };
      }
      function smooth(p, closed) {
        if (p.length < 3) {
          return 'M' + p.map(q => q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join(' L');
        }
        const P = closed ? [p[p.length - 1], ...p, p[0], p[1]] : [p[0], ...p, p[p.length - 1]];
        let d = 'M' + P[1][0].toFixed(1) + ' ' + P[1][1].toFixed(1);
        for (let i = 1; i < P.length - 2; i++) {
          const [x0, y0] = P[i - 1],
            [x1, y1] = P[i],
            [x2, y2] = P[i + 1],
            [x3, y3] = P[i + 2];
          d += 'C' + (x1 + (x2 - x0) / 6).toFixed(1) + ' ' + (y1 + (y2 - y0) / 6).toFixed(1) + ' ' + (x2 - (x3 - x1) / 6).toFixed(1) + ' ' + (y2 - (y3 - y1) / 6).toFixed(1) + ' ' + x2.toFixed(1) + ' ' + y2.toFixed(1);
        }
        return d + (closed ? 'Z' : '');
      }

      // organic closed blob around a centre
      function blob(cx, cy, rx, ry, n, jit, r) {
        const p = [];
        for (let i = 0; i < n; i++) {
          const a = i / n * Math.PI * 2;
          const k = 1 + (r() * 2 - 1) * jit;
          p.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
        }
        return p;
      }
      // wavy horizontal edge polyline
      function band(x0, x1, y, amp, steps, r) {
        const p = [];
        for (let i = 0; i <= steps; i++) p.push([x0 + (x1 - x0) * i / steps, y + (r() * 2 - 1) * amp]);
        return p;
      }
      function bbox(pts) {
        let a = 1e9,
          b = 1e9,
          c = -1e9,
          d = -1e9;
        for (const [x, y] of pts) {
          a = Math.min(a, x);
          b = Math.min(b, y);
          c = Math.max(c, x);
          d = Math.max(d, y);
        }
        return [a, b, c, d];
      }

      // one tapered brush stroke: short smoothed lozenge, angle in rad
      function stroke(cx, cy, len, wid, ang, r) {
        const ca = Math.cos(ang),
          sa = Math.sin(ang);
        const pts = [];
        const seg = 5;
        for (let i = 0; i <= seg; i++) {
          const t = i / seg;
          const w = wid * Math.sin(Math.PI * t) * (0.7 + r() * 0.6);
          const lx = (t - 0.5) * len,
            ly = w / 2;
          pts.push([cx + lx * ca - ly * sa, cy + lx * sa + ly * ca]);
        }
        for (let i = seg; i >= 0; i--) {
          const t = i / seg;
          const w = wid * Math.sin(Math.PI * t) * (0.7 + r() * 0.6);
          const lx = (t - 0.5) * len,
            ly = -w / 2;
          pts.push([cx + lx * ca - ly * sa, cy + lx * sa + ly * ca]);
        }
        return smooth(pts, true);
      }
      let _cid = 0;
      // paint a modelled mass. opts: base, dark, light, ang (stroke direction rad),
      // density, edge (drybrush colour or null), squit (silhouette jitter)
      function mass(pts, opts) {
        const o = Object.assign({
          dark: null,
          light: null,
          ang: 0,
          density: 0.9,
          edge: null,
          squit: 0.05
        }, opts);
        const r = o.r;
        const d = smooth(pts, true);
        const cid = 'c' + _cid++;
        const [minx, miny, maxx, maxy] = bbox(pts);
        let s = '<clipPath id="' + cid + '"><path d="' + d + '"/></clipPath>';
        s += '<path d="' + d + '" fill="' + o.base + '"/>';
        s += '<g clip-path="url(#' + cid + ')">';
        // shadow scumble: a few broad soft patches toward one side
        if (o.dark) {
          const n = Math.round(3 + o.density * 4);
          for (let i = 0; i < n; i++) {
            const cx = minx + (maxx - minx) * (0.15 + r() * 0.7);
            const cy = miny + (maxy - miny) * (0.45 + r() * 0.5);
            const rx = (maxx - minx) * (0.16 + r() * 0.18),
              ry = (maxy - miny) * (0.14 + r() * 0.16);
            s += '<path d="' + smooth(blob(cx, cy, rx, ry, 10, 0.35, r), true) + '" fill="' + o.dark + '" opacity="' + (0.16 + r() * 0.16).toFixed(2) + '"/>';
          }
        }
        // highlight scumble toward the light side (opposite)
        if (o.light) {
          const n = Math.round(2 + o.density * 3);
          for (let i = 0; i < n; i++) {
            const cx = minx + (maxx - minx) * (0.15 + r() * 0.6);
            const cy = miny + (maxy - miny) * (0.05 + r() * 0.4);
            const rx = (maxx - minx) * (0.12 + r() * 0.14),
              ry = (maxy - miny) * (0.1 + r() * 0.12);
            s += '<path d="' + smooth(blob(cx, cy, rx, ry, 10, 0.35, r), true) + '" fill="' + o.light + '" opacity="' + (0.14 + r() * 0.14).toFixed(2) + '"/>';
          }
        }
        // directional brush strokes across the whole mass
        const area = (maxx - minx) * (maxy - miny);
        const ns = Math.round(area / 900 * o.density);
        for (let i = 0; i < ns; i++) {
          const cx = minx + (maxx - minx) * r(),
            cy = miny + (maxy - miny) * r();
          const len = 8 + r() * 16,
            wid = 2.4 + r() * 3;
          const ang = o.ang + (r() * 2 - 1) * 0.28;
          const useDark = r() > 0.5;
          const col = useDark ? o.dark || o.base : o.light || o.base;
          if (!col) continue;
          s += '<path d="' + stroke(cx, cy, len, wid, ang, r) + '" fill="' + col + '" opacity="' + (0.10 + r() * 0.16).toFixed(2) + '"/>';
        }
        s += '</g>';
        // drybrush broken edge along part of silhouette
        if (o.edge) {
          const start = Math.floor(r() * pts.length);
          const run = Math.floor(pts.length * (0.3 + r() * 0.3));
          const seg = [];
          for (let i = 0; i < run; i++) seg.push(pts[(start + i) % pts.length]);
          s += '<path d="' + smooth(seg, false) + '" fill="none" stroke="' + o.edge + '" stroke-width="' + (1.5 + r() * 1.5).toFixed(1) + '" stroke-linecap="round" opacity="0.5" stroke-dasharray="' + (6 + r() * 10).toFixed(0) + ' ' + (3 + r() * 6).toFixed(0) + '"/>';
        }
        return s;
      }

      // scene chrome ------------------------------------------------------------
      function defs(seed) {
        return `<defs>
<filter id="wob" x="-6%" y="-6%" width="112%" height="112%"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.028" numOctaves="2" seed="${seed}" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="4" xChannelSelector="R" yChannelSelector="G"/></filter>
<filter id="tooth" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="${seed + 4}" result="n"/><feColorMatrix in="n" type="saturate" values="0"/><feComponentTransfer result="g"><feFuncA type="linear" slope="0.16"/></feComponentTransfer><feComposite in="g" in2="SourceGraphic" operator="in" result="gg"/><feBlend in="SourceGraphic" in2="gg" mode="multiply"/></filter>
<filter id="fiber" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.16" numOctaves="2" seed="${seed + 9}" result="n"/><feColorMatrix in="n" type="saturate" values="0"/><feComponentTransfer result="g"><feFuncA type="linear" slope="0.07"/></feComponentTransfer><feComposite in="g" in2="SourceGraphic" operator="in" result="gg"/><feBlend in="SourceGraphic" in2="gg" mode="multiply"/></filter>
</defs>`;
      }

      // paper ground with warm wash + tooth
      function paper(W, H, col) {
        return `<rect x="-8" y="-8" width="${W + 16}" height="${H + 16}" fill="${col}"/>`;
      }
      function svg(W, H, seed, body) {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">` + defs(seed) + `<g filter="url(#fiber)"><g filter="url(#tooth)"><g filter="url(#wob)">` + body + `</g></g></g>` +
        // faint vignette from paper edge
        `<rect x="0" y="0" width="${W}" height="${H}" fill="none" stroke="rgba(20,18,14,0.05)" stroke-width="10"/>` + `</svg>`;
      }
      module.exports = {
        makeRng,
        smooth,
        blob,
        band,
        bbox,
        stroke,
        mass,
        defs,
        paper,
        svg
      };
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "reference/paint-engine.js",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/portfolio/About.jsx
  try {
    (() => {
      const {
        Plate,
        Input,
        Textarea,
        Checkbox,
        Button,
        Notice,
        Rule,
        StepList
      } = window.DS;
      function About() {
        const [sent, setSent] = React.useState(false);
        const [news, setNews] = React.useState(true);
        return /*#__PURE__*/React.createElement("section", {
          style: {
            padding: 'var(--space-8) var(--page-margin) var(--space-10)',
            display: 'grid',
            gridTemplateColumns: '1fr 380px',
            gap: 'var(--space-9)',
            alignItems: 'start'
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
          style: {
            fontSize: 'var(--text-3xl)',
            maxWidth: '14ch'
          }
        }, "About"), /*#__PURE__*/React.createElement("p", {
          style: {
            font: 'var(--type-body)',
            marginTop: 'var(--space-6)'
          }
        }, "Isabelle Vandeplassche is a Belgian illustrator and designer based in Ericeira, a fishing village on the Atlantic coast of Portugal. She works in oil pastel, gouache and acrylic on paper. The work is small, flat and made quickly: one object, one field of colour, no drawing underneath."), /*#__PURE__*/React.createElement("p", {
          style: {
            font: 'var(--type-body)'
          }
        }, "Two bodies of work run alongside each other. ", /*#__PURE__*/React.createElement("i", null, "A very small guide for difficult days"), ' ', "is a set of pages that give practical instructions \u2014 go somewhere high, take yourself to water, tear coloured paper into pieces and glue it down without looking. The invoice series is eighteen paintings made inside a pre-printed Spanish order form."), /*#__PURE__*/React.createElement(Rule, {
          weight: "ink"
        }), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-5)'
          }
        }, "The four moves"), /*#__PURE__*/React.createElement(StepList, {
          items: [{
            label: 'Perspective',
            note: 'Change what\'s in front of your eyes. A rooftop, a hill, a tree.'
          }, {
            label: 'Water',
            note: 'The sea, a river, a swimming pool, your shower. And if none of those are available, wash your face.'
          }, {
            label: 'Play',
            note: 'Create a small set of rules and stay within them. Anything that isn\'t about the outcome.'
          }, {
            label: 'Movement',
            note: 'Close your eyes for 20 minutes and listen to music.'
          }]
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gap: 'var(--space-5)'
          }
        }, /*#__PURE__*/React.createElement(Plate, {
          src: "../../assets/illustrations/plate-swimmers.png",
          alt: "Two swimmers",
          ratio: "landscape"
        }), /*#__PURE__*/React.createElement("h2", {
          style: {
            fontSize: 'var(--text-xl)'
          }
        }, "Get in touch"), sent ? /*#__PURE__*/React.createElement(Notice, {
          tone: "go",
          title: "Thank you",
          onDismiss: () => setSent(false)
        }, "A reply usually takes a week. Commissions across textile, stationery and editorial.") : /*#__PURE__*/React.createElement("form", {
          onSubmit: e => {
            e.preventDefault();
            setSent(true);
          },
          style: {
            display: 'grid',
            gap: 'var(--space-4)'
          }
        }, /*#__PURE__*/React.createElement(Input, {
          label: "Your email",
          type: "email",
          placeholder: "you@example.com",
          required: true
        }), /*#__PURE__*/React.createElement(Textarea, {
          label: "What are you after?",
          rows: 4
        }), /*#__PURE__*/React.createElement(Checkbox, {
          label: "Send me the newsletter",
          checked: news,
          onChange: e => setNews(e.target.checked)
        }), /*#__PURE__*/React.createElement(Button, {
          type: "submit",
          fullWidth: true
        }, "Send"))));
      }
      window.About = About;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/portfolio/About.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/portfolio/Detail.jsx
  try {
    (() => {
      const {
        Plate,
        Caption,
        Tag,
        Button,
        Select,
        LedgerField,
        Dialog,
        Rule,
        Mark
      } = window.DS;
      function Detail({
        work,
        go,
        notify
      }) {
        const [open, setOpen] = React.useState(false);
        const [size, setSize] = React.useState('A3 · 29,7 × 42 cm');
        if (!work) return null;
        return /*#__PURE__*/React.createElement("section", {
          style: {
            padding: 'var(--space-7) var(--page-margin) var(--space-10)'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "quiet",
          onClick: () => go('work'),
          style: {
            marginBottom: 'var(--space-6)'
          }
        }, /*#__PURE__*/React.createElement(Mark, {
          name: "arrow-left",
          size: 15
        }), " All work"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr',
            gap: 'var(--space-9)',
            alignItems: 'start'
          }
        }, /*#__PURE__*/React.createElement(Plate, {
          src: work.src,
          alt: work.title,
          ratio: work.ratio === 'landscape' ? 'landscape' : 'portrait'
        }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
          style: {
            fontSize: 'var(--text-2xl)',
            maxWidth: '14ch'
          }
        }, work.title), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 'var(--space-2)',
            marginTop: 'var(--space-5)'
          }
        }, work.no ? /*#__PURE__*/React.createElement(Tag, {
          variant: "ledger"
        }, 'N\u00b0 ' + work.no) : /*#__PURE__*/React.createElement(Tag, {
          variant: "ledger"
        }, work.page), /*#__PURE__*/React.createElement(Tag, null, work.medium), /*#__PURE__*/React.createElement(Tag, {
          size: "sm"
        }, work.year)), /*#__PURE__*/React.createElement("p", {
          style: {
            font: 'var(--type-body)',
            marginTop: 'var(--space-6)',
            maxWidth: '44ch'
          }
        }, "Original painting on paper. Sold unframed and posted flat between boards. Each sheet is signed on the back."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            marginTop: 'var(--space-6)'
          }
        }, /*#__PURE__*/React.createElement(LedgerField, {
          label: "Medida",
          value: work.size,
          width: 170
        }), /*#__PURE__*/React.createElement(LedgerField, {
          label: "Precio \u20AC",
          value: work.price,
          align: "right",
          width: 120
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 'var(--space-6)',
            maxWidth: 300
          }
        }, /*#__PURE__*/React.createElement(Select, {
          label: "Print size",
          value: size,
          onChange: e => setSize(e.target.value),
          options: ['A4 · 21 × 29,7 cm', 'A3 · 29,7 × 42 cm']
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 'var(--space-3)',
            marginTop: 'var(--space-6)'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          onClick: () => setOpen(true)
        }, "Add to basket"), /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          onClick: () => notify('Enquiry sent. Two letters a year, no more.')
        }, "Ask about the original")), /*#__PURE__*/React.createElement(Rule, {
          weight: "hair",
          spacing: "var(--space-7)"
        }), /*#__PURE__*/React.createElement(Caption, {
          tone: "muted",
          size: "sm",
          style: {
            marginTop: 0
          }
        }, "Posted flat, 3\u20135 working days within Spain."))), /*#__PURE__*/React.createElement(Dialog, {
          open: open,
          title: "Added to your basket",
          onClose: () => setOpen(false),
          footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            onClick: () => setOpen(false)
          }, "Go to basket"), /*#__PURE__*/React.createElement(Button, {
            size: "sm",
            variant: "secondary",
            onClick: () => setOpen(false)
          }, "Keep looking"))
        }, work.title, " \u2014 ", size, ", unframed."));
      }
      window.Detail = Detail;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/portfolio/Detail.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/portfolio/Home.jsx
  try {
    (() => {
      const {
        Plate,
        PlateCard,
        Caption,
        PullQuote,
        Button,
        Tag,
        Rule,
        DotChain
      } = window.DS;
      function Home({
        go,
        open
      }) {
        const [hover, setHover] = React.useState(null);
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 380px',
            gap: 'var(--space-9)',
            alignItems: 'center',
            padding: 'var(--space-9) var(--page-margin) var(--space-8)'
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
          style: {
            fontSize: 'var(--text-4xl)',
            maxWidth: '13ch'
          }
        }, "What to do when you're absolutely stuck?"), /*#__PURE__*/React.createElement("p", {
          style: {
            font: 'var(--type-annotation)',
            letterSpacing: 'var(--tracking-annotation)',
            textTransform: 'uppercase',
            marginTop: 'var(--space-6)',
            maxWidth: '34ch'
          }
        }, "A very small guide for difficult days."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 'var(--space-3)',
            marginTop: 'var(--space-7)'
          }
        }, /*#__PURE__*/React.createElement(Button, {
          onClick: () => go('guide')
        }, "Read the guide"), /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          onClick: () => go('work')
        }, "See the work")), /*#__PURE__*/React.createElement(DotChain, {
          count: 12,
          size: 16,
          style: {
            marginTop: 'var(--space-8)'
          }
        })), /*#__PURE__*/React.createElement(Plate, {
          src: "../../assets/illustrations/plate-path.png",
          alt: "A red path winding over a green hill",
          ratio: "tall"
        })), /*#__PURE__*/React.createElement(Rule, {
          weight: "ink",
          spacing: "0",
          style: {
            margin: '0 var(--page-margin)'
          }
        }), /*#__PURE__*/React.createElement("section", {
          style: {
            padding: 'var(--space-8) var(--page-margin)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: 'var(--space-6)'
          }
        }, /*#__PURE__*/React.createElement("h2", {
          style: {
            fontSize: 'var(--text-2xl)'
          }
        }, "Recent"), /*#__PURE__*/React.createElement(Button, {
          variant: "quiet",
          onClick: () => go('work')
        }, "All work")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--space-6)'
          },
          onMouseLeave: () => setHover(null)
        }, window.KIT.plates.slice(0, 4).map(w => /*#__PURE__*/React.createElement(PlateCard, {
          key: w.id,
          src: w.src,
          alt: w.title,
          ratio: w.ratio,
          title: w.title,
          meta: w.medium + ' · ' + w.year,
          dim: hover != null && hover !== w.id,
          onMouseEnter: () => setHover(w.id),
          onClick: () => open(w),
          style: {
            cursor: 'pointer'
          }
        })))), /*#__PURE__*/React.createElement("section", {
          style: {
            background: 'var(--surface-ground)',
            padding: 'var(--space-8) var(--page-margin)',
            marginTop: 'var(--space-6)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 'var(--space-6)'
          }
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
          style: {
            color: 'var(--paper-200)',
            fontSize: 'var(--text-2xl)'
          }
        }, "The invoice series"), /*#__PURE__*/React.createElement(Caption, {
          tone: "paper"
        }, "Eighteen paintings made in the descripci\xF3n box of a Spanish order form.")), /*#__PURE__*/React.createElement(Tag, {
          variant: "solid",
          pigment: "var(--pigment-pink)"
        }, "N\xB0 001 \u2013 N\xB0 018")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 'var(--space-5)',
            overflow: 'hidden'
          }
        }, window.KIT.series.slice(0, 6).map(w => /*#__PURE__*/React.createElement("img", {
          key: w.id,
          src: w.src,
          alt: w.title,
          onClick: () => open(w),
          style: {
            width: 150,
            boxShadow: 'var(--shadow-sheet)',
            cursor: 'pointer',
            flex: 'none'
          }
        }))), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          pigment: "var(--pigment-pink)",
          onClick: () => go('series'),
          style: {
            marginTop: 'var(--space-7)'
          }
        }, "See all eighteen")));
      }
      window.Home = Home;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/portfolio/Home.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/portfolio/Series.jsx
  try {
    (() => {
      const {
        Caption,
        LedgerField,
        Button,
        Rule
      } = window.DS;
      function Series({
        open
      }) {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
          style: {
            padding: 'var(--space-8) var(--page-margin) var(--space-7)'
          }
        }, /*#__PURE__*/React.createElement("h1", {
          style: {
            fontSize: 'var(--text-3xl)',
            maxWidth: '16ch'
          }
        }, "The invoice series"), /*#__PURE__*/React.createElement("p", {
          style: {
            font: 'var(--type-body)',
            marginTop: 'var(--space-5)',
            maxWidth: '52ch'
          }
        }, "Eighteen small paintings, N\xB0 001 to N\xB0 018, made in the ", /*#__PURE__*/React.createElement("i", null, "descripci\xF3n"), " box of a pre-printed Spanish order form. One object per sheet. The form was filled in as it came: the signature in the ", /*#__PURE__*/React.createElement("i", null, "vendedor"), " line, the number in ", /*#__PURE__*/React.createElement("i", null, "pedido"), ", everything else left blank."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            marginTop: 'var(--space-6)',
            maxWidth: 620
          }
        }, /*#__PURE__*/React.createElement(LedgerField, {
          label: "Vendedor:",
          value: "Isabelle Vandeplassche",
          width: 260
        }), /*#__PURE__*/React.createElement(LedgerField, {
          label: "Pedido",
          value: "N\xB0 001 \u2013 018",
          emphasis: true,
          width: 130
        }), /*#__PURE__*/React.createElement(LedgerField, {
          label: "A\xF1o",
          value: "2024",
          width: 90
        }), /*#__PURE__*/React.createElement(LedgerField, {
          label: "Total \u20AC",
          value: "180,00",
          align: "right",
          width: 110
        }))), /*#__PURE__*/React.createElement(Rule, {
          weight: "ink",
          spacing: "0",
          style: {
            margin: '0 var(--page-margin)'
          }
        }), /*#__PURE__*/React.createElement("section", {
          style: {
            background: 'var(--surface-ground)',
            padding: 'var(--space-8) var(--page-margin) var(--space-10)',
            marginTop: 'var(--space-7)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: 'var(--space-6) var(--space-5)'
          }
        }, window.KIT.series.map(w => /*#__PURE__*/React.createElement("figure", {
          key: w.id,
          onClick: () => open(w),
          style: {
            cursor: 'pointer'
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: w.src,
          alt: w.title,
          style: {
            width: '100%',
            boxShadow: 'var(--shadow-sheet)'
          }
        }), /*#__PURE__*/React.createElement(Caption, {
          tone: "paper",
          size: "sm"
        }, "N\xB0 ", w.no, " \u2014 ", w.title)))), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          pigment: "var(--pigment-pink)",
          style: {
            marginTop: 'var(--space-8)'
          }
        }, "Enquire about the series")));
      }
      window.Series = Series;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/portfolio/Series.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/portfolio/Work.jsx
  try {
    (() => {
      const {
        PlateCard,
        Tabs,
        Caption
      } = window.DS;
      function Work({
        open
      }) {
        const [tab, setTab] = React.useState('all');
        const [hover, setHover] = React.useState(null);
        const items = window.KIT.all.filter(w => tab === 'all' || w.group === tab);
        return /*#__PURE__*/React.createElement("section", {
          style: {
            padding: 'var(--space-8) var(--page-margin) var(--space-10)'
          }
        }, /*#__PURE__*/React.createElement("h1", {
          style: {
            fontSize: 'var(--text-3xl)',
            marginBottom: 'var(--space-6)'
          }
        }, "Work"), /*#__PURE__*/React.createElement(Tabs, {
          items: [{
            id: 'all',
            label: 'All'
          }, {
            id: 'guide',
            label: 'The guide'
          }, {
            id: 'series',
            label: 'The series'
          }],
          active: tab,
          onSelect: setTab,
          style: {
            marginBottom: 'var(--space-7)'
          }
        }), /*#__PURE__*/React.createElement(Caption, {
          tone: "muted",
          size: "sm",
          style: {
            marginTop: 0,
            marginBottom: 'var(--space-7)'
          }
        }, items.length, " works"), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 'var(--space-6) var(--space-5)'
          },
          onMouseLeave: () => setHover(null)
        }, items.map(w => /*#__PURE__*/React.createElement(PlateCard, {
          key: w.id,
          src: w.src,
          alt: w.title,
          ratio: "portrait",
          title: w.title,
          meta: w.no ? 'N° ' + w.no : w.page,
          dim: hover != null && hover !== w.id,
          onMouseEnter: () => setHover(w.id),
          onClick: () => open(w),
          style: {
            cursor: 'pointer'
          }
        }))));
      }
      window.Work = Work;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/portfolio/Work.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/portfolio/data.js
  try {
    (() => {
      // Descriptive placeholder titles — the source photographs carry no titles.
      // See ui_kits/portfolio/README.md.
      window.KIT = function () {
        const S = '../../assets/series-invoices/';
        const I = '../../assets/illustrations/';
        const illos = ['amphora.svg', 'beads.svg', 'beach.svg', 'bench.svg', 'cove.svg', 'fishring.svg', 'generations.svg', 'hands.svg', 'harbour.svg', 'hoop.svg', 'livyko.svg', 'night.svg', 'olive.svg', 'picnic.svg', 'portrait.svg', 'psiloritis.svg', 'rocks.svg', 'spiral.svg'];
        const series = [['001', 'Framed painting'], ['002', 'Two shoes with apples'], ['003', 'Blue bow'], ['004', 'Sun face'], ['005', 'Sailing boat'], ['006', 'Jumper with swans'], ['007', 'Mushroom lamp'], ['008', 'Enjoy the holidays'], ['009', 'Brown shoes'], ['010', 'Calculator'], ['011', 'Seated figure'], ['012', 'Two mussels'], ['013', 'Two fish, framed'], ['014', 'Jumper with an apple'], ['015', 'Plate with a figure'], ['016', 'Macintosh'], ['017', 'Small sailboat'], ['018', 'Gold lamp']].map(([n, title], idx) => ({
          id: 'n' + n,
          no: n,
          title,
          src: I + illos[idx % illos.length],
          ratio: '3 / 4',
          group: 'series',
          medium: 'Oil pastel and gouache on order form',
          year: '2024',
          size: '21 × 29,7 cm',
          price: '180,00'
        }));
        const plates = [{
          id: 'swimmers',
          title: 'Two swimmers',
          src: I + 'beach.svg',
          ratio: 'landscape',
          page: 'WATER'
        }, {
          id: 'sun',
          title: 'Watch movement.',
          src: I + 'sun-sea.svg',
          ratio: 'landscape',
          page: 'PERSPECTIVE'
        }, {
          id: 'figure',
          title: 'People passing by.',
          src: I + 'portrait.svg',
          ratio: 'portrait',
          page: 'PERSPECTIVE'
        }, {
          id: 'hill',
          title: 'A hill',
          src: I + 'psiloritis.svg',
          ratio: 'portrait',
          page: 'PERSPECTIVE'
        }, {
          id: 'tree',
          title: 'A tree',
          src: I + 'tree.svg',
          ratio: 'portrait',
          page: 'PERSPECTIVE'
        }, {
          id: 'path',
          title: 'The winding path',
          src: I + 'terraces.svg',
          ratio: 'portrait',
          page: 'COVER'
        }].map(p => ({
          ...p,
          group: 'guide',
          no: null,
          medium: 'Gouache on paper',
          year: '2024',
          size: '18 × 24 cm',
          price: '150,00'
        }));
        return {
          series,
          plates,
          all: [...plates, ...series]
        };
      }();
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/portfolio/data.js",
      error: String(e && e.message || e)
    });
  }
  __ds_ns.Caption = __ds_scope.Caption;
  __ds_ns.Dot = __ds_scope.Dot;
  __ds_ns.DotChain = __ds_scope.DotChain;
  __ds_ns.Plate = __ds_scope.Plate;
  __ds_ns.PlateCard = __ds_scope.PlateCard;
  __ds_ns.PullQuote = __ds_scope.PullQuote;
  __ds_ns.StepList = __ds_scope.StepList;
  __ds_ns.Button = __ds_scope.Button;
  __ds_ns.Mark = __ds_scope.Mark;
  __ds_ns.Rule = __ds_scope.Rule;
  __ds_ns.Tag = __ds_scope.Tag;
  __ds_ns.Dialog = __ds_scope.Dialog;
  __ds_ns.Notice = __ds_scope.Notice;
  __ds_ns.Checkbox = __ds_scope.Checkbox;
  __ds_ns.Input = __ds_scope.Input;
  __ds_ns.LedgerField = __ds_scope.LedgerField;
  __ds_ns.Select = __ds_scope.Select;
  __ds_ns.Textarea = __ds_scope.Textarea;
  __ds_ns.NavBar = __ds_scope.NavBar;
  __ds_ns.Tabs = __ds_scope.Tabs;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/prior-bundle.js", error: String((e && e.message) || e) }); }

// reference/prior-ui-kit/About.jsx
try { (() => {
const {
  Plate,
  Input,
  Textarea,
  Checkbox,
  Button,
  Notice,
  Rule,
  StepList
} = window.DS;
function About() {
  const [sent, setSent] = React.useState(false);
  const [news, setNews] = React.useState(true);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) var(--page-margin) var(--space-10)',
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-3xl)',
      maxWidth: '14ch'
    }
  }, "About"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      marginTop: 'var(--space-6)'
    }
  }, "Isabelle Vandeplassche is a Belgian illustrator and designer based in Ericeira, a fishing village on the Atlantic coast of Portugal. She works in oil pastel, gouache and acrylic on paper. The work is small, flat and made quickly: one object, one field of colour, no drawing underneath."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)'
    }
  }, "Two bodies of work run alongside each other. ", /*#__PURE__*/React.createElement("i", null, "A very small guide for difficult days"), ' ', "is a set of pages that give practical instructions \u2014 go somewhere high, take yourself to water, tear coloured paper into pieces and glue it down without looking. The invoice series is eighteen paintings made inside a pre-printed Spanish order form."), /*#__PURE__*/React.createElement(Rule, {
    weight: "ink"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-xl)',
      marginBottom: 'var(--space-5)'
    }
  }, "The four moves"), /*#__PURE__*/React.createElement(StepList, {
    items: [{
      label: 'Perspective',
      note: 'Change what\'s in front of your eyes. A rooftop, a hill, a tree.'
    }, {
      label: 'Water',
      note: 'The sea, a river, a swimming pool, your shower. And if none of those are available, wash your face.'
    }, {
      label: 'Play',
      note: 'Create a small set of rules and stay within them. Anything that isn\'t about the outcome.'
    }, {
      label: 'Movement',
      note: 'Close your eyes for 20 minutes and listen to music.'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    src: "../../assets/illustrations/beach.svg",
    alt: "Two swimmers",
    ratio: "landscape"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-xl)'
    }
  }, "Get in touch"), sent ? /*#__PURE__*/React.createElement(Notice, {
    tone: "go",
    title: "Thank you",
    onDismiss: () => setSent(false)
  }, "A reply usually takes a week. Commissions across textile, stationery and editorial.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your email",
    type: "email",
    placeholder: "you@example.com",
    required: true
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "What are you after?",
    rows: 4
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the newsletter",
    checked: news,
    onChange: e => setNews(e.target.checked)
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    fullWidth: true
  }, "Send"))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/prior-ui-kit/About.jsx", error: String((e && e.message) || e) }); }

// reference/prior-ui-kit/Detail.jsx
try { (() => {
const {
  Plate,
  Caption,
  Tag,
  Button,
  Select,
  LedgerField,
  Dialog,
  Rule,
  Mark
} = window.DS;
function Detail({
  work,
  go,
  notify
}) {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState('A3 · 29,7 × 42 cm');
  if (!work) return null;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-7) var(--page-margin) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    onClick: () => go('work'),
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    name: "arrow-left",
    size: 15
  }), " All work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    src: work.src,
    alt: work.title,
    ratio: work.ratio === 'landscape' ? 'landscape' : 'portrait'
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-2xl)',
      maxWidth: '14ch'
    }
  }, work.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-5)'
    }
  }, work.no ? /*#__PURE__*/React.createElement(Tag, {
    variant: "ledger"
  }, 'N\u00b0 ' + work.no) : /*#__PURE__*/React.createElement(Tag, {
    variant: "ledger"
  }, work.page), /*#__PURE__*/React.createElement(Tag, null, work.medium), /*#__PURE__*/React.createElement(Tag, {
    size: "sm"
  }, work.year)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      marginTop: 'var(--space-6)',
      maxWidth: '44ch'
    }
  }, "Original painting on paper. Sold unframed and posted flat between boards. Each sheet is signed on the back."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(LedgerField, {
    label: "Medida",
    value: work.size,
    width: 170
  }), /*#__PURE__*/React.createElement(LedgerField, {
    label: "Precio \u20AC",
    value: work.price,
    align: "right",
    width: 120
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Print size",
    value: size,
    onChange: e => setSize(e.target.value),
    options: ['A4 · 21 × 29,7 cm', 'A3 · 29,7 × 42 cm']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setOpen(true)
  }, "Add to basket"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => notify('Enquiry sent. Two letters a year, no more.')
  }, "Ask about the original")), /*#__PURE__*/React.createElement(Rule, {
    weight: "hair",
    spacing: "var(--space-7)"
  }), /*#__PURE__*/React.createElement(Caption, {
    tone: "muted",
    size: "sm",
    style: {
      marginTop: 0
    }
  }, "Posted flat, 3\u20135 working days within Spain."))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Added to your basket",
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setOpen(false)
    }, "Go to basket"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => setOpen(false)
    }, "Keep looking"))
  }, work.title, " \u2014 ", size, ", unframed."));
}
window.Detail = Detail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/prior-ui-kit/Detail.jsx", error: String((e && e.message) || e) }); }

// reference/prior-ui-kit/Home.jsx
try { (() => {
const {
  Plate,
  PlateCard,
  Caption,
  PullQuote,
  Button,
  Tag,
  Rule,
  DotChain
} = window.DS;
function Home({
  go,
  open
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 'var(--space-9)',
      alignItems: 'center',
      padding: 'var(--space-9) var(--page-margin) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-4xl)',
      maxWidth: '13ch'
    }
  }, "What to do when you're absolutely stuck?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-annotation)',
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase',
      marginTop: 'var(--space-6)',
      maxWidth: '34ch'
    }
  }, "A very small guide for difficult days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('guide')
  }, "Read the guide"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('work')
  }, "See the work")), /*#__PURE__*/React.createElement(DotChain, {
    count: 12,
    size: 16,
    style: {
      marginTop: 'var(--space-8)'
    }
  })), /*#__PURE__*/React.createElement(Plate, {
    src: "../../assets/illustrations/terraces.svg",
    alt: "A red path winding over a green hill",
    ratio: "tall"
  })), /*#__PURE__*/React.createElement(Rule, {
    weight: "ink",
    spacing: "0",
    style: {
      margin: '0 var(--page-margin)'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)'
    }
  }, "Recent"), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    onClick: () => go('work')
  }, "All work")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-6)'
    },
    onMouseLeave: () => setHover(null)
  }, window.KIT.plates.slice(0, 4).map(w => /*#__PURE__*/React.createElement(PlateCard, {
    key: w.id,
    src: w.src,
    alt: w.title,
    ratio: w.ratio,
    title: w.title,
    meta: w.medium + ' · ' + w.year,
    dim: hover != null && hover !== w.id,
    onMouseEnter: () => setHover(w.id),
    onClick: () => open(w),
    style: {
      cursor: 'pointer'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-ground)',
      padding: 'var(--space-8) var(--page-margin)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--paper-200)',
      fontSize: 'var(--text-2xl)'
    }
  }, "The invoice series"), /*#__PURE__*/React.createElement(Caption, {
    tone: "paper"
  }, "Eighteen paintings made in the descripci\xF3n box of a Spanish order form.")), /*#__PURE__*/React.createElement(Tag, {
    variant: "solid",
    pigment: "var(--pigment-pink)"
  }, "N\xB0 001 \u2013 N\xB0 018")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 'var(--space-5)'
    }
  }, window.KIT.series.slice(0, 6).map(w => /*#__PURE__*/React.createElement(PlateCard, {
    key: w.id,
    src: w.src,
    alt: w.title,
    ratio: "portrait",
    title: w.title,
    meta: 'N° ' + w.no,
    dim: hover != null && hover !== w.id,
    onMouseEnter: () => setHover(w.id),
    onClick: () => open(w),
    style: {
      cursor: 'pointer'
    }
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    pigment: "var(--pigment-pink)",
    onClick: () => go('series'),
    style: {
      marginTop: 'var(--space-7)'
    }
  }, "See all eighteen")));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/prior-ui-kit/Home.jsx", error: String((e && e.message) || e) }); }

// reference/prior-ui-kit/Series.jsx
try { (() => {
const {
  Caption,
  LedgerField,
  Button,
  Rule,
  PlateCard
} = window.DS;
function Series({
  open
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) var(--page-margin) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-3xl)',
      maxWidth: '16ch'
    }
  }, "The invoice series"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      marginTop: 'var(--space-5)',
      maxWidth: '52ch'
    }
  }, "Eighteen small paintings, N\xB0 001 to N\xB0 018, made in the ", /*#__PURE__*/React.createElement("i", null, "descripci\xF3n"), " box of a pre-printed Spanish order form. One object per sheet. The form was filled in as it came: the signature in the ", /*#__PURE__*/React.createElement("i", null, "vendedor"), " line, the number in ", /*#__PURE__*/React.createElement("i", null, "pedido"), ", everything else left blank."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginTop: 'var(--space-6)',
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(LedgerField, {
    label: "Vendedor:",
    value: "Isabelle Vandeplassche",
    width: 260
  }), /*#__PURE__*/React.createElement(LedgerField, {
    label: "Pedido",
    value: "N\xB0 001 \u2013 018",
    emphasis: true,
    width: 130
  }), /*#__PURE__*/React.createElement(LedgerField, {
    label: "A\xF1o",
    value: "2024",
    width: 90
  }), /*#__PURE__*/React.createElement(LedgerField, {
    label: "Total \u20AC",
    value: "180,00",
    align: "right",
    width: 110
  }))), /*#__PURE__*/React.createElement(Rule, {
    weight: "ink",
    spacing: "0",
    style: {
      margin: '0 var(--page-margin)'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-ground)',
      padding: 'var(--space-8) var(--page-margin) var(--space-10)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 'var(--space-6) var(--space-5)'
    },
    onMouseLeave: () => setHover(null)
  }, window.KIT.series.map(w => /*#__PURE__*/React.createElement(PlateCard, {
    key: w.id,
    src: w.src,
    alt: w.title,
    ratio: "portrait",
    title: w.title,
    meta: 'N° ' + w.no,
    dim: hover != null && hover !== w.id,
    onMouseEnter: () => setHover(w.id),
    onClick: () => open(w),
    style: {
      cursor: 'pointer'
    }
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    pigment: "var(--pigment-pink)",
    style: {
      marginTop: 'var(--space-8)'
    }
  }, "Enquire about the series")));
}
window.Series = Series;
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/prior-ui-kit/Series.jsx", error: String((e && e.message) || e) }); }

// reference/prior-ui-kit/Work.jsx
try { (() => {
const {
  PlateCard,
  Tabs,
  Caption
} = window.DS;
function Work({
  open
}) {
  const [tab, setTab] = React.useState('all');
  const [hover, setHover] = React.useState(null);
  const items = window.KIT.all.filter(w => tab === 'all' || w.group === tab);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) var(--page-margin) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-3xl)',
      marginBottom: 'var(--space-6)'
    }
  }, "Work"), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'all',
      label: 'All'
    }, {
      id: 'guide',
      label: 'The guide'
    }, {
      id: 'series',
      label: 'The series'
    }],
    active: tab,
    onSelect: setTab,
    style: {
      marginBottom: 'var(--space-7)'
    }
  }), /*#__PURE__*/React.createElement(Caption, {
    tone: "muted",
    size: "sm",
    style: {
      marginTop: 0,
      marginBottom: 'var(--space-7)'
    }
  }, items.length, " works"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 'var(--space-6) var(--space-5)'
    },
    onMouseLeave: () => setHover(null)
  }, items.map(w => /*#__PURE__*/React.createElement(PlateCard, {
    key: w.id,
    src: w.src,
    alt: w.title,
    ratio: "portrait",
    title: w.title,
    meta: w.no ? 'N° ' + w.no : w.page,
    dim: hover != null && hover !== w.id,
    onMouseEnter: () => setHover(w.id),
    onClick: () => open(w),
    style: {
      cursor: 'pointer'
    }
  }))));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/prior-ui-kit/Work.jsx", error: String((e && e.message) || e) }); }

// reference/prior-ui-kit/data.js
try { (() => {
// AORI Jewellery · Illustration Production Brief v1 Integration
// Swaps in Section 04 PNG artworks from uploads/ & assets/illustrations/ with SVG fallback support.
window.KIT = function () {
  const I = '../../assets/illustrations/';
  const series = [['001', 'psiloritis.png', 'Psiloritis', 'the ridge of Mount Psiloritis under late snow'], ['002', 'livyko.png', 'Libyan Sea', 'the Libyan Sea in flat horizontal bands of teal and deep blue'], ['003', 'terraces.png', 'Terraces', 'olive terraces climbing a hillside, low dry-stone walls'], ['004', 'village.png', 'Village', 'a hillside village of flat cubic whitewashed houses'], ['005', 'harbour.png', 'Harbour', 'a small Cretan fishing harbour, wooden boats'], ['006', 'tree.png', 'Olive tree', 'one old olive tree with a gnarled trunk'], ['007', 'rocks.png', 'Coast rocks', 'sun-warmed coastal limestone rocks meeting shallow water'], ['008', 'cove.png', 'Swimming cove', 'a hidden cove, turquoise shallows over rock'], ['009', 'beach.png', 'Summer beach', 'a summer beach with one striped umbrella'], ['010', 'night.png', 'Coast at dusk', 'the coast at dusk in deep blue, lit taverna window'], ['011', 'taverna.png', 'Taverna', 'an outdoor taverna table under a vine'], ['012', 'picnic.png', 'Still life', 'a tabletop still life, bread, figs and a carafe'], ['013', 'bench.png', 'Workbench', 'a jeweller workbench seen from above, hand tools'], ['014', 'hands.png', 'Hands + rings', 'a pair of hands wearing several silver and gold rings'], ['015', 'yiayia.png', 'Grandmother', 'an older woman folded hands, rings on worn fingers'], ['016', 'fishring.png', 'Hand + dog', 'a hand resting on grey sea pebbles beside a sleeping dog'], ['017', 'portrait.png', 'Profile', 'a woman calm profile wearing a gold hoop earring'], ['018', 'generations.png', 'Two women', 'a grandmother and granddaughter close together']].map(([n, file, title, desc]) => ({
    id: 'n' + n,
    no: n,
    title,
    description: desc,
    src: I + file,
    ratio: '1 / 1',
    group: 'series',
    medium: 'Flat gouache and oil-pastel on textured paper',
    year: '2024',
    size: '2000 × 2000 px',
    price: '180,00'
  }));
  const plates = [{
    id: 'olive',
    title: 'Olive branch',
    src: I + 'olive.png',
    ratio: 'square',
    page: 'BOTANICAL'
  }, {
    id: 'beads',
    title: 'Beads',
    src: I + 'beads.png',
    ratio: 'square',
    page: 'PLAY'
  }, {
    id: 'amphora',
    title: 'Amphora',
    src: I + 'amphora.png',
    ratio: 'square',
    page: 'MOTIF'
  }, {
    id: 'spiral',
    title: 'Spiral motif',
    src: I + 'spiral.png',
    ratio: 'square',
    page: 'MINOAN'
  }, {
    id: 'sun-sea',
    title: 'Sun emblem',
    src: I + 'sun-sea.png',
    ratio: 'square',
    page: 'EMBLEM'
  }, {
    id: 'hoop',
    title: 'Hoop mark',
    src: I + 'hoop.png',
    ratio: 'square',
    page: 'MARK'
  }].map(p => ({
    ...p,
    group: 'guide',
    no: null,
    medium: 'Flat gouache on paper',
    year: '2024',
    size: '2000 × 2000 px',
    price: '150,00'
  }));
  return {
    series,
    plates,
    all: [...plates, ...series]
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/prior-ui-kit/data.js", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Chrome.jsx
try { (() => {
function Nav({
  page,
  onNav
}) {
  const link = (id, label) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      font: 'var(--type-ui)',
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      textDecoration: page === id ? 'underline' : 'none',
      textDecorationThickness: '2px',
      textUnderlineOffset: '5px',
      opacity: page === id ? 1 : .62,
      whiteSpace: 'nowrap'
    }
  }, label);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 48,
      padding: '17px 56px',
      borderBottom: '2px solid var(--rule-ink)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'block',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/wordmark.svg",
    alt: "A\xD3RI",
    style: {
      height: 30,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 30
    }
  }, link('home', 'Home'), link('collections', 'Collections'), link('product', 'A piece'), link('workshop', 'The workshop'), link('sizing', 'Sizing')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-annotation-sm)',
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Search"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-annotation-sm)',
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase'
    }
  }, "Basket \xB7 0")));
}
function Footer() {
  const col = (h, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-annotation-sm)',
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 11
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, items.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      font: 'var(--type-body)',
      fontSize: 13.5
    }
  }, t))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '2px solid var(--rule-ink)',
      padding: '34px 56px 40px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/wordmark.svg",
    alt: "A\xD3RI",
    style: {
      height: 30,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '13px 0 0',
      font: 'var(--type-body)',
      fontSize: 13.5,
      lineHeight: 1.7,
      maxWidth: '34ch',
      color: 'var(--text-muted)'
    }
  }, "Silver 925, made by hand in Heraklion. Small runs, named for the places they come from.")), col('Shop', ['All pieces', 'Psiloritis', 'Livyko', 'Elia', 'Knosos']), col('Practical', ['Sizing', 'Care', 'Shipping', 'Returns']), col('Elsewhere', ['Instagram', 'The workshop', 'Stockists', 'Press'])), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      paddingTop: 13,
      borderTop: '1px solid var(--rule-hair)',
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-annotation-sm)',
      letterSpacing: 'var(--tracking-annotation)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Heraklion, Crete"), /*#__PURE__*/React.createElement("span", null, "All prices include VAT")));
}
Object.assign(window, {
  Nav,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Product.jsx
try { (() => {
const P = '../../assets/photography/';
const PR = '../../assets/products/';
const V = '../../assets/illustrations-v2-web/';
const M = '../../assets/motifs-v2/';
const ann = {
  font: 'var(--type-annotation-sm)',
  letterSpacing: 'var(--tracking-annotation)',
  textTransform: 'uppercase'
};
function Product({
  piece,
  all,
  onOpen,
  onAdd,
  inBasket
}) {
  const {
    Button,
    Plate,
    LedgerField
  } = window.AORIDesignSystem_12e58c;
  const [size, setSize] = React.useState(0);
  const [open, setOpen] = React.useState('care');
  const sizes = /sizes/i.test(piece.spec) ? ['50', '52', '54', '56', '58'] : piece.id === 'elia-teardrop' ? ['50', '52', '54', '56', '58'] : ['One size'];
  const shots = [{
    k: 'product',
    src: PR + piece.product + '.png',
    bg: piece.ground
  }, {
    k: 'bench',
    src: P + 'bench-hands.jpg'
  }, {
    k: 'worn',
    src: P + 'hand-thin-rings.jpg'
  }];
  const [shot, setShot] = React.useState(0);
  const sold = piece.left === 0;
  const related = all.filter(p => p.run === piece.run && p.id !== piece.id).concat(all.filter(p => p.run !== piece.run)).slice(0, 3);
  const row = (id, label, body) => /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--rule-hair)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === id ? null : id),
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '13px 0',
      ...ann
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, open === id ? '−' : '+')), open === id && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 15px',
      fontSize: 14.5,
      lineHeight: 1.72,
      maxWidth: '52ch'
    }
  }, body));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '13px 56px',
      borderBottom: '1px solid var(--rule-hair)',
      ...ann,
      color: 'var(--text-muted)'
    }
  }, "Collections / ", piece.run, " / ", piece.name.split(' ').slice(1).join(' ')), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 44,
      padding: '30px 56px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, shots.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.k,
    onClick: () => setShot(i),
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'block',
      boxShadow: i === shot ? 'inset 0 0 0 2px var(--rule-ink)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.src,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '1',
      objectFit: s.bg ? 'contain' : 'cover',
      background: s.bg || 'transparent',
      padding: s.bg ? '14%' : 0,
      boxSizing: 'border-box',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("img", {
    src: shots[shot].src,
    alt: "",
    style: {
      flex: 1,
      minWidth: 0,
      aspectRatio: '4/5',
      objectFit: shots[shot].bg ? 'contain' : 'cover',
      background: shots[shot].bg || 'transparent',
      padding: shots[shot].bg ? '10%' : 0,
      boxSizing: 'border-box',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: M + piece.motif + '.png',
    alt: "",
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      display: 'block',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ann,
      color: 'var(--text-muted)'
    }
  }, piece.run), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '3px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 38,
      letterSpacing: '.04em',
      lineHeight: 1.05,
      fontWeight: 400
    }
  }, piece.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 20,
      borderBottom: '1px solid var(--rule-hair)',
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 27,
      letterSpacing: '.04em'
    }
  }, piece.price), /*#__PURE__*/React.createElement("span", {
    style: {
      ...ann,
      color: sold ? 'var(--text-faint)' : 'var(--accent)'
    }
  }, sold ? `All ${piece.of} gone` : `${piece.left} left of ${piece.of}`)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 15.5,
      lineHeight: 1.75,
      maxWidth: '48ch'
    }
  }, piece.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ann,
      color: 'var(--text-muted)',
      marginBottom: 9
    }
  }, sizes.length > 1 ? 'Size' : 'Made in one size'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      flexWrap: 'wrap'
    }
  }, sizes.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSize(i),
    style: {
      all: 'unset',
      cursor: 'pointer',
      height: 38,
      padding: '0 17px',
      display: 'inline-flex',
      alignItems: 'center',
      ...ann,
      boxShadow: i === size ? 'inset 0 0 0 2px var(--rule-ink)' : 'inset 0 0 0 1px var(--rule-hair)',
      color: i === size ? 'var(--ink-900)' : 'var(--text-muted)'
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 11,
      marginTop: 22,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    disabled: sold,
    onClick: onAdd
  }, sold ? 'This run is closed' : inBasket ? 'In the basket' : `Add to basket — ${piece.price}`), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    size: "md",
    as: "a"
  }, "Sizing")), sold && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--text-muted)',
      maxWidth: '46ch'
    }
  }, "We will make more, but not the same. Tell us and we will write when the next run of ", piece.run, " opens."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, row('care', 'Materials and care', 'Silver 925, matte. It will darken with wear; a soft cloth brings it back. Do not use silver dip on a hammered surface.'), row('fit', 'Sizing and fit', `${piece.spec}. If you are between sizes, take the larger one — the band is filed, not stretched.`), row('ship', 'Shipping and returns', 'Two working days inside Greece, five to the rest of Europe. In a cotton pouch, in a box, with the run number written on the tag. Thirty days to return it unworn.')))), /*#__PURE__*/React.createElement("section", {
    style: {
      margin: '44px 56px 0',
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-toned)',
      padding: '30px 34px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ann,
      color: 'var(--text-muted)'
    }
  }, "Where it comes from"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      marginTop: 10
    }
  }, piece.run), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '13px 0 0',
      fontSize: 15,
      lineHeight: 1.75,
      maxWidth: '40ch'
    }
  }, "Every run is named for a place, and the painting is how we say which one. This piece belongs to ", piece.run, "; the painting is the collection's, not the piece's.")), /*#__PURE__*/React.createElement("img", {
    src: V + (piece.run === 'Livyko' ? 'livyko' : piece.run === 'Elia' ? 'olive' : piece.run === 'Knosos' ? 'spiral' : 'psiloritis') + '.jpg',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      minHeight: 240
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '44px 56px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '2px solid var(--rule-ink)',
      paddingBottom: 10,
      ...ann
    }
  }, "More from the bench"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22,
      marginTop: 18
    }
  }, related.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(p.id);
    },
    style: {
      textDecoration: 'none',
      color: 'var(--ink-900)',
      opacity: p.left === 0 ? .55 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: p.ground,
      aspectRatio: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '15%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PR + p.product + '.png',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 9,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      letterSpacing: '.04em'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      ...ann,
      color: 'var(--text-muted)'
    }
  }, p.price)))))));
}
Object.assign(window, {
  Product
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Product.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/StorefrontHome.jsx
try { (() => {
const P = '../../assets/photography/';
const PR = '../../assets/products/';
const V = '../../assets/illustrations-v2-web/';
const M = '../../assets/motifs-v2/';
const RUNS = [{
  id: 'livyko',
  name: 'Livyko',
  plate: 'livyko',
  motif: 'hoop',
  line: 'The Libyan Sea, flat at six in the evening.'
}, {
  id: 'elia',
  name: 'Elia',
  plate: 'olive',
  motif: 'olive-wreath',
  line: 'The olive terraces above the village.'
}, {
  id: 'psiloritis',
  name: 'Psiloritis',
  plate: 'psiloritis',
  motif: 'sun',
  line: 'The ridge, with snow on it until May.'
}, {
  id: 'knosos',
  name: 'Knosos',
  plate: 'spiral',
  motif: 'spiral',
  line: 'Minoan goldwork, and what is left of it.'
}];
const PIECES = [{
  id: 'livyko-stone-ring',
  run: 'Livyko',
  motif: 'hoop',
  name: 'Livyko Stone Ring',
  price: '210 €',
  product: 'livyko-stone-ring',
  ground: '#1890a8',
  left: 4,
  of: 12,
  spec: '6 mm band, sizes 50 to 58',
  blurb: 'A wide band, hammered and left matte, with two blue stones set rough into the metal. Named for the beach below the village, where the water goes flat at six in the morning.'
}, {
  id: 'livyko-drop-ring',
  run: 'Livyko',
  motif: 'hoop',
  name: 'Livyko Drop Ring',
  price: '195 €',
  product: 'livyko-drop-ring',
  ground: '#006078',
  left: 7,
  of: 12,
  spec: 'Double dome, sizes 50 to 58',
  blurb: 'Two domes forged from one piece, with a pale blue drop hung underneath so it moves when you do.'
}, {
  id: 'elia-teardrop',
  run: 'Elia',
  motif: 'olive-wreath',
  name: 'Elia Teardrop',
  price: '165 €',
  product: 'elia-teardrop-ring',
  ground: '#5f7a46',
  left: 8,
  of: 12,
  spec: 'Sizes 50 to 58',
  blurb: 'A pointed band with a clear drop at the crown, the shape of an olive before it darkens.'
}, {
  id: 'psiloritis-sun-drops',
  run: 'Psiloritis',
  motif: 'sun',
  name: 'Psiloritis Sun Drops',
  price: '140 €',
  product: 'psiloritis-sun-drops',
  ground: '#c0a860',
  left: 6,
  of: 12,
  spec: '32 mm drop',
  blurb: 'A rough nugget at the lobe and a spoked sun hung below it. Cast from a wax pressed by hand, so no two are the same.'
}, {
  id: 'knosos-stone-ring',
  run: 'Knosos',
  motif: 'spiral',
  name: 'Knosos Stone Ring',
  price: '240 €',
  product: 'knosos-stone-ring',
  ground: '#c05a28',
  left: 2,
  of: 12,
  spec: '6 mm band, sizes 50 to 58',
  blurb: 'Oxidised silver with a pink and a red stone set side by side, the way colour sits in Minoan fresco.'
}, {
  id: 'knosos-solitaire',
  run: 'Knosos',
  motif: 'spiral',
  name: 'Knosos Solitaire',
  price: '260 €',
  product: 'knosos-solitaire',
  ground: '#8a3a22',
  left: 0,
  of: 12,
  spec: 'Sizes 50 to 58',
  blurb: 'One clear stone held in four hand-drawn claws. The band is left uneven on purpose.'
}];
const ann = {
  font: 'var(--type-annotation-sm)',
  letterSpacing: 'var(--tracking-annotation)',
  textTransform: 'uppercase'
};
function StorefrontHome({
  onOpen
}) {
  const {
    Plate,
    Button,
    Caption
  } = window.AORIDesignSystem_12e58c;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 470,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: V + 'livyko.jpg',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'var(--paper-100)',
      background: 'linear-gradient(rgba(42,38,34,.30), rgba(42,38,34,.52))',
      padding: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ann,
      letterSpacing: '.18em'
    }
  }, "Silver 925 \xB7 Crete"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 42,
      letterSpacing: '.03em',
      lineHeight: 1.26,
      marginTop: 16,
      maxWidth: '26ch',
      textWrap: 'pretty'
    }
  }, "Made by hand in Heraklion, in runs of twelve, and named after the places they came from."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "a",
    onClick: e => {
      e.preventDefault();
      onOpen(PIECES[0].id);
    }
  }, "See the collections")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '38px 56px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderBottom: '2px solid var(--rule-ink)',
      paddingBottom: 10
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 27,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      fontWeight: 400
    }
  }, "Four places"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...ann,
      color: 'var(--text-muted)'
    }
  }, "Each run closes when it is gone")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 22,
      marginTop: 20
    }
  }, RUNS.map(r => /*#__PURE__*/React.createElement("figure", {
    key: r.id,
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    src: V + r.plate + '.jpg',
    ratio: "portrait"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginTop: 11
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: M + r.motif + '.png',
    alt: "",
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      display: 'block',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      lineHeight: 1
    }
  }, r.name), /*#__PURE__*/React.createElement(Caption, {
    size: "sm",
    tone: "muted"
  }, r.line))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 56px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderBottom: '2px solid var(--rule-ink)',
      paddingBottom: 10
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 27,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      fontWeight: 400
    }
  }, "In the shop now"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...ann,
      color: 'var(--text-muted)'
    }
  }, PIECES.filter(p => p.left > 0).length, " of ", PIECES.length, " pieces still open")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '28px 22px',
      marginTop: 20
    }
  }, PIECES.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(p.id);
    },
    style: {
      textDecoration: 'none',
      color: 'var(--ink-900)',
      opacity: p.left === 0 ? .55 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: p.ground,
      aspectRatio: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '15%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PR + p.product + '.png',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginTop: 11
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: M + p.motif + '.png',
    alt: "",
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      display: 'block',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      letterSpacing: '.04em',
      lineHeight: 1.1
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...ann,
      color: 'var(--text-muted)'
    }
  }, p.price), /*#__PURE__*/React.createElement("span", {
    style: {
      ...ann,
      color: p.left === 0 ? 'var(--text-faint)' : 'var(--accent)'
    }
  }, p.left === 0 ? `All ${p.of} gone` : `${p.left} left of ${p.of}`)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      margin: '46px 56px 0',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 0,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'bench-hands.jpg',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      minHeight: 260
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-toned)',
      padding: '34px 38px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ann,
      color: 'var(--text-muted)'
    }
  }, "The bench"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      marginTop: 11,
      lineHeight: 1.1
    }
  }, "Twelve, then no more"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '15px 0 0',
      fontSize: 15.5,
      lineHeight: 1.75,
      maxWidth: '46ch'
    }
  }, "Every run is twelve pieces. When they are gone we make something else, because the sheet was cut for twelve and the next sheet will be a little different."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    as: "a"
  }, "How a piece is made")))));
}
Object.assign(window, {
  StorefrontHome,
  PIECES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/StorefrontHome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Caption = __ds_scope.Caption;

__ds_ns.Dot = __ds_scope.Dot;

__ds_ns.DotChain = __ds_scope.DotChain;

__ds_ns.Plate = __ds_scope.Plate;

__ds_ns.PlateCard = __ds_scope.PlateCard;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.StepList = __ds_scope.StepList;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Mark = __ds_scope.Mark;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.LedgerField = __ds_scope.LedgerField;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
