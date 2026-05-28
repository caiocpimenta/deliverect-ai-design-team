import { TextProps } from '../../foundations';
import { PolymorphicComponentPropWithRef } from '../../types';
export type InputErrorProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, TextProps<"span">>;
type InputErrorComponent = (<C extends React.ElementType = "span">(props: InputErrorProps<C>) => React.ReactNode) & {
    displayName?: string;
};
export declare const InputError: InputErrorComponent;
export {};
