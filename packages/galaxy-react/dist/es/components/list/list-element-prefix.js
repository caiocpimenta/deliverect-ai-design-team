import { jsx as s } from "react/jsx-runtime";
import { forwardRef as i } from "react";
import { Inline as a } from "../../foundations/layout/inline/inline.js";
import { combineClassNames as f } from "../../utils/combine-class-names.js";
import { listElementPrefix as l } from "../../galaxy-styles/dist/list/list-element-root.css.js";
const n = i(
  ({ className: e, children: r, ...t }, m) => {
    const o = f(e, l);
    return /* @__PURE__ */ s(
      a,
      {
        width: "auto",
        space: "xs",
        alignY: "top",
        ...t,
        className: o,
        ref: m,
        children: r
      }
    );
  }
);
n.displayName = "ListElement.Prefix";
export {
  n as ListElementPrefix
};
