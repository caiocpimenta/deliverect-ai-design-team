export type AgentType = 'MENU_AGENT' | 'ORDER_FIXER_AGENT' | 'PROMOTION_AGENT'

export interface AgentLocation {
  id: string
  name: string
  addedAt: string
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
      { id: 'loc-1', name: 'London Bridge', addedAt: '2026-02-12', cycleStatus: 'optimising', totalOrders: 1420, totalRevenue: 28400, avgAov: 20.0, multiProductPct: 42, status: 'active' },
      { id: 'loc-2', name: 'Shoreditch',    addedAt: '2026-02-12', cycleStatus: 'scheduled',  totalOrders: 980,  totalRevenue: 18600, avgAov: 19.0, multiProductPct: 38, status: 'active' },
      { id: 'loc-3', name: 'Canary Wharf',  addedAt: '2026-02-12', cycleStatus: 'idle',       totalOrders: 740,  totalRevenue: 15800, avgAov: 21.4, multiProductPct: 35, status: 'inactive' },
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
      // ── Added March 2026 (original batch) ───────────────────────────────────
      { id: 'loc-4',  name: 'Liverpool St',      addedAt: '2026-03-01', cycleStatus: 'optimising', totalOrders: 620, totalRevenue: 14900, avgAov: 24.0, multiProductPct: 55, status: 'active' },
      { id: 'loc-5',  name: 'Victoria',           addedAt: '2026-03-01', cycleStatus: 'optimising', totalOrders: 530, totalRevenue: 12700, avgAov: 23.9, multiProductPct: 52, status: 'active' },
      { id: 'loc-6',  name: 'Waterloo',           addedAt: '2026-03-01', cycleStatus: 'optimising', totalOrders: 710, totalRevenue: 17200, avgAov: 24.2, multiProductPct: 58, status: 'active' },
      { id: 'loc-7',  name: "King's Cross",       addedAt: '2026-03-01', cycleStatus: 'scheduled',  totalOrders: 490, totalRevenue: 11800, avgAov: 24.1, multiProductPct: 49, status: 'active' },
      { id: 'loc-8',  name: 'Paddington',         addedAt: '2026-03-01', cycleStatus: 'optimising', totalOrders: 580, totalRevenue: 13900, avgAov: 24.0, multiProductPct: 53, status: 'active' },
      { id: 'loc-9',  name: 'London Bridge',      addedAt: '2026-03-01', cycleStatus: 'idle',       totalOrders: 440, totalRevenue: 10500, avgAov: 23.9, multiProductPct: 47, status: 'active' },
      { id: 'loc-10', name: 'Canary Wharf',       addedAt: '2026-03-01', cycleStatus: 'optimising', totalOrders: 660, totalRevenue: 15800, avgAov: 23.9, multiProductPct: 56, status: 'active' },
      { id: 'loc-11', name: 'Stratford',          addedAt: '2026-03-01', cycleStatus: 'scheduled',  totalOrders: 510, totalRevenue: 12200, avgAov: 23.9, multiProductPct: 50, status: 'active' },
      { id: 'loc-12', name: 'Shoreditch',         addedAt: '2026-03-01', cycleStatus: 'optimising', totalOrders: 590, totalRevenue: 14200, avgAov: 24.1, multiProductPct: 54, status: 'active' },
      { id: 'loc-13', name: 'Brixton',            addedAt: '2026-03-01', cycleStatus: 'optimising', totalOrders: 470, totalRevenue: 11200, avgAov: 23.8, multiProductPct: 48, status: 'active' },
      { id: 'loc-14', name: 'Camden',             addedAt: '2026-03-01', cycleStatus: 'scheduled',  totalOrders: 540, totalRevenue: 12900, avgAov: 23.9, multiProductPct: 51, status: 'active' },
      { id: 'loc-15', name: 'Hackney',            addedAt: '2026-03-01', cycleStatus: 'idle',       totalOrders: 380, totalRevenue:  9100, avgAov: 23.9, multiProductPct: 43, status: 'inactive' },
      { id: 'loc-16', name: 'Islington',          addedAt: '2026-03-01', cycleStatus: 'optimising', totalOrders: 430, totalRevenue: 10300, avgAov: 24.0, multiProductPct: 46, status: 'active' },
      { id: 'loc-17', name: 'Clapham',            addedAt: '2026-03-01', cycleStatus: 'optimising', totalOrders: 480, totalRevenue: 11500, avgAov: 24.0, multiProductPct: 49, status: 'active' },
      { id: 'loc-18', name: 'Peckham',            addedAt: '2026-03-01', cycleStatus: 'scheduled',  totalOrders: 350, totalRevenue:  8400, avgAov: 24.0, multiProductPct: 41, status: 'active' },
      { id: 'loc-19', name: 'Elephant & Castle',  addedAt: '2026-03-01', cycleStatus: 'optimising', totalOrders: 420, totalRevenue: 10100, avgAov: 24.0, multiProductPct: 45, status: 'active' },
      { id: 'loc-20', name: 'Dalston',            addedAt: '2026-03-01', cycleStatus: 'idle',       totalOrders: 360, totalRevenue:  8600, avgAov: 23.9, multiProductPct: 42, status: 'active' },
      // ── Added April 2026 ─────────────────────────────────────────────────────
      { id: 'loc-21', name: 'Bethnal Green',      addedAt: '2026-04-15', cycleStatus: 'optimising', totalOrders: 400, totalRevenue:  9600, avgAov: 24.0, multiProductPct: 44, status: 'active' },
      { id: 'loc-22', name: 'Greenwich',          addedAt: '2026-04-15', cycleStatus: 'scheduled',  totalOrders: 460, totalRevenue: 11000, avgAov: 23.9, multiProductPct: 48, status: 'active' },
      { id: 'loc-23', name: 'Lewisham',           addedAt: '2026-04-15', cycleStatus: 'optimising', totalOrders: 390, totalRevenue:  9300, avgAov: 23.8, multiProductPct: 43, status: 'active' },
      { id: 'loc-24', name: 'Hammersmith',        addedAt: '2026-04-15', cycleStatus: 'optimising', totalOrders: 550, totalRevenue: 13200, avgAov: 24.0, multiProductPct: 52, status: 'active' },
      { id: 'loc-25', name: 'Fulham',             addedAt: '2026-04-15', cycleStatus: 'scheduled',  totalOrders: 410, totalRevenue:  9800, avgAov: 23.9, multiProductPct: 45, status: 'active' },
      { id: 'loc-26', name: 'Putney',             addedAt: '2026-04-15', cycleStatus: 'idle',       totalOrders: 340, totalRevenue:  8100, avgAov: 23.8, multiProductPct: 40, status: 'inactive' },
      { id: 'loc-27', name: 'Wandsworth',         addedAt: '2026-04-15', cycleStatus: 'optimising', totalOrders: 370, totalRevenue:  8800, avgAov: 23.8, multiProductPct: 42, status: 'active' },
      { id: 'loc-28', name: 'Tooting',            addedAt: '2026-04-15', cycleStatus: 'optimising', totalOrders: 320, totalRevenue:  7700, avgAov: 24.1, multiProductPct: 39, status: 'active' },
      { id: 'loc-29', name: 'Balham',             addedAt: '2026-04-15', cycleStatus: 'scheduled',  totalOrders: 360, totalRevenue:  8600, avgAov: 23.9, multiProductPct: 41, status: 'active' },
      { id: 'loc-30', name: 'Stockwell',          addedAt: '2026-04-15', cycleStatus: 'optimising', totalOrders: 330, totalRevenue:  7900, avgAov: 23.9, multiProductPct: 40, status: 'active' },
      { id: 'loc-31', name: 'Vauxhall',           addedAt: '2026-04-15', cycleStatus: 'optimising', totalOrders: 450, totalRevenue: 10800, avgAov: 24.0, multiProductPct: 47, status: 'active' },
      { id: 'loc-32', name: 'Battersea',          addedAt: '2026-04-15', cycleStatus: 'idle',       totalOrders: 380, totalRevenue:  9100, avgAov: 24.0, multiProductPct: 43, status: 'active' },
      { id: 'loc-33', name: 'Nine Elms',          addedAt: '2026-04-15', cycleStatus: 'scheduled',  totalOrders: 290, totalRevenue:  6900, avgAov: 23.8, multiProductPct: 37, status: 'active' },
      { id: 'loc-34', name: 'Bermondsey',         addedAt: '2026-04-15', cycleStatus: 'optimising', totalOrders: 440, totalRevenue: 10500, avgAov: 23.9, multiProductPct: 46, status: 'active' },
      { id: 'loc-35', name: 'Borough',            addedAt: '2026-04-15', cycleStatus: 'optimising', totalOrders: 500, totalRevenue: 12000, avgAov: 24.0, multiProductPct: 50, status: 'active' },
      // ── Added May 2026 ───────────────────────────────────────────────────────
      { id: 'loc-36', name: 'Southwark',          addedAt: '2026-05-10', cycleStatus: 'scheduled',  totalOrders: 420, totalRevenue: 10100, avgAov: 24.0, multiProductPct: 45, status: 'active' },
      { id: 'loc-37', name: 'Wapping',            addedAt: '2026-05-10', cycleStatus: 'idle',       totalOrders: 270, totalRevenue:  6500, avgAov: 24.1, multiProductPct: 35, status: 'inactive' },
      { id: 'loc-38', name: 'Stepney Green',      addedAt: '2026-05-10', cycleStatus: 'optimising', totalOrders: 300, totalRevenue:  7200, avgAov: 24.0, multiProductPct: 38, status: 'active' },
      { id: 'loc-39', name: 'Mile End',           addedAt: '2026-05-10', cycleStatus: 'optimising', totalOrders: 340, totalRevenue:  8200, avgAov: 24.1, multiProductPct: 40, status: 'active' },
      { id: 'loc-40', name: 'Bow',                addedAt: '2026-05-10', cycleStatus: 'scheduled',  totalOrders: 310, totalRevenue:  7400, avgAov: 23.9, multiProductPct: 38, status: 'active' },
      { id: 'loc-41', name: 'Whitechapel',        addedAt: '2026-05-10', cycleStatus: 'optimising', totalOrders: 460, totalRevenue: 11000, avgAov: 23.9, multiProductPct: 48, status: 'active' },
      { id: 'loc-42', name: 'Aldgate',            addedAt: '2026-05-10', cycleStatus: 'optimising', totalOrders: 520, totalRevenue: 12500, avgAov: 24.0, multiProductPct: 51, status: 'active' },
      { id: 'loc-43', name: 'Bank',               addedAt: '2026-05-10', cycleStatus: 'scheduled',  totalOrders: 600, totalRevenue: 14400, avgAov: 24.0, multiProductPct: 55, status: 'active' },
      { id: 'loc-44', name: 'Moorgate',           addedAt: '2026-05-10', cycleStatus: 'optimising', totalOrders: 560, totalRevenue: 13400, avgAov: 23.9, multiProductPct: 53, status: 'active' },
      { id: 'loc-45', name: 'Barbican',           addedAt: '2026-05-10', cycleStatus: 'idle',       totalOrders: 310, totalRevenue:  7400, avgAov: 23.9, multiProductPct: 38, status: 'active' },
      { id: 'loc-46', name: 'Farringdon',         addedAt: '2026-05-10', cycleStatus: 'optimising', totalOrders: 480, totalRevenue: 11500, avgAov: 24.0, multiProductPct: 49, status: 'active' },
      // ── Added June 2026 ──────────────────────────────────────────────────────
      { id: 'loc-47', name: 'Holborn',            addedAt: '2026-06-01', cycleStatus: 'optimising', totalOrders: 510, totalRevenue: 12200, avgAov: 23.9, multiProductPct: 50, status: 'active' },
      { id: 'loc-48', name: 'Covent Garden',      addedAt: '2026-06-01', cycleStatus: 'scheduled',  totalOrders: 640, totalRevenue: 15400, avgAov: 24.1, multiProductPct: 57, status: 'active' },
      { id: 'loc-49', name: 'Soho',               addedAt: '2026-06-01', cycleStatus: 'optimising', totalOrders: 720, totalRevenue: 17300, avgAov: 24.0, multiProductPct: 60, status: 'active' },
      { id: 'loc-50', name: 'Mayfair',            addedAt: '2026-06-02', cycleStatus: 'optimising', totalOrders: 390, totalRevenue:  9400, avgAov: 24.1, multiProductPct: 44, status: 'active' },
      { id: 'loc-51', name: 'Marylebone',         addedAt: '2026-06-02', cycleStatus: 'idle',       totalOrders: 350, totalRevenue:  8400, avgAov: 24.0, multiProductPct: 41, status: 'inactive' },
      { id: 'loc-52', name: 'Fitzrovia',          addedAt: '2026-06-02', cycleStatus: 'scheduled',  totalOrders: 420, totalRevenue: 10100, avgAov: 24.0, multiProductPct: 45, status: 'active' },
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

// ── Bulk Menu-agent locations (overview table demo data) ───────────────────────
const MENU_EXTRA_LOCATION_NAMES = [
  'Angel', 'Archway', 'Highbury', 'Finsbury Park', 'Crouch End', 'Muswell Hill',
  'Highgate', 'Tufnell Park', 'Kentish Town', 'Chalk Farm', 'Belsize Park',
  'Hampstead', 'Swiss Cottage', 'Kilburn', 'Maida Vale', 'Notting Hill',
  'Bayswater', 'Ladbroke Grove', "Shepherd's Bush", 'White City', 'Acton',
  'Ealing', 'Chiswick', 'Brentford', 'Richmond', 'Kew', 'Barnes', 'Earlsfield',
  'Wimbledon', 'Colliers Wood', 'Morden', 'Mitcham', 'Streatham', 'Tulse Hill',
  'Herne Hill', 'Dulwich', 'Forest Hill', 'Sydenham', 'Catford', 'Deptford',
  'New Cross', 'Surrey Quays', 'Rotherhithe', 'Canada Water', 'Limehouse',
  'Poplar', 'Canning Town', 'West Ham', 'Plaistow', 'Upton Park', 'East Ham',
  'Barking', 'Ilford', 'Walthamstow', 'Leyton', 'Leytonstone', 'Wanstead',
  'Woodford', 'Chingford', 'Tottenham', 'Seven Sisters', 'Wood Green',
  'Bounds Green', 'Palmers Green', 'Southgate', 'Enfield', 'Edmonton', 'Finchley',
  'Golders Green', 'Hendon', 'Colindale', 'Edgware', 'Stanmore', 'Harrow',
  'Wembley', 'Willesden', 'Cricklewood',
]

const MENU_LOCATION_ADDED_DATES = ['2026-02-12', '2026-03-18', '2026-04-22', '2026-05-14', '2026-06-02']
const MENU_CYCLE_STATUSES: AgentLocation['cycleStatus'][] = ['optimising', 'scheduled', 'idle']

function makeMenuLocations(names: string[], startId: number): AgentLocation[] {
  return names.map((name, i) => {
    const totalOrders = 300 + ((i * 37) % 900)
    const avgAov = Math.round((19 + ((i * 7) % 60) / 10) * 10) / 10
    return {
      id: `loc-m${startId + i}`,
      name,
      addedAt: MENU_LOCATION_ADDED_DATES[i % MENU_LOCATION_ADDED_DATES.length],
      cycleStatus: MENU_CYCLE_STATUSES[i % MENU_CYCLE_STATUSES.length],
      totalOrders,
      totalRevenue: Math.round(totalOrders * avgAov),
      avgAov,
      multiProductPct: 35 + ((i * 13) % 30),
      status: i % 11 === 0 ? 'inactive' : 'active',
    }
  })
}

// Grow the Autonomous Menu agent's location list to 80 for the overview table.
const menuAgent = MOCK_AGENTS.find(a => a.id === 'agent-1')
if (menuAgent) {
  const needed = 80 - menuAgent.locations.length
  menuAgent.locations.push(...makeMenuLocations(MENU_EXTRA_LOCATION_NAMES.slice(0, needed), 1))
}

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
