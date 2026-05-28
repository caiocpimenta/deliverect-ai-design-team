import { jsx as l } from "react/jsx-runtime";
import { forwardRef as t } from "react";
import * as s from "@radix-ui/react-avatar";
import { combineClassNames as c } from "../../utils/combine-class-names.js";
import { avatarFallback as e } from "../../galaxy-styles/dist/avatar/avatar.css.js";
const f = t(
  ({ className: a, ...r }, m) => {
    const o = c(e, a);
    return /* @__PURE__ */ l(
      s.Fallback,
      {
        ...r,
        className: o,
        ref: m
      }
    );
  }
);
f.displayName = "Avatar.Fallback";
export {
  f as AvatarFallback
};
