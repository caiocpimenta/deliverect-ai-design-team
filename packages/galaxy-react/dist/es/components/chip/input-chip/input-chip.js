"use client";
import { jsxs as I, jsx as o } from "react/jsx-runtime";
import { forwardRef as x } from "react";
import "../../../primitives/avatar/avatar-fallback.js";
import "../../../primitives/avatar/avatar-image.js";
import "../../../primitives/avatar/avatar-root.js";
import { Button as B } from "../../../primitives/button/button.js";
import "../../../primitives/card/card.js";
import "../../../primitives/checkbox/checkbox.js";
import { Icon as g } from "../../../primitives/icon/icon.js";
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
import { Cross as D } from "../../../foundations/icons/cross.js";
import { Box as n } from "../../../foundations/layout/box/box.js";
import "../../../foundations/layout/inline/inline.js";
import "../../../foundations/layout/stack/stack.js";
import "../../../foundations/typography/heading/heading.js";
import "../../../foundations/typography/text/text.js";
import { combineClassNames as j } from "../../../utils/combine-class-names.js";
import { inputChip as w, inputChipIcon as P, inputChipDismissIcon as k, inputChipDismissButton as y } from "../../../galaxy-styles/dist/chip/input-chip.css.js";
const R = x(
  ({
    size: i,
    disabled: t = !1,
    onDismiss: p,
    onDismissPointerDown: s,
    children: a,
    className: c,
    Icon: m,
    as: e,
    ...u
  }, h) => {
    const C = e ?? "span", l = j(
      w({ size: i, disabled: t, icon: !!m, dismissable: !!p }),
      c
    ), f = P({ size: i, disabled: t }), N = k({ size: i, disabled: t }), d = y({ disabled: t });
    return /* @__PURE__ */ I(
      n,
      {
        component: C,
        className: l,
        ...u,
        ref: h,
        tabIndex: 0,
        children: [
          !!m && /* @__PURE__ */ o(n, { component: "span", className: f, "aria-hidden": !0, children: m }),
          a,
          !!p && /* @__PURE__ */ o(
            B,
            {
              variant: "ghost",
              status: "neutral",
              padding: "none",
              disabled: t,
              "data-testid": "input-chip-dismiss-button",
              className: d,
              onPointerDown: s,
              onClick: (r) => {
                r.stopPropagation(), p(r);
              },
              children: /* @__PURE__ */ o(g, { className: N, children: /* @__PURE__ */ o(D, {}) })
            }
          )
        ]
      }
    );
  }
);
R.displayName = "InputChip";
export {
  R as InputChip
};
