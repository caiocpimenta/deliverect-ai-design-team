import { ReactNode } from 'react';
import { SelectOption } from '../shared/types';
import { MultiSelectRootProps } from './multi-select-root';
export type MultiSelectBasicProps<T extends SelectOption = SelectOption> = Partial<MultiSelectRootProps<T>> & {
    /**
     * Callback that gets called when options get (de)selected.
     */
    setSelectedOptions?: (options: T[]) => void;
    /**
     * Function to format the select options in the dropdown.
     * Defaults to displaying the label of the option.
     *
     * @param option The option to render
     * @param isSelected Indicates if the option is currently selected or not
     * @returns A react node that will be rendered for each option
     */
    formatOption?: (option: T, isSelected?: boolean) => ReactNode;
};
/**
 * The default implementation of a select component that allows selecting multiple options at a time.
 * This is built on top of MultiSelectRoot, while providing a few smart defaults.
 * Extra features:
 * - allows for both controlled and uncontrolled options
 * - simple rendering of the options in a list
 *
 * For more complex use-cases, build on top of MultiSelectRoot.
 */
export declare const MultiSelectBasic: <T extends SelectOption = SelectOption>({ selectedOptions: _selectedOptions, setSelectedOptions: _setSelectedOptions, onOptionsCleared, onOptionToggle, formatOption, ...rest }: MultiSelectBasicProps<T>) => import("react/jsx-runtime").JSX.Element;
