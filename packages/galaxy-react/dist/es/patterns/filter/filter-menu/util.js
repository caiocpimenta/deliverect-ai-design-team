const e = (i, o) => o === void 0 ? i : `${i}.${o}`, t = (i) => i.filter !== void 0, l = (i) => i.filterConfigs !== void 0;
export {
  l as isNestedFilterConfig,
  t as isSingleFilterConfig,
  e as resolveFilterKey
};
