import { jsx as o } from "react/jsx-runtime";
import * as t from "@radix-ui/react-tooltip";
import { combineClassNames as n } from "../../utils/combine-class-names.js";
import { tooltip as p } from "../../galaxy-styles/dist/tooltip/tooltip.css.js";
import { baseReset as a } from "../../galaxy-styles/dist/tokens/reset.css.js";
const l = ({
  children: e,
  className: s,
  size: i,
  ...r
}) => {
  const m = n(
    a,
    p({ size: i }),
    s
  );
  return /* @__PURE__ */ o(t.Portal, { children: /* @__PURE__ */ o(
    t.Content,
    {
      sideOffset: 6,
      side: "top",
      align: "center",
      ...r,
      className: m,
      children: e
    }
  ) });
};
l.displayName = "Tooltip.Content";
export {
  l as TooltipContent
};
