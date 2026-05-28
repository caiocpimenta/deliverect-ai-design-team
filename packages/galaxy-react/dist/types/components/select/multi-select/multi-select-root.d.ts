import { ReactElement, ReactNode } from 'react';
import { SelectButtonVariants } from '@deliverect/galaxy-styles';
import { SelectPopoverProps } from '../shared/select-popover';
import { SelectOption } from '../shared/types';
export type MultiSelectRootProps<T extends SelectOption = SelectOption> = {
    /**
     * All the options for the select component.
     */
    options?: T[];
    /**
     * Pass in the selected options.
     */
    selectedOptions: T[];
    /**
     * Function that is called when an individual option is (de)selected.
     * This function is called after `setSelectedOptions` is called.
     *
     * @param option The option that was selected or deselected
     * @param isSelected Boolean whether the option was selected or deselected
     */
    onOptionToggle: (option: T, isSelected: boolean) => void;
    /**
     * Function that is called when all options are deselected.
     * This function is called after `setSelectedOptions` is called.
     */
    onOptionsCleared?: () => void;
    /**
     * Function to format the selected option shown at the top.
     * Will still be shown inside an InputChip.
     *
     * Defaults to displaying the label of the option.
     *
     * @param option The option to render
     * @returns A react node that will be rendered for each option
     */
    formatSelectedOption?: (option: T) => ReactNode;
    /**
     * Function that is called when searching in the options,
     * giving you full control on how filtering happens.
     *
     * @param query The search string entered in the search input
     */
    onFilterOptions?: (query: string) => void;
    /**
     * When set to 'auto', it will automatically calculate the maximum number
     * of elements it can render based on the width of the element and hide the ones
     * that can't fit on a single line.
     * This will also take into account the width of `moreSelectedOptionsLabel` if set.
     *
     * By default it will not limit the number of options and increase the height of the element.
     */
    maxSelectedOptions?: "auto";
    /**
     * The label to show when we are hiding a number of options.
     * This works together with param `maxSelectedOptions`.
     * Defaults to '+ <amount>'.
     *
     * @param amount The number of options that are hidden
     * @returns The label to render
     */
    moreSelectedOptionsLabel?: (amount: number) => string;
    /**
     * Control the open state of the select. You can use this for both
     * the initial state, but also to update the state later on.
     * Defaults to false.
     */
    isOpen?: boolean;
    /**
     * Indicates if there should be a quick option to remove all selected options.
     * This will render an 'x' on the right position when options are selected.
     * Defaults to false.
     */
    isClearable?: boolean;
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
    /**
     * Preferred position relative to the anchor for rendering when open
     * Defaults to bottom.
     */
    position?: "top" | "right" | "bottom" | "left";
    /**
     * Preferred alignment against the anchor
     * Defaults to center.
     */
    align?: "start" | "center" | "end";
    /**
     * This will render the list of options in the dropdown.
     *
     * @param filteredOptions This is the list of filtered options, if you don't take care of filtering yourself
     * @returns
     */
    children: (filteredOptions: T[]) => ReactElement;
} & Pick<SelectPopoverProps, "contentEmpty" | "isSearchable" | "placeholder">;
/**
 * A wrapper component that provides a starting point to make your own multi select component.
 * It has most of the logic pre-built to render and interact with the selected options,
 * but it leaves the rendering of the options list to the user.
 *
 * For an example (simple) implementation, look at MultiSelect.
 */
export declare const MultiSelectRoot: <T extends SelectOption = SelectOption>({ options, selectedOptions, onOptionToggle, onOptionsCleared, formatSelectedOption, onFilterOptions, maxSelectedOptions, moreSelectedOptionsLabel, isOpen: _isOpen, isClearable, label, placeholder, contentEmpty, isSearchable, id: _id, name, className, status: _status, variant, isDisabled, position, align, children, }: MultiSelectRootProps<T>) => ReactElement;
