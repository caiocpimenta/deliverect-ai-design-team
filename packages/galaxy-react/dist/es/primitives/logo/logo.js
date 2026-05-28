import { jsx as a } from "react/jsx-runtime";
import { forwardRef as e } from "react";
import "../avatar/avatar-fallback.js";
import "../avatar/avatar-image.js";
import "../avatar/avatar-root.js";
import "../button/button.js";
import "../card/card.js";
import "../checkbox/checkbox.js";
import "../icon/icon.js";
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
import "../progress-tracker/progress-tracker.js";
import "../title-input/title-input.js";
import "../toggle/toggle.js";
import { Box as s } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as f } from "../../utils/combine-class-names.js";
import { logo as n } from "../../galaxy-styles/dist/logo/logo.css.js";
const l = e(
  ({ children: o, className: r, size: m = "lg", color: p = "primary", ...t }, i) => /* @__PURE__ */ a(
    s,
    {
      component: "span",
      ref: i,
      ...t,
      className: f(n({ size: m, color: p }), r),
      children: o
    }
  )
);
l.displayName = "Logo";
export {
  l as Logo
};
