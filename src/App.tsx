import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { AgentsProvider } from './context/AgentsContext'
import { CampaignsProvider } from './context/CampaignsContext'
import { MissionControlPage } from './pages/MissionControlPage'
import { AIPromoAgentPage } from './pages/AIPromoAgentPage'
import { AgentDetailPage } from './pages/AgentDetailPage'
import { CreateOverviewPage } from './pages/create/CreateOverviewPage'
import { MenuAgentPage } from './pages/create/MenuAgentPage'
import { FixerAgentPage } from './pages/create/FixerAgentPage'
import { PromotionAgentPage } from './pages/create/PromotionAgentPage'
import { CampaignsPage } from './pages/CampaignsPage'
import { CreateCampaignPage } from './pages/CreateCampaignPage'
import { AIHomeAPage } from './pages/AIHomeAPage'
import { AIHomeBPage } from './pages/AIHomeBPage'
import { AIHomeCPage } from './pages/AIHomeCPage'
import { AIHomeDPage } from './pages/AIHomeDPage'
import { MenuPreviewPage } from './pages/MenuPreviewPage'
import { AnalyticsPage } from './pages/AnalyticsPage'

export default function App() {
  return (
    <AgentsProvider>
    <CampaignsProvider>
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/agents" replace />} />
        <Route path="/agents" element={<MissionControlPage />} />
        <Route path="/agents/create" element={<CreateOverviewPage />} />
        <Route path="/agents/create/menu-agent" element={<MenuAgentPage />} />
        <Route path="/agents/create/promotion-agent" element={<PromotionAgentPage />} />
        <Route path="/agents/create/fixer-agent" element={<FixerAgentPage />} />
        <Route path="/agents/:agentId/menu-preview" element={<MenuPreviewPage />} />
        <Route path="/agents/:agentId" element={<AgentDetailPage />} />
        <Route path="/promo-agent" element={<AIPromoAgentPage />} />
        <Route path="/menu-items" element={<PlaceholderPage title="Menu Items" />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
        <Route path="/home-a" element={<AIHomeAPage />} />
        <Route path="/home-b" element={<AIHomeBPage />} />
        <Route path="/home-c" element={<AIHomeCPage />} />
        <Route path="/home-d" element={<AIHomeDPage />} />
        <Route path="/dcm/campaigns" element={<CampaignsPage />} />
        <Route path="/dcm/campaigns/new" element={<CreateCampaignPage />} />
      </Routes>
    </AppLayout>
    </CampaignsProvider>
    </AgentsProvider>
  )
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div style={{ padding: '24px', color: '#666' }}>{title} (coming soon)</div>
  )
}
