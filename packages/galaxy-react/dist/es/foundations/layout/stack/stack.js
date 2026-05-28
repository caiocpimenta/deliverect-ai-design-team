import { jsx as f } from "react/jsx-runtime";
import { forwardRef as s } from "react";
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
import { Box as c } from "../box/box.js";
import "../inline/inline.js";
import "../../typography/heading/heading.js";
import "../../typography/text/text.js";
import { combineClassNames as l } from "../../../utils/combine-class-names.js";
import { stack as n } from "../../../galaxy-styles/dist/layout/stack/stack.css.js";
const k = s(
  ({
    children: o,
    className: r,
    space: m = "none",
    alignX: t,
    alignY: i,
    height: p = "full",
    ...a
  }, e) => /* @__PURE__ */ f(
    c,
    {
      ...a,
      ref: e,
      className: l(
        n({ space: m, alignX: t, alignY: i, height: p }),
        r
      ),
      children: o
    }
  )
);
k.displayName = "Stack";
export {
  k as Stack
};
