import { MOCK_AGENTS, type AgentType } from './mockAgents'

export type LogType = 'optimisation' | 'publication' | 'report'

export interface ReportMetric {
  label: string
  test: string
  control?: string
}

export interface UpsellGroup {
  name: string
  attach: string
}

export interface CategoryConversion {
  name: string
  conversion: string
}

export interface ReportData {
  verdict: 'inconclusive' | 'positive' | 'negative'
  verdictLabel: string
  appliedDate: string
  trackedPeriod: string
  overview: string
  metrics: ReportMetric[]
  keyTakeaways: string[]
  whatWasChanged: {
    categoriesRepositioned: number
    categoryNames: string[]
    upsellGroups: UpsellGroup[]
  }
  categoryConversions: CategoryConversion[]
  topSellers: string[]
}

export interface AgentLog {
  id: string
  agentId: string
  agentName: string
  agentType: AgentType
  logType: LogType
  action: string
  detail: string
  location: string
  timestamp: string
  status: 'success' | 'info' | 'warning'
  permissions: string[]
  reason: string
  channels?: string[]
  report?: ReportData
}

export const PERMISSION_LABELS: Record<string, string> = {
  // Autonomous menu
  position:      'Position',
  upsells:       'Upsells',
  meal_deals:    'Meal deals',
  content:       'Content',
  best_sellers:  'Best sellers',
  auto_publish:  'Auto publish',
  // Autonomous support
  sync_products:    'Sync products',
  snooze_products:  'Snooze products',
  publish_menu:     'Publish menu',
  // Promotions — on-platform
  'ue-bogo':          'BOGO',
  'ue-free-item':     'Free item',
  'ue-pct-discount':  '% discount',
  'ue-free-delivery': 'Free delivery',
  'ue-happy-hour':    'Happy hour',
  'ue-bundle':        'Bundle',
  'dr-pct-off':       '% off',
  'dr-free-item':     'Free item',
  'dr-spend-save':    'Spend & save',
  'dr-free-delivery': 'Free delivery',
  'je-pct-discount':  '% discount',
  'je-voucher':       'Voucher',
  'je-multibuy':      'Multi-buy',
  // Promotions — off-platform
  'facebook-ads':       'Facebook Ads',
  'google-ads':         'Google Ads',
  'email-campaign':     'Email',
  'push-notification':  'Push',
}

const SAMPLE_REPORT: ReportData = {
  verdict: 'inconclusive',
  verdictLabel: 'Inconclusive (baseline period)',
  appliedDate: '8 May 2026',
  trackedPeriod: '8–11 May 2026',
  overview: 'There was no prior data for the period immediately before the test, so this run establishes a brand-new performance baseline for the menu. Early signals are strong: the new upsell groups — particularly Crispy Sides & Loaded Fries (86.35% conversion) — are working, and 93% of orders are multi-product. The control location tracked slightly higher in total revenue, but this location is winning on multi-product rate. This first window gives a clean foundation for measuring future change.',
  metrics: [
    { label: 'Orders',            test: '923',         control: '967' },
    { label: 'Revenue',           test: '£21,245.87',  control: '£22,424.47' },
    { label: 'Avg order value',   test: '£23.02',      control: '£23.19' },
    { label: 'Avg basket size',   test: '8.17 items',  control: '—' },
    { label: 'Multi-product orders', test: '93%',      control: '92%' },
  ],
  keyTakeaways: [
    'The test location generated 923 orders and £21,245.87 in revenue during the tracked post-optimisation period.',
    'Average order value settled at £23.02, basket size 8.17 items.',
    '93% of all transactions were multi-product orders.',
    'The control location ran slightly ahead on volume — 967 orders, £22,424.47.',
  ],
  whatWasChanged: {
    categoriesRepositioned: 13,
    categoryNames: ['Galactic Range', 'Value deals', 'Family Bundles', 'Flame-Grilled Beef', 'Crispy Chicken', 'Gourmet Kings', 'Vegan', 'Made for Sharing', 'Sides', 'Kids', 'Desserts', 'Drinks', 'Sauces'],
    upsellGroups: [
      { name: 'Signature Dips & Sauces',        attach: '90.0% attach' },
      { name: 'Chilled Drinks',                  attach: '87.5% attach' },
      { name: 'Crispy Sides & Loaded Fries',     attach: '86.35% conversion' },
      { name: "Sweet Treats & Ben & Jerry's",    attach: '—' },
    ],
  },
  categoryConversions: [
    { name: 'Sides and Fries',           conversion: '88.30%' },
    { name: 'Flame-Grilled Beef Meals',  conversion: '69.12%' },
    { name: 'Drinks',                    conversion: '62.84%' },
    { name: 'Vegan and Plant-Based',     conversion: '5.09%' },
  ],
  topSellers: ['Large Fries (918 units)', 'Whopper', 'Chicken Royale', '6 Chicken Nuggets', 'Onion Rings'],
}

