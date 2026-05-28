"use client";
import { createContext as o, useContext as e } from "react";
const t = o({
  describedBy: void 0,
  inputId: void 0,
  labelId: void 0,
  hasError: !1,
  required: !1
}), n = t.Provider, d = () => e(t);
export {
  n as InputRootContextProvider,
  d as useInputRootContext
};
