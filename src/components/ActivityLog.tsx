import { useState, useMemo } from 'react'
import {
  Badge,
  Button,
  CalendarOutline,
  Drawer,
  EyeOpenFill,
  Filter,
  GraphBarFill,
  Heading,
  Input,
  InputChip,
  Inline,
  List,
  MegaphoneOutline,
  MenuFill,
  SearchOutline,
  SettingsOutline,
  Stack,
  Text,
  UploadCloud,
  vars,
} from '@deliverect/galaxy-react'
import { type AgentLog, type ReportData, PERMISSION_LABELS } from '../data/mockLogs'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatTimestamp(ts: string) {
  const d = new Date(ts)
  return d.toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

function agentTypeLabel(type: AgentLog['agentType']) {
  if (type === 'MENU_AGENT') return 'Autonomous menu'
  if (type === 'ORDER_FIXER_AGENT') return 'Autonomous support'
  return 'Promotions'
}

const CHANNEL_LABELS: Record<string, string> = {
  'uber-eats': 'Uber Eats',
  'deliveroo': 'Deliveroo',
  'just-eat':  'Just Eat',
}

function verdictBadgeStatus(verdict: ReportData['verdict']) {
  if (verdict === 'positive') return 'success'
  if (verdict === 'negative') return 'critical'
  return 'neutral'
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function LogTypeIcon({ log }: { log: AgentLog }) {
  if (log.logType === 'publication') return <UploadCloud size="300" />
  if (log.logType === 'report')      return <GraphBarFill size="300" />
  if (log.agentType === 'MENU_AGENT') return <MenuFill size="300" />
  if (log.agentType === 'ORDER_FIXER_AGENT') return <SettingsOutline size="300" />
  return <MegaphoneOutline size="300" />
}

function AgentTypeIcon({ type }: { type: AgentLog['agentType'] }) {
  if (type === 'MENU_AGENT') return <MenuFill size="300" />
  if (type === 'ORDER_FIXER_AGENT') return <SettingsOutline size="300" />
  return <MegaphoneOutline size="300" />
}

// ─── List item sub-row (chips below title) ────────────────────────────────────

function LogChips({ log }: { log: AgentLog }) {
  if (log.logType === 'publication' && log.channels && log.channels.length > 0) {
    return (
      <Inline space="050">
        {log.channels.map(ch => (
          <Badge key={ch} size="sm" status="neutral">{CHANNEL_LABELS[ch] ?? ch}</Badge>
        ))}
      </Inline>
    )
  }
  if (log.logType === 'report' && log.report) {
    return (
      <Badge size="sm" status={verdictBadgeStatus(log.report.verdict)}>
        {log.report.verdictLabel}
      </Badge>
    )
  }
  if (log.logType === 'optimisation' && log.permissions.length > 0) {
    return (
      <Inline space="050">
        {log.permissions.map(p => (
          <Badge key={p} size="sm" status="neutral">{PERMISSION_LABELS[p] ?? p}</Badge>
        ))}
      </Inline>
    )
  }
  return null
}

// ─── Drawer bodies ────────────────────────────────────────────────────────────

function OptimisationDrawerBody({ log }: { log: AgentLog }) {
  return (
    <Stack space="300" height="auto">
      <Stack space="050" height="auto">
        <Text size="sm" weight="medium" color="secondary">Timestamp</Text>
        <Text size="sm">{formatTimestamp(log.timestamp)}</Text>
      </Stack>

      <Stack space="050" height="auto">
        <Text size="sm" weight="medium" color="secondary">Reason</Text>
        <Text size="sm">{log.reason}</Text>
      </Stack>

      {log.permissions.length > 0 && (
        <Stack space="050" height="auto">
          <Text size="sm" weight="medium" color="secondary">Updated content</Text>
          <Inline space="050">
            {log.permissions.map(p => (
              <Badge key={p} size="sm" status="neutral">{PERMISSION_LABELS[p] ?? p}</Badge>
            ))}
          </Inline>
        </Stack>
      )}

      <Stack space="050" height="auto">
        <Text size="sm" weight="medium" color="secondary">Detail</Text>
        <Text size="sm">{log.detail}</Text>
      </Stack>

      <Stack space="050" height="auto">
        <Text size="sm" weight="medium" color="secondary">Location</Text>
        <Text size="sm">{log.location}</Text>
      </Stack>

      <Stack space="050" height="auto">
        <Text size="sm" weight="medium" color="secondary">Agent type</Text>
        <Inline space="075" alignY="center">
          <AgentTypeIcon type={log.agentType} />
          <Text size="sm">{agentTypeLabel(log.agentType)}</Text>
        </Inline>
      </Stack>
    </Stack>
  )
}

function PublicationDrawerBody({ log }: { log: AgentLog }) {
  return (
    <Stack space="300" height="auto">
      <Stack space="050" height="auto">
        <Text size="sm" weight="medium" color="secondary">Timestamp</Text>
        <Text size="sm">{formatTimestamp(log.timestamp)}</Text>
      </Stack>

      <Stack space="050" height="auto">
        <Text size="sm" weight="medium" color="secondary">Reason</Text>
        <Text size="sm">{log.reason}</Text>
      </Stack>

      {log.channels && log.channels.length > 0 && (
        <Stack space="050" height="auto">
          <Text size="sm" weight="medium" color="secondary">Published to</Text>
          <Inline space="050">
            {log.channels.map(ch => (
              <Badge key={ch} size="sm" status="neutral">{CHANNEL_LABELS[ch] ?? ch}</Badge>
            ))}
          </Inline>
        </Stack>
      )}

      <Stack space="050" height="auto">
        <Text size="sm" weight="medium" color="secondary">Location</Text>
        <Text size="sm">{log.location}</Text>
      </Stack>
    </Stack>
  )
}

export function ReportDrawerBody({ report, reason }: { report: ReportData; reason: string }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Stack space="300" height="auto">
      <Stack space="050" height="auto">
        <Text size="sm" weight="medium" color="secondary">Tracked period</Text>
        <Text size="sm">{report.trackedPeriod}</Text>
      </Stack>

      <Stack space="050" height="auto">
        <Text size="sm" weight="medium" color="secondary">Reason</Text>
        <Text size="sm">{reason}</Text>
      </Stack>

      {/* At-a-glance metrics table */}
      <Stack space="100" height="auto">
        <Text size="sm" weight="medium" color="secondary">At a glance</Text>
        <div style={{
          borderRadius: vars.border.radius['100'],
          border: `1px solid ${vars.colors.border.neutral.default.default}`,
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            padding: `${vars.spacing['100']} ${vars.spacing['150']}`,
            backgroundColor: vars.colors.surface.neutral.active,
            borderBottom: `1px solid ${vars.colors.border.neutral.default.default}`,
          }}>
            <Text size="sm" weight="medium" color="secondary">Metric</Text>
            <Text size="sm" weight="medium" color="secondary">Test</Text>
            <Text size="sm" weight="medium" color="secondary">Control</Text>
          </div>
          {report.metrics.map((m, i) => (
            <div
              key={m.label}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                padding: `${vars.spacing['100']} ${vars.spacing['150']}`,
                borderBottom: i < report.metrics.length - 1
                  ? `1px solid ${vars.colors.border.neutral.default.default}`
                  : undefined,
              }}
            >
              <Text size="sm" color="secondary">{m.label}</Text>
              <Text size="sm" weight="medium">{m.test}</Text>
              <Text size="sm">{m.control ?? '—'}</Text>
            </div>
          ))}
        </div>
      </Stack>

      {/* Key takeaways */}
      <Stack space="100" height="auto">
        <Text size="sm" weight="medium" color="secondary">Key takeaways</Text>
        <Stack space="075" height="auto">
          {report.keyTakeaways.map((t, i) => (
            <Inline key={i} space="075" alignY="top">
              <Text size="sm" color="secondary" style={{ flexShrink: 0 }}>·</Text>
              <Text size="sm">{t}</Text>
            </Inline>
          ))}
        </Stack>
      </Stack>

      {/* Show more details toggle */}
      <button
        type="button"
        onClick={() => setShowDetails(v => !v)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', gap: vars.spacing['075'],
          color: vars.colors.text.info.static, alignSelf: 'flex-start',
        }}
      >
        <Text size="sm" style={{ color: 'inherit' }}>
          {showDetails ? 'Show less' : 'Show more details'}
        </Text>
      </button>

      {showDetails && (
        <>
          {/* Overview */}
          <Stack space="050" height="auto">
            <Text size="sm" weight="medium" color="secondary">Overview</Text>
            <Text size="sm">{report.overview}</Text>
          </Stack>

          {/* What was changed */}
          <Stack space="100" height="auto">
            <Text size="sm" weight="medium" color="secondary">What was changed</Text>
            <Text size="sm">
              {report.whatWasChanged.categoriesRepositioned} categories repositioned:{' '}
              {report.whatWasChanged.categoryNames.join(', ')}.
            </Text>
            <Stack space="075" height="auto">
              <Text size="sm" color="secondary">Upsell groups introduced:</Text>
              {report.whatWasChanged.upsellGroups.map(g => (
                <Inline key={g.name} space="100" alignY="center">
                  <Text size="sm" weight="medium">{g.name}</Text>
                  <Text size="sm" color="secondary">{g.attach}</Text>
                </Inline>
              ))}
            </Stack>
          </Stack>

          {/* Category conversions */}
          <Stack space="100" height="auto">
            <Text size="sm" weight="medium" color="secondary">Category conversion highlights</Text>
            <div style={{
              borderRadius: vars.border.radius['100'],
              border: `1px solid ${vars.colors.border.neutral.default.default}`,
              overflow: 'hidden',
            }}>
              {report.categoryConversions.map((c, i) => (
                <div
                  key={c.name}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: `${vars.spacing['100']} ${vars.spacing['150']}`,
                    borderBottom: i < report.categoryConversions.length - 1
                      ? `1px solid ${vars.colors.border.neutral.default.default}`
                      : undefined,
                  }}
                >
                  <Text size="sm" color="secondary">{c.name}</Text>
                  <Text size="sm" weight="medium">{c.conversion}</Text>
                </div>
              ))}
            </div>
          </Stack>

          {/* Top sellers */}
          <Stack space="050" height="auto">
            <Text size="sm" weight="medium" color="secondary">Top sellers</Text>
            <Text size="sm">{report.topSellers.join(' → ')}</Text>
          </Stack>
        </>
      )}
    </Stack>
  )
}

