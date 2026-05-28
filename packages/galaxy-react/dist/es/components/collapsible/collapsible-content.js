import { jsx as m } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import * as i from "@radix-ui/react-collapsible";
import { combineClassNames as n } from "../../utils/combine-class-names.js";
import { collapsibleContent as p } from "../../galaxy-styles/dist/collapsible/collapsible.css.js";
import { baseReset as C } from "../../galaxy-styles/dist/tokens/reset.css.js";
const f = a(({ children: o, className: e, animated: t, ...l }, r) => {
  const s = n(
    C,
    p({ animated: t }),
    e
  );
  return /* @__PURE__ */ m(
    i.Content,
    {
      ref: r,
      className: s,
      ...l,
      children: o
    }
  );
});
f.displayName = "Collapsible.Content";
export {
  f as CollapsibleContent
};
