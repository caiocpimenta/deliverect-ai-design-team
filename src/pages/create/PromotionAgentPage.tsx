import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowDirectionDown,
  ArrowDirectionLeft,
  ArrowDirectionUp,
  Badge,
  SparklesOutline,
  BagOutline,
  BellOutline,
  Button,
  CheckCircleFill,
  DiscountOutline,
  DropdownMenu,
  ExternalLink,
  GiftOutline,
  GraphBarOutline,
  Heading,
  Inline,
  Input,
  LightningFill,
  List,
  MailOutline,
  MegaphoneOutline,
  Percent,
  ProgressTracker,
  Stack,
  Text,
  Toggle,
  vars,
} from '@deliverect/galaxy-react'
import { Page } from '../../components/Page'
import { Step } from '../../components/Step'
import { MOCK_CHANNELS, MOCK_LOCATIONS, MOCK_MENUS } from '../../data/mockAgents'
import { useCampaigns } from '../../context/CampaignsContext'
import { makeInitials, pickAvatarColor } from '../../data/campaigns'
import { MultiDropdown } from '../../components/MultiDropdown'
import { useAgents } from '../../context/AgentsContext'

// ─── Static data ──────────────────────────────────────────────────────────────

type CampaignSource = 'new' | 'existing' | 'auto'

const AGENT_GOALS = [
  { id: 'revenue',   label: 'Maximise revenue',          description: 'Optimise promotions to drive the highest revenue across your locations.' },
  { id: 'frequency', label: 'Increase order frequency',  description: 'Encourage customers to order more often with targeted deals.' },
  { id: 'slow',      label: 'Recover slow periods',      description: 'Activate offers during historically low-traffic hours and days.' },
  { id: 'acquire',   label: 'Drive new customers',       description: 'Focus on acquisition-oriented offers to grow your customer base.' },
]

interface PromoType {
  id: string
  label: string
  description: string
  icon: React.ReactNode
  hasValue?: boolean
  valueLabel?: string
  defaultValue?: number
}

const CHANNEL_PROMOS: Record<string, PromoType[]> = {
  'uber-eats': [
    { id: 'ue-bogo', label: 'Buy One Get One', description: 'Customer buys one item and gets another free.', icon: <GiftOutline size="md" /> },
    { id: 'ue-free-item', label: 'Free item with purchase', description: 'Get a free item when spending above a minimum.', icon: <GiftOutline size="md" />, hasValue: true, valueLabel: 'Min spend (£)', defaultValue: 20 },
    { id: 'ue-pct-discount', label: 'Percentage discount', description: 'Reduce the order total by a percentage.', icon: <Percent size="md" />, hasValue: true, valueLabel: 'Discount (%)', defaultValue: 20 },
    { id: 'ue-free-delivery', label: 'No delivery fee', description: 'Waive delivery fees for qualifying orders.', icon: <BagOutline size="md" /> },
    { id: 'ue-happy-hour', label: 'Happy Hour', description: 'Time-limited discount during off-peak periods.', icon: <DiscountOutline size="md" />, hasValue: true, valueLabel: 'Discount (%)', defaultValue: 15 },
    { id: 'ue-bundle', label: 'Bundle deal', description: 'Discount when ordering specific item combinations.', icon: <BagOutline size="md" />, hasValue: true, valueLabel: 'Discount (%)', defaultValue: 10 },
  ],
  'deliveroo': [
    { id: 'dr-pct-off', label: 'Percentage off', description: 'Discount on the total order value.', icon: <Percent size="md" />, hasValue: true, valueLabel: 'Discount (%)', defaultValue: 20 },
    { id: 'dr-free-item', label: 'Free item', description: 'Include a free item with any order.', icon: <GiftOutline size="md" /> },
    { id: 'dr-spend-save', label: 'Spend & save', description: 'Spend over a threshold, save a fixed amount.', icon: <DiscountOutline size="md" />, hasValue: true, valueLabel: 'Min spend (£)', defaultValue: 25 },
    { id: 'dr-free-delivery', label: 'Free delivery', description: 'Waive delivery fees on all orders.', icon: <BagOutline size="md" /> },
  ],
  'just-eat': [
    { id: 'je-pct-discount', label: 'Percentage discount', description: 'Discount applied to orders.', icon: <Percent size="md" />, hasValue: true, valueLabel: 'Discount (%)', defaultValue: 15 },
    { id: 'je-voucher', label: 'Voucher code', description: 'Generate a discount voucher for customers.', icon: <DiscountOutline size="md" />, hasValue: true, valueLabel: 'Discount (£)', defaultValue: 5 },
    { id: 'je-multibuy', label: 'Multi-buy deal', description: 'Buy multiple items at a reduced combined price.', icon: <BagOutline size="md" /> },
  ],
}

const ALL_CHANNEL_IDS = Object.keys(CHANNEL_PROMOS)

interface OffPlatformOption {
  id: string
  label: string
  description: string
  icon: React.ReactNode
  hasBudget?: boolean
  budgetLabel?: string
}

