import { InputGroupVariants } from '@deliverect/galaxy-styles';
import { InlineProps } from '../../foundations';
import { PolymorphicComponentProp } from '../../types';
export type InputGroupProps<C extends React.ElementType> = PolymorphicComponentProp<C, InlineProps & InputGroupVariants>;
export type InputGroupComponent = (<C extends React.ElementType = "div">(props: InputGroupProps<C>) => React.ReactNode) & {
    displayName?: string;
};
export declare const InputGroup: InputGroupComponent;
