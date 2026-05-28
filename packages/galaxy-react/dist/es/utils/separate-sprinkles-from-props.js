import { sprinkles as n } from "../galaxy-styles/dist/tokens/sprinkles.css.js";
const i = (e) => {
  const s = {}, o = {};
  for (const r in e)
    n.properties.has(r) ? s[r] = e[r] : o[r] = e[r];
  return { sprinkleProps: s, nativeProps: o };
};
export {
  i as separateSprinklesFromProps
};
