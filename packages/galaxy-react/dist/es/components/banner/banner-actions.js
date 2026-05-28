import { jsx as s } from "react/jsx-runtime";
import { forwardRef as t } from "react";
import { combineClassNames as a } from "../../utils/combine-class-names.js";
import "../../foundations/layout/box/box.js";
import { Inline as e } from "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import { bannerActions as i } from "../../galaxy-styles/dist/banner/banner.css.js";
const p = t(
  ({ className: o, ...r }, m) => {
    const n = a(o, i);
    return /* @__PURE__ */ s(
      e,
      {
        space: "sm",
        width: "auto",
        ...r,
        className: n,
        ref: m
      }
    );
  }
);
p.displayName = "Banner.Actions";
export {
  p as BannerActions
};
