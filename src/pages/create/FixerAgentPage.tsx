import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowDirectionLeft,
  Button,
  DuplicateOutline,
  EditOutline,
  FixedPriceDecreaseOutline,
  Heading,
  Inline,
  List,
  ProgressTracker,
  ReceiptOutline,
  Stack,
  Text,
  Toggle,
  vars,
} from '@deliverect/galaxy-react'
import { Page } from '../../components/Page'
import { Step } from '../../components/Step'
import { MultiDropdown } from '../../components/MultiDropdown'
import { MOCK_LOCATIONS, MOCK_CHANNELS } from '../../data/mockAgents'

// ─── Step 1: Fix types ────────────────────────────────────────────────────────

interface FixType {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

const FIX_TYPES: FixType[] = [
  {
    id: 'duplicate',
    icon: <DuplicateOutline size="lg" />,
    title: 'Duplicate items',
    description: 'Remove duplicate items automatically added to orders.',
  },
  {
    id: 'modifier',
    icon: <EditOutline size="lg" />,
    title: 'Modifier corrections',
    description: 'Fix missing or incorrect modifiers based on item rules.',
  },
  {
    id: 'price',
    icon: <FixedPriceDecreaseOutline size="lg" />,
    title: 'Price validation',
    description: 'Correct orders where prices don\'t match the current menu.',
  },
  {
    id: 'instructions',
    icon: <ReceiptOutline size="lg" />,
    title: 'Special instructions',
    description: 'Parse and apply common special instructions consistently.',
  },
]

function FixTypesStep({
  selectedIds,
  onToggle,
}: {
  selectedIds: string[]
  onToggle: (id: string) => void
}) {
  return (
    <Stack
      borderRadius="100"
      borderWidth={1}
      style={{ borderColor: vars.colors.border.neutral.default.default, overflow: 'hidden' }}
    >
      {FIX_TYPES.map((item, i) => {
        const isEnabled = selectedIds.includes(item.id)
        const isLast = i === FIX_TYPES.length - 1

        return (
          <List.Root
            key={item.id}
            type={isLast ? 'default' : 'divider'}
            borderTopRadius={i === 0 ? 'md' : undefined}
            borderBottomRadius={isLast ? 'md' : undefined}
          >
            <List.Prefix>
              <div style={{ color: isEnabled ? vars.colors.icon.neutral.interactive.bold.default : vars.colors.icon.neutral.inactive }}>
                {item.icon}
              </div>
            </List.Prefix>

            <List.Title>
              <Text weight="medium" size="sm">{item.title}</Text>
            </List.Title>

            <List.Description>
              <Text size="sm" color="secondary">{item.description}</Text>
            </List.Description>

            <List.Suffix alignY="center">
              <Toggle
                checked={isEnabled}
                onCheckedChange={() => onToggle(item.id)}
              />
            </List.Suffix>
          </List.Root>
        )
      })}
    </Stack>
  )
}

// ─── Step 2: Locations ────────────────────────────────────────────────────────

function LocationsStep({
  locationIds,
  channelIds,
  onLocationsChange,
  onChannelsChange,
}: {
  locationIds: string[]
  channelIds: string[]
  onLocationsChange: (ids: string[]) => void
  onChannelsChange: (ids: string[]) => void
}) {
  const locationOptions = MOCK_LOCATIONS.map(l => ({ label: l.name, value: l.id }))
  const channelOptions = MOCK_CHANNELS.map(c => ({ label: c.name, value: c.id }))

  return (
    <Stack height="auto" space="250">
      <MultiDropdown
        label="Locations"
        description="Select which locations this agent should monitor."
        placeholder="Choose locations"
        noun="location"
        options={locationOptions}
        selectedIds={locationIds}
        onChange={onLocationsChange}
      />
      <MultiDropdown
        label="Channels"
        description="Select which ordering channels to monitor."
        placeholder="Choose channels"
        noun="channel"
        options={channelOptions}
        selectedIds={channelIds}
        onChange={onChannelsChange}
      />
    </Stack>
  )
}

// ─── Step 3: Name ─────────────────────────────────────────────────────────────

function DetailsStep({
  name,
  fixTypeIds,
  locationIds,
  onNameChange,
}: {
  name: string
  fixTypeIds: string[]
  locationIds: string[]
  onNameChange: (v: string) => void
}) {
  const fixNames = FIX_TYPES.filter(f => fixTypeIds.includes(f.id)).map(f => f.title)
  const locationNames = MOCK_LOCATIONS.filter(l => locationIds.includes(l.id)).map(l => l.name)

  return (
    <Stack height="auto" space="250">
      <Input.Root
        label="Agent name"
        description="Give your agent a memorable name."
        required
      >
        <Input.Field
          placeholder="e.g. Order Accuracy Fixer"
          value={name}
          onChange={e => onNameChange(e.target.value)}
        />
      </Input.Root>

      <Step.Group>
        <Text weight="medium">Review your settings</Text>
        <div
          style={{
            borderRadius: vars.border.radius['100'],
            border: `1px solid ${vars.colors.border.neutral.default.default}`,
            overflow: 'hidden',
          }}
        >
          {[
            { label: 'Fix types', value: fixNames.length > 0 ? fixNames.join(', ') : 'None' },
            { label: 'Locations', value: locationNames.length > 0 ? locationNames.join(', ') : 'None selected' },
          ].map((row, i, arr) => (
            <div
              key={row.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: `${vars.spacing['150']} ${vars.spacing['200']}`,
                borderBottom: i < arr.length - 1 ? `1px solid ${vars.colors.border.neutral.default.default}` : undefined,
              }}
            >
              <Text size="sm" color="secondary">{row.label}</Text>
              <Text size="sm" weight="medium">{row.value}</Text>
            </div>
          ))}
        </div>
      </Step.Group>
    </Stack>
  )
}

