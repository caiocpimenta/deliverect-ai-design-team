import { vars } from "../tokens";
/** Common style for the Sidebar buttons. */
export const sidebarButton = {
    padding: vars.spacing["075"],
    borderRadius: vars.border.radius["100"],
    backgroundColor: vars.colors.fill.neutral.interactive.bold.default,
};
/** Common style for the action Sidebar buttons. */
export const sidebarActionButton = {
    color: vars.colors.icon.neutral.interactive.bold.default,
    ":focus-visible": {
        color: vars.colors.icon.neutral.interactive.bold.active,
        backgroundColor: vars.colors.fill.neutral.interactive.bold.hover,
    },
    ":hover": {
        color: vars.colors.icon.neutral.interactive.bold.hover,
        backgroundColor: vars.colors.fill.neutral.interactive.bold.hover,
    },
    ":active": {
        color: vars.colors.icon.neutral.interactive.bold.active,
        backgroundColor: vars.colors.fill.neutral.interactive.bold.active,
    },
};
