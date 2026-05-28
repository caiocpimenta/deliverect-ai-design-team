"use client";
import { jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useImperativeHandle as c } from "react";
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
import { Box as n } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as f } from "../../utils/combine-class-names.js";
import { useScrollCallbackRef as d } from "../../utils/dialog/use-scroll-callback-ref.js";
import { useDialogScrollContext as u } from "../../utils/dialog/scroll-context.js";
import { modalBody as C } from "../../galaxy-styles/dist/modal/modal-body.css.js";
const b = s(
  ({ children: r, className: t, ...m }, i) => {
    const p = f(C, t), { setScrollDataAttributes: e } = u(), [l, o] = d(e);
    return c(
      i,
      () => o.current,
      [o]
    ), /* @__PURE__ */ a(
      n,
      {
        ...m,
        ref: l,
        className: p,
        children: r
      }
    );
  }
);
b.displayName = "Modal.Body";
export {
  b as ModalBody
};
