import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Badge,
  Button,
  DataCard,
  Heading,
  Inline,
  PageHeader,
  Modal,
  Stack,
  Tabs,
  Text,
  vars,
  Cross,
  SparklesOutline,
  SparklesFill,
  Icon,
  ArrowDirectionRight,
} from '@deliverect/galaxy-react'
import autonomousMenuIllustration from '../assets/illustrations/autonomous-menu.svg'
import smartAssistantIllustration from '../assets/illustrations/create-ai-agents.svg'
import promotionsIllustration from '../assets/illustrations/autonomous-promotions.svg'
import autonomousSupportIllustration from '../assets/illustrations/autonomous-support.svg'
import { Page } from '../components/Page'
import { ActivityLog } from '../components/ActivityLog'
import { AgentsTable } from '../components/AgentsTable'
import { useAgents } from '../context/AgentsContext'
import { MOCK_LOGS } from '../data/mockLogs'

// ─── DiscoveryBanner ──────────────────────────────────────────────────────────

function DiscoveryBanner({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate()

  const circle = (size: string, x: string, y: string) =>
    `radial-gradient(circle ${size} at ${x} ${y}, ${vars.colors.fill.neutral.static.subtle} 0%, transparent 100%)`

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: vars.border.radius['200'],
        overflow: 'hidden',
        backgroundColor: vars.colors.background.navigation1,
        backgroundImage: `${circle('136px', '5%', '15%')}, ${circle('128px', '50%', '100%')}, ${circle('64px', '95%', '5%')}`,
        padding: vars.spacing['300'],
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: 'absolute', top: vars.spacing['150'], right: vars.spacing['150'],
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', padding: vars.spacing['050'],
          borderRadius: vars.border.radius['050'],
        }}
      >
        <Cross size="md" />
      </button>

      <Inline alignX="spaceBetween" alignY="center" space="500">
        <Stack height="auto" space="050">
          <Icon size="400">
            <SparklesFill />
          </Icon>
          <Heading level={5} mt="050">Your AI Agent Hub</Heading>
          <Text color="secondary" size="sm">
            Create, monitor and manage all your Deliverect AI agents from one place.
          </Text>
        </Stack>

        <Inline width="auto" space="150">
          <ProductCard
            badge="AI"
            title="Menu AI Augmentations"
            description="Let AI automatically improve your menu content to increase conversion."
            action="Go to Augmentations"
            onAction={() => window.open('https://app.deliverect.com/menus/ai-augmentations', '_blank')}
          />
          <ProductCard
            badge="Agent"
            title="Menu Agent"
            description="Continuously optimise your menu pricing and layout based on real order data."
            action="Create Menu Agent"
            onAction={() => navigate('/agents/create/menu-agent')}
          />
          <ProductCard
            badge="Agent"
            title="Order Fixer Agent"
            description="Automatically correct common order mistakes before they reach the kitchen."
            action="Create Fixer Agent"
            onAction={() => navigate('/agents/create/fixer-agent')}
          />
        </Inline>
      </Inline>
    </div>
  )
}

function ProductCard({
  badge, title, description, action, onAction,
}: { badge: string; title: string; description: string; action: string; onAction: () => void }) {
  return (
    <div
      style={{
        backgroundColor: vars.colors.background.default,
        borderRadius: vars.border.radius['100'],
        border: `1px solid ${vars.colors.border.neutral.default}`,
        padding: vars.spacing['200'],
        minWidth: '200px',
        maxWidth: '220px',
        display: 'flex',
        flexDirection: 'column',
        gap: vars.spacing['150'],
        boxShadow: vars.shadows[1],
      }}
    >
      <Stack height="auto" space="050">
        <Badge size="sm" status="info">{badge}</Badge>
        <Text weight="bold" size="sm">{title}</Text>
        <Text size="sm" color="secondary">{description}</Text>
      </Stack>
      <Button size="xs" variant="outline" status="neutral" TrailingIcon={<ArrowDirectionRight size="sm" />} onClick={onAction}>
        {action}
      </Button>
    </div>
  )
}

// ─── AiGoalsModal ─────────────────────────────────────────────────────────────

