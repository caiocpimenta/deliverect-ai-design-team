import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const collapsibleContent: import("@vanilla-extract/recipes").RuntimeFn<{
    animated: {
        true: import("@vanilla-extract/css").StyleRule;
        false: {};
    };
}>;
export type CollapsibleContentVariants = NonNullable<RecipeVariants<typeof collapsibleContent>>;
