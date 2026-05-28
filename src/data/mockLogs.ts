import { type AgentType } from './mockAgents'

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
    id: 'log-report-1',
    agentId: 'agent-1',
    agentName: 'Peak Hour Optimiser',
    agentType: 'MENU_AGENT',
    logType: 'report',
    action: 'Performance report',
    detail: 'Inconclusive — baseline period established. 923 orders, £21,245.87 revenue, 93% multi-product rate.',
    location: 'London Bridge',
    timestamp: '2026-05-15T09:00:00Z',
    status: 'info',
    permissions: [],
    reason: 'Report generated after 7-day tracking window following the 8 May optimisation.',
    report: SAMPLE_REPORT,
  },
  {
    id: 'log-pub-1',
    agentId: 'agent-1',
    agentName: 'Peak Hour Optimiser',
    agentType: 'MENU_AGENT',
    logType: 'publication',
    action: 'Menu published',
    detail: 'Optimised menu pushed live to all connected marketplaces following overnight optimisation.',
    location: 'London Bridge',
    timestamp: '2026-05-08T00:04:00Z',
    status: 'success',
    permissions: [],
    reason: 'Automatic publication triggered immediately after optimisation was applied at midnight.',
    channels: ['uber-eats', 'deliveroo', 'just-eat'],
  },
  {
    id: 'log-1',
    agentId: 'agent-1',
    agentName: 'Peak Hour Optimiser',
    agentType: 'MENU_AGENT',
    logType: 'optimisation',
    action: 'Menu optimised',
    detail: 'High-margin items promoted to top section, combo updated, and item descriptions refreshed for lunch window',
    location: 'London Bridge',
    timestamp: '2026-05-08T00:01:00Z',
    status: 'success',
    permissions: ['position', 'meal_deals', 'content'],
    reason: 'AOV has been stagnant for 9 days and order volume threshold was met. 7-day cooldown since last optimisation has passed.',
  },
  {
    id: 'log-2',
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    logType: 'optimisation',
    action: 'Products synced',
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
    action: 'Products snoozed',
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
    action: 'Menu published',
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
    action: 'Products synced',
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
    action: 'Products snoozed',
    detail: '"Pulled Pork Burger" and "Loaded Fries" snoozed on all channels — supplier delivery delayed.',
    location: 'Waterloo',
    timestamp: '2026-05-17T08:30:00Z',
    status: 'info',
    permissions: ['snooze_products'],
    reason: 'Kitchen reported stock unavailability — agent snoozed affected items to prevent customer disappointment.',
  },
  {
    id: 'log-2f',
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    logType: 'optimisation',
    action: 'Menu published',
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
    action: 'Products synced',
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
    action: 'Products snoozed & menu published',
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
    action: 'Products synced',
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
    action: 'Menu published',
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
    id: 'log-4',
    agentId: 'agent-1',
    agentName: 'Peak Hour Optimiser',
    agentType: 'MENU_AGENT',
    logType: 'optimisation',
    action: 'Menu optimised',
    detail: 'Upsell items repositioned and best sellers category refreshed to reflect current top performers',
    location: 'Shoreditch',
    timestamp: '2026-05-07T09:14:00Z',
    status: 'success',
    permissions: ['position', 'upsells', 'best_sellers'],
    reason: 'AOV dropped 8% over the past 7 days. Sufficient order volume met. 7-day cooldown since last optimisation has passed.',
  },
  {
    id: 'log-5',
    agentId: 'agent-2',
    agentName: 'Order Accuracy Guard',
    agentType: 'ORDER_FIXER_AGENT',
    logType: 'optimisation',
    action: 'Products snoozed',
    detail: '"Vegan Wrap" snoozed on Uber Eats — item marked as out of stock by kitchen at opening.',
    location: 'Victoria',
    timestamp: '2026-05-11T08:47:00Z',
    status: 'info',
    permissions: ['snooze_products'],
    reason: 'Kitchen marked item as unavailable at start of service — agent snoozed it automatically to avoid failed orders.',
  },
  {
    id: 'log-6',
    agentId: 'agent-1',
    agentName: 'Peak Hour Optimiser',
    agentType: 'MENU_AGENT',
    logType: 'optimisation',
    action: 'Menu optimised',
    detail: '"Desserts" section repositioned for evening hours and descriptions updated with allergen info',
    location: 'Canary Wharf',
    timestamp: '2026-05-06T18:20:00Z',
    status: 'info',
    permissions: ['position', 'content'],
    reason: 'AOV stagnant for 11 days with no improvement. Order volume threshold met. 7-day cooldown has passed.',
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
    action: 'Products synced & menu published',
    detail: 'Full catalogue re-sync performed and updated menu published after a channel integration reset.',
    location: 'Liverpool St',
    timestamp: '2026-05-09T14:33:00Z',
    status: 'success',
    permissions: ['sync_products', 'publish_menu'],
    reason: 'Channel integration reset detected — full re-sync and republish triggered to restore correct menu state.',
  },
  {
    id: 'log-9',
    agentId: 'agent-1',
    agentName: 'Peak Hour Optimiser',
    agentType: 'MENU_AGENT',
    logType: 'optimisation',
    action: 'Menu optimised',
    detail: 'Meal deal created for lunch window and upsell suggestions added to high-traffic items',
    location: 'London Bridge',
    timestamp: '2026-05-06T11:00:00Z',
    status: 'success',
    permissions: ['meal_deals', 'upsells'],
    reason: 'AOV dropped 11% over 8 days. Order volume threshold met. 7-day cooldown has passed.',
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
