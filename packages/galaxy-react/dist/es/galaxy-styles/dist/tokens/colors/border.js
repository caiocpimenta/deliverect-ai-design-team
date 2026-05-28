import { decorative as c, warning as o, info as a, brand as n, neutral as e, magic as d, critical as u, success as s, primary as l } from "./foundation.js";
const b = {
  /** @deprecated */
  default: e[200],
  /** @deprecated */
  primary: r(l),
  neutral: {
    // Old tokens
    /** @deprecated */
    default: {
      default: e[200],
      hover: e[300],
      active: e[400]
    },
    /** @deprecated */
    weak: {
      default: e[100],
      hover: e[200],
      active: e[300]
    },
    /** @deprecated */
    strong: {
      default: e[300],
      hover: e[400],
      active: e[500]
    },
    /** @deprecated */
    inverse: {
      default: e[0],
      hover: e[50],
      active: e[100]
    },
    /** @deprecated */
    inactive: e[400],
    /** @deprecated */
    divider: e[100],
    /** @deprecated */
    emphasize: e[800],
    // New tokens
    interactive: {
      default: {
        default: e[200],
        hover: e[300],
        active: e[400]
      },
      subtle: {
        default: e[100],
        hover: e[200],
        active: e[300]
      },
      bold: {
        default: e[300],
        hover: e[400],
        active: e[500]
      },
      inverse: {
        default: e[0],
        hover: e[50],
        active: e[100]
      }
    },
    static: {
      default: e[200],
      inactive: e[100],
      divider: e[100],
      emphasize: e[800]
    }
  },
  brand: {
    interactive: i(n),
    static: {
      bold: n[800],
      subtle: n[100]
    }
  },
  success: {
    interactive: i(s),
    static: v(s)
  },
  critical: {
    // Old tokens
    ...r(u),
    // New tokens
    interactive: i(u),
    static: v(u)
  },
  info: {
    // Old tokens
    ...r(a),
    /** @deprecated */
    focus: a[300],
    // New tokens
    interactive: {
      ...i(a),
      focus: a[300]
    },
    static: v(a)
  },
  warning: {
    // Old tokens
    ...r(o),
    // New tokens
    interactive: i(o),
    static: {
      bold: o[500],
      subtle: o[100]
    }
  },
  magic: {
    // Old tokens
    ...r(d),
    // New tokens
    interactive: i(d),
    static: v(d)
  },
  decorative: {
    // Old tokens
    ...r(c),
    // New tokens
    interactive: i(c),
    static: {
      bold: c[200],
      subtle: c[100]
    }
  }
};
function i(t) {
  return {
    default: t[600],
    hover: t[700],
    active: t[800]
  };
}
function v(t) {
  return {
    bold: t[600],
    subtle: t[200]
  };
}
function r(t) {
  return {
    /** @deprecated */
    default: t[600],
    /** @deprecated */
    hover: t[700],
    /** @deprecated */
    active: t[800]
  };
}
export {
  b as border
};
