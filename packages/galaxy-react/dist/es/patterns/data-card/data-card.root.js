import { jsx as p } from "react/jsx-runtime";
import { forwardRef as a } from "react";
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
import { Stack as e } from "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as f } from "../../utils/combine-class-names.js";
import { dataCardRoot as s } from "../../galaxy-styles/dist/data-card/data-card.css.js";
const d = a(
  ({ status: o, className: r, children: t, ...m }, i) => /* @__PURE__ */ p(
    e,
    {
      height: "auto",
      ...m,
      className: f(s({ status: o }), r),
      ref: i,
      children: t
    }
  )
);
d.displayName = "DataCard.Root";
export {
  d as DataCardRoot
};
