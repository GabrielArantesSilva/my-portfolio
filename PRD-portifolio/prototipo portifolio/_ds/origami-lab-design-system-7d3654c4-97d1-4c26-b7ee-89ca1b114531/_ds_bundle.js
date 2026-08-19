/* @ds-bundle: {"format":4,"namespace":"OrigamiLabDesignSystem_7d3654","components":[{"name":"AgendaList","sourcePath":"components/content/AgendaList.jsx"},{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"Matrix2x2","sourcePath":"components/content/Matrix2x2.jsx"},{"name":"PrincipleCard","sourcePath":"components/content/PrincipleCard.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"RingList","sourcePath":"components/content/RingList.jsx"},{"name":"TeamMember","sourcePath":"components/content/TeamMember.jsx"},{"name":"Timeline","sourcePath":"components/content/Timeline.jsx"},{"name":"BarChart","sourcePath":"components/data/BarChart.jsx"},{"name":"BigNumber","sourcePath":"components/data/BigNumber.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"DonutChart","sourcePath":"components/data/DonutChart.jsx"},{"name":"LineChart","sourcePath":"components/data/LineChart.jsx"},{"name":"MeterRow","sourcePath":"components/data/MeterRow.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"BrandLogo","sourcePath":"components/foundations/BrandLogo.jsx"},{"name":"Eyebrow","sourcePath":"components/foundations/Eyebrow.jsx"},{"name":"Rule","sourcePath":"components/foundations/Rule.jsx"},{"name":"SlideHeader","sourcePath":"components/foundations/SlideHeader.jsx"},{"name":"StatusDot","sourcePath":"components/foundations/StatusDot.jsx"},{"name":"Tag","sourcePath":"components/foundations/Tag.jsx"},{"name":"BrowserFrame","sourcePath":"components/media/BrowserFrame.jsx"},{"name":"MediaFrame","sourcePath":"components/media/MediaFrame.jsx"}],"sourceHashes":{"components/content/AgendaList.jsx":"809889e9a37e","components/content/Callout.jsx":"64f73faf632b","components/content/Matrix2x2.jsx":"ca8be494ce49","components/content/PrincipleCard.jsx":"1013ce9db1a0","components/content/Quote.jsx":"d7d154e4ffbb","components/content/RingList.jsx":"8c1c70c35de9","components/content/TeamMember.jsx":"542c212a7a27","components/content/Timeline.jsx":"51ad9d9da097","components/data/BarChart.jsx":"9900b69a15b5","components/data/BigNumber.jsx":"d2ee78be4362","components/data/DataTable.jsx":"5735d86ce042","components/data/DonutChart.jsx":"b8b7924e93db","components/data/LineChart.jsx":"f52491f9f537","components/data/MeterRow.jsx":"a615c82a5b38","components/data/StatCard.jsx":"c1b2e91a60a3","components/foundations/BrandLogo.jsx":"4deb3360c907","components/foundations/Eyebrow.jsx":"68c39cb4aeaf","components/foundations/Rule.jsx":"0e54641a4489","components/foundations/SlideHeader.jsx":"c8e5fafcff28","components/foundations/StatusDot.jsx":"5bb0adffe9b7","components/foundations/Tag.jsx":"73a4d37c92c3","components/media/BrowserFrame.jsx":"5456569607a1","components/media/MediaFrame.jsx":"29449ca49168","ui_kits/slides/deck-stage.js":"f3d3d0a662c0","ui_kits/slides/slides-core.jsx":"15623b5a0b8b","ui_kits/slides/slides-data.jsx":"c2e901ba076f","ui_kits/slides/slides-media.jsx":"da1ae6fb3202"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OrigamiLabDesignSystem_7d3654 = window.OrigamiLabDesignSystem_7d3654 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/AgendaList.jsx
try { (() => {
function AgendaList({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--ol-space-7)',
      padding: '28px 0',
      borderBottom: 'var(--ol-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)',
      fontWeight: 'var(--ol-weight-bold)',
      color: 'var(--ol-green-deep)',
      width: 56,
      flex: 'none'
    }
  }, it.index ?? String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-list)',
      fontWeight: 'var(--ol-weight-bold)',
      letterSpacing: 'var(--ol-ls-subtitle)',
      flex: 1,
      color: 'var(--ol-ink)'
    }
  }, it.label), it.meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, it.meta) : null)));
}
Object.assign(__ds_scope, { AgendaList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/AgendaList.jsx", error: String((e && e.message) || e) }); }

// components/content/PrincipleCard.jsx
try { (() => {
function PrincipleCard({
  index,
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ol-ivory)',
      padding: '44px 36px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ol-space-4)',
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ol-size-body)',
      fontWeight: 'var(--ol-weight-bold)',
      color: 'var(--ol-green-deep)'
    }
  }, index), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-subtitle)',
      fontWeight: 'var(--ol-weight-bold)',
      lineHeight: 'var(--ol-lh-subtitle)',
      letterSpacing: 'var(--ol-ls-subtitle)',
      color: 'var(--ol-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body)',
      lineHeight: 'var(--ol-lh-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, children));
}
Object.assign(__ds_scope, { PrincipleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PrincipleCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function Quote({
  children,
  name,
  role,
  avatar,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ol-space-11)',
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 200,
      lineHeight: .6,
      fontWeight: 'var(--ol-weight-black)',
      color: 'var(--ol-green-deep)',
      height: 96
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-quote)',
      fontWeight: 'var(--ol-weight-medium)',
      lineHeight: 'var(--ol-lh-quote)',
      letterSpacing: 'var(--ol-ls-quote)',
      maxWidth: 1450,
      color: 'var(--ol-ink)'
    }
  }, children), name ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ol-space-5)',
      borderTop: '1px solid var(--ol-wheat)',
      paddingTop: 'var(--ol-space-8)'
    }
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: 88,
      height: 88,
      flex: 'none',
      borderRadius: 'var(--ol-radius-round)',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      flex: 'none',
      borderRadius: 'var(--ol-radius-round)',
      background: 'var(--ol-sand)',
      boxShadow: 'inset 0 0 0 1px var(--ol-line)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body-lg)',
      fontWeight: 'var(--ol-weight-bold)',
      color: 'var(--ol-ink)'
    }
  }, name), role ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, role) : null)) : null);
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/RingList.jsx
try { (() => {
function RingList({
  items = [],
  tone = 'light',
  size = 28,
  gap = 26,
  style
}) {
  const onDark = tone === 'dark' || tone === 'strong';
  const ring = tone === 'strong' ? 'var(--ol-sage)' : onDark ? 'var(--ol-green-light)' : 'var(--ol-green-deep)';
  const text = tone === 'strong' ? 'var(--ol-mist)' : onDark ? 'var(--ol-ink-dim)' : 'var(--ol-ink)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap,
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--ol-space-5)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      flex: 'none',
      borderRadius: 'var(--ol-radius-round)',
      border: 'var(--ol-ring-width) solid ' + ring,
      marginTop: 6
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body-lg)',
      lineHeight: 1.55,
      color: text
    }
  }, item))));
}
Object.assign(__ds_scope, { RingList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/RingList.jsx", error: String((e && e.message) || e) }); }

// components/content/TeamMember.jsx
try { (() => {
function TeamMember({
  photo,
  name,
  role,
  children,
  size = 240,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ol-space-5)',
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--ol-radius-round)',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--ol-radius-round)',
      background: 'var(--ol-sand)',
      boxShadow: 'inset 0 0 0 1px var(--ol-line)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-lead)',
      fontWeight: 'var(--ol-weight-bold)',
      color: 'var(--ol-ink)'
    }
  }, name), role ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, role) : null), children ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body)',
      lineHeight: 1.55,
      color: 'var(--ol-ink-soft)'
    }
  }, children) : null);
}
Object.assign(__ds_scope, { TeamMember });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TeamMember.jsx", error: String((e && e.message) || e) }); }

// components/data/BarChart.jsx
try { (() => {
function BarChart({
  groups = [],
  legend = [],
  height = 380,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ol-space-9)',
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, legend.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ol-space-7)',
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)',
      justifyContent: 'flex-end'
    }
  }, legend.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ol-space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 'var(--ol-radius-xs)',
      background: l.color
    }
  }), l.label))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--ol-space-8)',
      borderBottom: 'var(--ol-hairline)'
    }
  }, groups.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 12,
      height: '100%'
    }
  }, g.series.map((s, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      flex: 1,
      height: s.percent + '%',
      background: s.color || 'var(--ol-green-deep)',
      borderRadius: 'var(--ol-radius-sm) var(--ol-radius-sm) 0 0'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ol-space-8)'
    }
  }, groups.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)',
      fontWeight: 'var(--ol-weight-semibold)',
      color: 'var(--ol-ink)'
    }
  }, g.label), g.meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, g.meta) : null))));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/BigNumber.jsx
try { (() => {
function BigNumber({
  value,
  unit,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ol-green-deep)',
      color: 'var(--ol-text-on-strong)',
      borderRadius: 'var(--ol-radius)',
      padding: 'var(--ol-space-12)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'var(--ol-space-5)',
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ol-size-numeral-xl)',
      fontWeight: 'var(--ol-weight-black)',
      lineHeight: 'var(--ol-lh-numeral-xl)',
      letterSpacing: 'var(--ol-ls-numeral-xl)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value, unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 80,
      fontWeight: 'var(--ol-weight-bold)'
    }
  }, " ", unit) : null), children ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 30,
      lineHeight: 1.45,
      color: 'var(--ol-mist)',
      maxWidth: 620
    }
  }, children) : null);
}
Object.assign(__ds_scope, { BigNumber });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BigNumber.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  style
}) {
  const grid = columns.map(c => c.width || '1fr').join(' ');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--ol-radius)',
      overflow: 'hidden',
      border: 'var(--ol-hairline)',
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: grid,
      background: 'var(--ol-green-deep)',
      color: 'var(--ol-text-on-strong)',
      fontSize: 'var(--ol-size-body)',
      fontWeight: 'var(--ol-weight-semibold)',
      letterSpacing: 'var(--ol-table-head-tracking)',
      textTransform: 'uppercase'
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '24px 28px',
      textAlign: c.align || 'left'
    }
  }, c.label))), rows.map((row, r) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'grid',
      gridTemplateColumns: grid,
      background: r % 2 === 0 ? 'var(--ol-paper)' : 'var(--ol-ivory)',
      fontSize: 'var(--ol-size-body)',
      borderBottom: r === rows.length - 1 ? 'none' : '1px solid var(--ol-sand)'
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 'var(--ol-pad-table-cell)',
      textAlign: c.align || 'left',
      fontVariantNumeric: c.align === 'right' ? 'tabular-nums' : 'normal',
      fontWeight: i === 0 ? 'var(--ol-weight-semibold)' : 'var(--ol-weight-regular)',
      color: c.muted ? 'var(--ol-ink-soft)' : 'var(--ol-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: c.align === 'right' ? 'flex-end' : 'flex-start',
      gap: 'var(--ol-space-3)'
    }
  }, row[c.key])))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/DonutChart.jsx
try { (() => {
function DonutChart({
  segments = [],
  centerValue,
  centerLabel,
  size = 280,
  style
}) {
  let acc = 0;
  const stops = segments.map(s => {
    const from = acc;
    acc += s.value;
    return s.color + ' ' + from + '% ' + acc + '%';
  }).join(', ');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ol-space-7)',
      alignItems: 'center',
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--ol-radius-round)',
      background: 'conic-gradient(' + stops + ')',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size * 0.607,
      height: size * 0.607,
      borderRadius: 'var(--ol-radius-round)',
      background: 'var(--ol-paper)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 44,
      fontWeight: 'var(--ol-weight-black)',
      letterSpacing: '-.02em',
      color: 'var(--ol-ink)'
    }
  }, centerValue), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, centerLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ol-space-3)',
      fontSize: 'var(--ol-size-body)'
    }
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ol-space-3)',
      color: 'var(--ol-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 'var(--ol-radius-xs)',
      background: s.color
    }
  }), s.label, /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      color: 'var(--ol-ink-soft)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, s.value, "%")))));
}
Object.assign(__ds_scope, { DonutChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DonutChart.jsx", error: String((e && e.message) || e) }); }

// components/data/LineChart.jsx
try { (() => {
function LineChart({
  series = [],
  labels = [],
  gridLines = 3,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ol-space-5)',
      flex: 1,
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 300",
    preserveAspectRatio: "none",
    style: {
      width: '100%',
      flex: 1
    }
  }, Array.from({
    length: gridLines
  }).map((_, i) => {
    const y = (i + 1) * 300 / (gridLines + 1);
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: "0",
      y1: y,
      x2: "800",
      y2: y,
      stroke: "var(--ol-sand)",
      strokeWidth: "2"
    });
  }), series.map((s, i) => /*#__PURE__*/React.createElement("polyline", {
    key: i,
    points: s.points,
    fill: "none",
    stroke: s.color || 'var(--ol-green-deep)',
    strokeWidth: "5",
    strokeDasharray: s.dashed ? '10 10' : undefined,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), series[0] && series[0].endDot !== false ? (() => {
    const pts = String(series[0].points).trim().split(/\s+/);
    const [cx, cy] = pts[pts.length - 1].split(',');
    return /*#__PURE__*/React.createElement("circle", {
      cx: cx,
      cy: cy,
      r: "9",
      fill: series[0].color || 'var(--ol-green-deep)'
    });
  })() : null), labels.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, labels.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, l))) : null);
}
Object.assign(__ds_scope, { LineChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/LineChart.jsx", error: String((e && e.message) || e) }); }

// components/data/MeterRow.jsx
try { (() => {
function MeterRow({
  label,
  value,
  percent = 0,
  tone = 'deep',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ol-space-2)',
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-lead)',
      fontWeight: 'var(--ol-weight-bold)',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--ol-ink)'
    }
  }, value)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12,
      background: 'var(--ol-sand)',
      borderRadius: 'var(--ol-radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: percent + '%',
      height: '100%',
      background: tone === 'sage' ? 'var(--ol-sage)' : 'var(--ol-green-deep)'
    }
  })));
}
Object.assign(__ds_scope, { MeterRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MeterRow.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function StatCard({
  value,
  unit,
  label,
  tone = 'paper',
  style
}) {
  const strong = tone === 'deep';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: strong ? 'var(--ol-green-deep)' : 'var(--ol-paper)',
      border: strong ? 'none' : 'var(--ol-hairline)',
      color: strong ? 'var(--ol-text-on-strong)' : 'var(--ol-ink)',
      borderRadius: 'var(--ol-radius)',
      padding: '36px 40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'var(--ol-space-2)',
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ol-size-numeral-lg)',
      fontWeight: 'var(--ol-weight-black)',
      letterSpacing: 'var(--ol-ls-numeral-lg)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value, unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 44
    }
  }, unit) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: strong ? 'var(--ol-mist)' : 'var(--ol-ink-soft)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/foundations/BrandLogo.jsx
