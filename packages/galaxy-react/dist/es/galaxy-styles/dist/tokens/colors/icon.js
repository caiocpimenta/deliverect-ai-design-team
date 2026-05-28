import { decorative as c, magic as a, neutral as i, critical as n, info as o, warning as s, success as v, brand as u, primary as d } from "./foundation.js";
const l = {
  /** @deprecated */
  primary: e(d),
  neutral: {
    // Old tokens
    /** @deprecated */
    default: {
      default: i[800],
      hover: i[900],
      active: i[1e3]
    },
    /** @deprecated */
    weak: { default: i[500], hover: i[600], active: i[700] },
    /** @deprecated */
    inactive: i[400],
    /** @deprecated */
    strong: i[1e3],
    /** @deprecated */
    inverse: i[0],
    // New tokens
    interactive: {
      bold: {
        default: i[800],
        hover: i[900],
        active: i[1e3]
      },
      subtle: {
        default: i[600],
        hover: i[700],
        active: i[800]
      }
    },
    static: {
      default: i[1e3],
      inactive: i[400],
      inverse: i[0]
    }
  },
  brand: t(u),
  success: t(v),
  warning: {
    // Old tokens
    ...e(s),
    // New tokens
    ...t(s)
  },
  info: {
    // Old tokens
    ...e(o),
    // New tokens
    ...t(o)
  },
  critical: {
    // Old tokens
    ...e(n),
    // New tokens
    ...t(n)
  },
  magic: {
    // Old tokens
    ...e(a),
    /** @deprecated */
    strong: a[900],
    // New tokens
    ...t(a),
    static: a[900]
  },
  decorative: {
    // Old tokens
    ...e(c),
    /** @deprecated */
    strong: c[900],
    // New tokens
    ...t(c),
    static: c[900]
  }
};
function t(r) {
  return {
    interactive: {
      default: r[600],
      hover: r[700],
      active: r[800]
    },
    static: r[800]
  };
}
function e(r) {
  return {
    /** @deprecated */
    default: r[600],
    /** @deprecated */
    hover: r[700],
    /** @deprecated */
    active: r[800],
    /** @deprecated */
    strong: r[800]
  };
}
export {
  l as icon
};