// ─── Main wizard ──────────────────────────────────────────────────────────────

const STEP_TITLES = [
  { title: 'What should the agent fix?', description: 'Select the types of order issues this agent should automatically resolve.' },
  { title: 'Where should the agent work?', description: 'Select the locations and channels this agent will monitor.' },
  { title: 'Name your agent', description: 'Give your agent a name and review the configuration before activating.' },
]

export function FixerAgentPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)

  const [fixTypeIds, setFixTypeIds] = useState<string[]>(['duplicate', 'price'])
  const [locationIds, setLocationIds] = useState<string[]>([])
  const [channelIds, setChannelIds] = useState<string[]>(['all'])
  const [agentName, setAgentName] = useState('')

  const stepInfo = STEP_TITLES[step - 1]

  const canNext = () => {
    if (step === 1) return fixTypeIds.length > 0
    if (step === 2) return locationIds.length > 0
    if (step === 3) return agentName.trim().length > 0
    return false
  }

  const handleNext = () => {
    if (step < 3) setStep(s => s + 1)
    else navigate('/agents/agent-new', { replace: true })
  }

  const handleBack = () => {
    if (step === 1) navigate('/agents/create')
    else setStep(s => s - 1)
  }

  return (
    <Page.Root>
      <Page.Header>
        <Inline space="150" alignY="center">
          <Button
            variant="transparent"
            size="sm"
            Icon={<ArrowDirectionLeft size="lg" />}
            aria-label="Back"
            onClick={handleBack}
          />
          <Stack height="auto" space="025">
            <Heading level={3}>Order Fixer Agent</Heading>
            <Text size="sm" color="secondary">Step {step} of 3</Text>
          </Stack>
        </Inline>
      </Page.Header>

      <Page.Body alignX="center" pb="300">
        <Step.Content>
          <Step.Info title={stepInfo.title} description={stepInfo.description} />

          {step === 1 && (
            <FixTypesStep
              selectedIds={fixTypeIds}
              onToggle={id =>
                setFixTypeIds(prev =>
                  prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
                )
              }
            />
          )}

          {step === 2 && (
            <LocationsStep
              locationIds={locationIds}
              channelIds={channelIds}
              onLocationsChange={setLocationIds}
              onChannelsChange={setChannelIds}
            />
          )}

          {step === 3 && (
            <DetailsStep
              name={agentName}
              fixTypeIds={fixTypeIds}
              locationIds={locationIds}
              onNameChange={setAgentName}
            />
          )}
        </Step.Content>
      </Page.Body>

      <Page.Footer progressBar={<ProgressTracker currentStep={step + 1} totalSteps={4} />}>
        <Button variant="outline" status="neutral" onClick={handleBack}>
          {step === 1 ? 'Cancel' : 'Back'}
        </Button>
        <Button
          status="primary"
          disabled={!canNext()}
          onClick={handleNext}
        >
          {step === 3 ? 'Create Agent' : 'Continue'}
        </Button>
      </Page.Footer>
    </Page.Root>
  )
}
