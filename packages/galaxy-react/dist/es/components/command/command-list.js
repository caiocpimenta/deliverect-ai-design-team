"use client";
import { jsx as r } from "react/jsx-runtime";
import * as t from "react";
import { Command as m } from "cmdk";
import { combineClassNames as i } from "../../utils/combine-class-names.js";
import { commandList as e } from "../../galaxy-styles/dist/command/command.css.js";
import { baseReset as p } from "../../galaxy-styles/dist/tokens/reset.css.js";
const f = t.forwardRef(({ className: o, ...s }, a) => /* @__PURE__ */ r(
  m.List,
  {
    ref: a,
    className: i(p, e, o),
    ...s
  }
));
f.displayName = m.List.displayName;
export {
  f as CommandList
};
