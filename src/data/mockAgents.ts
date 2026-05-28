export type AgentType = 'MENU_AGENT' | 'ORDER_FIXER_AGENT' | 'PROMOTION_AGENT'

export interface AgentLocation {
  id: string
  name: string
  cycleStatus: 'optimising' | 'scheduled' | 'idle'
  totalOrders: number
  totalRevenue: number
  avgAov: number
  multiProductPct: number
  status: 'active' | 'inactive'
}

export interface AgentPromo {
  promoId: string
  label: string
  channelId: string
  channelName: string
  conditions: string[]   // 'underperforming' | 'flat' | 'overperforming'
  status: 'active' | 'paused'
}

export interface Agent {
  id: string
  name: string
  agentType: AgentType
  enabled: boolean
  objective: string
  activeOn: string[]
  createdAt: string
  locations: AgentLocation[]
  promos?: AgentPromo[]          // set for PROMOTION_AGENT
  campaignSource?: 'new' | 'existing'
}

export const MOCK_AGENTS: Agent[] = [
  {
    id: 'agent-1',
    name: 'Peak Hour Optimiser',
    agentType: 'MENU_AGENT',
    enabled: true,
    objective: 'Autonomous menu',
    activeOn: ['London Bridge', 'Shoreditch', '+3'],
    createdAt: '2026-02-12',
    locations: [
      { id: 'loc-1', name: 'London Bridge', cycleStatus: 'optimising', totalOrders: 1420, totalRevenue: 28400, avgAov: 20.0, multiProductPct: 42, status: 'active' },
      { id: 'loc-2', name: 'Shoreditch', cycleStatus: 'scheduled', totalOrders: 980, totalRevenue: 18600, avgAov: 19.0, multiProductPct: 38, status: 'active' },
      { id: 'loc-3', name: 'Canary Wharf', cycleStatus: 'idle', totalOrders: 740, totalRevenue: 15800, avgAov: 21.4, multiProductPct: 35, status: 'inactive' },
    ],
  },
  {
    id: 'agent-2',
    name: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    enabled: true,
    objective: 'Autonomous support',
    activeOn: ['Liverpool St', 'Victoria'],
    createdAt: '2026-03-01',
    locations: [
      { id: 'loc-4',  name: 'Liverpool St',        cycleStatus: 'optimising', totalOrders: 620,  totalRevenue: 14900, avgAov: 24.0, multiProductPct: 55, status: 'active' },
      { id: 'loc-5',  name: 'Victoria',             cycleStatus: 'optimising', totalOrders: 530,  totalRevenue: 12700, avgAov: 23.9, multiProductPct: 52, status: 'active' },
      { id: 'loc-6',  name: 'Waterloo',             cycleStatus: 'optimising', totalOrders: 710,  totalRevenue: 17200, avgAov: 24.2, multiProductPct: 58, status: 'active' },
      { id: 'loc-7',  name: 'King\'s Cross',        cycleStatus: 'scheduled',  totalOrders: 490,  totalRevenue: 11800, avgAov: 24.1, multiProductPct: 49, status: 'active' },
      { id: 'loc-8',  name: 'Paddington',           cycleStatus: 'optimising', totalOrders: 580,  totalRevenue: 13900, avgAov: 24.0, multiProductPct: 53, status: 'active' },
      { id: 'loc-9',  name: 'London Bridge',        cycleStatus: 'idle',       totalOrders: 440,  totalRevenue: 10500, avgAov: 23.9, multiProductPct: 47, status: 'active' },
      { id: 'loc-10', name: 'Canary Wharf',         cycleStatus: 'optimising', totalOrders: 660,  totalRevenue: 15800, avgAov: 23.9, multiProductPct: 56, status: 'active' },
      { id: 'loc-11', name: 'Stratford',            cycleStatus: 'scheduled',  totalOrders: 510,  totalRevenue: 12200, avgAov: 23.9, multiProductPct: 50, status: 'active' },
      { id: 'loc-12', name: 'Shoreditch',           cycleStatus: 'optimising', totalOrders: 590,  totalRevenue: 14200, avgAov: 24.1, multiProductPct: 54, status: 'active' },
      { id: 'loc-13', name: 'Brixton',              cycleStatus: 'optimising', totalOrders: 470,  totalRevenue: 11200, avgAov: 23.8, multiProductPct: 48, status: 'active' },
      { id: 'loc-14', name: 'Camden',               cycleStatus: 'scheduled',  totalOrders: 540,  totalRevenue: 12900, avgAov: 23.9, multiProductPct: 51, status: 'active' },
      { id: 'loc-15', name: 'Hackney',              cycleStatus: 'idle',       totalOrders: 380,  totalRevenue:  9100, avgAov: 23.9, multiProductPct: 43, status: 'inactive' },
      { id: 'loc-16', name: 'Islington',            cycleStatus: 'optimising', totalOrders: 430,  totalRevenue: 10300, avgAov: 24.0, multiProductPct: 46, status: 'active' },
      { id: 'loc-17', name: 'Clapham',              cycleStatus: 'optimising', totalOrders: 480,  totalRevenue: 11500, avgAov: 24.0, multiProductPct: 49, status: 'active' },
      { id: 'loc-18', name: 'Peckham',              cycleStatus: 'scheduled',  totalOrders: 350,  totalRevenue:  8400, avgAov: 24.0, multiProductPct: 41, status: 'active' },
      { id: 'loc-19', name: 'Elephant & Castle',   cycleStatus: 'optimising', totalOrders: 420,  totalRevenue: 10100, avgAov: 24.0, multiProductPct: 45, status: 'active' },
      { id: 'loc-20', name: 'Dalston',              cycleStatus: 'idle',       totalOrders: 360,  totalRevenue:  8600, avgAov: 23.9, multiProductPct: 42, status: 'active' },
      { id: 'loc-21', name: 'Bethnal Green',        cycleStatus: 'optimising', totalOrders: 400,  totalRevenue:  9600, avgAov: 24.0, multiProductPct: 44, status: 'active' },
      { id: 'loc-22', name: 'Greenwich',            cycleStatus: 'scheduled',  totalOrders: 460,  totalRevenue: 11000, avgAov: 23.9, multiProductPct: 48, status: 'active' },
      { id: 'loc-23', name: 'Lewisham',             cycleStatus: 'optimising', totalOrders: 390,  totalRevenue:  9300, avgAov: 23.8, multiProductPct: 43, status: 'active' },
      { id: 'loc-24', name: 'Hammersmith',          cycleStatus: 'optimising', totalOrders: 550,  totalRevenue: 13200, avgAov: 24.0, multiProductPct: 52, status: 'active' },
      { id: 'loc-25', name: 'Fulham',               cycleStatus: 'scheduled',  totalOrders: 410,  totalRevenue:  9800, avgAov: 23.9, multiProductPct: 45, status: 'active' },
      { id: 'loc-26', name: 'Putney',               cycleStatus: 'idle',       totalOrders: 340,  totalRevenue:  8100, avgAov: 23.8, multiProductPct: 40, status: 'inactive' },
      { id: 'loc-27', name: 'Wandsworth',           cycleStatus: 'optimising', totalOrders: 370,  totalRevenue:  8800, avgAov: 23.8, multiProductPct: 42, status: 'active' },
      { id: 'loc-28', name: 'Tooting',              cycleStatus: 'optimising', totalOrders: 320,  totalRevenue:  7700, avgAov: 24.1, multiProductPct: 39, status: 'active' },
      { id: 'loc-29', name: 'Balham',               cycleStatus: 'scheduled',  totalOrders: 360,  totalRevenue:  8600, avgAov: 23.9, multiProductPct: 41, status: 'active' },
      { id: 'loc-30', name: 'Stockwell',            cycleStatus: 'optimising', totalOrders: 330,  totalRevenue:  7900, avgAov: 23.9, multiProductPct: 40, status: 'active' },
      { id: 'loc-31', name: 'Vauxhall',             cycleStatus: 'optimising', totalOrders: 450,  totalRevenue: 10800, avgAov: 24.0, multiProductPct: 47, status: 'active' },
      { id: 'loc-32', name: 'Battersea',            cycleStatus: 'idle',       totalOrders: 380,  totalRevenue:  9100, avgAov: 24.0, multiProductPct: 43, status: 'active' },
      { id: 'loc-33', name: 'Nine Elms',            cycleStatus: 'scheduled',  totalOrders: 290,  totalRevenue:  6900, avgAov: 23.8, multiProductPct: 37, status: 'active' },
      { id: 'loc-34', name: 'Bermondsey',           cycleStatus: 'optimising', totalOrders: 440,  totalRevenue: 10500, avgAov: 23.9, multiProductPct: 46, status: 'active' },
      { id: 'loc-35', name: 'Borough',              cycleStatus: 'optimising', totalOrders: 500,  totalRevenue: 12000, avgAov: 24.0, multiProductPct: 50, status: 'active' },
      { id: 'loc-36', name: 'Southwark',            cycleStatus: 'scheduled',  totalOrders: 420,  totalRevenue: 10100, avgAov: 24.0, multiProductPct: 45, status: 'active' },
      { id: 'loc-37', name: 'Wapping',              cycleStatus: 'idle',       totalOrders: 270,  totalRevenue:  6500, avgAov: 24.1, multiProductPct: 35, status: 'inactive' },
      { id: 'loc-38', name: 'Stepney Green',        cycleStatus: 'optimising', totalOrders: 300,  totalRevenue:  7200, avgAov: 24.0, multiProductPct: 38, status: 'active' },
      { id: 'loc-39', name: 'Mile End',             cycleStatus: 'optimising', totalOrders: 340,  totalRevenue:  8200, avgAov: 24.1, multiProductPct: 40, status: 'active' },
      { id: 'loc-40', name: 'Bow',                  cycleStatus: 'scheduled',  totalOrders: 310,  totalRevenue:  7400, avgAov: 23.9, multiProductPct: 38, status: 'active' },
      { id: 'loc-41', name: 'Whitechapel',          cycleStatus: 'optimising', totalOrders: 460,  totalRevenue: 11000, avgAov: 23.9, multiProductPct: 48, status: 'active' },
      { id: 'loc-42', name: 'Aldgate',              cycleStatus: 'optimising', totalOrders: 520,  totalRevenue: 12500, avgAov: 24.0, multiProductPct: 51, status: 'active' },
      { id: 'loc-43', name: 'Bank',                 cycleStatus: 'scheduled',  totalOrders: 600,  totalRevenue: 14400, avgAov: 24.0, multiProductPct: 55, status: 'active' },
      { id: 'loc-44', name: 'Moorgate',             cycleStatus: 'optimising', totalOrders: 560,  totalRevenue: 13400, avgAov: 23.9, multiProductPct: 53, status: 'active' },
      { id: 'loc-45', name: 'Barbican',             cycleStatus: 'idle',       totalOrders: 310,  totalRevenue:  7400, avgAov: 23.9, multiProductPct: 38, status: 'active' },
      { id: 'loc-46', name: 'Farringdon',           cycleStatus: 'optimising', totalOrders: 480,  totalRevenue: 11500, avgAov: 24.0, multiProductPct: 49, status: 'active' },
      { id: 'loc-47', name: 'Holborn',              cycleStatus: 'optimising', totalOrders: 510,  totalRevenue: 12200, avgAov: 23.9, multiProductPct: 50, status: 'active' },
      { id: 'loc-48', name: 'Covent Garden',        cycleStatus: 'scheduled',  totalOrders: 640,  totalRevenue: 15400, avgAov: 24.1, multiProductPct: 57, status: 'active' },
      { id: 'loc-49', name: 'Soho',                 cycleStatus: 'optimising', totalOrders: 720,  totalRevenue: 17300, avgAov: 24.0, multiProductPct: 60, status: 'active' },
      { id: 'loc-50', name: 'Mayfair',              cycleStatus: 'optimising', totalOrders: 390,  totalRevenue:  9400, avgAov: 24.1, multiProductPct: 44, status: 'active' },
      { id: 'loc-51', name: 'Marylebone',           cycleStatus: 'idle',       totalOrders: 350,  totalRevenue:  8400, avgAov: 24.0, multiProductPct: 41, status: 'inactive' },
      { id: 'loc-52', name: 'Fitzrovia',            cycleStatus: 'scheduled',  totalOrders: 420,  totalRevenue: 10100, avgAov: 24.0, multiProductPct: 45, status: 'active' },
    ],
  },
  {
    id: 'agent-3',
    name: 'Weekend Deal Booster',
    agentType: 'PROMOTION_AGENT',
    enabled: false,
    objective: 'Promotions',
    activeOn: ['All locations'],
    createdAt: '2026-01-20',
    locations: [],
  },
]

export const MOCK_LOCATIONS = [
  { id: 'loc-1', name: 'London Bridge' },
  { id: 'loc-2', name: 'Shoreditch' },
  { id: 'loc-3', name: 'Canary Wharf' },
  { id: 'loc-4', name: 'Liverpool St' },
  { id: 'loc-5', name: 'Victoria' },
  { id: 'loc-6', name: 'Waterloo' },
]

export const MOCK_CHANNELS = [
  { id: 'all', name: 'All channels' },
  { id: 'uber-eats', name: 'Uber Eats' },
  { id: 'deliveroo', name: 'Deliveroo' },
  { id: 'just-eat', name: 'Just Eat' },
  { id: 'jahez', name: 'Jahez' },
  { id: 'talabat', name: 'Talabat' },
  { id: 'careem', name: 'Careem' },
  { id: 'hungerstation', name: 'HungerStation' },
  { id: 'noon-food', name: 'Noon Food' },
]

export const MOCK_MENUS = [
  { id: 'menu-1', name: 'Main Menu' },
  { id: 'menu-2', name: 'Lunch Menu' },
  { id: 'menu-3', name: 'Weekend Specials' },
]

