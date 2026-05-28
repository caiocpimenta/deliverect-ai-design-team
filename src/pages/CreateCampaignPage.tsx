import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowDirectionDown,
  ArrowDirectionLeft,
  Badge,
  Button,
  DropdownMenu,
  Inline,
  Input,
  PageHeader,
  SparklesOutline,
  Stack,
  Tabs,
  Text,
  vars,
} from '@deliverect/galaxy-react'
import { Page } from '../components/Page'
import { MultiDropdown } from '../components/MultiDropdown'
import { MOCK_CHANNELS, MOCK_MENUS } from '../data/mockAgents'
import { DISCOUNT_TYPE_LABELS, makeInitials, pickAvatarColor } from '../data/campaigns'
import { useCampaigns } from '../context/CampaignsContext'
import { useAgents } from '../context/AgentsContext'

// ─── Local mock data ──────────────────────────────────────────────────────────

const MOCK_BRANDS = [
  { id: 'brand-1', name: 'Main Brand' },
  { id: 'brand-2', name: 'Virtual Brand A' },
  { id: 'brand-3', name: 'Virtual Brand B' },
  { id: 'brand-4', name: 'Jahez Exclusive' },
  { id: 'brand-5', name: 'Ghost Kitchen' },
]

const DISCOUNT_CAMPAIGN_TYPES = [
  { value: 'menu-item', label: 'Menu item discount' },
  { value: 'basket', label: 'Basket discount' },
  { value: 'free-delivery', label: 'Free delivery' },
  { value: 'spend-save', label: 'Spend & save' },
]

type GuardrailId = 'underperforming' | 'flat' | 'overperforming'

const GUARDRAILS: { id: GuardrailId; label: string; description: string; defaultThreshold: string }[] = [
  { id: 'underperforming', label: 'Underperforming', description: 'Trigger within sales performance drop', defaultThreshold: '6' },
  { id: 'flat',            label: 'Flat',            description: 'Trigger within a sales performance range', defaultThreshold: '2' },
  { id: 'overperforming',  label: 'Overperforming',  description: 'Trigger within sales performance exceed', defaultThreshold: '10' },
]

// ─── Reusable helpers ─────────────────────────────────────────────────────────

