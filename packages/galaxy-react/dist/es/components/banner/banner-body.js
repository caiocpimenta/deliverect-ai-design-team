import { jsx as m } from "react/jsx-runtime";
import { forwardRef as t } from "react";
import "../../foundations/layout/box/box.js";
import { Inline as e } from "../../foundations/layout/inline/inline.js";
import { Stack as i } from "../../foundations/layout/stack/stack.js";
const c = t(
  (o, n) => {
    const { direction: r = "column" } = o;
    return /* @__PURE__ */ m(r === "column" ? i : e, { ...o, ref: n });
  }
);
c.displayName = "Banner.Body";
export {
  c as BannerBody
};
