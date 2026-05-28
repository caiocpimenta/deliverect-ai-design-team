"use client";
import { jsx as t } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import * as m from "@radix-ui/react-toast";
import { combineClassNames as i } from "../../../utils/combine-class-names.js";
import { messageToastViewport as p } from "../../../galaxy-styles/dist/toast/message-toast.css.js";
import { baseReset as f } from "../../../galaxy-styles/dist/tokens/reset.css.js";
const w = a(({ className: s, ...o }, e) => {
  const r = i(
    f,
    p,
    s
  );
  return /* @__PURE__ */ t(
    m.ToastViewport,
    {
      ref: e,
      className: r,
      ...o
    }
  );
});
w.displayName = "MessageToast.Viewport";
export {
  w as MessageToastViewport
};
