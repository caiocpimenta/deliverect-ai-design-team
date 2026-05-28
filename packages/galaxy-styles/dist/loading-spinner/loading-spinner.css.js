import { keyframes, style } from "@vanilla-extract/css";
import { dsPrimitives } from "../layers.css";
const rotate = keyframes({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
});
export const loadingSpinner = style(dsPrimitives({
    animation: `${rotate} 0.75s linear infinite`,
}));
