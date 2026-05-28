import { jsx as i } from "react/jsx-runtime";
import { forwardRef as e } from "react";
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
import { Box as l } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as a } from "../../utils/combine-class-names.js";
import { dropdownMenuScrollable as n } from "../../galaxy-styles/dist/dropdown-menu/dropdown-menu.css.js";
const s = e(({ children: o, className: r, ...m }, p) => {
  const t = a(
    n,
    r
  );
  return /* @__PURE__ */ i(l, { ...m, className: t, ref: p, children: o });
});
s.displayName = "DropdownMenu.Scrollable";
export {
  s as DropdownMenuScrollable
};
