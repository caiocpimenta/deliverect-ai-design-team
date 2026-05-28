import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsPrimitives } from "../layers.css";
import { sidebarActionButton, sidebarButton } from "./sidebar-button.css";
export const sidebarDropdownTrigger = style([
    dsPrimitives({
        ...sidebarButton,
        ...sidebarActionButton,
        selectors: {
            '[data-state="open"]&': {
                backgroundColor: vars.colors.fill.neutral.static.default,
                boxShadow: vars.shadows[1],
            },
        },
    }),
]);
