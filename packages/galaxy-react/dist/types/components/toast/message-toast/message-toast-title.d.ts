import { TextProps } from '../../../foundations';
export type MessageToastTitleProps = Omit<TextProps<"p">, "overflow">;
export declare const MessageToastTitle: import('react').ForwardRefExoticComponent<Omit<MessageToastTitleProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
