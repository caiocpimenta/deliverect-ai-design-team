import { default as React, ReactNode } from 'react';
import { SelectionChipVariants } from '@deliverect/galaxy-styles';
import { BoxProps } from '../../../foundations';
import { PolymorphicComponentPropWithRef } from '../../../types/polymorphic';
type UsableSelectionChipVariants = Omit<SelectionChipVariants, "icon">;
export type SelectionChipProps<C extends React.ElementType = "button"> = PolymorphicComponentPropWithRef<C, UsableSelectionChipVariants & BoxProps & {
    /**
     * Whether or not the chip is disabled. This will change the visuals of the chip.
     */
    disabled?: boolean;
    /**
     * Optional icon displayed to the left of the children.
     */
    Icon?: ReactNode;
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
type SelectionChipComponent = (<C extends React.ElementType = "button">(props: SelectionChipProps<C>) => React.ReactNode) & {
    displayName?: string;
};
/**
 * Selection chips use tags or descriptive words to filter content.
 * They can be a good alternative to segmented buttons or checkboxes when viewing a list or search results.
 */
export declare const SelectionChip: SelectionChipComponent;
export {};
