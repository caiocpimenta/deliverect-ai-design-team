"use client";
import { jsx as m } from "react/jsx-runtime";
import * as i from "react";
import { Command as o } from "cmdk";
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
import { Box as a } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as e } from "../../utils/combine-class-names.js";
import { commandInputWrapper as s, commandInput as n } from "../../galaxy-styles/dist/command/command.css.js";
import { inputField as f } from "../../galaxy-styles/dist/input/input-field.css.js";
import { baseReset as d } from "../../galaxy-styles/dist/tokens/reset.css.js";
const u = i.forwardRef(({ className: r, ...t }, p) => /* @__PURE__ */ m(a, { className: s, children: /* @__PURE__ */ m(
  o.Input,
  {
    ref: p,
    className: e(
      d,
      f({ status: "default", variant: "default" }),
      n,
      r
    ),
    ...t
  }
) }));
u.displayName = o.Input.displayName;
export {
  u as CommandInput
};
