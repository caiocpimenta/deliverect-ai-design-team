import { jsx as m } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import "../avatar/avatar-fallback.js";
import "../avatar/avatar-image.js";
import "../avatar/avatar-root.js";
import "../button/button.js";
import "../card/card.js";
import "../checkbox/checkbox.js";
import "../icon/icon.js";
import "../illustration/illustration.js";
import "./input-description.js";
import "./input-field.js";
import "./input-group.js";
import "./input-label.js";
import "./input-left-addon.js";
import "./input-right-addon.js";
import "./input-root.js";
import "../link/link.js";
import "../loading-spinner/loading-spinner.js";
import "../logo/logo.js";
import "../progress-tracker/progress-tracker.js";
import "../title-input/title-input.js";
import "../toggle/toggle.js";
import "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import { Text as i } from "../../foundations/typography/text/text.js";
const n = p(
  ({ as: r, ...o }, t) => /* @__PURE__ */ m(
    i,
    {
      size: "sm",
      color: "critical",
      ...o,
      component: r ?? "span",
      ref: t
    }
  )
);
n.displayName = "Input.Error";
export {
  n as InputError
};
