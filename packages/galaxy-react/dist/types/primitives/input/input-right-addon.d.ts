import { ElementType, ReactNode } from 'react';
import { BoxProps } from '../../foundations';
import { PolymorphicComponentPropWithRef } from '../../types';
export type InputRightAddonProps<C extends ElementType> = PolymorphicComponentPropWithRef<C, BoxProps & {
    children: ReactNode;
}>;
type InputRightAddonComponent = (<C extends React.ElementType = "span">(props: InputRightAddonProps<C>) => React.ReactNode) & {
    displayName?: string;
};
/**
 * This component is based on the `Box` component.
 * It is used to wrap the right addon.
 */
export declare const InputRightAddon: InputRightAddonComponent;
export {};
