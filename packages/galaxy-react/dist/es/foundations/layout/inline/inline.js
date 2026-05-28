import { jsx as s } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import "../../../primitives/avatar/avatar-fallback.js";
import "../../../primitives/avatar/avatar-image.js";
import "../../../primitives/avatar/avatar-root.js";
import "../../../primitives/button/button.js";
import "../../../primitives/card/card.js";
import "../../../primitives/checkbox/checkbox.js";
import "../../../primitives/icon/icon.js";
import "../../../primitives/illustration/illustration.js";
import "../../../primitives/input/input-description.js";
import "../../../primitives/input/input-error.js";
import "../../../primitives/input/input-field.js";
import "../../../primitives/input/input-group.js";
import "../../../primitives/input/input-label.js";
import "../../../primitives/input/input-left-addon.js";
import "../../../primitives/input/input-right-addon.js";
import "../../../primitives/input/input-root.js";
import "../../../primitives/link/link.js";
import "../../../primitives/loading-spinner/loading-spinner.js";
import "../../../primitives/logo/logo.js";
import "../../../primitives/progress-tracker/progress-tracker.js";
import "../../../primitives/title-input/title-input.js";
import "../../../primitives/toggle/toggle.js";
import { Box as l } from "../box/box.js";
import "../stack/stack.js";
import "../../typography/heading/heading.js";
import "../../typography/text/text.js";
import { combineClassNames as c } from "../../../utils/combine-class-names.js";
import { inline as x } from "../../../galaxy-styles/dist/layout/inline/inline.css.js";
const N = a(
  ({
    children: r,
    className: o,
    width: m,
    space: i,
    alignX: t,
    alignY: p,
    wrap: e,
    ...n
  }, f) => /* @__PURE__ */ s(
    l,
    {
      ...n,
      ref: f,
      className: c(
        x({ width: m, space: i, alignX: t, alignY: p, wrap: e }),
        o
      ),
      children: r
    }
  )
);
N.displayName = "Inline";
export {
  N as Inline
};
