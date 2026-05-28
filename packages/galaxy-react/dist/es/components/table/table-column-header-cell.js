import { jsx as m } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import { combineClassNames as t } from "../../utils/combine-class-names.js";
import { TableCell as f } from "./table-cell.js";
import { tableHeaderCell as p } from "../../galaxy-styles/dist/table/table-header-cell.css.js";
const C = s(({ noHover: e, className: l, ...o }, r) => {
  const a = t(
    p({ noHover: e }),
    l
  );
  return /* @__PURE__ */ m(
    f,
    {
      scope: "col",
      as: "th",
      ...o,
      className: a,
      ref: r
    }
  );
});
C.displayName = "Table.ColumnHeaderCell";
export {
  C as TableColumnHeaderCell
};
