import { jsx as t } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import * as s from "@radix-ui/react-separator";
import { combineClassNames as p } from "../../utils/combine-class-names.js";
import { sidebarSeparator as i } from "../../galaxy-styles/dist/sidebar/sidebar-separator.css.js";
import { baseReset as f } from "../../galaxy-styles/dist/tokens/reset.css.js";
const S = m(
  ({ className: r, ...a }, o) => {
    const e = p(
      f,
      i,
      r
    );
    return /* @__PURE__ */ t(
      s.Root,
      {
        role: "separator",
        ...a,
        ref: o,
        className: e
      }
    );
  }
);
S.displayName = "Sidebar.Separator";
export {
  S as SidebarSeparator
};
