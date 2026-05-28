import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowDirectionDown,
  ArrowDirectionLeft,
  ArrowDirectionRight,
  Badge,
  Button,
  CheckCircleFill,
  DiscountOutline,
  DropdownMenu,
  DuplicateOutline,
  EditOutline,
  Inline,
  MegaphoneOutline,
  PageHeader,
  SparklesOutline,
  MenuEllipsisDirectionVertical,
  Modal,
  Stack,
  Table,
  Tabs,
  Text,
  TrashcanOutline,
  vars,
} from '@deliverect/galaxy-react'
import { Page } from '../components/Page'
import { type Campaign, type CampaignPromo, type CampaignStatus } from '../data/campaigns'
import { useCampaigns } from '../context/CampaignsContext'
import { MOCK_CHANNELS } from '../data/mockAgents'

function channelName(id: string) {
  return MOCK_CHANNELS.find(c => c.id === id)?.name ?? id
}

// ─── Campaign type options (for the creation modal) ──────────────────────────

const CAMPAIGN_TYPE_OPTIONS = [
  {
    id: 'discount',
    title: 'Discount campaign',
    description: 'Create discount-based promotions for your delivery channels.',
    icon: <DiscountOutline size="xl" />,
    comingSoon: false,
  },
  {
    id: 'awareness',
    title: 'Awareness campaign',
    description: 'Boost your brand visibility across platforms.',
    icon: <MegaphoneOutline size="xl" />,
    comingSoon: true,
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function CampaignAvatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      style={{
        width: '32px',
        height: '32px',
        borderRadius: vars.border.radius['050'],
        backgroundColor: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <span style={{ color: 'white', fontSize: '11px', fontWeight: 700, lineHeight: 1 }}>
        {initials}
      </span>
    </div>
  )
}

function StatusBadge({ status }: { status: CampaignStatus }) {
  if (status === 'Autonomous Agent') {
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          padding: '2px 8px 2px 6px',
          borderRadius: '999px',
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: '18px',
          background: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(219,39,119,0.10) 100%)',
          border: '1px solid rgba(124,58,237,0.25)',
          color: '#7C3AED',
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{ display: 'flex', color: '#7C3AED' }}>
          <SparklesOutline size="sm" />
        </span>
        Autonomous Agent
      </span>
    )
  }

  const statusMap: Record<Exclude<CampaignStatus, 'Autonomous Agent'>, 'success' | 'info' | 'neutral'> = {
    Live: 'success',
    Scheduled: 'info',
    Ended: 'neutral',
    Paused: 'neutral',
  }
  return (
    <Badge status={statusMap[status]} size="sm">
      {status}
    </Badge>
  )
}

function CampaignRowActions() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="transparent"
          size="sm"
          Icon={<MenuEllipsisDirectionVertical size="lg" />}
          aria-label="Campaign actions"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content side="left" align="start">
        <DropdownMenu.Item icon={<EditOutline />}>Edit campaign</DropdownMenu.Item>
        <DropdownMenu.Item icon={<DuplicateOutline />}>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item icon={<TrashcanOutline />} status="critical">
          Delete campaign
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

