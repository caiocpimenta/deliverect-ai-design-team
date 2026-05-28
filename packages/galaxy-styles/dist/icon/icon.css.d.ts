import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const icon: import("@vanilla-extract/recipes").RuntimeFn<{
    size: Record<"none" | "0" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "025" | "050" | "075" | "150" | "225" | "250" | "1000" | "1200", {
        gap: string;
        margin: string;
        padding: string;
    }>;
    color: {
        inherit: import("@vanilla-extract/css").StyleRule;
        primary: import("@vanilla-extract/css").StyleRule;
        neutral: import("@vanilla-extract/css").StyleRule;
        interactive: import("@vanilla-extract/css").StyleRule;
        critical: import("@vanilla-extract/css").StyleRule;
        warning: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type IconVariants = NonNullable<RecipeVariants<typeof icon>>;
