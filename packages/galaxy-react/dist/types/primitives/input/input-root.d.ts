import { ReactNode } from 'react';
import { InputRootVariants } from '@deliverect/galaxy-styles';
import { BoxProps } from '../../foundations';
import { PolymorphicComponentPropWithRef } from '../../types';
export type InputRootProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, {
    id?: string;
    label?: ReactNode;
    required?: boolean;
    requiredText?: string;
    description?: ReactNode;
    tooltip?: string;
    error?: ReactNode;
} & BoxProps & InputRootVariants>;
type InputRootComponent = (<C extends React.ElementType = "div">(props: InputRootProps<C>) => React.ReactNode) & {
    displayName?: string;
};
/**
 * This component is a wrapper around the input field.
 * It combines the input field with a label, description and error message.
 * This component is used to create a complete input component.
 *
 * If you don't pass a label, description or error message, the respective elements will not be rendered.
 * The user is responsible for rendering the input field.
 *
 * @example
 * <Input.Root label="Name" description="Your full name" error="This field is required">
 *  <Input.Field />
 * </Input.Root>
 */
export declare const InputRoot: InputRootComponent;
export {};
