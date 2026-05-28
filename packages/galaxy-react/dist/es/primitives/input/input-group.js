import { jsx as u } from "react/jsx-runtime";
import { forwardRef as f } from "react";
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
import "./input-field.js";
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
import { Inline as c } from "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as l } from "../../utils/combine-class-names.js";
import { inputGroup as G } from "../../galaxy-styles/dist/input/input-field.css.js";
const N = f(
  ({
    className: r,
    status: o,
    variant: p,
    resize: m,
    readOnly: t,
    disabled: i,
    children: s,
    ...e
  }, a) => {
    const n = l(
      G({
        status: o,
        variant: p,
        resize: m,
        readOnly: t,
        disabled: i
      }),
      r
    );
    return /* @__PURE__ */ u(
      c,
      {
        space: "2xs",
        ...e,
        className: n,
        ref: a,
        children: s
      }
    );
  }
);
N.displayName = "Input.Group";
export {
  N as InputGroup
};
