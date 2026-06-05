import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Badge,
  Button,
  CalendarOutline,
  CheckCircleOutline,
  DataCard,
  Drawer,
  DropdownMenu,
  EyeOpenFill,
  Filter,
  GraphBarOutline,
  Heading,
  Inline,
  Input,
  MenuEllipsisDirectionVertical,
  PinOutline,
  PageHeader,
  Pagination,
  SearchOutline,
  SparklesOutline,
  Stack,
  Table,
  Tabs,
  Text,
  ArrowDirectionLeft,
  EditOutline,
  TrashcanOutline,
  AddCircleOutline,
  vars,
} from '@deliverect/galaxy-react'
import { Page } from '../components/Page'
import { ActivityLog, ReportDrawerBody } from '../components/ActivityLog'
import { useAgents } from '../context/AgentsContext'
import { type AgentPromo } from '../data/mockAgents'
import { MOCK_LOGS } from '../data/mockLogs'
import { AgentInsightsTab, ColHeader, MOCK_FIX_RECORDS, formatDate, LocationFixDrawer, type FixRecord } from '../components/AgentAnalytics'

// ─── Month interval helpers ───────────────────────────────────────────────────

function generateMonthIntervals(agentCreatedAt: string) {
  const today = new Date()
  const start = new Date(agentCreatedAt)
  const intervals: Array<{ key: string; label: string }> = []
  let year = start.getFullYear()
  let month = start.getMonth() + 1
  while (year < today.getFullYear() || (year === today.getFullYear() && month <= today.getMonth() + 1)) {
    const key = `${year}-${String(month).padStart(2, '0')}`
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() + 1 === month
    const label = new Date(year, month - 1, 1).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
    intervals.unshift({ key, label: isCurrentMonth ? `${label} (current)` : label })
    if (++month > 12) { month = 1; year++ }
  }
  return intervals
}

function getMonthInterval(monthKey: string) {
  const [y, m] = monthKey.split('-').map(Number)
  const start = new Date(y, m - 1, 1)
  const today = new Date()
  const isCurrentMonth = today.getFullYear() === y && today.getMonth() + 1 === m
  const end = isCurrentMonth
    ? new Date(today.getFullYear(), today.getMonth(), today.getDate())
    : new Date(y, m, 0)
  const daysInInterval = Math.round((end.getTime() - start.getTime()) / 86400000) + 1
  return { start, end, daysInInterval }
}

