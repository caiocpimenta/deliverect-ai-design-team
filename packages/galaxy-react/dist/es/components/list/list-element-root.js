import { jsx as l } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import { Inline as f } from "../../foundations/layout/inline/inline.js";
import { combineClassNames as n } from "../../utils/combine-class-names.js";
import { listElementRoot as p } from "../../galaxy-styles/dist/list/list-element-root.css.js";
const c = a(
  ({ size: o = "default", type: t = "default", className: e, children: m, ...r }, s) => {
    const i = n(e, p({ size: o, type: t }));
    return /* @__PURE__ */ l(f, { p: "md", alignY: "top", ...r, ref: s, className: i, children: m });
  }
);
c.displayName = "ListElement.Root";
export {
  c as ListElementRoot
};
