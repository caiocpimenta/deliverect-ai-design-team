"use client";
import { jsxs as c, jsx as r } from "react/jsx-runtime";
import { forwardRef as f, useId as u } from "react";
import * as p from "@radix-ui/react-radio-group";
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
import "../../primitives/input/input-label.js";
import "../../primitives/input/input-left-addon.js";
import "../../primitives/input/input-right-addon.js";
import "../../primitives/input/input-root.js";
import "../../primitives/link/link.js";
import "../../primitives/loading-spinner/loading-spinner.js";
import "../../primitives/logo/logo.js";
import "../../primitives/progress-tracker/progress-tracker.js";
import "../../primitives/title-input/title-input.js";
import "../../primitives/toggle/toggle.js";
import "../../foundations/layout/box/box.js";
import { Inline as I } from "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import { Text as G } from "../../foundations/typography/text/text.js";
import { combineClassNames as R } from "../../utils/combine-class-names.js";
import { useRadioGroupContext as N } from "./radio-group-context.js";
import { radioGroupItem as b, labelHover as x } from "../../galaxy-styles/dist/radio-group/radio-group-item.css.js";
import { elementResets as h, baseReset as z } from "../../galaxy-styles/dist/tokens/reset.css.js";
import { radioGroupIndicator as C } from "../../galaxy-styles/dist/radio-group/radio-group-indicator.css.js";
const j = f(
  ({ className: e, children: s, size: a, ...m }, n) => {
    const d = u(), t = m.id ?? d, o = N(), i = (o == null ? void 0 : o.size) ?? a, l = R(
      z,
      h.button,
      b({ size: i }),
      e
    );
    return /* @__PURE__ */ c(I, { children: [
      /* @__PURE__ */ r(
        p.Item,
        {
          ...m,
          id: t,
          className: l,
          ref: n,
          children: /* @__PURE__ */ r(p.Indicator, { className: C({ size: i }) })
        }
      ),
      /* @__PURE__ */ r(G, { as: "label", htmlFor: t, className: x, children: s })
    ] });
  }
);
j.displayName = "RadioGroup.Item";
export {
  j as RadioGroupItem
};
