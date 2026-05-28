import { jsx as i } from "react/jsx-runtime";
import { createContext as l, useContext as c, useMemo as x } from "react";
const r = l(
  void 0
), v = ({
  scrollDataAttributes: o,
  setScrollDataAttributes: e,
  children: t
}) => {
  const n = x(
    () => ({ scrollDataAttributes: o, setScrollDataAttributes: e }),
    [o, e]
  );
  return /* @__PURE__ */ i(r.Provider, { value: n, children: t });
}, C = () => {
  const o = c(r);
  if (!o)
    throw new Error(
      "Make sure there is a `DialogScrollContextProvider` higher up in the tree."
    );
  return o;
};
export {
  v as DialogScrollContextProvider,
  C as useDialogScrollContext
};
