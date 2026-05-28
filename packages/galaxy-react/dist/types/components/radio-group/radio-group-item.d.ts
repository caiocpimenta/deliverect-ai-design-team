import { RadioGroupItemVariants } from '@deliverect/galaxy-styles';
import { PolymorphicComponentProp } from '../../types';
import * as RadioGroupUI from "@radix-ui/react-radio-group";
export type RadioGroupItemProps<C extends React.ElementType> = PolymorphicComponentProp<C, RadioGroupUI.RadioGroupItemProps & RadioGroupItemVariants>;
type RadioGroupItemComponent = (<C extends React.ElementType = "button">(props: RadioGroupItemProps<C>) => React.ReactNode) & {
    displayName?: string;
};
/**
 * The radio button item composed by the indicator and the label.
 * This implementation uses `RadioGroup.Item` from `@radix-ui/react-radio-group`.
 * @see https://www.radix-ui.com/primitives/docs/components/radio-group#item
 */
export declare const RadioGroupItem: RadioGroupItemComponent;
export {};
