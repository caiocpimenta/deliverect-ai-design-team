"use client";
import { jsxs as p, jsx as o } from "react/jsx-runtime";
import { forwardRef as C, useState as A } from "react";
import * as t from "@radix-ui/react-dialog";
import { combineClassNames as e } from "../../utils/combine-class-names.js";
import { DialogScrollContextProvider as N } from "../../utils/dialog/scroll-context.js";
import { DEFAULT_SCROLL_DATA_ATTRIBUTES as u } from "../../utils/dialog/scroll-data-attributes.js";
import { modalOverlay as D, modalContent as S } from "../../galaxy-styles/dist/modal/modal-content.css.js";
import { baseReset as a } from "../../galaxy-styles/dist/tokens/reset.css.js";
const T = C(
  ({ className: s, overlayClassName: l, children: m, ...n }, i) => {
    const c = e(
      a,
      D,
      l
    ), d = e(
      a,
      S,
      s
    ), [r, f] = A(u);
    return /* @__PURE__ */ p(t.Portal, { children: [
      /* @__PURE__ */ o(t.Overlay, { className: c }),
      /* @__PURE__ */ o(
        t.Content,
        {
          ...n,
          ...r,
          className: d,
          ref: i,
          children: /* @__PURE__ */ o(
            N,
            {
              scrollDataAttributes: r,
              setScrollDataAttributes: f,
              children: m
            }
          )
        }
      )
    ] });
  }
);
T.displayName = "Modal.Content";
export {
  T as ModalContent
};
