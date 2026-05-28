/**
 * Type to add an "as" prop to a component to support polymorphism
 */
type AsProp<C extends React.ElementType> = {
    as?: C;
};
/**
 * Utility type to omit certain props from a given type
 */
type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
/**
 * Utility type to add a polymorphic prop to a component prop type and to omit props
 * from that type that are already defined by the component itself
 */
export type PolymorphicComponentProp<C extends React.ElementType, Props = Record<string, unknown>> = React.PropsWithChildren<Props & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
/**
 * Get a the correct ref type given a react element type
 */
export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];
/**
 * Combines props and ref for a polymorphic component
 */
export type PolymorphicComponentPropWithRef<C extends React.ElementType, Props = Record<string, unknown>> = PolymorphicComponentProp<C, Props> & {
    ref?: PolymorphicRef<C>;
};
export {};
