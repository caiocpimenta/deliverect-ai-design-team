import { jsx as r } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import * as e from "@radix-ui/react-tabs";
import { combineClassNames as p } from "../../utils/combine-class-names.js";
import "../../foundations/layout/box/box.js";
import { Inline as f } from "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import { baseReset as l } from "../../galaxy-styles/dist/tokens/reset.css.js";
const n = a(
  ({ children: s, className: t = "", ...i }, m) => {
    const o = p(l, t);
    return /* @__PURE__ */ r(e.List, { asChild: !0, className: o, ref: m, children: /* @__PURE__ */ r(f, { space: "2xs", wrap: !0, ...i, children: s }) });
  }
);
n.displayName = "Tabs.List";
export {
  n as TabsList
};
