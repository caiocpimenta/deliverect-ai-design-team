import { jsx as r } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import { Inline as u } from "../../foundations/layout/inline/inline.js";
import { Button as d } from "../../primitives/button/button.js";
import { combineClassNames as b } from "../../utils/combine-class-names.js";
import { getItemStatus as I } from "./getItemStatus.js";
import { sidebarItem as N } from "../../galaxy-styles/dist/sidebar/sidebar-item.css.js";
const g = f(
  ({
    variant: e,
    active: a,
    isAvailable: o = !0,
    className: m,
    wrapperClassName: s,
    as: n,
    ...i
  }, c) => {
    const l = n ?? "button", t = I(a, o), p = b(
      N({ variant: e, status: t }),
      m
    );
    return /* @__PURE__ */ r(u, { alignX: "center", alignY: "center", className: s, children: /* @__PURE__ */ r(
      d,
      {
        as: l,
        status: "neutral",
        variant: "plain",
        "data-state": t,
        ...i,
        ref: c,
        className: p
      }
    ) });
  }
);
g.displayName = "Sidebar.Item";
export {
  g as SidebarItem
};
