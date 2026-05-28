import { useRef as n, useCallback as u } from "react";
const b = 1, H = (r) => {
  const c = n(null), s = () => {
    const l = c == null ? void 0 : c.current, t = l == null ? void 0 : l.scrollTop;
    if (l && t !== void 0) {
      const e = l.scrollHeight !== l.clientHeight, o = t > 0, a = l.scrollHeight - l.offsetHeight, i = Math.abs(t - a) < b;
      r({
        "data-scrollable-vertically": e,
        "data-scrolled-vertically": o,
        "data-max-scrolled-vertically": i
      });
    }
  };
  return [u(
    (l) => {
      if (c.current !== null && c.current.removeEventListener("scroll", s), l !== null) {
        const t = l.scrollHeight !== l.clientHeight;
        r({
          "data-scrollable-vertically": t
        }), l.addEventListener("scroll", s);
      }
      c.current = l;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), c];
};
export {
  H as useScrollCallbackRef
};
