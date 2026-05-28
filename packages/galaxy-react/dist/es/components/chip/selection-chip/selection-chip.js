import { jsxs as C, jsx as N } from "react/jsx-runtime";
import { forwardRef as x } from "react";
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
import { Box as m } from "../../../foundations/layout/box/box.js";
import "../../../foundations/layout/inline/inline.js";
import "../../../foundations/layout/stack/stack.js";
import "../../../foundations/typography/heading/heading.js";
import "../../../foundations/typography/text/text.js";
import { combineClassNames as d } from "../../../utils/combine-class-names.js";
import { selectionChip as u, selectionChipIcon as j } from "../../../galaxy-styles/dist/chip/selection-chip.css.js";
const S = x(
  ({
    size: i,
    disabled: t = !1,
    selected: r = !1,
    onClick: p,
    children: e,
    className: s,
    Icon: o,
    as: n,
    ...a
  }, c) => {
    const l = n ?? "button", f = d(
      u({ size: i, disabled: t, selected: r, icon: !!o }),
      s
    ), h = j({
      size: i,
      disabled: t,
      selected: r
    });
    return /* @__PURE__ */ C(
      m,
      {
        component: l,
        className: f,
        ref: c,
        onClick: p,
        ...a,
        children: [
          !!o && /* @__PURE__ */ N(m, { component: "span", className: h, "aria-hidden": !0, children: o }),
          e
        ]
      }
    );
  }
);
S.displayName = "SelectionChip";
export {
  S as SelectionChip
};
