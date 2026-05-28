import { jsx as i } from "react/jsx-runtime";
import { forwardRef as n } from "react";
import "../avatar/avatar-fallback.js";
import "../avatar/avatar-image.js";
import "../avatar/avatar-root.js";
import "../button/button.js";
import "../card/card.js";
import "../checkbox/checkbox.js";
import "../icon/icon.js";
import "../illustration/illustration.js";
import "./input-description.js";
import "./input-error.js";
import "./input-field.js";
import "./input-group.js";
import "./input-label.js";
import "./input-left-addon.js";
import "./input-root.js";
import "../link/link.js";
import "../loading-spinner/loading-spinner.js";
import "../logo/logo.js";
import "../progress-tracker/progress-tracker.js";
import "../title-input/title-input.js";
import "../toggle/toggle.js";
import { Box as d } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
const e = n(
  ({ children: o, className: t, as: r, ...m }, p) => /* @__PURE__ */ i(d, { component: r ?? "div", className: t, ...m, ref: p, children: o })
);
e.displayName = "Input.RightAddon";
export {
  e as InputRightAddon
};
