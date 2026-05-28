"use client";
import { jsx as t } from "react/jsx-runtime";
import { forwardRef as c } from "react";
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
import "../logo/logo.js";
import "../title-input/title-input.js";
import "../toggle/toggle.js";
import "../../foundations/layout/box/box.js";
import { Inline as n } from "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as f } from "../../utils/combine-class-names.js";
import { ProgressTrackerSection as g } from "./progress-tracker-section.js";
import { getSectionStatus as l } from "./util.js";
import { progressTracker as k } from "../../galaxy-styles/dist/progress-tracker/progress-tracker.css.js";
const u = c(
  ({ className: m, currentStep: i, totalSteps: r, ...p }, e) => {
    const s = f(k, m);
    if (r <= 0)
      return null;
    const a = Array.from({ length: r }, (d, o) => /* @__PURE__ */ t(g, { status: l(o, i) }, o));
    return /* @__PURE__ */ t(
      n,
      {
        "data-testid": "progress-tracker",
        space: "sm",
        ...p,
        className: s,
        ref: e,
        children: a
      }
    );
  }
);
u.displayName = "ProgressTracker";
export {
  u as ProgressTracker
};
