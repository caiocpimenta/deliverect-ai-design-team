"use client";
import { jsx as o, jsxs as e } from "react/jsx-runtime";
import * as p from "@radix-ui/react-popover";
import { combineClassNames as c } from "../../../utils/combine-class-names.js";
import { CommandEmpty as d } from "../../command/command-empty.js";
import { CommandInput as f } from "../../command/command-input.js";
import { CommandList as u } from "../../command/command-list.js";
import { Command as C } from "../../command/command-root.js";
import { selectContent as h } from "../../../galaxy-styles/dist/select/select.css.js";
import { baseReset as x } from "../../../galaxy-styles/dist/tokens/reset.css.js";
const E = ({
  isSearchable: r,
  placeholder: t,
  onInputChange: m,
  contentEmpty: n,
  position: s = "bottom",
  align: i = "center",
  children: a
}) => /* @__PURE__ */ o(
  p.Content,
  {
    asChild: !0,
    className: c(x, h),
    side: s,
    align: i,
    children: /* @__PURE__ */ e(C, { shouldFilter: !1, children: [
      r && /* @__PURE__ */ o(
        f,
        {
          placeholder: t,
          onInput: (l) => m(l.currentTarget.value),
          role: "textbox"
        }
      ),
      /* @__PURE__ */ e(u, { children: [
        /* @__PURE__ */ o(d, { children: n }),
        a
      ] })
    ] })
  }
);
export {
  E as default
};
