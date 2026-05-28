import { HeadingProps } from '../../foundations';
import { TooltipContent } from '../../components/tooltip/tooltip-content';
export type DataCardTitleProps = HeadingProps<"h2"> & {
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
};
export declare const DataCardTitle: import('react').ForwardRefExoticComponent<Omit<DataCardTitleProps, "ref"> & import('react').RefAttributes<HTMLHeadingElement>>;
