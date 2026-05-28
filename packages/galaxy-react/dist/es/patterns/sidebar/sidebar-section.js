import { jsx as s } from "react/jsx-runtime";
import { forwardRef as i } from "react";
import { Stack as m } from "../../foundations/layout/stack/stack.js";
import { combineClassNames as c } from "../../utils/combine-class-names.js";
import { baseReset as n } from "../../galaxy-styles/dist/tokens/reset.css.js";
const f = i(
  ({ className: e, children: r, ...o }, a) => {
    const t = c(n, e);
    return /* @__PURE__ */ s(
      m,
      {
        height: "auto",
        alignX: "center",
        space: "2xs",
        ...o,
        ref: a,
        className: t,
        children: r
      }
    );
  }
);
f.displayName = "Sidebar.Section";
export {
  f as SidebarSection
};