const AGENT_OPTIONS = [
  {
    id: 'menu-agent',
    title: 'Autonomous Menu',
    badge: 'Agent' as const,
    subtitle: 'Boost order value & revenue',
    description: 'Optimizes item positioning, creates intelligent bundles, and crafts upsells that convert. Continuously learns from sales data to maximize every order.',
    tags: ['Item position', 'Bundles', 'Upsells'],
    illustration: autonomousMenuIllustration,
    action: (navigate: ReturnType<typeof useNavigate>) => navigate('/agents/create/menu-agent'),
  },
  {
    id: 'smart-assistant',
    title: 'Smart Assistant',
    badge: 'AI' as const,
    subtitle: 'One prompt, endless tasks',
    description: 'Edit photos, write descriptions, flag allergens, and more — all from a single prompt. Your creative copilot for everyday menu and content tasks.',
    tags: ['Photo editing', 'Copywriting', 'Allergens', 'Themes'],
    illustration: smartAssistantIllustration,
    action: () => window.open('https://app.deliverect.com/menus/ai-augmentations', '_blank'),
  },
  {
    id: 'promotions',
    title: 'Promotions',
    badge: 'Agent' as const,
    subtitle: 'Campaigns that optimize themselves',
    description: 'Launch and refine promotional campaigns from one prompt. The agent monitors performance and adjusts in real time to maximize ROI.',
    tags: ['Campaign setup', 'Auto-optimize'],
    illustration: promotionsIllustration,
    action: (navigate: ReturnType<typeof useNavigate>) => navigate('/agents/create/promotion-agent'),
  },
  {
    id: 'autonomous-support',
    title: 'Autonomous Support',
    badge: 'Agent' as const,
    subtitle: 'Fix orders before they go wrong',
    description: 'Automatically detect and correct common order issues before they reach the kitchen, reducing errors and improving customer satisfaction.',
    tags: ['Order fixing', 'Error detection', 'Auto-correct'],
    illustration: autonomousSupportIllustration,
    action: (navigate: ReturnType<typeof useNavigate>) => navigate('/agents/create/fixer-agent'),
  },
]

function AgentCard({
  option, selected, onSelect,
}: {
  option: typeof AGENT_OPTIONS[0]
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
        display: 'flex', flexDirection: 'column', gap: vars.spacing['150'],
        padding: vars.spacing['200'],
        border: `1.5px solid ${selected
          ? vars.colors.border.neutral.static.emphasize
          : hovered ? vars.colors.border.neutral.default.hover : vars.colors.border.neutral.default.default}`,
        borderRadius: vars.border.radius['150'],
        cursor: 'pointer',
        backgroundColor: selected
          ? vars.colors.surface.neutral.static.default
          : hovered ? vars.colors.surface.neutral.hover : vars.colors.background.default,
        transition: 'all 0.15s ease',
      }}
    >
      <Inline space="150" alignY="center">
        <img src={option.illustration} alt="" width={56} height={56} style={{ flexShrink: 0 }} />
        <Stack space="025" height="auto">
          <Inline space="100" alignY="center">
            <Text weight="bold" size="sm">{option.title}</Text>
            <Badge size="sm" status={option.badge === 'AI' ? 'info' : 'magic'}>{option.badge}</Badge>
          </Inline>
          <Text size="sm" color="secondary">{option.subtitle}</Text>
        </Stack>
      </Inline>
      <Text size="sm" color="secondary">{option.description}</Text>
      <Inline space="075" style={{ flexWrap: 'wrap' }}>
        {option.tags.map(tag => (
          <Badge key={tag} size="sm" status="neutral">{tag}</Badge>
        ))}
      </Inline>
    </div>
  )
}

