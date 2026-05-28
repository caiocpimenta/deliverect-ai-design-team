import { TextProps } from '../../foundations/typography/text';
export type EmptyStateTitleProps = Omit<TextProps<"p">, "color">;
export declare const EmptyStateTitle: import('react').ForwardRefExoticComponent<Omit<EmptyStateTitleProps, "ref"> & import('react').RefAttributes<HTMLParagraphElement>>;
