import { ReactElement } from 'react';
import { IllustrationVariants } from '@deliverect/galaxy-styles';
import { BoxProps } from '../../foundations';
export type IllustrationProps = Omit<BoxProps, "children"> & IllustrationVariants & {
    children: ReactElement<SVGElement>;
};
/**
 * The Illustration component is a wrapper for SVG illustrations.
 *
 * Do not forget to set the `aria-label` attribute to describe the illustration if needed.
 * If not, set the `aria-hidden` attribute to `true` to hide it from assistive technologies.
 */
export declare const Illustration: import('react').ForwardRefExoticComponent<Omit<BoxProps, "children"> & {
    size?: "lg" | "md" | "sm" | undefined;
} & {
    children: ReactElement<SVGElement>;
} & import('react').RefAttributes<HTMLDivElement>>;