function SingleDropdown({
  label,
  description,
  placeholder = 'Select…',
  required,
  options,
  value,
  onChange,
}: {
  label: string
  description?: string
  placeholder?: string
  required?: boolean
  options: { label: string; value: string }[]
  value: string
  onChange: (val: string) => void
}) {
  const selected = options.find(o => o.value === value)

  return (
    <Input.Root label={label} description={description} width="full" required={required}>
      <DropdownMenu.Root>
        <DropdownMenu.ButtonTrigger
          variant="outline"
          status="neutral"
          TrailingIcon={<ArrowDirectionDown size="md" />}
          style={{ width: '100%', justifyContent: 'space-between' }}
        >
          {selected ? selected.label : placeholder}
        </DropdownMenu.ButtonTrigger>
        <DropdownMenu.Content style={{ width: 'var(--radix-dropdown-menu-trigger-width)' }}>
          <DropdownMenu.Scrollable>
            {options.map(option => (
              <DropdownMenu.Item key={option.value} onClick={() => onChange(option.value)}>
                {option.label}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Scrollable>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Input.Root>
  )
}

function RadioOption({
  id,
  label,
  checked,
  onChange,
}: {
  id: string
  label: string
  checked: boolean
  onChange: () => void
}) {
  return (
    <label
      htmlFor={id}
      style={{ display: 'flex', alignItems: 'center', gap: vars.spacing['075'], cursor: 'pointer' }}
    >
      <input
        id={id}
        type="radio"
        checked={checked}
        onChange={onChange}
        style={{ accentColor: '#038851', width: '16px', height: '16px', cursor: 'pointer' }}
      />
      <Text size="sm">{label}</Text>
    </label>
  )
}

function SectionDivider({ title }: { title: string }) {
  return (
    <div>
      <div
        style={{
          height: 1,
          backgroundColor: vars.colors.border.neutral.default.default,
          marginBottom: vars.spacing['200'],
        }}
      />
      <Text weight="medium">{title}</Text>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function CreateCampaignPage() {
  const navigate = useNavigate()
  const { addCampaign } = useCampaigns()
  const { addAgent } = useAgents()

  // Form state
  const [name, setName] = useState('')
  const [channelId, setChannelId] = useState('')
  const [brandIds, setBrandIds] = useState<string[]>([])
  const [discountTypeId, setDiscountTypeId] = useState('menu-item')
  const [menuId, setMenuId] = useState('')
  const [startDate, setStartDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [validTo, setValidTo] = useState<'never' | 'ends-on'>('never')
  const [endDate, setEndDate] = useState('')
  const [endTime, setEndTime] = useState('')
  const [activationMode, setActivationMode] = useState<'ai' | 'manual'>('ai')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [selectedGuardrail, setSelectedGuardrail] = useState<GuardrailId>('underperforming')
  const [expandedGuardrail, setExpandedGuardrail] = useState<GuardrailId | null>('underperforming')
  const [guardrailThresholds, setGuardrailThresholds] = useState<Record<GuardrailId, string>>({
    underperforming: '6',
    flat: '2',
    overperforming: '10',
  })

  const channelOptions = MOCK_CHANNELS
    .filter(c => c.id !== 'all')
    .map(c => ({ label: c.name, value: c.id }))
  const brandOptions = MOCK_BRANDS.map(b => ({ label: b.name, value: b.id }))
  const menuOptions = MOCK_MENUS.map(m => ({ label: m.name, value: m.id }))

  return (
    <Page.Root>
      {/* ── Header ── */}
      <PageHeader.Header px="300" py="200" space="100" alignY="center" style={{ flexShrink: 0 }}>
        <Inline space="150" alignY="center">
          <Button
            variant="transparent"
            size="sm"
            Icon={<ArrowDirectionLeft size="lg" />}
            aria-label="Back"
            onClick={() => navigate(-1)}
          />
          <PageHeader.Root>
            <Inline space="100" alignY="center">
              <PageHeader.Title level={3}>New Discount Campaign</PageHeader.Title>
              <Badge status="neutral" size="sm">Discount</Badge>
            </Inline>
            <PageHeader.Description>Create and schedule your campaigns</PageHeader.Description>
          </PageHeader.Root>
        </Inline>

        <Inline space="100" alignY="center" style={{ flexShrink: 0 }}>
          <Button variant="outline" status="neutral" size="sm">
            Pause
          </Button>
          <Button
            status="primary"
            size="sm"
            onClick={() => {
              const id = `dcm-${Date.now()}`
              const campName = name || 'Untitled Campaign'
              const locationDisplay = 'All locations'
              const fmt = (d: string) => {
                if (!d) return 'No end date'
                const [y, m, day] = d.split('-')
                return `${day}/${m}/${y}`
              }
              addCampaign({
                id,
                name: campName,
                initials: makeInitials(campName),
                avatarColor: pickAvatarColor(id),
                channels: channelId ? [channelId] : [],
                type: DISCOUNT_TYPE_LABELS[discountTypeId] ?? discountTypeId,
                status: activationMode === 'ai' ? 'Autonomous Agent' : 'Scheduled',
                locations: locationDisplay,
                startDate: activationMode === 'ai' ? 'AI-managed' : fmt(startDate),
                endDate: activationMode === 'ai' ? 'AI-managed' : validTo === 'never' ? 'No end date' : fmt(endDate),
              })
              if (activationMode === 'ai') {
                const agentId = `agent-dcm-${Date.now()}`
                const channelName = MOCK_CHANNELS.find(c => c.id === channelId)?.name ?? channelId
                addAgent({
                  id: agentId,
                  name: campName,
                  agentType: 'PROMOTION_AGENT',
                  enabled: true,
                  objective: `${DISCOUNT_TYPE_LABELS[discountTypeId] ?? discountTypeId} via ${channelName}`,
                  activeOn: ['All locations'],
                  createdAt: new Date().toISOString().split('T')[0],
                  locations: [],
                  promos: channelId ? [{
                    promoId: id,
                    label: DISCOUNT_TYPE_LABELS[discountTypeId] ?? discountTypeId,
                    channelId,
                    channelName,
                    conditions: [selectedGuardrail],
                    status: 'active',
                  }] : [],
                  campaignSource: 'new',
                })
              }
              navigate('/dcm/campaigns')
            }}
          >
            Publish Campaign
          </Button>
        </Inline>
      </PageHeader.Header>

      {/* ── Tab bar ── */}
      <div
        style={{
          padding: `0 ${vars.spacing['300']}`,
          flexShrink: 0,
        }}
      >
        <Tabs.Root defaultValue="details">
          <Tabs.List>
            <Tabs.Trigger value="details">Details</Tabs.Trigger>
            <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </div>

      {/* ── Body: scrollable form ── */}
      <Page.Body py="300" alignX="center">
        <Stack height="auto" space="200" style={{ maxWidth: '640px', width: '100%' }}>

          {/* ── Section: Details ── */}
          <Text weight="medium">Details</Text>

          {/* Campaign name */}
          <Input.Root label="Campaign name" required>
            <Input.Field
              placeholder="Discount Campaign April"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Input.Root>

          {/* Target locations — read-only with Change button */}
          <Input.Root label="Target locations" required>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: `${vars.spacing['100']} ${vars.spacing['150']}`,
                border: `1px solid ${vars.colors.border.neutral.default.default}`,
                borderRadius: vars.border.radius['050'],
                minHeight: '40px',
              }}
            >
              <Text size="sm" color="secondary">All locations</Text>
              <button
                type="button"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: vars.colors.text.info.static,
                  fontSize: '13px',
                  fontWeight: 500,
                  padding: 0,
                }}
              >
                Change
              </button>
            </div>
          </Input.Root>

          {/* Channel */}
          <SingleDropdown
            label="Channel"
            required
            placeholder="Select a channel"
            options={channelOptions}
            value={channelId}
            onChange={setChannelId}
          />

          {/* Brand */}
          <MultiDropdown
            label="Brand"
            placeholder="Select brands to target"
            noun="brand"
            options={brandOptions}
            selectedIds={brandIds}
            onChange={setBrandIds}
          />

          {/* Discount campaign type */}
          <SingleDropdown
            label="Discount campaign type"
            required
            options={DISCOUNT_CAMPAIGN_TYPES}
            value={discountTypeId}
            onChange={setDiscountTypeId}
          />

          {/* Menu */}
          <SingleDropdown
            label="Menu"
            required
            placeholder="Select a menu"
            options={menuOptions}
            value={menuId}
            onChange={setMenuId}
          />

          {/* ── Section: Frequency & Scheduling ── */}
          <SectionDivider title="Frequency & Scheduling" />

          {/* Activation mode */}
          <div>
            <Text
              size="sm"
              weight="medium"
              style={{ display: 'block', marginBottom: vars.spacing['100'] }}
            >
              Activation
            </Text>
            <Stack height="auto" space="075">
              <RadioOption
                id="manual-dates"
                label="Manually define start and end date"
                checked={activationMode === 'manual'}
                onChange={() => setActivationMode('manual')}
              />
              <RadioOption
                id="ai-decide"
                label="Let AI decide when to activate"
                checked={activationMode === 'ai'}
                onChange={() => setActivationMode('ai')}
              />
            </Stack>
          </div>

          {/* AI scheduling card */}
          {activationMode === 'ai' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: vars.spacing['150'],
                padding: vars.spacing['200'],
                backgroundColor: 'rgba(3, 136, 81, 0.04)',
                border: `1px solid rgba(3, 136, 81, 0.2)`,
                borderRadius: vars.border.radius['100'],
              }}
            >
              <div style={{ color: '#038851', flexShrink: 0, marginTop: '1px' }}>
                <SparklesOutline size="md" />
              </div>
              <Stack height="auto" space="025">
                <Text weight="medium" size="sm">AI-managed scheduling</Text>
                <Text size="sm" color="secondary">
                  The agent will analyse your historical sales performance and customer behaviour to trigger this campaign at the optimal moment. You can review and override at any time.
                </Text>
              </Stack>
            </div>
          )}

          {/* Manual: start date + time */}
          {activationMode === 'manual' && (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: vars.spacing['150'] }}>
                <Input.Root label="Start date" required>
                  <Input.Field
                    type="date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                  />
                </Input.Root>
                <Input.Root label="Start time" required>
                  <Input.Field
                    type="time"
                    value={startTime}
                    onChange={e => setStartTime(e.target.value)}
                  />
                </Input.Root>
              </div>

              <div>
                <Text
                  size="sm"
                  weight="medium"
                  style={{ display: 'block', marginBottom: vars.spacing['100'] }}
                >
                  Valid to
                </Text>
                <Inline space="300">
                  <RadioOption
                    id="never-ends"
                    label="Never ends"
                    checked={validTo === 'never'}
                    onChange={() => setValidTo('never')}
                  />
                  <RadioOption
                    id="ends-on"
                    label="Ends on"
                    checked={validTo === 'ends-on'}
                    onChange={() => setValidTo('ends-on')}
                  />
                </Inline>
              </div>

              {validTo === 'ends-on' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: vars.spacing['150'] }}>
                  <Input.Root label="End date" required>
                    <Input.Field
                      type="date"
                      value={endDate}
                      onChange={e => setEndDate(e.target.value)}
                    />
                  </Input.Root>
                  <Input.Root label="End time" required>
                    <Input.Field
                      type="time"
                      value={endTime}
                      onChange={e => setEndTime(e.target.value)}
                    />
                  </Input.Root>
                </div>
              )}
            </>
          )}

          {/* ── Advanced settings: Guardrails (collapsible) ── */}
          <div
            style={{
              border: `1px solid ${vars.colors.border.neutral.default.default}`,
              borderRadius: vars.border.radius['100'],
              overflow: 'hidden',
            }}
          >
            <button
              type="button"
              onClick={() => setShowAdvanced(v => !v)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: vars.spacing['150'],
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <Text weight="medium" size="sm">Advanced settings</Text>
              <div
                style={{
                  transition: 'transform 0.15s ease',
                  transform: showAdvanced ? 'rotate(180deg)' : 'rotate(0deg)',
                  display: 'flex',
                }}
              >
                <ArrowDirectionDown size="md" />
              </div>
            </button>

            {showAdvanced && (
              <div
                style={{
                  borderTop: `1px solid ${vars.colors.border.neutral.default.default}`,
                  padding: `${vars.spacing['200']} ${vars.spacing['150']} ${vars.spacing['200']}`,
                }}
              >
                <Stack height="auto" space="200">

                  {/* Guardrails header */}
                  <Stack height="auto" space="050">
                    <Text weight="medium" size="sm">Trigger promotions when sales is</Text>
                    <Text size="sm" color="secondary">
                      Define how the agent should respond to different sales performance conditions.
                    </Text>
                  </Stack>

                  {/* Guardrail cards */}
                  <Stack height="auto" space="100">
                    {GUARDRAILS.map(g => {
                      const isExpanded = expandedGuardrail === g.id
                      const isSelected = selectedGuardrail === g.id
                      return (
                        <div
                          key={g.id}
                          style={{
                            border: `1px solid ${isSelected ? 'rgba(3,136,81,0.4)' : vars.colors.border.neutral.default.default}`,
                            borderRadius: vars.border.radius['100'],
                            overflow: 'hidden',
                            backgroundColor: isSelected ? 'rgba(3,136,81,0.03)' : vars.colors.background.default,
                            transition: 'border-color 0.15s ease, background-color 0.15s ease',
                          }}
                        >
                          {/* Card header row */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              padding: vars.spacing['150'],
                              gap: vars.spacing['100'],
                            }}
                          >
                            <label
                              htmlFor={`guardrail-${g.id}`}
                              style={{ display: 'flex', alignItems: 'center', gap: vars.spacing['075'], flex: 1, cursor: 'pointer' }}
                            >
                              <input
                                id={`guardrail-${g.id}`}
                                type="radio"
                                checked={isSelected}
                                onChange={() => {
                                  setSelectedGuardrail(g.id)
                                  setExpandedGuardrail(g.id)
                                }}
                                style={{ accentColor: '#038851', width: '16px', height: '16px', cursor: 'pointer', flexShrink: 0 }}
                              />
                              <Text size="sm" weight={isSelected ? 'medium' : undefined}>{g.label}</Text>
                            </label>

                            <button
                              type="button"
                              onClick={() => setExpandedGuardrail(isExpanded ? null : g.id)}
                              style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                padding: vars.spacing['025'],
                                color: vars.colors.icon.neutral.inactive,
                                transition: 'transform 0.15s ease',
                                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                              }}
                            >
                              <ArrowDirectionDown size="sm" />
                            </button>
                          </div>

                          {/* Expanded content */}
                          {isExpanded && (
                            <div
                              style={{
                                borderTop: `1px solid ${vars.colors.border.neutral.default.default}`,
                                padding: `${vars.spacing['150']} ${vars.spacing['150']} ${vars.spacing['150']}`,
                              }}
                            >
                              <Stack height="auto" space="100">
                                <div style={{ display: 'flex', alignItems: 'center', gap: vars.spacing['100'] }}>
                                  <Input.Root label="Threshold" style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: vars.spacing['075'] }}>
                                      <Input.Field
                                        type="number"
                                        min="0"
                                        max="100"
                                        value={guardrailThresholds[g.id]}
                                        onChange={e => setGuardrailThresholds(prev => ({ ...prev, [g.id]: e.target.value }))}
                                        style={{ width: '80px' }}
                                      />
                                      <Text size="sm" color="secondary">%</Text>
                                    </div>
                                  </Input.Root>
                                </div>
                                <Text size="sm" color="secondary">{g.description}</Text>
                              </Stack>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </Stack>

                </Stack>
              </div>
            )}
          </div>

        </Stack>
      </Page.Body>
    </Page.Root>
  )
}
