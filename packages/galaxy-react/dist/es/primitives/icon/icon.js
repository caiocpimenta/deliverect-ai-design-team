import { jsx as e } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import "../avatar/avatar-fallback.js";
import "../avatar/avatar-image.js";
import "../avatar/avatar-root.js";
import "../button/button.js";
import "../card/card.js";
import "../checkbox/checkbox.js";
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
import { Box as c } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as a } from "../../utils/combine-class-names.js";
import { icon as f } from "../../galaxy-styles/dist/icon/icon.css.js";
const d = s(
  ({ children: o, className: m, size: r = "md", color: t, as: p, ...i }, n) => /* @__PURE__ */ e(
    c,
    {
      component: p ?? "span",
      ref: n,
      ...i,
      className: a(f({ size: r, color: t }), m),
      children: o
    }
  )
);
d.displayName = "Icon";
export {
  d as Icon
};