export const MOCK_LOGS: AgentLog[] = [
  {
    id: 'log-2',
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    logType: 'optimisation',
    action: 'Item sync',
    detail: 'Menu items synced across Uber Eats and Deliveroo after mismatch detected between POS and channel catalogue.',
    location: 'Liverpool St',
    timestamp: '2026-05-19T11:30:00Z',
    status: 'success',
    permissions: ['sync_products'],
    reason: 'Product catalogue mismatch detected between POS and delivery channel — 6 items were out of sync.',
  },
  {
    id: 'log-2b',
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    logType: 'optimisation',
    action: 'Item snooze',
    detail: '3 out-of-stock items snoozed on Just Eat after repeated failed orders detected at this location.',
    location: 'Victoria',
    timestamp: '2026-05-19T09:15:00Z',
    status: 'success',
    permissions: ['snooze_products'],
    reason: 'Items flagged as unavailable by kitchen — agent snoozed them to prevent further failed orders.',
  },
  {
    id: 'log-2c',
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    logType: 'optimisation',
    action: 'Publish menus',
    detail: 'Updated menu pushed live to Uber Eats and Deliveroo following a price correction on 4 items.',
    location: 'Canary Wharf',
    timestamp: '2026-05-18T22:05:00Z',
    status: 'success',
    permissions: ['publish_menu'],
    reason: 'Price correction applied to 4 items — menu re-published to propagate changes to all channels.',
  },
  {
    id: 'log-2d',
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    logType: 'optimisation',
    action: 'Item sync',
    detail: 'Modifier groups re-synced on Deliveroo after optional add-ons stopped appearing at checkout.',
    location: "King's Cross",
    timestamp: '2026-05-18T14:42:00Z',
    status: 'warning',
    permissions: ['sync_products'],
    reason: 'Modifier group missing from channel payload — re-sync triggered to restore correct checkout options.',
  },
  {
    id: 'log-2e',
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    logType: 'optimisation',
    action: 'Item snooze',
    detail: '"Pulled Pork Burger" and "Loaded Fries" snoozed on all channels — supplier delivery delayed.',
    location: 'Waterloo',
    timestamp: '2026-05-17T08:30:00Z',
    status: 'success',
    permissions: ['snooze_products'],
    reason: 'Kitchen reported stock unavailability — agent snoozed affected items to prevent customer disappointment.',
  },
  {
    id: 'log-2f',
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    logType: 'optimisation',
    action: 'Publish menus',
    detail: 'Seasonal menu update published to Uber Eats, Deliveroo, and Just Eat after approval.',
    location: 'Shoreditch',
    timestamp: '2026-05-16T20:00:00Z',
    status: 'success',
    permissions: ['publish_menu'],
    reason: 'Seasonal item additions approved — agent published the updated menu across all connected channels.',
  },
  {
    id: 'log-2g',
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    logType: 'optimisation',
    action: 'Item sync',
    detail: 'New breakfast items synced to Just Eat — items were live on POS but missing from the channel.',
    location: 'London Bridge',
    timestamp: '2026-05-15T07:55:00Z',
    status: 'success',
    permissions: ['sync_products'],
    reason: 'Breakfast menu expansion detected on POS — 5 new items missing from Just Eat catalogue.',
  },
  {
    id: 'log-2h',
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    logType: 'optimisation',
    action: 'Item snooze',
    detail: '2 unavailable items snoozed and updated menu immediately re-published to Deliveroo.',
    location: 'Paddington',
    timestamp: '2026-05-14T13:20:00Z',
    status: 'success',
    permissions: ['snooze_products', 'publish_menu'],
    reason: 'Items flagged unavailable mid-service — agent snoozed them and re-published to minimise order failures.',
  },
  {
    id: 'log-2i',
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    logType: 'optimisation',
    action: 'Item sync',
    detail: 'Image assets and descriptions re-synced on Uber Eats after a partial upload failure.',
    location: 'Bethnal Green',
    timestamp: '2026-05-13T16:10:00Z',
    status: 'warning',
    permissions: ['sync_products'],
    reason: 'Partial sync failure detected on Uber Eats — image assets and descriptions were incomplete for 3 items.',
  },
  {
    id: 'log-2j',
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    logType: 'optimisation',
    action: 'Publish menus',
    detail: 'Price increase for 7 items published to all channels following manager approval.',
    location: 'Hammersmith',
    timestamp: '2026-05-12T11:00:00Z',
    status: 'success',
    permissions: ['publish_menu'],
    reason: 'Approved price revision applied — menu re-published to all 3 channels to reflect updated pricing.',
  },
  {
    id: 'log-3',
    agentId: 'agent-3',
    agentName: 'Weekend Deal Booster',
    agentType: 'PROMOTION_AGENT',
    logType: 'optimisation',
    action: 'Promotion activated',
    detail: '15% weekend discount triggered on Uber Eats and Deliveroo — underperforming threshold met',
    location: 'All locations',
    timestamp: '2026-05-07T10:55:00Z',
    status: 'success',
    permissions: ['ue-pct-discount', 'dr-pct-off'],
    reason: 'Sales dropped 22% below weekly average across Uber Eats and Deliveroo — underperforming threshold of 20% exceeded.',
  },
  {
    id: 'log-5',
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    logType: 'optimisation',
    action: 'Item snooze',
    detail: '"Vegan Wrap" snoozed on Uber Eats — item marked as out of stock by kitchen at opening.',
    location: 'Victoria',
    timestamp: '2026-05-11T08:47:00Z',
    status: 'success',
    permissions: ['snooze_products'],
    reason: 'Kitchen marked item as unavailable at start of service — agent snoozed it automatically to avoid failed orders.',
  },
  {
    id: 'log-7',
    agentId: 'agent-3',
    agentName: 'Weekend Deal Booster',
    agentType: 'PROMOTION_AGENT',
    logType: 'optimisation',
    action: 'Promotion paused',
    detail: 'Revenue target reached — discount and bundle deal paused automatically',
    location: 'All locations',
    timestamp: '2026-05-06T16:05:00Z',
    status: 'info',
    permissions: ['ue-pct-discount', 'ue-bundle'],
    reason: 'Revenue target of £2,400 reached for the week. Agent paused active promotions to avoid margin erosion.',
  },
  {
    id: 'log-8',
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    logType: 'optimisation',
    action: 'Item sync',
    detail: 'Full catalogue re-sync performed and updated menu published after a channel integration reset.',
    location: 'Liverpool St',
    timestamp: '2026-05-09T14:33:00Z',
    status: 'success',
    permissions: ['sync_products', 'publish_menu'],
    reason: 'Channel integration reset detected — full re-sync and republish triggered to restore correct menu state.',
  },
  {
    id: 'log-10',
    agentId: 'agent-3',
    agentName: 'Weekend Deal Booster',
    agentType: 'PROMOTION_AGENT',
    logType: 'optimisation',
    action: 'Promotion created',
    detail: 'Flat-period discount and happy hour offer auto-generated for Friday evening — email campaign triggered',
    location: 'All locations',
    timestamp: '2026-05-05T20:00:00Z',
    status: 'success',
    permissions: ['ue-pct-discount', 'ue-happy-hour', 'email-campaign'],
    reason: 'Sales within ±8% of weekly average — flat threshold met. Agent created a time-limited offer and triggered email campaign to drive Friday evening traffic.',
  },
]

