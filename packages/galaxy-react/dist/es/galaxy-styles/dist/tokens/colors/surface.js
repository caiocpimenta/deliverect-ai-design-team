import { primary as s, decorative as r, magic as c, warning as a, info as o, critical as v, transparent as l, neutral as t, success as d, brand as f } from "./foundation.js";
const g = {
  neutral: {
    // Old tokens
    /** @deprecated */
    default: t[0],
    /** @deprecated */
    hover: t[50],
    /** @deprecated */
    active: t[100],
    /** @deprecated */
    secondary: { default: t[50], hover: t[100], active: t[200] },
    /** @deprecated */
    tertiary: { default: t[100], hover: t[200], active: t[300] },
    /** @deprecated */
    inactive: t[100],
    /** @deprecated */
    inverse: t[800],
    /** @deprecated */
    overlay: l.neutral[400],
    // New tokens
    interactive: {
      subtle: {
        default: t[0],
        hover: t[50],
        active: t[100]
      },
      default: i(t),
      bold: {
        default: t[100],
        hover: t[200],
        active: t[300]
      }
    },
    static: {
      subtle: t[0],
      default: t[50],
      bold: t[100],
      inactive: t[200],
      inverse: t[800],
      overlay: l.neutral[400]
    }
  },
  brand: {
    interactive: i(f),
    static: u(f)
  },
  success: {
    interactive: i(d),
    static: u(d)
  },
  critical: {
    // Old tokens
    ...n(v),
    /** @deprecated */
    critical: v[600],
    // New tokens
    interactive: i(v),
    static: u(v)
  },
  info: {
    // Old tokens
    ...n(o),
    /** @deprecated */
    info: o[600],
    // New tokens
    interactive: i(o),
    static: u(o)
  },
  warning: {
    // Old tokens
    /** @deprecated */
    default: a[50],
    /** @deprecated */
    hover: a[100],
    /** @deprecated */
    active: a[200],
    /** @deprecated */
    warning: a[300],
    // New tokens
    interactive: i(a),
    static: {
      bold: a[300],
      subtle: a[50]
    }
  },
  magic: {
    // Old tokens
    ...n(c),
    /** @deprecated */
    magic: c[500],
    // New tokens
    interactive: i(c),
    static: {
      bold: c[500],
      subtle: c[100]
    }
  },
  decorative: {
    // Old tokens
    ...n(r),
    /** @deprecated */
    decorative: r[400],
    // New tokens
    interactive: i(r),
    static: { bold: r[400], subtle: r[100] }
  },
  /** @deprecated */
  primary: {
    ...n(s),
    /** @deprecated */
    success: s[600]
  }
};
function i(e) {
  return {
    default: e[50],
    hover: e[100],
    active: e[200]
  };
}
function u(e) {
  return {
    bold: e[600],
    subtle: e[100]
  };
}
function n(e) {
  return {
    /** @deprecated */
    default: e[100],
    /** @deprecated */
    hover: e[200],
    /** @deprecated */
    active: e[300]
  };
}
export {
  g as surface
};
