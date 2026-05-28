import { createContext, useContext, useState, type ReactNode } from 'react'
import { type Campaign, INITIAL_CAMPAIGNS } from '../data/campaigns'

interface CampaignsContextValue {
  campaigns: Campaign[]
  addCampaign: (campaign: Campaign) => void
  removeCampaign: (id: string) => void
}

const CampaignsContext = createContext<CampaignsContextValue | null>(null)

export function CampaignsProvider({ children }: { children: ReactNode }) {
  const [campaigns, setCampaigns] = useState<Campaign[]>(INITIAL_CAMPAIGNS)

  const addCampaign = (campaign: Campaign) =>
    setCampaigns(prev => [...prev, campaign])

  const removeCampaign = (id: string) =>
    setCampaigns(prev => prev.filter(c => c.id !== id))

  return (
    <CampaignsContext.Provider value={{ campaigns, addCampaign, removeCampaign }}>
      {children}
    </CampaignsContext.Provider>
  )
}

export function useCampaigns() {
  const ctx = useContext(CampaignsContext)
  if (!ctx) throw new Error('useCampaigns must be used within CampaignsProvider')
  return ctx
}
