import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const minWidthVar: `var(--${string})`;
export declare const tableCell: import("@vanilla-extract/recipes").RuntimeFn<{
    align: {
        left: import("@vanilla-extract/css").StyleRule;
        center: import("@vanilla-extract/css").StyleRule;
        right: import("@vanilla-extract/css").StyleRule;
        justify: import("@vanilla-extract/css").StyleRule;
    };
    sticky: {
        true: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type TableCellVariants = NonNullable<RecipeVariants<typeof tableCell>>;
