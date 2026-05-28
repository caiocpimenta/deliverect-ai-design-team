import { TextProps } from '../../foundations/typography/text';
import { PolymorphicComponentProp } from '../../types';
export type InputLabelProps<C extends React.ElementType> = PolymorphicComponentProp<C, TextProps<C> & {
    requiredText?: string;
    tooltip?: string;
}>;
export type InputLabelComponent = (<C extends React.ElementType = "label">(props: InputLabelProps<C>) => React.ReactNode) & {
    displayName?: string;
};
export declare const InputLabel: InputLabelComponent;
