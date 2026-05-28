import { default as React, AnchorHTMLAttributes, ReactNode } from 'react';
import { LinkVariants } from '@deliverect/galaxy-styles';
import { BoxProps } from '../../foundations';
import { PolymorphicComponentPropWithRef } from '../../types';
export type LinkProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, LinkVariants & BoxProps & AnchorHTMLAttributes<C> & {
    /**
     * Optional icon displayed to the left of the children.
     */
    LeadingIcon?: ReactNode;
    /**
     * Optional icon displayed to the right of the children
     */
    TrailingIcon?: ReactNode;
}>;
type LinkComponent = (<C extends React.ElementType = "a">(props: LinkProps<C>) => React.ReactNode) & {
    displayName?: string;
};
export declare const Link: LinkComponent;
export {};
