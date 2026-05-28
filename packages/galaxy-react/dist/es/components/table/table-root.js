"use client";
import { jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useRef as d, useImperativeHandle as f } from "react";
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
import { Box as t } from "../../foundations/layout/box/box.js";
import "../../foundations/layout/inline/inline.js";
import "../../foundations/layout/stack/stack.js";
import "../../foundations/typography/heading/heading.js";
import "../../foundations/typography/text/text.js";
import { combineClassNames as u } from "../../utils/combine-class-names.js";
import { useScrolled as b } from "./use-scrolled.js";
import { tableWrapper as N, table as R } from "../../galaxy-styles/dist/table/table.css.js";
const x = n(
  ({ children: m, className: p, width: i, ...e }, l) => {
    const r = d(null), a = u(
      N({ width: i }),
      p
    );
    f(l, () => r.current, []);
    const [s, c] = b(r);
    return /* @__PURE__ */ o(
      t,
      {
        className: a,
        ref: r,
        ...e,
        ...s && { "data-scrolled-horizontally": !0 },
        ...c && { "data-scrolled-vertically": !0 },
        children: /* @__PURE__ */ o(t, { component: "table", className: R, children: m })
      }
    );
  }
);
x.displayName = "Table.Root";
export {
  x as TableRoot
};
