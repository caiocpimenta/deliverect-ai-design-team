const t = (e, c) => {
  const n = !!(c != null && c.some(
    ({ isActive: o }) => o
  ));
  return e || n;
};
export {
  t as getIsOpen
};
