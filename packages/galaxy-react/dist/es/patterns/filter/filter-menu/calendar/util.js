import { TZDate as i } from "react-day-picker";
const c = "-", d = (e, n) => {
  const t = /* @__PURE__ */ new Date(), r = n ? new i(t.getFullYear(), t.getMonth(), t.getDate(), n) : t;
  switch (e) {
    case "range":
      return { from: r, to: r };
    case "multiple":
      return [r];
    case "single":
      return r;
  }
}, S = (e, n, t, r) => {
  switch (e) {
    case "range": {
      const o = n, s = a(o.from, t, r), g = a(o.to, t, r);
      return s === g ? s ?? c : `${s} - ${g}`;
    }
    case "multiple": {
      const o = n, s = o.length, g = a(o[0], t, r);
      return s > 1 ? `${g} + ${s - 1}` : `${g}`;
    }
    case "single":
      return a(n, t, r) ?? c;
  }
}, a = (e, n, t) => {
  if (e !== void 0)
    return e.toLocaleDateString(n == null ? void 0 : n.code, { timeZone: t });
}, f = (e, n, t, r) => {
  const o = a(e, t, r), s = a(n, t, r);
  return `${o},${s}`;
};
export {
  f as generateCalendarSelectionId,
  a as getDateString,
  d as getDefaultSelection,
  S as getSelectedLabel
};
