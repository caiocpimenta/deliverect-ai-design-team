import { default as React } from 'react';
import { CardVariants } from '@deliverect/galaxy-styles';
import { BoxProps } from '../../foundations';
import { PolymorphicComponentPropWithRef } from '../../types/polymorphic';
export type CardProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, CardVariants & BoxProps>;
type CardComponent = (<C extends React.ElementType = "div">(props: CardProps<C>) => React.ReactNode) & {
    displayName?: string;
};
export declare const Card: CardComponent;
export {};
