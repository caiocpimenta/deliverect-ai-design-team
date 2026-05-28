import { jsx as a, jsxs as l } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import { Box as f } from "../../foundations/layout/box/box.js";
import { Inline as i } from "../../foundations/layout/inline/inline.js";
import { Text as v } from "../../foundations/typography/text/text.js";
import { combineClassNames as x } from "../../utils/combine-class-names.js";
import { navigationItem as N, navigationLabel as b } from "../../galaxy-styles/dist/navigation/navigation-item.css.js";
const h = p(
  ({
    label: e,
    isActive: t,
    trailing: o,
    className: r,
    as: m,
    ...n
  }, s) => {
    const c = m ?? "a", d = x(
      N({ variant: "sub" }),
      r
    );
    return /* @__PURE__ */ a(
      f,
      {
        component: c,
        tabIndex: 0,
        ...n,
        className: d,
        ref: s,
        "data-active": t || void 0,
        children: /* @__PURE__ */ l(i, { alignX: "spaceBetween", children: [
          /* @__PURE__ */ a(v, { className: b, children: e }),
          /* @__PURE__ */ a(i, { width: "auto", space: "xs", "aria-hidden": !0, children: o })
        ] })
      }
    );
  }
);
h.displayName = "Navigation.Subitem";
export {
  h as NavigationSubitem
};
