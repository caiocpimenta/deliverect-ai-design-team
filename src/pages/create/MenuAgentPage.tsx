import { useState, useEffect, useRef, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Badge,
  Banner,
  Button,
  ArrowDirectionUp,
  AddCircleOutline,
  Check,
  ChevronDirectionDown,
  ChevronDirectionRight,
  ChevronDirectionUp,
  GraphBarOutline,
  Heading,
  Inline,
  Input,
  MealOutline,
  Select,
  PriceTagFlash,
  BagOutline,
  ProgressTracker,
  SparklesOutline,
  Stack,
  StarOutline,
  Text,
  Toggle,
  CheckCircleFill,
  ArrowDirectionLeft,
  EditOutline,
  Filter,
  vars,
} from '@deliverect/galaxy-react'
import { Page } from '../../components/Page'
import { Step } from '../../components/Step'
import { MultiDropdown } from '../../components/MultiDropdown'
import { MOCK_LOCATIONS, MOCK_CHANNELS, MOCK_MENUS } from '../../data/mockAgents'

// ─── Step 1: Smart agent type ─────────────────────────────────────────────────

type Objective = 'revenue' | 'aov' | 'multi-product'

interface ObjectiveOption {
  id: Objective
  icon: React.ReactNode
  title: string
  description: string
  badge: string
}

const OBJECTIVES: ObjectiveOption[] = [
  {
    id: 'revenue',
    icon: <GraphBarOutline size="xl" />,
    title: 'Maximise Revenue',
    description: 'Adjust pricing and promotions to maximise total revenue across your menu.',
    badge: 'Most popular',
  },
  {
    id: 'aov',
    icon: <PriceTagFlash size="xl" />,
    title: 'Increase Average Order Value',
    description: 'Optimise your menu to encourage customers to spend more per order.',
    badge: '',
  },
  {
    id: 'multi-product',
    icon: <BagOutline size="xl" />,
    title: 'Drive Multi-product Orders',
    description: 'Encourage customers to add more items through smart bundle and upsell strategies.',
    badge: '',
  },
]

function ObjectiveCard({
  option,
  selected,
  onSelect,
}: {
  option: ObjectiveOption
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
        padding: vars.spacing['200'],
        border: `2px solid ${selected ? vars.colors.border.neutral.static.emphasize : hovered ? vars.colors.border.neutral.default.hover : vars.colors.border.neutral.default.default}`,
        borderRadius: vars.border.radius['150'],
        cursor: 'pointer',
        backgroundColor: selected ? vars.colors.surface.neutral.active : hovered ? vars.colors.surface.neutral.hover : vars.colors.background.default,
        transition: 'all 0.15s ease',
        display: 'flex',
        gap: vars.spacing['200'],
        alignItems: 'flex-start',
        position: 'relative',
      }}
    >
      {selected && (
        <div style={{ position: 'absolute', top: vars.spacing['150'], right: vars.spacing['150'], color: vars.colors.icon.neutral.interactive.bold.default }}>
          <CheckCircleFill size="lg" />
        </div>
      )}
      <div style={{ color: vars.colors.icon.neutral.interactive.bold.default, flexShrink: 0 }}>
        {option.icon}
      </div>
      <Stack height="auto" space="025">
        <Inline space="100" alignY="center">
          <Text weight="bold">{option.title}</Text>
          {option.badge && <Badge size="sm" status="success">{option.badge}</Badge>}
        </Inline>
        <Text size="sm" color="secondary">{option.description}</Text>
      </Stack>
    </div>
  )
}

// ─── Step 2: Locations ────────────────────────────────────────────────────────

function LocationsStep({
  locations,
  channels,
  menuId,
  onLocationsChange,
  onChannelsChange,
  onMenuChange,
}: {
  locations: string[]
  channels: string[]
  menuId: string
  onLocationsChange: (locs: string[]) => void
  onChannelsChange: (chs: string[]) => void
  onMenuChange: (id: string) => void
}) {
  const locationOptions = MOCK_LOCATIONS.map(l => ({ label: l.name, value: l.id }))
  const channelOptions = MOCK_CHANNELS.map(c => ({ label: c.name, value: c.id }))
  const menuOptions = MOCK_MENUS.map(m => ({ label: m.name, value: m.id }))

  const selectedMenuOption = menuOptions.find(o => o.value === menuId)

  return (
    <Stack height="auto" space="250">
      <MultiDropdown
        label="Locations"
        description="Select which locations this agent should manage."
        placeholder="Choose locations"
        noun="location"
        options={locationOptions}
        selectedIds={locations}
        onChange={onLocationsChange}
      />
      <MultiDropdown
        label="Channels"
        description="Select which ordering channels to include."
        placeholder="Choose channels"
        noun="channel"
        options={channelOptions}
        selectedIds={channels}
        onChange={onChannelsChange}
      />

      <Input.Root label="Menu" description="Select which menu this agent should optimise." width="full">
        <Select
          options={menuOptions}
          selectedOption={selectedMenuOption}
          setSelectedOption={opt => onMenuChange(opt?.value ?? '')}
          label="Choose a menu"
          isClearable
        />
      </Input.Root>
    </Stack>
  )
}

