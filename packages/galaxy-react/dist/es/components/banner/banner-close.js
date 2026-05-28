"use client";
import { jsx as o } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import i from "../../assets/icons/cross.svg.js";
import { Button as m } from "../../primitives/button/button.js";
import { useBannerContext as f } from "./banner.context.js";
import { getButtonStatus as l } from "./util.js";
const c = a(
  (r, n) => {
    const { status: s, setIsShown: t } = f(), e = () => {
      t && t(!1);
    };
    return /* @__PURE__ */ o(
      m,
      {
        size: "sm",
        status: l(s),
        onClick: () => e(),
        variant: "transparent",
        Icon: /* @__PURE__ */ o(i, { width: 20, color: "black" }),
        ...r,
        ref: n,
        "data-testid": "banner-close-button"
      }
    );
  }
);
c.displayName = "Banner.Close";
export {
  c as BannerClose
};
