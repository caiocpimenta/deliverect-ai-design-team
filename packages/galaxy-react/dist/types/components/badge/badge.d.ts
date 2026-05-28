import { default as React, ReactNode } from 'react';
import { BadgeVariants as BadgeStyleProps } from '@deliverect/galaxy-styles';
import { BoxProps } from '../../foundations';
import { PolymorphicComponentPropWithRef } from '../../types/polymorphic';
export type BadgeProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, BadgeStyleProps & BoxProps & {
    /** Whether to show a light background badge or a dark background badge */
    variant?: "light" | "dark";
    /**
     * Optional icon on the left side of the badge.
     * Use the fill version of the icon whenever possible.
     */
    Icon?: ReactNode;
    /**
     * Required children. This is the label that will be shown in the badge.
     * Note: This accepts a ReactNode type to allow for complex text values,
     * but it's not designed to pass more complex components to it. Use at your own
     * discretion.
     */
    children: ReactNode;
}>;
type BadgeComponent = (<C extends React.ElementType = "span">(props: BadgeProps<C>) => React.ReactNode) & {
    displayName?: string;
};
/**
 * Component that renders a badge. Badges provide additional contextual information for other user interface (UI) elements on the page.
 * They enable you to easily show statuses, notifications, and short messages in your app.
 */
export declare const Badge: BadgeComponent;
export {};
