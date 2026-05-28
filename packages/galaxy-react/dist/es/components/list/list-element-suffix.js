import { jsx as r } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import { Inline as f } from "../../foundations/layout/inline/inline.js";
import { combineClassNames as a } from "../../utils/combine-class-names.js";
import { listElementSuffix as l } from "../../galaxy-styles/dist/list/list-element-root.css.js";
const n = s(
  ({ className: t, children: i, ...e }, m) => {
    const o = a(t, l);
    return /* @__PURE__ */ r(
      f,
      {
        width: "auto",
        space: "xs",
        alignX: "right",
        alignY: "top",
        className: o,
        ...e,
        ref: m,
        children: i
      }
    );
  }
);
n.displayName = "ListElement.Suffix";
export {
  n as ListElementSuffix
};
