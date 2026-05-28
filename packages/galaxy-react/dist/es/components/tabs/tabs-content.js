import { jsx as m } from "react/jsx-runtime";
import * as n from "react";
import * as i from "@radix-ui/react-tabs";
import { combineClassNames as f } from "../../utils/combine-class-names.js";
import { baseReset as p } from "../../galaxy-styles/dist/tokens/reset.css.js";
const b = n.forwardRef(
  ({ children: t, value: o, className: s, ...e }, a) => {
    const r = f(p, s);
    return /* @__PURE__ */ m(
      i.Content,
      {
        ref: a,
        value: o,
        className: r,
        ...e,
        children: t
      }
    );
  }
);
b.displayName = "Tabs.Content";
export {
  b as TabsContent
};
