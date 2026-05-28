import { jsxs as h, jsx as p } from "react/jsx-runtime";
import { forwardRef as b } from "react";
import "../avatar/avatar-fallback.js";
import "../avatar/avatar-image.js";
import "../avatar/avatar-root.js";
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
import "../logo/logo.js";
import "../progress-tracker/progress-tracker.js";
import "../title-input/title-input.js";
import "../toggle/toggle.js";
import { Box as d } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as w } from "../../utils/combine-class-names.js";
import { getIconVariant as x } from "./getIconVariant.js";
import { buttonIcon as i, button as B } from "../../galaxy-styles/dist/button/button.css.js";
const j = b(
  ({
    status: s,
    variant: e,
    size: n,
    children: m,
    Icon: o,
    LeadingIcon: t,
    TrailingIcon: r,
    className: a,
    as: f,
    ...c
  }, u) => {
    const l = f ?? "button";
    if (o && (t || r || m))
      throw new Error(
        "Button error: don't set LeadingIcon, TrailingIcon or children when using Icon"
      );
    const N = x({
      TrailingIcon: r,
      LeadingIcon: t,
      Icon: o,
      children: m
    });
    return /* @__PURE__ */ h(
      d,
      {
        component: l,
        className: w(
          B({ status: s, variant: e, size: n, icon: N }),
          a
        ),
        ...c,
        ref: u,
        children: [
          o && /* @__PURE__ */ p("span", { className: i, children: o }),
          t && /* @__PURE__ */ p("span", { className: i, children: t }),
          m,
          r && /* @__PURE__ */ p("span", { className: i, children: r })
        ]
      }
    );
  }
);
j.displayName = "Button";
export {
  j as Button
};
