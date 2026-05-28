import { default as React, ReactNode } from 'react';
import { ActionChipVariants } from '@deliverect/galaxy-styles';
import { BoxProps } from '../../../foundations';
import { PolymorphicComponentPropWithRef } from '../../../types/polymorphic';
type UsableActionChipVariants = Omit<ActionChipVariants, "leadingIcon" | "trailingIcon">;
export type ActionChipProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, UsableActionChipVariants & BoxProps & {
    /**
     * Whether or not the chip is disabled. This will change the visuals of the chip.
     */
    disabled?: boolean;
    /**
     * Optional icon displayed to the left of the children.
     */
    LeadingIcon?: ReactNode;
    /**
     * Optional icon displayed to the right of the children
     */
    TrailingIcon?: ReactNode;
    /**
     * Callback that gets called when the chip gets clicked.
     */
    onClick: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    /**
     * Required children. This is the label that will be shown in the badge.
     * Note: This accepts a ReactNode type to allow for complex text values, but it's
     * not designed to pass more complex components to it. Use at your own discretion.
     */
    children: ReactNode;
}>;
type ActionChipComponent = (<C extends React.ElementType = "button">(props: ActionChipProps<C>) => React.ReactNode) & {
    displayName?: string;
};
/**
 * An `ActionChip` can be used to help users make selection and trigger actions.
 */
export declare const ActionChip: ActionChipComponent;
export {};
