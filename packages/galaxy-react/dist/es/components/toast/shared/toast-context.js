"use client";
import { createContext as o, useContext as e } from "react";
const n = o(void 0), r = () => {
  const t = e(n);
  if (t === void 0)
    throw new Error("Please use this component inside a (...)Toast.Root component.");
  return t;
};
export {
  n as ToastContext,
  r as useToastContext
};
