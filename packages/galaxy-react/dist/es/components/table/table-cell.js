"use client";
import { jsx as a } from "react/jsx-runtime";
import { forwardRef as n } from "react";
import { assignInlineVars as c } from "@vanilla-extract/dynamic";
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
import { Box as f } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as C } from "../../utils/combine-class-names.js";
import { tableCell as b, minWidthVar as d } from "../../galaxy-styles/dist/table/table-cell.css.js";
const N = n(
  (o, m) => {
    const {
      as: r = "td",
      minWidth: t,
      className: i,
      align: p,
      sticky: e,
      ...l
    } = o, s = C(
      b({ align: p, sticky: e }),
      i
    );
    return /* @__PURE__ */ a(
      f,
      {
        component: r,
        ...l,
        className: s,
        ref: m,
        style: c({
          [d]: t
        })
      }
    );
  }
);
N.displayName = "Table.Cell";
export {
  N as TableCell
};
