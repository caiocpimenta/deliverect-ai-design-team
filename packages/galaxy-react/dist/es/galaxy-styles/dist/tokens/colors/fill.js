import { primary as c, transparent as r, decorative as i, magic as l, warning as a, info as u, critical as v, brand as d, neutral as e, success as b } from "./foundation.js";
const g = {
  neutral: {
    // Old tokens
    /** @deprecated */
    default: { default: e[0], hover: e[100], active: e[200] },
    /** @deprecated */
    weak: { default: e[50], hover: e[100], active: e[200] },
    /** @deprecated */
    strong: { default: e[100], hover: e[200], active: e[300] },
    /** @deprecated */
    inverse: { default: e[800], hover: e[900], active: e[1e3] },
    /** @deprecated */
    inactive: { default: e[100], strong: e[200] },
    // New tokens
    interactive: {
      subtle: {
        default: e[0],
        hover: e[100],
        active: e[200]
      },
      bold: {
        default: e[100],
        hover: e[200],
        active: e[300]
      }
    },
    static: {
      default: e[0],
      subtle: e[200],
      skeleton: e[300],
      inverse: e[900],
      inactive: {
        subtle: e[100],
        bold: e[200]
      }
    }
  },
  brand: {
    interactive: {
      bold: {
        default: d[800],
        hover: d[700],
        active: d[600]
      },
      subtle: o(d)
    },
    static: {
      bold: d[800],
      subtle: d[300]
    }
  },
  success: {
    interactive: {
      bold: n(b, !1),
      subtle: o(b)
    },
    static: h(b)
  },
  critical: {
    // Old tokens
    ...s(v),
    /** @deprecated */
    data: { default: v[500], weak: v[300] },
    /** @deprecated */
    critical: {
      default: v[200],
      hover: v[300],
      active: v[400]
    },
    // New tokens
    interactive: {
      bold: n(v, !1),
      subtle: {
        default: v[50],
        hover: v[100],
        active: v[200]
      }
    },
    static: h(v)
  },
  info: {
    // Old tokens
    ...s(u),
    /** @deprecated */
    data: { default: u[500], weak: u[300] },
    /** @deprecated */
    info: { default: u[200], hover: u[300], active: u[400] },
    // New tokens
    interactive: {
      bold: n(u, !1),
      subtle: o(u)
    },
    static: h(u)
  },
  warning: {
    // Old tokens
    /** @deprecated */
    default: { default: a[300], hover: a[400], active: a[500] },
    /** @deprecated */
    weak: { default: a[50], hover: a[100], active: a[200] },
    /** @deprecated */
    warning: { default: a[100], hover: a[200], active: a[300] },
    /** @deprecated */
    data: { default: a[500], weak: a[200] },
    // New tokens
    interactive: {
      bold: {
        default: a[300],
        hover: a[400],
        active: a[500]
      },
      subtle: o(a)
    },
    static: {
      bold: a[300],
      subtle: a[100]
    }
  },
  magic: {
    // Old tokens
    ...s(l),
    /** @deprecated */
    default: { default: l[500], hover: l[600], active: l[700] },
    /** @deprecated */
    magic: { default: l[200], hover: l[300], active: l[400] },
    // New tokens
    interactive: {
      bold: n(l, !0),
      subtle: o(l)
    },
    static: {
      bold: l[500],
      subtle: l[200]
    }
  },
  decorative: {
    // Old tokens
    ...s(i),
    /** @deprecated */
    default: {
      default: i[500],
      hover: i[600],
      active: i[700]
    },
    /** @deprecated */
    data: { default: i[400], weak: i[100] },
    /** @deprecated */
    decorative: {
      default: i[200],
      hover: i[300],
      active: i[400]
    },
    // New tokens
    interactive: {
      bold: n(i, !0),
      subtle: o(i)
    },
    static: {
      bold: i[300],
      subtle: i[100]
    }
  },
  transparent: {
    // Old tokens
    /** @deprecated */
    default: {
      default: r.transparent,
      hover: r.neutral[100],
      active: r.neutral[200]
    },
    /** @deprecated */
    inverse: {
      default: r.transparent,
      hover: r.inverse[100],
      active: r.inverse[200]
    },
    // New tokens
    interactive: {
      default: {
        default: r.neutral[0],
        hover: r.neutral[100],
        active: r.neutral[200]
      },
      inverse: {
        default: r.inverse[0],
        hover: r.inverse[100],
        active: r.inverse[200]
      }
    }
  },
  /** @deprecated */
  primary: {
    ...s(c),
    /** @deprecated */
    data: { default: c[500], weak: c[300] },
    /** @deprecated */
    success: { default: c[200], hover: c[300], active: c[400] }
  }
};
function n(t, f) {
  return {
    default: t[f ? 500 : 600],
    hover: t[f ? 600 : 700],
    active: t[f ? 700 : 800]
  };
}
function o(t) {
  return {
    default: t[100],
    hover: t[200],
    active: t[300]
  };
}
function h(t) {
  return {
    bold: t[600],
    subtle: t[200]
  };
}
function s(t) {
  return {
    /** @deprecated */
    default: {
      default: t[600],
      hover: t[700],
      active: t[800]
    },
    /** @deprecated */
    weak: {
      default: t[50],
      hover: t[100],
      active: t[200]
    }
  };
}
export {
  g as fill
};
