import * as CheckboxUI from "@radix-ui/react-checkbox";
type CheckboxSize = "sm" | "md" | "lg";
export type CheckboxProps = {
    size?: CheckboxSize;
    wrapperClassName?: string;
} & Omit<CheckboxUI.CheckboxProps, "asChild">;
/**
 * This implements a tri-state checkbox, where the checked value can be true, false and indeterminate.
 */
export declare const Checkbox: import('react').ForwardRefExoticComponent<{
    size?: CheckboxSize;
    wrapperClassName?: string;
} & Omit<CheckboxUI.CheckboxProps, "asChild"> & import('react').RefAttributes<HTMLButtonElement>>;
export {};
