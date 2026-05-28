import { default as React, ReactElement } from 'react';
import { IconVariants } from '@deliverect/galaxy-styles';
import { PolymorphicComponentPropWithRef } from '../../types';
export type IconProps<C extends React.ElementType = "span"> = PolymorphicComponentPropWithRef<C, {
    children: ReactElement<SVGElement>;
    className?: string;
} & IconVariants>;
type IconComponent = (<C extends React.ElementType = "span">(props: IconProps<C>) => React.ReactNode) & {
    displayName?: string;
};
export declare const Icon: IconComponent;
export {};
