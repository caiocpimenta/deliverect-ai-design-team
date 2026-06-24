import { useState, useMemo, useRef, useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Badge,
  Button,
  CalendarOutline,
  Link,
  CategoryOutline,
  Drawer,
  EyeOpenFill,
  Filter,
  FlagOutline,
  GraphBarFill,
  Heading,
  Input,
  InputChip,
  Inline,
  LabelOutline,
  List,
  MegaphoneOutline,
  MenuFill,
  Pagination,
  PinOutline,
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
  const diffMs = Date.now() - d.getTime()
  const diffMin = Math.floor(diffMs / 60000)
  const diffH = Math.floor(diffMin / 60)
  if (diffMin < 1)   return 'just now'
  if (diffMin < 60)  return `${diffMin} min${diffMin > 1 ? 's' : ''} ago`
  if (diffH   < 24)  return `${diffH} h ago`
  return d.toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

function statusBadgeLabel(log: AgentLog) {
  if (log.status === 'success') return 'Success'
  if (log.status === 'warning') return 'Warning'
  // Report log types surface as a "Report" badge instead of "Info"
  return log.logType === 'report' ? 'Report' : 'Info'
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

// ─── Permission reasoning ────────────────────────────────────────────────────

const FAILURE_REASON_LABELS: Record<string, string> = {
  PRODUCT_NOT_FOUND: 'Product not found',
  INVALID_PLU:       'Invalid PLU',
  ITEM_UNAVAILABLE:  'Item unavailable',
  MENU_SYNC_ERROR:   'Menu sync error',
  STALE_DATA:        'Stale data',
}

const ACTION_DESCRIPTIONS: Record<string, string> = {
  'New optimization':                  'An automated menu optimization where the AI agent applies changes across one or more permissions to improve performance.',
  'Optimization check':                'A scheduled review where the AI agent evaluates menu performance. No changes are applied when the menu is already performing within target.',
  'Menu published':                    'A menu update pushed live to one or more delivery channels.',
  'Publish menus':                     'A menu update pushed live to one or more delivery channels.',
  'Optimization performance report':   'A performance summary comparing the optimized menu against a control group over a tracked period.',
  'Item sync':                         'A re-sync of menu items between the POS system and connected delivery channels to resolve catalogue mismatches.',
  'Item snooze':                       'Temporary removal of unavailable items from active channels to prevent failed orders.',
}

const ALL_MENU_PERMISSIONS = ['position', 'upsells', 'meal_deals', 'content', 'best_sellers']

const PERMISSION_DISPLAY_LABELS: Record<string, string> = {
  position:     'Items positioning',
  upsells:      'Upsell groups',
  meal_deals:   'Meal deals',
  content:      'Content descriptions',
  best_sellers: 'Best sellers category',
}

const PERMISSION_REASONING: Record<string, { applied: string; skipped: string }> = {
  position: {
    applied: 'Items in the top 3 positions drive 67% of category revenue. High-margin SKUs were repositioned to capture this opportunity and improve visibility during the peak ordering window.',
    skipped: 'Current item positioning is already optimised — top-performing items are in the highest-visibility slots. No repositioning was needed.',
  },
  upsells: {
    applied: 'Upsell groups were reordered to surface the highest-converting add-ons earlier in the order flow. Drinks and sides are now promoted alongside the most popular mains.',
    skipped: 'Upsell groups are performing above target. Attach rates for the current configuration are strong — no changes were needed.',
  },
  meal_deals: {
    applied: 'The meal deal bundle was restructured after attach rate dropped below target. The new bundle leads with a higher-margin item and better matches observed order patterns.',
    skipped: 'Meal deal performance is within the expected range. The current bundle structure remains effective and attach rates are healthy.',
  },
  content: {
    applied: 'Item descriptions were refreshed to highlight key ingredients and portion sizes, improving click-through on high-margin items during the peak window.',
    skipped: 'Item descriptions are clear, accurate, and performing well. No content updates were required at this time.',
  },
  best_sellers: {
    applied: 'The best sellers row was updated to reflect current top performers after a shift in order mix over the past 7 days.',
    skipped: 'Your menu already has a Bestsellers section in the right position — no changes were needed.',
  },
}

function PermissionReasoningItem({ permKey, applied }: { permKey: string; applied: boolean }) {
  const [expanded, setExpanded] = useState(false)
  const [overflows, setOverflows] = useState<boolean | null>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const cardBg = vars.colors.surface.neutral.static.default
  const label = PERMISSION_DISPLAY_LABELS[permKey] ?? permKey
  const reasoning = applied
    ? (PERMISSION_REASONING[permKey]?.applied ?? 'This permission was applied.')
    : (PERMISSION_REASONING[permKey]?.skipped ?? 'No changes were needed.')

  useLayoutEffect(() => {
    const el = textRef.current
    if (!el) return
    setOverflows(el.scrollHeight > 40)
  }, [reasoning])

  const shouldTruncate = overflows === true && !expanded

  return (
    <div style={{
      backgroundColor: cardBg,
      border: `1px solid ${vars.colors.border.neutral.default.default}`,
      borderRadius: vars.border.radius['100'],
      padding: `${vars.spacing['150']} ${vars.spacing['200']}`,
      display: 'flex',
      flexDirection: 'column',
      gap: vars.spacing['100'],
    }}>
      <Inline space="100" alignY="center">
        <Text size="sm" weight="medium" style={{ flex: 1 }}>{label}</Text>
        <Badge size="sm" status={applied ? 'success' : 'neutral'}>
          {applied ? 'Applied' : 'No changes'}
        </Badge>
      </Inline>

      <div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing['025'] }}>
        <div style={{ position: 'relative' }}>
          <div
            ref={textRef}
            style={{ overflow: 'hidden', maxHeight: shouldTruncate ? '40px' : 'none' }}
          >
            <Text size="sm" color="secondary">{reasoning}</Text>
          </div>
          {shouldTruncate && (
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: 24,
              background: `linear-gradient(to bottom, transparent, ${cardBg})`,
              pointerEvents: 'none',
            }} />
          )}
        </div>
        {overflows && (
          <button
            type="button"
            onClick={() => setExpanded(e => !e)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, alignSelf: 'flex-start' }}
          >
            <Text size="sm" color="secondary">{expanded ? 'Show less' : 'Show more'}</Text>
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Drawer bodies ────────────────────────────────────────────────────────────

function AiReasoningBlock({ detail, reason }: { detail: string; reason: string }) {
  const [expanded, setExpanded] = useState(false)
  const [overflows, setOverflows] = useState<boolean | null>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const cardBg = vars.colors.surface.neutral.static.default

  useLayoutEffect(() => {
    const el = textRef.current
    if (!el) return
    setOverflows(el.scrollHeight > 40)
  }, [detail])

  const shouldTruncate = overflows === true && !expanded

  return (
    <div style={{
      backgroundColor: cardBg,
      border: `1px solid ${vars.colors.border.neutral.default.default}`,
      borderRadius: vars.border.radius['100'],
      padding: `${vars.spacing['150']} ${vars.spacing['200']}`,
      display: 'flex',
      flexDirection: 'column',
      gap: vars.spacing['100'],
    }}>
      <Text size="sm" weight="medium" color="secondary">AI reasoning</Text>

      <div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing['025'] }}>
        <div style={{ position: 'relative' }}>
          <div
            ref={textRef}
            style={{ overflow: 'hidden', maxHeight: shouldTruncate ? '40px' : 'none' }}
          >
            <Text size="sm">{detail}</Text>
            {expanded && (
              <Text size="sm" style={{ display: 'block', marginTop: vars.spacing['100'] }}>
                {reason}
              </Text>
            )}
          </div>
          {shouldTruncate && (
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: 24,
              background: `linear-gradient(to bottom, transparent, ${cardBg})`,
              pointerEvents: 'none',
            }} />
          )}
        </div>

        {overflows && (
          <button
            type="button"
            onClick={() => setExpanded(e => !e)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, alignSelf: 'flex-start' }}
          >
            <Text size="sm" color="secondary">{expanded ? 'Show less' : 'Show more'}</Text>
          </button>
        )}
      </div>
    </div>
  )
}

