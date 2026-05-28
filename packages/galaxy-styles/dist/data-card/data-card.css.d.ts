import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const dataCardRoot: import("@vanilla-extract/recipes").RuntimeFn<{
    status: {
        neutral: import("@vanilla-extract/css").StyleRule;
        critical: import("@vanilla-extract/css").StyleRule;
    };
}>;
export declare const dataCardTitle: import("@vanilla-extract/recipes").RuntimeFn<{
    interactive: {
        true: import("@vanilla-extract/css").StyleRule;
        false: import("@vanilla-extract/css").StyleRule;
    };
}>;
export declare const dataCardValue: string;
export type DataCardVariants = NonNullable<RecipeVariants<typeof dataCardRoot>>;
