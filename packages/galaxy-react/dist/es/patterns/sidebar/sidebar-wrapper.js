import { jsx as o } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import { Stack as i } from "../../foundations/layout/stack/stack.js";
import { combineClassNames as t } from "../../utils/combine-class-names.js";
import { sidebarWrapper as n } from "../../galaxy-styles/dist/sidebar/sidebar-wrapper.css.js";
const c = s(
  ({ className: r, children: a, ...e }, p) => {
    const m = t(n, r);
    return /* @__PURE__ */ o(
      i,
      {
        alignX: "center",
        space: "sm",
        px: "sm",
        py: "xl",
        component: "nav",
        ...e,
        ref: p,
        className: m,
        children: a
      }
    );
  }
);
c.displayName = "Sidebar.Wrapper";
export {
  c as SidebarWrapper
};
