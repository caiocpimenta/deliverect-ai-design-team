import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const calendarNav: string;
export declare const calendarMonth: string;
export declare const calendarDay: string;
export declare const calendarDayButton: import("@vanilla-extract/recipes").RuntimeFn<{
    type: {
        readonly standalone: {};
        readonly rangeStart: import("@vanilla-extract/css").StyleRule;
        readonly rangeMiddle: import("@vanilla-extract/css").StyleRule;
        readonly rangeEnd: import("@vanilla-extract/css").StyleRule;
    };
}>;
export declare const calendarMonthCaption: string;
export declare const calendarMonths: string;
export declare const calendarMonthGrid: string;
export declare const calendar: string;
export type CalendarDayButtonVariants = NonNullable<RecipeVariants<typeof calendarDayButton>>;
