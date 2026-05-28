"use client";
import { jsx as e } from "react/jsx-runtime";
import { useBannerContext as s } from "./banner.context.js";
import { getBannerIconConfig as c } from "./banner-icon.util.js";
const a = (n) => {
  const { status: o } = s(), { color: r, Icon: t } = c(o);
  return /* @__PURE__ */ e(t, { size: "lg", color: r, ...n });
};
a.displayName = "Banner.Icon";
export {
  a as BannerIcon
};
