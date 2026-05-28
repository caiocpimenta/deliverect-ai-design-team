"use client";
import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import * as r from "@radix-ui/react-dropdown-menu";
import "../../primitives/avatar/avatar-fallback.js";
import "../../primitives/avatar/avatar-image.js";
import "../../primitives/avatar/avatar-root.js";
import "../../primitives/button/button.js";
import "../../primitives/card/card.js";
import "../../primitives/checkbox/checkbox.js";
import "../../primitives/icon/icon.js";
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
import { Check as a } from "../../foundations/icons/check.js";
import "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as d } from "../../utils/combine-class-names.js";
import { dropdownMenuRadioItem as l } from "../../galaxy-styles/dist/dropdown-menu/dropdown-menu-radio-item.css.js";
import { baseReset as c } from "../../galaxy-styles/dist/tokens/reset.css.js";
const f = s(({ children: m, className: t, ...i }, p) => {
  const e = d(
    c,
    l({ justify: "between" }),
    t
  );
  return /* @__PURE__ */ n(
    r.RadioItem,
    {
      ...i,
      className: e,
      ref: p,
      children: [
        m,
        /* @__PURE__ */ o(r.ItemIndicator, { children: /* @__PURE__ */ o(a, { size: "lg" }) })
      ]
    }
  );
});
f.displayName = "DropdownMenu.SingleSelectItem";
export {
  f as DropdownMenuSingleSelectItem
};
