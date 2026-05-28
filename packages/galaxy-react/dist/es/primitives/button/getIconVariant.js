const u = ({
  LeadingIcon: t,
  TrailingIcon: r,
  Icon: f,
  children: e
}) => {
  if (t && r)
    return "both";
  if (r && e)
    return "right";
  if (t && e)
    return "left";
  if (t || r || f)
    return "single";
};
export {
  u as getIconVariant
};
