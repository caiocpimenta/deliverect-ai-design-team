import { default as React, ReactNode } from 'react';
import { ButtonProps } from '../../primitives';
import * as RadioGroupUI from "@radix-ui/react-radio-group";
export type SegmentedControlItemProps<C extends React.ElementType> = Omit<RadioGroupUI.RadioGroupItemProps, "asChild"> & Omit<ButtonProps<C>, "as"> & {
    ActiveIcon?: ReactNode;
};
type SegmentedControlItemComponent = (<C extends React.ElementType = "button">(props: SegmentedControlItemProps<C>) => React.ReactNode) & {
    displayName?: string;
};
/**
 * The segmented control item can render a string or an icon.
 * This implementation uses `RadioGroupUI.Item` from `@radix-ui/react-radio-group`.
 * @see https://www.radix-ui.com/primitives/docs/components/radio-group#item
 */
export declare const SegmentedControlItem: SegmentedControlItemComponent;
export {};
