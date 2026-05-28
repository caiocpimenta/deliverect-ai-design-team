import { ReactNode } from 'react';
import { StackProps } from '../../foundations/layout/stack';
import { PolymorphicComponentPropWithRef } from '../../types';
export type NavigationItemProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, Omit<StackProps, "children"> & {
    /** Label for the item. */
    label: string;
    /** The icon that is displayed by default. Use size `lg` to match the design. */
    Icon: ReactNode;
    /**
     * The icon that is displayed if the item is active.
     * Use size `lg` to match the design.
     * If no active icon is defined, the default icon will be used in both states.
     */
    ActiveIcon?: ReactNode;
    /** Indicates if the item is open. Only applicable to items that contain subitems. */
    isOpen?: boolean;
    /** Indicates if the item is currently selected/active. */
    isActive?: boolean;
    /** Trailing components, like badges. */
    trailing?: ReactNode;
    /** Subitems. */
    children?: ReactNode;
}>;
type NavigationItemComponent = (<C extends React.ElementType = "a">(props: NavigationItemProps<C>) => React.ReactNode) & {
    displayName?: string;
};
export declare const NavigationItem: NavigationItemComponent;
export {};
