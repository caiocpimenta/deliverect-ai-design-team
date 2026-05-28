import { createContext as e, useContext as s } from "react";
const a = e(null), o = e(null), n = () => {
  const t = s(a);
  if (!t)
    throw new Error(
      "`useMessageToastStateReadContext` must be used within `MessageToastStateDispatchContext.Provider`"
    );
  return {
    toasts: t.toasts
  };
}, c = () => {
  const t = s(o);
  if (!t)
    throw new Error(
      "`useMessageToastStateDispatchContext` must be used within `MessageToastDispatchContext.Provider`"
    );
  return {
    success: t.createOrUpdateToast("success"),
    info: t.createOrUpdateToast("info"),
    warning: t.createOrUpdateToast("warning"),
    critical: t.createOrUpdateToast("critical"),
    neutral: t.createOrUpdateToast("neutral"),
    dismiss: t.dismissToast
  };
};
export {
  o as MessageToastStateDispatchContext,
  a as MessageToastStateReadContext,
  c as useMessageToastStateDispatchContext,
  n as useMessageToastStateReadContext
};
