import { style } from "@vanilla-extract/css";
import { vars } from "../tokens";
import { dsComponents, dsPrimitives } from "../layers.css";
export const modalOverlay = style([
    dsPrimitives({
        backgroundColor: vars.colors.surface.neutral.overlay,
        position: "fixed",
        inset: 0,
        zIndex: vars.zIndexes.modal.overlay,
    }),
]);
export const modalContent = style([
    dsComponents({
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        minWidth: "400px",
        maxWidth: "1020px",
        maxHeight: "800px",
        overflowY: "visible",
        zIndex: vars.zIndexes.modal.content,
        boxShadow: vars.shadows[2],
        borderRadius: vars.border.radius["100"],
        backgroundColor: vars.colors.surface.neutral.default,
        border: `${vars.border.width[1]} solid ${vars.colors.border.neutral.default.default}`,
    }),
]);
