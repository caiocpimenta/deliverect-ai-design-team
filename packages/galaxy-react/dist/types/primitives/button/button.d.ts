import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonVariants } from '@deliverect/galaxy-styles';
import { BoxProps } from '../../foundations';
import { PolymorphicComponentPropWithRef } from '../../types/polymorphic';
type UsableButtonVariants = Omit<ButtonVariants, "icon">;
type UsableButtonHTMLAttributes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;
export type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, UsableButtonVariants & Omit<BoxProps, keyof UsableButtonHTMLAttributes> & UsableButtonHTMLAttributes & {
    /**
     * Icon displayed by itself. Don't pass children, LeadingIcon or TrailingIcon
     * in combination with this property.
     */
    Icon?: ReactNode;
    /**
     * Icon displayed to the left of the children.
     */
    LeadingIcon?: ReactNode;
    /**
     * Icon displayed to the right of the children.
     */
    TrailingIcon?: ReactNode;
}>;
type ButtonComponent = (<C extends React.ElementType = "button">(props: ButtonProps<C>) => React.ReactNode) & {
    displayName?: string;
};
export declare const Button: ButtonComponent;
export {};
