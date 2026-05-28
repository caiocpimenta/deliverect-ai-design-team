import { background as r } from "./colors/background.js";
import { border as o } from "./colors/border.js";
import { data as m } from "./colors/data.js";
import { fill as t } from "./colors/fill.js";
import { primary as i, transparent as a, neutral as c, magic as f, decorative as n, warning as p, info as e, critical as s, success as d, marketing as l, brand as g } from "./colors/foundation.js";
import { icon as u } from "./colors/icon.js";
import { surface as b } from "./colors/surface.js";
import { text as k } from "./colors/text.js";
const A = {
  brand: g,
  marketing: l,
  success: d,
  critical: s,
  info: e,
  warning: p,
  decorative: n,
  magic: f,
  neutral: c,
  transparent: a,
  background: r,
  surface: b,
  fill: t,
  text: k,
  border: o,
  icon: u,
  data: m,
  /** @deprecated in favour of success or brand */
  primary: i
};
export {
  A as colors
};