function SupportDrawerBody({ log }: { log: AgentLog }) {
  const isAutomated = log.actor === 'AI agent'
  return (
    <Stack space="300" height="auto">
      {isAutomated && log.orderId && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: vars.spacing['300'] }}>
          <Stack space="050" height="auto">
            <Text size="sm" weight="medium" color="secondary">Order with issue</Text>
            <Text size="sm">{log.orderId}</Text>
          </Stack>
          {log.failureReason && (
            <Stack space="050" height="auto">
              <Text size="sm" weight="medium" color="secondary">Failure reason</Text>
              <Text size="sm">{FAILURE_REASON_LABELS[log.failureReason] ?? log.failureReason}</Text>
            </Stack>
          )}
        </div>
      )}

      {log.action === 'Item snooze' && log.itemPlu && (
        <Stack space="050" height="auto">
          <Text size="sm" weight="medium" color="secondary">Item PLU</Text>
          <Text size="sm">{log.itemPlu}</Text>
        </Stack>
      )}

      {isAutomated && log.escalationAttempts && log.escalationAttempts.length > 0 && (
        <Stack space="075" height="auto">
          <Text size="sm" weight="medium" color="secondary">Previous attempts</Text>
          {log.escalationAttempts.map(attempt => (
            <Inline key={attempt} space="075" alignY="center">
              <Text size="sm" color="secondary">·</Text>
              <Text size="sm">{attempt} was not enough</Text>
            </Inline>
          ))}
        </Stack>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: log.channels && log.channels.length > 0 ? '1fr 1fr 1fr' : '1fr 1fr',
        gap: vars.spacing['300'],
      }}>
        <Stack space="050" height="auto">
          <Text size="sm" weight="medium" color="secondary">Timestamp</Text>
          <Text size="sm">{formatTimestamp(log.timestamp)}</Text>
        </Stack>
        <Stack space="050" height="auto">
          <Text size="sm" weight="medium" color="secondary">Location</Text>
          <Text size="sm">{log.location}</Text>
        </Stack>
        {log.channels && log.channels.length > 0 && (
          <Stack space="050" height="auto">
            <Text size="sm" weight="medium" color="secondary">Channel affected</Text>
            <Inline space="050">
              {log.channels.map(ch => (
                <Badge key={ch} size="sm" status="neutral">{CHANNEL_LABELS[ch] ?? ch}</Badge>
              ))}
            </Inline>
          </Stack>
        )}
      </div>

      <Stack space="050" height="auto">
        <Text size="sm" weight="medium" color="secondary">Operation report</Text>
        <Link as="button" size="sm">Open operation report</Link>
      </Stack>

      <AiReasoningBlock detail={log.detail} reason={log.reason} />
    </Stack>
  )
}

