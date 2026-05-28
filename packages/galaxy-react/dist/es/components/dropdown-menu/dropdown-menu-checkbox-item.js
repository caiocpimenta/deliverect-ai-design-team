"use client";
import { jsxs as s, jsx as o } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import * as i from "@radix-ui/react-dropdown-menu";
import "../../primitives/avatar/avatar-fallback.js";
import "../../primitives/avatar/avatar-image.js";
import "../../primitives/avatar/avatar-root.js";
import "../../primitives/button/button.js";
import "../../primitives/card/card.js";
import "../../primitives/checkbox/checkbox.js";
import { Icon as h } from "../../primitives/icon/icon.js";
import "../../primitives/illustration/illustration.js";
import "../../primitives/input/input-description.js";
import "../../primitives/input/input-error.js";
import "../../primitives/input/input-field.js";
import "../../primitives/input/input-group.js";
import "../../primitives/input/input-label.js";
import "../../primitives/input/input-left-addon.js";
import "../../primitives/input/input-right-addon.js";
import "../../primitives/input/input-root.js";
import "../../primitives/link/link.js";
import "../../primitives/loading-spinner/loading-spinner.js";
import "../../primitives/logo/logo.js";
import "../../primitives/progress-tracker/progress-tracker.js";
import "../../primitives/title-input/title-input.js";
import "../../primitives/toggle/toggle.js";
import { Check as l } from "../../foundations/icons/check.js";
import { Subtract as u } from "../../foundations/icons/subtract.js";
import { Box as x } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as e } from "../../utils/combine-class-names.js";
import { dropdownMenuCheckboxItem as b, dropdownMenuCheckbox as C } from "../../galaxy-styles/dist/dropdown-menu/dropdown-menu-checkbox-item.css.js";
import { baseReset as I } from "../../galaxy-styles/dist/tokens/reset.css.js";
import { checkbox as k } from "../../galaxy-styles/dist/checkbox/checkbox.css.js";
const w = f(({ children: p, className: n, onSelect: m, ...r }, c) => {
  const d = e(
    I,
    b,
    n
  ), a = (t) => {
    t.preventDefault(), m == null || m(t);
  };
  return /* @__PURE__ */ s(
    i.DropdownMenuCheckboxItem,
    {
      ...r,
      onSelect: a,
      className: d,
      ref: c,
      children: [
        /* @__PURE__ */ o(x, { className: e(k(), C), children: /* @__PURE__ */ o(i.ItemIndicator, { asChild: !0, children: /* @__PURE__ */ o(h, { children: (r == null ? void 0 : r.checked) === "indeterminate" ? /* @__PURE__ */ o(u, { size: "lg" }) : /* @__PURE__ */ o(l, { size: "lg" }) }) }) }),
        p
      ]
    }
  );
});
w.displayName = "DropdownMenu.CheckboxItem";
export {
  w as DropdownMenuCheckboxItem
};
