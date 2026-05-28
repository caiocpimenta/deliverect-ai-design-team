import { TextProps } from '../../foundations/typography/text';
export type EmptyStateContentProps = Omit<TextProps<"p">, "color">;
export declare const EmptyStateContent: import('react').ForwardRefExoticComponent<Omit<EmptyStateContentProps, "ref"> & import('react').RefAttributes<HTMLParagraphElement>>;
