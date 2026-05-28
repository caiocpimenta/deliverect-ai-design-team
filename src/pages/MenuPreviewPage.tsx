import { useState, useEffect, useRef, type ReactNode } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import {
  ArrowDirectionLeft,
  ArrowDirectionUp,
  AddCircleOutline,
  Badge,
  Button,
  ChevronDirectionDown,
  ChevronDirectionUp,
  EditOutline,
  Filter,
  Heading,
  Inline,
  PageHeader,
  MealOutline,
  Stack,
  StarOutline,
  Text,
  vars,
} from '@deliverect/galaxy-react'
import { Page } from '../components/Page'
import { useAgents } from '../context/AgentsContext'

// ─── Mock data ─────────────────────────────────────────────────────────────────

interface MockCycle {
  id: string
  label: string
}

const MOCK_CYCLES: MockCycle[] = [
  { id: 'c3', label: '8 May 2026 – Present' },
  { id: 'c2', label: '1 Apr 2026 – 7 May 2026' },
  { id: 'c1', label: '1 Mar 2026 – 31 Mar 2026' },
]

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

// ─── Sub-components ────────────────────────────────────────────────────────────

function PlanItemRow({
  item,
  expanded,
  onToggleExpand,
  onOpenReasoning,
}: {
  item: PlanItem
  expanded: boolean
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
        backgroundColor: vars.colors.background.default,
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
        {/* Modal header */}
        <div style={{
          display: 'flex', alignItems: 'center',
          padding: `${vars.spacing['200']} ${vars.spacing['250']}`,
          borderBottom: `1px solid ${vars.colors.border.neutral.default.default}`,
          flexShrink: 0,
          gap: vars.spacing['100'],
        }}>
          <div style={{ color: vars.colors.icon.neutral.default.default }}>{item.icon}</div>
          <Heading level={4} style={{ flex: 1 }}>{item.label} — AI reasoning</Heading>
        </div>

        {/* Modal body */}
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

        {/* Modal footer */}
        <div style={{
          padding: `${vars.spacing['150']} ${vars.spacing['250']}`,
          borderTop: `1px solid ${vars.colors.border.neutral.default.default}`,
          display: 'flex', justifyContent: 'flex-end',
          flexShrink: 0,
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

// ─── Main page ─────────────────────────────────────────────────────────────────

export function MenuPreviewPage() {
  const { agentId } = useParams<{ agentId: string }>()
  const navigate = useNavigate()
  const routeLocation = useLocation()
  const { agents } = useAgents()

  const agent = agents.find(a => a.id === agentId)
  const agentLocations = agent?.locations ?? []

  const initialLocationId = routeLocation.state?.locationId as string | undefined
  const [selectedLocationId, setSelectedLocationId] = useState(
    initialLocationId ?? agentLocations[0]?.id ?? ''
  )
  const [selectedCycleId, setSelectedCycleId] = useState(MOCK_CYCLES[0].id)

  const [expandedIds, setExpandedIds] = useState<string[]>(['position'])
  const [reasoningPermId, setReasoningPermId] = useState<string | null>(null)
  const [selectedCategoryId, setSelectedCategoryId] = useState(MOCK_MENU_PREVIEW[0].id)

  const selectedLocation = agentLocations.find(l => l.id === selectedLocationId) ?? agentLocations[0]
  const selectedCycle    = MOCK_CYCLES.find(c => c.id === selectedCycleId) ?? MOCK_CYCLES[0]

  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const toggleExpand = (permId: string) =>
    setExpandedIds(prev =>
      prev.includes(permId) ? prev.filter(id => id !== permId) : [...prev, permId]
    )

  const reasoningItem = reasoningPermId
    ? ALL_PLAN_ITEMS.find(i => i.permId === reasoningPermId) ?? null
    : null

  return (
    <>
    <Page.Root>
      <PageHeader.Header px="300" py="200" space="100" alignY="center" style={{ flexShrink: 0 }}>
        <Inline space="150" alignY="center">
          <Button
            variant="transparent"
            size="sm"
            Icon={<ArrowDirectionLeft size="lg" />}
            aria-label="Back"
            onClick={() => navigate(-1)}
          />
          <PageHeader.Title level={3}>{agent?.name ?? 'Agent'} — Optimisation preview</PageHeader.Title>
        </Inline>
      </PageHeader.Header>

      <Page.Body pb="300">
        {/* ── Global filter bar ─────────────────────────────────────────── */}
        <div style={{ paddingBottom: vars.spacing['200'] }}>
          <Filter.Menu
            label="Filters"
            initialFilterKeys={['location', 'cycle']}
            filterConfigMap={{
              location: {
                label: 'Location',
                filter: (
                  <Filter.Select
                    id="location"
                    tagLabel="Location"
                    applyLabel="Apply"
                    value={selectedLocationId}
                    options={agentLocations.map(l => ({ label: l.name, value: l.id }))}
                    optionsEmptyLabel="No locations"
                    onValueApplyChange={setSelectedLocationId}
                    onValueClear={() => setSelectedLocationId(agentLocations[0]?.id ?? '')}
                  />
                ),
              },
              cycle: {
                label: 'Cycle',
                filter: (
                  <Filter.Select
                    id="cycle"
                    tagLabel="Cycle"
                    applyLabel="Apply"
                    value={selectedCycleId}
                    options={MOCK_CYCLES.map(c => ({ label: c.label, value: c.id }))}
                    optionsEmptyLabel="No cycles"
                    onValueApplyChange={setSelectedCycleId}
                    onValueClear={() => setSelectedCycleId(MOCK_CYCLES[0].id)}
                  />
                ),
              },
            }}
          />
        </div>

        <div style={{
          display: 'flex',
          gap: 0,
          flex: 1,
          minHeight: 0,
        }}>
          {/* ── Left panel: plan ──────────────────────────────────────── */}
          <div style={{
            width: 380, flexShrink: 0,
            display: 'flex', flexDirection: 'column', gap: vars.spacing['200'],
            paddingRight: vars.spacing['300'],
            overflowY: 'auto',
          }}>
            {/* AI reasoning */}
            <div style={{
              backgroundColor: vars.colors.surface.neutral.static.default,
              borderRadius: vars.border.radius['150'],
              padding: vars.spacing['150'],
            }}>
              <Stack space="100" height="auto">
                <Text size="sm" weight="medium" color="secondary">AI reasoning</Text>
                {ALL_PLAN_ITEMS.map(item => (
                  <PlanItemRow
                    key={item.permId}
                    item={item}
                    expanded={expandedIds.includes(item.permId)}
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
        </div>
      </Page.Body>
    </Page.Root>
    {reasoningItem && (
      <ReasoningModal item={reasoningItem} onClose={() => setReasoningPermId(null)} />
    )}
    </>
  )
}