// ─── Filters ──────────────────────────────────────────────────────────────────

const STATUS_OPTIONS = [
  { label: 'Success', value: 'success' },
  { label: 'Warning', value: 'warning' },
  { label: 'Info',    value: 'info'    },
]

const AGENT_TYPE_OPTIONS = [
  { label: 'Autonomous menu',    value: 'MENU_AGENT'        },
  { label: 'Autonomous support', value: 'ORDER_FIXER_AGENT'  },
  { label: 'Promotions',         value: 'PROMOTION_AGENT'    },
]

// ─── Main component ───────────────────────────────────────────────────────────

interface Props {
  logs: AgentLog[]
  showAgentColumn?: boolean
  showAgentTypeFilter?: boolean
  showPreviewColumn?: boolean
  showChips?: boolean
  showPrefix?: boolean
  compactTitle?: boolean
  periodLabel?: string
}

export function ActivityLog({ logs, showAgentColumn = false, showAgentTypeFilter = false, showChips = true, showPrefix = true, compactTitle = false, periodLabel }: Props) {
  const [search, setSearch]                   = useState('')
  const [locationFilter, setLocationFilter]   = useState<string[]>([])
  const [statusFilter, setStatusFilter]       = useState<string[]>([])
  const [agentTypeFilter, setAgentTypeFilter] = useState<string[]>([])
  const [selectedLog, setSelectedLog]         = useState<AgentLog | null>(null)

  const locationOptions = useMemo(() => {
    const unique = Array.from(new Set(logs.map(l => l.location)))
    return unique.map(loc => ({ label: loc, value: loc }))
  }, [logs])

  const specificLocationCount = useMemo(() =>
    new Set(logs.filter(l => l.location !== 'All locations').map(l => l.location)).size
  , [logs])

  const toLocationLabel = (loc: string) =>
    loc === 'All locations' && specificLocationCount > 1
      ? `${specificLocationCount} locations`
      : loc

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return logs.filter(log => {
      if (q && !log.action.toLowerCase().includes(q) &&
               !log.detail.toLowerCase().includes(q) &&
               !log.agentName.toLowerCase().includes(q)) return false
      if (locationFilter.length > 0 && !locationFilter.includes(log.location)) return false
      if (statusFilter.length > 0 && !statusFilter.includes(log.status)) return false
      if (agentTypeFilter.length > 0 && !agentTypeFilter.includes(log.agentType)) return false
      return true
    })
  }, [logs, search, locationFilter, statusFilter, agentTypeFilter])

  const filterConfigMap = useMemo(() => ({
    location: {
      label: 'Location',
      filter: (
        <Filter.Select
          id="location-filter"
          tagLabel="Location"
          applyLabel="Apply"
          multiple
          value={locationFilter}
          options={locationOptions}
          optionsEmptyLabel="No locations found"
          searchable
          searchPlaceholder="Search locations…"
          onValueApplyChange={setLocationFilter}
          onValueClear={() => setLocationFilter([])}
        />
      ),
    },
    status: {
      label: 'Status',
      filter: (
        <Filter.Select
          id="status-filter"
          tagLabel="Status"
          applyLabel="Apply"
          multiple
          value={statusFilter}
          options={STATUS_OPTIONS}
          optionsEmptyLabel="No statuses"
          onValueApplyChange={setStatusFilter}
          onValueClear={() => setStatusFilter([])}
        />
      ),
    },
    ...(showAgentTypeFilter && {
      agentType: {
        label: 'Agent type',
        filter: (
          <Filter.Select
            id="agent-type-filter"
            tagLabel="Agent type"
            applyLabel="Apply"
            multiple
            value={agentTypeFilter}
            options={AGENT_TYPE_OPTIONS}
            optionsEmptyLabel="No types"
            onValueApplyChange={setAgentTypeFilter}
            onValueClear={() => setAgentTypeFilter([])}
          />
        ),
      },
    }),
  }), [locationFilter, locationOptions, statusFilter, agentTypeFilter, showAgentTypeFilter])

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing['200'] }}>
        {/* Toolbar */}
        <Inline space="150" alignY="center">
          <div style={{ flex: 1, maxWidth: 320 }}>
            <Input.Group>
              <Input.LeftAddon style={{ paddingLeft: vars.spacing['150'], paddingRight: vars.spacing['075'], display: 'flex', alignItems: 'center', color: vars.colors.icon.neutral.default.default }}>
                <SearchOutline size="sm" />
              </Input.LeftAddon>
              <Input.Field
                placeholder="Search activity…"
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              />
            </Input.Group>
          </div>
          <Filter.Menu label="Filter" filterConfigMap={filterConfigMap} />
          {periodLabel && (
            <InputChip Icon={<CalendarOutline size="sm" />}>
              {periodLabel}
            </InputChip>
          )}
        </Inline>

        {/* List */}
        {filtered.length === 0 ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: vars.spacing['500'] }}>
            <Text color="secondary" size="sm">No activity matches your filters.</Text>
          </div>
        ) : (
          <Stack space="100">
            {filtered.map(log => (
              <List.Root
                key={log.id}
                type="card"
                onClick={() => setSelectedLog(log)}
                style={{ cursor: 'pointer' }}
              >
                {showPrefix && (
                  <List.Prefix>
                    <LogTypeIcon log={log} />
                  </List.Prefix>
                )}

                <List.Title>
                  <Stack space={compactTitle ? 'none' : '075'} height="auto">
                    <Text size="sm" weight="medium">
                      {showAgentColumn ? log.agentName : log.action}
                    </Text>
                    <Text size="sm" color="secondary">
                      {showAgentColumn
                        ? `${log.action} · ${toLocationLabel(log.location)}`
                        : toLocationLabel(log.location)}
                    </Text>
                    {showChips && <LogChips log={log} />}
                  </Stack>
                </List.Title>

                <List.Suffix alignY="center">
                  <Inline space="150" alignY="center">
                    {log.logType === 'optimisation' && (
                      <Button
                        variant="transparent"
                        size="sm"
                        Icon={<EyeOpenFill size="md" />}
                        aria-label="Preview change"
                        onClick={e => { e.stopPropagation(); setSelectedLog(log) }}
                      />
                    )}
                    <div style={{ width: 64, display: 'flex', justifyContent: 'center' }}>
                      <Badge
                        size="sm"
                        status={log.status === 'success' ? 'success' : log.status === 'warning' ? 'warning' : 'info'}
                      >
                        {log.status === 'success' ? 'Success' : log.status === 'warning' ? 'Warning' : 'Info'}
                      </Badge>
                    </div>
                    <Text size="sm" color="secondary" style={{ whiteSpace: 'nowrap' }}>
                      {formatTimestamp(log.timestamp)}
                    </Text>
                  </Inline>
                </List.Suffix>
              </List.Root>
            ))}
          </Stack>
        )}
      </div>

      {/* Detail drawer */}
      <Drawer.Root open={!!selectedLog} onOpenChange={open => { if (!open) setSelectedLog(null) }}>
        <Drawer.Content overlay style={{ width: 520 }}>
          {selectedLog && (
            <>
              <Drawer.Header>
                <Inline space="100" alignY="center">
                  <Heading level={3}>{selectedLog.action}</Heading>
                  {selectedLog.logType === 'report' && selectedLog.report ? (
                    <Badge size="sm" status={verdictBadgeStatus(selectedLog.report.verdict)}>
                      {selectedLog.report.verdictLabel}
                    </Badge>
                  ) : (
                    <Badge
                      size="sm"
                      status={selectedLog.status === 'success' ? 'success' : selectedLog.status === 'warning' ? 'warning' : 'info'}
                    >
                      {selectedLog.status === 'success' ? 'Success' : selectedLog.status === 'warning' ? 'Warning' : 'Info'}
                    </Badge>
                  )}
                </Inline>
              </Drawer.Header>

              <Drawer.Body>
                {selectedLog.logType === 'optimisation' && <OptimisationDrawerBody log={selectedLog} />}
                {selectedLog.logType === 'publication'  && <PublicationDrawerBody  log={selectedLog} />}
                {selectedLog.logType === 'report' && selectedLog.report && (
                  <ReportDrawerBody report={selectedLog.report} reason={selectedLog.reason} />
                )}
              </Drawer.Body>

              <Drawer.Footer>
                <Button status="neutral" variant="outline" onClick={() => setSelectedLog(null)}>
                  Close
                </Button>
                {selectedLog.logType === 'optimisation' && (
                  <Button status="primary" LeadingIcon={<EyeOpenFill />}>Preview</Button>
                )}
                {selectedLog.logType === 'report' && (
                  <Button status="primary">Export</Button>
                )}
              </Drawer.Footer>
            </>
          )}
        </Drawer.Content>
      </Drawer.Root>
    </>
  )
}
