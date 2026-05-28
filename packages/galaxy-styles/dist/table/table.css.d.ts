import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const tableWrapper: import("@vanilla-extract/recipes").RuntimeFn<{
    width: {
        auto: import("@vanilla-extract/css").StyleRule;
        full: {};
    };
}>;
export type TableWrapperVariants = NonNullable<RecipeVariants<typeof tableWrapper>>;
export declare const table: string;
