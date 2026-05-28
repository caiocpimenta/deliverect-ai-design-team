import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip as ChartTooltip, ResponsiveContainer, Legend,
} from 'recharts'
import {
  Badge,
  Button,
  DataCard,
  Drawer,
  Filter,
  Heading,
  Inline,
  InfoOutline,
  PageHeader,
  Stack,
  Table,
  Text,
  Tooltip,
  vars,
} from '@deliverect/galaxy-react'
import { Page } from '../components/Page'
import { MOCK_AGENTS } from '../data/mockAgents'

// ─── Types & mock data ────────────────────────────────────────────────────────

interface FixRecord {
  id: string
  agentId: string
  agentName: string
  location: string
  affectedPlu: string
  lastErrorDate: string
  fixAppliedDate: string
  ordersRecovered: number
  avgOrderValue: number
  revenueSaved: number
  actionType: string
}

const ACTION_TYPE_LABELS: Record<string, string> = {
  duplicate:    'Duplicate items',
  modifier:     'Modifier corrections',
  price:        'Price validation',
  instructions: 'Special instructions',
  position:     'Position',
  upsells:      'Upsells',
  meal_deals:   'Meal deals',
  content:      'Content',
  best_sellers: 'Best sellers',
}

const MOCK_FIX_RECORDS: FixRecord[] = [
  { id: '1',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Liverpool St',  affectedPlu: 'PLU-1042', lastErrorDate: '2026-05-10', fixAppliedDate: '2026-05-10', ordersRecovered: 18, avgOrderValue: 26.40, revenueSaved: 475.20, actionType: 'price' },
  { id: '2',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Liverpool St',  affectedPlu: 'PLU-0871', lastErrorDate: '2026-05-08', fixAppliedDate: '2026-05-08', ordersRecovered: 12, avgOrderValue: 22.80, revenueSaved: 273.60, actionType: 'modifier' },
  { id: '3',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Victoria',      affectedPlu: 'PLU-2203', lastErrorDate: '2026-05-12', fixAppliedDate: '2026-05-12', ordersRecovered: 24, avgOrderValue: 31.50, revenueSaved: 756.00, actionType: 'duplicate' },
  { id: '4',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Victoria',      affectedPlu: 'PLU-1155', lastErrorDate: '2026-05-07', fixAppliedDate: '2026-05-07', ordersRecovered:  9, avgOrderValue: 19.90, revenueSaved: 179.10, actionType: 'price' },
  { id: '5',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Liverpool St',  affectedPlu: 'PLU-0934', lastErrorDate: '2026-05-15', fixAppliedDate: '2026-05-15', ordersRecovered: 31, avgOrderValue: 28.70, revenueSaved: 889.70, actionType: 'instructions' },
  { id: '6',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Victoria',      affectedPlu: 'PLU-3301', lastErrorDate: '2026-05-18', fixAppliedDate: '2026-05-18', ordersRecovered: 15, avgOrderValue: 24.20, revenueSaved: 363.00, actionType: 'modifier' },
  { id: '7',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Liverpool St',  affectedPlu: 'PLU-4412', lastErrorDate: '2026-05-19', fixAppliedDate: '2026-05-19', ordersRecovered:  8, avgOrderValue: 30.10, revenueSaved: 240.80, actionType: 'duplicate' },
  { id: '8',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Victoria',      affectedPlu: 'PLU-0562', lastErrorDate: '2026-05-06', fixAppliedDate: '2026-05-06', ordersRecovered: 21, avgOrderValue: 27.60, revenueSaved: 579.60, actionType: 'price' },
  { id: '9',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Liverpool St',  affectedPlu: 'PLU-1894', lastErrorDate: '2026-05-13', fixAppliedDate: '2026-05-13', ordersRecovered: 14, avgOrderValue: 23.50, revenueSaved: 329.00, actionType: 'instructions' },
  { id: '10', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Victoria',      affectedPlu: 'PLU-2780', lastErrorDate: '2026-05-16', fixAppliedDate: '2026-05-16', ordersRecovered: 19, avgOrderValue: 32.00, revenueSaved: 608.00, actionType: 'modifier' },
]

const AGENT_OPTIONS = MOCK_AGENTS.map(a => ({ label: a.name, value: a.id }))

function subDays(date: Date, days: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() - days)
  return d
}

function subMonths(date: Date, months: number): Date {
  const d = new Date(date)
  d.setMonth(d.getMonth() - months)
  return d
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

// ─── Column header with tooltip ───────────────────────────────────────────────

function ColHeader({ label, tip }: { label: string; tip: string }) {
  return (
    <Inline space="050" alignY="center">
      <span>{label}</span>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span style={{ display: 'flex', cursor: 'help', color: vars.colors.icon.neutral.secondary }}>
            <InfoOutline size="sm" />
          </span>
        </Tooltip.Trigger>
        <Tooltip.Content side="top">{tip}</Tooltip.Content>
      </Tooltip.Root>
    </Inline>
  )
}

// ─── Fix record drawer ────────────────────────────────────────────────────────

function FixRecordDrawer({ record, open, onClose }: { record: FixRecord | null; open: boolean; onClose: () => void }) {
  if (!record) return null
  return (
    <Drawer.Root open={open} onOpenChange={v => { if (!v) onClose() }}>
      <Drawer.Content placement="right">
        <Drawer.Header showCloseButton>
          <Stack height="auto" space="025">
            <Text weight="bold">{record.location}</Text>
            <Text size="sm" color="secondary" style={{ fontFamily: 'monospace' }}>{record.affectedPlu}</Text>
          </Stack>
        </Drawer.Header>

        <Drawer.Body>
          <Stack height="auto" space="300">
            {/* Fix details */}
            <Stack height="auto" space="150">
              <Text weight="medium" size="sm" color="secondary" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fix details</Text>
              <Stack height="auto" space="0">
                {[
                  { label: 'PLU code',      value: <Text size="sm" style={{ fontFamily: 'monospace' }}>{record.affectedPlu}</Text> },
                  { label: 'Action type',   value: <Badge size="sm" status="neutral">{ACTION_TYPE_LABELS[record.actionType] ?? record.actionType}</Badge> },
                  { label: 'Error detected',  value: <Text size="sm">{formatDate(record.lastErrorDate)}</Text> },
                  { label: 'Fix applied',     value: <Text size="sm">{formatDate(record.fixAppliedDate)}</Text> },
                  { label: 'Location',        value: <Text size="sm">{record.location}</Text> },
                ].map(({ label, value }, i, arr) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: `${vars.spacing['125']} 0`,
                      borderBottom: i < arr.length - 1 ? `1px solid ${vars.colors.border.neutral.default.default}` : undefined,
                    }}
                  >
                    <Text size="sm" color="secondary">{label}</Text>
                    {value}
                  </div>
                ))}
              </Stack>
            </Stack>

            {/* Impact */}
            <Stack height="auto" space="150">
              <Text weight="medium" size="sm" color="secondary" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Revenue impact</Text>
              <Inline space="100" width="full">
                {[
                  { label: 'Protected orders (5d)', value: String(record.ordersRecovered) },
                  { label: 'Avg. order value',       value: `£${record.avgOrderValue.toFixed(2)}` },
                  { label: 'Revenue protected',      value: `£${record.revenueSaved.toFixed(2)}` },
                ].map(card => (
                  <div
                    key={card.label}
                    style={{
                      flex: 1,
                      padding: vars.spacing['150'],
                      backgroundColor: vars.colors.background.subtle,
                      borderRadius: vars.border.radius['100'],
                      border: `1px solid ${vars.colors.border.neutral.default.default}`,
                    }}
                  >
                    <Stack height="auto" space="050">
                      <Text size="sm" color="secondary">{card.label}</Text>
                      <Text weight="bold">{card.value}</Text>
                    </Stack>
                  </div>
                ))}
              </Inline>
            </Stack>

            {/* Orders link */}
            <div>
              <Button
                variant="outline"
                status="neutral"
                size="sm"
                onClick={() => window.open('https://frontend.deliverect.com/orders', '_blank')}
              >
                View affected orders
              </Button>
            </div>
          </Stack>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  )
}

// ─── Agent metrics tiles ──────────────────────────────────────────────────────

import type { Agent } from '../data/mockAgents'

function AgentMetricsCards({ agent }: { agent: Agent }) {
  if (agent.agentType === 'MENU_AGENT') {
    const totalOrders  = agent.locations.reduce((s, l) => s + l.totalOrders, 0)
    const totalRevenue = agent.locations.reduce((s, l) => s + l.totalRevenue, 0)
    const avgAov       = agent.locations.length > 0
      ? agent.locations.reduce((s, l) => s + l.avgAov, 0) / agent.locations.length : 0
    const avgMulti     = agent.locations.length > 0
      ? agent.locations.reduce((s, l) => s + l.multiProductPct, 0) / agent.locations.length : 0

    return (
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
    )
  }

  if (agent.agentType === 'ORDER_FIXER_AGENT') {
    return (
      <Inline space="150" width="full">
        {([
          { tooltip: 'Orders with issues that the agent successfully corrected', title: 'Orders resolved',           value: '142'    },
          { tooltip: 'Potential issues detected and stopped before impacting the kitchen', title: 'Issues prevented', value: '89'     },
          { tooltip: 'Average value of orders that contained an issue',          title: 'Avg. affected order value', value: '£28.50' },
          { tooltip: 'Estimated revenue protected from order errors and cancellations', title: 'Revenue protected',  value: '£6,555' },
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
    )
  }

  return null
}

// ─── Revenue chart ────────────────────────────────────────────────────────────

const CURRENT_COLOR  = '#3870DB'
const PREVIOUS_COLOR = '#727272'

function buildChartData(from: Date, to: Date) {
  const MS_DAY = 1000 * 60 * 60 * 24
  const duration = to.getTime() - from.getTime()
  const prevFrom = new Date(from.getTime() - duration - MS_DAY)

  const result: { date: string; current: number; previous: number }[] = []
  const cursor     = new Date(from)
  const prevCursor = new Date(prevFrom)

  while (cursor <= to) {
    const s1 = cursor.getDate()   + cursor.getMonth()   * 31
    const s2 = prevCursor.getDate() + prevCursor.getMonth() * 31
    result.push({
      date:     cursor.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }),
      current:  Math.max(0, Math.round(320 + Math.sin(s1 * 0.8) * 160 + Math.cos(s1 * 0.4) * 90)),
      previous: Math.max(0, Math.round(260 + Math.sin(s2 * 0.8) * 130 + Math.cos(s2 * 0.4) * 70)),
    })
    cursor.setDate(cursor.getDate() + 1)
    prevCursor.setDate(prevCursor.getDate() + 1)
  }
  return result
}

function formatGBP(v: number) { return `£${v.toLocaleString('en-GB')}` }

function RevenueChart({ dateRange }: { dateRange: DateRange }) {
  const today = new Date()
  const from  = dateRange?.from ?? subDays(today, 29)
  const to    = dateRange?.to   ?? today

  const data = buildChartData(from, to)

  const totalCurrent  = data.reduce((s, d) => s + d.current,  0)
  const totalPrevious = data.reduce((s, d) => s + d.previous, 0)
  const changePct     = totalPrevious > 0
    ? Math.round(((totalCurrent - totalPrevious) / totalPrevious) * 100)
    : 0

  const prevFrom = new Date(from.getTime() - (to.getTime() - from.getTime()) - 86400000)
  const prevTo   = new Date(from.getTime() - 86400000)
  const fmtDate  = (d: Date) => d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })

  // Show at most ~7 labels on x-axis
  const tickInterval = Math.max(1, Math.floor(data.length / 7))
  const ticks = data.filter((_, i) => i % tickInterval === 0).map(d => d.date)

  const changeColor = changePct >= 0 ? '#03884F' : '#C5492E'

  return (
    <div style={{
      backgroundColor: vars.colors.background.default,
      border: `1px solid ${vars.colors.border.neutral.default.default}`,
      borderRadius: vars.border.radius['150'],
      padding: vars.spacing['300'],
      display: 'flex',
      flexDirection: 'column',
      gap: vars.spacing['200'],
    }}>
      {/* Header */}
      <Inline alignX="spaceBetween" alignY="center">
        <Text weight="bold" size="sm">Revenue Protected</Text>
        <Inline space="100" alignY="center">
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 12, height: 2, backgroundColor: CURRENT_COLOR, borderRadius: 1 }} />
            <Text size="sm" color="secondary">Current period</Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 12, height: 2, backgroundColor: PREVIOUS_COLOR, borderRadius: 1, backgroundImage: `repeating-linear-gradient(90deg, ${PREVIOUS_COLOR} 0 4px, transparent 4px 8px)`, backgroundSize: '8px 2px' }} />
            <Text size="sm" color="secondary">Previous period</Text>
          </div>
        </Inline>
      </Inline>

      {/* KPI summary */}
      <div>
        <Inline space="100" alignY="center">
          <span style={{ fontSize: 24, fontWeight: 600, color: vars.colors.text.neutral.default }}>{formatGBP(totalCurrent)}</span>
          <span style={{
            fontSize: 12, fontWeight: 500, padding: '2px 6px',
            borderRadius: 4, backgroundColor: changePct >= 0 ? '#DCFCE7' : '#FEE2E2',
            color: changeColor,
          }}>
            {changePct >= 0 ? '+' : ''}{changePct}%
          </span>
        </Inline>
        <Text size="sm" color="secondary" style={{ marginTop: 2 }}>
          Previous period: {formatGBP(totalPrevious)} · {fmtDate(prevFrom)} – {fmtDate(prevTo)}
        </Text>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 4, right: 8, bottom: 0, left: 8 }}>
          <CartesianGrid vertical={false} stroke="#EDEDED" />
          <XAxis
            dataKey="date"
            ticks={ticks}
            tick={{ fontSize: 12, fill: '#727272' }}
            axisLine={false}
            tickLine={{ stroke: '#EDEDED' }}
          />
          <YAxis
            tickFormatter={v => `£${v}`}
            tick={{ fontSize: 12, fill: '#727272' }}
            axisLine={false}
            tickLine={false}
            width={52}
          />
          <ChartTooltip
            formatter={(value: number, name: string) => [formatGBP(value), name]}
            contentStyle={{
              backgroundColor: vars.colors.background.default,
              border: `1px solid ${vars.colors.border.neutral.default.default}`,
              borderRadius: 8,
              fontSize: 12,
            }}
          />
          <Line
            type="monotone"
            dataKey="current"
            name="Current period"
            stroke={CURRENT_COLOR}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="previous"
            name="Previous period"
            stroke={PREVIOUS_COLOR}
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

// ─── Empty state ──────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: vars.spacing['150'],
        padding: vars.spacing['500'],
        border: `1px dashed ${vars.colors.border.neutral.default.default}`,
        borderRadius: vars.border.radius['150'],
      }}
    >
      <Text color="secondary">Select an agent above to view its analytics data.</Text>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

