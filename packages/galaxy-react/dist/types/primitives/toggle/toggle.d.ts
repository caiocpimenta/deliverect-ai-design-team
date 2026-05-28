import * as ToggleUI from "@radix-ui/react-switch";
type ToggleSize = "sm" | "md" | "lg";
export type ToggleProps = {
    size?: ToggleSize;
    wrapperClassName?: string;
} & Omit<ToggleUI.SwitchProps, "asChild">;
/**
 * From a design perspective, the main difference between a toggle and a checkbox
 *  is that the toggle's action is immediate, while a checkbox would still require
 *  "saving" the result afterwards.
 *  @see https://www.radix-ui.com/primitives/docs/components/switch
 */
export declare const Toggle: import('react').ForwardRefExoticComponent<{
    size?: ToggleSize;
    wrapperClassName?: string;
} & Omit<ToggleUI.SwitchProps, "asChild"> & import('react').RefAttributes<HTMLButtonElement>>;
export {};
