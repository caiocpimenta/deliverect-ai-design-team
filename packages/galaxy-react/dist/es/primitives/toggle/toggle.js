import { jsx as o } from "react/jsx-runtime";
import { forwardRef as g } from "react";
import * as r from "@radix-ui/react-switch";
import { Box as p } from "../../foundations/layout/box/box.js";
import { combineClassNames as e } from "../../utils/combine-class-names.js";
import { toggleThumb as i, toggle as f, toggleWrapper as c } from "../../galaxy-styles/dist/toggle/toggle.css.js";
import { baseReset as n } from "../../galaxy-styles/dist/tokens/reset.css.js";
const N = g(
  ({ className: s, wrapperClassName: t, size: m = "sm", ...a }, l) => (
    // Wrap inside in a relatively positioned box to avoid issues with the `input` element added by Radix in forms
    /* @__PURE__ */ o(p, { className: e(c, t), children: /* @__PURE__ */ o(
      r.Root,
      {
        ...a,
        className: e(n, f({ size: m }), s),
        ref: l,
        children: /* @__PURE__ */ o(r.Thumb, { className: i({ size: m }) })
      }
    ) })
  )
);
N.displayName = "Toggle";
export {
  N as Toggle
};
