import { ComponentProps, ReactNode } from 'react';
import { Inline } from '../../foundations';
export type NavigationSubtitleProps = Omit<ComponentProps<typeof Inline>, "children"> & {
    title: string;
    trailing?: ReactNode;
};
export declare const NavigationSubtitle: import('react').ForwardRefExoticComponent<Omit<NavigationSubtitleProps, "ref"> & import('react').RefAttributes<HTMLParagraphElement>>;
