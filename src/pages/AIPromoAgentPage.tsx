import { useState } from 'react'
import {
  Badge,
  Heading,
  Inline,
  PageHeader,
  Stack,
  Text,
  Button,
  Table,
  DataCard,
  Tabs,
  DropdownMenu,
  SparklesOutline,
  SparklesFill,
  Refresh,
  Check,
  DiscountOutline,
  GraphBarOutline,
  PriceTagFlash,
  EditOutline,
  LoadingSpinner,
  MenuEllipsisDirectionVertical,
  SearchOutline,
  Cross,
  ChevronDirectionDown,
  vars,
} from '@deliverect/galaxy-react'
import { Page } from '../components/Page'

// ─── Types ───────────────────────────────────────────────────────────────────

type PromoStatus = 'suggested' | 'active' | 'rejected' | 'pending'

interface MenuItem {
  id: string
  name: string
  category: string
  currentPrice: number
  aiSuggestedDiscount: number
  promoType: string
  estimatedRevenue: string
  status: PromoStatus
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const MENU_ITEMS: MenuItem[] = [
  { id: '1', name: 'Margherita Pizza', category: 'Pizza', currentPrice: 14.99, aiSuggestedDiscount: 20, promoType: 'Happy Hour', estimatedRevenue: '+$340', status: 'suggested' },
  { id: '2', name: 'Chicken Burger', category: 'Burgers', currentPrice: 11.50, aiSuggestedDiscount: 15, promoType: 'Bundle Deal', estimatedRevenue: '+$210', status: 'active' },
  { id: '3', name: 'Caesar Salad', category: 'Salads', currentPrice: 9.99, aiSuggestedDiscount: 10, promoType: 'Lunch Special', estimatedRevenue: '+$125', status: 'active' },
  { id: '4', name: 'BBQ Ribs', category: 'Mains', currentPrice: 22.00, aiSuggestedDiscount: 25, promoType: 'Weekend Deal', estimatedRevenue: '+$580', status: 'suggested' },
  { id: '5', name: 'Tiramisu', category: 'Desserts', currentPrice: 7.50, aiSuggestedDiscount: 30, promoType: 'Combo Add-on', estimatedRevenue: '+$95', status: 'pending' },
  { id: '6', name: 'Grilled Salmon', category: 'Seafood', currentPrice: 19.99, aiSuggestedDiscount: 12, promoType: 'Early Bird', estimatedRevenue: '+$260', status: 'rejected' },
  { id: '7', name: 'Veggie Wrap', category: 'Wraps', currentPrice: 8.99, aiSuggestedDiscount: 18, promoType: 'Flash Sale', estimatedRevenue: '+$150', status: 'suggested' },
  { id: '8', name: 'Double Espresso', category: 'Beverages', currentPrice: 4.50, aiSuggestedDiscount: 50, promoType: 'Morning Deal', estimatedRevenue: '+$175', status: 'active' },
]

// ─── Status badge ─────────────────────────────────────────────────────────────

const statusConfig: Record<PromoStatus, { status: string; label: string }> = {
  active: { status: 'success', label: 'Active' },
  suggested: { status: 'magic', label: 'AI Suggested' },
  pending: { status: 'warning', label: 'Pending' },
  rejected: { status: 'critical', label: 'Rejected' },
}

function StatusBadge({ status }: { status: PromoStatus }) {
  const { status: s, label } = statusConfig[status]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Badge status={s as any} size="sm">{label}</Badge>
}

// ─── Discovery banner ─────────────────────────────────────────────────────────

function DiscoveryBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: vars.border.radius['100'],
        padding: vars.spacing['250'],
        background: `radial-gradient(circle at 0% 50%, ${vars.colors.fill.magic.static.subtle} 0%, ${vars.colors.background.default} 60%)`,
        border: `1px solid ${vars.colors.border.magic.static.subtle}`,
      }}
    >
      <button
        onClick={onDismiss}
        style={{
          position: 'absolute',
          top: vars.spacing['150'],
          right: vars.spacing['150'],
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: vars.spacing['050'],
          display: 'flex',
          alignItems: 'center',
        }}
        aria-label="Dismiss banner"
      >
        <Cross size="sm" />
      </button>

      <Stack space="150">
        <Inline space="xs" alignY="center">
          <SparklesFill size="md" />
          <Heading level={3}>Meet your AI Promo Agent</Heading>
        </Inline>

        <Text color="secondary" size="sm">
          Your AI agent analyses menu performance, order patterns, and peak hours to automatically suggest the most
          impactful promotions — helping you drive revenue with zero manual effort.
        </Text>

        <Inline space="md" style={{ marginTop: vars.spacing['100'] }}>
          {[
            { title: 'Smart Suggestions', desc: 'AI analyses order data to surface the right promos at the right time.' },
            { title: 'One-click Apply', desc: 'Review and activate promotions across all your locations instantly.' },
            { title: 'Revenue Tracking', desc: 'See the estimated and actual revenue impact of every promotion.' },
          ].map(card => (
            <div
              key={card.title}
              style={{
                flex: 1,
                padding: vars.spacing['150'],
                backgroundColor: vars.colors.background.default,
                borderRadius: vars.border.radius['100'],
                border: `1px solid ${vars.colors.border.neutral.default}`,
                boxShadow: vars.shadows[1],
              }}
            >
              <Stack space="050">
                <Text weight="medium" size="sm">{card.title}</Text>
                <Text color="secondary" size="sm">{card.desc}</Text>
              </Stack>
            </div>
          ))}
        </Inline>
      </Stack>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function AIPromoAgentPage() {
  const [generating, setGenerating] = useState(false)
  const [activeTab, setActiveTab] = useState('all')
  const [search, setSearch] = useState('')
  const [showBanner, setShowBanner] = useState(true)

  const suggestedCount = MENU_ITEMS.filter(i => i.status === 'suggested').length
  const activeCount = MENU_ITEMS.filter(i => i.status === 'active').length
  const pendingCount = MENU_ITEMS.filter(i => i.status === 'pending').length

  const filteredItems = MENU_ITEMS
    .filter(item => activeTab === 'all' || item.status === activeTab)
    .filter(item =>
      !search || item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    )

  const handleGenerate = () => {
    setGenerating(true)
    setTimeout(() => setGenerating(false), 2500)
  }

  return (
    <Page.Root>
      {/* ── Header ── */}
      <PageHeader.Header px="300" py="200" space="100" alignY="center" style={{ flexShrink: 0 }}>
        <Inline space="sm" alignY="center">
          <PageHeader.Title level={1}>AI Promo Agent</PageHeader.Title>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <Badge status={"magic" as any} size="sm" Icon={<SparklesFill />}>Beta</Badge>
        </Inline>

        <Inline space="xs">
          <Button
            status="neutral"
            variant="outline"
            LeadingIcon={<Refresh />}
            onClick={handleGenerate}
            disabled={generating}
          >
            {generating ? 'Generating…' : 'Re-generate'}
          </Button>
          <Button
            status="primary"
            LeadingIcon={<SparklesOutline />}
            onClick={handleGenerate}
            disabled={generating}
          >
            Generate Promos
          </Button>
        </Inline>
      </PageHeader.Header>

      {/* ── Body ── */}
      <Page.Body>
        {/* Discovery banner */}
        {showBanner && <DiscoveryBanner onDismiss={() => setShowBanner(false)} />}

        {/* Metrics row */}
        <Inline space="md" width="full">
          <DataCard.Root flex={1}>
            <DataCard.Header>
              <DataCard.Title tooltip="Total number of menu items managed by this agent">Menu items</DataCard.Title>
            </DataCard.Header>
            <DataCard.Content>
              <DataCard.Value>{MENU_ITEMS.length}</DataCard.Value>
              <Text color="secondary" size="sm">Across all categories</Text>
            </DataCard.Content>
          </DataCard.Root>

          <DataCard.Root flex={1}>
            <DataCard.Header>
              <DataCard.Title tooltip="Promotions currently live">Active promos</DataCard.Title>
            </DataCard.Header>
            <DataCard.Content>
              <Inline space="xs" alignY="center">
                <DataCard.Value>{activeCount}</DataCard.Value>
                <DataCard.ChangeIndicator relativeChange={12}>+12%</DataCard.ChangeIndicator>
              </Inline>
              <Text color="secondary" size="sm">vs. last week</Text>
            </DataCard.Content>
          </DataCard.Root>

          <DataCard.Root flex={1}>
            <DataCard.Header>
              <DataCard.Title tooltip="New suggestions awaiting your review">AI suggestions</DataCard.Title>
            </DataCard.Header>
            <DataCard.Content>
              <DataCard.Value>{suggestedCount}</DataCard.Value>
              <Text color="secondary" size="sm">Ready to review</Text>
            </DataCard.Content>
          </DataCard.Root>

          <DataCard.Root flex={1}>
            <DataCard.Header>
              <DataCard.Title tooltip="Estimated revenue uplift from active promotions">Revenue impact</DataCard.Title>
            </DataCard.Header>
            <DataCard.Content>
              <Inline space="xs" alignY="center">
                <DataCard.Value>+$750</DataCard.Value>
                <DataCard.ChangeIndicator relativeChange={23}>+23%</DataCard.ChangeIndicator>
              </Inline>
              <Text color="secondary" size="sm">Estimated this week</Text>
            </DataCard.Content>
          </DataCard.Root>
        </Inline>

        {/* Generating indicator */}
        {generating && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: vars.spacing['100'],
              padding: vars.spacing['200'],
              backgroundColor: vars.colors.fill.magic.static.subtle,
              borderRadius: vars.border.radius['100'],
              border: `1px solid ${vars.colors.border.magic.static.subtle}`,
            }}
          >
            <LoadingSpinner status="primary" size="sm" />
            <Text size="sm" color="magic">
              AI is analysing your menu and generating personalised promotions…
            </Text>
          </div>
        )}

        {/* Tabs + search + table */}
        <Stack space="150">
          <Inline alignX="spaceBetween" alignY="center">
            <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
              <Tabs.List>
                <Tabs.Trigger value="all">All ({MENU_ITEMS.length})</Tabs.Trigger>
                <Tabs.Trigger value="suggested">AI Suggested ({suggestedCount})</Tabs.Trigger>
                <Tabs.Trigger value="active">Active ({activeCount})</Tabs.Trigger>
                <Tabs.Trigger value="pending">Pending ({pendingCount})</Tabs.Trigger>
              </Tabs.List>
            </Tabs.Root>

            {/* Search */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: vars.spacing['075'],
                padding: `${vars.spacing['075']} ${vars.spacing['150']}`,
                border: `1px solid ${vars.colors.border.neutral.default}`,
                borderRadius: vars.border.radius['100'],
                backgroundColor: vars.colors.background.default,
                minWidth: '220px',
              }}
            >
              <SearchOutline size="sm" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search items…"
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontSize: vars.font.size.sm,
                  color: vars.colors.text.neutral.default.default,
                  width: '100%',
                }}
              />
            </div>
          </Inline>

          <Table.Root width="full" aria-busy={generating}>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Menu item</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Current price</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>AI discount</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Promo type</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Est. revenue</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {filteredItems.length === 0 && (
                <Table.Row>
                  <Table.Cell>
                    <Text color="secondary" size="sm">No items match your search.</Text>
                  </Table.Cell>
                </Table.Row>
              )}
              {filteredItems.map(item => (
                <Table.Row
                  key={item.id}
                  status={
                    item.status === 'active' ? 'primary' :
                    item.status === 'rejected' ? 'critical' :
                    undefined
                  }
                >
                  <Table.RowHeaderCell>
                    <Inline space="xs" alignY="center">
                      {item.status === 'suggested' && <SparklesOutline size="sm" />}
                      <Text weight="medium" size="sm">{item.name}</Text>
                    </Inline>
                  </Table.RowHeaderCell>

                  <Table.Cell>
                    <Text size="sm" color="secondary">{item.category}</Text>
                  </Table.Cell>

                  <Table.Cell>
                    <Text size="sm">${item.currentPrice.toFixed(2)}</Text>
                  </Table.Cell>

                  <Table.Cell>
                    <Inline space="2xs" alignY="center">
                      <DiscountOutline size="sm" />
                      <Text size="sm" weight="medium">{item.aiSuggestedDiscount}% off</Text>
                    </Inline>
                  </Table.Cell>

                  <Table.Cell>
                    <Badge size="sm" status="info" Icon={<PriceTagFlash />}>
                      {item.promoType}
                    </Badge>
                  </Table.Cell>

                  <Table.Cell>
                    <Inline space="2xs" alignY="center">
                      <GraphBarOutline size="sm" />
                      <Text size="sm" weight="medium">{item.estimatedRevenue}</Text>
                    </Inline>
                  </Table.Cell>

                  <Table.Cell>
                    <StatusBadge status={item.status} />
                  </Table.Cell>

                  {/* Row actions — ellipsis dropdown like Mission Control */}
                  <Table.Cell>
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger asChild>
                        <Button
                          size="xs"
                          status="neutral"
                          variant="ghost"
                          Icon={<MenuEllipsisDirectionVertical />}
                          aria-label="Row actions"
                        />
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Content side="left" align="start">
                        {item.status === 'suggested' && (
                          <>
                            <DropdownMenu.Item icon={<Check />}>Apply promo</DropdownMenu.Item>
                            <DropdownMenu.Item icon={<EditOutline />}>Edit promo</DropdownMenu.Item>
                            <DropdownMenu.Separator />
                          </>
                        )}
                        {item.status === 'active' && (
                          <DropdownMenu.Item icon={<Cross />} status="critical">
                            Deactivate
                          </DropdownMenu.Item>
                        )}
                        {item.status === 'pending' && (
                          <DropdownMenu.Item icon={<Check />}>Review &amp; approve</DropdownMenu.Item>
                        )}
                        {item.status === 'rejected' && (
                          <DropdownMenu.Item icon={<Refresh />}>Reconsider</DropdownMenu.Item>
                        )}
                        <DropdownMenu.Item icon={<ChevronDirectionDown />}>
                          View details
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Root>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Stack>

        {/* Avatar avatar spacer so last row isn't against the edge */}
        <div style={{ height: vars.spacing['100'] }} />
      </Page.Body>
    </Page.Root>
  )
}
