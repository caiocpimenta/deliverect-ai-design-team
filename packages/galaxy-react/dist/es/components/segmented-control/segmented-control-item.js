"use client";
import { jsx as i } from "react/jsx-runtime";
import { forwardRef as C, useId as v } from "react";
import * as g from "@radix-ui/react-radio-group";
import "../../primitives/avatar/avatar-fallback.js";
import "../../primitives/avatar/avatar-image.js";
import "../../primitives/avatar/avatar-root.js";
import { Button as h } from "../../primitives/button/button.js";
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
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import { Text as N } from "../../foundations/typography/text/text.js";
import { combineClassNames as b } from "../../utils/combine-class-names.js";
import { useSegmentedControlContext as y } from "./segmented-control-context.js";
import { segmentedControlItem as R, childPointerEventsNone as z } from "../../galaxy-styles/dist/segmented-control/segmented-control-item.css.js";
import { elementResets as A, baseReset as S } from "../../galaxy-styles/dist/tokens/reset.css.js";
const V = C(
  ({
    className: r,
    children: n,
    size: s,
    display: a,
    ...t
  }, p) => {
    const l = v(), e = t.id ?? l, o = y(), c = (o == null ? void 0 : o.size) ?? s, m = (o == null ? void 0 : o.display) ?? a, d = b(
      S,
      A.button,
      R({ size: c }),
      r
    ), u = o.finalValue === t.value, f = m === "icon", I = u && t.ActiveIcon ? { Icon: t.ActiveIcon } : { Icon: t.Icon };
    return /* @__PURE__ */ i(g.Item, { asChild: !0, id: e, value: t.value, children: /* @__PURE__ */ i(
      h,
      {
        variant: "ghost",
        status: "neutral",
        ...t,
        ref: p,
        className: d,
        ...f && I,
        children: m === "string" && /* @__PURE__ */ i(N, { as: "label", htmlFor: e, className: z, children: n })
      }
    ) });
  }
);
V.displayName = "SegmentedControl.Item";
export {
  V as SegmentedControlItem
};
