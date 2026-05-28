import { ReactNode } from 'react';
/** Helper function to determine which icon variant to render for the button */
export declare const getIconVariant: ({ LeadingIcon, TrailingIcon, Icon, children, }: {
    LeadingIcon: ReactNode;
    TrailingIcon: ReactNode;
    Icon: ReactNode;
    children: ReactNode;
}) => "both" | "right" | "left" | "single" | undefined;
