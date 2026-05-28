import { createGlobalTheme } from "@vanilla-extract/css";
import { animationDurations, animationFunctions } from "./animations";
import { borderRadius, borderWidth } from "./border";
import { colors } from "./colors";
import { shadows } from "./shadows";
import { sizing } from "./sizing";
import { spacing } from "./spacing";
import { fontSize, fontWeight, lineHeight } from "./typography";
export const vars = createGlobalTheme(":root", {
    colors,
    border: {
        radius: borderRadius,
        width: borderWidth,
    },
    animations: {
        duration: animationDurations,
        function: animationFunctions,
    },
    spacing,
    sizing,
    font: {
        size: fontSize,
        weight: fontWeight,
        lineHeight: lineHeight,
    },
    shadows,
    zIndexes: {
        table: {
            stickyColumn: "1",
            stickyRow: "2",
        },
        actionPanel: {
            content: "88",
        },
        drawer: {
            overlay: "89",
            content: "90",
        },
        modal: {
            overlay: "99",
            content: "100",
        },
        header: "80",
        floatingPanel: "105",
        toastViewport: "9999",
    },
});
