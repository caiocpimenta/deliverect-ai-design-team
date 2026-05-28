import { jsx as e } from "react/jsx-runtime";
import { forwardRef as t } from "react";
import * as s from "@radix-ui/react-avatar";
import { combineClassNames as f } from "../../utils/combine-class-names.js";
import { avatarImage as i } from "../../galaxy-styles/dist/avatar/avatar.css.js";
const p = t(
  ({ className: a, ...r }, m) => {
    const o = f(i, a);
    return /* @__PURE__ */ e(
      s.Image,
      {
        ...r,
        className: o,
        ref: m
      }
    );
  }
);
p.displayName = "Avatar.Image";
export {
  p as AvatarImage
};
