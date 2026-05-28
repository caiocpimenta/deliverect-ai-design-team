import { HeadingVariants } from '@deliverect/galaxy-styles';
import { BoxProps } from '../..';
import { PolymorphicComponentPropWithRef } from '../../../types';
export type HeadingProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, HeadingVariants & BoxProps>;
type HeadingComponent = (<C extends React.ElementType = "h2">(props: HeadingProps<C>) => React.ReactNode) & {
    displayName?: string;
};
export declare const Heading: HeadingComponent;
export {};
