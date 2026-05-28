import { default as React, ReactNode } from 'react';
import { InputChipVariants } from '@deliverect/galaxy-styles';
import { BoxProps } from '../../../foundations';
import { PolymorphicComponentPropWithRef } from '../../../types/polymorphic';
type UsableInputChipVariants = Omit<InputChipVariants, "icon" | "dismissable">;
export type InputChipProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, UsableInputChipVariants & BoxProps & {
    /**
     * Whether or not the chip is disabled. This will change the visuals of the chip.
     * Even if `onDismiss` is defined, a disabled input chip cannot be dimissed/closed.
     */
    disabled?: boolean;
    /**
     * Optional icon on the left side of the input chip.
     */
    Icon?: ReactNode;
    /**
     * Optional callback that gets called when the chip gets dimissed/closed.
     * When defined, will cause a "close" icon to be rendered on the right side of the chip.
     */
    onDismiss?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * Event handler called when a pointer down event that targets the dismiss button is fired.
     * It can be prevented by calling `event.preventDefault`.
     * This event is called before the click event (i.e. where `onDismiss` is triggered).
     */
    onDismissPointerDown?: (event: React.PointerEvent<HTMLButtonElement>) => void;
    /**
     * Required children. This is the label that will be shown in the badge.
     * Note: This accepts a ReactNode type to allow for complex text values, but it's
     * not designed to pass more complex components to it. Use at your own discretion.
     */
    children: ReactNode;
}>;
type InputChipComponent = (<C extends React.ElementType = "span">(props: InputChipProps<C>) => React.ReactNode) & {
    displayName?: string;
};
/**
 * An `InputChip` can be used to indicate selected items from a selection or filter.
 *
 * These can be inside the field, underneath or standalone (depending on the pattern used).
 */
export declare const InputChip: InputChipComponent;
export {};
