import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  CheckCircleFill,
  Heading,
  Inline,
  Stack,
  Text,
  vars,
} from '@deliverect/galaxy-react'
import { Page } from '../../components/Page'
import { Step } from '../../components/Step'
import autonomousMenuSvg from '../../assets/illustrations/autonomous-menu.svg'
import autonomousSupportSvg from '../../assets/illustrations/autonomous-support.svg'
import autonomousPromotionsSvg from '../../assets/illustrations/autonomous-promotions.svg'

// ─── Data ─────────────────────────────────────────────────────────────────────

type AgentId = 'menu-agent' | 'fixer-agent' | 'promotion-agent'

interface AgentOption {
  id: AgentId
  illustration: string
  title: string
  description: string
  footerText: string
}

const AGENT_OPTIONS: AgentOption[] = [
  {
    id: 'menu-agent',
    illustration: autonomousMenuSvg,
    title: 'Autonomous Menu',
    description: 'Continuously optimize the base menu to maximize sales.',
    footerText: 'Increase your revenue, average order value, and total order count.',
  },
  {
    id: 'fixer-agent',
    illustration: autonomousSupportSvg,
    title: 'Autonomous Support',
    description: 'Automatically fix complex order issues to retain revenue.',
    footerText: 'Increase your revenue and total order count.',
  },
  {
    id: 'promotion-agent',
    illustration: autonomousPromotionsSvg,
    title: 'Autonomous promotions',
    description: 'Automated triggering of promotions based on sales data.',
    footerText: 'Increase your sales and improve promotional ROI.',
  },
]

// ─── Active agent card ────────────────────────────────────────────────────────

function AgentCard({
  option,
  selected,
  onSelect,
}: {
  option: AgentOption
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
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        border: `1px solid ${selected ? vars.colors.border.neutral.static.emphasize : hovered ? vars.colors.border.neutral.default.hover : vars.colors.border.neutral.default.default}`,
        borderRadius: vars.border.radius['150'],
        cursor: 'pointer',
        backgroundColor: selected
          ? vars.colors.surface.neutral.active
          : hovered
          ? vars.colors.surface.neutral.hover
          : vars.colors.background.default,
        transition: 'all 0.15s ease',
        position: 'relative',
      }}
    >
      {selected && (
        <div style={{ position: 'absolute', top: vars.spacing['150'], right: vars.spacing['150'], color: vars.colors.icon.neutral.interactive.bold.default }}>
          <CheckCircleFill size="lg" />
        </div>
      )}

      <img src={option.illustration} alt="" width={64} height={64} />

      <Stack height="auto" space="100">
        <Stack height="auto" space="050">
          <Text weight="bold">{option.title}</Text>
          <Text size="sm" color="secondary">{option.description}</Text>
        </Stack>
      </Stack>

      <Text size="sm" color="secondary" style={{ fontSize: '12px', marginTop: 'auto' }}>
        {option.footerText}
      </Text>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function CreateOverviewPage() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<AgentId | null>(null)

  return (
    <Page.Root>
      <Page.Header>
        <Heading level={3}>Create agent</Heading>
        <Inline space="100" alignY="center" width="auto">
          <Button variant="transparent" status="neutral" size="sm">
            Learn more
          </Button>
          <Button variant="outline" status="neutral" size="sm" onClick={() => navigate('/agents')}>
            Exit
          </Button>
        </Inline>
      </Page.Header>

      <Page.Body alignX="center" pb="300">
        <Step.Content>
          <Stack height="auto" space="150">
            <Heading level={3}>Choose a task</Heading>
            <Text size="sm" weight="medium" color="secondary">
              Which specific task do you want this agent to focus on?
            </Text>
          </Stack>

          <Inline space="200" alignY="stretch" style={{ marginTop: vars.spacing['300'] }}>
            {AGENT_OPTIONS.map(option => (
              <AgentCard
                key={option.id}
                option={option}
                selected={selected === option.id}
                onSelect={() => setSelected(option.id)}
              />
            ))}
          </Inline>
        </Step.Content>
      </Page.Body>

      <Page.Footer>
        <Button variant="outline" status="neutral" onClick={() => navigate('/agents')}>
          Back
        </Button>
        <Button
          status="primary"
          disabled={selected === null}
          onClick={() => navigate(`/agents/create/${selected}`)}
        >
          Next
        </Button>
      </Page.Footer>
    </Page.Root>
  )
}
