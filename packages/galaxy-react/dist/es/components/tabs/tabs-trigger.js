import { jsx as g } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import * as l from "@radix-ui/react-tabs";
import { combineClassNames as p } from "../../utils/combine-class-names.js";
import { tabsTrigger as b } from "../../galaxy-styles/dist/tabs/tabs-trigger.css.js";
import { baseReset as T } from "../../galaxy-styles/dist/tokens/reset.css.js";
const c = f(
  (r, s) => {
    const { className: e, children: a, value: i, disabled: m, ...o } = r, t = p(T, b, e);
    return /* @__PURE__ */ g(
      l.Trigger,
      {
        asChild: !1,
        disabled: m,
        value: i,
        className: t,
        ref: s,
        ...o,
        children: a
      }
    );
  }
);
c.displayName = "Tabs.Trigger";
export {
  c as TabsTrigger
};
