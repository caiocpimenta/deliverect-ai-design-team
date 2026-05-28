"use client";
import { jsx as y } from "react/jsx-runtime";
import { forwardRef as N } from "react";
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
import { Box as C } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as F } from "../../utils/combine-class-names.js";
import { useInputRootContext as h } from "./input-root.context.js";
import { inputField as q } from "../../galaxy-styles/dist/input/input-field.css.js";
const v = N(
  ({
    id: o,
    className: t,
    status: m,
    variant: p,
    rows: i,
    required: e,
    resize: a,
    readOnly: s,
    disabled: n,
    "aria-describedby": d,
    "aria-invalid": u,
    ...l
  }, f) => {
    const r = h(), b = r != null && r.hasError ? "critical" : m, c = F(
      q({ status: b, variant: p, resize: a }),
      t
    ), I = (r == null ? void 0 : r.inputId) ?? o;
    return /* @__PURE__ */ y(
      C,
      {
        required: (r == null ? void 0 : r.required) || e,
        ...l,
        readOnly: s,
        disabled: n,
        className: c,
        id: I,
        "aria-describedby": (r == null ? void 0 : r.describedBy) ?? d,
        "aria-invalid": !!(r != null && r.hasError) || u,
        component: i ? "textarea" : "input",
        rows: i,
        ref: f
      }
    );
  }
);
v.displayName = "Input.Field";
export {
  v as InputField
};