try { (() => {
const FILES = {
  'horizontal-white': 'origami-lab-horizontal-white.png',
  'horizontal-black': 'origami-lab-horizontal-black.png',
  'vertical-white': 'origami-lab-vertical-white.png',
  'vertical-black': 'origami-lab-vertical-black.png',
  'mark-color': 'mark-color.png',
  'mark-white': 'mark-white.png',
  'mark-black': 'mark-black.png'
};
function BrandLogo({
  variant = 'horizontal',
  tone = 'white',
  height = 44,
  base = 'assets/logos',
  style
}) {
  const key = variant + '-' + tone;
  const file = FILES[key] || FILES['horizontal-white'];
  return /*#__PURE__*/React.createElement("img", {
    src: base + '/' + file,
    alt: "Origami Lab",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { BrandLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/BrandLogo.jsx", error: String((e && e.message) || e) }); }

// components/foundations/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  default: 'var(--ol-green-deep)',
  onDark: 'var(--ol-green-light)',
  muted: 'var(--ol-ink-soft)',
  warn: 'var(--ol-clay)',
  onStrong: 'var(--ol-green-light)'
};
function Eyebrow({
  children,
  tone = 'default',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--ol-font-sans)',
      fontSize: 'var(--ol-eyebrow-size)',
      fontWeight: 'var(--ol-eyebrow-weight)',
      letterSpacing: 'var(--ol-eyebrow-tracking)',
      textTransform: 'uppercase',
      color: TONES[tone] || TONES.default,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/Callout.jsx
try { (() => {
const TONES = {
  mist: {
    background: 'var(--ol-mist)',
    color: 'var(--ol-ink)',
    eyebrow: 'default'
  },
  sand: {
    background: 'var(--ol-sand)',
    color: 'var(--ol-ink)',
    eyebrow: 'muted'
  },
  deep: {
    background: 'var(--ol-green-deep)',
    color: 'var(--ol-text-on-strong)',
    eyebrow: 'onStrong'
  },
  paper: {
    background: 'var(--ol-paper)',
    color: 'var(--ol-ink)',
    eyebrow: 'muted',
    border: 'var(--ol-hairline)'
  }
};
function Callout({
  eyebrow,
  children,
  tone = 'mist',
  style
}) {
  const t = TONES[tone] || TONES.mist;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.background,
      color: t.color,
      border: t.border || 'none',
      borderRadius: 'var(--ol-radius)',
      padding: 'var(--ol-space-7)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ol-space-3)',
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: t.eyebrow
  }, eyebrow) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body)',
      lineHeight: 1.55
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/Matrix2x2.jsx
try { (() => {
function Matrix2x2({
  quadrants = [],
  xLabel = 'Custo →',
  yLabel = 'Impacto →',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ol-space-3)',
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ol-space-3)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "muted",
    style: {
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)'
    }
  }, yLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 'var(--ol-space-3)'
    }
  }, quadrants.map((q, i) => {
    const emph = q.emphasis;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: emph ? 'var(--ol-green-deep)' : q.tone === 'sand' ? 'var(--ol-sand)' : 'var(--ol-paper)',
        border: emph || q.tone === 'sand' ? 'none' : 'var(--ol-hairline)',
        color: emph ? 'var(--ol-text-on-strong)' : 'var(--ol-ink)',
        borderRadius: 'var(--ol-radius)',
        padding: 'var(--ol-pad-card)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
      tone: emph ? 'onStrong' : 'muted'
    }, q.label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--ol-space-3)'
      }
    }, (q.items || []).map((it, j) => /*#__PURE__*/React.createElement("span", {
      key: j,
      style: {
        width: 52,
        height: 52,
        borderRadius: 'var(--ol-radius-round)',
        background: it.color || (emph ? 'var(--ol-green-light)' : 'var(--ol-sage)'),
        color: 'var(--ol-ink)',
        fontSize: 'var(--ol-size-body)',
        fontWeight: 'var(--ol-weight-black)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, it.key ?? it))));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--ol-space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "muted",
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, xLabel)));
}
Object.assign(__ds_scope, { Matrix2x2 });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Matrix2x2.jsx", error: String((e && e.message) || e) }); }

// components/content/Timeline.jsx
try { (() => {
function Timeline({
  phases = [],
  style
}) {
  const cols = 'repeat(' + phases.length + ',1fr)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cols,
      gap: 'var(--ol-gutter)'
    }
  }, phases.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ol-space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: p.current ? 'default' : 'muted'
  }, p.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, p.period)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 64,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 2,
      background: 'var(--ol-line)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: cols,
      width: '100%'
    }
  }, phases.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: p.current ? {
      width: 26,
      height: 26,
      borderRadius: 'var(--ol-radius-round)',
      background: 'var(--ol-green-deep)',
      border: '5px solid var(--ol-ivory)',
      boxShadow: '0 0 0 2px var(--ol-green-deep)'
    } : {
      width: 26,
      height: 26,
      borderRadius: 'var(--ol-radius-round)',
      background: 'var(--ol-ivory)',
      border: '3px solid var(--ol-sage)'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cols,
      gap: 'var(--ol-gutter)'
    }
  }, phases.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: p.current ? 'var(--ol-green-deep)' : 'var(--ol-paper)',
      color: p.current ? 'var(--ol-text-on-strong)' : 'var(--ol-ink)',
      border: p.current ? 'none' : 'var(--ol-hairline)',
      borderRadius: 'var(--ol-radius)',
      padding: 'var(--ol-pad-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ol-space-3)',
      minHeight: 280
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-card-title)',
      fontWeight: 'var(--ol-weight-bold)',
      lineHeight: 1.2
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body)',
      lineHeight: 1.55,
      color: p.current ? 'var(--ol-mist)' : 'var(--ol-ink-soft)'
    }
  }, p.description), p.status ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-green-light)'
    }
  }, p.status) : null))));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/foundations/Rule.jsx
