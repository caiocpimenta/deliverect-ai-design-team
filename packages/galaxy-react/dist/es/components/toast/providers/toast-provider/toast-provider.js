import { jsx as t } from "react/jsx-runtime";
import { MessageToastRenderer as e } from "../message-toast-provider/message-toast-renderer.js";
import { useMessageToastStateDispatchContext as r } from "../message-toast-provider/message-toast-state-context.js";
import { MessageToastStateProvider as o } from "../message-toast-provider/message-toast-state-context-provider.js";
const m = ({ children: s }) => /* @__PURE__ */ t(o, { children: /* @__PURE__ */ t(e, { children: s }) }), u = () => {
  const s = r();
  return {
    // MessageToast API
    success: s.success,
    info: s.info,
    warning: s.warning,
    critical: s.critical,
    neutral: s.neutral,
    dismiss: s.dismiss
    // ProgressToast API (uncomment when available)
    // successProgress: progressToast.success,
    // criticalProgress: progressToast.critical,
    // ...
  };
};
export {
  m as ToastProvider,
  u as useToast
};
