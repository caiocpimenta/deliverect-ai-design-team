import { jsx as l } from "react/jsx-runtime";
import { useState as g } from "react";
import { MessageToastStateReadContext as y, MessageToastStateDispatchContext as D } from "./message-toast-state-context.js";
const $ = ({ children: n }) => {
  const [m, i] = g([]), x = (s) => (a, e) => {
    let d;
    typeof a == "string" ? d = {
      status: s,
      type: "simple",
      description: a,
      duration: e == null ? void 0 : e.duration,
      onDismiss: e == null ? void 0 : e.onDismiss
    } : d = {
      status: s,
      type: "custom",
      renderBody: a,
      duration: e == null ? void 0 : e.duration,
      onDismiss: e == null ? void 0 : e.onDismiss
    };
    const u = `${Date.now()}-${Math.random()}`, t = (e == null ? void 0 : e.id) ?? `toast-id-${u}`, f = `toast-key-${u}`, c = m.findIndex((r) => r.id === t);
    return c !== -1 ? (i((r) => [
      ...r.slice(0, c),
      { id: t, instanceKey: f, config: d },
      ...r.slice(c + 1)
    ]), t) : (i((r) => [...r, { id: t, instanceKey: f, config: d }]), t);
  }, T = (s) => {
    i((a) => a.filter((e) => e.id !== s));
  };
  return /* @__PURE__ */ l(y.Provider, { value: { toasts: m }, children: /* @__PURE__ */ l(
    D.Provider,
    {
      value: { createOrUpdateToast: x, dismissToast: T },
      children: n
    }
  ) });
};
export {
  $ as MessageToastStateProvider
};
