import { createContext, useContext, useState, type ReactNode } from 'react'
import { type Agent, MOCK_AGENTS } from '../data/mockAgents'

interface AgentsContextValue {
  agents: Agent[]
  addAgent: (agent: Agent) => void
  removeAgent: (id: string) => void
}

const AgentsContext = createContext<AgentsContextValue | null>(null)

export function AgentsProvider({ children }: { children: ReactNode }) {
  const [agents, setAgents] = useState<Agent[]>(MOCK_AGENTS)

  const addAgent = (agent: Agent) => setAgents(prev => [...prev, agent])
  const removeAgent = (id: string) => setAgents(prev => prev.filter(a => a.id !== id))

  return (
    <AgentsContext.Provider value={{ agents, addAgent, removeAgent }}>
      {children}
    </AgentsContext.Provider>
  )
}

export function useAgents() {
  const ctx = useContext(AgentsContext)
  if (!ctx) throw new Error('useAgents must be used within AgentsProvider')
  return ctx
}
