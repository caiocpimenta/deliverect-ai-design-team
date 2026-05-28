import { jsx as e } from "react/jsx-runtime";
import { forwardRef as n } from "react";
import { Stack as p } from "../../foundations/layout/stack/stack.js";
import { combineClassNames as s } from "../../utils/combine-class-names.js";
import { navigationRoot as c } from "../../galaxy-styles/dist/navigation/navigation-root.css.js";
const f = n(
  ({ environment: o = "production", className: a, children: r, ...t }, m) => {
    const i = s(
      c({ environment: o }),
      a
    );
    return /* @__PURE__ */ e(
      p,
      {
        component: "nav",
        space: "lg",
        ...t,
        ref: m,
        className: i,
        children: r
      }
    );
  }
);
f.displayName = "Navigation.Root";
export {
  f as NavigationRoot
};
