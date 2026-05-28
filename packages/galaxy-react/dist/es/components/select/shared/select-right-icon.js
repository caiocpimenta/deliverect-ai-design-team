"use client";
import { jsx as o } from "react/jsx-runtime";
import "../../../primitives/avatar/avatar-fallback.js";
import "../../../primitives/avatar/avatar-image.js";
import "../../../primitives/avatar/avatar-root.js";
import { Button as m } from "../../../primitives/button/button.js";
import "../../../primitives/card/card.js";
import "../../../primitives/checkbox/checkbox.js";
import { Icon as p } from "../../../primitives/icon/icon.js";
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
import { ChevronDirectionDown as n } from "../../../foundations/icons/chevron-direction-down.js";
import { Cross as e } from "../../../foundations/icons/cross.js";
import "../../../foundations/layout/box/box.js";
import "../../../foundations/layout/inline/inline.js";
import "../../../foundations/layout/stack/stack.js";
import "../../../foundations/typography/heading/heading.js";
import "../../../foundations/typography/text/text.js";
const J = ({
  isClearable: t,
  onClearClick: r
}) => t ? /* @__PURE__ */ o(
  m,
  {
    status: "neutral",
    variant: "ghost",
    type: "button",
    onClick: (i) => {
      i.stopPropagation(), r();
    },
    Icon: /* @__PURE__ */ o(e, {}),
    "aria-label": "Clear value",
    size: "sm",
    p: "none"
  }
) : /* @__PURE__ */ o(p, { color: "neutral", children: /* @__PURE__ */ o(n, {}) });
export {
  J as default
};
