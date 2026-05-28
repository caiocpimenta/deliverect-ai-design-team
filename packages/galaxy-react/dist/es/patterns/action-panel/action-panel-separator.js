import { jsx as t } from "react/jsx-runtime";
import { forwardRef as e } from "react";
import * as i from "@radix-ui/react-separator";
import { combineClassNames as m } from "../../utils/combine-class-names.js";
import { actionPanelSeparator as n } from "../../galaxy-styles/dist/action-panel/action-panel-separator.css.js";
import { baseReset as s } from "../../galaxy-styles/dist/tokens/reset.css.js";
const p = e(({ className: a }, r) => {
  const o = m(
    s,
    n,
    a
  );
  return /* @__PURE__ */ t(
    i.Root,
    {
      className: o,
      decorative: !0,
      orientation: "vertical",
      ref: r,
      "data-testid": "action-panel-separator"
    }
  );
});
p.displayName = "ActionPanel.Separator";
export {
  p as ActionPanelSeparator
};
