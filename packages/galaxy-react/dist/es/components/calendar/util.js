const f = (r) => {
  let n = /* @__PURE__ */ new Date();
  return r && (r instanceof Date ? n = r : Array.isArray(r) ? n = r[r.length - 1] : r.from && (n = r.from)), new Date(n.getFullYear(), n.getMonth());
};
export {
  f as getDefaultMonth
};
