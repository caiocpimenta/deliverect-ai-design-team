import { BoxProps } from '../../foundations/layout/box';
import { SegmentedControlRootOwnProps } from './types';
export type SegmentedControlContextOwnProps = {
    finalValue?: string;
    finalOnValueChange: (value: string) => void;
};
export type SegmentedControlProviderProps = Omit<BoxProps, "size"> & SegmentedControlRootOwnProps & SegmentedControlContextOwnProps;
export declare const SegmentedControlProvider: ({ size, display, finalValue, finalOnValueChange, children, ...rest }: SegmentedControlProviderProps) => JSX.Element;
/**
 * A hook to provide the Segmented Control root context to the Segmented Control component.
 *
 * @returns The Segmented Control root context if it is defined
 */
export declare const useSegmentedControlContext: () => SegmentedControlProviderProps;
