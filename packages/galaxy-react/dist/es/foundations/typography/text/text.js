import { jsx as x } from "react/jsx-runtime";
import { forwardRef as l } from "react";
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
import { Box as N } from "../../layout/box/box.js";
import "../../layout/inline/inline.js";
import "../../layout/stack/stack.js";
import "../heading/heading.js";
import { combineClassNames as d } from "../../../utils/combine-class-names.js";
import { text as T } from "../../../galaxy-styles/dist/typography/text/text.css.js";
const b = l(
  ({
    size: o,
    weight: m,
    color: r,
    width: t,
    overflow: p,
    breakOnSpaces: i,
    align: e,
    children: s,
    as: f,
    className: n,
    ...a
  }, c) => /* @__PURE__ */ x(
    N,
    {
      component: f || "p",
      ...a,
      ref: c,
      className: d(
        T({
          size: o,
          weight: m,
          color: r,
          width: t,
          overflow: p,
          breakOnSpaces: i,
          align: e
        }),
        n
      ),
      children: s
    }
  )
);
b.displayName = "Text";
export {
  b as Text
};
