"use client";
import { createContext as e, useContext as r } from "react";
const t = e({
  size: "sm"
}), i = t.Provider, s = () => {
  const o = r(t);
  if (!o)
    throw new Error("Please use this component inside a RadioGroup.Root component");
  return o;
};
export {
  i as RadioGroupContextProvider,
  s as useRadioGroupContext
};
