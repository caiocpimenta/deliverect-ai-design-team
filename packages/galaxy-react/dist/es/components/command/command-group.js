"use client";
import { jsx as e } from "react/jsx-runtime";
import * as p from "react";
import { Command as m } from "cmdk";
import { combineClassNames as s } from "../../utils/combine-class-names.js";
import { commandGroup as t } from "../../galaxy-styles/dist/command/command.css.js";
import { baseReset as i } from "../../galaxy-styles/dist/tokens/reset.css.js";
const f = p.forwardRef(({ className: o, ...r }, a) => /* @__PURE__ */ e(
  m.Group,
  {
    ref: a,
    className: s(i, t, o),
    ...r
  }
));
f.displayName = m.Group.displayName;
export {
  f as CommandGroup
};
