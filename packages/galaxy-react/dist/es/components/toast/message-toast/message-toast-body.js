"use client";
import { jsx as p } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import "../../../primitives/avatar/avatar-fallback.js";
import "../../../primitives/avatar/avatar-image.js";
import "../../../primitives/avatar/avatar-root.js";
import "../../../primitives/button/button.js";
import "../../../primitives/card/card.js";
import "../../../primitives/checkbox/checkbox.js";
import "../../../primitives/icon/icon.js";
import "../../../primitives/illustration/illustration.js";
import "../../../primitives/input/input-description.js";
import "../../../primitives/input/input-error.js";
import "../../../primitives/input/input-field.js";
import "../../../primitives/input/input-group.js";
import "../../../primitives/input/input-label.js";
import "../../../primitives/input/input-left-addon.js";
import "../../../primitives/input/input-right-addon.js";
import "../../../primitives/input/input-root.js";
import "../../../primitives/link/link.js";
import "../../../primitives/loading-spinner/loading-spinner.js";
import "../../../primitives/logo/logo.js";
import "../../../primitives/progress-tracker/progress-tracker.js";
import "../../../primitives/title-input/title-input.js";
import "../../../primitives/toggle/toggle.js";
import { Box as e } from "../../../foundations/layout/box/box.js";
import "../../../foundations/layout/inline/inline.js";
import "../../../foundations/layout/stack/stack.js";
import "../../../foundations/typography/heading/heading.js";
import "../../../foundations/typography/text/text.js";
import { combineClassNames as a } from "../../../utils/combine-class-names.js";
import { messageToastBody as f } from "../../../galaxy-styles/dist/toast/message-toast.css.js";
const d = s(
  ({ children: o, className: m, ...r }, t) => {
    const i = a(m, f);
    return /* @__PURE__ */ p(e, { className: i, ref: t, ...r, children: o });
  }
);
d.displayName = "MessageToast.Body";
export {
  d as MessageToastBody
};
