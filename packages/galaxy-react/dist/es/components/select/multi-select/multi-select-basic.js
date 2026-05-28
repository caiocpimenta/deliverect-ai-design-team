"use client";
import { jsx as m, Fragment as x } from "react/jsx-runtime";
import { useState as y, useMemo as f } from "react";
import { MultiSelectItem as R } from "./multi-select-item.js";
import { MultiSelectRoot as b } from "./multi-select-root.js";
const L = ({
  selectedOptions: d,
  setSelectedOptions: S,
  onOptionsCleared: a,
  onOptionToggle: t,
  formatOption: h = (l) => l.label,
  ...v
}) => {
  const [l, M] = y([]), s = f(
    () => d ?? l,
    [d, l]
  ), u = f(
    () => S ?? M,
    [S]
  ), n = s.map(({ value: c }) => c), k = (c) => {
    const e = [...s, c];
    u(e), t == null || t(c, !0);
  }, i = (c) => {
    const e = s.filter((r) => r !== c);
    u(e), t == null || t(c, !1);
  };
  return /* @__PURE__ */ m(
    b,
    {
      ...v,
      selectedOptions: s,
      onOptionToggle: i,
      onOptionsCleared: () => {
        u([]), a == null || a();
      },
      children: (c) => /* @__PURE__ */ m(x, { children: c.map((e) => {
        const r = n.includes(e.value);
        return /* @__PURE__ */ m(
          R,
          {
            value: e.value,
            onSelect: () => {
              r ? i(e) : k(e);
            },
            children: h(e, r)
          },
          e.value
        );
      }) })
    }
  );
};
export {
  L as MultiSelectBasic
};
