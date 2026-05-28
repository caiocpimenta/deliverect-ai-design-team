import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import * as l from "@radix-ui/react-dialog";
import "../../primitives/avatar/avatar-fallback.js";
import "../../primitives/avatar/avatar-image.js";
import "../../primitives/avatar/avatar-root.js";
import { Button as n } from "../../primitives/button/button.js";
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
import { Cross as d } from "../../foundations/icons/cross.js";
import "../../foundations/layout/box/box.js";
import { Inline as f } from "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as c } from "../../utils/combine-class-names.js";
import { modalHeader as u } from "../../galaxy-styles/dist/modal/modal-header.css.js";
import { baseReset as g } from "../../galaxy-styles/dist/tokens/reset.css.js";
const C = s(
  ({ children: o, className: t, showCloseButton: m = !0, ...i }, p) => {
    const e = c(
      g,
      u,
      t
    );
    return /* @__PURE__ */ a(
      f,
      {
        alignX: "spaceBetween",
        alignY: "center",
        space: "2xs",
        padding: "lg",
        ...i,
        ref: p,
        className: e,
        children: [
          o,
          m && /* @__PURE__ */ r(l.Close, { asChild: !0, children: /* @__PURE__ */ r(
            n,
            {
              variant: "transparent",
              status: "neutral",
              size: "sm",
              "data-testid": "modal-close-button",
              Icon: /* @__PURE__ */ r(d, { size: "lg" })
            }
          ) })
        ]
      }
    );
  }
);
C.displayName = "Modal.Header";
export {
  C as ModalHeader
};
