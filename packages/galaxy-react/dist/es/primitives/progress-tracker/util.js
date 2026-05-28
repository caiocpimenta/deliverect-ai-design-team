const o = (n, e) => {
  const t = n + 1;
  return t === e ? "in-progress" : t > e ? "empty" : "done";
};
export {
  o as getSectionStatus
};
