import { HTMLAttributes } from 'react';
import { BannerVariants, IconVariants } from '@deliverect/galaxy-styles';
type BannerIconSvgProps = IconVariants & HTMLAttributes<SVGElement>;
type BannerIconConfig = {
    color: IconVariants["color"];
    Icon: (props: BannerIconSvgProps) => JSX.Element;
};
export declare const getBannerIconConfig: (status: BannerVariants["status"]) => BannerIconConfig;
export {};
