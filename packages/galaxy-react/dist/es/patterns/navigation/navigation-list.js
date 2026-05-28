import { jsx as r } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import { Stack as e } from "../../foundations/layout/stack/stack.js";
import { combineClassNames as f } from "../../utils/combine-class-names.js";
import { navigationList as n } from "../../galaxy-styles/dist/navigation/navigation-list.css.js";
const p = s(
  ({ variant: o = "default", className: t, children: i, ...a }, m) => /* @__PURE__ */ r(
    e,
    {
      component: "ul",
      height: "auto",
      ...a,
      className: f(n({ variant: o }), t),
      ref: m,
      children: i
    }
  )
);
p.displayName = "Navigation.List";
export {
  p as NavigationList
};
