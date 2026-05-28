import { TextProps } from '../../foundations';
import { PolymorphicComponentPropWithRef } from '../../types';
export type InputDescriptionProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, TextProps<"span">>;
type InputDescriptionComponent = (<C extends React.ElementType = "label">(props: InputDescriptionProps<C>) => React.ReactNode) & {
    displayName?: string;
};
export declare const InputDescription: InputDescriptionComponent;
export {};
