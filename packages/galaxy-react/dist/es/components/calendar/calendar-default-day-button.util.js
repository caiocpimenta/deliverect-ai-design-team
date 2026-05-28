const t = (n) => n.range_start && n.range_end ? "standalone" : n.range_start ? "rangeStart" : n.range_middle ? "rangeMiddle" : n.range_end ? "rangeEnd" : "standalone", a = (n) => n ? "filled" : "transparent";
export {
  t as getDayButtonTypeVariant,
  a as getDayButtonVariant
};
