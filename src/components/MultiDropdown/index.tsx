import { ArrowDirectionDown, DropdownMenu, Input } from '@deliverect/galaxy-react'

interface Option {
  label: string
  value: string
}

interface MultiDropdownProps {
  label: string
  description?: string
  placeholder?: string
  noun?: string
  options: Option[]
  selectedIds: string[]
  onChange: (ids: string[]) => void
}

function getTriggerLabel(selectedIds: string[], options: Option[], placeholder: string, noun: string): string {
  if (selectedIds.length === 0) return placeholder
  if (selectedIds.length <= 2) {
    return options
      .filter(o => selectedIds.includes(o.value))
      .map(o => o.label)
      .join(', ')
  }
  return `${selectedIds.length} ${noun}s selected`
}

export function MultiDropdown({
  label,
  description,
  placeholder = 'Select…',
  noun = 'item',
  options,
  selectedIds,
  onChange,
}: MultiDropdownProps) {
  const triggerLabel = getTriggerLabel(selectedIds, options, placeholder, noun)

  return (
    <Input.Root label={label} description={description} width="full">
      <DropdownMenu.Root>
        <DropdownMenu.ButtonTrigger
          variant="outline"
          status="neutral"
          TrailingIcon={<ArrowDirectionDown size="md" />}
          style={{ width: '100%', justifyContent: 'space-between' }}
        >
          {triggerLabel}
        </DropdownMenu.ButtonTrigger>
        <DropdownMenu.Content style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
          <DropdownMenu.Scrollable>
            {options.map(option => (
              <DropdownMenu.CheckboxItem
                key={option.value}
                checked={selectedIds.includes(option.value)}
                onCheckedChange={checked => {
                  if (checked) {
                    onChange([...selectedIds, option.value])
                  } else {
                    onChange(selectedIds.filter(id => id !== option.value))
                  }
                }}
              >
                {option.label}
              </DropdownMenu.CheckboxItem>
            ))}
          </DropdownMenu.Scrollable>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Input.Root>
  )
}
