import { ElementType, ReactNode } from 'react';
import { BoxProps } from '../../foundations';
import { PolymorphicComponentPropWithRef } from '../../types';
export type InputLeftAddonProps<C extends ElementType> = PolymorphicComponentPropWithRef<C, BoxProps & {
    children: ReactNode;
}>;
type InputLeftAddonComponent = (<C extends React.ElementType = "span">(props: InputLeftAddonProps<C>) => React.ReactNode) & {
    displayName?: string;
};
/**
 * This component is based on the `Box` component.
 * It is used to wrap the left addon.
 */
export declare const InputLeftAddon: InputLeftAddonComponent;
export {};
