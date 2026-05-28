import { CollapsibleContentVariants } from '@deliverect/galaxy-styles';
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
export type CollapsibleContentProps = CollapsiblePrimitive.CollapsibleContentProps & CollapsibleContentVariants;
export declare const CollapsibleContent: import('react').ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleContentProps & {
    animated?: boolean | undefined;
} & import('react').RefAttributes<HTMLDivElement>>;
