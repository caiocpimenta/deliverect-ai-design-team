import { jsx as p } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import "../avatar/avatar-fallback.js";
import "../avatar/avatar-image.js";
import "../avatar/avatar-root.js";
import "../button/button.js";
import "../card/card.js";
import "../checkbox/checkbox.js";
import "../icon/icon.js";
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
import { Box as a } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as e } from "../../utils/combine-class-names.js";
import { illustration as l } from "../../galaxy-styles/dist/illustration/illustration.css.js";
const f = s(
  ({ size: o, children: r, className: m, ...t }, i) => /* @__PURE__ */ p(
    a,
    {
      component: "div",
      role: "img",
      ref: i,
      ...t,
      className: e(l({ size: o }), m),
      children: r
    }
  )
);
f.displayName = "Illustration";
export {
  f as Illustration
};
