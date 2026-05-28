import { jsx as o } from "react/jsx-runtime";
import * as t from "@radix-ui/react-tooltip";
const m = ({
  children: r,
  skipDelayDuration: i,
  delayDuration: p = 350,
  disableHoverableContent: e,
  ...l
}) => /* @__PURE__ */ o(
  t.Provider,
  {
    skipDelayDuration: i,
    delayDuration: p,
    disableHoverableContent: e,
    children: /* @__PURE__ */ o(t.Root, { ...l, children: r })
  }
);
m.displayName = "Tooltip.Root";
export {
  m as TooltipRoot
};
