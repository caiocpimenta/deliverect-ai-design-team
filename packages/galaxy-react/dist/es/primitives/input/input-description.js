import { jsx as p } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import "../avatar/avatar-fallback.js";
import "../avatar/avatar-image.js";
import "../avatar/avatar-root.js";
import "../button/button.js";
import "../card/card.js";
import "../checkbox/checkbox.js";
import "../icon/icon.js";
import "../illustration/illustration.js";
import "./input-error.js";
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
const n = m(
  ({ as: o, ...r }, t) => /* @__PURE__ */ p(
    i,
    {
      size: "sm",
      color: "secondary",
      ...r,
      component: o ?? "span",
      ref: t
    }
  )
);
n.displayName = "Input.Description";
export {
  n as InputDescription
};
