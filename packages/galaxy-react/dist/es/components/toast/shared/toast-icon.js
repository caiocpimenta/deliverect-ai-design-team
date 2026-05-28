"use client";
import { jsx as r } from "react/jsx-runtime";
import { forwardRef as e } from "react";
import "../../../primitives/avatar/avatar-fallback.js";
import "../../../primitives/avatar/avatar-image.js";
import "../../../primitives/avatar/avatar-root.js";
import "../../../primitives/button/button.js";
import "../../../primitives/card/card.js";
import "../../../primitives/checkbox/checkbox.js";
import { Icon as c } from "../../../primitives/icon/icon.js";
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
import { combineClassNames as u } from "../../../utils/combine-class-names.js";
import { useToastContext as f } from "./toast-context.js";
import { getToastIconForStatus as I } from "./toast-icon.util.js";
import { toastIcon as l } from "../../../galaxy-styles/dist/toast/toast.css.js";
const d = e(
  ({ StatusIconOverride: m, className: i, wrapperClassName: t, ...s }, p) => {
    const o = f(), a = u(
      l({ status: o.status }),
      i
    ), n = I(o.status);
    return /* @__PURE__ */ r(
      c,
      {
        size: "lg",
        "aria-hidden": !0,
        "data-testid": "toast-icon",
        ref: p,
        ...s,
        ...!!t && { className: t },
        children: /* @__PURE__ */ r(m ?? n, { className: a })
      }
    );
  }
);
d.displayName = "Toast.Icon";
export {
  d as ToastIcon
};
