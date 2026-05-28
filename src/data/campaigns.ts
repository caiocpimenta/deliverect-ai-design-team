export type CampaignStatus = 'Live' | 'Scheduled' | 'Ended' | 'Paused' | 'Autonomous Agent'

export interface CampaignPromo {
  label: string
  channelName: string
  conditions: string[]   // 'underperforming' | 'flat' | 'overperforming'
  status: 'active' | 'paused'
}

export interface Campaign {
  id: string
  name: string
  initials: string
  avatarColor: string
  channels: string[]   // channel IDs matching MOCK_CHANNELS
  type: string         // promotion type label used for grouping in Promotion Agent
  status: CampaignStatus
  locations: string
  startDate: string
  endDate: string
  promos?: CampaignPromo[]   // set for Autonomous Agent campaigns
}

const AVATAR_COLORS = [
  '#E8B4B8', '#B8D4E8', '#B8E8C8', '#E8D8B4',
  '#D4B8E8', '#B8E8E8', '#E8D4B8', '#C8E8B8',
]

export function makeInitials(name: string): string {
  const words = name.trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

export function pickAvatarColor(seed: string): string {
  let hash = 0
  for (const c of seed) hash = (hash * 31 + c.charCodeAt(0)) & 0xffff
  return AVATAR_COLORS[hash % AVATAR_COLORS.length]
}

export const DISCOUNT_TYPE_LABELS: Record<string, string> = {
  'menu-item': 'Menu item discount',
  'basket': 'Basket discount',
  'free-delivery': 'Free delivery',
  'spend-save': 'Spend & save',
}

export const INITIAL_CAMPAIGNS: Campaign[] = [
  {
    id: 'dcm-1',
    name: "Valentine's Day Discount Campaign",
    initials: 'VD',
    avatarColor: '#E8B4B8',
    channels: ['jahez', 'uber-eats'],
    type: 'Percentage discount',
    status: 'Scheduled',
    locations: 'All locations',
    startDate: '14/02/2026',
    endDate: 'No end date',
  },
  {
    id: 'dcm-2',
    name: 'Ramadan Special Offer',
    initials: 'RS',
    avatarColor: '#B8D4E8',
    channels: ['talabat'],
    type: 'Spend & save',
    status: 'Live',
    locations: '3 locations',
    startDate: '01/03/2026',
    endDate: '30/03/2026',
  },
  {
    id: 'dcm-3',
    name: 'Summer Bundle Deals',
    initials: 'SB',
    avatarColor: '#B8E8C8',
    channels: ['careem', 'hungerstation'],
    type: 'Bundle deal',
    status: 'Live',
    locations: '5 locations',
    startDate: '01/06/2026',
    endDate: '31/08/2026',
  },
  {
    id: 'dcm-4',
    name: 'National Day Campaign',
    initials: 'ND',
    avatarColor: '#E8D8B4',
    channels: ['noon-food'],
    type: 'Percentage discount',
    status: 'Scheduled',
    locations: 'All locations',
    startDate: '23/09/2026',
    endDate: '25/09/2026',
  },
  {
    id: 'dcm-ai-1',
    name: 'AI Weekend Flash Sale',
    initials: 'AI',
    avatarColor: '#D4B8E8',
    channels: ['jahez', 'talabat'],
    type: 'Menu item discount',
    status: 'Autonomous Agent',
    locations: 'All locations',
    startDate: 'AI-managed',
    endDate: 'AI-managed',
    promos: [
      { label: 'Buy One Get One', channelName: 'Jahez', conditions: ['underperforming'], status: 'active' },
      { label: 'Happy Hour', channelName: 'Talabat', conditions: ['flat'], status: 'active' },
      { label: 'Free delivery', channelName: 'Jahez', conditions: ['overperforming'], status: 'paused' },
    ],
  },
  {
    id: 'dcm-5',
    name: 'Black Friday Deals',
    initials: 'BF',
    avatarColor: '#D4B8E8',
    channels: ['uber-eats', 'deliveroo'],
    type: 'Percentage discount',
    status: 'Ended',
    locations: '2 locations',
    startDate: '25/11/2025',
    endDate: '30/11/2025',
  },
]
