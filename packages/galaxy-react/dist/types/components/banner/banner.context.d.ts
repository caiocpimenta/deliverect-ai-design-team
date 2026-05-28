import { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { BannerVariants } from '@deliverect/galaxy-styles';
export type BannerContextType = BannerVariants & {
    isShown?: boolean;
    setIsShown?: Dispatch<SetStateAction<boolean>>;
};
export declare const BannerProvider: ({ children, ...props }: PropsWithChildren<BannerContextType>) => JSX.Element;
export declare const useBannerContext: () => BannerContextType;