// ─── Generated filler logs (pagination demo data) ───────────────────────────────

type LogVariant = {
  action: string
  logType: LogType
  status: AgentLog['status']
  permissions: string[]
  detail: string
  reason: string
  channels?: string[]
  report?: ReportData
}

const MENU_LOCATIONS = ['London Bridge', 'Shoreditch', 'Canary Wharf']

const SUPPORT_LOCATIONS = [
  'Liverpool St', 'Victoria', 'Waterloo', "King's Cross", 'Paddington',
  'London Bridge', 'Canary Wharf', 'Stratford', 'Shoreditch', 'Brixton',
  'Camden', 'Hackney', 'Islington', 'Clapham', 'Peckham', 'Hammersmith',
]

const MENU_VARIANTS: LogVariant[] = [
  { action: 'Menu optimised', logType: 'optimisation', status: 'success', permissions: ['position', 'content'], detail: 'High-margin items promoted to the top section and item descriptions refreshed for the dinner window.', reason: 'AOV stagnant for 8 days and order volume threshold met. 7-day cooldown has passed.' },
  { action: 'Menu optimised', logType: 'optimisation', status: 'success', permissions: ['upsells', 'best_sellers'], detail: 'Upsell groups reordered and the best-sellers row refreshed to reflect the current top performers.', reason: 'Best-seller mix shifted week-over-week. Order volume threshold met. 7-day cooldown has passed.' },
  { action: 'Menu published', logType: 'publication', status: 'success', permissions: [], detail: 'Optimised menu pushed live to all connected marketplaces after the overnight optimisation cycle.', reason: 'Automatic publication triggered immediately after the optimisation was applied.', channels: ['uber-eats', 'deliveroo', 'just-eat'] },
  { action: 'Performance report', logType: 'report', status: 'info', permissions: [], detail: 'Inconclusive — baseline period established. 923 orders, £21,245.87 revenue, 93% multi-product rate.', reason: 'Report generated after the 7-day tracking window following the most recent optimisation.', report: SAMPLE_REPORT },
  { action: 'Menu optimised', logType: 'optimisation', status: 'warning', permissions: ['meal_deals'], detail: 'Lunch meal deal rebuilt after the previous bundle underperformed on attach rate.', reason: 'Meal-deal attach rate dropped below target. Order volume threshold met. 7-day cooldown has passed.' },
  { action: 'Menu optimised', logType: 'optimisation', status: 'success', permissions: ['position', 'upsells', 'content'], detail: 'Categories repositioned for the evening service and upsell prompts added to high-traffic items.', reason: 'AOV dropped 9% over the past 7 days. Sufficient order volume met. 7-day cooldown has passed.' },
]

