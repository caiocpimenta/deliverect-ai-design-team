"use client";
import { jsx as s } from "react/jsx-runtime";
import * as e from "react";
import { Command as m } from "cmdk";
import { combineClassNames as t } from "../../utils/combine-class-names.js";
import { command as i } from "../../galaxy-styles/dist/command/command.css.js";
import { baseReset as p } from "../../galaxy-styles/dist/tokens/reset.css.js";
const f = e.forwardRef(({ className: o, ...a }, r) => /* @__PURE__ */ s(
  m,
  {
    ref: r,
    className: t(p, i, o),
    ...a
  }
));
f.displayName = m.displayName;
export {
  f as Command
};
