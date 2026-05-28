import { useState as t, useEffect as d } from "react";
const f = (l) => {
  const [o, s] = t(!1), [c, n] = t(!1);
  return d(() => {
    const e = l.current;
    if (!e)
      return () => {
      };
    const r = () => {
      s(e.scrollLeft > 0), n(e.scrollTop > 0);
    };
    return e.addEventListener("scroll", r), () => {
      e.removeEventListener("scroll", r);
    };
  }, [l]), [o, c];
};
export {
  f as useScrolled
};