// ─── Step 3: Permissions ──────────────────────────────────────────────────────

interface PermissionDef {
  id: string
  title: string
  description: string
  comingSoon?: boolean
}

const PERMISSION_DEFS: PermissionDef[] = [
  {
    id: 'position',
    title: 'Position',
    description: 'Optimize product placement to maximize visibility and conversion.',
  },
  {
    id: 'upsells',
    title: 'Upsells',
    description: 'Recommend complementary or higher-value items to increase basket size.',
  },
  {
    id: 'meal_deals',
    title: 'Meal deals',
    description: 'Create appealing meal deals to encourage larger orders.',
  },
  {
    id: 'content',
    title: 'Content',
    description: 'Update item descriptions by filling in missing, incomplete, or brief content.',
  },
  {
    id: 'best_sellers',
    title: 'Best sellers category',
    description: 'Create a category to showcase your bestselling items.',
  },
]

function PermissionRow({
  item,
  enabled,
  onToggle,
}: {
  item: PermissionDef
  enabled: boolean
  onToggle: () => void
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: vars.spacing['150'],
        padding: `${vars.spacing['175']} ${vars.spacing['200']}`,
        borderRadius: vars.border.radius['150'],
        border: `1px solid ${vars.colors.border.neutral.default.default}`,
        backgroundColor: vars.colors.background.default,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: vars.spacing['100'], flex: 1, minWidth: 0 }}>
        <div style={{ color: vars.colors.icon.neutral.default.default, flexShrink: 0 }}>
          <ChevronDirectionRight size="sm" />
        </div>
        <Stack height="auto" space="025" style={{ flex: 1, minWidth: 0 }}>
          <Inline space="100" alignY="center">
            <Text weight="medium" size="sm">{item.title}</Text>
            {item.comingSoon && (
              <Badge size="sm" status="neutral">Coming soon</Badge>
            )}
          </Inline>
          <Text size="sm" color="secondary">{item.description}</Text>
        </Stack>
      </div>
      <div style={{ flexShrink: 0 }}>
        <Toggle checked={enabled} onCheckedChange={onToggle} disabled={item.comingSoon} />
      </div>
    </div>
  )
}

function PermissionsStep({
  enabledIds,
  onToggle,
}: {
  enabledIds: string[]
  onToggle: (id: string) => void
}) {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <Stack height="auto" space="300">
      {/* Main permissions */}
      <Stack height="auto" space="100">
        {PERMISSION_DEFS.map(item => (
          <PermissionRow
            key={item.id}
            item={item}
            enabled={enabledIds.includes(item.id)}
            onToggle={() => onToggle(item.id)}
          />
        ))}
      </Stack>

      {/* Info banner */}
      {showBanner && (
        <Banner.Root status="info">
          <Banner.Icon><SparklesOutline /></Banner.Icon>
          <Banner.Content>
            <Banner.Title>How continuous menu optimizations work?</Banner.Title>
            <Banner.Body>
              <Text size="sm">The agent evaluates performance daily to create and publish optimizations, based on recent order volume and AOV changes.</Text>
            </Banner.Body>
          </Banner.Content>
          <Banner.Actions>
            <Button size="sm" variant="plain" status="neutral">Learn more</Button>
          </Banner.Actions>
          <Banner.Close onClick={() => setShowBanner(false)} />
        </Banner.Root>
      )}

      {/* Menu publishing updates */}
      <Stack height="auto" space="100">
        <Text weight="medium" size="sm">Menu publishing updates</Text>
        <PermissionRow
          item={{
            id: 'auto_publish',
            title: 'Automated menu publishing',
            description: 'The agent automatically publishes the continuous menu optimizations.',
            comingSoon: true,
          }}
          enabled={false}
          onToggle={() => {}}
        />
      </Stack>
    </Stack>
  )
}

// ─── Step 4: Details ──────────────────────────────────────────────────────────

const OBJECTIVE_LABELS: Record<Objective, string> = {
  revenue: 'Maximise Revenue',
  aov: 'Increase Average Order Value',
  'multi-product': 'Drive Multi-product Orders',
}

