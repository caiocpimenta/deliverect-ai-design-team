import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const tableHeaderCell: import("@vanilla-extract/recipes").RuntimeFn<{
    noHover: {
        false: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type TableHeaderCellVariants = NonNullable<RecipeVariants<typeof tableHeaderCell>>;
