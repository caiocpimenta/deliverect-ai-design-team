import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const segmentedControlItem: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        md: import("@vanilla-extract/css").StyleRule;
        lg: import("@vanilla-extract/css").StyleRule;
    };
}>;
export type SegmentedControlItemVariants = NonNullable<RecipeVariants<typeof segmentedControlItem>>;
export declare const childPointerEventsNone: string;
