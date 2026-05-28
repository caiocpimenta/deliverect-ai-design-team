import { HeadingProps } from '../../foundations/typography/heading';
import { Environment } from './constants';
export type NavigationHeadingProps = HeadingProps<"h3"> & {
    environment?: Environment;
};
export declare const NavigationHeading: import('react').ForwardRefExoticComponent<Omit<NavigationHeadingProps, "ref"> & import('react').RefAttributes<HTMLHeadingElement>>;
