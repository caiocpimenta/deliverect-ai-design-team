import { default as React } from 'react';
import { TextVariants } from '@deliverect/galaxy-styles';
import { BoxProps } from '../..';
import { PolymorphicComponentPropWithRef } from '../../../types';
export type TextProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, TextVariants & BoxProps>;
type TextComponent = (<C extends React.ElementType = "p">(props: TextProps<C>) => React.ReactNode | null) & {
    displayName?: string;
};
/**
 * Component that standardizes text elements.
 */
export declare const Text: TextComponent;
export {};
