import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const radioGroupItem: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        sm: import("@vanilla-extract/css").StyleRule;
        md: import("@vanilla-extract/css").StyleRule;
        lg: import("@vanilla-extract/css").StyleRule;
    };
    standalone: {
        true: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type RadioGroupItemVariants = NonNullable<RecipeVariants<typeof radioGroupItem>>;
export declare const labelHover: string;