function AiGoalsModal({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  const handleNext = () => {
    const option = AGENT_OPTIONS.find(o => o.id === selectedId)
    if (option) {
      setOpen(false)
      option.action(navigate)
    }
  }

  return (
    <Modal.Root open={open} onOpenChange={setOpen}>
      <Modal.Trigger asChild>{children}</Modal.Trigger>
      <Modal.Content aria-describedby="">
        <Modal.Header>
          <Modal.Title>Your suite of AI agents</Modal.Title>
        </Modal.Header>
        <Modal.Body px="400" py="300">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: vars.spacing['150'] }}>
            {AGENT_OPTIONS.map(option => (
              <AgentCard
                key={option.id}
                option={option}
                selected={selectedId === option.id}
                onSelect={() => setSelectedId(option.id)}
              />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button status="neutral" variant="outline" onClick={() => setOpen(false)}>Close</Button>
          <Button status="primary" disabled={!selectedId} onClick={handleNext}>Next</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  )
}

// ─── Empty state ──────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, gap: vars.spacing['200'], padding: vars.spacing['500'] }}>
      <div style={{ fontSize: '48px' }}>🤖</div>
      <Stack height="auto" space="050" style={{ textAlign: 'center' }}>
        <Heading level={3}>No agents yet</Heading>
        <Text color="secondary" size="sm">Create your first AI agent to start optimising your operations automatically.</Text>
      </Stack>
      <AiGoalsModal>
        <Button LeadingIcon={<SparklesOutline />}>Create your first agent</Button>
      </AiGoalsModal>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function MissionControlPage() {
  const navigate = useNavigate()
  const { agents } = useAgents()
  const [showBanner, setShowBanner] = useState(true)
  const [activeTab, setActiveTab] = useState('agents')

  if (agents.length === 0) {
    return (
      <Page.Root>
        <Page.Body alignX="center" alignY="center">
          <EmptyState />
        </Page.Body>
      </Page.Root>
    )
  }

  return (
    <Page.Root>
      <PageHeader.Header px="300" py="200" space="100" alignY="center" style={{ flexShrink: 0 }}>
        <PageHeader.Title>Mission Control</PageHeader.Title>
        <AiGoalsModal>
          <Button LeadingIcon={<SparklesOutline />}>Create agent</Button>
        </AiGoalsModal>
      </PageHeader.Header>

      <div style={{ paddingLeft: vars.spacing['300'] }}>
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Trigger value="agents">Agents</Tabs.Trigger>
            <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </div>

      <Page.Body space="250" py="250">
        {activeTab === 'agents' && (
          <>
            {showBanner && <DiscoveryBanner onClose={() => setShowBanner(false)} />}

            <Inline space="150" width="full">
              <DataCard.Root flex={1}>
                <DataCard.Header>
                  <DataCard.Title tooltip="Total number of changes made by all agents">Total actions</DataCard.Title>
                </DataCard.Header>
                <DataCard.Content>
                  <Inline space="100" alignY="center">
                    <DataCard.Value>2,900</DataCard.Value>
                    <DataCard.ChangeIndicator relativeChange={12}>+12%</DataCard.ChangeIndicator>
                  </Inline>
                  <Text color="secondary" size="sm">vs. last period</Text>
                </DataCard.Content>
              </DataCard.Root>

              <DataCard.Root flex={1}>
                <DataCard.Header>
                  <DataCard.Title tooltip="Number of locations affected by agent actions">Locations impacted</DataCard.Title>
                </DataCard.Header>
                <DataCard.Content>
                  <Inline space="100" alignY="center">
                    <DataCard.Value>850</DataCard.Value>
                    <DataCard.ChangeIndicator relativeChange={5}>+5%</DataCard.ChangeIndicator>
                  </Inline>
                  <Text color="secondary" size="sm">vs. last period</Text>
                </DataCard.Content>
              </DataCard.Root>

              <DataCard.Root flex={1}>
                <DataCard.Header>
                  <DataCard.Title tooltip="Estimated additional revenue generated by agent optimisations">Revenue uplift</DataCard.Title>
                </DataCard.Header>
                <DataCard.Content>
                  <Inline space="100" alignY="center">
                    <DataCard.Value>$1,500</DataCard.Value>
                    <DataCard.ChangeIndicator relativeChange={8}>+8%</DataCard.ChangeIndicator>
                  </Inline>
                  <Text color="secondary" size="sm">vs. last period</Text>
                </DataCard.Content>
              </DataCard.Root>

              <DataCard.Root flex={1}>
                <DataCard.Header>
                  <DataCard.Title tooltip="Estimated revenue protected by agent interventions">Revenue protected</DataCard.Title>
                </DataCard.Header>
                <DataCard.Content>
                  <Inline space="100" alignY="center">
                    <DataCard.Value>$1,500</DataCard.Value>
                    <DataCard.ChangeIndicator relativeChange={3}>+3%</DataCard.ChangeIndicator>
                  </Inline>
                  <Text color="secondary" size="sm">vs. last period</Text>
                </DataCard.Content>
              </DataCard.Root>
            </Inline>

            <AgentsTable />
          </>
        )}

        {activeTab === 'activity' && (
          <ActivityLog logs={MOCK_LOGS} showAgentColumn showAgentTypeFilter />
        )}
      </Page.Body>
    </Page.Root>
  )
}
