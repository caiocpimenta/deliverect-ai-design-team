import { StyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const inline: import("@vanilla-extract/recipes").RuntimeFn<{
    width: {
        full: StyleRule;
        auto: StyleRule;
    };
    space: Record<"none" | "0" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "025" | "050" | "075" | "150" | "225" | "250" | "1000" | "1200" | "gutter", string>;
    alignX: {
        left: StyleRule;
        center: StyleRule;
        right: StyleRule;
        spaceBetween: StyleRule;
    };
    alignY: {
        center: StyleRule;
        top: StyleRule;
        bottom: StyleRule;
        stretch: StyleRule;
    };
    wrap: {
        true: StyleRule;
    };
}>;
export type InlineVariants = RecipeVariants<typeof inline>;
