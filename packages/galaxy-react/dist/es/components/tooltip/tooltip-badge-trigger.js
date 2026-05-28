import { jsx as r } from "react/jsx-runtime";
import { forwardRef as i } from "react";
import * as t from "@radix-ui/react-tooltip";
import { Badge as g } from "../badge/badge.js";
const m = i(
  (o, e) => /* @__PURE__ */ r(t.Trigger, { asChild: !0, ref: e, children: /* @__PURE__ */ r(g, { ...o }) })
);
m.displayName = "Tooltip.BadgeTrigger";
export {
  m as TooltipBadgeTrigger
};
