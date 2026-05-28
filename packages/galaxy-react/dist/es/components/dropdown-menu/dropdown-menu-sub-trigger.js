import { jsxs as o, jsx as i } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import * as d from "@radix-ui/react-dropdown-menu";
import "../../primitives/avatar/avatar-fallback.js";
import "../../primitives/avatar/avatar-image.js";
import "../../primitives/avatar/avatar-root.js";
import "../../primitives/button/button.js";
import "../../primitives/card/card.js";
import "../../primitives/checkbox/checkbox.js";
import { Icon as f } from "../../primitives/icon/icon.js";
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
import { ChevronDirectionRight as l } from "../../foundations/icons/chevron-direction-right.js";
import "../../foundations/layout/box/box.js";
import { Inline as g } from "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as u } from "../../utils/combine-class-names.js";
import { dropdownMenuItem as c } from "../../galaxy-styles/dist/dropdown-menu/dropdown-menu-item.css.js";
import { baseReset as b } from "../../galaxy-styles/dist/tokens/reset.css.js";
const w = a(({ children: m, status: t = "neutral", icon: r, className: p, ...e }, n) => {
  const s = u(
    b,
    c({ status: t, justifyContent: "between" }),
    p
  );
  return /* @__PURE__ */ o(
    d.SubTrigger,
    {
      ref: n,
      className: s,
      ...e,
      children: [
        /* @__PURE__ */ o(g, { alignX: "left", alignY: "center", space: "xs", children: [
          r !== void 0 && /* @__PURE__ */ i(f, { children: r }),
          m
        ] }),
        /* @__PURE__ */ i(l, { size: "lg" })
      ]
    }
  );
});
w.displayName = "DropdownMenu.SubTrigger";
export {
  w as DropdownMenuSubTrigger
};