type DateRange = { from: Date; to: Date } | null

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear()
    && a.getMonth() === b.getMonth()
    && a.getDate() === b.getDate()
}

export function AnalyticsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const fromParam = searchParams.get('from')

  const defaultAgentId = searchParams.get('agentId') ?? MOCK_AGENTS[0]?.id ?? ''
  const [selectedAgentId, setSelectedAgentId] = useState<string>(defaultAgentId)
  const [dateRange, setDateRange] = useState<DateRange>(() => {
    if (fromParam) return { from: new Date(fromParam), to: new Date() }
    const agent = MOCK_AGENTS.find(a => a.id === defaultAgentId)
    return agent ? { from: new Date(agent.createdAt), to: new Date() } : null
  })
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState<FixRecord | null>(null)

  const today = new Date()

  const selectedAgent = MOCK_AGENTS.find(a => a.id === selectedAgentId)
  const agentStartDate = selectedAgent ? new Date(selectedAgent.createdAt) : null

  const agentStartPreset = agentStartDate
    ? [{ label: 'Since agent start', from: agentStartDate, to: today }]
    : []

  const datePresets = [
    ...agentStartPreset,
    { label: 'Previous 7 days',  from: subDays(today, 7),    to: today },
    { label: 'Last 2 weeks',     from: subDays(today, 14),   to: today },
    { label: 'Last 30 days',     from: subDays(today, 30),   to: today },
    { label: 'Last 3 months',    from: subMonths(today, 3),  to: today },
    { label: 'Last 6 months',    from: subMonths(today, 6),  to: today },
  ]

  const handleAgentChange = (id: string) => {
    if (!selectedAgentId && id) {
      const agent = MOCK_AGENTS.find(a => a.id === id)
      if (agent) {
        setDateRange({ from: new Date(agent.createdAt), to: new Date() })
      }
    }
    setSelectedAgentId(id)
    setSearchParams(id ? { agentId: id } : {})
  }

  const selectedAgentLabel = AGENT_OPTIONS.find(o => o.value === selectedAgentId)?.label ?? 'Agent'

  const agentRecords = MOCK_FIX_RECORDS.filter(r => r.agentId === selectedAgentId)

  const records = dateRange
    ? agentRecords.filter(r => {
        const d = new Date(r.lastErrorDate)
        return d >= dateRange.from && d <= dateRange.to
      })
    : agentRecords

  return (
    <Page.Root>
      <PageHeader.Header px="300" py="200" space="100" alignY="center" style={{ flexShrink: 0 }}>
        <PageHeader.Title>Analytics</PageHeader.Title>
      </PageHeader.Header>

      <Page.Body space="250" py="250">
        {/* Filters */}
        <Filter.Menu
          label="Filters"
          initialFilterKeys={['agent', 'date']}
          filterConfigMap={{
            agent: {
              label: 'Agent',
              filter: (
                <Filter.Select
                  id="agent"
                  tagLabel={selectedAgentLabel}
                  applyLabel="Apply"
                  value={selectedAgentId}
                  options={AGENT_OPTIONS}
                  optionsEmptyLabel="No agents"
                  onValueApplyChange={handleAgentChange}
                />
              ),
            },
            date: {
              label: 'Date',
              filter: (
                <Filter.CalendarWithPresets
                  id="date"
                  tagLabel={dateRange ? undefined : 'All time'}
                  applyLabel="Apply"
                  applyMode="deferred"
                  presets={datePresets}
                  customOptionLabel="Custom range"
                  selected={dateRange ?? undefined}
                  disabled={{ after: today }}
                  isSameDate={isSameDay}
                  onValueApplyChange={(from, to) => setDateRange({ from, to })}
                />
              ),
            },
          }}
        />

        {!selectedAgentId ? (
          <EmptyState />
        ) : (
          <>
            {selectedAgent && <AgentMetricsCards agent={selectedAgent} />}

            {/* <RevenueChart dateRange={dateRange} /> */}

            {/* Table */}
            <Table.Root width="full">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell noHover><ColHeader label="Location"                   tip="The location where the PLU error was detected." /></Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell noHover><ColHeader label="Last Error"                 tip="Date the most recent error for this PLU was detected." /></Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell noHover><ColHeader label="Fix Applied"                tip="Date the agent successfully applied the correction for this PLU." /></Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell noHover><ColHeader label="Action Type"               tip="The type of fix the agent applied, as configured during agent setup." /></Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell noHover><ColHeader label="Protected Orders (5d)"     tip="Orders containing this PLU in the 5 days after the fix, with no reported issues." /></Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell noHover><ColHeader label="Avg. Order Value"           tip="Average value of orders containing this PLU after the fix was applied." /></Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell noHover><ColHeader label="Revenue Protected"          tip="Estimated revenue protected by correcting this PLU error, based on recovered orders." /></Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {records.length === 0 ? (
                  <Table.Row>
                    <Table.Cell colSpan={7}>
                      <Text size="sm" color="secondary" style={{ display: 'block', textAlign: 'center', padding: vars.spacing['300'] }}>
                        No records found for the selected date range.
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                ) : records.map(record => (
                  <Table.Row
                    key={record.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => { setSelectedRecord(record); setDrawerOpen(true) }}
                  >
                    <Table.RowHeaderCell>
                      <Text weight="medium" size="sm">{record.location}</Text>
                    </Table.RowHeaderCell>
                    <Table.Cell>
                      <Text size="sm" color="secondary">{formatDate(record.lastErrorDate)}</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="sm" color="secondary">{formatDate(record.fixAppliedDate)}</Text>
                    </Table.Cell>
                    <Table.Cell>
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      <Badge size="sm" status="neutral">{ACTION_TYPE_LABELS[record.actionType] ?? record.actionType}</Badge>
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        variant="plain"
                        status="neutral"
                        size="sm"
                        onClick={e => { e.stopPropagation(); window.open('https://frontend.deliverect.com/orders', '_blank') }}
                      >
                        {record.ordersRecovered}
                      </Button>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="sm">£{record.avgOrderValue.toFixed(2)}</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="sm" weight="medium" style={{ color: vars.colors.text.success.default }}>
                        £{record.revenueSaved.toFixed(2)}
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </>
        )}
      </Page.Body>

      <FixRecordDrawer
        record={selectedRecord}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </Page.Root>
  )
}
