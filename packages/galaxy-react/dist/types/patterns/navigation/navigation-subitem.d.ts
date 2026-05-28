import { ReactNode } from 'react';
import { PolymorphicComponentPropWithRef } from '../../types';
export type NavigationSubitemProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, {
    /** Label for the item. */
    label: string;
    /** Indicates if the item is currently selected/active. */
    isActive?: boolean;
    /** Trailing components, like badges. */
    trailing?: ReactNode;
}>;
type NavigationSubitemComponent = (<C extends React.ElementType = "a">(props: NavigationSubitemProps<C>) => React.ReactNode) & {
    displayName?: string;
};
export declare const NavigationSubitem: NavigationSubitemComponent;
export {};
