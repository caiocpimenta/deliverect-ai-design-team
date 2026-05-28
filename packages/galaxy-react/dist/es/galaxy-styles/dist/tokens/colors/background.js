import { neutral as a, transparent as n } from "./foundation.js";
const t = {
  // Old tokens
  /** @deprecated */
  default: a[0],
  /** @deprecated */
  nav: a[50],
  // New tokens
  page: a[0],
  background: a[0],
  navigation1: a[50],
  navigation2: a[100],
  backdrop: n.neutral[300],
  inverse: a[1e3]
};
export {
  t as background
};
