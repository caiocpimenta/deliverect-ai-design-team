import { jsx as o } from "react/jsx-runtime";
import { forwardRef as l } from "react";
import * as i from "@radix-ui/react-checkbox";
import "../avatar/avatar-fallback.js";
import "../avatar/avatar-image.js";
import "../avatar/avatar-root.js";
import "../button/button.js";
import "../card/card.js";
import { Icon as s } from "../icon/icon.js";
import "../illustration/illustration.js";
import "../input/input-description.js";
import "../input/input-error.js";
import "../input/input-field.js";
import "../input/input-group.js";
import "../input/input-label.js";
import "../input/input-left-addon.js";
import "../input/input-right-addon.js";
import "../input/input-root.js";
import "../link/link.js";
import "../loading-spinner/loading-spinner.js";
import "../logo/logo.js";
import "../progress-tracker/progress-tracker.js";
import "../title-input/title-input.js";
import "../toggle/toggle.js";
import { Check as h } from "../../foundations/icons/check.js";
import { Subtract as f } from "../../foundations/icons/subtract.js";
import { Box as e } from "../../foundations/layout/box/box.js";
import { combineClassNames as c } from "../../utils/combine-class-names.js";
import { checkboxIcon as d, checkbox as b, checkboxWrapper as x } from "../../galaxy-styles/dist/checkbox/checkbox.css.js";
import { elementResets as k, baseReset as C } from "../../galaxy-styles/dist/tokens/reset.css.js";
const t = Object.freeze({
  sm: "lg",
  md: "xl",
  lg: "2xl"
}), I = l(
  ({ className: p, wrapperClassName: n, size: r = "sm", ...m }, a) => (
    // Wrap inside in a relatively positioned box to avoid issues with the `input` element added by Radix in forms
    /* @__PURE__ */ o(e, { className: c(x, n), children: /* @__PURE__ */ o(
      i.Root,
      {
        ...m,
        className: c(
          C,
          k.button,
          b({ size: r }),
          p
        ),
        ref: a,
        children: /* @__PURE__ */ o(s, { color: "inherit", size: t[r], children: /* @__PURE__ */ o(i.Indicator, { asChild: !0, children: /* @__PURE__ */ o(e, { component: "span", className: d, children: (m == null ? void 0 : m.checked) === "indeterminate" ? /* @__PURE__ */ o(f, { size: t[r] }) : /* @__PURE__ */ o(h, { size: t[r] }) }) }) })
      }
    ) })
  )
);
I.displayName = "Checkbox";
export {
  I as Checkbox
};
