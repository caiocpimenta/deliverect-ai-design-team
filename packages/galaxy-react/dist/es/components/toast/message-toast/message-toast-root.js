"use client";
import { jsx as t } from "react/jsx-runtime";
import { forwardRef as f, useMemo as n } from "react";
import * as p from "@radix-ui/react-toast";
import { combineClassNames as l } from "../../../utils/combine-class-names.js";
import { ToastContext as c } from "../shared/toast-context.js";
import { messageToast as d } from "../../../galaxy-styles/dist/toast/message-toast.css.js";
import { baseReset as R } from "../../../galaxy-styles/dist/tokens/reset.css.js";
const T = f(
  ({ status: o, children: e, className: s, ...a }, r) => {
    const m = l(
      R,
      d({ status: o }),
      s
    ), i = n(() => ({ status: o }), [o]);
    return /* @__PURE__ */ t(
      p.Root,
      {
        ...a,
        className: m,
        ref: r,
        "data-testid": "message-toast-root",
        children: /* @__PURE__ */ t(c.Provider, { value: i, children: e })
      }
    );
  }
);
T.displayName = "MessageToast.Root";
export {
  T as MessageToastRoot
};
