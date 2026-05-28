import * as Separator from "@radix-ui/react-separator";
export type SidebarSeparatorProps = {
    className?: string;
} & Separator.SeparatorProps;
/**
 * This component is based on the `Separator` component from `@radix-ui/react-separator`.
 * It renders a a separator between sidebar items.
 * @see https://www.figma.com/file/oqgkUy4dYW4B3BMBHrAwsK/Galaxy-Design-System?node-id=10817%3A8866&mode=dev
 */
export declare const SidebarSeparator: import('react').ForwardRefExoticComponent<{
    className?: string;
} & Separator.SeparatorProps & import('react').RefAttributes<HTMLDivElement>>;
