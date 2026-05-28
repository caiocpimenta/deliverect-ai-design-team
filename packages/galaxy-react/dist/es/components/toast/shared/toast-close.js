"use client";
import { jsx as t } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import * as a from "@radix-ui/react-toast";
import "../../../primitives/avatar/avatar-fallback.js";
import "../../../primitives/avatar/avatar-image.js";
import "../../../primitives/avatar/avatar-root.js";
import { Button as e } from "../../../primitives/button/button.js";
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
import { Cross as l } from "../../../foundations/icons/cross.js";
import "../../../foundations/layout/box/box.js";
import "../../../foundations/layout/inline/inline.js";
import "../../../foundations/layout/stack/stack.js";
import "../../../foundations/typography/heading/heading.js";
import "../../../foundations/typography/text/text.js";
import { combineClassNames as n } from "../../../utils/combine-class-names.js";
import { useToastContext as f } from "./toast-context.js";
import { toastClose as C } from "../../../galaxy-styles/dist/toast/toast.css.js";
const c = p(
  ({ className: o, ...r }, m) => {
    const i = f(), s = n(
      C({ status: i.status }),
      o
    );
    return /* @__PURE__ */ t(a.ToastClose, { asChild: !0, ref: m, "data-testid": "toast-close", children: /* @__PURE__ */ t(
      e,
      {
        variant: "transparent",
        size: "xs",
        Icon: /* @__PURE__ */ t(l, { size: "lg", className: s }),
        ...r
      }
    ) });
  }
);
c.displayName = "Toast.Close";
export {
  c as ToastClose
};
