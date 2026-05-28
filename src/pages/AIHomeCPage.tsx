import { useNavigate } from 'react-router-dom'
import {
  Banner,
  Badge,
  Button,
  ArrowDirectionRight,
  Heading,
  Inline,
  PageHeader,
  MegaphoneOutline,
  MenuFill,
  SettingsOutline,
  SparklesOutline,
  Stack,
  Text,
  vars,
} from '@deliverect/galaxy-react'
import { Page } from '../components/Page'

// ─── Available agents ─────────────────────────────────────────────────────────

const AGENT_CARDS = [
  {
    icon: <MenuFill size="xl" />,
    name: 'Autonomous Menu',
    objective: 'Autonomous menu',
    pitch: 'Continuously optimise your menu pricing and layout based on real order data.',
    route: '/agents/create/menu-agent',
    color: '#038851',
  },
  {
    icon: <SettingsOutline size="xl" />,
    name: 'Autonomous Support',
    objective: 'Autonomous support',
    pitch: 'Automatically correct common order mistakes before they reach the kitchen.',
    route: '/agents/create/fixer-agent',
    color: '#1D6EE5',
  },
  {
    icon: <MegaphoneOutline size="xl" />,
    name: 'Promotions',
    objective: 'Promotions',
    pitch: 'Run smart promotions triggered by real performance data to recover slow periods.',
    route: '/agents/create/promotion-agent',
    color: '#7C3AED',
  },
]

function AgentCard({ icon, name, pitch, route, color }: typeof AGENT_CARDS[0]) {
  const navigate = useNavigate()
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: vars.spacing['200'],
        padding: vars.spacing['250'],
        border: `1px solid ${vars.colors.border.neutral.default.default}`,
        borderRadius: vars.border.radius['200'],
        backgroundColor: vars.colors.background.default,
        boxShadow: vars.shadows[1],
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: vars.border.radius['150'],
          backgroundColor: `${color}14`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color,
        }}
      >
        {icon}
      </div>
      <Stack height="auto" space="050" style={{ flex: 1 }}>
        <Text weight="bold">{name}</Text>
        <Text size="sm" color="secondary">{pitch}</Text>
      </Stack>
      <Button
        size="sm"
        variant="outline"
        status="neutral"
        TrailingIcon={<ArrowDirectionRight size="sm" />}
        onClick={() => navigate(route)}
      >
        Create agent
      </Button>
    </div>
  )
}

// ─── How it works ─────────────────────────────────────────────────────────────

const STEPS = [
  {
    number: '1',
    title: 'Monitor',
    description: 'The agent watches your orders, revenue, and menu performance in real time.',
  },
  {
    number: '2',
    title: 'Decide',
    description: 'It identifies opportunities and risks based on your goals and permissions.',
  },
  {
    number: '3',
    title: 'Act',
    description: 'Changes are applied automatically — within the boundaries you set.',
  },
]

function StepCard({ number, title, description }: typeof STEPS[0]) {
  return (
    <div
      style={{
        flex: 1,
        padding: vars.spacing['250'],
        border: `1px solid ${vars.colors.border.neutral.default.default}`,
        borderRadius: vars.border.radius['200'],
        backgroundColor: vars.colors.background.default,
        display: 'flex',
        flexDirection: 'column',
        gap: vars.spacing['150'],
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          backgroundColor: vars.colors.fill.neutral.static.subtle,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text weight="bold" size="sm">{number}</Text>
      </div>
      <Stack height="auto" space="050">
        <Text weight="bold">{title}</Text>
        <Text size="sm" color="secondary">{description}</Text>
      </Stack>
    </div>
  )
}

function StepConnector() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', paddingTop: vars.spacing['050'], color: vars.colors.icon.neutral.default.default }}>
      <ArrowDirectionRight size="lg" />
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function AIHomeCPage() {
  const navigate = useNavigate()

  return (
    <Page.Root>
      <PageHeader.Header px="300" py="200" space="100" alignY="center" style={{ flexShrink: 0 }}>
        <PageHeader.Title>Deliverect AI</PageHeader.Title>
        <Badge size="sm" status="info">Beta</Badge>
      </PageHeader.Header>

      <Page.Body space="400" py="300">

        {/* 1. Welcome */}
        <Stack height="auto" space="100">
          <Inline space="150" alignY="center">
            <SparklesOutline size="lg" />
            <Text size="sm" color="secondary" weight="medium">Your AI-powered digital workforce</Text>
          </Inline>
          <Heading level={2}>Welcome to Deliverect AI</Heading>
          <Text color="secondary" style={{ maxWidth: 560 }}>
            A workforce of AI agents that handle manual tasks to boost revenue, protect your margins, and keep your operations running smoothly — with full control in your hands.
          </Text>
        </Stack>

        {/* 2. Available agents */}
        <Stack height="auto" space="150">
          <Text weight="bold">Available agents</Text>
          <Inline space="150" alignY="stretch">
            {AGENT_CARDS.map(card => (
              <AgentCard key={card.name} {...card} />
            ))}
          </Inline>
        </Stack>

        {/* 3. How it works */}
        <Stack height="auto" space="150">
          <Text weight="bold">How it works</Text>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: vars.spacing['100'] }}>
            {STEPS.map((step, i) => (
              <>
                <StepCard key={step.number} {...step} />
                {i < STEPS.length - 1 && <StepConnector key={`arrow-${i}`} />}
              </>
            ))}
          </div>
        </Stack>

        {/* 4. Quick-start tip */}
        <Banner.Root status="info">
          <Banner.Icon><SparklesOutline /></Banner.Icon>
          <Banner.Content>
            <Banner.Title>Start with Mission Control</Banner.Title>
            <Banner.Body>
              <Text size="sm">Head to Mission Control to see all your active agents and their live activity.</Text>
            </Banner.Body>
          </Banner.Content>
          <Banner.Actions>
            <Button size="sm" variant="outline" status="neutral" onClick={() => navigate('/agents')}>
              Go to Mission Control
            </Button>
          </Banner.Actions>
        </Banner.Root>

      </Page.Body>
    </Page.Root>
  )
}