function getDaysActive(addedAt: string, interval: ReturnType<typeof getMonthInterval>) {
  const added = new Date(addedAt)
  if (added > interval.end) return 0
  const locationStart = added > interval.start ? added : interval.start
  return Math.round((interval.end.getTime() - locationStart.getTime()) / 86400000) + 1
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function verdictBadgeStatus(verdict: 'inconclusive' | 'positive' | 'negative') {
  if (verdict === 'positive') return 'success' as const
  if (verdict === 'negative') return 'critical' as const
  return 'neutral' as const
}

function makeInitials(label: string): string {
  const words = label.trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

function conditionLabel(c: string): string {
  if (c === 'underperforming') return 'Underperforming'
  if (c === 'flat') return 'Flat'
  if (c === 'overperforming') return 'Overperforming'
  return c
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function PromoAvatar({ label }: { label: string }) {
  return (
    <div
      style={{
        width: 28, height: 28, borderRadius: '50%',
        backgroundColor: vars.colors.fill.neutral.static.subtle,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: '10px', fontWeight: 700, color: vars.colors.text.neutral.static.default, lineHeight: 1 }}>
        {makeInitials(label)}
      </span>
    </div>
  )
}

function PromoStatusBadge({ status }: { status: AgentPromo['status'] }) {
  return status === 'active'
    ? <Badge size="sm" status="success">Active</Badge>
    : <Badge size="sm" status="neutral">Paused</Badge>
}

function CycleStatusBadge({ status }: { status: 'optimising' | 'scheduled' | 'idle' }) {
  const config = {
    optimising: { label: 'Optimising', badgeStatus: 'success' as const },
    scheduled:  { label: 'Scheduled',  badgeStatus: 'warning' as const },
    idle:       { label: 'Idle',       badgeStatus: 'neutral' as const },
  }
  const { label, badgeStatus } = config[status]
  return <Badge size="sm" status={badgeStatus}>{label}</Badge>
}

// ─── Promotions table (for PROMOTION_AGENT) ───────────────────────────────────

function PromotionsTable({ promos }: { promos: AgentPromo[] }) {
  if (promos.length === 0) {
    return (
      <div
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: vars.spacing['500'],
          gap: vars.spacing['150'],
          border: `1px dashed ${vars.colors.border.neutral.default.default}`,
          borderRadius: vars.border.radius['150'],
        }}
      >
        <SparklesOutline size="xl" />
        <Text color="secondary" size="sm">No promotions configured for this agent.</Text>
      </div>
    )
  }

  return (
    <Table.Root width="full">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell noHover>Promotion</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell noHover>Trigger</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell noHover>Channels</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell noHover>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell noHover width="1" />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {promos.map(promo => (
          <Table.Row key={`${promo.channelId}-${promo.promoId}`}>
            <Table.RowHeaderCell>
              <Inline space="100" alignY="center">
                <PromoAvatar label={promo.label} />
                <Text weight="medium" size="sm">{promo.label}</Text>
              </Inline>
            </Table.RowHeaderCell>

            <Table.Cell>
              {promo.conditions.length > 0 ? (
                <Text size="sm" color="secondary">
                  {promo.conditions.map(conditionLabel).join(' · ')}
                </Text>
              ) : (
                <Text size="sm" color="secondary">AI-managed</Text>
              )}
            </Table.Cell>

            <Table.Cell>
              <Text size="sm" color="secondary">{promo.channelName}</Text>
            </Table.Cell>

            <Table.Cell>
              <PromoStatusBadge status={promo.status} />
            </Table.Cell>

            <Table.Cell>
              <Inline space="025" alignY="center">
                <Button
                  variant="transparent"
                  size="sm"
                  Icon={<EyeOpenFill size="md" />}
                  aria-label="Preview promotion"
                />
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <Button
                      variant="transparent"
                      size="sm"
                      Icon={<MenuEllipsisDirectionVertical size="lg" />}
                      aria-label="Promotion actions"
                    />
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content side="left" align="start">
                    <DropdownMenu.Item icon={<EditOutline />}>Edit</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item icon={<TrashcanOutline />} status="critical">Remove</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </Inline>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function AgentDetailPage() {
  const { agentId } = useParams<{ agentId: string }>()
  const navigate = useNavigate()
  const { agents, removeAgent } = useAgents()
  const [activeTab, setActiveTab] = useState('overview')
  const [reportDrawerOpen, setReportDrawerOpen] = useState(false)
  const [fixDrawerOpen, setFixDrawerOpen] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<{ name: string; records: FixRecord[] } | null>(null)
  const [overviewPage, setOverviewPage] = useState(1)
  const [locationSearch, setLocationSearch] = useState('')
  const [locationStatusFilter, setLocationStatusFilter] = useState<string[]>([])
  const [locationNamesFilter, setLocationNamesFilter] = useState<string[]>([])
  const [overviewDateFilter, setOverviewDateFilter] = useState(() => {
    const t = new Date()
    return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}`
  })
  const PAGE_SIZE = 25

  const agent = agents.find(a => a.id === agentId) ?? {
    id: agentId ?? 'new',
    name: 'Agent',
    agentType: 'MENU_AGENT' as const,
    enabled: true,
    objective: '',
    activeOn: [],
    createdAt: new Date().toISOString().slice(0, 10),
    locations: [],
  }

  const isPromoAgent  = agent.agentType === 'PROMOTION_AGENT'
  const isMenuAgent   = agent.agentType === 'MENU_AGENT'
  const isFixerAgent  = agent.agentType === 'ORDER_FIXER_AGENT'
  const agentLogs = MOCK_LOGS.filter(l => l.agentId === agentId)

  const lastReportLog = MOCK_LOGS
    .filter(l => l.agentId === agentId && l.logType === 'report' && !!l.report)
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())[0]

  const totalOrders   = agent.locations.reduce((s, l) => s + l.totalOrders, 0)
  const totalRevenue  = agent.locations.reduce((s, l) => s + l.totalRevenue, 0)
  const avgAov        = agent.locations.length > 0
    ? agent.locations.reduce((s, l) => s + l.avgAov, 0) / agent.locations.length : 0
  const avgMulti      = agent.locations.length > 0
    ? agent.locations.reduce((s, l) => s + l.multiProductPct, 0) / agent.locations.length : 0

  const reportData = lastReportLog?.report

  return (
    <>
    <Page.Root>
      <PageHeader.Header px="300" py="200" alignX="spaceBetween" alignY="center" style={{ flexShrink: 0 }}>
        <Inline space="150" alignY="center" style={{ flex: 1, minWidth: 0 }}>
          <Button
            variant="transparent"
            size="sm"
            Icon={<ArrowDirectionLeft size="lg" />}
            aria-label="Back to agents"
            onClick={() => navigate('/agents')}
          />
          <PageHeader.Root>
            <PageHeader.Title level={3}>{agent.name}</PageHeader.Title>
            {agent.objective ? (
              <PageHeader.Description>{agent.objective}</PageHeader.Description>
            ) : null}
          </PageHeader.Root>
        </Inline>

        <Inline space="100" alignY="center" width="auto" style={{ flexShrink: 0 }}>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button
                variant="outline"
                status="neutral"
                Icon={<MenuEllipsisDirectionVertical size="lg" />}
                aria-label="Agent options"
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content side="bottom" align="end">
              <DropdownMenu.Item icon={<EditOutline />}>Edit agent</DropdownMenu.Item>
              <DropdownMenu.Item icon={<SparklesOutline />}>
                {agent.enabled ? 'Deactivate agent' : 'Activate agent'}
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item
                icon={<TrashcanOutline />}
                status="critical"
                onClick={() => { removeAgent(agent.id); navigate('/agents') }}
              >
                Delete agent
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          {!isPromoAgent && (
            <Button status="primary">
              Add Locations
            </Button>
          )}
        </Inline>
      </PageHeader.Header>

      <div style={{ paddingLeft: vars.spacing['300'] }}>
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </div>

      <Page.Body space="250" py="250">
        {activeTab === 'overview' && (
          <>
            {/* Metrics row — menu agent */}
            {isMenuAgent && (
              <Inline space="150" width="full">
                <DataCard.Root flex={1}>
                  <DataCard.Header><DataCard.Title tooltip="Total number of orders across all locations">Total orders</DataCard.Title></DataCard.Header>
                  <DataCard.Content>
                    <DataCard.Value>{totalOrders.toLocaleString()}</DataCard.Value>
                    <Text color="secondary" size="sm">Across all locations</Text>
                  </DataCard.Content>
                </DataCard.Root>

                <DataCard.Root flex={1}>
                  <DataCard.Header><DataCard.Title tooltip="Total revenue generated">Total revenue</DataCard.Title></DataCard.Header>
                  <DataCard.Content>
                    <Inline space="xs" alignY="center">
                      <DataCard.Value>£{totalRevenue.toLocaleString()}</DataCard.Value>
                      <DataCard.ChangeIndicator relativeChange={8}>+8%</DataCard.ChangeIndicator>
                    </Inline>
                    <Text color="secondary" size="sm">vs. last period</Text>
                  </DataCard.Content>
                </DataCard.Root>

                <DataCard.Root flex={1}>
                  <DataCard.Header><DataCard.Title tooltip="Average order value">Avg. order value</DataCard.Title></DataCard.Header>
                  <DataCard.Content>
                    <Inline space="xs" alignY="center">
                      <DataCard.Value>£{avgAov.toFixed(2)}</DataCard.Value>
                      <DataCard.ChangeIndicator relativeChange={5}>+5%</DataCard.ChangeIndicator>
                    </Inline>
                    <Text color="secondary" size="sm">vs. last period</Text>
                  </DataCard.Content>
                </DataCard.Root>

                <DataCard.Root flex={1}>
                  <DataCard.Header><DataCard.Title tooltip="% of orders with 2+ items">Multi-product rate</DataCard.Title></DataCard.Header>
                  <DataCard.Content>
                    <DataCard.Value>{avgMulti.toFixed(0)}%</DataCard.Value>
                    <Text color="secondary" size="sm">2+ items per order</Text>
                  </DataCard.Content>
                </DataCard.Root>
              </Inline>
            )}

            {/* Promotion agent: promotions table */}
            {isPromoAgent ? (
              <PromotionsTable promos={agent.promos ?? []} />

            ) : isFixerAgent && agent.locations.length > 0 ? (
              // ── Order Fixer: per-location fix summary ──────────────────────
              <>{(() => {
                const interval = getMonthInterval(overviewDateFilter)
                const monthIntervals = generateMonthIntervals(agent.createdAt)
                const selectedIntervalLabel = monthIntervals.find(i => i.key === overviewDateFilter)?.label ?? 'Current month'

                const intervalLocations = agent.locations.filter(
                  loc => getDaysActive(loc.addedAt, interval) > 0
                )
                const allLocationOptions = intervalLocations.map(l => ({ label: l.name, value: l.name }))
                const filteredLocations = intervalLocations.filter(loc => {
                  const matchesSearch = loc.name.toLowerCase().includes(locationSearch.toLowerCase())
                  const matchesStatus = locationStatusFilter.length === 0 || locationStatusFilter.includes(loc.status)
                  const matchesLocation = locationNamesFilter.length === 0 || locationNamesFilter.includes(loc.name)
                  return matchesSearch && matchesStatus && matchesLocation
                })

                const visibleNames = new Set(filteredLocations.map(l => l.name))
                const intervalRecords = MOCK_FIX_RECORDS.filter(r =>
                  r.agentId === agent.id &&
                  visibleNames.has(r.location) &&
                  new Date(r.lastErrorDate) >= interval.start &&
                  new Date(r.lastErrorDate) <= interval.end
                )
                const totalOrdersResolved  = intervalRecords.reduce((s, r) => s + r.ordersRecovered, 0)
                const issuesPrevented       = intervalRecords.length
                const avgAffectedAov        = intervalRecords.length > 0
                  ? intervalRecords.reduce((s, r) => s + r.avgOrderValue, 0) / intervalRecords.length : 0
                const totalRevenueProtected = intervalRecords.reduce((s, r) => s + r.revenueSaved, 0)

                const pagedLocations = filteredLocations.slice((overviewPage - 1) * PAGE_SIZE, overviewPage * PAGE_SIZE)

                return (
                  <>
                  {/* Filter row */}
                  <Inline alignX="start" alignY="center" width="full" space="150">
                    <div style={{ height: 36, display: 'flex', alignItems: 'stretch' }}>
                      <Input.Group style={{ width: 280, height: '100%' }}>
                        <Input.LeftAddon style={{ display: 'flex', alignItems: 'center', padding: `0 ${vars.spacing['100']}` }}>
                          <SearchOutline size="sm" />
                        </Input.LeftAddon>
                        <Input.Field
                          placeholder="Search locations..."
                          value={locationSearch}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setLocationSearch(e.target.value); setOverviewPage(1) }}
                        />
                      </Input.Group>
                    </div>
                    <div style={{ height: 36, display: 'flex', alignItems: 'center' }}>
                      <Filter.Menu
                        label="Filter"
                        initialFilterKeys={['location', 'status', 'date']}
                        filterConfigMap={{
                          location: {
                            label: 'Location',
                            filter: (
                              <Filter.Select
                                id="location"
                                icon={<PinOutline size="sm" />}
                                tagLabel="Location"
                                applyLabel="Apply"
                                multiple
                                searchable
                                value={locationNamesFilter}
                                options={allLocationOptions}
                                onValueApplyChange={(val) => { setLocationNamesFilter(val as string[]); setOverviewPage(1) }}
                              />
                            ),
                          },
                          status: {
                            label: 'Status',
                            filter: (
                              <Filter.Select
                                id="status"
                                icon={<CheckCircleOutline size="sm" />}
                                tagLabel="Status"
                                applyLabel="Apply"
                                multiple
                                value={locationStatusFilter}
                                options={[
                                  { label: 'Active',   value: 'active' },
                                  { label: 'Inactive', value: 'inactive' },
                                ]}
                                onValueApplyChange={(val) => { setLocationStatusFilter(val as string[]); setOverviewPage(1) }}
                              />
                            ),
                          },
                          date: {
                            label: 'Period',
                            filter: (
                              <Filter.Select
                                id="date"
                                icon={<CalendarOutline size="sm" />}
                                tagLabel={selectedIntervalLabel}
                                applyLabel="Apply"
                                value={overviewDateFilter}
                                options={monthIntervals.map(i => ({ label: i.label, value: i.key }))}
                                onValueApplyChange={(val) => { setOverviewDateFilter(val as string); setOverviewPage(1) }}
                              />
                            ),
                          },
                        }}
                      />
                    </div>
                  </Inline>

                  {/* DataCards — below filters, reactive to all filters */}
                  <Inline space="150" width="full">
                    {([
                      { tooltip: 'Orders with issues that the agent successfully corrected',           title: 'Orders resolved',           value: String(totalOrdersResolved) },
                      { tooltip: 'Potential issues detected and stopped before impacting the kitchen', title: 'Issues prevented',          value: String(issuesPrevented) },
                      { tooltip: 'Average value of orders that contained an issue',                    title: 'Avg. affected order value', value: avgAffectedAov > 0 ? `£${avgAffectedAov.toFixed(2)}` : '—' },
                      { tooltip: 'Estimated revenue protected from order errors and cancellations',    title: 'Revenue protected',         value: totalRevenueProtected > 0 ? `£${totalRevenueProtected.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '—' },
                    ] as { tooltip: string; title: string; value: string }[]).map(card => (
                      <DataCard.Root key={card.title} flex={1}>
                        <DataCard.Header>
                          <DataCard.Title tooltip={card.tooltip}>{card.title}</DataCard.Title>
                        </DataCard.Header>
                        <DataCard.Content>
                          <DataCard.Value>{card.value}</DataCard.Value>
                        </DataCard.Content>
                      </DataCard.Root>
                    ))}
                  </Inline>

                  {/* Location table */}
                  <Table.Root width="full" className="support-locations-table">
                    <Table.Header>
                      <Table.Row sticky>
                        <Table.ColumnHeaderCell noHover>Location</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell noHover><ColHeader label="Created time"           tip="The date this location was enrolled in the agent." /></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell noHover><ColHeader label="Last Error"             tip="Date the most recent error for this location was detected." /></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell noHover><ColHeader label="Protected Orders (5d)"  tip="Total orders across all PLUs in the 5 days after each fix, with no reported issues." /></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell noHover><ColHeader label="Avg. Order Value"       tip="Average value of orders containing a fixed PLU after the fix was applied." /></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell noHover><ColHeader label="Revenue Protected"      tip="Estimated revenue protected by correcting PLU errors at this location." /></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell noHover><ColHeader label="Orders resolved"        tip="Total number of orders the agent has resolved at this location in the selected period." /></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell noHover><ColHeader label="Status"       tip="Whether this location is currently being monitored by the agent." /></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell noHover />
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {pagedLocations.map(loc => {
                        const locRecords = MOCK_FIX_RECORDS.filter(r =>
                          r.agentId === agent.id &&
                          r.location === loc.name &&
                          new Date(r.lastErrorDate) >= interval.start &&
                          new Date(r.lastErrorDate) <= interval.end
                        )
                        const lastError   = locRecords.sort((a, b) => b.lastErrorDate.localeCompare(a.lastErrorDate))[0]
                        const totalOrders = locRecords.reduce((s, r) => s + r.ordersRecovered, 0)
                        const avgAov      = locRecords.length > 0 ? locRecords.reduce((s, r) => s + r.avgOrderValue, 0) / locRecords.length : 0
                        const totalRev    = locRecords.reduce((s, r) => s + r.revenueSaved, 0)
                        return (
                          <Table.Row
                            key={loc.id}
                            style={{ cursor: locRecords.length > 0 ? 'pointer' : 'default' }}
                            onClick={() => { if (locRecords.length > 0) { setSelectedLocation({ name: loc.name, records: locRecords }); setFixDrawerOpen(true) } }}
                          >
                            <Table.RowHeaderCell>
                              <Text weight="medium" size="sm">{loc.name}</Text>
                            </Table.RowHeaderCell>
                            <Table.Cell>
                              <Text size="sm" color="secondary">
                                {new Date(loc.addedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                              </Text>
                            </Table.Cell>
                            <Table.Cell>
                              <Text size="sm" color="secondary">{lastError ? formatDate(lastError.lastErrorDate) : '—'}</Text>
                            </Table.Cell>
                            <Table.Cell>
                              <Text size="sm">{totalOrders > 0 ? totalOrders : '—'}</Text>
                            </Table.Cell>
                            <Table.Cell>
                              <Text size="sm">{avgAov > 0 ? `£${avgAov.toFixed(2)}` : '—'}</Text>
                            </Table.Cell>
                            <Table.Cell>
                              <Text size="sm" weight="medium" style={{ color: totalRev > 0 ? vars.colors.text.success.default : undefined }}>
                                {totalRev > 0 ? `£${totalRev.toFixed(2)}` : '—'}
                              </Text>
                            </Table.Cell>
                            <Table.Cell>
                              <Text size="sm">{locRecords.length > 0 ? locRecords.length : '—'}</Text>
                            </Table.Cell>
                            <Table.Cell>
                              {loc.status === 'active'
                                ? <Badge size="sm" status="success">Active</Badge>
                                : <Badge size="sm" status="critical">Inactive</Badge>
                              }
                            </Table.Cell>
                            <Table.Cell onClick={e => e.stopPropagation()}>
                              <DropdownMenu.Root>
                                <DropdownMenu.Trigger asChild>
                                  <Button variant="transparent" size="sm" Icon={<MenuEllipsisDirectionVertical size="lg" />} aria-label="Location actions" />
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content side="left" align="start">
                                  <DropdownMenu.Item icon={<GraphBarOutline />} onClick={() => setActiveTab('insights')}>
                                    View insights
                                  </DropdownMenu.Item>
                                </DropdownMenu.Content>
                              </DropdownMenu.Root>
                            </Table.Cell>
                          </Table.Row>
                        )
                      })}
                    </Table.Body>
                  </Table.Root>
                  <Inline alignX="right" width="full">
                    <Pagination
                      total={filteredLocations.length}
                      page={overviewPage}
                      pageSize={PAGE_SIZE}
                      subject="locations"
                      onPageChange={setOverviewPage}
                    />
                  </Inline>
                  </>
                )
              })()}</>

            ) : isMenuAgent && agent.locations.length > 0 ? (
              // ── Menu Agent: location performance ──────────────────────────
              <>
              <Table.Root width="full" className="menu-locations-table">
                <Table.Header>
                  <Table.Row sticky>
                    <Table.ColumnHeaderCell noHover><ColHeader label="Locations" tip="Metrics reflect location-level data. Multiple Autonomous Menu agents in the same location can share similar results." /></Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell noHover>Created time</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell noHover>Last optimization</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell noHover>Optimisation runs</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell noHover><ColHeader label="Total orders" tip="Total orders received after the agent was set up, compared to the same number of days before." /></Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell noHover><ColHeader label="Total revenue" tip="Total revenue earned after the agent was set up, compared to the same number of days before." /></Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell noHover><ColHeader label="Daily AOV" tip="Average daily order value after the agent was set up, compared to the same number of days before." /></Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell noHover><ColHeader label="Basket size" tip="Average number of items in each order after the agent was set up, compared to the same number of days before." /></Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell noHover><ColHeader label="Multi-product orders" tip="Percentage of orders containing 3 or more distinct products after the agent was set up, compared to the same number of days before." /></Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell noHover>Status</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell noHover />
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {agent.locations.slice((overviewPage - 1) * PAGE_SIZE, overviewPage * PAGE_SIZE).map(loc => (
                    <Table.Row
                      key={loc.id}
                      onClick={() => lastReportLog && setReportDrawerOpen(true)}
                      style={{ cursor: lastReportLog ? 'pointer' : 'default' }}
                    >
                      <Table.RowHeaderCell>
                        <Text weight="medium" size="sm">{loc.name}</Text>
                      </Table.RowHeaderCell>
                      <Table.Cell>
                        <Text size="sm" color="secondary">
                          {new Date(agent.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="sm" color="secondary">
                          {(() => {
                            const last = MOCK_LOGS
                              .filter(l => l.location === loc.name && l.logType === 'optimisation')
                              .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())[0]
                            return last
                              ? new Date(last.timestamp).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                              : '—'
                          })()}
                        </Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="sm">
                          {MOCK_LOGS.filter(l => l.location === loc.name && l.logType === 'optimisation').length || '—'}
                        </Text>
                      </Table.Cell>
                      <Table.Cell><Text size="sm">{loc.totalOrders.toLocaleString()}</Text></Table.Cell>
                      <Table.Cell><Text size="sm">£{loc.totalRevenue.toLocaleString()}</Text></Table.Cell>
                      <Table.Cell><Text size="sm">£{loc.avgAov.toFixed(2)}</Text></Table.Cell>
                      <Table.Cell>
                        <Text size="sm">{(loc.totalRevenue / loc.totalOrders / (loc.avgAov / 3)).toFixed(1)} items</Text>
                      </Table.Cell>
                      <Table.Cell><Text size="sm">{loc.multiProductPct}%</Text></Table.Cell>
                      <Table.Cell>
                        {loc.status === 'active'
                          ? <Badge size="sm" status="success">Active</Badge>
                          : <Badge size="sm" status="critical">Inactive</Badge>
                        }
                      </Table.Cell>
                      <Table.Cell onClick={e => e.stopPropagation()}>
                        <Inline space="025" alignY="center">
                          <Button
                            variant="transparent" size="sm"
                            Icon={<EyeOpenFill size="md" />}
                            aria-label="Preview menu"
                            onClick={() => navigate(`/agents/${agent.id}/menu-preview`, { state: { locationId: loc.id } })}
                          />
                          <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                              <Button variant="transparent" size="sm" Icon={<MenuEllipsisDirectionVertical size="lg" />} aria-label="Location actions" />
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content side="left" align="start">
                              <DropdownMenu.Item
                                icon={<GraphBarOutline />}
                                onClick={() => lastReportLog && setReportDrawerOpen(true)}
                                disabled={!lastReportLog}
                              >
                                See report
                              </DropdownMenu.Item>
                            </DropdownMenu.Content>
                          </DropdownMenu.Root>
                        </Inline>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
              <Inline alignX="right" width="full">
                <Pagination
                  total={agent.locations.length}
                  page={overviewPage}
                  pageSize={PAGE_SIZE}
                  subject="locations"
                  onPageChange={setOverviewPage}
                />
              </Inline>
              </>

            ) : (
              <div
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', padding: vars.spacing['500'],
                  gap: vars.spacing['150'],
                  border: `1px dashed ${vars.colors.border.neutral.default.default}`,
                  borderRadius: vars.border.radius['150'],
                }}
              >
                <Text color="secondary" size="sm">No locations added yet.</Text>
                <Button size="sm" variant="outline" status="neutral" LeadingIcon={<AddCircleOutline />}>
                  Add your first location
                </Button>
              </div>
            )}
          </>
        )}

        {activeTab === 'activity' && (
          <ActivityLog logs={agentLogs} showPreviewColumn={false} showChips={false} showPrefix={false} compactTitle stickyToolbar />
        )}

        {activeTab === 'insights' && (
          <AgentInsightsTab agent={agent} />
        )}
      </Page.Body>
    </Page.Root>

    <LocationFixDrawer
      locationName={selectedLocation?.name ?? ''}
      records={selectedLocation?.records ?? []}
      open={fixDrawerOpen}
      onClose={() => setFixDrawerOpen(false)}
    />

    {reportData && (
      <Drawer.Root open={reportDrawerOpen} onOpenChange={open => { if (!open) setReportDrawerOpen(false) }}>
        <Drawer.Content overlay style={{ width: 520 }}>
          <Drawer.Header>
            <Inline space="100" alignY="center">
              <Heading level={3}>Performance report</Heading>
              <Badge size="sm" status={verdictBadgeStatus(reportData.verdict)}>
                {reportData.verdictLabel}
              </Badge>
            </Inline>
          </Drawer.Header>
          <Drawer.Body>
            <ReportDrawerBody report={reportData} reason={lastReportLog!.reason} />
          </Drawer.Body>
          <Drawer.Footer>
            <Button status="neutral" variant="outline" onClick={() => setReportDrawerOpen(false)}>
              Close
            </Button>
            <Button status="primary">Export</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>
    )}
    </>
  )
}
