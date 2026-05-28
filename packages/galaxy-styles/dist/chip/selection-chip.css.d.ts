import { RecipeVariants } from "@vanilla-extract/recipes";
/**
 * Styles for the left-hand side icon of selection chip.
 */
export declare const selectionChipIcon: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        readonly sm: import("@vanilla-extract/css").StyleRule;
        readonly md: import("@vanilla-extract/css").StyleRule;
        readonly lg: import("@vanilla-extract/css").StyleRule;
    };
    disabled: {
        readonly true: import("@vanilla-extract/css").StyleRule;
        readonly false: import("@vanilla-extract/css").StyleRule;
    };
    selected: {
        true: import("@vanilla-extract/css").StyleRule;
    };
}>;
/**
 * Styles for the actual selection chip.
 */
export declare const selectionChip: import("@vanilla-extract/recipes").RuntimeFn<{
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
    selected: {
        true: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type SelectionChipVariants = NonNullable<RecipeVariants<typeof selectionChip>>;
