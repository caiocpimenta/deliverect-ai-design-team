import { jsx as f } from "react/jsx-runtime";
import { forwardRef as n } from "react";
import "../avatar/avatar-fallback.js";
import "../avatar/avatar-image.js";
import "../avatar/avatar-root.js";
import "../button/button.js";
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
import { Box as l } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as C } from "../../utils/combine-class-names.js";
import { card as N } from "../../galaxy-styles/dist/card/card.css.js";
const x = n(
  ({
    border: r,
    borderRadius: o,
    height: m,
    padding: t,
    children: i,
    className: p,
    as: a,
    ...s
  }, d) => {
    const e = a ?? "div", c = C(
      N({
        height: m,
        border: r
      }),
      p
    );
    return /* @__PURE__ */ f(
      l,
      {
        component: e,
        borderRadius: o ?? "150",
        padding: t ?? "200",
        ...s,
        className: c,
        ref: d,
        children: i
      }
    );
  }
);
x.displayName = "Card";
export {
  x as Card
};
