import { default as React } from 'react';
import { IconVariants } from '@deliverect/galaxy-styles';
import { BoxProps } from '../../foundations';
import { PolymorphicComponentPropWithRef } from '../../types';
import { LoadingSpinnerStatus } from './types';
export type LoadingSpinnerProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, Omit<BoxProps, "component"> & {
    /**
     * The status of the loading spinner. This determines the colour of the spinner
     */
    status: LoadingSpinnerStatus;
    /**
     * The size of the loading animation. This uses the same tokens as the Icon component
     */
    size: IconVariants["size"];
}>;
type LoadingSpinnerComponent = (<C extends React.ElementType>(props: LoadingSpinnerProps<C>) => React.ReactNode) & {
    displayName?: string;
};
/**
 * This component displays an animated loading spinner.
 * It should be used to indicate that content is loading.
 *
 * The loading spinner can be used either standalone (e.g. on a page) or it could be used inside of another
 * component such as a button to indicate that an action is being processed.
 *
 * The loading spinner has an accessible wrapper but the accessibility attributes can be overwritten if needed.
 */
export declare const LoadingSpinner: LoadingSpinnerComponent;
export {};
