import { IconProps } from '../../../primitives';
export type ToastIconPropsOwnProps = {
    /**
     * An icon component that will override the default one (which is decided based on the `status` prop).
     * This is useful when you want to use a custom icon for a specific toast status.
     * @default undefined
     */
    StatusIconOverride?: React.ElementType;
    /**
     * A class name to apply to the icon wrapper (i.e. the containing `<Icon />`).
     * @default undefined
     */
    wrapperClassName?: string;
};
export type ToastIconProps = Omit<IconProps, "color" | "children"> & ToastIconPropsOwnProps;
/**
 * @internal
 * This component is intended for internal use within the galaxy-react package only.
 * It should not be imported directly by consumers.
 */
export declare const ToastIcon: import('react').ForwardRefExoticComponent<Omit<ToastIconProps, "ref"> & import('react').RefAttributes<HTMLSpanElement>>;
