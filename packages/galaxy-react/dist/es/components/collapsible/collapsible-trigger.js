import { jsx as s } from "react/jsx-runtime";
import { forwardRef as l } from "react";
import * as m from "@radix-ui/react-collapsible";
import { combineClassNames as a } from "../../utils/combine-class-names.js";
import { baseReset as p } from "../../galaxy-styles/dist/tokens/reset.css.js";
const t = l(({ className: r, ...e }, o) => {
  const i = a(p, r);
  return /* @__PURE__ */ s(
    m.Trigger,
    {
      className: i,
      ref: o,
      ...e
    }
  );
});
t.displayName = "Collapsible.Trigger";
export {
  t as CollapsibleTrigger
};
