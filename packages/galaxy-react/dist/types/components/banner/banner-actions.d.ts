import { InlineProps } from '../../foundations/layout';
export type BannerActionsProps = Omit<React.ComponentPropsWithRef<"div">, "color"> & InlineProps;
export declare const BannerActions: import('react').ForwardRefExoticComponent<Omit<BannerActionsProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
