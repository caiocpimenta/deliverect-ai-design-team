"use client";
import { jsx as r, jsxs as c } from "react/jsx-runtime";
import { forwardRef as R, useId as G } from "react";
import * as b from "@radix-ui/react-radio-group";
import { Box as h } from "../../foundations/layout/box/box.js";
import "../../primitives/avatar/avatar-fallback.js";
import "../../primitives/avatar/avatar-image.js";
import "../../primitives/avatar/avatar-root.js";
import "../../primitives/button/button.js";
import "../../primitives/card/card.js";
import "../../primitives/checkbox/checkbox.js";
import "../../primitives/icon/icon.js";
import "../../primitives/illustration/illustration.js";
import "../../primitives/input/input-description.js";
import "../../primitives/input/input-error.js";
import "../../primitives/input/input-field.js";
import "../../primitives/input/input-group.js";
import { InputLabel as x } from "../../primitives/input/input-label.js";
import "../../primitives/input/input-left-addon.js";
import "../../primitives/input/input-right-addon.js";
import "../../primitives/input/input-root.js";
import "../../primitives/link/link.js";
import "../../primitives/loading-spinner/loading-spinner.js";
import "../../primitives/logo/logo.js";
import "../../primitives/progress-tracker/progress-tracker.js";
import "../../primitives/title-input/title-input.js";
import "../../primitives/toggle/toggle.js";
import { combineClassNames as p } from "../../utils/combine-class-names.js";
import { RadioGroupContextProvider as I } from "./radio-group-context.js";
import { radioGroupRoot as N, radioGroupWrapper as v } from "../../galaxy-styles/dist/radio-group/radio-group.css.js";
import { elementResets as C, baseReset as j } from "../../galaxy-styles/dist/tokens/reset.css.js";
const y = R(
  ({
    children: e,
    className: a,
    wrapperClassName: s,
    required: t = !1,
    orientation: d = void 0,
    size: l = "sm",
    label: i = !1,
    ...n
  }, f) => {
    const o = G(), m = `${o}-label`, u = p(
      j,
      C.button,
      N({ orientation: d }),
      a
    );
    return /* @__PURE__ */ r(
      I,
      {
        value: {
          size: l
        },
        children: /* @__PURE__ */ r(h, { className: p(v, s), children: /* @__PURE__ */ c(
          b.Root,
          {
            id: o,
            "aria-labelledby": m,
            ...n,
            required: t,
            className: u,
            ref: f,
            children: [
              !!i && /* @__PURE__ */ r(x, { required: t, htmlFor: o, id: m, children: i }),
              e
            ]
          }
        ) })
      }
    );
  }
);
y.displayName = "RadioGroup.Root";
export {
  y as RadioGroupRoot
};