function PaginationRow() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: `${vars.spacing['150']} ${vars.spacing['250']}`,
        flexShrink: 0,
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Inline space="100" alignY="center" style={{ flex: '1', minWidth: 0 }}>
        <Text size="sm" color="secondary">Campaigns per page:</Text>
        <Text size="sm" weight="medium">20</Text>
      </Inline>

      <Text size="sm" color="secondary" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>1–20 of 162 campaigns</Text>

      <div style={{ display: 'flex', alignItems: 'center', gap: vars.spacing['050'], flex: '1', justifyContent: 'flex-end', minWidth: 0 }}>
        <Button
          variant="transparent"
          size="sm"
          Icon={<ArrowDirectionLeft size="lg" />}
          aria-label="Previous page"
          disabled
        />
        {[1, 2, 3].map(page => (
          <Button
            key={page}
            variant={page === 1 ? 'outline' : 'transparent'}
            status="neutral"
            size="sm"
          >
            {String(page)}
          </Button>
        ))}
        <Text size="sm" color="secondary" style={{ padding: `0 ${vars.spacing['050']}` }}>…</Text>
        <Button variant="transparent" status="neutral" size="sm">9</Button>
        <Button
          variant="transparent"
          size="sm"
          Icon={<ArrowDirectionRight size="lg" />}
          aria-label="Next page"
        />
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function CampaignsPage() {
  const navigate = useNavigate()
  const { campaigns } = useCampaigns()
  const [activeTab, setActiveTab] = useState('list')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedType, setSelectedType] = useState('discount')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <Page.Root>
      {/* Header */}
      <PageHeader.Header px="300" py="200" space="100" alignY="center" style={{ flexShrink: 0 }}>
        <PageHeader.Root>
          <PageHeader.Title level={3}>Campaign Manager</PageHeader.Title>
          <PageHeader.Description>Manage and schedule your discount campaigns</PageHeader.Description>
        </PageHeader.Root>

        <Inline space="100" alignY="center" style={{ flexShrink: 0 }}>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button
                variant="outline"
                status="neutral"
                size="sm"
                Icon={<MenuEllipsisDirectionVertical size="lg" />}
                aria-label="More actions"
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content side="bottom" align="end">
              <DropdownMenu.Item>Export</DropdownMenu.Item>
              <DropdownMenu.Item>Import</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          {/* Create campaign → opens type-selection modal */}
          <Modal.Root open={modalOpen} onOpenChange={setModalOpen}>
            <Modal.Trigger asChild>
              <Button status="primary" size="sm">
                Create campaign
              </Button>
            </Modal.Trigger>

            <Modal.Content aria-describedby="">
              <Modal.Header>
                <Modal.Title>Campaign type</Modal.Title>
              </Modal.Header>

              <Modal.Body px="300" py="250">
                <Stack height="auto" space="150">
                  {CAMPAIGN_TYPE_OPTIONS.map(type => (
                    <div
                      key={type.id}
                      onClick={() => !type.comingSoon && setSelectedType(type.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: vars.spacing['200'],
                        padding: vars.spacing['200'],
                        border: `2px solid ${selectedType === type.id ? '#038851' : vars.colors.border.neutral.default.default}`,
                        borderRadius: vars.border.radius['100'],
                        cursor: type.comingSoon ? 'not-allowed' : 'pointer',
                        opacity: type.comingSoon ? 0.5 : 1,
                        backgroundColor:
                          selectedType === type.id
                            ? 'rgba(3, 136, 81, 0.04)'
                            : vars.colors.background.default,
                        transition: 'border-color 0.15s ease, background-color 0.15s ease',
                      }}
                    >
                      <div
                        style={{
                          color:
                            selectedType === type.id
                              ? '#038851'
                              : vars.colors.icon.neutral.inactive,
                          flexShrink: 0,
                        }}
                      >
                        {type.icon}
                      </div>

                      <Stack height="auto" space="025" style={{ flex: 1 }}>
                        <Inline space="100" alignY="center">
                          <Text weight="medium">{type.title}</Text>
                          {type.comingSoon && (
                            <Badge size="sm" status="neutral">Coming soon</Badge>
                          )}
                        </Inline>
                        <Text size="sm" color="secondary">{type.description}</Text>
                      </Stack>

                      {selectedType === type.id && (
                        <div style={{ color: '#038851', flexShrink: 0 }}>
                          <CheckCircleFill size="lg" />
                        </div>
                      )}
                    </div>
                  ))}
                </Stack>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="outline"
                  status="neutral"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  status="primary"
                  disabled={!selectedType}
                  onClick={() => {
                    setModalOpen(false)
                    navigate('/dcm/campaigns/new')
                  }}
                >
                  Continue
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Root>
        </Inline>
      </PageHeader.Header>

      {/* Tab bar — sits between header and body as a full-width row */}
      <div
        style={{
          padding: `0 ${vars.spacing['250']}`,
          flexShrink: 0,
        }}
      >
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Trigger value="calendar">Calendar</Tabs.Trigger>
            <Tabs.Trigger value="list">List</Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </div>

      {/* Body — zero padding so table extends edge-to-edge */}
      <Page.Body space="250" py="250" style={{ flex: 1, overflow: 'auto' }}>
        <Table.Root width="full">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell noHover width="1" />
              <Table.ColumnHeaderCell noHover>Campaign name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell noHover>Channel</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell noHover>Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell noHover>Locations</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell noHover>Start date</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell noHover>End date</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell noHover width="1" />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {campaigns.map(campaign => {
              const hasPromos = (campaign.promos?.length ?? 0) > 0
              const isExpanded = expandedId === campaign.id
              return (
                <React.Fragment key={campaign.id}>
                  {/* ── Parent campaign row ── */}
                  <Table.Row key={campaign.id}>
                    <Table.Cell>
                      {hasPromos && (
                        <button
                          type="button"
                          onClick={() => setExpandedId(isExpanded ? null : campaign.id)}
                          style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', padding: vars.spacing['025'],
                            color: vars.colors.icon.neutral.inactive,
                            transition: 'transform 0.15s ease',
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        >
                          <ArrowDirectionDown size="sm" />
                        </button>
                      )}
                    </Table.Cell>

                    <Table.RowHeaderCell>
                      <Text weight="medium" size="sm">{campaign.name}</Text>
                    </Table.RowHeaderCell>

                    <Table.Cell>
                      <Text size="sm" color="secondary">{campaign.channels.map(channelName).join(', ')}</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <StatusBadge status={campaign.status} />
                    </Table.Cell>

                    <Table.Cell>
                      <Text size="sm" color="secondary">{campaign.locations}</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text size="sm" color="secondary">{campaign.startDate}</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text size="sm" color={campaign.endDate === 'No end date' ? 'secondary' : undefined}>
                        {campaign.endDate}
                      </Text>
                    </Table.Cell>

                    <Table.Cell>
                      <CampaignRowActions />
                    </Table.Cell>
                  </Table.Row>

                  {/* ── Sub-rows (one per promo) ── */}
                  {isExpanded && campaign.promos?.map((promo, i) => (
                    <Table.Row key={`${campaign.id}-promo-${i}`} style={{ backgroundColor: vars.colors.surface.neutral.active }}>
                      {/* indent spacer */}
                      <Table.Cell />
                      <Table.RowHeaderCell>
                        <div style={{ paddingLeft: vars.spacing['200'] }}>
                          <Text size="sm" color="secondary">{promo.label}</Text>
                        </div>
                      </Table.RowHeaderCell>

                      <Table.Cell>
                        <Text size="sm" color="secondary">{promo.channelName}</Text>
                      </Table.Cell>

                      <Table.Cell>
                        {promo.conditions.length > 0 ? (
                          <Inline space="050" style={{ flexWrap: 'wrap' }}>
                            {promo.conditions.map(c => (
                              <Badge key={c} size="sm" status="neutral">
                                {c.charAt(0).toUpperCase() + c.slice(1)}
                              </Badge>
                            ))}
                          </Inline>
                        ) : (
                          <Text size="sm" color="secondary">—</Text>
                        )}
                      </Table.Cell>

                      <Table.Cell />

                      <Table.Cell>
                        <Badge size="sm" status={promo.status === 'active' ? 'success' : 'neutral'}>
                          {promo.status === 'active' ? 'Active' : 'Paused'}
                        </Badge>
                      </Table.Cell>

                      <Table.Cell />
                      <Table.Cell />
                    </Table.Row>
                  ))}
                </React.Fragment>
              )
            })}
          </Table.Body>
        </Table.Root>
      </Page.Body>
      <PaginationRow />
    </Page.Root>
  )
}
