import { forwardRef as i, createElement as n } from "react";
import { combineClassNames as l } from "../../../utils/combine-class-names.js";
import { separateSprinklesFromProps as c } from "../../../utils/separate-sprinkles-from-props.js";
import { elementResets as f, baseReset as N } from "../../../galaxy-styles/dist/tokens/reset.css.js";
import { sprinkles as R } from "../../../galaxy-styles/dist/tokens/sprinkles.css.js";
const d = i(
  ({ component: e = "div", className: s, ...r }, o) => {
    const { sprinkleProps: t, nativeProps: m } = c(r), a = f[e], p = l(
      s,
      N,
      a,
      R(t)
    );
    return n(e, { ...m, className: p, ref: o });
  }
);
d.displayName = "Box";
export {
  d as Box
};
