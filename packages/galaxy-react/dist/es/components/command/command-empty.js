"use client";
import { jsx as t } from "react/jsx-runtime";
import * as e from "react";
import { Command as m } from "cmdk";
import { combineClassNames as p } from "../../utils/combine-class-names.js";
import { commandEmpty as s } from "../../galaxy-styles/dist/command/command.css.js";
import { baseReset as i } from "../../galaxy-styles/dist/tokens/reset.css.js";
const f = e.forwardRef(({ className: o, ...a }, r) => /* @__PURE__ */ t(
  m.Empty,
  {
    ref: r,
    className: p(i, s, o),
    ...a
  }
));
f.displayName = m.Empty.displayName;
export {
  f as CommandEmpty
};
