import { jsx as i } from "react/jsx-runtime";
import { forwardRef as p } from "react";
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
import "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import { Text as a } from "../../foundations/typography/text/text.js";
import { combineClassNames as e } from "../../utils/combine-class-names.js";
import { dataCardValue as f } from "../../galaxy-styles/dist/data-card/data-card.css.js";
const s = p(
  ({ children: r, className: m, ...o }, t) => /* @__PURE__ */ i(
    a,
    {
      ...o,
      className: e(f, m),
      ref: t,
      children: r
    }
  )
);
s.displayName = "DataCard.Value";
export {
  s as DataCardValue
};
