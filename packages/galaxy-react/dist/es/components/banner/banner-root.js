"use client";
import { jsx as e } from "react/jsx-runtime";
import { forwardRef as f, useState as p } from "react";
import { Box as c } from "../../foundations/layout/box/box.js";
import { Inline as u } from "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import { combineClassNames as d } from "../../utils/combine-class-names.js";
import { BannerProvider as B } from "./banner.context.js";
import { banner as h } from "../../galaxy-styles/dist/banner/banner.css.js";
const w = f(
  ({ status: r, isShown: o = !0, className: n, children: t, ...a }, m) => {
    const [s, i] = p(!!o), l = d(h({ status: r }), n);
    return s ? /* @__PURE__ */ e(c, { ...a, className: l, ref: m, children: /* @__PURE__ */ e(
      B,
      {
        status: r,
        isShown: o,
        setIsShown: i,
        children: /* @__PURE__ */ e(u, { alignX: "spaceBetween", alignY: "top", space: "xs", children: t })
      }
    ) }) : null;
  }
);
w.displayName = "Banner.Root";
export {
  w as BannerRoot
};
