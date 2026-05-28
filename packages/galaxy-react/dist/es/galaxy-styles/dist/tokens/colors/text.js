import { neutral as r, decorative as c, magic as a, critical as n, info as o, warning as s, success as v, brand as d, primary as u } from "./foundation.js";
const l = {
  /** @deprecated */
  primary: t(u),
  neutral: {
    // Old tokens
    /** @deprecated */
    text: r[1e3],
    /** @deprecated */
    default: {
      default: r[800],
      hover: r[900],
      active: r[1e3]
    },
    /** @deprecated */
    secondary: r[600],
    /** @deprecated */
    textInverse: r[50],
    /** @deprecated */
    inactive: r[400],
    /** @deprecated */
    placeholder: r[500],
    // New tokens
    interactive: {
      default: r[800],
      hover: r[900],
      active: r[1e3]
    },
    static: {
      primary: r[1e3],
      secondary: r[600],
      inverse: r[50],
      inactive: r[400],
      placeholder: r[500]
    }
  },
  brand: i(d),
  success: i(v),
  warning: {
    // Old tokens
    ...t(s),
    // New tokens
    ...i(s)
  },
  info: {
    // Old tokens
    ...t(o),
    // New tokens
    ...i(o)
  },
  critical: {
    // Old tokens
    ...t(n),
    // New tokens
    ...i(n)
  },
  magic: {
    // Old tokens
    ...t(a),
    // New tokens
    ...i(a)
  },
  decorative: {
    // Old tokens
    ...t(c),
    // New tokens
    ...i(c)
  }
};
function i(e) {
  return {
    interactive: {
      default: e[600],
      hover: e[700],
      active: e[800]
    },
    static: e[900]
  };
}
function t(e) {
  return {
    /** @deprecated */
    default: e[600],
    /** @deprecated */
    hover: e[700],
    /** @deprecated */
    active: e[800],
    /** @deprecated */
    strong: e[900]
  };
}
export {
  l as text
};
