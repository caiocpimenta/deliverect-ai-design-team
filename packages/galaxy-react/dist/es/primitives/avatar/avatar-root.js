import { jsx as i } from "react/jsx-runtime";
import { forwardRef as n } from "react";
import * as p from "@radix-ui/react-avatar";
import { combineClassNames as c } from "../../utils/combine-class-names.js";
import { avatar as d } from "../../galaxy-styles/dist/avatar/avatar.css.js";
const l = n(
  ({
    children: o,
    className: r,
    size: a,
    variant: t,
    hasBorder: m = !1,
    ...e
  }, s) => {
    const f = m ? "around" : "none";
    return /* @__PURE__ */ i(
      p.Root,
      {
        ...e,
        className: c(d({ variant: t, size: a, border: f }), r),
        ref: s,
        children: o
      }
    );
  }
);
l.displayName = "Avatar.Root";
export {
  l as AvatarRoot
};
