import { useState } from 'react'
import {
  Badge,
  Button,
  ChevronDirectionDown,
  ChevronDirectionUp,
  Drawer,
  GraphBarOutline,
  Heading,
  Inline,
  Stack,
  Text,
  vars,
} from '@deliverect/galaxy-react'
import { ReportDrawerBody } from './ActivityLog'
import { type AgentLog } from '../data/mockLogs'

// ─── Types ─────────────────────────────────────────────────────────────────────

interface CycleGroup {
  id: string
  location: string
  date: string
  events: AgentLog[]
  report: AgentLog | null
}

// ─── Helpers ───────────────────────────────────────────────────────────────────

function verdictBadgeStatus(verdict: 'inconclusive' | 'positive' | 'negative') {
  if (verdict === 'positive') return 'success' as const
  if (verdict === 'negative') return 'critical' as const
  return 'neutral' as const
}

function groupByCycle(logs: AgentLog[]): CycleGroup[] {
  const sorted = [...logs].sort((a, b) =>
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )

  const groups = new Map<string, CycleGroup>()

  for (const log of sorted) {
    if (log.logType === 'optimisation') {
      const date = log.timestamp.slice(0, 10)
      const key = `${log.location}|${date}`
      if (!groups.has(key)) {
        groups.set(key, { id: `cycle-${key}`, location: log.location, date, events: [], report: null })
      }
      groups.get(key)!.events.push(log)
    }
  }

  const groupArray = Array.from(groups.values())

  for (const log of sorted) {
    if (log.logType === 'publication') {
      const date = log.timestamp.slice(0, 10)
      const key = `${log.location}|${date}`
      const group = groups.get(key) ?? groupArray.find(g => g.date === date) ?? groupArray[0]
      if (group) group.events.push(log)
    }
    if (log.logType === 'report') {
      const target = groupArray.find(g => g.location === log.location && !g.report)
        ?? groupArray.find(g => !g.report)
      if (target) {
        target.report = log
        target.events.push(log)
      }
    }
  }

  groupArray.forEach(g => {
    g.events.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
  })

  return groupArray
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

function formatEventTime(timestamp: string, cycleDate: string) {
  const d = new Date(timestamp)
  const eventDate = timestamp.slice(0, 10)
  const time = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  if (eventDate === cycleDate) return time
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) + ', ' + time
}

// ─── Status dot ────────────────────────────────────────────────────────────────

const STATUS_COLORS: Record<string, string> = {
  success: '#16a34a',
  info:    '#2563eb',
  warning: '#d97706',
}

function StatusDot({ status }: { status: 'success' | 'info' | 'warning' }) {
  return (
    <div style={{
      width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
      backgroundColor: STATUS_COLORS[status] ?? STATUS_COLORS.info,
      marginTop: 1,
    }} />
  )
}

// ─── Cycle group row ────────────────────────────────────────────────────────────

function CycleGroupRow({
  group,
  expanded,
  onToggle,
  onOpenReport,
}: {
  group: CycleGroup
  expanded: boolean
  onToggle: () => void
  onOpenReport: (log: AgentLog) => void
}) {
  const verdict = group.report?.report
  const totalEvents = group.events.length

  return (
    <div style={{
      border: `1px solid ${vars.colors.border.neutral.default.default}`,
      borderRadius: vars.border.radius['150'],
      overflow: 'hidden',
    }}>
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div
        onClick={onToggle}
        style={{
          display: 'flex', alignItems: 'center', gap: vars.spacing['100'],
          padding: `${vars.spacing['150']} ${vars.spacing['200']}`,
          cursor: 'pointer',
        }}
      >
        <div style={{ color: vars.colors.icon.neutral.default.default, flexShrink: 0 }}>
          {expanded ? <ChevronDirectionUp size="sm" /> : <ChevronDirectionDown size="sm" />}
        </div>

        <Text weight="medium" size="sm">{group.location}</Text>

        <Text size="sm" color="secondary">{formatDate(group.date)}</Text>

        {verdict && (
          <Badge size="sm" status={verdictBadgeStatus(verdict.verdict)}>
            {verdict.verdictLabel}
          </Badge>
        )}

        <div style={{ flex: 1 }} />

        <Text size="sm" color="secondary">
          {totalEvents} {totalEvents === 1 ? 'event' : 'events'}
        </Text>
      </div>

      {/* ── Event list ─────────────────────────────────────────────── */}
      {expanded && (
        <div style={{
          borderTop: `1px solid ${vars.colors.border.neutral.default.default}`,
          padding: `${vars.spacing['100']} ${vars.spacing['150']}`,
          display: 'flex', flexDirection: 'column', gap: vars.spacing['050'],
        }}>
          {group.events.map(event => (
            <div
              key={event.id}
              style={{
                display: 'flex', alignItems: 'center', gap: vars.spacing['150'],
                padding: `${vars.spacing['100']} ${vars.spacing['150']}`,
                borderRadius: vars.border.radius['100'],
                backgroundColor: vars.colors.background.default,
              }}
            >
              <StatusDot status={event.status} />

              <Stack space="0" height="auto" style={{ flex: 1, minWidth: 0 }}>
                <Text size="sm" weight="medium">{event.action}</Text>
                <Text size="sm" color="secondary" style={{
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {event.detail}
                </Text>
              </Stack>

              <Text size="sm" color="secondary" style={{ flexShrink: 0, minWidth: 40, textAlign: 'right' }}>
                {formatEventTime(event.timestamp, group.date)}
              </Text>

              {event.logType === 'report' && event.report && (
                <Button
                  size="sm"
                  variant="plain"
                  status="neutral"
                  LeadingIcon={<GraphBarOutline />}
                  onClick={e => { e.stopPropagation(); onOpenReport(event) }}
                >
                  View report
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Main export ───────────────────────────────────────────────────────────────

export function CycleLog({ logs }: { logs: AgentLog[] }) {
  const groups = groupByCycle(logs)

  const [expandedIds, setExpandedIds] = useState<string[]>(
    groups.length > 0 ? [groups[0].id] : []
  )
  const [reportLog, setReportLog] = useState<AgentLog | null>(null)

  const toggleGroup = (id: string) =>
    setExpandedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )

  if (groups.length === 0) {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: vars.spacing['500'],
        gap: vars.spacing['150'],
        border: `1px dashed ${vars.colors.border.neutral.default.default}`,
        borderRadius: vars.border.radius['150'],
      }}>
        <Text color="secondary" size="sm">No activity yet.</Text>
      </div>
    )
  }

  return (
    <>
      <Stack space="100" height="auto">
        {groups.map(group => (
          <CycleGroupRow
            key={group.id}
            group={group}
            expanded={expandedIds.includes(group.id)}
            onToggle={() => toggleGroup(group.id)}
            onOpenReport={log => setReportLog(log)}
          />
        ))}
      </Stack>

      {reportLog?.report && (
        <Drawer.Root open onOpenChange={open => { if (!open) setReportLog(null) }}>
          <Drawer.Content overlay style={{ width: 520 }}>
            <Drawer.Header>
              <Inline space="100" alignY="center">
                <Heading level={3}>Performance report</Heading>
                <Badge size="sm" status={verdictBadgeStatus(reportLog.report.verdict)}>
                  {reportLog.report.verdictLabel}
                </Badge>
              </Inline>
            </Drawer.Header>
            <Drawer.Body>
              <ReportDrawerBody report={reportLog.report} reason={reportLog.reason} />
            </Drawer.Body>
            <Drawer.Footer>
              <Button status="neutral" variant="outline" onClick={() => setReportLog(null)}>
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
