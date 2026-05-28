import { IconProps } from '../../primitives/icon';
export type BannerIconProps = Omit<IconProps<"svg">, "children" | "as">;
export declare const BannerIcon: {
    (props: BannerIconProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
