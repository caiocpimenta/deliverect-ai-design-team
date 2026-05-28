import {
  Badge,
  Button,
  CheckCircleFill,
  ClockOutline,
  GraphBarFill,
  Heading,
  Inline,
  PageHeader,
  LockOutline,
  SparklesFill,
  SparklesOutline,
  Stack,
  Text,
  vars,
} from '@deliverect/galaxy-react'
import { Page } from '../components/Page'
import { DeliverectAILogo } from '../components/DeliverectAILogo'

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const circle = (size: string, x: string, y: string) =>
    `radial-gradient(circle ${size} at ${x} ${y}, ${vars.colors.fill.neutral.static.subtle} 0%, transparent 100%)`

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: vars.border.radius['200'],
        overflow: 'hidden',
        backgroundColor: vars.colors.background.navigation1,
        backgroundImage: `${circle('300px', '2%', '20%')}, ${circle('200px', '50%', '120%')}, ${circle('150px', '95%', '10%')}`,
        padding: vars.spacing['500'],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: vars.spacing['500'],
        minHeight: 280,
      }}
    >
      {/* Left — copy */}
      <Stack height="auto" space="250" style={{ flex: 1, maxWidth: 520 }}>
        <Inline space="150" alignY="center">
          <DeliverectAILogo />
          <Text size="sm" style={{ color: vars.colors.text.neutral.static.default, opacity: 0.7 }}>
            Deliverect AI
          </Text>
        </Inline>

        <Stack height="auto" space="150">
          <Heading level={1} style={{ color: vars.colors.text.neutral.static.default, lineHeight: 1.15 }}>
            Supercharge your sales with AI
          </Heading>
          <Text style={{ color: vars.colors.text.neutral.static.default, opacity: 0.75 }}>
            Deliverect AI is your digital workforce of agents that handle manual tasks to slash costs,
            boost revenue, and protect your margins at scale.
          </Text>
        </Stack>

        <Inline space="150">
          <Button status="primary">Get in touch now</Button>
          <Button variant="plain" style={{ color: vars.colors.text.neutral.static.default }}>Learn more</Button>
        </Inline>
      </Stack>

      {/* Right — feature teaser card */}
      <div
        style={{
          backgroundColor: vars.colors.background.default,
          borderRadius: vars.border.radius['150'],
          padding: vars.spacing['300'],
          minWidth: 220,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: vars.spacing['150'],
          boxShadow: vars.shadows[2],
        }}
      >
        <Text weight="bold" size="sm">Fully own your experience</Text>
        {[
          'Revenue-aware pricing',
          'Always-on automation',
          'Privacy first',
        ].map(label => (
          <Inline key={label} space="100" alignY="center">
            <div style={{ color: '#038851', flexShrink: 0 }}>
              <CheckCircleFill size="sm" />
            </div>
            <Text size="sm" color="secondary">{label}</Text>
          </Inline>
        ))}
      </div>
    </div>
  )
}

// ─── Feature cards ────────────────────────────────────────────────────────────

const FEATURE_CARDS = [
  {
    icon: <SparklesFill size="xl" />,
    title: 'Always on',
    description: 'Agents run 24/7 in the background, optimising while your team focuses on what matters.',
    color: '#038851',
  },
  {
    icon: <GraphBarFill size="xl" />,
    title: 'Revenue-aware',
    description: 'Every decision is grounded in your real order data, AOV trends, and location performance.',
    color: '#1D6EE5',
  },
  {
    icon: <ClockOutline size="xl" />,
    title: 'Zero manual work',
    description: 'From menu reordering to promotion triggers — agents act so your team doesn\'t have to.',
    color: '#D97706',
  },
  {
    icon: <LockOutline size="xl" />,
    title: 'Privacy first',
    description: 'Full control over permissions and guardrails. The agent never exceeds the limits you set.',
    color: '#7C3AED',
  },
]

function FeatureCard({ icon, title, description, color }: typeof FEATURE_CARDS[0]) {
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
        boxShadow: vars.shadows[1],
      }}
    >
      <div style={{ color }}>{icon}</div>
      <Stack height="auto" space="050">
        <Text weight="bold">{title}</Text>
        <Text size="sm" color="secondary">{description}</Text>
      </Stack>
    </div>
  )
}

// ─── Footer strip ─────────────────────────────────────────────────────────────

const BENEFITS = [
  'Reduce manual workload',
  'Protect your margins',
  'Boost revenue automatically',
  'Real-time performance data',
  'Full control over guardrails',
]

function FooterStrip() {
  return (
    <div
      style={{
        borderRadius: vars.border.radius['200'],
        border: `1px solid ${vars.colors.border.neutral.default.default}`,
        backgroundColor: vars.colors.background.default,
        padding: vars.spacing['300'],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: vars.spacing['300'],
        flexWrap: 'wrap',
      }}
    >
      <Inline space="300" wrap>
        {BENEFITS.map(benefit => (
          <Inline key={benefit} space="100" alignY="center">
            <div style={{ color: '#038851', flexShrink: 0 }}>
              <CheckCircleFill size="sm" />
            </div>
            <Text size="sm" weight="medium">{benefit}</Text>
          </Inline>
        ))}
      </Inline>

      <Inline space="100" style={{ flexShrink: 0 }}>
        <Button variant="outline" status="neutral" size="sm">Learn more</Button>
        <Button status="primary" size="sm">Get in touch now</Button>
      </Inline>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function AIHomeAPage() {
  return (
    <Page.Root>
      <PageHeader.Header px="300" py="200" space="100" alignY="center" style={{ flexShrink: 0 }}>
        <PageHeader.Title>Deliverect AI</PageHeader.Title>
        <Badge size="sm" status="info">Beta</Badge>
      </PageHeader.Header>

      <Page.Body space="300" py="300">
        <Hero />

        <Stack height="auto" space="150">
          <Inline space="100" alignY="center">
            <SparklesOutline size="sm" />
            <Text weight="medium" size="sm">What Deliverect AI can do for you</Text>
          </Inline>
          <Inline space="150" alignY="stretch">
            {FEATURE_CARDS.map(card => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </Inline>
        </Stack>

        <FooterStrip />
      </Page.Body>
    </Page.Root>
  )
}