try { (() => {
function Rule({
  tone = 'light',
  width = 96,
  height = 3,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      flex: 'none',
      background: tone === 'dark' ? 'var(--ol-green-light)' : 'var(--ol-green-deep)',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/Rule.jsx", error: String((e && e.message) || e) }); }

// components/foundations/SlideHeader.jsx
try { (() => {
const SIZES = {
  section: {
    fontSize: 'var(--ol-size-section)',
    lineHeight: 'var(--ol-lh-section)',
    letterSpacing: 'var(--ol-ls-section)'
  },
  heading: {
    fontSize: 'var(--ol-size-heading)',
    lineHeight: 'var(--ol-lh-heading)',
    letterSpacing: 'var(--ol-ls-heading)'
  },
  subsection: {
    fontSize: 'var(--ol-size-subsection)',
    lineHeight: 'var(--ol-lh-section)',
    letterSpacing: 'var(--ol-ls-section)'
  }
};
function SlideHeader({
  eyebrow,
  title,
  aside,
  tone = 'light',
  size = 'section',
  divider = false,
  style
}) {
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--ol-space-12)',
      borderBottom: divider ? onDark ? 'var(--ol-hairline-dark)' : 'var(--ol-hairline)' : 'none',
      paddingBottom: divider ? 'var(--ol-space-6)' : 0,
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ol-space-4)'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: onDark ? 'onDark' : 'default'
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 'var(--ol-weight-black)',
      color: onDark ? 'var(--ol-text-on-dark)' : 'var(--ol-ink)',
      ...SIZES[size]
    }
  }, title)), aside ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 520,
      fontSize: 'var(--ol-size-body)',
      lineHeight: 'var(--ol-lh-body)',
      color: onDark ? 'var(--ol-ink-dim)' : 'var(--ol-ink-soft)'
    }
  }, aside) : null);
}
Object.assign(__ds_scope, { SlideHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/SlideHeader.jsx", error: String((e && e.message) || e) }); }

// components/foundations/StatusDot.jsx
try { (() => {
const STATUS = {
  ok: {
    color: 'var(--ol-status-ok)',
    label: 'No prazo'
  },
  warn: {
    color: 'var(--ol-status-warn)',
    label: 'Atenção'
  },
  risk: {
    color: 'var(--ol-status-risk)',
    label: 'Risco'
  }
};
function StatusDot({
  status = 'ok',
  label,
  size = 14,
  showLabel = true,
  style
}) {
  const s = STATUS[status] || STATUS.ok;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--ol-space-3)',
      fontFamily: 'var(--ol-font-sans)',
      fontSize: 'var(--ol-size-body)',
      color: 'inherit',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flex: 'none',
      borderRadius: 'var(--ol-radius-round)',
      background: s.color
    }
  }), showLabel ? label ?? s.label : null);
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/foundations/Tag.jsx
try { (() => {
const TONES = {
  mist: {
    background: 'var(--ol-mist)',
    color: 'var(--ol-green-deep)'
  },
  sand: {
    background: 'var(--ol-sand)',
    color: 'var(--ol-ink-soft)'
  },
  deep: {
    background: 'var(--ol-green-deep)',
    color: 'var(--ol-text-on-strong)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--ol-ink-soft)',
    boxShadow: 'inset 0 0 0 1px var(--ol-line)'
  }
};
function Tag({
  children,
  tone = 'mist',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--ol-space-2)',
      padding: '10px 20px',
      borderRadius: 'var(--ol-radius-pill)',
      fontFamily: 'var(--ol-font-sans)',
      fontSize: 'var(--ol-size-body)',
      fontWeight: 'var(--ol-weight-semibold)',
      lineHeight: 1.2,
      ...TONES[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/Tag.jsx", error: String((e && e.message) || e) }); }

// components/media/BrowserFrame.jsx
try { (() => {
function BrowserFrame({
  url = 'painel.cliente.com.br',
  src,
  placeholder = 'Arraste a screenshot ou o GIF do protótipo',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--ol-radius-lg)',
      overflow: 'hidden',
      background: 'var(--ol-paper)',
      border: 'var(--ol-hairline)',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      minWidth: 0,
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      height: 56,
      background: 'var(--ol-ivory)',
      borderBottom: 'var(--ol-hairline)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 'var(--ol-radius-round)',
      background: 'var(--ol-line)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 'var(--ol-radius-round)',
      background: 'var(--ol-line)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 'var(--ol-radius-round)',
      background: 'var(--ol-line)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 20,
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, url)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      minWidth: 0,
      position: 'relative',
      background: 'var(--ol-sand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, children || (src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, placeholder))));
}
Object.assign(__ds_scope, { BrowserFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/BrowserFrame.jsx", error: String((e && e.message) || e) }); }

// components/media/MediaFrame.jsx
try { (() => {
function MediaFrame({
  src,
  alt = '',
  caption,
  placeholder = 'Arraste imagem ou GIF',
  rounded = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ol-space-4)',
      minHeight: 0,
      minWidth: 0,
      fontFamily: 'var(--ol-font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      minWidth: 0,
      borderRadius: rounded ? 'var(--ol-radius)' : 0,
      overflow: 'hidden',
      background: 'var(--ol-sand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)',
      padding: 'var(--ol-space-5)',
      textAlign: 'center'
    }
  }, placeholder)), caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { MediaFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/MediaFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/slides/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* ═══ THIS PROJECT USES DESIGN COMPONENTS (.dc.html) ═══
 * Reference this stage from your <x-dc> template as an import — NEVER as a
 * raw <deck-stage> tag plus a <script src> (that hides the whole deck until
 * the stream finishes):
 *
 *   <x-import component-from-global-scope="deck-stage" from="./deck-stage.js"
 *             width="1920" height="1080" hint-size="100%,100%">
 *     <section data-label="Title" style="...">…</section>
 *     <section data-label="Agenda" style="...">…</section>
 *   </x-import>
 *
 * Slides are inline-styled <section> siblings; do not add a stylesheet or a
 * deck-stage:not(:defined) rule. The plain-HTML "Usage" block in the comment
 * below does NOT apply to .dc.html templates.
 */
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→ and ↑/↓, PgUp/PgDn, Space, Home/End,
 *      number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on
 *      idle; hovering or focusing its controls pins it visible until the
 *      pointer/focus leaves. While presenting it is pointer-summoned only:
 *      mouse movement (or hover/focus) shows it, slide changes never do.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate — the clicked slide becomes the
 *      selected (highlighted) slide; shift-click selects a range and
 *      cmd/ctrl-click toggles slides in and out of the selection
 *      (Escape collapses it back to the current slide); ↑/↓ with a
 *      thumbnail focused to step between slides; Delete/Backspace with a
 *      thumbnail focused to delete the selection (one confirm dialog,
 *      one undoable operation); drag to reorder (dragging collapses a
 *      multi-selection); right-click for
 *      Skip / Move up / Move down / Duplicate / Delete — over a
 *      multi-selection the menu offers "Delete N slides". Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      They also carry no rail number and are excluded from the overlay's
 *      slide count: the remaining slides are numbered contiguously
 *      (Keynote-style), and a skipped CURRENT slide (reachable by rail
 *      click or deep link, never by prev/next) shows '–' as its position.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *  (h) typographic defaults — a zero-specificity stylesheet injected into
 *      the document gives headings `text-wrap: balance` and body text
 *      (p, li, blockquote, figcaption) `text-wrap: pretty`, so slides
 *      avoid widowed/orphaned words by default. Any text-wrap declaration
 *      you author on those elements wins over these defaults.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
      /* Slide edge on the black stage. Dark decks override the canvas
       * fill toward the stage's own black, leaving nothing to mark where
       * the slide ends — the faint white ring keeps the boundary legible
       * there while disappearing into the white of light decks. A
       * box-shadow, not outline/border: it follows any canvas rounding
       * and adds no layout size. */
      box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.12);
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-selected] .num { color: #fff; }
    .thumb[data-selected] .frame {
      outline-color: rgba(217,119,87,0.65);
      box-shadow: 0 0 0 4px rgba(217,119,87,0.18);
    }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame {
      outline-color: #D97757;
      box-shadow: 0 0 0 4px rgba(217,119,87,0.25);
    }
    /* While dragging, the thumb itself is the drag visual (the native drag
       image is suppressed in dragstart so the snapshot can't wander off the
       rail horizontally): elevate it rather than dim it, and let hit-testing
       ignore it so dragover reaches the sibling thumb under the pointer
       instead of the moving element itself. */
    .thumb[data-dragging] { opacity: 0.9; z-index: 30; pointer-events: none; }
    .thumb[data-dragging] .frame {
      outline-color: rgba(255,255,255,0.5);
      box-shadow: 0 6px 24px rgba(0,0,0,0.5);
    }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that _syncPrintPageRule appends
       to the document (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        /* Size containment: slotted content that overflows the design box
         * (an image-slot's aspect-ratio-derived width, say) must not count
         * toward Chromium's print document width — without this, an
         * abs-positioned child past the page edge shrinks the whole PDF
         * to fit (~75%). Containment is safe here because the definite
         * width/height above size the slide regardless of content.
         * (Absorbed from PR #2619 with its owner's agreement.) */
        contain: size !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      // Explicit multi-selection (slide elements). Empty means the
      // selection is implicitly the current slide, so Delete always has
      // a well-defined target while the rail has focus.
      this._selected = new Set();
      this._selAnchor = null;
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      // Overlay pinning: while the pointer is over the controls toolbar or
      // a control has keyboard focus, the idle-hide timeout must not
      // dismiss it (a pointer parked ON the controls doesn't generate
      // mousemove, so without the pin the toolbar vanishes under the
      // user's cursor after OVERLAY_HIDE_MS). Read by _flashOverlay's
      // hide timeout; cleared by mouseleave/focusout, which resume the
      // normal idle fade.
      this._overlayHover = false;
      this._overlayFocus = false;
      // Capability marker for the host's injected guest bundle. Copies
      // WITHOUT _navArrowsUpDown are frozen per-project builds that
      // predate native ArrowUp/ArrowDown slide nav — the bundle translates
      // Up/Down to Right/Left for those (installDeckArrowKeyTranslator in
      // apps/web/src/guest/edit-mode.ts) and must stand down here or every
      // press would advance twice. A marker, not a version number, so a
      // future capability can add its own independent probe.
      this._navArrowsUpDown = true;
      // Same contract for rail Delete/Backspace: copies WITHOUT
      // _railDeleteKey predate the thumbs' own Delete/Backspace binding,
      // and the bundle opens the delete confirm for them
      // (installDeckRailDeleteFallback in apps/web/src/guest/edit-mode.ts).
      // Current builds consume the key at the thumb (stopPropagation), so
      // the marker is belt-and-braces — it keeps the fallback standing
      // down even if a future build lets the key bubble past the thumb.
      this._railDeleteKey = true;
      // Same contract for skip-aware numbering: copies WITHOUT
      // _railSkipNumbers number every thumb 1..N and count skipped slides
      // in the overlay total — the bundle rewrites both for those
      // (installDeckSkipNumberingFallback in apps/web/src/guest/edit-mode.ts).
      // Here the component renumbers natively, so the fallback stands down.
      this._railSkipNumbers = true;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      this._ensurePrintSizingMeta();
      this._ensureTextWrapDefaults();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        this._syncPrintPageRule();
        // Self-heal: a departed doc-page may have removed the page-global
        // print-sizing meta this deck deferred to at connect time.
        this._ensurePrintSizingMeta();
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // Unconditional cap — rAF can be suspended in a hidden iframe, which
      // would strand the one inside the rAF callback.
      setTimeout(reveal, 2000);
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (three per view — cur/prev/next).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast. Also ignore data-dc-tpl /
      // data-om-slide-id — host-reserved bookkeeping stamps (the host's
      // ATTR_RESERVED guard bounds them the same way) that structural
      // edits renumber/re-mint on slides whose content didn't change;
      // re-cloning on that churn is what made a slide move flash its
      // thumbnails.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-(validate|slide-id)$|dc-tpl$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            this._renumberRail();
            this._syncCount();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      // Stylesheets that finish loading AFTER the snapshot below never
      // reach the thumbs on their own: a still-pending <link> contributes
      // nothing to document.styleSheets, and nothing re-reads it on load,
      // so the live slides restyle while every clone keeps the stale
      // sheet. dc-runtime's helmet mounts design-system <link>s at render
      // time, so a deck-stage that connects first snapshots before that
      // CSS exists. Funnel late arrivals into the same debounced resync:
      // hook load/error on every current <link>, and watch <head> for
      // links and styles mounted or rewritten later. Deliberately not
      // rAF- or fonts.ready-driven — rAF is throttled/suspended in hidden
      // iframes (thumbnail/presenter contexts), and a font-file load
      // doesn't change cssRules, so it needs no resync.
      this._hookedLinks = [];
      this._hookSheetLoad = el => {
        if (!el.matches || !el.matches('link[rel~="stylesheet" i]')) return;
        if (this._hookedLinks.indexOf(el) !== -1) return;
        this._hookedLinks.push(el);
        el.addEventListener('load', this._onTweakChange);
        el.addEventListener('error', this._onTweakChange);
      };
      document.querySelectorAll('link[rel~="stylesheet" i]').forEach(this._hookSheetLoad);
      this._headObserver = new MutationObserver(records => {
        let resync = false;
        for (const r of records) {
          if (r.type === 'characterData') {
            // Only <style> text is CSS — a ticking <title> shouldn't
            // wake the resync forever.
            const p = r.target.parentNode;
            if (p && p.nodeName === 'STYLE') resync = true;
            continue;
          }
          if (r.type === 'attributes') {
            // A late rel/href rewrite turns an inert <link> into a
            // stylesheet (hook it; its load fires even on cache hits);
            // a media/disabled flip changes effective rules with no
            // event. Resync only if this link is or ever was a
            // stylesheet — favicon/preload/canonical href churn isn't
            // a resync.
            if (r.target.nodeName === 'LINK') {
              this._hookSheetLoad(r.target);
              if (this._hookedLinks.indexOf(r.target) !== -1) resync = true;
            } else if (r.target.nodeName === 'STYLE') resync = true;
            continue;
          }
          // childList: only links and styles carry CSS. A new <link> has
          // no rules until it loads — hook it rather than resync now; a
          // <style> mount/unmount or text-node swap takes effect
          // immediately. _freezeStyle (our beforeprint helper) is skipped
          // on add only — no removal-side guard: _onAfterPrint nulls the
          // ref before the observer fires, so that check would be dead;
          // the one debounced no-op resync per print is harmless.
          if (r.target.nodeName === 'STYLE') resync = true;
          for (const n of r.addedNodes) {
            if (n.nodeName === 'LINK') this._hookSheetLoad(n);else if (n.nodeName === 'STYLE' && n !== this._freezeStyle) resync = true;
          }
          for (const n of r.removedNodes) {
            if (n.nodeName === 'LINK') {
              const hi = this._hookedLinks.indexOf(n);
              if (hi !== -1) {
                this._hookedLinks.splice(hi, 1);
                n.removeEventListener('load', this._onTweakChange);
                n.removeEventListener('error', this._onTweakChange);
                resync = true;
              }
            } else if (n.nodeName === 'STYLE') resync = true;
          }
        }
        if (resync) this._onTweakChange();
      });
      this._headObserver.observe(document.head, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['rel', 'href', 'media', 'disabled']
      });
      this._snapshotAuthorCss();
      // Re-snapshot once any still-loading stylesheet settles — it throws on
      // .cssRules above and silently contributes '' → unstyled thumbs on a
      // cold mount. {once:true}; routed through the debounced handler.
      document.querySelectorAll('link[rel~="stylesheet"]').forEach(l => {
        try {
          if (l.sheet && l.sheet.cssRules) return;
        } catch (e) {}
        l.addEventListener('load', this._onTweakChange, {
          once: true
        });
        l.addEventListener('error', this._onTweakChange, {
          once: true
        });
      });
      if (document.fonts) document.fonts.ready.then(this._onTweakChange, this._onTweakChange);
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      // A disconnect mid-drag never gets a dragend, so the document-level
      // drag tracker must be torn down here like every other global hook.
      this._stopDragTrack();
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._headObserver) this._headObserver.disconnect();
      (this._hookedLinks || []).forEach(l => {
        l.removeEventListener('load', this._onTweakChange);
        l.removeEventListener('error', this._onTweakChange);
      });
      this._hookedLinks = [];
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
      // Drop the text-wrap defaults when the last deck-stage leaves, so a
      // deleted deck's typography can't restyle whatever replaces it.
      // (#deck-stage-print-page keeps its existing keep-forever lifecycle.)
      if (!document.querySelector('deck-stage')) {
        const tw = document.getElementById('deck-stage-text-wrap');
        if (tw) tw.remove();
        const ps = document.getElementById('deck-stage-print-sizing');
        if (ps) ps.remove();
      }
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Pin the controls while the user is interacting with them —
      // hovering, or keyboard focus on a control. The hidden overlay is
      // pointer-events:none, so these only ever engage while it's already
      // visible. 'pointer' source: these are user-interaction paths, so
      // they may show/refresh the overlay even while presenting (see
      // _flashOverlay).
      overlay.addEventListener('mouseenter', () => {
        this._overlayHover = true;
        this._flashOverlay('pointer');
      });
      overlay.addEventListener('mouseleave', () => {
        const hadPin = this._overlayHover;
        this._overlayHover = false;
        // Resume the idle fade — never summon. Without the guard, a
        // mouseleave that fires because the overlay was force-hidden
        // (presenting entry flips it to pointer-events:none under the
        // cursor) would pop the controls right back up.
        if (hadPin || overlay.hasAttribute('data-visible')) this._flashOverlay('pointer');
      });
      overlay.addEventListener('focusin', e => {
        // Keyboard-origin focus only (:focus-visible): a mouse click also
        // focuses the clicked button, and pinning on that would hold the
        // controls open indefinitely after a single click — the hover pin
        // already covers the mouse case. Engines without :focus-visible
        // fall back to pinning on any focus (the safe direction).
        var kb = true;
        try {
          var t = e.target;
          kb = !(t && t.matches && !t.matches(':focus-visible'));
        } catch (err) {
          kb = true;
        }
        if (!kb) return;
        this._overlayFocus = true;
        this._flashOverlay('pointer');
      });
      overlay.addEventListener('focusout', e => {
        // Only unpin when focus truly left the toolbar — tabbing between
        // its buttons stays pinned. relatedTarget is null when focus
        // leaves the document entirely; treat that as leaving.
        if (e.relatedTarget && overlay.contains(e.relatedTarget)) return;
        const hadPin = this._overlayFocus;
        this._overlayFocus = false;
        // Resume-the-fade only (see mouseleave): a click-focused button
        // losing focus to a later stage click must not summon the
        // controls mid-presentation.
        if (hadPin || overlay.hasAttribute('data-visible')) this._flashOverlay('pointer');
      });

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        const list = this._menuIndices;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(list && list.length ? list : [i]);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) {
          this._closeConfirm();
          this._focusCurrentThumb();
        }
      });
      confirm.querySelector('.cancel').addEventListener('click', () => {
        this._closeConfirm();
        this._focusCurrentThumb();
      });
      confirm.querySelector('.danger').addEventListener('click', () => {
        // Re-resolve at click time — the elements are the user's actual
        // selection; their indices may have shifted since confirm-open.
        const list = (this._confirmEls || []).map(el => this._slides.indexOf(el)).filter(i => i >= 0);
        this._closeConfirm();
        this._deleteSlides(list);
        this._focusCurrentThumb();
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. (Re-)append so any author @page landing later in
     *  source order can't reintroduce a margin and push each slide onto
     *  two sheets; called again from beforeprint. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      (document.body || document.head).appendChild(tag);
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Announces the deck's print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] content "default-landscape" — a
     *  deck prints one slide per page on the user's paper size, landscape.
     *  The export path probes the meta to decide what true paper size to
     *  inject at print time (the @page px rule above stays as the
     *  standalone-print fallback; an injected later rule overrides it).
     *  Never overrides an authored meta or another component's; removed
     *  when the last deck-stage leaves. data-omelette-injected keeps it
     *  out of serialized source. */
    _ensurePrintSizingMeta() {
      if (document.querySelector('meta[name="omelette-print-sizing"]')) return;
      const tag = document.createElement('meta');
      tag.id = 'deck-stage-print-sizing';
      tag.name = 'omelette-print-sizing';
      tag.content = 'default-landscape';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** Typographic defaults for slide text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins. Lives in the document,
     *  not the shadow root, for two reasons: document rules reach the
     *  slotted (light DOM) slides, and _snapshotAuthorCss copies document
     *  stylesheets into each thumbnail's shadow root, so the thumbs wrap
     *  the same way — a deck-stage-scoped selector would match nothing
     *  there. data-omelette-injected marks the tag for the host editor
     *  to strip at serialize, so it is never written back as authored
     *  source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('deck-stage-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'deck-stage-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
      // The deck just changed under any open rail surface — an open
      // confirm or menu is a question about the OLD deck (its labels and
      // counts may now lie), so close them rather than let a stale
      // answer fire. The element-held selection re-resolves, but the
      // user should re-read what they're deleting.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        this._closeConfirm();
        // The dialog held focus (danger button); hand it back to the rail.
        this._focusCurrentThumb(true);
      }
      if (this._menu && this._menu.hasAttribute('data-open')) this._closeMenu();
      // Editor-mode deletes rebuild the rail through here; a confirmed
      // delete that started from the keyboard still owes focus to the
      // (new) current thumb.
      if (this._pendingRailRefocus) this._focusCurrentThumb(true);
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      // Selection is element-keyed: drop entries whose slide is gone
      // (deleted, or replaced wholesale by a host re-render).
      if (this._selected && this._selected.size) {
        this._selected.forEach(s => {
          if (!this._slideSet.has(s)) this._selected.delete(s);
        });
      }
      if (this._selAnchor && !this._slideSet.has(this._selAnchor)) this._selAnchor = null;
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._syncCount();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      this._syncCount();
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay(source) {
      // Host posts __omelette_presenting while in fullscreen/tab
      // presentation mode. While presenting, the overlay is
      // pointer-summoned only: it appears on mouse movement and while the
      // user hovers/focuses the controls (source 'pointer'), but never
      // flashes on slide changes or nav-key presses (the default 'auto'
      // source) — a keyboard-driven advance must not blink chrome at the
      // audience. Outside presenting, both sources flash as before.
      if (!this._overlay) return;
      if (this._presenting && source !== 'pointer') return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        // Pinned by hover or focus on the controls — keep them up. The
        // matching mouseleave/focusout re-flashes, so the idle fade
        // resumes from that moment.
        if (this._overlayHover || this._overlayFocus) return;
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle. 'pointer'
      // source: mouse movement summons the controls even while presenting.
      this._flashOverlay('pointer');
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        // Unchanged value → idempotent re-delivery (the guest bundle
        // re-posts when a deck mounts mid-presentation, and host + bundle
        // can both deliver at entry). Skip the resets: re-running the
        // entry work on every delivery would dismiss the pointer-summoned
        // overlay under a hovering cursor and close menus on every slide
        // change. Mirrors the preview_mode branch's unchanged-value guard
        // below.
        if (d.__omelette_presenting !== !!this._presenting) {
          this._presenting = d.__omelette_presenting;
          // A presenting transition invalidates interaction pins: carried
          // across the flip, a stale pin would hold the first summoned
          // overlay open with no pointer anywhere near it. Hide on BOTH
          // transitions: entry cleans the audience's screen, and on exit a
          // pin-skipped hide timeout may have left data-visible set with
          // no timer armed — without this, the footer would linger in the
          // editor until the next mousemove. The next interaction
          // re-summons it either way.
          this._overlayHover = false;
          this._overlayFocus = false;
          if (this._overlay) {
            this._overlay.removeAttribute('data-visible');
            if (this._hideTimer) clearTimeout(this._hideTimer);
          }
          this._syncRailHidden();
          this._closeMenu();
          this._closeConfirm();
          this._fit();
          this._scaleThumbs();
        }
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
        // A refused op never re-renders, so slotchange won't restore the
        // keyboard flow's focus — do it here. (Applied ops refocus in
        // _onSlotChange, after the rail has been rebuilt.)
        if (d.applied === false && this._pendingRailRefocus) {
          this._focusCurrentThumb(true);
        }
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing. composedPath()[0], not e.target: a
      // window-level keydown retargets e.target to the shadow host, which
      // would miss an <input> or contenteditable inside a web component on
      // a slide (same reason _onTap uses composedPath).
      const t = e.composedPath ? e.composedPath()[0] : e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          this._focusCurrentThumb();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.key === 'Escape' && this._selected.size) {
        // Collapse the multi-selection back to the current slide (the
        // implicit selection), not to nothing.
        this._clearSelection();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'ArrowDown' && !e.defaultPrevented) {
        // ↓/↑ page slides like →/← (Keynote/PowerPoint parity). Window
        // level only: rail thumbs keep their own ↑/↓ walk (their handler
        // stops propagation before this one), and the typing guard above
        // already covers inputs and contenteditable slide content.
        // Deliberate tradeoff: like Space/PageDown before them, these are
        // scroll keys — slide content that wants keyboard scrolling claims
        // them with preventDefault, which this branch honors (checked here
        // and not for the long-standing keys above, so ←/→/Space behavior
        // is unchanged and ↑/↓ behave identically on frozen copies, whose
        // translator in the guest bundle applies the same guard).
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowUp' && !e.defaultPrevented) {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      // User-initiated navigation collapses a multi-selection down to
      // the (implicit) current slide, like Keynote's arrow keys. 'click'
      // handles its own selection; programmatic reasons leave it alone.
      if (reason === 'keyboard' || reason === 'tap') this._clearSelection();
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
      this._thumbs = next;
      this._renumberRail();
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          // The live-dragged thumb is positioned by the drag tracker; a
          // FLIP transform+transition here would clobber it mid-drag.
          if (thumb === this._dragThumb) return;
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', e => {
        const i = idx();
        const slide = this._slides[i];
        // WebKit doesn't focus a plain element on click — focus
        // explicitly so Delete/Backspace works right after selecting a
        // slide by mouse. preventScroll: _syncRail owns the rail's
        // scroll position.
        thumb.focus({
          preventScroll: true
        });
        if (e.shiftKey || e.metaKey || e.ctrlKey) {
          // Multi-select gestures adjust the selection without
          // navigating (Keynote/Figma convention).
          e.preventDefault();
          if (e.shiftKey) {
            // Range from the anchor (last plain/cmd-clicked slide;
            // falls back to the current slide) to here, replacing any
            // previous range.
            let a = this._selAnchor ? this._slides.indexOf(this._selAnchor) : -1;
            if (a < 0) {
              a = this._index;
              this._selAnchor = this._slides[a] || null;
            }
            this._selected.clear();
            for (let j = Math.min(a, i); j <= Math.max(a, i); j++) {
              this._selected.add(this._slides[j]);
            }
          } else if (slide) {
            // Toggle. An empty explicit selection implicitly holds the
            // current slide — materialize it first so cmd-clicking a
            // second slide selects both.
            if (!this._selected.size && i !== this._index && this._slides[this._index]) {
              this._selected.add(this._slides[this._index]);
            }
            if (this._selected.has(slide)) this._selected.delete(slide);else {
              this._selected.add(slide);
              this._selAnchor = slide;
            }
          }
          this._syncSelection();
          return;
        }
        this._clearSelection();
        this._selAnchor = slide || null;
        this._go(i, 'click');
      });
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        // Delete/Backspace with the rail focused deletes this thumb's
        // slide through the same confirm dialog as the menu item.
        // Listening on the thumb (never window-level) is what keeps
        // typing in the notes panel / slide inputs from ever landing
        // here; the target check is belt-and-braces for anything
        // focusable that ends up inside a thumb.
        if ((e.key === 'Delete' || e.key === 'Backspace') && !e.metaKey && !e.ctrlKey && !e.altKey) {
          const t = e.target;
          if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
          e.preventDefault();
          e.stopPropagation();
          // Same refusals as the menu item: never every slide, never
          // while a prior structural op is waiting on its ack. The
          // whole-deck refusal is announced (the menu greys its item
          // out; a silently dead key reads as breakage). The rail-lock
          // refusal stays silent: it lasts one ack round-trip and
          // matches the existing single-delete behavior.
          if (this._railLock) return;
          // Explicit selection wins; otherwise the focused thumb (which
          // plain click and ↑/↓ keep equal to the current slide).
          const sel = this._selected.size ? this._selectionIndices() : [idx()];
          if (sel.length >= this._slides.length) {
            this._showNotice(sel.length === 1 ? 'The last slide can’t be deleted.' : 'At least one slide has to stay — the whole deck can’t be deleted.');
            return;
          }
          this._openConfirm(sel);
          return;
        }
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        // v1: dragging moves ONE slide, so a multi-selection would lie
        // about what's about to move — collapse it. (Group drag would
        // instead keep it and emit a batched move.)
        this._clearSelection();
        this._dragFrom = idx();
        // Deferred to the next frame: the [data-dragging] rule sets
        // pointer-events:none on the drag SOURCE, and applying that
        // synchronously inside dragstart makes Chromium (and WebKit) cancel
        // the drag — dragstart then an immediate dragend, no dragover or
        // drop, so thumbnails could not be reordered by dragging at all.
        // One frame is invisible and lands before the first dragover needs
        // the source to be hit-test-transparent. Guarded twice so the
        // attribute can never strand on a thumb that is no longer being
        // dragged (pointer-events:none would leave it unclickable for the
        // session): the pending frame is cancelled in dragend
        // (_cancelDragAttr), and the callback itself re-checks that THIS
        // thumb is still the live drag source (a new drag on another thumb
        // re-points the drag state). Deliberately NOT cancelled in
        // _stopDragTrack — _startDragTrack calls it at the start of every
        // drag, which would kill the mark this dragstart just scheduled
        // (see _cancelDragAttr).
        this._dragAttrRaf = requestAnimationFrame(() => {
          this._dragAttrRaf = null;
          if (this._dragFrom != null && this._dragThumb === thumb) {
            thumb.setAttribute('data-dragging', '');
          }
        });
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
        // Constrain the drag visual to the rail's vertical axis. The
        // browser's default drag image is a free-floating snapshot that
        // follows the OS cursor in BOTH axes and the DnD API offers no way
        // to constrain it — so swap it for a transparent stand-in and move
        // the thumb itself along Y instead (_startDragTrack). The drop
        // logic below always read only clientY; this makes the visual
        // match it.
        try {
          e.dataTransfer.setDragImage(this._dragBlank(), 0, 0);
        } catch (err) {}
        this._startDragTrack(thumb, e.clientY);
      });
      thumb.addEventListener('dragend', () => {
        this._cancelDragAttr();
        thumb.removeAttribute('data-dragging');
        this._stopDragTrack();
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      // The clone participates in the document's flat tree, so the
      // templates' position-based CSS page counters (.slide
      // { counter-increment: page }) would count every materialized
      // thumb before the real slides — folios print offset by the
      // thumb count (slide 2 reading "7" on a five-slide deck).
      // Neutralize the counter on the clone and drop its folio pill:
      // a thumbnail's own page number is unreadable at thumb scale
      // anyway, and the real slides' numbers stay truthful.
      clone.style.counterIncrement = 'none';
      clone.querySelectorAll('.page-foot').forEach(pf => pf.remove());
      // Canvas bitmaps don't clone — swap each cloned canvas for an <img>
      // of the live pixels. Best-effort: tainted canvases throw (left
      // as-is); zero-size are skipped; WebGL without preserveDrawingBuffer
      // reads back blank and the thumb gets a blank img (same as before).
      const liveCanvases = entry.slide.querySelectorAll('canvas');
      const cloneCanvases = clone.querySelectorAll('canvas');
      cloneCanvases.forEach((cv, i) => {
        const live = liveCanvases[i];
        if (!live || !live.width || !live.height) return;
        try {
          const img = document.createElement('img');
          img.src = live.toDataURL();
          img.alt = '';
          img.style.cssText = cv.style.cssText;
          img.className = cv.className;
          img.width = live.width;
          img.height = live.height;
          // Author CSS that sized the <canvas> via tag selector won't match
          // the <img> — pin the live canvas's laid-out box on the snapshot.
          if (live.clientWidth) {
            img.style.width = live.clientWidth + 'px';
            img.style.height = live.clientHeight + 'px';
          }
          cv.replaceWith(img);
        } catch (e) {}
      });
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      // Parity with _inertify: transient top-layer UI never belongs in a
      // static thumb.
      clone.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes (_neuter) so a component-heavy deck doesn't run
      // N copies of each component's mount logic in the rail. Children
      // are preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content, and a shadow tree cloned along
      // via attachShadow({clonable:true}) (e.g. <image-slot>) moves onto
      // the box so the thumb shows the component's rendered content. The
      // querySelectorAll NodeList is static, so nested custom elements in
      // the moved subtree are still visited on later iterations.
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = this._neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
      // Strip ids only now: a defined custom element upgrades synchronously
      // during cloneNode and re-renders on attribute callbacks, so removing
      // 'id' any earlier resets components (e.g. <image-slot> falls back to
      // its author src). Post-neuter, only inert boxes and plain elements
      // remain, where the strip is just the usual duplicate-id hygiene.
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      // Clones are display-only: inert removes anything focusable inside
      // them from the tab order, so the rail's Delete/Backspace handler
      // can never see a (retargeted) key press from cloned content.
      host.inert = true;
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Replace a cloned custom element with an inert box (see the comment
     *  in _materialize). A shadow tree cloned along via {clonable:true}
     *  moves onto the box, so the thumb shows the component's real content
     *  with zero component logic; :host rules in the moved <style> match
     *  the box, and the preserved data-* attrs keep :host([data-…])
     *  selectors working. */
    _neuter(el) {
      // Adopt the shadow only when the cloned root carries renderable
      // content. A constructor-attach / connectedCallback-render component
      // clones into an empty (or style-only) slotless root — adopting that
      // would hide the light children the box is about to receive and drop
      // the placeholder chrome. Such components fall back to the plain box.
      let sr = el.shadowRoot;
      if (sr) {
        let renderable = false;
        for (let n = sr.firstElementChild; n; n = n.nextElementSibling) {
          const t = n.tagName;
          if (t !== 'STYLE' && t !== 'LINK') {
            renderable = true;
            break;
          }
        }
        if (!renderable) sr = null;
      }
      const box = document.createElement('div');
      box.style.cssText = (el.getAttribute('style') || '') + (sr ? '' : ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);');
      box.className = el.className;
      // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
      // descendant selectors still match the neutered root — but not
      // pointer-interaction transients (a mid-reframe/mid-drag re-clone
      // would render the interaction chrome statically in the thumb).
      for (const a of el.attributes) {
        const n = a.name;
        if (n === 'data-reframe' || n === 'data-panning' || n === 'data-over') continue;
        if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
          box.setAttribute(n, a.value);
        }
      }
      while (el.firstChild) box.appendChild(el.firstChild);
      if (sr) this._adoptShadow(box, sr);
      return box;
    }

    /** Move a cloned shadow tree onto a neutered thumbnail box: attach an
     *  open root on the box, carry adoptedStyleSheets, move the children,
     *  then make the content inert. */
    _adoptShadow(box, sr) {
      let root;
      try {
        root = box.attachShadow({
          mode: 'open'
        });
      } catch (e) {
        return;
      }
      // Engine-cloned shadow roots never carry adoptedStyleSheets, but a
      // defined component's clone is upgrade-rebuilt (constructor runs
      // during cloneNode), so sheets it adopts there are present and
      // shared by reference — carry them.
      if (sr.adoptedStyleSheets && sr.adoptedStyleSheets.length) {
        try {
          root.adoptedStyleSheets = Array.prototype.slice.call(sr.adoptedStyleSheets);
        } catch (e) {}
      }
      // Clone rather than move: moving preserves listeners an upgraded
      // clone's constructor attached inside its shadow; cloning sheds
      // them, keeping thumbs free of component logic categorically.
      for (let n = sr.firstChild; n; n = n.nextSibling) {
        root.appendChild(n.cloneNode(true));
      }
      this._inertify(root);
    }

    /** Strip anything executable from copied shadow content and apply the
     *  same custom-element/media/img policy as the light-DOM clone.
     *  (Canvases inside copied shadow content stay blank — there is no
     *  live↔clone pairing across shadow boundaries to snapshot from.) */
    _inertify(root) {
      root.querySelectorAll('script').forEach(s => s.remove());
      // Transient top-layer UI can never belong in a static thumb. (A
      // cloned [popover] is display:none anyway — open state doesn't
      // clone — this just makes it categorical.)
      root.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      // Same heavy-media policy as the light-DOM clone above.
      root.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      root.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      root.querySelectorAll('*').forEach(el => {
        for (let i = el.attributes.length - 1; i >= 0; i--) {
          if (/^on/i.test(el.attributes[i].name)) {
            el.removeAttribute(el.attributes[i].name);
          }
        }
      });
      root.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Nested custom elements inside copied shadow content would upgrade
      // on append — same treatment as the light DOM. querySelectorAll is
      // static, so boxes created mid-walk don't re-enter this loop.
      root.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }

    /** 1×1 transparent stand-in for setDragImage. Kept attached (offscreen
     *  in the shadow root) because some engines ignore a drag image that
     *  isn't in a rendered tree. Created lazily, reused for every drag. */
    _dragBlank() {
      if (!this._dragBlankEl) {
        const c = document.createElement('canvas');
        c.width = 1;
        c.height = 1;
        c.style.cssText = 'position:fixed;left:-9999px;top:0;width:1px;height:1px;';
        this._root.appendChild(c);
        this._dragBlankEl = c;
      }
      return this._dragBlankEl;
    }

    /** Vertical-only drag tracking: translate the dragged thumb along Y to
     *  follow the pointer, clamped to the rail, ignoring X entirely. A
     *  document-level capture listener is used because native dragover
     *  fires wherever the pointer is — so the thumb keeps tracking even
     *  while the pointer wanders over the stage — and it is removed the
     *  moment the drag ends. getBoundingClientRect already reflects the
     *  current transform, so the layout position is recovered by
     *  subtracting the translation applied so far (rail auto-scroll moves
     *  the layout position mid-drag; see the rail dragover handler). */
    _startDragTrack(thumb, startY) {
      // A lost dragend (the dragged thumb removed mid-drag by a remote
      // edit's re-render — browsers fire no dragend on a disconnected
      // source) would otherwise leave the previous listener installed
      // forever once this overwrite lands.
      this._stopDragTrack();
      this._dragThumb = thumb;
      // The FLIP reorder animation drives transform through a transition;
      // the live drag must not inherit one, or the thumb rubber-bands.
      // Killed BEFORE the grab-offset read: mid-FLIP the rect includes the
      // interpolated transform, which would bake a constant offset into
      // the whole drag.
      thumb.style.transition = 'none';
      this._dragGrab = startY - thumb.getBoundingClientRect().top;
      this._dragTy = 0;
      this._onDragTrack = e => {
        const t = this._dragThumb;
        if (!t) return;
        const rail = this._rail.getBoundingClientRect();
        const r = t.getBoundingClientRect();
        // A transformed ancestor (author wraps the deck in a CSS scale;
        // canvas-mode pan/zoom) scales viewport deltas: translateY(N)
        // moves the rect by s·N. Measure s from the thumb itself (rect is
        // scaled, offsetHeight is layout px) so the feedback loop stays
        // exact instead of oscillating at s ≥ 2. offsetHeight is 0 only
        // when unrendered — nothing to track then, treat as unscaled.
        const s = t.offsetHeight ? r.height / t.offsetHeight : 1;
        const layoutTop = r.top - s * this._dragTy;
        let want = e.clientY - this._dragGrab;
        want = Math.max(rail.top, Math.min(want, rail.bottom - r.height));
        this._dragTy = (want - layoutTop) / s;
        t.style.transform = 'translateY(' + this._dragTy + 'px)';
      };
      document.addEventListener('dragover', this._onDragTrack, true);
    }

    /** Cancel the thumb's deferred data-dragging mark if its frame has not
     *  fired yet — see the dragstart deferral. Called from dragend only:
     *  _stopDragTrack is the wrong home for it, because _startDragTrack
     *  defensively calls _stopDragTrack at the START of every drag (its
     *  lost-dragend reset), so a cancel there kills the mark the same
     *  dragstart just scheduled. The strand that matters — pointer-
     *  events:none left on a CONNECTED thumb that is no longer being
     *  dragged — is closed two ways: dragend cancels the pending frame
     *  here, and the frame callback re-checks that THIS thumb is still the
     *  live drag source (_dragFrom and _dragThumb, both cleared/re-pointed
     *  by dragend or by a new drag). The remaining lost-dragend case — the
     *  source slide removed mid-drag, so no dragend fires — ends with that
     *  thumb discarded by the rail reconcile (thumbs are keyed by slide
     *  element and a removed slide's thumb is not reused), so a mark landing
     *  on it is on a discarded node. The risk this defer adds over the old
     *  synchronous set is therefore the narrow rAF-after-dragend window,
     *  which the dragend cancel covers. */
    _cancelDragAttr() {
      if (this._dragAttrRaf != null) {
        cancelAnimationFrame(this._dragAttrRaf);
        this._dragAttrRaf = null;
      }
    }
    _stopDragTrack() {
      if (this._onDragTrack) {
        document.removeEventListener('dragover', this._onDragTrack, true);
        this._onDragTrack = null;
      }
      const t = this._dragThumb;
      if (t) {
        t.style.transform = '';
        t.style.transition = '';
      }
      this._dragThumb = null;
      this._dragTy = 0;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      // Right-clicking a thumb OUTSIDE the selection collapses the
      // selection to that thumb (platform convention) — the menu then
      // always targets exactly what's highlighted.
      if (this._selected.size && slide && !this._selected.has(slide)) {
        this._selected.clear();
        this._selected.add(slide);
        this._selAnchor = slide;
        this._syncSelection();
      }
      const sel = this._selectionIndices();
      const bulk = sel.length > 1;
      this._menuIndices = bulk ? sel : [i];
      // Bulk mode offers only the one batched op that exists (delete);
      // the single-slide items address one index and stay hidden.
      this._menu.querySelectorAll('[data-act="skip"], [data-act="up"], [data-act="down"], [data-act="duplicate"], hr').forEach(el => {
        el.style.display = bulk ? 'none' : '';
      });
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      const del = this._menu.querySelector('[data-act="delete"]');
      del.textContent = bulk ? 'Delete ' + sel.length + ' slides' : 'Delete slide';
      del.disabled = bulk ? sel.length >= this._slides.length : this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
      this._menuIndices = null;
    }
    _openConfirm(sel) {
      if (!this._confirm) return;
      const list = Array.isArray(sel) ? sel : [sel];
      // Hold the slide ELEMENTS: the deck can re-render while the dialog
      // is open (collaborator/agent edit), and a frozen index list would
      // then address the wrong slides — a same-count reorder even passes
      // the host's witness guard. Elements re-resolve at danger-click.
      this._confirmEls = list.map(i => this._slides[i]).filter(Boolean);
      // Title uses the rail's skip-aware label, so the confirm names the
      // number the user right-clicked (a raw index would disagree with the
      // rail whenever a skipped slide precedes the target).
      const lbl = list.length === 1 ? this._slideLabel(list[0]) : '';
      this._confirm.querySelector('.title').textContent = list.length === 1 ? lbl ? 'Delete slide ' + lbl + '?' : 'Delete skipped slide?' : 'Delete ' + list.length + ' slides?';
      this._confirm.querySelector('.msg').textContent = list.length === 1 ? 'This slide will be removed from the deck.' : 'These slides will be removed from the deck.';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmEls = null;
    }

    /** Return focus to the current slide's thumb so the keyboard flow
     *  (Delete → Enter → Delete …) survives the confirm dialog closing.
     *  Without 'force', skipped while a structural op is in flight
     *  (_railLock): _index is then an optimistic post-op value that
     *  doesn't address the pre-op thumb list — _pendingRailRefocus stays
     *  armed and the ack/slotchange paths call back with force once the
     *  rail reflects the op. Skipped (and disarmed) while the rail is
     *  inert (hidden / presenting). */
    _focusCurrentThumb(force) {
      if (!force && this._railLock) return;
      this._pendingRailRefocus = false;
      // Never yank focus from content the user reached meanwhile (e.g.
      // an input inside a slide during the ack round-trip) — only
      // reclaim it from the rail's own surfaces, or from nowhere.
      const ae = this._root && this._root.activeElement;
      const ours = !ae || this._rail && this._rail.contains(ae) || this._confirm && this._confirm.contains(ae) || this._menu && this._menu.contains(ae);
      const lightAe = document.activeElement;
      const lightOk = !lightAe || lightAe === document.body || lightAe === this;
      if (!ours || !lightOk) return;
      const cur = this._thumbs && this._thumbs[this._index];
      if (cur && this._rail && !this._rail.inert) cur.thumb.focus({
        preventScroll: true
      });
    }

    /** Selection as sorted slide indices. An empty explicit selection
     *  means the current slide (the rail's implicit selection). */
    _selectionIndices() {
      const out = [];
      this._slides.forEach((s, i) => {
        if (this._selected.has(s)) out.push(i);
      });
      if (!out.length && this._slides[this._index]) out.push(this._index);
      return out;
    }
    _clearSelection() {
      // Re-anchor before the early return: a plain click followed by
      // arrow/tap navigation leaves _selected empty but the anchor
      // pointing at the old slide, and a later shift-click would range
      // from there instead of the current slide.
      this._selAnchor = null;
      if (!this._selected.size) return;
      this._selected.clear();
      this._syncSelection();
    }
    _syncSelection() {
      (this._thumbs || []).forEach(t => {
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    /** True when the page's DC runtime reports a live template stream for
     *  any component here (newer support.js bundles only — older bundles
     *  lack the signal and the HOST-side gate covers those decks). Rail
     *  mutations are refused for the duration: a mid-stream op addresses
     *  slide indices the stream is rewriting underneath the click. */
    _streamActive() {
      try {
        return !!window.__dcUpdate && typeof window.__dcStreaming === 'function' && window.__dcStreaming();
      } catch (e) {
        return false;
      }
    }

    /** Transient in-stage notice for a refused mid-stream rail op. */
    _showStreamNotice() {
      this._showNotice('Claude is still updating this deck — try again when it finishes.');
    }

    /** Transient bottom-center toast for a refused rail gesture. */
    _showNotice(text) {
      if (!this._root) return;
      let n = this._streamNotice;
      if (!n) {
        n = document.createElement('div');
        n.className = 'export-hidden';
        n.setAttribute('data-omelette-chrome', '');
        n.setAttribute('role', 'status');
        n.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);' + 'background:rgba(22,22,22,.94);color:#fff;' + 'font:500 13px/1.4 system-ui,sans-serif;padding:8px 14px;' + 'border-radius:8px;z-index:2147483646;pointer-events:none;' + 'opacity:0;transition:opacity .15s ease';
        this._root.append(n);
        this._streamNotice = n;
      }
      n.textContent = text;
      n.style.opacity = '1';
      if (this._streamNoticeTimer) clearTimeout(this._streamNoticeTimer);
      this._streamNoticeTimer = setTimeout(() => {
        n.style.opacity = '0';
      }, 2600);
    }
    _emitDcOp(op, slide, lock, newIndex) {
      // Mid-stream guard: refuse the gesture outright — no lock, no
      // optimistic index change, no emit, no self-mutation (returning
      // true short-circuits every caller). The host applies the same
      // gate for decks whose committed support.js predates the signal.
      if (this._streamActive()) {
        this._showStreamNotice();
        return true;
      }
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }

    /** Delete a set of slides (pre-op indices). One slide delegates to
     *  _deleteSlide — the plain 'remove' op — so single deletes keep
     *  working against hosts that predate 'removeMany'. A bulk delete is
     *  ONE op: one host write, one undo snapshot, and indices that all
     *  address the same pre-op deck (N acked single ops would each need
     *  a fresh witness). */
    _deleteSlides(list) {
      if (this._railLock || !list) return;
      const indices = [...new Set(list)].filter(i => this._slides[i]).sort((a, b) => a - b);
      if (!indices.length || indices.length >= this._slides.length) return;
      if (indices.length === 1) {
        this._deleteSlide(indices[0]);
        return;
      }
      // Mirrors _duplicateSlide: check the stream gate before doing any
      // work (_emitDcOp re-checks).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const els = indices.map(i => this._slides[i]);
      const del = new Set(indices);
      const cur = this._index;
      // New current index in post-op space: shift the kept slide left by
      // the deletions below it; if the current slide itself is deleted,
      // land on the nearest survivor (after, else before).
      const below = n => indices.reduce((k, x) => k + (x < n ? 1 : 0), 0);
      let ni;
      if (!del.has(cur)) {
        ni = cur - below(cur);
      } else {
        let s = -1;
        for (let j = cur + 1; j < this._slides.length; j++) {
          if (!del.has(j)) {
            s = j;
            break;
          }
        }
        if (s === -1) {
          for (let j = cur - 1; j >= 0; j--) {
            if (!del.has(j)) {
              s = j;
              break;
            }
          }
        }
        ni = s < 0 ? 0 : s - below(s);
      }
      // Emit-path deletes can't refocus until the host re-renders; arm
      // the flag at emit time (never on a refused/no-op path) so
      // ack/slotchange can finish the keyboard flow's focus hand-back.
      // The local path clears it via the caller's _focusCurrentThumb().
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'removeMany',
        indices
      }, els[0], true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      els.forEach(el => el.remove());
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      // Mint ids + copy component state BEFORE emitting, so the op can
      // carry the id map — but never mint for an op the stream gate is
      // about to refuse (_emitDcOp re-checks; this avoids orphaned keys).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      const ids = this._remintDuplicateIds(copy);
      const op = {
        op: 'duplicate'
      };
      if (ids) op.ids = ids;
      if (this._emitDcOp(op, slide, true, i + 1)) return;
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }

    /** Duplicate id policy. Plain ids are stripped — two live slides must
     *  not share one id. But a component that KEYS persistent state by id
     *  (image-slot's sidecar photo) would silently lose that state with
     *  its id. Such a component opts out of the strip by exposing a
     *  static cloneSlot(fromId, isFree) that copies its stored state
     *  under a fresh id of its choosing and returns that id. The old→new
     *  map is returned (or null) and rides the dc-op so the host writes
     *  the SAME ids into source — without that, the copy's state would
     *  revert on reload (docs/dc-ops.md). */
    _remintDuplicateIds(copy) {
      const ids = {};
      let found = false;
      const used = new Set();
      const idOk = /^[A-Za-z][\w-]{0,63}$/;
      const isFree = id => idOk.test(id) && !used.has(id) && !document.getElementById(id);
      copy.querySelectorAll('[id]').forEach(el => {
        const tag = el.tagName.toLowerCase();
        const cls = tag.indexOf('-') >= 0 && customElements.get(tag);
        let next = null;
        if (el.id && cls && typeof cls.cloneSlot === 'function') {
          try {
            next = cls.cloneSlot(el.id, isFree);
          } catch (e) {}
        }
        // Re-checked here so a misbehaving static can't smuggle a dupe
        // or an unsafe value into the document / the emitted op.
        if (typeof next === 'string' && isFree(next)) {
          ids[el.id] = next;
          used.add(next);
          el.id = next;
          found = true;
        } else {
          el.removeAttribute('id');
        }
      });
      return found ? ids : null;
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }

    /** Rail numbering, skip-aware: a skipped slide shows no number and the
     *  rest stay contiguous (1..visible), so the labels match the positions
     *  the overlay counter reports. Cheap (text writes are diffed), safe to
     *  call after any reconcile or skip toggle. */
    _renumberRail() {
      let v = 0;
      (this._thumbs || []).forEach(t => {
        const label = t.slide.hasAttribute('data-deck-skip') ? '' : String(++v);
        if (t.num.textContent !== label) t.num.textContent = label;
      });
    }

    /** Skip-aware label for slide i — the same numbering _renumberRail
     *  paints: '' for a skipped slide, else its 1-based position among
     *  non-skipped slides. Display surfaces (e.g. the delete confirm)
     *  use this so they never name a number the rail doesn't show. */
    _slideLabel(i) {
      const s = this._slides[i];
      if (!s || s.hasAttribute('data-deck-skip')) return '';
      let v = 0;
      for (let k = 0; k <= i; k++) {
        if (!this._slides[k].hasAttribute('data-deck-skip')) v++;
      }
      return String(v);
    }

    /** Overlay counter, skip-aware: position among non-skipped slides over
     *  the non-skipped total. A skipped CURRENT slide (reachable by rail
     *  click or deep link, never by _advance) shows '–' — its number is
     *  gone from the rail, so any digit here would lie. */
    _syncCount() {
      if (!this._countEl || !this._totalEl) return;
      // Empty deck: keep the overlay's initial "1 / 1" (it has nothing to
      // count and isn't visible without slides) — the guest fallback for
      // frozen copies leaves empty decks alone for the same rendering.
      if (!this._slides.length) {
        this._countEl.textContent = '1';
        this._totalEl.textContent = '1';
        return;
      }
      let pos = 0,
        total = 0;
      this._slides.forEach((s, i) => {
        if (!s.hasAttribute('data-deck-skip')) {
          total++;
          if (i <= this._index) pos = total;
        }
      });
      const cur = this._slides[this._index];
      const curSkipped = !cur || cur.hasAttribute('data-deck-skip');
      this._countEl.textContent = curSkipped ? '–' : String(pos);
      this._totalEl.textContent = String(total);
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/slides/slides-core.jsx
try { (() => {
const DS = window.OrigamiLabDesignSystem_7d3654;
const {
  Eyebrow,
  Rule,
  SlideHeader,
  BrandLogo,
  RingList,
  Callout,
  PrincipleCard,
  AgendaList,
  MeterRow
} = DS;
const LOGOS = '../../assets/logos';
const BG = {
  ivory: 'var(--ol-ivory)',
  sand: 'var(--ol-sand)',
  black: 'var(--ol-black)'
};
function Slide({
  bg = 'ivory',
  pad = '88px 120px',
  children,
  style
}) {
  const dark = bg === 'black';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: BG[bg] || bg,
      color: dark ? 'var(--ol-text-on-dark)' : 'var(--ol-ink)',
      fontFamily: 'var(--ol-font-sans)',
      padding: pad,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      ...style
    }
  }, children);
}
function Cover({
  title = /*#__PURE__*/React.createElement(React.Fragment, null, "Slides \xE0 prova", /*#__PURE__*/React.createElement("br", null), "de futuro."),
  lead = 'Fundamentos visuais, biblioteca de layouts e regras de uso para todas as apresentações da Origami Lab.',
  meta = 'Versão 1.0 · Origami Lab · Documento interno',
  media = '../../assets/capa-mesh.png'
}) {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "black",
    pad: "96px 120px",
    style: {
      justifyContent: 'space-between',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 880
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--ol-scrim-right)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    base: LOGOS,
    height: 44
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 36,
      maxWidth: 940
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "dark"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-display)',
      fontWeight: 800,
      lineHeight: 'var(--ol-lh-display)',
      letterSpacing: 'var(--ol-ls-display)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-lead)',
      lineHeight: 1.55,
      color: 'var(--ol-ink-dim)',
      maxWidth: 900
    }
  }, lead)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-dim)'
    }
  }, meta));
}
function Principles({
  eyebrow = 'O sistema',
  title = /*#__PURE__*/React.createElement(React.Fragment, null, "Quatro princ\xEDpios sustentam", /*#__PURE__*/React.createElement("br", null), "cada slide."),
  items = [{
    index: '01',
    title: 'Marfim como base',
    text: 'O fundo claro e quente carrega o conteúdo. O escuro é reservado para capa e divisores.'
  }, {
    index: '02',
    title: 'Verde fosco',
    text: 'Áreas grandes usam o verde profundo. Sobre fundo escuro, o acento é o verde claro fosco.'
  }, {
    index: '03',
    title: 'Uma ideia por slide',
    text: 'O título afirma a conclusão. O corpo apresenta a evidência que a sustenta.'
  }, {
    index: '04',
    title: 'Silêncio construído',
    text: 'Margem de 120px, no mínimo. O respiro é parte do argumento, não sobra de espaço.'
  }]
}) {
  return /*#__PURE__*/React.createElement(Slide, {
    style: {
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 1180
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-heading)',
      fontWeight: 800,
      lineHeight: 'var(--ol-lh-heading)',
      letterSpacing: 'var(--ol-ls-heading)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 1,
      background: 'var(--ol-line)',
      borderTop: 'var(--ol-hairline)',
      borderBottom: 'var(--ol-hairline)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement(PrincipleCard, {
    key: it.index,
    index: it.index,
    title: it.title
  }, it.text))));
}
function SectionDivider({
  number = '01',
  title = 'Fundamentos',
  lead = 'Cor, tipografia e grade. O que não muda de deck para deck.'
}) {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "black",
    pad: "96px 120px",
    style: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ol-size-numeral-hero)',
      fontWeight: 800,
      lineHeight: 'var(--ol-lh-numeral-hero)',
      letterSpacing: 'var(--ol-ls-numeral-hero)',
      color: 'var(--ol-green-deep)'
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      borderLeft: 'var(--ol-hairline-dark)',
      paddingLeft: 96
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark"
  }, "Se\xE7\xE3o"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-title)',
      fontWeight: 800,
      lineHeight: 'var(--ol-lh-title)',
      letterSpacing: 'var(--ol-ls-title)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body-lg)',
      lineHeight: 1.6,
      color: 'var(--ol-ink-dim)',
      maxWidth: 680
    }
  }, lead)));
}
function Agenda({
  title = /*#__PURE__*/React.createElement(React.Fragment, null, "O que vamos", /*#__PURE__*/React.createElement("br", null), "percorrer"),
  lead = 'Encontro de 45 minutos, com espaço para perguntas ao final de cada bloco.',
  items = [{
    label: 'Onde a operação está hoje',
    meta: '8 min'
  }, {
    label: 'Diagnóstico e oportunidades',
    meta: '12 min'
  }, {
    label: 'Proposta de solução',
    meta: '10 min'
  }, {
    label: 'Roadmap e investimento',
    meta: '10 min'
  }, {
    label: 'Próximos passos',
    meta: '5 min'
  }]
}) {
  return /*#__PURE__*/React.createElement(Slide, {
    style: {
      flexDirection: 'row',
      gap: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 420,
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Agenda"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-section)',
      fontWeight: 800,
      lineHeight: 1.08,
      letterSpacing: 'var(--ol-ls-section)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body)',
      lineHeight: 1.6,
      color: 'var(--ol-ink-soft)'
    }
  }, lead)), /*#__PURE__*/React.createElement(BrandLogo, {
    variant: "mark",
    tone: "color",
    base: LOGOS,
    height: 56
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(AgendaList, {
    items: items
  })));
}
function TwoColumn() {
  return /*#__PURE__*/React.createElement(Slide, {
    style: {
      gap: 52
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 1250
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Diagn\xF3stico"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-section)',
      fontWeight: 800,
      lineHeight: 'var(--ol-lh-section)',
      letterSpacing: 'var(--ol-ls-section)'
    }
  }, "O gargalo n\xE3o \xE9 de capacidade, \xE9 de fluxo de informa\xE7\xE3o.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      paddingRight: 48
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body-lg)',
      lineHeight: 1.6
    }
  }, "A planta opera a 71% da capacidade instalada, enquanto o time comercial recusa pedidos por falta de visibilidade de estoque em tempo real."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body)',
      lineHeight: 1.65,
      color: 'var(--ol-ink-soft)'
    }
  }, "O dado existe em tr\xEAs sistemas que n\xE3o conversam. A consolida\xE7\xE3o \xE9 manual, feita duas vezes por semana, e chega ao comercial com dois dias de atraso."), /*#__PURE__*/React.createElement(Callout, {
    eyebrow: "Implica\xE7\xE3o",
    style: {
      marginTop: 'auto',
      padding: 32
    }
  }, "Integrar os tr\xEAs sistemas destrava receita j\xE1 vend\xE1vel, sem investimento em ativo produtivo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ol-paper)',
      border: 'var(--ol-hairline)',
      borderRadius: 'var(--ol-radius)',
      padding: 44,
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "Evid\xEAncia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(MeterRow, {
    label: "Capacidade utilizada",
    value: "71%",
    percent: 71
  }), /*#__PURE__*/React.createElement(MeterRow, {
    label: "Pedidos recusados / m\xEAs",
    value: "38",
    percent: 46,
    tone: "sage"
  }), /*#__PURE__*/React.createElement(MeterRow, {
    label: "Atraso m\xE9dio do dado",
    value: "2 dias",
    percent: 62,
    tone: "sage"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)',
      borderTop: 'var(--ol-hairline)',
      paddingTop: 20
    }
  }, "Fonte: levantamento Origami Lab, jan\u2013mar 2026. Dados ilustrativos."))));
}
function Bullets() {
  return /*#__PURE__*/React.createElement(Slide, {
    style: {
      flexDirection: 'row',
      gap: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 44,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Escopo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-section)',
      fontWeight: 800,
      lineHeight: 'var(--ol-lh-section)',
      letterSpacing: 'var(--ol-ls-section)'
    }
  }, "O que entra no Sprint 0")), /*#__PURE__*/React.createElement(RingList, {
    items: ['Mapeamento dos três sistemas e do fluxo real de informação entre eles', 'Entrevistas com operação, comercial e TI — oito sessões de uma hora', 'Protótipo navegável do painel de estoque consolidado', 'Roadmap de implementação com estimativa de esforço por onda']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 520,
      flex: 'none',
      background: 'var(--ol-green-deep)',
      color: 'var(--ol-text-on-strong)',
      borderRadius: 'var(--ol-radius)',
      padding: 52,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onStrong"
  }, "Fora do escopo"), /*#__PURE__*/React.createElement(RingList, {
    tone: "strong",
    size: 24,
    gap: 22,
    items: ['Substituição do ERP', 'Desenvolvimento em produção', 'Treinamento de usuário final']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-green-light)',
      borderTop: '1px solid var(--ol-green-line)',
      paddingTop: 22
    }
  }, "Itens fora do escopo podem ser contratados em fase posterior.")));
}
function DoAndDont() {
  const doItems = ['Escrever o título como uma afirmação: ele carrega a conclusão do slide.', 'Manter margem de 120px e no máximo dois níveis de hierarquia por slide.', 'Citar a fonte de todo dado, em 24px, abaixo do gráfico ou da tabela.', 'Usar o escuro apenas em capa e divisores, para marcar o ritmo do deck.'];
  const dontItems = ['Verde neon #2EE8A8 em qualquer elemento do slide — ele vibra na projeção.', 'Gradientes de fundo, sombras pesadas, texturas e ícones preenchidos.', 'Texto abaixo de 24px, caixa alta em frases e ponto de exclamação.', 'Mais de um assunto por slide, ou tabela com mais de seis colunas.'];
  const ring = color => ({
    width: 26,
    height: 26,
    flex: 'none',
    borderRadius: '50%',
    border: '2px solid ' + color,
    marginTop: 5
  });
  return /*#__PURE__*/React.createElement(Slide, {
    style: {
      gap: 52
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Regras"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-section)',
      fontWeight: 800,
      lineHeight: 'var(--ol-lh-section)',
      letterSpacing: 'var(--ol-ls-section)'
    }
  }, "Fazer e evitar")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ol-paper)',
      border: 'var(--ol-hairline)',
      borderRadius: 'var(--ol-radius)',
      padding: 48,
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Fazer"), doItems.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: ring('var(--ol-green-deep)')
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body)',
      lineHeight: 1.55
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ol-sand)',
      borderRadius: 'var(--ol-radius)',
      padding: 48,
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "warn"
  }, "Evitar"), dontItems.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: ring('var(--ol-status-risk)')
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body)',
      lineHeight: 1.55
    }
  }, t))))));
}
function Closing({
  title = 'Conectamos a força da tradição ao poder da tecnologia.',
  site = 'origamilab.com.br',
  email = 'contato@origamilab.com.br',
  footer = 'Origami Lab · Documento interno'
}) {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "black",
    pad: "96px 120px",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    base: LOGOS,
    height: 44,
    style: {
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "dark"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-title)',
      fontWeight: 800,
      lineHeight: 'var(--ol-lh-title)',
      letterSpacing: 'var(--ol-ls-title)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-dim)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark"
  }, "Contato"), /*#__PURE__*/React.createElement("span", null, site), /*#__PURE__*/React.createElement("span", null, email))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-dim)',
      borderTop: 'var(--ol-hairline-dark)',
      paddingTop: 28
    }
  }, footer));
}
Object.assign(window, {
  Slide,
  Cover,
  Principles,
  SectionDivider,
  Agenda,
  TwoColumn,
  Bullets,
  DoAndDont,
  Closing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/slides-core.jsx", error: String((e && e.message) || e) }); }

// ui_kits/slides/slides-data.jsx
try { (() => {
const DSd = window.OrigamiLabDesignSystem_7d3654;
const {
  Eyebrow: Eb,
  BigNumber,
  StatCard,
  DataTable,
  StatusDot,
  BarChart,
  DonutChart,
  LineChart,
  Timeline,
  Matrix2x2
} = DSd;
const SlideD = window.Slide;
function Head({
  eyebrow,
  title,
  aside,
  legend
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Eb, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-section)',
      fontWeight: 800,
      lineHeight: 'var(--ol-lh-section)',
      letterSpacing: 'var(--ol-ls-section)'
    }
  }, title)), legend || (aside ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body)',
      lineHeight: 1.6,
      color: 'var(--ol-ink-soft)',
      maxWidth: 520
    }
  }, aside) : null));
}
function BigNumberSlide() {
  return /*#__PURE__*/React.createElement(SlideD, {
    style: {
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(Head, {
    eyebrow: "Impacto projetado",
    title: "Doze meses ap\xF3s a integra\xE7\xE3o"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(BigNumber, {
    value: "R$ 4,2",
    unit: "mi"
  }, "de receita destravada por pedidos que hoje s\xE3o recusados por falta de visibilidade."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: 'repeat(3,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "+18",
    unit: "p.p.",
    label: "de capacidade utilizada"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "4h",
    label: "de consolida\xE7\xE3o manual eliminadas por semana"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "7 meses",
    label: "para o payback do investimento"
  }))));
}
function TableSlide() {
  const legend = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: "ok"
  }), /*#__PURE__*/React.createElement(StatusDot, {
    status: "warn"
  }), /*#__PURE__*/React.createElement(StatusDot, {
    status: "risk"
  }));
  const rows = [['Integração de estoque', 'M. Andrade', '42%', '86%', '4,6', 'ok'], ['Portal do fornecedor', 'R. Teixeira', '37%', '92%', '4,1', 'warn'], ['Lei do Bem 2026', 'C. Lopes', '55%', '64%', '4,8', 'ok'], ['Diagnóstico industrial', 'J. Moraes', '21%', '78%', '3,4', 'risk'], ['Automação de compras', 'A. Ribeiro', '46%', '81%', '4,4', 'ok'], ['Painel de indicadores', 'P. Nogueira', '33%', '70%', '4,0', 'warn']].map(([p, g, m, a, r, s]) => ({
    p,
    g,
    m,
    a,
    r,
    s: /*#__PURE__*/React.createElement(StatusDot, {
      status: s
    })
  }));
  return /*#__PURE__*/React.createElement(SlideD, {
    style: {
      justifyContent: 'space-between',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement(Head, {
    eyebrow: "Portf\xF3lio \xB7 GPO",
    title: "Status dos projetos ativos",
    legend: legend
  }), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'p',
      label: 'Projeto',
      width: '2fr'
    }, {
      key: 'g',
      label: 'Gerente',
      width: '1.2fr',
      muted: true
    }, {
      key: 'm',
      label: 'Margem',
      align: 'right'
    }, {
      key: 'a',
      label: 'Alocação',
      align: 'right'
    }, {
      key: 'r',
      label: 'Rating',
      align: 'right'
    }, {
      key: 's',
      label: 'Status',
      width: '1.2fr'
    }],
    rows: rows
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, "Dados ilustrativos. Numerais sempre alinhados \xE0 direita e tabulares."));
}
function BarChartSlide() {
  const legend = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 4,
      background: 'var(--ol-green-deep)'
    }
  }), "Realizado"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 4,
      background: 'var(--ol-wheat)'
    }
  }), "Meta"));
  return /*#__PURE__*/React.createElement(SlideD, {
    style: {
      gap: 44
    }
  }, /*#__PURE__*/React.createElement(Head, {
    eyebrow: "Resultados",
    title: "Receita destravada por trimestre",
    legend: legend
  }), /*#__PURE__*/React.createElement(BarChart, {
    style: {
      flex: 1
    },
    height: 520,
    groups: [{
      label: '1T26',
      meta: 'R$ 0,6 mi',
      series: [{
        percent: 44
      }, {
        percent: 52,
        color: 'var(--ol-wheat)'
      }]
    }, {
      label: '2T26',
      meta: 'R$ 0,8 mi',
      series: [{
        percent: 58
      }, {
        percent: 60,
        color: 'var(--ol-wheat)'
      }]
    }, {
      label: '3T26',
      meta: 'R$ 1,1 mi',
      series: [{
        percent: 76
      }, {
        percent: 68,
        color: 'var(--ol-wheat)'
      }]
    }, {
      label: '4T26',
      meta: 'R$ 1,4 mi',
      series: [{
        percent: 94
      }, {
        percent: 76,
        color: 'var(--ol-wheat)'
      }]
    }]
  }));
}
function ChartsSlide() {
  return /*#__PURE__*/React.createElement(SlideD, {
    style: {
      gap: 44
    }
  }, /*#__PURE__*/React.createElement(Head, {
    eyebrow: "S\xE9ries e propor\xE7\xE3o",
    title: "Evolu\xE7\xE3o e composi\xE7\xE3o"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 24,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ol-paper)',
      border: 'var(--ol-hairline)',
      borderRadius: 'var(--ol-radius)',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body-lg)',
      fontWeight: 700
    }
  }, "Horas manuais por semana"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, "jan \u2192 dez 2026")), /*#__PURE__*/React.createElement(LineChart, {
    labels: ['Jan', 'Mar', 'Mai', 'Jul', 'Set', 'Nov', 'Dez'],
    series: [{
      points: '0,40 133,70 266,66 400,130 533,180 666,215 800,250'
    }, {
      points: '0,100 133,110 266,140 400,155 533,190 666,225 800,262',
      color: 'var(--ol-sage)',
      dashed: true
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ol-paper)',
      border: 'var(--ol-hairline)',
      borderRadius: 'var(--ol-radius)',
      padding: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(DonutChart, {
    centerValue: "52%",
    centerLabel: "opera\xE7\xE3o",
    segments: [{
      label: 'Operação',
      value: 52,
      color: 'var(--ol-green-deep)'
    }, {
      label: 'Comercial',
      value: 26,
      color: 'var(--ol-sage)'
    }, {
      label: 'Financeiro',
      value: 22,
      color: 'var(--ol-wheat)'
    }]
  }))));
}
function TimelineSlide() {
  return /*#__PURE__*/React.createElement(SlideD, {
    style: {
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(Head, {
    eyebrow: "Roadmap",
    title: "Quatro ondas em doze meses"
  }), /*#__PURE__*/React.createElement(Timeline, {
    style: {
      flex: 1,
      justifyContent: 'center'
    },
    phases: [{
      label: 'Onda 01',
      period: 'Meses 1–2',
      title: 'Diagnóstico e protótipo',
      description: 'Mapeamento dos sistemas, entrevistas e painel navegável validado com a operação.',
      status: 'Em andamento',
      current: true
    }, {
      label: 'Onda 02',
      period: 'Meses 3–5',
      title: 'Integração piloto',
      description: 'Conexão ERP–WMS em uma linha de produto, com dado atualizado a cada hora.'
    }, {
      label: 'Onda 03',
      period: 'Meses 6–9',
      title: 'Rollout completo',
      description: 'Extensão a todas as linhas e liberação do painel para o time comercial.'
    }, {
      label: 'Onda 04',
      period: 'Meses 10–12',
      title: 'Autonomia do cliente',
      description: 'Transferência de operação, documentação e capacitação do time interno.'
    }]
  }));
}
function MatrixSlide() {
  const legend = [['A', 'Painel de estoque consolidado', 'var(--ol-green-deep)', '#fff'], ['B', 'Alerta automático de ruptura', 'var(--ol-green-deep)', '#fff'], ['C', 'Portal do fornecedor', 'var(--ol-sage)', 'var(--ol-ink)'], ['D', 'Substituição do ERP', 'var(--ol-wheat)', 'var(--ol-ink)']];
  return /*#__PURE__*/React.createElement(SlideD, {
    style: {
      flexDirection: 'row',
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 460,
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eb, null, "Prioriza\xE7\xE3o"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 60,
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: 'var(--ol-ls-section)'
    }
  }, "Custo \xD7 impacto"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body)',
      lineHeight: 1.6,
      color: 'var(--ol-ink-soft)'
    }
  }, "Cada iniciativa \xE9 posicionada por rubrica audit\xE1vel nos dois eixos. O quadrante superior esquerdo abre a primeira onda."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      borderTop: 'var(--ol-hairline)',
      paddingTop: 28
    }
  }, legend.map(([k, label, bg, fg]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: bg,
      color: fg,
      fontSize: 'var(--ol-size-body)',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)'
    }
  }, label))))), /*#__PURE__*/React.createElement(Matrix2x2, {
    quadrants: [{
      label: 'Fazer agora',
      emphasis: true,
      items: [{
        key: 'A'
      }, {
        key: 'B'
      }]
    }, {
      label: 'Avaliar caso a caso',
      tone: 'sand',
      items: [{
        key: 'C'
      }]
    }, {
      label: 'Encaixar entre entregas'
    }, {
      label: 'Não fazer',
      items: [{
        key: 'D',
        color: 'var(--ol-wheat)'
      }]
    }]
  }));
}
Object.assign(window, {
  BigNumberSlide,
  TableSlide,
  BarChartSlide,
  ChartsSlide,
  TimelineSlide,
  MatrixSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/slides-data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/slides/slides-media.jsx
try { (() => {
const DSm = window.OrigamiLabDesignSystem_7d3654;
const {
  Eyebrow: Ey,
  Rule: Rl,
  Quote,
  TeamMember,
  MediaFrame,
  BrowserFrame
} = DSm;
const SlideM = window.Slide;
function QuoteSlide() {
  return /*#__PURE__*/React.createElement(SlideM, {
    bg: "sand",
    pad: "96px 120px",
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    name: "Nome do entrevistado",
    role: "Diretor de opera\xE7\xF5es \xB7 Nome da empresa"
  }, "O dado sempre esteve l\xE1. O que faltava era chegar ao comercial no mesmo dia em que a produ\xE7\xE3o acontece."));
}
function FullBleedPhoto({
  media
}) {
  return /*#__PURE__*/React.createElement(SlideM, {
    bg: "black",
    pad: "0",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--ol-black)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 120px'
    }
  }, media ? /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-dim)',
      maxWidth: 460,
      textAlign: 'right'
    }
  }, "Arraste uma imagem corporativa \u2014 tons frios, a\xE7o, vidro")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--ol-scrim-left)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '96px 120px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      maxWidth: 1020,
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Ey, {
    tone: "onDark"
  }, "Case"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Rl, {
    tone: "dark"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-heading)',
      fontWeight: 800,
      lineHeight: 1.06,
      letterSpacing: 'var(--ol-ls-display)'
    }
  }, "Uma ind\xFAstria de 60 anos, operando com o dado do dia."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body-lg)',
      lineHeight: 1.6,
      color: 'var(--ol-ink-dim)',
      maxWidth: 760
    }
  }, "Quatro meses entre o diagn\xF3stico e o primeiro pedido aprovado com estoque em tempo real.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-dim)'
    }
  }, "Imagem ilustrativa")));
}
function ImageText() {
  return /*#__PURE__*/React.createElement(SlideM, {
    style: {
      flexDirection: 'row',
      gap: 64,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      justifyContent: 'center',
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(Ey, null, "Solu\xE7\xE3o"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-section)',
      fontWeight: 800,
      lineHeight: 'var(--ol-lh-section)',
      letterSpacing: 'var(--ol-ls-section)'
    }
  }, "O painel mostra o estoque no mesmo dia em que a produ\xE7\xE3o acontece."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body-lg)',
      lineHeight: 1.6,
      color: 'var(--ol-ink-soft)'
    }
  }, "Uma tela \xFAnica, alimentada pelos tr\xEAs sistemas, com atualiza\xE7\xE3o a cada hora e alerta autom\xE1tico de ruptura."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      borderTop: 'var(--ol-hairline)',
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      flex: 'none',
      borderRadius: '50%',
      border: '2px solid var(--ol-green-deep)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--ol-size-body)'
    }
  }, "Dispon\xEDvel em desktop e em tablet na linha de produ\xE7\xE3o"))), /*#__PURE__*/React.createElement(MediaFrame, {
    style: {
      width: 760,
      flex: 'none'
    },
    caption: "Legenda da imagem, com fonte quando aplic\xE1vel."
  }));
}
function Mosaic() {
  return /*#__PURE__*/React.createElement(SlideM, {
    style: {
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Ey, null, "Entreg\xE1veis"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-section)',
      fontWeight: 800,
      lineHeight: 'var(--ol-lh-section)',
      letterSpacing: 'var(--ol-ls-section)'
    }
  }, "O que o time recebe")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body)',
      lineHeight: 1.6,
      color: 'var(--ol-ink-soft)',
      maxWidth: 460
    }
  }, "Quatro pe\xE7as, entregues ao fim da onda 01.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,1fr) minmax(0,1fr)',
      gridTemplateRows: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    style: {
      gridRow: 'span 2'
    },
    placeholder: "Elemento principal \u2014 imagem, GIF ou frame"
  }), /*#__PURE__*/React.createElement(MediaFrame, {
    placeholder: "Apoio"
  }), /*#__PURE__*/React.createElement(MediaFrame, {
    placeholder: "Apoio"
  }), /*#__PURE__*/React.createElement(MediaFrame, {
    style: {
      gridColumn: 'span 2'
    },
    placeholder: "Apoio largo"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr',
      gap: 20,
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Painel de estoque consolidado"), /*#__PURE__*/React.createElement("span", null, "Alerta de ruptura"), /*#__PURE__*/React.createElement("span", null, "Relat\xF3rio semanal")));
}
function VideoSlide() {
  return /*#__PURE__*/React.createElement(SlideM, {
    pad: "80px 120px",
    style: {
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Ey, null, "Demonstra\xE7\xE3o"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-subsection)',
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: 'var(--ol-ls-section)'
    }
  }, "Do pedido ao estoque, em oito segundos")), /*#__PURE__*/React.createElement(Ey, {
    tone: "muted"
  }, "V\xEDdeo \xB7 GIF \xB7 anima\xE7\xE3o")), /*#__PURE__*/React.createElement(MediaFrame, {
    style: {
      flex: 1
    },
    placeholder: "Arraste o v\xEDdeo em GIF, a anima\xE7\xE3o ou o frame de abertura"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontSize: 'var(--ol-size-body)',
      color: 'var(--ol-ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Grava\xE7\xE3o do prot\xF3tipo naveg\xE1vel, sem \xE1udio."), /*#__PURE__*/React.createElement("span", null, "0:08 \xB7 loop")));
}
function ProductScreen() {
  return /*#__PURE__*/React.createElement(SlideM, {
    bg: "sand",
    pad: "80px 120px",
    style: {
      gap: 36,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center',
      textAlign: 'center',
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement(Ey, null, "Prot\xF3tipo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-subsection)',
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: 'var(--ol-ls-section)'
    }
  }, "A tela que a opera\xE7\xE3o vai usar")), /*#__PURE__*/React.createElement(BrowserFrame, {
    style: {
      flex: 1,
      width: '100%',
      maxWidth: 1420
    },
    url: "painel.cliente.com.br"
  }));
}
function TeamSlide() {
  const people = [['Nome do sócio', 'Sócio responsável', 'Conduz o diagnóstico e responde pela relação com a diretoria.'], ['Nome do gerente', 'Gerente de projeto', 'Ponto focal diário, responsável por escopo, prazo e ritos.'], ['Nome do designer', 'Design de produto', 'Traduz a operação em interface e valida com o usuário final.'], ['Nome do engenheiro', 'Engenharia de dados', 'Constrói as integrações e garante a confiabilidade do dado.']];
  return /*#__PURE__*/React.createElement(SlideM, {
    style: {
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      borderBottom: 'var(--ol-hairline)',
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Ey, null, "Time"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-section)',
      fontWeight: 800,
      lineHeight: 'var(--ol-lh-section)',
      letterSpacing: 'var(--ol-ls-section)'
    }
  }, "Quem conduz o projeto")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--ol-size-body)',
      lineHeight: 1.6,
      color: 'var(--ol-ink-soft)',
      maxWidth: 480
    }
  }, "Time dedicado, com ponto focal \xFAnico durante toda a execu\xE7\xE3o.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 40
    }
  }, people.map(([n, r, t]) => /*#__PURE__*/React.createElement(TeamMember, {
    key: n,
    name: n,
    role: r
  }, t))));
}
Object.assign(window, {
  QuoteSlide,
  FullBleedPhoto,
  ImageText,
  Mosaic,
  VideoSlide,
  ProductScreen,
  TeamSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/slides-media.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AgendaList = __ds_scope.AgendaList;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Matrix2x2 = __ds_scope.Matrix2x2;

__ds_ns.PrincipleCard = __ds_scope.PrincipleCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.RingList = __ds_scope.RingList;

__ds_ns.TeamMember = __ds_scope.TeamMember;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.BigNumber = __ds_scope.BigNumber;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.DonutChart = __ds_scope.DonutChart;

__ds_ns.LineChart = __ds_scope.LineChart;

__ds_ns.MeterRow = __ds_scope.MeterRow;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.BrandLogo = __ds_scope.BrandLogo;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.SlideHeader = __ds_scope.SlideHeader;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.BrowserFrame = __ds_scope.BrowserFrame;

__ds_ns.MediaFrame = __ds_scope.MediaFrame;

})();
