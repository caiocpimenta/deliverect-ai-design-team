import { useNavigate } from 'react-router-dom'
import {
  Badge,
  Button,
  Inline,
  MegaphoneOutline,
  PageHeader,
  MenuFill,
  SettingsOutline,
  SparklesOutline,
  Stack,
  Text,
  vars,
} from '@deliverect/galaxy-react'
import { Page } from '../components/Page'
import { useAgents } from '../context/AgentsContext'
import { MOCK_LOGS, type AgentLog } from '../data/mockLogs'
import { type Agent } from '../data/mockAgents'

// ─── Per-agent mock metrics ───────────────────────────────────────────────────

const AGENT_META: Record<string, { count: string; pct: number }> = {
  'agent-1': { count: '1,240', pct: 0.85 },
  'agent-2': { count: '850',   pct: 0.60 },
  'agent-3': { count: '810',   pct: 0.28 },
}

const AGENT_COLOR: Record<string, string> = {
  MENU_AGENT:         '#038851',
  ORDER_FIXER_AGENT:  '#1D6EE5',
  PROMOTION_AGENT:    '#7C3AED',
}

const STATUS_COLOR: Record<string, string> = {
  success: '#038851',
  info:    '#1D6EE5',
  warning: '#D97706',
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function relativeTime(iso: string) {
  const diff = Date.now() - new Date(iso).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}

// ─── SVG pulse ring ───────────────────────────────────────────────────────────

function PulseRing({
  pct, color, active, children,
}: { pct: number; color: string; active: boolean; children: React.ReactNode }) {
  const r = 52
  const cx = 64
  const cy = 64
  const circ = 2 * Math.PI * r
  const arc = circ * Math.max(0.04, pct)
  const ringColor = active ? color : vars.colors.border.neutral.default.default

  return (
    <div style={{ position: 'relative', width: 128, height: 128, flexShrink: 0 }}>
      <svg width="128" height="128" viewBox="0 0 128 128" style={{ display: 'block' }}>
        {/* track */}
        <circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke={active ? `${color}20` : `${vars.colors.border.neutral.default.default}40`}
          strokeWidth="8"
        />
        {/* arc */}
        <circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke={ringColor}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${arc} ${circ}`}
          transform={`rotate(-90 ${cx} ${cy})`}
          style={active ? { filter: `drop-shadow(0 0 6px ${color}66)` } : undefined}
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: active ? color : vars.colors.icon.neutral.default.disabled,
      }}>
        {children}
      </div>
    </div>
  )
}

// ─── Agent type icon ──────────────────────────────────────────────────────────

function AgentTypeIcon({ agentType }: { agentType: Agent['agentType'] }) {
  if (agentType === 'MENU_AGENT') return <MenuFill size="xl" />
  if (agentType === 'ORDER_FIXER_AGENT') return <SettingsOutline size="xl" />
  return <MegaphoneOutline size="xl" />
}

// ─── Agent pulse card ─────────────────────────────────────────────────────────

function AgentPulseCard({ agent }: { agent: Agent }) {
  const navigate = useNavigate()
  const color = AGENT_COLOR[agent.agentType]
  const { count, pct } = AGENT_META[agent.id] ?? { count: '0', pct: 0 }

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: vars.spacing['200'],
        padding: vars.spacing['300'],
        border: `1px solid ${vars.colors.border.neutral.default.default}`,
        borderRadius: vars.border.radius['200'],
        backgroundColor: vars.colors.background.default,
        boxShadow: vars.shadows[1],
      }}
    >
      <PulseRing pct={pct} color={color} active={agent.enabled}>
        <AgentTypeIcon agentType={agent.agentType} />
      </PulseRing>

      <Stack height="auto" space="025" style={{ textAlign: 'center' }}>
        <Text weight="bold">{agent.name}</Text>
        <Text size="sm" color="secondary">{agent.objective}</Text>
      </Stack>

      <div style={{ textAlign: 'center', lineHeight: 1 }}>
        <div style={{
          fontSize: 30,
          fontWeight: 700,
          color: agent.enabled ? color : vars.colors.text.neutral.default.disabled,
          letterSpacing: '-0.5px',
        }}>
          {count}
        </div>
        <Text size="sm" color="secondary">actions taken</Text>
      </div>

      <Inline space="050" wrap style={{ justifyContent: 'center' }}>
        {agent.activeOn.map(loc => (
          <Badge key={loc} size="sm" status="neutral">{loc}</Badge>
        ))}
      </Inline>

      <Inline space="100" alignY="center">
        {agent.enabled
          ? <Badge status="success" size="sm">Active</Badge>
          : <Badge status="neutral" size="sm">Inactive</Badge>
        }
        <Button size="sm" variant="outline" status="neutral" onClick={() => navigate(`/agents/${agent.id}`)}>
          View
        </Button>
      </Inline>
    </div>
  )
}

// ─── Activity chip ────────────────────────────────────────────────────────────

function ActivityChip({ log }: { log: AgentLog }) {
  const dot = STATUS_COLOR[log.status]
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: vars.spacing['100'],
        padding: `6px ${vars.spacing['150']}`,
        border: `1px solid ${vars.colors.border.neutral.default.default}`,
        borderRadius: 99,
        backgroundColor: vars.colors.background.default,
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
    >
      <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: dot, flexShrink: 0 }} />
      <Text size="sm" weight="medium">{log.action}</Text>
      <Text size="sm" color="secondary">·</Text>
      <Text size="sm" color="secondary">{log.location}</Text>
      <Text size="sm" color="secondary">·</Text>
      <Text size="sm" color="secondary">{relativeTime(log.timestamp)}</Text>
    </div>
  )
}

// ─── Create strip ─────────────────────────────────────────────────────────────

function CreateAgentStrip() {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate('/agents/create')}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: vars.spacing['100'],
        padding: vars.spacing['200'],
        border: `1.5px dashed ${vars.colors.border.neutral.default.default}`,
        borderRadius: vars.border.radius['200'],
        backgroundColor: 'transparent',
        cursor: 'pointer',
        color: vars.colors.text.neutral.default.secondary,
        transition: 'background-color 0.15s',
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = vars.colors.surface.neutral.hover)}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
    >
      <SparklesOutline size="sm" />
      <Text size="sm" weight="medium" color="secondary">Create another agent</Text>
    </button>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function AIHomeDPage() {
  const { agents } = useAgents()
  const recentLogs = MOCK_LOGS.slice(0, 5)

  return (
    <Page.Root>
      <PageHeader.Header px="300" py="200" space="100" alignY="center" style={{ flexShrink: 0 }}>
        <Inline space="100" alignY="center">
          <PageHeader.Title>Deliverect AI</PageHeader.Title>
          <Badge size="sm" status="info">Beta</Badge>
        </Inline>
      </PageHeader.Header>

      <Page.Body space="300" py="300">

        {/* Agent pulse cards */}
        <div style={{ display: 'flex', gap: vars.spacing['200'], alignItems: 'stretch' }}>
          {agents.map(agent => (
            <AgentPulseCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* Recent activity strip */}
        <Stack height="auto" space="150">
          <Text size="sm" weight="medium" color="secondary">Recent activity</Text>
          <div style={{
            display: 'flex',
            gap: vars.spacing['100'],
            overflowX: 'auto',
            paddingBottom: vars.spacing['050'],
          }}>
            {recentLogs.map(log => (
              <ActivityChip key={log.id} log={log} />
            ))}
          </div>
        </Stack>

        <CreateAgentStrip />

      </Page.Body>
    </Page.Root>
  )
}
