import { ReactNode } from 'react';
import { SelectButtonVariants } from '@deliverect/galaxy-styles';
import { SelectPopoverProps } from '../shared/select-popover';
import { SelectOption } from '../shared/types';
export type SelectProps<T extends SelectOption = SelectOption> = {
    /**
     * All the options for the select component.
     */
    options?: T[];
    /**
     * Pass in the selected option.
     */
    selectedOption?: T;
    /**
     * Callback that gets called when an option is (de)selected.
     */
    setSelectedOption?: (option?: T) => void;
    /**
     * Function that is called when clearing the select.
     * This function is called after `setSelectedOption` is called.
     */
    onOptionCleared?: () => void;
    /**
     * Function to format the select options in the dropdown.
     * Defaults to displaying the label of the option.
     *
     * @param option The option to render
     * @param isSelected Indicates if the option is currently selected or not
     * @returns A react node that will be rendered for each option
     */
    formatOption?: (option: T, isSelected?: boolean) => ReactNode;
    /**
     * Function to format the selected option shown at the top.
     * Defaults to displaying the label of the option.
     *
     * @param option The option to render
     * @returns A react node that will be rendered for each option
     */
    formatSelectedOption?: (option: T) => ReactNode;
    /**
     * Control the open state of the select. You can use this for both
     * the initial state, but also to update the state later on.
     * Defaults to false.
     */
    isOpen?: boolean;
    /**
     * Indicates if it should be possible to clear the selected option.
     * This allows deselecting the selected option and also renders a clear icon
     * on the right of the select.
     * Defaults to false.
     */
    isClearable?: boolean;
    /**
     * Indicates if the select should be closed after selecting an option.
     * Defaults to true.
     */
    isAutoClose?: boolean;
    /**
     * Label of the select 'button'. Works as a placeholder for the select.
     * Shown if no options are selected.
     */
    label?: string;
    /**
     * The id for the form element.
     */
    id?: string;
    /**
     * The name for the form element.
     */
    name?: string;
    /**
     * Any extra className to be applied to the select button.
     */
    className?: string;
    /**
     * The status of the select button.
     * Defaults to "default".
     */
    status?: SelectButtonVariants["status"];
    /**
     * The variant of the select button.
     * Defaults to "default".
     */
    variant?: SelectButtonVariants["variant"];
    /**
     * Indicates if the select button should be disabled.
     * Defaults to false.
     */
    isDisabled?: boolean;
    position?: "top" | "right" | "bottom" | "left";
    /**
     * Preferred position relative to the anchor for rendering when open
     * Defaults to bottom.
     */
    align?: "start" | "center" | "end";
} & Pick<SelectPopoverProps, "contentEmpty" | "isSearchable" | "placeholder">;
/**
 * Select component that allows selecting a single option at a time.
 */
export declare const Select: <T extends SelectOption = SelectOption>({ options, selectedOption: _selectedOption, setSelectedOption: _setSelectedOption, onOptionCleared, formatOption, formatSelectedOption, isOpen: _isOpen, isClearable, isAutoClose, label, placeholder, contentEmpty, isSearchable, id: _id, name, className, status: _status, variant, isDisabled, position, align, }: SelectProps<T>) => import("react/jsx-runtime").JSX.Element;
