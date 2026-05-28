import { jsx as o } from "react/jsx-runtime";
import { forwardRef as n } from "react";
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
import "../logo/logo.js";
import "../progress-tracker/progress-tracker.js";
import "../title-input/title-input.js";
import "../toggle/toggle.js";
import { Box as a } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { LoadingSpinnerAnimation as e } from "./loading-spinner-animation.js";
import { loadingSpinner as l } from "../../galaxy-styles/dist/loading-spinner/loading-spinner.css.js";
const d = n(
  ({ as: r, status: i, size: m, ...p }, t) => /* @__PURE__ */ o(
    a,
    {
      "aria-label": "loading",
      "aria-live": "polite",
      ...p,
      component: r ?? "span",
      ref: t,
      children: /* @__PURE__ */ o(
        e,
        {
          status: i,
          size: m,
          className: l
        }
      )
    }
  )
);
d.displayName = "LoadingSpinner";
export {
  d as LoadingSpinner
};