const SUPPORT_VARIANTS: LogVariant[] = [
  { action: 'Item sync', logType: 'optimisation', status: 'success', permissions: ['sync_products'], detail: 'Menu items re-synced across Uber Eats and Deliveroo after a mismatch between POS and channel catalogue.', reason: 'Product catalogue mismatch detected between POS and delivery channel.' },
  { action: 'Item snooze', logType: 'optimisation', status: 'success', permissions: ['snooze_products'], detail: 'Out-of-stock items snoozed across all channels after repeated failed orders were detected.', reason: 'Items flagged as unavailable by the kitchen — snoozed to prevent further failed orders.' },
  { action: 'Publish menus', logType: 'publication', status: 'success', permissions: ['publish_menu'], detail: 'Updated menu pushed live to all channels following a price correction on several items.', reason: 'Price correction applied — menu re-published to propagate changes to all channels.', channels: ['uber-eats', 'deliveroo', 'just-eat'] },
  { action: 'Item sync', logType: 'optimisation', status: 'warning', permissions: ['sync_products'], detail: 'Modifier groups re-synced on Deliveroo after optional add-ons stopped appearing at checkout.', reason: 'Modifier group missing from the channel payload — re-sync triggered to restore checkout options.' },
  { action: 'Item snooze', logType: 'optimisation', status: 'success', permissions: ['snooze_products', 'publish_menu'], detail: 'Unavailable items snoozed and the updated menu immediately re-published to the affected channels.', reason: 'Items flagged unavailable mid-service — snoozed and re-published to minimise order failures.' },
  { action: 'Item sync', logType: 'optimisation', status: 'success', permissions: ['sync_products'], detail: 'New items synced to Just Eat — live on POS but missing from the channel catalogue.', reason: 'Menu expansion detected on POS — new items missing from the Just Eat catalogue.' },
]