function OptimisationDrawerBody({ log, cycle }: { log: AgentLog; cycle?: number }) {
  const navigate = useNavigate()
  return (
    <Stack space="300" height="auto">
      <div style={{
        display: 'grid',
        gridTemplateColumns: cycle && log.location !== 'All locations' ? '1fr 1fr 1fr' : '1fr 1fr',
        gap: vars.spacing['300'],
      }}>
        {cycle && log.location !== 'All locations' && (
          <Stack space="050" height="auto">
            <Text size="sm" weight="medium" color="secondary">Optimization preview</Text>
            <Link
              as="button"
              size="sm"
              onClick={() => navigate(`/agents/${log.agentId}/menu-preview`, { state: { locationName: log.location, cycleNumber: cycle } })}
            >
              Optimization {cycle}
            </Link>
          </Stack>
        )}
        <Stack space="050" height="auto">
          <Text size="sm" weight="medium" color="secondary">Timestamp</Text>
          <Text size="sm">{formatTimestamp(log.timestamp)}</Text>
        </Stack>
        <Stack space="050" height="auto">
          <Text size="sm" weight="medium" color="secondary">Location</Text>
          <Text size="sm">{log.location}</Text>
        </Stack>
      </div>

      <AiReasoningBlock detail={log.detail} reason={log.reason} />

      {log.agentType === 'MENU_AGENT' ? (
        <Stack space="100" height="auto">
          <Text size="sm" weight="medium" color="secondary">Proposed optimizations</Text>
          {ALL_MENU_PERMISSIONS.map(permKey => (
            <PermissionReasoningItem
              key={permKey}
              permKey={permKey}
              applied={log.permissions.includes(permKey)}
            />
          ))}
        </Stack>
      ) : log.permissions.length > 0 && (
        <Stack space="050" height="auto">
          <Text size="sm" weight="medium" color="secondary">Permissions</Text>
          <Inline space="050">
            {log.permissions.map(p => (
              <Badge key={p} size="sm" status="neutral">{PERMISSION_LABELS[p] ?? p}</Badge>
            ))}
          </Inline>
        </Stack>
      )}

      {/* Agent type — hidden, kept for future use */}
    </Stack>
  )
}

