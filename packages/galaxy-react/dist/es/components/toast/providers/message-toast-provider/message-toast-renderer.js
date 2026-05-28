import { jsxs as s, Fragment as n, jsx as e } from "react/jsx-runtime";
import "../../shared/toast-action.js";
import { ToastClose as m } from "../../shared/toast-close.js";
import { ToastDescription as a } from "../../shared/toast-description.js";
import { ToastIcon as c } from "../../shared/toast-icon.js";
import { MessageToastBody as p } from "../../message-toast/message-toast-body.js";
import { MessageToastRoot as f } from "../../message-toast/message-toast-root.js";
import "../../message-toast/message-toast-title.js";
import { MessageToastProvider as d } from "../../message-toast/message-toast-provider.js";
import { MessageToastViewport as g } from "../../message-toast/message-toast-viewport.js";
import { useMessageToastStateReadContext as T } from "./message-toast-state-context.js";
const l = (o) => /* @__PURE__ */ s(
  f,
  {
    status: o.config.status,
    duration: o.config.duration,
    onOpenChange: (r) => {
      var i, t;
      r === !1 && ((t = (i = o.config).onDismiss) == null || t.call(i));
    },
    children: [
      /* @__PURE__ */ e(c, {}),
      o.config.type === "custom" ? o.config.renderBody() : /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e(a, { children: o.config.description }) }),
      /* @__PURE__ */ e(m, {})
    ]
  },
  o.instanceKey
), w = ({ children: o }) => {
  const { toasts: r } = T();
  return /* @__PURE__ */ s(n, { children: [
    /* @__PURE__ */ s(d, { children: [
      r.map(l),
      /* @__PURE__ */ e(g, {})
    ] }),
    o
  ] });
};
export {
  w as MessageToastRenderer
};
