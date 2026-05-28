import { ReactElement } from 'react';
import { LogoVariants } from '@deliverect/galaxy-styles';
export type LogoProps = {
    children: ReactElement<SVGElement>;
    className?: string;
} & LogoVariants;
export declare const Logo: import('react').ForwardRefExoticComponent<{
    children: ReactElement<SVGElement>;
    className?: string;
} & {
    size?: "xl" | "lg" | "md" | "sm" | "none" | "xs" | "0" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "2xs" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "025" | "050" | "075" | "150" | "225" | "250" | "1000" | "1200" | undefined;
    color?: "primary" | "inherit" | "inverse" | undefined;
} & import('react').RefAttributes<HTMLSpanElement>>;
