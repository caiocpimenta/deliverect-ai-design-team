import { jsxs as f, jsx as i } from "react/jsx-runtime";
import { forwardRef as l } from "react";
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
import "../loading-spinner/loading-spinner.js";
import "../logo/logo.js";
import "../progress-tracker/progress-tracker.js";
import "../title-input/title-input.js";
import "../toggle/toggle.js";
import { Box as r } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as h } from "../../utils/combine-class-names.js";
import { link as k } from "../../galaxy-styles/dist/link/link.css.js";
const x = l(
  ({
    children: t,
    size: p,
    LeadingIcon: o,
    TrailingIcon: m,
    className: e,
    as: n,
    ...s
  }, a) => {
    const c = n ?? "a", d = h(k({ size: p }), e);
    return /* @__PURE__ */ f(
      r,
      {
        component: c,
        ...s,
        className: d,
        ref: a,
        children: [
          !!o && /* @__PURE__ */ i(r, { component: "span", "aria-hidden": !0, children: o }),
          t,
          !!m && /* @__PURE__ */ i(r, { component: "span", "aria-hidden": !0, children: m })
        ]
      }
    );
  }
);
x.displayName = "Link";
export {
  x as Link
};