const OFF_PLATFORM_OPTIONS: OffPlatformOption[] = [
  { id: 'facebook-ads', label: 'Facebook Ads', description: 'Launch a sponsored ad campaign on Facebook & Instagram.', icon: <MegaphoneOutline size="lg" />, hasBudget: true, budgetLabel: 'Daily ad budget (£)' },
  { id: 'google-ads', label: 'Google Ads', description: 'Run a search or display campaign on Google.', icon: <ExternalLink size="lg" />, hasBudget: true, budgetLabel: 'Daily ad budget (£)' },
  { id: 'email-campaign', label: 'Email Campaign', description: 'Send a promotional email to your subscriber list.', icon: <MailOutline size="lg" /> },
  { id: 'push-notification', label: 'Push Notification', description: 'Send an in-app notification to recent customers.', icon: <BellOutline size="lg" /> },
]

type SalesCondition = 'underperforming' | 'flat' | 'overperforming'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getPromoLabel(id: string): string {
  for (const promos of Object.values(CHANNEL_PROMOS)) {
    const found = promos.find(p => p.id === id)
    if (found) return found.label
  }
  return id
}

function getChannelName(id: string): string {
  return MOCK_CHANNELS.find(c => c.id === id)?.name ?? id
}

// ─── Step 1: Scope ────────────────────────────────────────────────────────────

function makeAllFirstHandler(
  current: string[],
  setter: (ids: string[]) => void
) {
  return (ids: string[]) => {
    const prevHadAll = current.includes('all')
    const newHasAll = ids.includes('all')
    if (!prevHadAll && newHasAll) {
      setter(['all'])
    } else if (prevHadAll && ids.length > 1) {
      setter(ids.filter(id => id !== 'all'))
    } else {
      setter(ids)
    }
  }
}

function ScopeStep({
  locationIds,
  menuIds,
  onLocationsChange,
  onMenusChange,
}: {
  locationIds: string[]
  menuIds: string[]
  onLocationsChange: (ids: string[]) => void
  onMenusChange: (ids: string[]) => void
}) {
  const locationOptions = [
    { label: 'All locations', value: 'all' },
    ...MOCK_LOCATIONS.map(l => ({ label: l.name, value: l.id })),
  ]
  const menuOptions = [
    { label: 'All menus', value: 'all' },
    ...MOCK_MENUS.map(m => ({ label: m.name, value: m.id })),
  ]

  return (
    <Stack height="auto" space="250">
      <MultiDropdown
        label="Locations"
        description="Select which locations this agent should manage."
        placeholder="Choose locations"
        noun="location"
        options={locationOptions}
        selectedIds={locationIds}
        onChange={makeAllFirstHandler(locationIds, onLocationsChange)}
      />
      <MultiDropdown
        label="Menu"
        description="Select which menus this agent's promotions should apply to."
        placeholder="Choose menus"
        noun="menu"
        options={menuOptions}
        selectedIds={menuIds}
        onChange={makeAllFirstHandler(menuIds, onMenusChange)}
      />
    </Stack>
  )
}

// ─── Step 3: Promotions & Guardrails ─────────────────────────────────────────

// Default thresholds used per condition when none is set per-promo
const DEFAULT_THRESHOLDS: Record<SalesCondition, number> = {
  underperforming: 20,
  flat: 10,
  overperforming: 30,
}

// Condition metadata — colors, icons, descriptions
const CONDITION_META: Record<SalesCondition, {
  label: string
  accentColor: string
  subtleColor: string
  icon: React.ReactNode
  description: (threshold: number) => string
}> = {
  underperforming: {
    label: 'Underperforming',
    accentColor: vars.colors.text.critical.static,
    subtleColor: vars.colors.fill.critical.static.subtle,
    icon: <ArrowDirectionDown size="sm" />,
    description: t => `Sales drop more than ${t}% below the weekly average`,
  },
  flat: {
    label: 'Flat',
    accentColor: vars.colors.text.neutral.default.default,
    subtleColor: vars.colors.surface.neutral.active,
    icon: <GraphBarOutline size="sm" />,
    description: t => `Sales within ±${t}% of the weekly average`,
  },
  overperforming: {
    label: 'Overperforming',
    accentColor: vars.colors.text.success.static,
    subtleColor: vars.colors.fill.success.static.subtle,
    icon: <ArrowDirectionUp size="sm" />,
    description: t => `Sales exceed ${t}% above the weekly average`,
  },
}

// Source picker card (unchanged)
function SourceCard({ id, title, description, selected, onSelect }: {
  id: CampaignSource
  title: string
  description: string
  selected: boolean
  onSelect: () => void
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1, padding: vars.spacing['200'], cursor: 'pointer',
        border: `2px solid ${selected ? vars.colors.border.neutral.static.emphasize : hovered ? vars.colors.border.neutral.default.hover : vars.colors.border.neutral.default.default}`,
        borderRadius: vars.border.radius['100'],
        backgroundColor: selected ? vars.colors.surface.neutral.active : hovered ? vars.colors.surface.neutral.hover : vars.colors.background.default,
        transition: 'all 0.15s ease', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: vars.spacing['150'],
      }}
    >
      <Stack height="auto" space="025">
        <Text weight="bold" size="sm">{title}</Text>
        <Text size="sm" color="secondary">{description}</Text>
      </Stack>
      {selected && <div style={{ flexShrink: 0, color: vars.colors.icon.neutral.interactive.bold.default }}><CheckCircleFill size="md" /></div>}
    </div>
  )
}