function PublicationDrawerBody({ log }: { log: AgentLog }) {
  return (
    <Stack space="300" height="auto">
      <AiReasoningBlock detail={log.detail} reason={log.reason} />

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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: vars.spacing['300'] }}>
        <Stack space="050" height="auto">
          <Text size="sm" weight="medium" color="secondary">Timestamp</Text>
          <Text size="sm">{formatTimestamp(log.timestamp)}</Text>
        </Stack>
        <Stack space="050" height="auto">
          <Text size="sm" weight="medium" color="secondary">Location</Text>
          <Text size="sm">{log.location}</Text>
        </Stack>
      </div>
    </Stack>
  )
}

export function ReportDrawerBody({ report, reason, detail }: { report: ReportData; reason: string; detail: string }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Stack space="300" height="auto">
      <AiReasoningBlock detail={detail} reason={reason} />

      <Stack space="050" height="auto">
        <Text size="sm" weight="medium" color="secondary">Tracked period</Text>
        <Text size="sm">{report.trackedPeriod}</Text>
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
  stickyToolbar?: boolean
  initialLocationFilter?: string[]
}

export function ActivityLog({ logs, showAgentColumn = false, showAgentTypeFilter = false, showChips = true, showPrefix = true, compactTitle = false, periodLabel, stickyToolbar = false, initialLocationFilter = [] }: Props) {
  const navigate = useNavigate()
  const [search, setSearch]                   = useState('')
  const [locationFilter, setLocationFilter]   = useState<string[]>(initialLocationFilter)
  const [statusFilter, setStatusFilter]       = useState<string[]>([])
  const [agentTypeFilter, setAgentTypeFilter] = useState<string[]>([])
  const [activityTypeFilter, setActivityTypeFilter] = useState<string[]>([])
  const [dateRange, setDateRange]             = useState<{ from: Date; to: Date } | null>(null)
  const [selectedLog, setSelectedLog]         = useState<AgentLog | null>(null)
  const [page, setPage]                       = useState(1)
  const PAGE_SIZE = 25

  // Track scrolling of the nearest scroll container so the sticky toolbar
  // only shows its bottom shadow once the user has scrolled (overflow cue).
  const toolbarRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    if (!stickyToolbar) return
    let node: HTMLElement | null = toolbarRef.current?.parentElement ?? null
    while (node) {
      const oy = getComputedStyle(node).overflowY
      if ((oy === 'auto' || oy === 'scroll') && node.scrollHeight > node.clientHeight) break
      node = node.parentElement
    }
    const scroller = node
    if (!scroller) return
    const onScroll = () => setScrolled(scroller.scrollTop > 0)
    onScroll()
    scroller.addEventListener('scroll', onScroll, { passive: true })
    return () => scroller.removeEventListener('scroll', onScroll)
  }, [stickyToolbar])

  // Cycle reference per Menu-agent log, counted per location in chronological
  // order (oldest optimisation = Cycle 1) so it's stable across filters/sort.
  //  - An optimisation IS a cycle → it shows its own cycle number.
  //  - A publication belongs to the cycle it published → the current cycle.
  //  - A report is ABOUT a cycle → it references the most recent optimisation
  //    cycle at that location at or before the report (the previous cycle's
  //    performance, whether the report was auto-generated or user-requested).
  const cycleByLogId = useMemo(() => {
    const map = new Map<string, number>()
    const byLocation = new Map<string, AgentLog[]>()
    logs.forEach(l => {
      if (
        l.agentType === 'MENU_AGENT' &&
        (l.logType === 'optimisation' || l.logType === 'publication' || l.logType === 'report')
      ) {
        const arr = byLocation.get(l.location) ?? []
        arr.push(l)
        byLocation.set(l.location, arr)
      }
    })
    byLocation.forEach(arr => {
      let cycle = 0
      arr
        .slice()
        .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
        .forEach(l => {
          if (l.logType === 'optimisation') {
            cycle += 1
            map.set(l.id, cycle)
          } else if (cycle > 0) {
            // publication/report reference the latest completed cycle so far
            map.set(l.id, cycle)
          }
        })
    })
    return map
  }, [logs])

  const locationOptions = useMemo(() => {
    const unique = Array.from(new Set(logs.map(l => l.location)))
    return unique.map(loc => ({ label: loc, value: loc }))
  }, [logs])

  const activityTypeOptions = useMemo(() => {
    const unique = Array.from(new Set(logs.map(l => l.action))).sort((a, b) => a.localeCompare(b))
    return unique.map(action => ({ label: action, value: action }))
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
      if (activityTypeFilter.length > 0 && !activityTypeFilter.includes(log.action)) return false
      if (dateRange) {
        const t = new Date(log.timestamp).getTime()
        if (t < dateRange.from.getTime() || t > dateRange.to.getTime()) return false
      }
      return true
    }).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  }, [logs, search, locationFilter, statusFilter, agentTypeFilter, activityTypeFilter, dateRange])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const paged = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  const datePresets = useMemo(() => {
    const now = new Date()
    const daysAgo = (n: number) => {
      const d = new Date(now)
      d.setDate(d.getDate() - n)
      d.setHours(0, 0, 0, 0)
      return d
    }
    return [
      { label: 'Last 7 days',  from: daysAgo(7),  to: now },
      { label: 'Last 30 days', from: daysAgo(30), to: now },
      { label: 'Last 90 days', from: daysAgo(90), to: now },
    ]
  }, [])

  // Tag label that reflects the current selection: the single option's label
  // when one is selected, "N <noun>" when several, or the fallback when none.
  const optLabel = (options: { label: string; value: string }[], value: string) =>
    options.find(o => o.value === value)?.label ?? value
  const selectionTag = (
    selected: string[],
    options: { label: string; value: string }[],
    fallback: string,
    plural: string,
  ) =>
    selected.length === 0
      ? fallback
      : selected.length === 1
        ? optLabel(options, selected[0])
        : `${selected.length} ${plural}`

  const dateTagLabel = (() => {
    if (!dateRange) return 'Date'
    const fmt = (d: Date) => d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })
    const from = fmt(dateRange.from)
    const to = fmt(dateRange.to)
    return from === to ? from : `${from} – ${to}`
  })()

  const filterConfigMap = useMemo(() => ({
    date: {
      label: 'Date',
      filter: (
        <Filter.CalendarWithPresets
          id="date"
          icon={<CalendarOutline size="sm" />}
          tagLabel={dateTagLabel}
          applyLabel="Apply"
          applyMode="deferred"
          customOptionLabel="Custom range"
          presets={datePresets}
          mode="range"
          selected={dateRange ?? undefined}
          onValueApplyChange={(from, to) => { setDateRange({ from, to }); setPage(1) }}
          onValueClear={() => { setDateRange(null); setPage(1) }}
        />
      ),
    },
    activityType: {
      label: 'Activity type',
      filter: (
        <Filter.Select
          id="activityType"
          icon={<CategoryOutline size="sm" />}
          tagLabel={selectionTag(activityTypeFilter, activityTypeOptions, 'All activities', 'activity types')}
          applyLabel="Apply"
          multiple
          value={activityTypeFilter}
          options={activityTypeOptions}
          optionsEmptyLabel="No activity types"
          onValueApplyChange={(v) => { setActivityTypeFilter(v); setPage(1) }}
          onValueClear={() => { setActivityTypeFilter([]); setPage(1) }}
        />
      ),
    },
    location: {
      label: 'Location',
      filter: (
        <Filter.Select
          id="location"
          icon={<PinOutline size="sm" />}
          tagLabel={selectionTag(locationFilter, locationOptions, 'All locations', 'locations')}
          applyLabel="Apply"
          multiple
          value={locationFilter}
          options={locationOptions}
          optionsEmptyLabel="No locations found"
          searchable
          searchPlaceholder="Search locations…"
          onValueApplyChange={(v) => { setLocationFilter(v); setPage(1) }}
          onValueClear={() => { setLocationFilter([]); setPage(1) }}
        />
      ),
    },
    status: {
      label: 'Status',
      filter: (
        <Filter.Select
          id="status"
          icon={<FlagOutline size="sm" />}
          tagLabel={selectionTag(statusFilter, STATUS_OPTIONS, 'Status', 'statuses')}
          applyLabel="Apply"
          multiple
          value={statusFilter}
          options={STATUS_OPTIONS}
          optionsEmptyLabel="No statuses"
          onValueApplyChange={(v) => { setStatusFilter(v); setPage(1) }}
          onValueClear={() => { setStatusFilter([]); setPage(1) }}
        />
      ),
    },
    ...(showAgentTypeFilter && {
      agentType: {
        label: 'Agent type',
        filter: (
          <Filter.Select
            id="agentType"
            icon={<LabelOutline size="sm" />}
            tagLabel={selectionTag(agentTypeFilter, AGENT_TYPE_OPTIONS, 'Agent type', 'agent types')}
            applyLabel="Apply"
            multiple
            value={agentTypeFilter}
            options={AGENT_TYPE_OPTIONS}
            optionsEmptyLabel="No types"
            onValueApplyChange={(v) => { setAgentTypeFilter(v); setPage(1) }}
            onValueClear={() => { setAgentTypeFilter([]); setPage(1) }}
          />
        ),
      },
    }),
  }), [locationFilter, locationOptions, statusFilter, agentTypeFilter, showAgentTypeFilter, activityTypeFilter, activityTypeOptions, dateRange, datePresets, dateTagLabel])

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: stickyToolbar ? 0 : vars.spacing['200'] }}>
        {/* Toolbar — optionally pinned to the top of the scroll area */}
        <div
          ref={toolbarRef}
          style={
            stickyToolbar
              ? {
                  position: 'sticky',
                  // top offset cancels Page.Body's top padding (spacing 250) so the bar
                  // pins flush to the very top of the scroll area and covers that padding
                  // band — otherwise list rows show through the gap above the bar.
                  top: `calc(-1 * ${vars.spacing['250']})`,
                  zIndex: 2,
                  backgroundColor: vars.colors.background.default,
                  marginTop: `calc(-1 * ${vars.spacing['250']})`,
                  paddingTop: vars.spacing['150'],
                  paddingBottom: vars.spacing['150'],
                  marginInline: `calc(-1 * ${vars.spacing['300']})`,
                  paddingInline: vars.spacing['300'],
                  // soft shadow on the bottom edge — only once scrolled — so it's
                  // clear list rows scroll underneath the pinned bar (overflow cue)
                  boxShadow: scrolled ? '0 6px 6px -6px rgba(16, 24, 40, 0.18)' : 'none',
                  transition: 'box-shadow 0.15s ease',
                }
              : undefined
          }
        >
          <Inline space="150" alignY="center">
            <div style={{ flex: 1, maxWidth: 320 }}>
              <Input.Group>
                <Input.LeftAddon style={{ paddingLeft: vars.spacing['150'], paddingRight: vars.spacing['075'], display: 'flex', alignItems: 'center', color: vars.colors.icon.neutral.default.default }}>
                  <SearchOutline size="sm" />
                </Input.LeftAddon>
                <Input.Field
                  placeholder="Search activity…"
                  value={search}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value); setPage(1) }}
                />
              </Input.Group>
            </div>
            <Filter.Menu
              label="Filter"
              filterConfigMap={filterConfigMap}
              initialFilterKeys={['location', 'activityType']}
            />
            {periodLabel && (
              <InputChip Icon={<CalendarOutline size="sm" />}>
                {periodLabel}
              </InputChip>
            )}
          </Inline>
        </div>

        {/* List */}
        {filtered.length === 0 ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: vars.spacing['500'] }}>
            <Text color="secondary" size="sm">No activity matches your filters.</Text>
          </div>
        ) : (
          <Stack space="100">
            {paged.map(log => (
              <List.Root
                key={log.id}
                type="card"
                onClick={() => setSelectedLog(log)}
                style={{ cursor: 'pointer', paddingBlock: vars.spacing['200'], paddingInline: vars.spacing['200'] }}
              >
                {showPrefix && (
                  <List.Prefix>
                    <LogTypeIcon log={log} />
                  </List.Prefix>
                )}

                <List.Title>
                  <Stack space={compactTitle ? 'none' : '075'} height="auto">
                    <Text size="sm" weight="medium" style={compactTitle ? { lineHeight: 1.3 } : undefined}>
                      {showAgentColumn ? log.agentName : log.action}
                    </Text>
                    <Text size="sm" color="secondary" style={compactTitle ? { lineHeight: 1.3 } : undefined}>
                      {(() => {
                        const locationLabel = toLocationLabel(log.location)
                        const cycle = cycleByLogId.get(log.id)
                        if (cycle && log.location !== 'All locations') {
                          return (
                            <span>
                              {showAgentColumn && `${log.action} · `}
                              <Link
                                as="button"
                                size="sm"
                                onClick={(e: React.MouseEvent) => { e.stopPropagation(); navigate(`/agents/${log.agentId}/menu-preview`, { state: { locationName: log.location, cycleNumber: cycle } }) }}
                              >
                                Optimization {cycle}
                              </Link>
                              {' · '}{locationLabel}
                            </span>
                          )
                        }
                        return showAgentColumn
                          ? `${log.action} · ${locationLabel}`
                          : locationLabel
                      })()}
                    </Text>
                    {showChips && <LogChips log={log} />}
                  </Stack>
                </List.Title>

                <List.Suffix alignY="center">
                  <Inline space="150" alignY="center">
                    {/* Status badge — hidden, kept for future use */}
                    <div style={{ display: 'none' }}>
                      <Badge
                        size="sm"
                        status={log.status === 'success' ? 'success' : log.status === 'warning' ? 'warning' : 'info'}
                      >
                        {statusBadgeLabel(log)}
                      </Badge>
                    </div>
                    <div style={{ display: 'none', justifyContent: 'flex-end', flexShrink: 0 }}>
                      <Badge size="sm" status="neutral">{log.actor}</Badge>
                    </div>
                    <div style={{ width: 150, display: 'flex', justifyContent: 'flex-end', flexShrink: 0 }}>
                      <Text size="sm" color="secondary" style={{ whiteSpace: 'nowrap' }}>
                        {formatTimestamp(log.timestamp)}
                      </Text>
                    </div>
                  </Inline>
                </List.Suffix>
              </List.Root>
            ))}
          </Stack>
        )}

        {filtered.length > 0 && (
          <Inline
            alignX="right"
            width="full"
            style={stickyToolbar ? { paddingTop: vars.spacing['200'] } : undefined}
          >
            <Pagination
              total={filtered.length}
              page={safePage}
              pageSize={PAGE_SIZE}
              subject="events"
              onPageChange={setPage}
            />
          </Inline>
        )}
      </div>

      {/* Detail drawer */}
      <Drawer.Root open={!!selectedLog} onOpenChange={open => { if (!open) setSelectedLog(null) }}>
        <Drawer.Content overlay style={{ width: 520 }}>
          {selectedLog && (
            <>
              <Drawer.Header alignY="top">
                <Stack space="050" height="auto">
                  <Inline space="100" alignY="center">
                    <Heading level={3}>{selectedLog.action}</Heading>
                    {selectedLog.logType === 'report' && selectedLog.report ? (
                      <Badge size="sm" status={verdictBadgeStatus(selectedLog.report.verdict)}>
                        {selectedLog.report.verdictLabel}
                      </Badge>
                    ) : (
                      <span style={{ display: 'none' }}>
                        <Badge
                          size="sm"
                          status={selectedLog.status === 'success' ? 'success' : selectedLog.status === 'warning' ? 'warning' : 'info'}
                        >
                          {statusBadgeLabel(selectedLog)}
                        </Badge>
                      </span>
                    )}
                  </Inline>
                  {ACTION_DESCRIPTIONS[selectedLog.action] && (
                    <Text size="sm" color="secondary">{ACTION_DESCRIPTIONS[selectedLog.action]}</Text>
                  )}
                </Stack>
              </Drawer.Header>

              <Drawer.Body>
                {selectedLog.agentType === 'ORDER_FIXER_AGENT'
                  ? <SupportDrawerBody log={selectedLog} />
                  : selectedLog.logType === 'optimisation'
                    ? <OptimisationDrawerBody log={selectedLog} cycle={cycleByLogId.get(selectedLog.id)} />
                    : selectedLog.logType === 'publication'
                      ? <PublicationDrawerBody log={selectedLog} />
                      : selectedLog.logType === 'report' && selectedLog.report
                        ? <ReportDrawerBody report={selectedLog.report} reason={selectedLog.reason} detail={selectedLog.detail} />
                        : null
                }
              </Drawer.Body>

              {/* Drawer.Footer with Close/Preview/Export buttons — hidden, kept for future use */}
            </>
          )}
        </Drawer.Content>
      </Drawer.Root>
    </>
  )
}
