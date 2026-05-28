import { StyleRule } from "@vanilla-extract/css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const badge: import("@vanilla-extract/recipes").RuntimeFn<{
    /** Status of the badge, affects the colour pattern */
    status: {
        neutral: StyleRule;
        success: StyleRule;
        critical: StyleRule;
        info: StyleRule;
        warning: StyleRule;
        magic: StyleRule;
        decorative: StyleRule;
    };
    size: {
        readonly sm: StyleRule;
        readonly md: StyleRule;
        readonly lg: StyleRule;
    };
}>;
export declare const darkBadge: import("@vanilla-extract/recipes").RuntimeFn<{
    /** Status of the badge, affects the colour pattern */
    status: {
        neutral: StyleRule;
        success: StyleRule;
        critical: StyleRule;
        info: StyleRule;
        warning: StyleRule;
        magic: StyleRule;
        decorative: StyleRule;
    };
    size: {
        readonly sm: StyleRule;
        readonly md: StyleRule;
        readonly lg: StyleRule;
    };
}>;
export type BadgeVariants = RecipeVariants<typeof badge>;
export declare const lightBadgeIcon: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        neutral: StyleRule;
        success: StyleRule;
        critical: StyleRule;
        info: StyleRule;
        warning: StyleRule;
        magic: StyleRule;
        decorative: StyleRule;
    };
}>;
export declare const darkBadgeIcon: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        neutral: {};
        success: {};
        critical: {};
        info: {};
        warning: StyleRule;
        magic: {};
        decorative: StyleRule;
    };
}>;
export type BadgeIconVariants = RecipeVariants<typeof lightBadgeIcon>;
