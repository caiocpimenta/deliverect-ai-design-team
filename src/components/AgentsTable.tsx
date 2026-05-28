import { useNavigate } from 'react-router-dom'
import {
  Badge,
  Button,
  DropdownMenu,
  EditOutline,
  Inline,
  MenuEllipsisDirectionVertical,
  MegaphoneOutline,
  MenuFill,
  SettingsOutline,
  Table,
  Text,
  TrashcanOutline,
  ArrowDirectionRight,
  vars,
} from '@deliverect/galaxy-react'
import { type Agent } from '../data/mockAgents'
import { useAgents } from '../context/AgentsContext'

function AgentTypeIcon({ agentType }: { agentType: Agent['agentType'] }) {
  if (agentType === 'MENU_AGENT') return <MenuFill size="sm" />
  if (agentType === 'ORDER_FIXER_AGENT') return <SettingsOutline size="sm" />
  return <MegaphoneOutline size="sm" />
}

function StatusBadge({ enabled }: { enabled: boolean }) {
  return enabled
    ? <Badge status="success" size="sm">Active</Badge>
    : <Badge status="critical" size="sm">Inactive</Badge>
}

function AgentRowActions({ agent, onDelete }: { agent: Agent; onDelete: (id: string) => void }) {
  const navigate = useNavigate()
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="transparent" size="sm" Icon={<MenuEllipsisDirectionVertical size="lg" />} aria-label="Agent actions" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content side="left" align="start">
        <DropdownMenu.Item icon={<ArrowDirectionRight />} onClick={() => navigate(`/agents/${agent.id}`)}>
          View details
        </DropdownMenu.Item>
        <DropdownMenu.Item icon={<EditOutline />}>Edit agent</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item icon={<TrashcanOutline />} status="critical" onClick={() => onDelete(agent.id)}>
          Delete agent
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export function AgentsTable() {
  const navigate = useNavigate()
  const { agents, removeAgent } = useAgents()

  return (
    <Table.Root width="full">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell noHover>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell noHover>Objective</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell noHover>Active on</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell noHover width="1">Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell noHover width="1" />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {agents.map(agent => (
          <Table.Row key={agent.id}>
            <Table.RowHeaderCell>
              <button
                onClick={() => navigate(`/agents/${agent.id}`)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                  color: vars.colors.text.neutral.default.default,
                  textDecoration: 'underline', textDecorationColor: 'transparent',
                }}
                onMouseEnter={e => (e.currentTarget.style.textDecorationColor = vars.colors.text.neutral.default.default)}
                onMouseLeave={e => (e.currentTarget.style.textDecorationColor = 'transparent')}
              >
                <Text weight="medium">{agent.name}</Text>
              </button>
            </Table.RowHeaderCell>
            <Table.Cell>
              <Inline space="075" alignY="center">
                <AgentTypeIcon agentType={agent.agentType} />
                <Text size="sm" color="secondary">{agent.objective}</Text>
              </Inline>
            </Table.Cell>
            <Table.Cell>
              <Inline space="050">
                {agent.activeOn.map(loc => (
                  <Badge key={loc} size="sm" status="neutral">{loc}</Badge>
                ))}
              </Inline>
            </Table.Cell>
            <Table.Cell>
              <StatusBadge enabled={agent.enabled} />
            </Table.Cell>
            <Table.Cell>
              <AgentRowActions agent={agent} onDelete={removeAgent} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
