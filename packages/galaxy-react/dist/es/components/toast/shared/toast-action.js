"use client";
import { jsx as o } from "react/jsx-runtime";
import { forwardRef as n } from "react";
import * as e from "@radix-ui/react-toast";
import "../../../primitives/avatar/avatar-fallback.js";
import "../../../primitives/avatar/avatar-image.js";
import "../../../primitives/avatar/avatar-root.js";
import { Button as c } from "../../../primitives/button/button.js";
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
import { combineClassNames as u } from "../../../utils/combine-class-names.js";
import { useToastContext as f } from "./toast-context.js";
import { toastAction as l } from "../../../galaxy-styles/dist/toast/toast.css.js";
const d = n(
  ({ altText: r, className: i, ...m }, s) => {
    const t = f(), p = u(
      l({ status: t.status }),
      i
    ), a = t.status === "success" ? "primary" : t.status;
    return /* @__PURE__ */ o(e.ToastAction, { altText: r, ref: s, asChild: !0, children: /* @__PURE__ */ o(
      c,
      {
        status: a,
        className: p,
        variant: "plain",
        size: "md",
        ...m
      }
    ) });
  }
);
d.displayName = "Toast.Action";
export {
  d as ToastAction
};