function generateLogs(opts: {
  agentId: string
  agentName: string
  agentType: AgentType
  locations: string[]
  variants: LogVariant[]
  count: number
  idPrefix: string
  startTimestamp: string
}): AgentLog[] {
  const start = new Date(opts.startTimestamp)
  const logs: AgentLog[] = []
  for (let i = 0; i < opts.count; i++) {
    const v = opts.variants[i % opts.variants.length]
    const location = opts.locations[i % opts.locations.length]
    const d = new Date(start)
    d.setHours(d.getHours() - i * 17)
    logs.push({
      id: `${opts.idPrefix}-${i + 1}`,
      agentId: opts.agentId,
      agentName: opts.agentName,
      agentType: opts.agentType,
      logType: v.logType,
      action: v.action,
      detail: v.detail,
      location,
      timestamp: d.toISOString(),
      status: v.status,
      permissions: v.permissions,
      reason: v.reason,
      ...(v.channels ? { channels: v.channels } : {}),
      ...(v.report ? { report: v.report } : {}),
    })
  }
  return logs
}

// Menu reporting model: every new optimisation cycle auto-generates a report on
// the PREVIOUS cycle's performance. We emit, per location, optimisation → menu
// published → (at the next cycle) a report about the cycle that just finished.
// The report is timestamped just before the next optimisation so the activity
// log's per-location cycle counter resolves it to the correct prior cycle.
const MENU_OPT_VARIANTS = MENU_VARIANTS.filter(v => v.logType === 'optimisation')

const REPORT_VARIANTS: { status: AgentLog['status']; detail: string }[] = [
  { status: 'info', detail: 'Positive — AOV up 6% and multi-product rate up 4 pts versus the previous window.' },
  { status: 'info', detail: 'Inconclusive — results within normal variance; no significant change against control.' },
  { status: 'info', detail: 'Positive — basket size up 0.4 items and revenue up 5% on the optimised categories.' },
  { status: 'info', detail: 'Negative — AOV dipped 2% against control; the lunch bundle is reverted next cycle.' },
]