// Flat cross-channel promo list
function FlatPromosList({
  channelIds, enabledPromos, promoValues,
  onTogglePromo, onPromoValueChange,
}: {
  channelIds: string[]
  enabledPromos: Record<string, string[]>
  promoValues: Record<string, number>
  onTogglePromo: (channelId: string, promoId: string) => void
  onPromoValueChange: (promoId: string, value: number) => void
}) {
  const [search, setSearch] = useState('')
  const [channelFilter, setChannelFilter] = useState<string | null>(null)

  const allPromos = channelIds.flatMap(chId =>
    (CHANNEL_PROMOS[chId] ?? []).map(p => ({ channelId: chId, promo: p }))
  )
  const filtered = allPromos.filter(({ channelId, promo }) => {
    if (channelFilter && channelId !== channelFilter) return false
    if (search && !promo.label.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <Stack height="auto" space="150">
      {/* Filter bar */}
      <Inline space="100" alignY="center">
        <div style={{ flex: 1 }}>
          <Input.Root>
            <Input.Field placeholder="Search promotions…" value={search} onChange={e => setSearch(e.target.value)} />
          </Input.Root>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.ButtonTrigger variant="outline" status="neutral" TrailingIcon={<ArrowDirectionDown size="md" />}>
            {channelFilter ? getChannelName(channelFilter) : 'All channels'}
          </DropdownMenu.ButtonTrigger>
          <DropdownMenu.Content>
            <DropdownMenu.CheckboxItem checked={channelFilter === null} onCheckedChange={() => setChannelFilter(null)}>
              All channels
            </DropdownMenu.CheckboxItem>
            {channelIds.map(chId => (
              <DropdownMenu.CheckboxItem key={chId} checked={channelFilter === chId}
                onCheckedChange={() => setChannelFilter(channelFilter === chId ? null : chId)}>
                {getChannelName(chId)}
              </DropdownMenu.CheckboxItem>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Inline>

      {filtered.length === 0 ? (
        <Text size="sm" color="secondary" style={{ padding: vars.spacing['200'], textAlign: 'center' }}>
          No promotions match your filters.
        </Text>
      ) : (
        <Stack borderRadius="100" borderWidth={1} style={{ borderColor: vars.colors.border.neutral.default.default, overflow: 'hidden' }}>
          {filtered.map(({ channelId, promo }, i) => {
            const isEnabled = (enabledPromos[channelId] ?? []).includes(promo.id)
            const isLast = i === filtered.length - 1
            const currentValue = promoValues[promo.id] ?? promo.defaultValue ?? 0

            return (
              <div
                key={`${channelId}|${promo.id}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: vars.spacing['150'],
                  padding: `${vars.spacing['150']} ${vars.spacing['200']}`,
                  borderBottom: !isLast ? `1px solid ${vars.colors.border.neutral.default.default}` : undefined,
                  backgroundColor: vars.colors.background.default,
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ color: isEnabled ? vars.colors.icon.neutral.interactive.bold.default : vars.colors.icon.neutral.inactive, flexShrink: 0 }}>
                  {promo.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Inline space="100" alignY="center" style={{ marginBottom: '2px' }}>
                    <Text weight="medium" size="sm">{promo.label}</Text>
                    <Badge size="sm" status="neutral">{getChannelName(channelId)}</Badge>
                  </Inline>
                  <Text size="sm" color="secondary">{promo.description}</Text>
                  {isEnabled && promo.hasValue && (
                    <div style={{ width: '160px', marginTop: vars.spacing['075'] }}>
                      <Input.Group>
                        <Input.Field type="number" min={1} max={100} value={currentValue}
                          onChange={e => onPromoValueChange(promo.id, Number(e.target.value))} />
                        <Input.RightAddon>{promo.valueLabel?.includes('%') ? '%' : '£'}</Input.RightAddon>
                      </Input.Group>
                    </div>
                  )}
                </div>
                <div style={{ flexShrink: 0 }}>
                  <Toggle checked={isEnabled} onCheckedChange={() => onTogglePromo(channelId, promo.id)} />
                </div>
              </div>
            )
          })}
        </Stack>
      )}
    </Stack>
  )
}

// Existing campaigns list — reads from CampaignsContext, grouped by promotion type
function ExistingCampaignsSection({
  selectedCampaignIds, onGroupToggle,
}: {
  selectedCampaignIds: string[]
  onGroupToggle: (ids: string[], enable: boolean) => void
}) {
  const { campaigns } = useCampaigns()

  const groups: Record<string, typeof campaigns> = {}
  for (const camp of campaigns) {
    if (!groups[camp.type]) groups[camp.type] = []
    groups[camp.type].push(camp)
  }
  const groupEntries = Object.entries(groups)

  const badgeStatus = (s: string) =>
    s === 'Live' ? 'success' : s === 'Scheduled' ? 'info' : 'neutral'

  return (
    <Stack height="auto" space="150">
      {/* Template notice */}
      <div
        style={{
          display: 'flex', alignItems: 'flex-start', gap: vars.spacing['125'],
          padding: vars.spacing['150'],
          backgroundColor: 'rgba(3, 136, 81, 0.04)',
          border: '1px solid rgba(3, 136, 81, 0.2)',
          borderRadius: vars.border.radius['100'],
        }}
      >
        <div style={{ color: '#038851', flexShrink: 0, marginTop: '1px' }}>
          <SparklesOutline size="sm" />
        </div>
        <Text size="sm" color="secondary">
          Selected campaigns are used as a <strong>starting point only</strong>. The agent will create new promotions based on their settings — your original campaigns won't be modified.
        </Text>
      </div>

      {groupEntries.length === 0 ? (
        <Text size="sm" color="secondary" style={{ padding: vars.spacing['300'], textAlign: 'center' }}>
          No campaigns found.
        </Text>
      ) : (
        <Stack borderRadius="100" borderWidth={1} style={{ borderColor: vars.colors.border.neutral.default.default, overflow: 'hidden' }}>
          {groupEntries.map(([type, group], i) => {
            const isLast = i === groupEntries.length - 1
            const groupIds = group.map(c => c.id)
            const isEnabled = groupIds.some(id => selectedCampaignIds.includes(id))

            return (
              <div
                key={type}
                style={{
                  display: 'flex', alignItems: 'center', gap: vars.spacing['150'],
                  padding: `${vars.spacing['150']} ${vars.spacing['200']}`,
                  borderBottom: !isLast ? `1px solid ${vars.colors.border.neutral.default.default}` : undefined,
                  backgroundColor: vars.colors.background.default,
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ color: isEnabled ? vars.colors.icon.neutral.interactive.bold.default : vars.colors.icon.neutral.inactive, flexShrink: 0 }}>
                  <DiscountOutline size="md" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Text weight="medium" size="sm">{type}</Text>
                  <div style={{ marginTop: '4px', display: 'flex', flexWrap: 'wrap', gap: `${vars.spacing['050']} ${vars.spacing['100']}` }}>
                    {group.map(camp => (
                      <Inline key={camp.id} space="050" alignY="center">
                        {camp.channels.map(ch => (
                          <Badge key={ch} size="sm" status={badgeStatus(camp.status) as 'success' | 'info' | 'neutral'}>
                            {getChannelName(ch)}
                          </Badge>
                        ))}
                        <Text size="sm" color="secondary">{camp.name}</Text>
                      </Inline>
                    ))}
                  </div>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <Toggle
                    checked={isEnabled}
                    onCheckedChange={() => onGroupToggle(groupIds, !isEnabled)}
                  />
                </div>
              </div>
            )
          })}
        </Stack>
      )}
    </Stack>
  )
}

// ─── Step 4: Off-platform ─────────────────────────────────────────────────────

function OffPlatformStep({
  offPlatformEnabled,
  offPlatformBudget,
  onToggle,
  onBudgetChange,
}: {
  offPlatformEnabled: Record<string, boolean>
  offPlatformBudget: Record<string, number>
  onToggle: (id: string) => void
  onBudgetChange: (id: string, value: number) => void
}) {
  return (
    <Stack height="auto" space="150">
      <div
        style={{
          padding: vars.spacing['200'],
          backgroundColor: vars.colors.surface.neutral.active,
          borderRadius: vars.border.radius['100'],
          border: `1px solid ${vars.colors.border.neutral.static.emphasize}`,
        }}
      >
        <Inline space="100" alignY="center">
          <LightningFill size="md" />
          <Text size="sm">
            Configure external channels here. You can then trigger them from the <strong>Guardrails</strong> step when a sales condition is met.
          </Text>
        </Inline>
      </div>

      <Stack
        borderRadius="100"
        borderWidth={1}
        style={{ borderColor: vars.colors.border.neutral.default.default, overflow: 'hidden' }}
      >
        {OFF_PLATFORM_OPTIONS.map((option, i) => {
          const isEnabled = offPlatformEnabled[option.id] ?? false
          const budget = offPlatformBudget[option.id] ?? 50
          const isLast = i === OFF_PLATFORM_OPTIONS.length - 1
          return (
            <List.Root
              key={option.id}
              type={isLast ? 'default' : 'divider'}
              borderTopRadius={i === 0 ? 'md' : undefined}
              borderBottomRadius={isLast ? 'md' : undefined}
            >
              <List.Prefix>
                <div style={{ color: isEnabled ? vars.colors.icon.neutral.interactive.bold.default : vars.colors.icon.neutral.inactive }}>
                  {option.icon}
                </div>
              </List.Prefix>
              <List.Title>
                <Text weight="medium">{option.label}</Text>
              </List.Title>
              <List.Description>
                <Stack height="auto" space="100">
                  <Text size="sm" color="secondary">{option.description}</Text>
                  {isEnabled && option.hasBudget && (
                    <div style={{ width: '160px' }}>
                      <Input.Root label={option.budgetLabel ?? 'Budget'}>
                        <Input.Group>
                          <Input.LeftAddon>£</Input.LeftAddon>
                          <Input.Field
                            type="number"
                            min={1}
                            value={budget}
                            onChange={e => onBudgetChange(option.id, Number(e.target.value))}
                          />
                        </Input.Group>
                      </Input.Root>
                    </div>
                  )}
                </Stack>
              </List.Description>
              <List.Suffix alignY="center">
                <Toggle checked={isEnabled} onCheckedChange={() => onToggle(option.id)} />
              </List.Suffix>
            </List.Root>
          )
        })}
      </Stack>
    </Stack>
  )
}

// ─── Step 2: Promotions ───────────────────────────────────────────────────────

function PromotionsStep({
  channelIds,
  campaignSource,
  onSourceChange,
  selectedCampaignIds,
  onCampaignToggle,
  enabledPromos,
  promoValues,
  onTogglePromo,
  onPromoValueChange,
  agentGoal,
  onGoalChange,
}: {
  channelIds: string[]
  campaignSource: CampaignSource
  onSourceChange: (s: CampaignSource) => void
  selectedCampaignIds: string[]
  onCampaignToggle: (ids: string[], enable: boolean) => void
  enabledPromos: Record<string, string[]>
  promoValues: Record<string, number>
  onTogglePromo: (channelId: string, promoId: string) => void
  onPromoValueChange: (promoId: string, value: number) => void
  agentGoal: string
  onGoalChange: (id: string) => void
}) {
  const [autoAdvancedOpen, setAutoAdvancedOpen] = useState(false)

  return (
    <Stack height="auto" space="250">
      {/* Source picker — 3 cards */}
      <Inline space="150" alignY="stretch">
        <SourceCard
          id="auto"
          title="AI automation"
          description="Set a goal and let the agent decide which promotions to run and when."
          selected={campaignSource === 'auto'}
          onSelect={() => onSourceChange('auto')}
        />
        <SourceCard
          id="new"
          title="Configure manually"
          description="Choose exactly which promotion types the agent is allowed to use per channel."
          selected={campaignSource === 'new'}
          onSelect={() => onSourceChange('new')}
        />
        <SourceCard
          id="existing"
          title="Start from existing campaigns"
          description="Use existing campaigns as a starting point. Your originals won't be changed."
          selected={campaignSource === 'existing'}
          onSelect={() => onSourceChange('existing')}
        />
      </Inline>

      {/* Auto: goal picker + optional advanced promo constraints */}
      {campaignSource === 'auto' && (
        <Stack height="auto" space="150">
          {/* Goal selection */}
          <Stack borderRadius="100" borderWidth={1} style={{ borderColor: vars.colors.border.neutral.default.default, overflow: 'hidden' }}>
            {AGENT_GOALS.map((goal, i) => {
              const isSelected = agentGoal === goal.id
              const isLast = i === AGENT_GOALS.length - 1
              return (
                <div
                  key={goal.id}
                  onClick={() => onGoalChange(goal.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: vars.spacing['150'],
                    padding: `${vars.spacing['150']} ${vars.spacing['200']}`,
                    borderBottom: !isLast ? `1px solid ${vars.colors.border.neutral.default.default}` : undefined,
                    backgroundColor: isSelected ? 'rgba(3,136,81,0.04)' : vars.colors.background.default,
                    cursor: 'pointer', transition: 'background-color 0.1s ease',
                  }}
                >
                  <div style={{
                    width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                    border: `2px solid ${isSelected ? '#038851' : vars.colors.border.neutral.default.default}`,
                    backgroundColor: isSelected ? '#038851' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.15s ease',
                  }}>
                    {isSelected && <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#fff' }} />}
                  </div>
                  <Stack height="auto" space="0" style={{ flex: 1 }}>
                    <Text weight={isSelected ? 'medium' : 'regular'} size="sm">{goal.label}</Text>
                    <Text size="sm" color="secondary">{goal.description}</Text>
                  </Stack>
                </div>
              )
            })}
          </Stack>

          {/* Advanced settings toggle */}
          <button
            type="button"
            onClick={() => setAutoAdvancedOpen(v => !v)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              display: 'flex', alignItems: 'center', gap: vars.spacing['075'],
              color: vars.colors.text.info.static, alignSelf: 'flex-start',
            }}
          >
            <Text size="sm" style={{ color: 'inherit' }}>Advanced settings</Text>
            <div style={{
              display: 'flex', transition: 'transform 0.15s ease',
              transform: autoAdvancedOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}>
              <ArrowDirectionDown size="sm" />
            </div>
          </button>

          {autoAdvancedOpen && (
            <Stack height="auto" space="100">
              <Text size="sm" color="secondary">
                Optionally restrict the promotion types the agent is allowed to use. If none are selected, the agent has full freedom to choose.
              </Text>
              <FlatPromosList
                channelIds={channelIds}
                enabledPromos={enabledPromos}
                promoValues={promoValues}
                onTogglePromo={onTogglePromo}
                onPromoValueChange={onPromoValueChange}
              />
            </Stack>
          )}
        </Stack>
      )}

      {campaignSource === 'new' && (
        <FlatPromosList
          channelIds={channelIds}
          enabledPromos={enabledPromos}
          promoValues={promoValues}
          onTogglePromo={onTogglePromo}
          onPromoValueChange={onPromoValueChange}
        />
      )}

      {campaignSource === 'existing' && (
        <ExistingCampaignsSection
          selectedCampaignIds={selectedCampaignIds}
          onGroupToggle={onCampaignToggle}
        />
      )}
    </Stack>
  )
}

// ─── Step 4: Guardrails ───────────────────────────────────────────────────────

function GuardrailsStep({
  agentGuardrail,
  guardrailThresholds,
  onSelect,
  onThresholdChange,
}: {
  agentGuardrail: SalesCondition
  guardrailThresholds: Partial<Record<SalesCondition, number>>
  onSelect: (condition: SalesCondition) => void
  onThresholdChange: (condition: SalesCondition, v: number) => void
}) {
  return (
    <Stack height="auto" space="150">
      {(['underperforming', 'flat', 'overperforming'] as SalesCondition[]).map(condition => {
        const meta = CONDITION_META[condition]
        const isActive = agentGuardrail === condition
        const threshold = guardrailThresholds[condition] ?? DEFAULT_THRESHOLDS[condition]

        return (
          <div
            key={condition}
            style={{
              backgroundColor: vars.colors.background.default,
              borderRadius: vars.border.radius['100'],
              border: `1px solid ${isActive ? meta.accentColor : vars.colors.border.neutral.default.default}`,
              overflow: 'hidden',
              transition: 'border-color 0.15s ease',
            }}
          >
            {/* Header row */}
            <div
              onClick={() => onSelect(condition)}
              style={{
                display: 'flex', alignItems: 'center', gap: vars.spacing['150'],
                padding: `${vars.spacing['150']} ${vars.spacing['200']}`, cursor: 'pointer',
              }}
            >
              <div style={{
                width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                border: `2px solid ${isActive ? meta.accentColor : vars.colors.border.neutral.default.default}`,
                backgroundColor: isActive ? meta.accentColor : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.15s ease',
              }}>
                {isActive && <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: vars.colors.background.default }} />}
              </div>
              <div style={{ color: isActive ? meta.accentColor : vars.colors.icon.neutral.inactive, display: 'flex', alignItems: 'center' }}>
                {meta.icon}
              </div>
              <Stack height="auto" space="0" style={{ flex: 1 }}>
                <Text weight="medium" size="sm">{meta.label}</Text>
                <Text size="sm" color="secondary">{meta.description(threshold)}</Text>
              </Stack>
              <div style={{
                color: vars.colors.icon.neutral.inactive, display: 'flex', alignItems: 'center',
                transform: isActive ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease',
              }}>
                <ArrowDirectionDown size="sm" />
              </div>
            </div>

            {/* Expanded threshold input */}
            {isActive && (
              <div style={{
                padding: `${vars.spacing['150']} ${vars.spacing['200']}`,
                borderTop: `1px solid ${vars.colors.border.neutral.default.default}`,
                backgroundColor: meta.subtleColor,
              }}>
                <Inline space="100" alignY="center">
                  <Text size="sm" color="secondary">Threshold</Text>
                  <div style={{ width: '120px' }}>
                    <Input.Group>
                      <Input.Field
                        type="number" min={1} max={99} value={threshold}
                        onChange={e => onThresholdChange(condition, Number(e.target.value))}
                        style={{ textAlign: 'right' }}
                      />
                      <Input.RightAddon>%</Input.RightAddon>
                    </Input.Group>
                  </div>
                </Inline>
              </div>
            )}
          </div>
        )
      })}
    </Stack>
  )
}

// ─── Step 5: Details ──────────────────────────────────────────────────────────

function DetailsStep({
  agentName, locationIds, menuIds, campaignSource,
  selectedCampaignIds, enabledPromos, offPlatformEnabled, agentGuardrail, agentGoal,
  onNameChange,
}: {
  agentName: string
  locationIds: string[]
  menuIds: string[]
  campaignSource: CampaignSource
  selectedCampaignIds: string[]
  enabledPromos: Record<string, string[]>
  offPlatformEnabled: Record<string, boolean>
  agentGuardrail: SalesCondition
  agentGoal: string
  onNameChange: (v: string) => void
}) {
  const locationValue = locationIds.includes('all')
    ? 'All locations'
    : MOCK_LOCATIONS.filter(l => locationIds.includes(l.id)).map(l => l.name).join(', ') || 'None selected'
  const menuValue = menuIds.includes('all')
    ? 'All menus'
    : MOCK_MENUS.filter(m => menuIds.includes(m.id)).map(m => m.name).join(', ') || 'None selected'
  const totalPromos = campaignSource === 'existing'
    ? selectedCampaignIds.length
    : ALL_CHANNEL_IDS.reduce((s, chId) => s + (enabledPromos[chId]?.length ?? 0), 0)
  const offPlatformCount = OFF_PLATFORM_OPTIONS.filter(o => offPlatformEnabled[o.id]).length
  const guardrailLabel = CONDITION_META[agentGuardrail].label
  const goalLabel = AGENT_GOALS.find(g => g.id === agentGoal)?.label ?? agentGoal

  const promotionRow = campaignSource === 'auto'
    ? { label: 'Goal', value: goalLabel }
    : { label: campaignSource === 'existing' ? 'Campaigns' : 'Promotion types', value: `${totalPromos} enabled` }

  const rows = [
    { label: 'Locations', value: locationValue },
    { label: 'Menus', value: menuValue },
    promotionRow,
    { label: 'Agent guardrail', value: guardrailLabel },
    { label: 'Off-platform actions', value: offPlatformCount > 0 ? `${offPlatformCount} configured` : 'None' },
  ]

  return (
    <Stack height="auto" space="250">
      <Input.Root label="Agent name" description="Give your promotion agent a memorable name." required>
        <Input.Field
          placeholder="e.g. Weekend Sales Booster"
          value={agentName}
          onChange={e => onNameChange(e.target.value)}
        />
      </Input.Root>

      <Step.Group>
        <Text weight="medium">Configuration summary</Text>
        <div
          style={{
            borderRadius: vars.border.radius['100'],
            border: `1px solid ${vars.colors.border.neutral.default.default}`,
            overflow: 'hidden',
          }}
        >
          {rows.map((row, i) => (
            <div
              key={row.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: `${vars.spacing['150']} ${vars.spacing['200']}`,
                borderBottom: i < rows.length - 1 ? `1px solid ${vars.colors.border.neutral.default.default}` : undefined,
              }}
            >
              <Text size="sm" color="secondary">{row.label}</Text>
              <Text size="sm" weight="medium" style={{ textAlign: 'right', maxWidth: '55%' }}>{row.value}</Text>
            </div>
          ))}
        </div>
      </Step.Group>
    </Stack>
  )
}

// ─── Main wizard ──────────────────────────────────────────────────────────────

const STEP_TITLES = [
  {
    title: 'Where should the agent work?',
    description: 'Select the locations this agent will manage promotions on.',
  },
  {
    title: 'Choose your promotions',
    description: 'Select which promotions the agent is allowed to use.',
  },
  {
    title: 'Configure off-platform actions',
    description: 'Optionally connect external channels like Facebook Ads or email campaigns.',
  },
  {
    title: 'Set your guardrails',
    description: 'Define the sales conditions that activate the agent across all promotions and off-platform channels.',
  },
  {
    title: 'Name your agent',
    description: 'Review your configuration and give the agent a name before activating it.',
  },
]

export function PromotionAgentPage() {
  const navigate = useNavigate()
  const { addAgent } = useAgents()
  const { campaigns, addCampaign } = useCampaigns()
  const [step, setStep] = useState(1)

  // Step 1
  const [locationIds, setLocationIds] = useState<string[]>(['all'])
  const [menuIds, setMenuIds] = useState<string[]>(['all'])

  // Step 2 — promotions
  const [campaignSource, setCampaignSource] = useState<CampaignSource>('auto')
  const [agentGoal, setAgentGoal] = useState('revenue')
  const [selectedCampaignIds, setSelectedCampaignIds] = useState<string[]>([])
  const [enabledPromos, setEnabledPromos] = useState<Record<string, string[]>>({})
  const [promoValues, setPromoValues] = useState<Record<string, number>>({})

  // Step 3 — off-platform
  const [offPlatformEnabled, setOffPlatformEnabled] = useState<Record<string, boolean>>({})
  const [offPlatformBudget, setOffPlatformBudget] = useState<Record<string, number>>({})

  // Step 4 — agent-level guardrail (single condition)
  const [agentGuardrail, setAgentGuardrail] = useState<SalesCondition>('underperforming')
  const [guardrailThresholds, setGuardrailThresholds] = useState<Partial<Record<SalesCondition, number>>>({
    underperforming: DEFAULT_THRESHOLDS.underperforming,
    flat: DEFAULT_THRESHOLDS.flat,
    overperforming: DEFAULT_THRESHOLDS.overperforming,
  })

  // Step 5 — review & name
  const [agentName, setAgentName] = useState('')

  const stepInfo = STEP_TITLES[step - 1]

  const canNext = () => {
    if (step === 1) return locationIds.length > 0
    if (step === 2) {
      if (campaignSource === 'auto') return true
      if (campaignSource === 'existing') return selectedCampaignIds.length > 0
      return ALL_CHANNEL_IDS.some(ch => (enabledPromos[ch]?.length ?? 0) > 0)
    }
    if (step === 3) return true
    if (step === 4) return true
    if (step === 5) return agentName.trim().length > 0
    return false
  }

  const handleTogglePromo = (channelId: string, promoId: string) => {
    setEnabledPromos(prev => {
      const current = prev[channelId] ?? []
      return {
        ...prev,
        [channelId]: current.includes(promoId)
          ? current.filter(id => id !== promoId)
          : [...current, promoId],
      }
    })
    const promo = CHANNEL_PROMOS[channelId]?.find(p => p.id === promoId)
    if (promo?.hasValue && !promoValues[promoId]) {
      setPromoValues(prev => ({ ...prev, [promoId]: promo.defaultValue ?? 10 }))
    }
  }

  const handleCampaignToggle = (ids: string[], enable: boolean) => {
    setSelectedCampaignIds(prev =>
      enable
        ? [...new Set([...prev, ...ids])]
        : prev.filter(id => !ids.includes(id))
    )
  }

  const handleSelectGuardrail = (condition: SalesCondition) => setAgentGuardrail(condition)

  const isAuto = campaignSource === 'auto'
  const totalSteps = isAuto ? 4 : 5
  const displayStep = isAuto && step === 5 ? 4 : step

  const handleBack = () => {
    if (step === 1) navigate('/agents/create')
    else if (isAuto && step === 5) setStep(3)
    else setStep(s => s - 1)
  }

  const handleNext = () => {
    if (step < 5) {
      setStep(isAuto && step === 3 ? 5 : s => s + 1)
    } else {
      const locationNames = locationIds.includes('all')
        ? ['All locations']
        : locationIds.map(id => MOCK_LOCATIONS.find(l => l.id === id)?.name ?? id)
      const activeOn = locationNames.length > 3
        ? [...locationNames.slice(0, 2), `+${locationNames.length - 2}`]
        : locationNames
      const locations = (locationIds.includes('all') ? MOCK_LOCATIONS : MOCK_LOCATIONS.filter(l => locationIds.includes(l.id)))
        .map(l => ({ id: l.id, name: l.name, cycleStatus: 'idle' as const, totalOrders: 0, totalRevenue: 0, avgAov: 0, multiProductPct: 0, status: 'active' as const }))
      const enabledChannelCount = ALL_CHANNEL_IDS.filter(ch => (enabledPromos[ch]?.length ?? 0) > 0).length
      const goalLabel = AGENT_GOALS.find(g => g.id === agentGoal)?.label ?? agentGoal
      const objective = campaignSource === 'auto'
        ? goalLabel
        : campaignSource === 'existing'
          ? `Manage ${selectedCampaignIds.length} existing campaign${selectedCampaignIds.length !== 1 ? 's' : ''}`
          : `Automate promotions across ${enabledChannelCount} channel${enabledChannelCount !== 1 ? 's' : ''}`

      // Build promos array for the detail page
      const promos = campaignSource === 'existing'
        ? selectedCampaignIds.flatMap(id => {
            const camp = campaigns.find(c => c.id === id)
            if (!camp) return []
            return [{
              promoId: id,
              label: camp.name,
              channelId: camp.channels[0] ?? '',
              channelName: camp.channels.map(ch => MOCK_CHANNELS.find(c => c.id === ch)?.name ?? ch).join(', '),
              conditions: [agentGuardrail],
              status: 'active' as const,
            }]
          })
        : Object.entries(enabledPromos).flatMap(([channelId, promoIds]) =>
            promoIds.map(promoId => ({
              promoId,
              label: getPromoLabel(promoId),
              channelId,
              channelName: MOCK_CHANNELS.find(c => c.id === channelId)?.name ?? channelId,
              conditions: [agentGuardrail],
              status: 'active' as const,
            }))
          )

      // Mirror into Campaign Manager as a single grouped Autonomous Agent campaign
      if (promos.length > 0 || campaignSource === 'auto') {
        const campId = `agent-camp-${Date.now()}`
        const uniqueChannelIds = [...new Set(promos.map(p => p.channelId))]
        addCampaign({
          id: campId,
          name: agentName,
          initials: makeInitials(agentName),
          avatarColor: pickAvatarColor(campId),
          channels: uniqueChannelIds,
          type: 'Autonomous Agent',
          status: 'Autonomous Agent',
          locations: locationIds.includes('all') ? 'All locations' : `${locationIds.length} location${locationIds.length !== 1 ? 's' : ''}`,
          startDate: 'AI-managed',
          endDate: 'AI-managed',
          promos: promos.map(p => ({
            label: p.label,
            channelName: p.channelName,
            conditions: p.conditions,
            status: 'active' as const,
          })),
        })
      }

      const agentId = `agent-${Date.now()}`
      addAgent({
        id: agentId,
        name: agentName,
        agentType: 'PROMOTION_AGENT',
        enabled: true,
        objective,
        activeOn,
        createdAt: new Date().toISOString().split('T')[0],
        locations,
        promos,
        campaignSource,
      })
      navigate(`/agents/${agentId}`, { replace: true })
    }
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
            <Heading level={3}>Promotion Agent</Heading>
            <Text size="sm" color="secondary">Step {displayStep} of {totalSteps}</Text>
          </Stack>
        </Inline>
      </Page.Header>

      <Page.Body alignX="center" pb="300">
        {step === 2 ? (
          <Stack space="150" height="auto" style={{ maxWidth: '900px', width: '100%', marginTop: vars.spacing['500'] }}>
            <Step.Info title={stepInfo.title} description={stepInfo.description} />
            <PromotionsStep
              channelIds={ALL_CHANNEL_IDS}
              campaignSource={campaignSource}
              onSourceChange={setCampaignSource}
              selectedCampaignIds={selectedCampaignIds}
              onCampaignToggle={handleCampaignToggle}
              enabledPromos={enabledPromos}
              promoValues={promoValues}
              onTogglePromo={handleTogglePromo}
              onPromoValueChange={(id, v) => setPromoValues(prev => ({ ...prev, [id]: v }))}
              agentGoal={agentGoal}
              onGoalChange={setAgentGoal}
            />
          </Stack>
        ) : (
          <Step.Content>
            <Step.Info title={stepInfo.title} description={stepInfo.description} />

            {step === 1 && (
              <ScopeStep
                locationIds={locationIds}
                menuIds={menuIds}
                onLocationsChange={setLocationIds}
                onMenusChange={setMenuIds}
              />
            )}

            {step === 3 && (
              <OffPlatformStep
                offPlatformEnabled={offPlatformEnabled}
                offPlatformBudget={offPlatformBudget}
                onToggle={id => setOffPlatformEnabled(prev => ({ ...prev, [id]: !prev[id] }))}
                onBudgetChange={(id, v) => setOffPlatformBudget(prev => ({ ...prev, [id]: v }))}
              />
            )}

            {step === 4 && (
              <GuardrailsStep
                agentGuardrail={agentGuardrail}
                guardrailThresholds={guardrailThresholds}
                onSelect={handleSelectGuardrail}
                onThresholdChange={(condition, v) =>
                  setGuardrailThresholds(prev => ({ ...prev, [condition]: v }))
                }
              />
            )}

            {step === 5 && (
              <DetailsStep
                agentName={agentName}
                locationIds={locationIds}
                menuIds={menuIds}
                campaignSource={campaignSource}
                selectedCampaignIds={selectedCampaignIds}
                enabledPromos={enabledPromos}
                offPlatformEnabled={offPlatformEnabled}
                agentGuardrail={agentGuardrail}
                agentGoal={agentGoal}
                onNameChange={setAgentName}
              />
            )}
          </Step.Content>
        )}
      </Page.Body>

      <Page.Footer progressBar={<ProgressTracker currentStep={displayStep + 1} totalSteps={totalSteps + 1} />}>
        <Button variant="outline" status="neutral" onClick={handleBack}>
          {step === 1 ? 'Cancel' : 'Back'}
        </Button>
        <Button status="primary" disabled={!canNext()} onClick={handleNext}>
          {step === 5 ? 'Create Agent' : 'Continue'}
        </Button>
      </Page.Footer>
    </Page.Root>
  )
}
