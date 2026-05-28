"use client";
import { jsx as r } from "react/jsx-runtime";
import * as t from "react";
import { Command as m } from "cmdk";
import { combineClassNames as s } from "../../utils/combine-class-names.js";
import { commandItem as i } from "../../galaxy-styles/dist/command/command.css.js";
import { baseReset as p } from "../../galaxy-styles/dist/tokens/reset.css.js";
const f = t.forwardRef(({ className: o, ...e }, a) => /* @__PURE__ */ r(
  m.Item,
  {
    ref: a,
    className: s(p, i, o),
    ...e
  }
));
f.displayName = m.Item.displayName;
export {
  f as CommandItem
};