function generateMenuCycleLogs(opts: {
  agentId: string
  agentName: string
  locations: string[]
  cyclesPerLocation: number | ((locIdx: number) => number)
  idPrefix: string
  latestCycleTimestamp: string
}): AgentLog[] {
  const out: AgentLog[] = []
  const DAY = 24 * 60 * 60 * 1000
  const HOUR = 60 * 60 * 1000
  const latest = new Date(opts.latestCycleTimestamp).getTime()

  const cyclesFor = (locIdx: number) =>
    typeof opts.cyclesPerLocation === 'function' ? opts.cyclesPerLocation(locIdx) : opts.cyclesPerLocation

  // Optimisation time for cycle c (1 = oldest, n = most recent), staggered per location.
  const optTime = (locIdx: number, c: number, n: number) =>
    new Date(latest - (n - c) * 7 * DAY - locIdx * DAY)

  opts.locations.forEach((location, locIdx) => {
    const n = cyclesFor(locIdx)
    for (let c = 1; c <= n; c++) {
      const ov = MENU_OPT_VARIANTS[(locIdx + c) % MENU_OPT_VARIANTS.length]
      const tOpt = optTime(locIdx, c, n)

      // The optimisation (this IS cycle c)
      out.push({
        id: `${opts.idPrefix}-${locIdx}-opt-${c}`,
        agentId: opts.agentId,
        agentName: opts.agentName,
        agentType: 'MENU_AGENT',
        logType: 'optimisation',
        action: 'Menu optimised',
        detail: ov.detail,
        location,
        timestamp: tOpt.toISOString(),
        status: ov.status,
        permissions: ov.permissions,
        reason: ov.reason,
      })

      // Auto-publish right after the optimisation
      out.push({
        id: `${opts.idPrefix}-${locIdx}-pub-${c}`,
        agentId: opts.agentId,
        agentName: opts.agentName,
        agentType: 'MENU_AGENT',
        logType: 'publication',
        action: 'Menu published',
        detail: 'Optimised menu pushed live to all connected marketplaces after the optimisation cycle.',
        location,
        timestamp: new Date(tOpt.getTime() + HOUR).toISOString(),
        status: 'success',
        permissions: [],
        reason: 'Automatic publication triggered immediately after the optimisation was applied.',
        channels: ['uber-eats', 'deliveroo', 'just-eat'],
      })

      // When the NEXT cycle runs, a report is generated about THIS cycle.
      // Place it just before the next optimisation so it references cycle c.
      if (c < n) {
        const rv = REPORT_VARIANTS[(locIdx + c) % REPORT_VARIANTS.length]
        const tReport = new Date(optTime(locIdx, c + 1, n).getTime() - 3 * HOUR)
        out.push({
          id: `${opts.idPrefix}-${locIdx}-report-${c}`,
          agentId: opts.agentId,
          agentName: opts.agentName,
          agentType: 'MENU_AGENT',
          logType: 'report',
          action: 'Performance report',
          detail: rv.detail,
          location,
          timestamp: tReport.toISOString(),
          status: rv.status,
          permissions: [],
          reason: 'Generated automatically at the start of a new cycle — reports on the previous cycle’s tracked performance.',
          report: SAMPLE_REPORT,
        })
      }
    }
  })

  // newest first
  out.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  return out
}

// Every other Menu-agent location (beyond the 3 well-established ones) gets a
// smaller cycle history: 1–3 cycles, alternating, so the overview "Optimization
// cycles" column shows realistic counts for all locations.
const EXTRA_MENU_LOCATIONS = (MOCK_AGENTS.find(a => a.id === 'agent-1')?.locations ?? [])
  .map(l => l.name)
  .filter(name => !MENU_LOCATIONS.includes(name))

MOCK_LOGS.push(
  ...generateMenuCycleLogs({
    agentId: 'agent-1',
    agentName: 'Peak Hour Optimiser',
    locations: MENU_LOCATIONS,
    cyclesPerLocation: 8,
    idPrefix: 'gen-menu',
    latestCycleTimestamp: '2026-06-03T20:00:00Z',
  }),
  ...generateMenuCycleLogs({
    agentId: 'agent-1',
    agentName: 'Peak Hour Optimiser',
    locations: EXTRA_MENU_LOCATIONS,
    cyclesPerLocation: (i) => 1 + (i % 3), // alternating 1, 2, 3
    idPrefix: 'gen-menu-x',
    latestCycleTimestamp: '2026-06-03T20:00:00Z',
  }),
  ...generateLogs({
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    locations: SUPPORT_LOCATIONS,
    variants: SUPPORT_VARIANTS,
    count: 100,
    idPrefix: 'gen-support',
    startTimestamp: '2026-05-08T20:00:00Z',
  }),
)
