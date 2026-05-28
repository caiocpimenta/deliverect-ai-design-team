import { TextProps } from '../../foundations/typography/text';
export type BannerTitleProps = Omit<TextProps<"p">, "color">;
export declare const BannerTitle: import('react').ForwardRefExoticComponent<Omit<BannerTitleProps, "ref"> & import('react').RefAttributes<HTMLParagraphElement>>;