function DetailsStep({
  name,
  locationIds,
  onNameChange,
}: {
  name: string
  locationIds: string[]
  onNameChange: (v: string) => void
}) {
  const locationNames = MOCK_LOCATIONS
    .filter(l => locationIds.includes(l.id))
    .map(l => l.name)

  return (
    <Stack height="auto" space="250">
      <Input.Root
        label="Agent name"
        description="Give your agent a memorable name that describes its purpose."
        required
      >
        <Input.Field
          placeholder="e.g. Weekend Revenue Booster"
          value={name}
          onChange={e => onNameChange(e.target.value)}
        />
      </Input.Root>

      <Step.Group>
        <Text weight="medium">Review your settings</Text>
        <div
          style={{
            borderRadius: vars.border.radius['100'],
            border: `1px solid ${vars.colors.border.neutral.default}`,
            overflow: 'hidden',
          }}
        >
          {[
            { label: 'Locations', value: locationNames.length > 0 ? locationNames.join(', ') : 'None selected' },
          ].map((row, i, arr) => (
            <div
              key={row.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: `${vars.spacing['150']} ${vars.spacing['200']}`,
                borderBottom: i < arr.length - 1 ? `1px solid ${vars.colors.border.neutral.default}` : undefined,
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

// ─── Step 4: Menu Preview ─────────────────────────────────────────────────────

interface PlanTask {
  id: string
  title: string
  description: string
  color: string
}

interface PlanReasoning {
  summary: string
  detail: string
  metrics: Array<{ label: string; value: string }>
}

interface PlanItem {
  permId: string
  label: string
  icon: ReactNode
  description: string
  tasks: PlanTask[]
  reasoning: PlanReasoning
}

const ALL_PLAN_ITEMS: PlanItem[] = [
  {
    permId: 'position',
    label: 'Position',
    icon: <ArrowDirectionUp size="md" />,
    description: 'Reorder products and categories',
    tasks: [
      { id: 't1', title: 'New Bacon King', description: 'Promoted to top of Galactic Range', color: '#6D4C3D' },
      { id: 't2', title: 'Galaxy Whopper', description: 'Moved to second position', color: '#C0392B' },
      { id: 't3', title: 'Double Whopper Meal', description: 'Added to Galactic Range section', color: '#922B21' },
    ],
    reasoning: {
      summary: 'Items in the top 3 positions generate 67% of category revenue — high-margin SKUs are being repositioned to capture this.',
      detail: 'Over the past 30 days, items in positions 1–3 account for 67% of Galactic Range revenue despite representing only 25% of listings. New Bacon King currently sits at position 6 with an 89% view-to-order rate — moving it to position 1 is projected to recover an estimated £340/week in missed revenue. Galaxy Whopper anchors the brand at position 2 while double-stacking two high-margin SKUs at the top of the category.',
      metrics: [
        { label: 'View-to-order rate (New Bacon King)', value: '89%' },
        { label: 'Current position (New Bacon King)', value: '#6 of 8' },
        { label: 'Revenue share from positions 1–3', value: '67%' },
        { label: 'Estimated weekly revenue lift', value: '£340' },
      ],
    },
  },
  {
    permId: 'content',
    label: 'Content',
    icon: <EditOutline size="md" />,
    description: 'Change titles and descriptions',
    tasks: [
      { id: 't4', title: 'Chicken Royale', description: 'Updated product description', color: '#E87722' },
      { id: 't5', title: 'Onion Rings', description: 'Added allergen information', color: '#D4A843' },
    ],
    reasoning: {
      summary: 'Items with descriptions over 100 characters and allergen info convert 18% better — 2 items fall below this threshold.',
      detail: 'Analysis of 1,240 orders over the past 14 days shows Chicken Royale\'s current 34-character description is well below the network average of 92 characters. Items with allergen information visible at menu level see a 12% lower abandonment rate before checkout. Onion Rings currently has no allergen tags — adding them improves both compliance and customer trust at the point of selection.',
      metrics: [
        { label: 'Chicken Royale description length', value: '34 chars' },
        { label: 'Network average description length', value: '92 chars' },
        { label: 'Conversion lift with full descriptions', value: '+18%' },
        { label: 'Abandonment reduction with allergen info', value: '−12%' },
      ],
    },
  },
  {
    permId: 'upsells',
    label: 'Upsells',
    icon: <AddCircleOutline size="md" />,
    description: 'It looks like this is already well optimized. Nice work!',
    tasks: [],
    reasoning: {
      summary: 'Upsell attach rate is 91% — top 5% of the network. No changes recommended.',
      detail: 'Your current upsell configuration is performing exceptionally well. Signature Dips & Sauces attaches on 90.0% of orders and Chilled Drinks on 87.5%. The agent evaluated 8 potential upsell group configurations and found none with a statistically significant improvement signal over the current setup. Changing a high-performing configuration introduces disruption risk without evidence of upside.',
      metrics: [
        { label: 'Current upsell attach rate', value: '91%' },
        { label: 'Network average attach rate', value: '63%' },
        { label: 'Upsell revenue contribution', value: '£4,820' },
        { label: 'Alternative configurations tested', value: '8' },
      ],
    },
  },
  {
    permId: 'meal_deals',
    label: 'Meal deals',
    icon: <MealOutline size="md" />,
    description: 'It looks like this is already well optimized. Nice work!',
    tasks: [],
    reasoning: {
      summary: 'Meal deal penetration is 73%, above the 68% network average — configuration is optimal.',
      detail: 'Meal deal uptake is strong across all day-parts. Lunch (11am–2pm) shows the highest penetration at 81%. The agent modelled 4 alternative meal deal configurations and none produced a statistically significant improvement in AOV or basket size. Changing a well-performing configuration introduces risk without evidence of upside — the current structure is working as intended.',
      metrics: [
        { label: 'Meal deal penetration', value: '73%' },
        { label: 'Network average penetration', value: '68%' },
        { label: 'Lunch period penetration (11am–2pm)', value: '81%' },
        { label: 'Avg order value with meal deal', value: '£26.40' },
      ],
    },
  },
  {
    permId: 'best_sellers',
    label: 'Best sellers category',
    icon: <StarOutline size="md" />,
    description: 'It looks like this is already well optimized. Nice work!',
    tasks: [],
    reasoning: {
      summary: 'Top 5 items drive 62% of revenue. The category is correctly positioned and reflects current top performers.',
      detail: 'Large Fries (918 units), Whopper, Chicken Royale, 6 Chicken Nuggets, and Onion Rings collectively represent £13,172 of the £21,245 revenue in the last cycle. The best sellers category is already at position 2 and accurately reflects the current top performers. Changing a correctly positioned category risks breaking a discovery pattern customers have already learned.',
      metrics: [
        { label: 'Top 5 items revenue share', value: '62%' },
        { label: 'Best sellers category position', value: '#2' },
        { label: 'Top item units sold (Large Fries)', value: '918 units' },
        { label: 'Category click-through rate', value: '84%' },
      ],
    },
  },
]

interface MenuItemData {
  id: string
  name: string
  price: string
  description: string
  color: string
  badge?: 'repositioned' | 'edited'
}

interface MenuCategoryData {
  id: string
  name: string
  items: MenuItemData[]
}

const MOCK_MENU_PREVIEW: MenuCategoryData[] = [
  {
    id: 'galactic',
    name: 'Galactic Range',
    items: [
      { id: 'i1', name: 'New Bacon King', price: '£9.79', description: 'Flame-grilled beef with crispy bacon and smoky sauce', color: '#6D4C3D', badge: 'repositioned' },
      { id: 'i2', name: 'Galaxy Whopper', price: '£8.99', description: 'Our iconic Whopper with bold galaxy seasoning', color: '#C0392B', badge: 'repositioned' },
      { id: 'i3', name: 'Double Whopper', price: '£10.49', description: 'Double flame-grilled beef with fresh lettuce and tomato', color: '#922B21' },
      { id: 'i4', name: 'Bacon Double Cheese', price: '£7.99', description: 'Double cheese and crispy bacon on a toasted bun', color: '#7D3C1E' },
    ],
  },
  {
    id: 'value',
    name: 'Value Deals',
    items: [
      { id: 'i5', name: 'Whopper Junior', price: '£4.99', description: 'The classic Whopper in a smaller size', color: '#C27C34' },
      { id: 'i6', name: 'Chicken Royale', price: '£5.99', description: 'Crispy chicken fillet, fresh lettuce, creamy mayo', color: '#E87722', badge: 'edited' },
    ],
  },
  {
    id: 'beef',
    name: 'Beef Meals',
    items: [
      { id: 'i7', name: 'Whopper Meal', price: '£10.49', description: 'Whopper with medium fries and a drink', color: '#CC4400' },
      { id: 'i8', name: 'Double Whopper Meal', price: '£12.99', description: 'Double Whopper with medium fries and a drink', color: '#B03A2E' },
    ],
  },
  {
    id: 'chicken',
    name: 'Crispy Chicken',
    items: [
      { id: 'i9', name: 'Crispy Chicken Sandwich', price: '£6.49', description: 'Crispy fried chicken with lettuce and mayo', color: '#E8972A' },
      { id: 'i10', name: '6 Chicken Nuggets', price: '£4.49', description: 'Golden crispy bite-sized chicken pieces', color: '#F0A832' },
    ],
  },
  {
    id: 'sides',
    name: 'Sides',
    items: [
      { id: 'i11', name: 'Large Fries', price: '£2.99', description: 'Golden crispy fries cooked fresh', color: '#F1C40F' },
      { id: 'i12', name: 'Onion Rings', price: '£3.29', description: 'Crispy battered onion rings — allergens listed', color: '#D4A843', badge: 'edited' },
      { id: 'i13', name: 'Mozzarella Dips', price: '£2.49', description: '4 crispy mozzarella sticks with dipping sauce', color: '#E8C547' },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    items: [
      { id: 'i14', name: 'Coca-Cola Regular', price: '£1.99', description: 'Refreshing ice-cold Coca-Cola', color: '#C41E3A' },
      { id: 'i15', name: 'Orange Juice', price: '£2.49', description: 'Freshly squeezed orange juice', color: '#E07B39' },
    ],
  },
]

// ─── Menu preview sub-components ──────────────────────────────────────────────

function CustomCheckbox({ checked, onChange }: { checked: boolean; onChange: (e: React.MouseEvent) => void }) {
  return (
    <div
      onClick={onChange}
      role="checkbox"
      aria-checked={checked}
      style={{
        width: 18, height: 18, borderRadius: 4, flexShrink: 0, cursor: 'pointer',
        border: checked ? 'none' : `1.5px solid ${vars.colors.border.neutral.default.default}`,
        backgroundColor: checked ? vars.colors.fill.neutral.interactive.bold.default : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.1s ease',
      }}
    >
      {checked && (
        <Check
          size="xs"
          style={{ color: vars.colors.icon.neutral.static.inverse, display: 'block' }}
        />
      )}
    </div>
  )
}

function PlanItemRow({
  item,
  checked,
  expanded,
  onToggleCheck,
  onToggleExpand,
  onOpenReasoning,
}: {
  item: PlanItem
  checked: boolean
  expanded: boolean
  onToggleCheck: () => void
  onToggleExpand: () => void
  onOpenReasoning: () => void
}) {
  const hasExpandable = item.tasks.length > 0

  return (
    <div style={{
      border: `1px solid ${vars.colors.border.neutral.default.default}`,
      borderRadius: vars.border.radius['150'],
      overflow: 'hidden',
      backgroundColor: vars.colors.background.default,
    }}>
      {/* Header row */}
      <div
        onClick={() => hasExpandable && onToggleExpand()}
        style={{
          display: 'flex', alignItems: 'flex-start', gap: vars.spacing['100'],
          padding: vars.spacing['150'],
          cursor: hasExpandable ? 'pointer' : 'default',
        }}
      >
        <div style={{ marginTop: 2 }}>
          <CustomCheckbox checked={checked} onChange={e => { e.stopPropagation(); onToggleCheck() }} />
        </div>
        <div style={{ color: vars.colors.icon.neutral.default.default, flexShrink: 0, marginTop: 1 }}>
          {item.icon}
        </div>
        <Stack space="025" height="auto" style={{ flex: 1, minWidth: 0 }}>
          <Inline space="075" alignY="center">
            <Text size="sm" weight="medium">{item.label}</Text>
            <Badge size="sm" status={item.tasks.length === 0 ? 'neutral' : 'info'}>
              {item.tasks.length === 0 ? 'No tasks' : `${item.tasks.length} tasks`}
            </Badge>
          </Inline>
          <Text size="sm" color="secondary">{item.description}</Text>
        </Stack>
        {hasExpandable && (
          <div style={{ color: vars.colors.icon.neutral.default.default, flexShrink: 0, marginTop: 2 }}>
            {expanded ? <ChevronDirectionUp size="sm" /> : <ChevronDirectionDown size="sm" />}
          </div>
        )}
      </div>

      {/* AI reasoning snippet */}
      <div style={{
        borderTop: `1px solid ${vars.colors.border.neutral.default.default}`,
        backgroundColor: vars.colors.surface.neutral.static.default,
        padding: `${vars.spacing['100']} ${vars.spacing['150']}`,
        display: 'flex', alignItems: 'flex-start', gap: vars.spacing['100'],
      }}>
        <Text size="sm" color="secondary" style={{ flex: 1, lineHeight: 1.5 }}>
          {item.reasoning.summary}
        </Text>
        <button
          type="button"
          onClick={e => { e.stopPropagation(); onOpenReasoning() }}
          style={{
            flexShrink: 0, background: 'none', border: 'none', padding: 0,
            cursor: 'pointer', fontSize: 'var(--galaxy-font-size-sm)',
            color: vars.colors.text.neutral.default.default,
            fontWeight: 600, fontFamily: 'inherit',
            textDecoration: 'underline', marginTop: 1,
          }}
        >
          More
        </button>
      </div>

      {/* Expanded tasks */}
      {expanded && (
        <div style={{ borderTop: `1px solid ${vars.colors.border.neutral.default.default}` }}>
          <div style={{ padding: `${vars.spacing['100']} ${vars.spacing['150']} ${vars.spacing['075']}` }}>
            <Text size="sm" color="secondary">Products</Text>
          </div>
          {item.tasks.map(task => (
            <div
              key={task.id}
              style={{
                display: 'flex', alignItems: 'center', gap: vars.spacing['100'],
                padding: `${vars.spacing['075']} ${vars.spacing['150']}`,
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: vars.border.radius['100'],
                backgroundColor: task.color, flexShrink: 0,
              }} />
              <Stack space="0" height="auto" style={{ flex: 1, minWidth: 0 }}>
                <Text size="sm" weight="medium">{task.title}</Text>
                <Text size="sm" color="secondary">{task.description}</Text>
              </Stack>
            </div>
          ))}
          <div style={{ height: vars.spacing['075'] }} />
        </div>
      )}
    </div>
  )
}

function ReasoningModal({ item, onClose }: { item: PlanItem; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: vars.spacing['400'],
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: vars.colors.background.default,
          borderRadius: vars.border.radius['200'],
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          width: '100%', maxWidth: 480,
          maxHeight: '80vh',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{
          display: 'flex', alignItems: 'center',
          padding: `${vars.spacing['200']} ${vars.spacing['250']}`,
          borderBottom: `1px solid ${vars.colors.border.neutral.default.default}`,
          flexShrink: 0, gap: vars.spacing['100'],
        }}>
          <div style={{ color: vars.colors.icon.neutral.default.default }}>{item.icon}</div>
          <Heading level={4} style={{ flex: 1 }}>{item.label} — AI reasoning</Heading>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: vars.spacing['250'] }}>
          <Stack space="250" height="auto">
            <Text size="sm">{item.reasoning.detail}</Text>
            <Stack space="075" height="auto">
              <Text weight="medium" size="sm">Sales data</Text>
              <div style={{
                border: `1px solid ${vars.colors.border.neutral.default.default}`,
                borderRadius: vars.border.radius['100'],
                overflow: 'hidden',
              }}>
                {item.reasoning.metrics.map((m, i) => (
                  <div
                    key={m.label}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: `${vars.spacing['125']} ${vars.spacing['175']}`,
                      borderBottom: i < item.reasoning.metrics.length - 1
                        ? `1px solid ${vars.colors.border.neutral.default.default}`
                        : undefined,
                    }}
                  >
                    <Text size="sm" color="secondary">{m.label}</Text>
                    <Text size="sm" weight="medium">{m.value}</Text>
                  </div>
                ))}
              </div>
            </Stack>
          </Stack>
        </div>

        <div style={{
          padding: `${vars.spacing['150']} ${vars.spacing['250']}`,
          borderTop: `1px solid ${vars.colors.border.neutral.default.default}`,
          display: 'flex', justifyContent: 'flex-end', flexShrink: 0,
        }}>
          <Button status="neutral" variant="outline" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  )
}

function MenuItemCard({ item }: { item: MenuItemData }) {
  const badgeStatus = item.badge === 'edited' ? 'info' : 'warning'
  const badgeLabel  = item.badge === 'edited' ? 'Edited' : 'Repositioned'

  return (
    <div style={{
      border: `1px solid ${vars.colors.border.neutral.default.default}`,
      borderRadius: vars.border.radius['150'],
      overflow: 'hidden',
    }}>
      <div style={{
        height: 110, backgroundColor: item.color,
        display: 'flex', alignItems: 'flex-start',
        padding: vars.spacing['075'],
      }}>
        {item.badge && (
          <Badge size="sm" status={badgeStatus}>{badgeLabel}</Badge>
        )}
      </div>
      <div style={{ padding: `${vars.spacing['100']} ${vars.spacing['125']}` }}>
        <Text size="sm" weight="medium">{item.name}</Text>
        <Text
          size="sm"
          color="secondary"
          style={{
            marginTop: vars.spacing['025'],
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          } as React.CSSProperties}
        >
          {item.description}
        </Text>
        <Text size="sm" weight="medium" style={{ marginTop: vars.spacing['075'] }}>
          {item.price}
        </Text>
      </div>
    </div>
  )
}

function MenuPreviewStep({
  enabledPermissions,
  locationIds,
}: {
  enabledPermissions: string[]
  locationIds: string[]
}) {
  const [checkedPermissions, setCheckedPermissions] = useState<string[]>(enabledPermissions)
  const [expandedIds, setExpandedIds] = useState<string[]>(['position'])
  const [selectedCategoryId, setSelectedCategoryId] = useState(MOCK_MENU_PREVIEW[0].id)
  const [selectedLocationId, setSelectedLocationId] = useState(locationIds[0] ?? '')
  const [reasoningPermId, setReasoningPermId] = useState<string | null>(null)

  const availableLocations = MOCK_LOCATIONS.filter(l => locationIds.includes(l.id))
  const planItems          = ALL_PLAN_ITEMS.filter(item => enabledPermissions.includes(item.permId))
  const categoryRefs       = useRef<Record<string, HTMLDivElement | null>>({})

  const toggleCheck = (permId: string) =>
    setCheckedPermissions(prev =>
      prev.includes(permId) ? prev.filter(id => id !== permId) : [...prev, permId]
    )

  const toggleExpand = (permId: string) =>
    setExpandedIds(prev =>
      prev.includes(permId) ? prev.filter(id => id !== permId) : [...prev, permId]
    )

  return (
    <div style={{
      display: 'flex',
      gap: 0,
      flex: 1,
      minHeight: 0,
      marginTop: vars.spacing['300'],
    }}>
      {/* ── Left panel: plan ──────────────────────────────────────── */}
      <div style={{
        width: 380, flexShrink: 0,
        display: 'flex', flexDirection: 'column', gap: vars.spacing['200'],
        paddingRight: vars.spacing['300'],
        overflowY: 'auto',
      }}>
        <Stack space="050" height="auto">
          <Heading level={3}>Menu preview</Heading>
          <Text size="sm" color="secondary">
            Here's a preview of menu changes for one location. You can preview changes for other locations after you finish creating the AI agent.
          </Text>
        </Stack>

        <div style={{
          backgroundColor: vars.colors.surface.neutral.static.default,
          borderRadius: vars.border.radius['150'],
          padding: vars.spacing['150'],
        }}>
          <Stack space="100" height="auto">
            <Text size="sm" weight="medium" color="secondary">AI reasoning</Text>
            {planItems.map(item => (
              <PlanItemRow
                key={item.permId}
                item={item}
                checked={checkedPermissions.includes(item.permId)}
                expanded={expandedIds.includes(item.permId)}
                onToggleCheck={() => toggleCheck(item.permId)}
                onToggleExpand={() => toggleExpand(item.permId)}
                onOpenReasoning={() => setReasoningPermId(item.permId)}
              />
            ))}
          </Stack>
        </div>
      </div>

      {/* ── Divider ───────────────────────────────────────────────── */}
      <div style={{
        width: 1,
        backgroundColor: vars.colors.border.neutral.default.default,
        flexShrink: 0,
        alignSelf: 'stretch',
      }} />

      {/* ── Right panel: menu ─────────────────────────────────────── */}
      <div style={{
        flex: 1, minWidth: 0,
        display: 'flex', flexDirection: 'column',
        paddingLeft: vars.spacing['300'],
        overflowY: 'auto',
      }}>
        {/* Location filter */}
        <div style={{ paddingBottom: vars.spacing['150'] }}>
          <Filter.Menu
            label="Filters"
            initialFilterKeys={['location']}
            filterConfigMap={{
              location: {
                label: 'Location',
                filter: (
                  <Filter.Select
                    id="location"
                    tagLabel="Location"
                    applyLabel="Apply"
                    value={selectedLocationId}
                    options={availableLocations.map(l => ({ label: l.name, value: l.id }))}
                    optionsEmptyLabel="No locations"
                    onValueApplyChange={setSelectedLocationId}
                    onValueClear={() => setSelectedLocationId(locationIds[0] ?? '')}
                  />
                ),
              },
            }}
          />
        </div>

        {/* Sticky category header */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 10,
          backgroundColor: vars.colors.background.default,
          display: 'flex', gap: vars.spacing['075'],
          overflowX: 'auto', flexShrink: 0,
          paddingBottom: vars.spacing['100'],
          paddingTop: vars.spacing['050'],
          borderBottom: `1px solid ${vars.colors.border.neutral.default.default}`,
          scrollbarWidth: 'none',
        }}>
          {MOCK_MENU_PREVIEW.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setSelectedCategoryId(cat.id)
                categoryRefs.current[cat.id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              style={{
                padding: `${vars.spacing['075']} ${vars.spacing['150']}`,
                borderRadius: vars.border.radius['full'],
                border: `1px solid ${selectedCategoryId === cat.id
                  ? vars.colors.border.neutral.static.emphasize
                  : vars.colors.border.neutral.default.default}`,
                backgroundColor: selectedCategoryId === cat.id
                  ? vars.colors.surface.neutral.active
                  : 'transparent',
                cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
                fontFamily: 'inherit',
                fontWeight: selectedCategoryId === cat.id ? 600 : 400,
                fontSize: 'var(--galaxy-font-size-sm)',
                transition: 'all 0.1s ease',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* All categories continuously */}
        <div style={{ paddingBottom: vars.spacing['300'] }}>
          {MOCK_MENU_PREVIEW.map(cat => (
            <div
              key={cat.id}
              ref={el => { categoryRefs.current[cat.id] = el }}
              style={{ scrollMarginTop: 52, paddingTop: vars.spacing['200'] }}
            >
              <Text weight="medium" size="sm" style={{ marginBottom: vars.spacing['100'], display: 'block' }}>
                {cat.name}
              </Text>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(185px, 1fr))',
                gap: vars.spacing['150'],
                marginBottom: vars.spacing['250'],
              }}>
                {cat.items.map(item => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {(() => {
        const item = reasoningPermId ? ALL_PLAN_ITEMS.find(i => i.permId === reasoningPermId) ?? null : null
        return item ? <ReasoningModal item={item} onClose={() => setReasoningPermId(null)} /> : null
      })()}
    </div>
  )
}

// ─── Main wizard ──────────────────────────────────────────────────────────────

const STEP_TITLES = [
  { title: 'Where should the agent work?', description: 'Select the locations, channels and menu this agent will manage.' },
  { title: 'Permissions', description: 'Specify what the AI agent can and can\'t do on your behalf.' },
  { title: 'Preview your menu', description: '' },
  { title: 'Name your agent', description: 'Give your agent a name and review the configuration before activating.' },
]

export function MenuAgentPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)

  // Step 1 state
  const [locationIds, setLocationIds] = useState<string[]>([])
  const [channelIds, setChannelIds] = useState<string[]>(['all'])
  const [menuId, setMenuId] = useState<string>('menu-1')

  // Step 2 state
  const [enabledPermissions, setEnabledPermissions] = useState<string[]>(['position', 'upsells', 'meal_deals', 'content', 'best_sellers'])

  // Step 4 state
  const [agentName, setAgentName] = useState('')

  const stepInfo = STEP_TITLES[step - 1]

  const canNext = () => {
    if (step === 1) return locationIds.length > 0
    if (step === 2) return true
    if (step === 3) return true
    if (step === 4) return agentName.trim().length > 0
    return false
  }

  const handleNext = () => {
    if (step < 4) {
      setStep(s => s + 1)
    } else {
      navigate('/agents/agent-new', { replace: true })
    }
  }

  const handleBack = () => {
    if (step === 1) {
      navigate('/agents/create')
    } else {
      setStep(s => s - 1)
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
            <Heading level={3}>Autonomous Menu</Heading>
            <Text size="sm" color="secondary">Step {step} of 4</Text>
          </Stack>
        </Inline>
      </Page.Header>

      <Page.Body alignX={step === 3 ? undefined : 'center'} pb="300">
        {step === 3 ? (
          <MenuPreviewStep
            enabledPermissions={enabledPermissions}
            locationIds={locationIds}
          />
        ) : (
          <Step.Content>
            <Step.Info title={stepInfo.title} description={stepInfo.description} />

            {step === 1 && (
              <LocationsStep
                locations={locationIds}
                channels={channelIds}
                menuId={menuId}
                onLocationsChange={setLocationIds}
                onChannelsChange={setChannelIds}
                onMenuChange={setMenuId}
              />
            )}

            {step === 2 && (
              <PermissionsStep
                enabledIds={enabledPermissions}
                onToggle={id =>
                  setEnabledPermissions(prev =>
                    prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
                  )
                }
              />
            )}

            {step === 4 && (
              <DetailsStep
                name={agentName}
                locationIds={locationIds}
                onNameChange={setAgentName}
              />
            )}
          </Step.Content>
        )}
      </Page.Body>

      <Page.Footer progressBar={<ProgressTracker currentStep={step + 1} totalSteps={5} />}>
        <Button variant="outline" status="neutral" onClick={handleBack}>
          {step === 1 ? 'Cancel' : 'Back'}
        </Button>
        <Button
          status="primary"
          disabled={!canNext()}
          onClick={handleNext}
        >
          {step === 5 ? 'Create Agent' : 'Continue'}
        </Button>
      </Page.Footer>
    </Page.Root>
  )
}
