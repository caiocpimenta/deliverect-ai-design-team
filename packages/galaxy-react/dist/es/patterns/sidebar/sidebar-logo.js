import { jsx as s } from "react/jsx-runtime";
import { forwardRef as t } from "react";
import { Stack as i } from "../../foundations/layout/stack/stack.js";
import { combineClassNames as f } from "../../utils/combine-class-names.js";
import { baseReset as p } from "../../galaxy-styles/dist/tokens/reset.css.js";
const b = t(
  ({ className: o, children: r, ...e }, m) => {
    const a = f(p, o);
    return /* @__PURE__ */ s(
      i,
      {
        height: "auto",
        mb: "100",
        ...e,
        ref: m,
        className: a,
        children: r
      }
    );
  }
);
b.displayName = "Sidebar.Logo";
export {
  b as SidebarLogo
};
