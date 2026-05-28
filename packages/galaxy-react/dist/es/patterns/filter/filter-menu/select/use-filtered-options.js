import { useMemo as e } from "react";
import { matchSorter as m } from "match-sorter";
const l = (t, r) => t.length === 0 || !r ? t : m(t, r, { keys: ["label"] }), s = (t, r) => e(
  () => l(t, r),
  [t, r]
);
export {
  l as filterOptions,
  s as useFilteredOptions
};
