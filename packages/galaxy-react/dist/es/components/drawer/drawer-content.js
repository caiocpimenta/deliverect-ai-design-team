"use client";
import { jsx as r, jsxs as h } from "react/jsx-runtime";
import { forwardRef as T, useState as g, useRef as x, useEffect as E, Fragment as L } from "react";
import * as a from "@radix-ui/react-dialog";
import { combineClassNames as m } from "../../utils/combine-class-names.js";
import { DialogScrollContextProvider as U } from "../../utils/dialog/scroll-context.js";
import { DEFAULT_SCROLL_DATA_ATTRIBUTES as _ } from "../../utils/dialog/scroll-data-attributes.js";
import { NoServerSideRendering as j } from "../../utils/no-server-side-rendering.js";
import { drawerOverlay as F, drawerContent as I } from "../../galaxy-styles/dist/drawer/drawer-content.css.js";
import { baseReset as i } from "../../galaxy-styles/dist/tokens/reset.css.js";
const O = T(
  ({
    className: c,
    overlay: d = !1,
    overlayClassName: f,
    width: p = "auto",
    height: u = "full",
    placement: w = "right",
    scope: e = "window",
    dismissOnOutsideClick: C = !0,
    onPointerDownOutside: t,
    children: S,
    ...N
  }, R) => {
    const v = m(
      i,
      F({ scope: e }),
      f
    ), y = m(
      i,
      I({ width: p, height: u, placement: w, scope: e }),
      c
    ), A = (l) => {
      C || l.preventDefault(), t == null || t(l);
    }, [o, D] = g(_), n = x(null);
    E(() => {
      n.current = document.body;
    }, []);
    const s = e === "window", b = s ? a.Portal : L;
    return /* @__PURE__ */ r(j, { children: /* @__PURE__ */ h(b, { ...s && { container: n.current }, children: [
      d && /* @__PURE__ */ r(
        a.Overlay,
        {
          className: v,
          "data-testid": "drawer-overlay"
        }
      ),
      /* @__PURE__ */ r(
        a.Content,
        {
          ...N,
          ...o,
          className: y,
          ref: R,
          onPointerDownOutside: A,
          children: /* @__PURE__ */ r(
            U,
            {
              scrollDataAttributes: o,
              setScrollDataAttributes: D,
              children: S
            }
          )
        }
      )
    ] }) });
  }
);
O.displayName = "Drawer.Content";
export {
  O as DrawerContent
};
