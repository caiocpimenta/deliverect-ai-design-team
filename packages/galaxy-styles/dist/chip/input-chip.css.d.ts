import { RecipeVariants } from "@vanilla-extract/recipes";
/**
 * Styles for the "dismiss" button of the input chip (if applicable).
 * This is temporary - we should use an IconButton instead.
 * TODO https://deliverect.atlassian.net/browse/DLV-1123
 */
export declare const inputChipDismissButton: import("@vanilla-extract/recipes").RuntimeFn<{
    disabled: {
        false: {
            ":hover": {
                backgroundColor: `var(--${string})`;
            };
        };
    };
}>;
/**
 * Styles for the "dismiss" icon of the input chip.
 */
export declare const inputChipDismissIcon: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        sm: import("@vanilla-extract/css").StyleRule;
        md: import("@vanilla-extract/css").StyleRule;
        lg: import("@vanilla-extract/css").StyleRule;
    };
    disabled: {
        true: import("@vanilla-extract/css").StyleRule;
    };
}>;
/**
 * Styles for the left-hand side icon of the input chip.
 */
export declare const inputChipIcon: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        readonly sm: import("@vanilla-extract/css").StyleRule;
        readonly md: import("@vanilla-extract/css").StyleRule;
        readonly lg: import("@vanilla-extract/css").StyleRule;
    };
    disabled: {
        readonly true: import("@vanilla-extract/css").StyleRule;
        readonly false: import("@vanilla-extract/css").StyleRule;
    };
}>;
/**
 * Styles for the actual input chip.
 */
export declare const inputChip: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        readonly sm: import("@vanilla-extract/css").StyleRule;
        readonly md: import("@vanilla-extract/css").StyleRule;
        readonly lg: import("@vanilla-extract/css").StyleRule;
    };
    icon: {
        readonly true: {};
        readonly false: {};
    };
    disabled: {
        false: import("@vanilla-extract/css").StyleRule;
        true: import("@vanilla-extract/css").StyleRule;
    };
    dismissable: {
        true: {};
        false: {};
    };
}>;
export type InputChipVariants = NonNullable<RecipeVariants<typeof inputChip>>;
