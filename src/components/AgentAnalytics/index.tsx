import { useState } from 'react'
import {
  Badge,
  Button,
  DataCard,
  Drawer,
  Filter,
  Inline,
  InfoOutline,
  Stack,
  Table,
  Text,
  Tooltip,
  vars,
} from '@deliverect/galaxy-react'
import type { Agent } from '../../data/mockAgents'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FixRecord {
  id: string
  agentId: string
  agentName: string
  location: string
  affectedPlu: string
  lastErrorDate: string
  fixAppliedDate: string
  ordersRecovered: number
  avgOrderValue: number
  revenueSaved: number
  actionType: string
}

export type DateRange = { from: Date; to: Date } | null

// ─── Shared data ──────────────────────────────────────────────────────────────

export const ACTION_TYPE_LABELS: Record<string, string> = {
  duplicate:    'Duplicate items',
  modifier:     'Modifier corrections',
  price:        'Price validation',
  instructions: 'Special instructions',
  position:     'Position',
  upsells:      'Upsells',
  meal_deals:   'Meal deals',
  content:      'Content',
  best_sellers: 'Best sellers',
}

export const MOCK_FIX_RECORDS: FixRecord[] = [
  { id: '1',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Liverpool St', affectedPlu: 'PLU-1042', lastErrorDate: '2026-05-10', fixAppliedDate: '2026-05-10', ordersRecovered: 18, avgOrderValue: 26.40, revenueSaved: 475.20, actionType: 'price' },
  { id: '2',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Liverpool St', affectedPlu: 'PLU-0871', lastErrorDate: '2026-05-08', fixAppliedDate: '2026-05-08', ordersRecovered: 12, avgOrderValue: 22.80, revenueSaved: 273.60, actionType: 'modifier' },
  { id: '3',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Victoria',     affectedPlu: 'PLU-2203', lastErrorDate: '2026-05-12', fixAppliedDate: '2026-05-12', ordersRecovered: 24, avgOrderValue: 31.50, revenueSaved: 756.00, actionType: 'duplicate' },
  { id: '4',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Victoria',     affectedPlu: 'PLU-1155', lastErrorDate: '2026-05-07', fixAppliedDate: '2026-05-07', ordersRecovered:  9, avgOrderValue: 19.90, revenueSaved: 179.10, actionType: 'price' },
  { id: '5',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Liverpool St', affectedPlu: 'PLU-0934', lastErrorDate: '2026-05-15', fixAppliedDate: '2026-05-15', ordersRecovered: 31, avgOrderValue: 28.70, revenueSaved: 889.70, actionType: 'instructions' },
  { id: '6',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Victoria',     affectedPlu: 'PLU-3301', lastErrorDate: '2026-05-18', fixAppliedDate: '2026-05-18', ordersRecovered: 15, avgOrderValue: 24.20, revenueSaved: 363.00, actionType: 'modifier' },
  { id: '7',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Liverpool St', affectedPlu: 'PLU-4412', lastErrorDate: '2026-05-19', fixAppliedDate: '2026-05-19', ordersRecovered:  8, avgOrderValue: 30.10, revenueSaved: 240.80, actionType: 'duplicate' },
  { id: '8',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Victoria',     affectedPlu: 'PLU-0562', lastErrorDate: '2026-05-06', fixAppliedDate: '2026-05-06', ordersRecovered: 21, avgOrderValue: 27.60, revenueSaved: 579.60, actionType: 'price' },
  { id: '9',  agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Liverpool St', affectedPlu: 'PLU-1894', lastErrorDate: '2026-05-13', fixAppliedDate: '2026-05-13', ordersRecovered: 14, avgOrderValue: 23.50, revenueSaved: 329.00, actionType: 'instructions' },
  { id: '10', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Victoria',       affectedPlu: 'PLU-2780', lastErrorDate: '2026-05-16', fixAppliedDate: '2026-05-16', ordersRecovered: 19, avgOrderValue: 32.00, revenueSaved: 608.00, actionType: 'modifier' },
  { id: '11', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Waterloo',       affectedPlu: 'PLU-3312', lastErrorDate: '2026-05-11', fixAppliedDate: '2026-05-11', ordersRecovered: 22, avgOrderValue: 27.80, revenueSaved: 611.60, actionType: 'price' },
  { id: '12', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Waterloo',       affectedPlu: 'PLU-0441', lastErrorDate: '2026-05-14', fixAppliedDate: '2026-05-14', ordersRecovered: 16, avgOrderValue: 24.50, revenueSaved: 392.00, actionType: 'duplicate' },
  { id: '13', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: "King's Cross",   affectedPlu: 'PLU-1987', lastErrorDate: '2026-05-09', fixAppliedDate: '2026-05-09', ordersRecovered: 11, avgOrderValue: 23.10, revenueSaved: 254.10, actionType: 'modifier' },
  { id: '14', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: "King's Cross",   affectedPlu: 'PLU-5501', lastErrorDate: '2026-05-17', fixAppliedDate: '2026-05-17', ordersRecovered: 17, avgOrderValue: 29.40, revenueSaved: 499.80, actionType: 'instructions' },
  { id: '15', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Paddington',     affectedPlu: 'PLU-0023', lastErrorDate: '2026-05-10', fixAppliedDate: '2026-05-10', ordersRecovered: 20, avgOrderValue: 26.20, revenueSaved: 524.00, actionType: 'price' },
  { id: '16', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Paddington',     affectedPlu: 'PLU-2219', lastErrorDate: '2026-05-13', fixAppliedDate: '2026-05-13', ordersRecovered: 13, avgOrderValue: 21.90, revenueSaved: 284.70, actionType: 'duplicate' },
  { id: '17', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'London Bridge',  affectedPlu: 'PLU-3348', lastErrorDate: '2026-05-08', fixAppliedDate: '2026-05-08', ordersRecovered: 25, avgOrderValue: 30.60, revenueSaved: 765.00, actionType: 'modifier' },
  { id: '18', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Canary Wharf',   affectedPlu: 'PLU-4421', lastErrorDate: '2026-05-12', fixAppliedDate: '2026-05-12', ordersRecovered: 28, avgOrderValue: 33.20, revenueSaved: 929.60, actionType: 'price' },
  { id: '19', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Canary Wharf',   affectedPlu: 'PLU-0099', lastErrorDate: '2026-05-15', fixAppliedDate: '2026-05-15', ordersRecovered: 18, avgOrderValue: 28.00, revenueSaved: 504.00, actionType: 'instructions' },
  { id: '20', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Stratford',      affectedPlu: 'PLU-1173', lastErrorDate: '2026-05-11', fixAppliedDate: '2026-05-11', ordersRecovered: 14, avgOrderValue: 22.50, revenueSaved: 315.00, actionType: 'duplicate' },
  { id: '21', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Shoreditch',     affectedPlu: 'PLU-2284', lastErrorDate: '2026-05-09', fixAppliedDate: '2026-05-09', ordersRecovered: 23, avgOrderValue: 29.80, revenueSaved: 685.40, actionType: 'price' },
  { id: '22', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Brixton',        affectedPlu: 'PLU-0667', lastErrorDate: '2026-05-14', fixAppliedDate: '2026-05-14', ordersRecovered: 10, avgOrderValue: 20.40, revenueSaved: 204.00, actionType: 'modifier' },
  { id: '23', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Camden',         affectedPlu: 'PLU-3395', lastErrorDate: '2026-05-07', fixAppliedDate: '2026-05-07', ordersRecovered: 16, avgOrderValue: 25.10, revenueSaved: 401.60, actionType: 'instructions' },
  { id: '24', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Islington',      affectedPlu: 'PLU-1108', lastErrorDate: '2026-05-13', fixAppliedDate: '2026-05-13', ordersRecovered: 12, avgOrderValue: 23.70, revenueSaved: 284.40, actionType: 'duplicate' },
  { id: '25', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Clapham',        affectedPlu: 'PLU-4430', lastErrorDate: '2026-05-10', fixAppliedDate: '2026-05-10', ordersRecovered: 17, avgOrderValue: 26.80, revenueSaved: 455.60, actionType: 'price' },
  { id: '26', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Peckham',        affectedPlu: 'PLU-0772', lastErrorDate: '2026-05-16', fixAppliedDate: '2026-05-16', ordersRecovered:  8, avgOrderValue: 19.50, revenueSaved: 156.00, actionType: 'modifier' },
  { id: '27', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Elephant & Castle', affectedPlu: 'PLU-2256', lastErrorDate: '2026-05-11', fixAppliedDate: '2026-05-11', ordersRecovered: 13, avgOrderValue: 22.30, revenueSaved: 289.90, actionType: 'instructions' },
  { id: '28', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Dalston',        affectedPlu: 'PLU-3367', lastErrorDate: '2026-05-08', fixAppliedDate: '2026-05-08', ordersRecovered: 11, avgOrderValue: 21.60, revenueSaved: 237.60, actionType: 'duplicate' },
  { id: '29', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Bethnal Green',  affectedPlu: 'PLU-1190', lastErrorDate: '2026-05-14', fixAppliedDate: '2026-05-14', ordersRecovered: 15, avgOrderValue: 24.90, revenueSaved: 373.50, actionType: 'price' },
  { id: '30', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Greenwich',      affectedPlu: 'PLU-0583', lastErrorDate: '2026-05-12', fixAppliedDate: '2026-05-12', ordersRecovered: 18, avgOrderValue: 27.20, revenueSaved: 489.60, actionType: 'modifier' },
  { id: '31', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Lewisham',       affectedPlu: 'PLU-2294', lastErrorDate: '2026-05-09', fixAppliedDate: '2026-05-09', ordersRecovered: 10, avgOrderValue: 20.80, revenueSaved: 208.00, actionType: 'instructions' },
  { id: '32', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Hammersmith',    affectedPlu: 'PLU-4405', lastErrorDate: '2026-05-15', fixAppliedDate: '2026-05-15', ordersRecovered: 21, avgOrderValue: 28.50, revenueSaved: 598.50, actionType: 'duplicate' },
  { id: '33', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Fulham',         affectedPlu: 'PLU-1162', lastErrorDate: '2026-05-10', fixAppliedDate: '2026-05-10', ordersRecovered: 14, avgOrderValue: 25.60, revenueSaved: 358.40, actionType: 'price' },
  { id: '34', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Wandsworth',     affectedPlu: 'PLU-3378', lastErrorDate: '2026-05-13', fixAppliedDate: '2026-05-13', ordersRecovered: 12, avgOrderValue: 23.40, revenueSaved: 280.80, actionType: 'modifier' },
  { id: '35', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Tooting',        affectedPlu: 'PLU-0615', lastErrorDate: '2026-05-07', fixAppliedDate: '2026-05-07', ordersRecovered:  9, avgOrderValue: 19.90, revenueSaved: 179.10, actionType: 'instructions' },
  { id: '36', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Balham',         affectedPlu: 'PLU-2247', lastErrorDate: '2026-05-11', fixAppliedDate: '2026-05-11', ordersRecovered: 11, avgOrderValue: 22.10, revenueSaved: 243.10, actionType: 'duplicate' },
  { id: '37', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Stockwell',      affectedPlu: 'PLU-1134', lastErrorDate: '2026-05-14', fixAppliedDate: '2026-05-14', ordersRecovered: 10, avgOrderValue: 21.30, revenueSaved: 213.00, actionType: 'price' },
  { id: '38', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Vauxhall',       affectedPlu: 'PLU-4478', lastErrorDate: '2026-05-08', fixAppliedDate: '2026-05-08', ordersRecovered: 16, avgOrderValue: 26.40, revenueSaved: 422.40, actionType: 'modifier' },
  { id: '39', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Battersea',      affectedPlu: 'PLU-0539', lastErrorDate: '2026-05-12', fixAppliedDate: '2026-05-12', ordersRecovered: 13, avgOrderValue: 24.70, revenueSaved: 321.10, actionType: 'instructions' },
  { id: '40', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Nine Elms',      affectedPlu: 'PLU-3356', lastErrorDate: '2026-05-16', fixAppliedDate: '2026-05-16', ordersRecovered:  8, avgOrderValue: 20.20, revenueSaved: 161.60, actionType: 'duplicate' },
  { id: '41', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Bermondsey',     affectedPlu: 'PLU-1145', lastErrorDate: '2026-05-09', fixAppliedDate: '2026-05-09', ordersRecovered: 15, avgOrderValue: 25.80, revenueSaved: 387.00, actionType: 'price' },
  { id: '42', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Borough',        affectedPlu: 'PLU-2261', lastErrorDate: '2026-05-13', fixAppliedDate: '2026-05-13', ordersRecovered: 19, avgOrderValue: 27.60, revenueSaved: 524.40, actionType: 'modifier' },
  { id: '43', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Southwark',      affectedPlu: 'PLU-0596', lastErrorDate: '2026-05-10', fixAppliedDate: '2026-05-10', ordersRecovered: 14, avgOrderValue: 24.30, revenueSaved: 340.20, actionType: 'instructions' },
  { id: '44', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Stepney Green',  affectedPlu: 'PLU-4489', lastErrorDate: '2026-05-15', fixAppliedDate: '2026-05-15', ordersRecovered:  9, avgOrderValue: 21.70, revenueSaved: 195.30, actionType: 'duplicate' },
  { id: '45', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Mile End',       affectedPlu: 'PLU-1156', lastErrorDate: '2026-05-07', fixAppliedDate: '2026-05-07', ordersRecovered: 12, avgOrderValue: 23.50, revenueSaved: 282.00, actionType: 'price' },
  { id: '46', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Bow',            affectedPlu: 'PLU-3389', lastErrorDate: '2026-05-11', fixAppliedDate: '2026-05-11', ordersRecovered: 10, avgOrderValue: 22.00, revenueSaved: 220.00, actionType: 'modifier' },
  { id: '47', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Whitechapel',    affectedPlu: 'PLU-0628', lastErrorDate: '2026-05-14', fixAppliedDate: '2026-05-14', ordersRecovered: 17, avgOrderValue: 26.10, revenueSaved: 443.70, actionType: 'instructions' },
  { id: '48', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Aldgate',        affectedPlu: 'PLU-2272', lastErrorDate: '2026-05-12', fixAppliedDate: '2026-05-12', ordersRecovered: 20, avgOrderValue: 28.30, revenueSaved: 566.00, actionType: 'duplicate' },
  { id: '49', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Bank',           affectedPlu: 'PLU-1183', lastErrorDate: '2026-05-09', fixAppliedDate: '2026-05-09', ordersRecovered: 26, avgOrderValue: 31.40, revenueSaved: 816.40, actionType: 'price' },
  { id: '50', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Moorgate',       affectedPlu: 'PLU-4416', lastErrorDate: '2026-05-16', fixAppliedDate: '2026-05-16', ordersRecovered: 22, avgOrderValue: 29.70, revenueSaved: 653.40, actionType: 'modifier' },
  { id: '51', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Barbican',       affectedPlu: 'PLU-0547', lastErrorDate: '2026-05-08', fixAppliedDate: '2026-05-08', ordersRecovered: 11, avgOrderValue: 22.80, revenueSaved: 250.80, actionType: 'instructions' },
  { id: '52', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Farringdon',     affectedPlu: 'PLU-3323', lastErrorDate: '2026-05-13', fixAppliedDate: '2026-05-13', ordersRecovered: 16, avgOrderValue: 25.90, revenueSaved: 414.40, actionType: 'duplicate' },
  { id: '53', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Holborn',        affectedPlu: 'PLU-1170', lastErrorDate: '2026-05-10', fixAppliedDate: '2026-05-10', ordersRecovered: 18, avgOrderValue: 27.10, revenueSaved: 487.80, actionType: 'price' },
  { id: '54', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Covent Garden',  affectedPlu: 'PLU-2298', lastErrorDate: '2026-05-15', fixAppliedDate: '2026-05-15', ordersRecovered: 24, avgOrderValue: 30.20, revenueSaved: 724.80, actionType: 'modifier' },
  { id: '55', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Soho',           affectedPlu: 'PLU-0604', lastErrorDate: '2026-05-11', fixAppliedDate: '2026-05-11', ordersRecovered: 29, avgOrderValue: 32.50, revenueSaved: 942.50, actionType: 'instructions' },
  { id: '56', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Mayfair',        affectedPlu: 'PLU-4462', lastErrorDate: '2026-05-07', fixAppliedDate: '2026-05-07', ordersRecovered: 15, avgOrderValue: 35.80, revenueSaved: 537.00, actionType: 'duplicate' },
  { id: '57', agentId: 'agent-2', agentName: 'Order Accuracy Guard', location: 'Fitzrovia',      affectedPlu: 'PLU-1119', lastErrorDate: '2026-05-14', fixAppliedDate: '2026-05-14', ordersRecovered: 13, avgOrderValue: 26.60, revenueSaved: 345.80, actionType: 'price' },
]

// ─── Date helpers ─────────────────────────────────────────────────────────────

export function subDays(date: Date, days: number): Date {
  const d = new Date(date); d.setDate(d.getDate() - days); return d
}

export function subMonths(date: Date, months: number): Date {
  const d = new Date(date); d.setMonth(d.getMonth() - months); return d
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear()
    && a.getMonth() === b.getMonth()
    && a.getDate() === b.getDate()
}

// ─── ColHeader ────────────────────────────────────────────────────────────────

export function ColHeader({ label, tip }: { label: string; tip: string }) {
  return (
    <Inline space="050" alignY="center">
      <span>{label}</span>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span style={{ display: 'flex', cursor: 'help', color: vars.colors.icon.neutral.secondary }}>
            <InfoOutline size="sm" />
          </span>
        </Tooltip.Trigger>
        <Tooltip.Content side="bottom" sideOffset={0} style={{ zIndex: 100 }}>{tip}</Tooltip.Content>
      </Tooltip.Root>
    </Inline>
  )
}

// ─── FixRecordDrawer ──────────────────────────────────────────────────────────

export function FixRecordDrawer({ record, open, onClose }: { record: FixRecord | null; open: boolean; onClose: () => void }) {
  if (!record) return null
  return (
    <Drawer.Root open={open} onOpenChange={v => { if (!v) onClose() }}>
      <Drawer.Content placement="right">
        <Drawer.Header showCloseButton>
          <Stack height="auto" space="025">
            <Text weight="bold">{record.location}</Text>
            <Text size="sm" color="secondary" style={{ fontFamily: 'monospace' }}>{record.affectedPlu}</Text>
          </Stack>
        </Drawer.Header>

        <Drawer.Body>
          <Stack height="auto" space="300">
            <Stack height="auto" space="150">
              <Text weight="medium" size="sm" color="secondary" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fix details</Text>
              <Stack height="auto" space="0">
                {([
                  { label: 'PLU code',       value: <Text size="sm" style={{ fontFamily: 'monospace' }}>{record.affectedPlu}</Text> },
                  { label: 'Action type',    value: <Badge size="sm" status="neutral">{ACTION_TYPE_LABELS[record.actionType] ?? record.actionType}</Badge> },
                  { label: 'Error detected', value: <Text size="sm">{formatDate(record.lastErrorDate)}</Text> },
                  { label: 'Fix applied',    value: <Text size="sm">{formatDate(record.fixAppliedDate)}</Text> },
                  { label: 'Location',       value: <Text size="sm">{record.location}</Text> },
                ] as { label: string; value: React.ReactNode }[]).map(({ label, value }, i, arr) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: `${vars.spacing['125']} 0`,
                      borderBottom: i < arr.length - 1 ? `1px solid ${vars.colors.border.neutral.default.default}` : undefined,
                    }}
                  >
                    <Text size="sm" color="secondary">{label}</Text>
                    {value}
                  </div>
                ))}
              </Stack>
            </Stack>

            <Stack height="auto" space="150">
              <Text weight="medium" size="sm" color="secondary" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Revenue impact</Text>
              <Inline space="100" width="full">
                {[
                  { label: 'Protected orders (5d)', value: String(record.ordersRecovered) },
                  { label: 'Avg. order value',      value: `£${record.avgOrderValue.toFixed(2)}` },
                  { label: 'Revenue protected',     value: `£${record.revenueSaved.toFixed(2)}` },
                ].map(card => (
                  <div
                    key={card.label}
                    style={{
                      flex: 1, padding: vars.spacing['150'],
                      backgroundColor: vars.colors.background.subtle,
                      borderRadius: vars.border.radius['100'],
                      border: `1px solid ${vars.colors.border.neutral.default.default}`,
                    }}
                  >
                    <Stack height="auto" space="050">
                      <Text size="sm" color="secondary">{card.label}</Text>
                      <Text weight="bold">{card.value}</Text>
                    </Stack>
                  </div>
                ))}
              </Inline>
            </Stack>

            <div>
              <Button
                variant="outline" status="neutral" size="sm"
                onClick={() => window.open('https://frontend.deliverect.com/orders', '_blank')}
              >
                View affected orders
              </Button>
            </div>
          </Stack>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  )
}

// ─── LocationFixDrawer ────────────────────────────────────────────────────────

export function LocationFixDrawer({
  locationName,
  records,
  open,
  onClose,
}: {
  locationName: string
  records: FixRecord[]
  open: boolean
  onClose: () => void
}) {
  const ordersResolved   = records.reduce((s, r) => s + r.ordersRecovered, 0)
  const issuesPrevented  = records.length
  const avgAov           = records.length > 0 ? records.reduce((s, r) => s + r.avgOrderValue, 0) / records.length : 0
  const revenueProtected = records.reduce((s, r) => s + r.revenueSaved, 0)

  return (
    <Drawer.Root open={open} onOpenChange={v => { if (!v) onClose() }}>
      <Drawer.Content placement="right">
        <Drawer.Header showCloseButton>
          <Text weight="bold">{locationName}</Text>
        </Drawer.Header>

        <Drawer.Body>
          <Stack height="auto" space="250">
            {/* KPI cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: vars.spacing['100'] }}>
              {([
                { tooltip: 'Orders with issues that the agent successfully corrected',           title: 'Orders resolved',           value: String(ordersResolved) },
                { tooltip: 'Number of PLU issues detected and fixed at this location',           title: 'Issues prevented',          value: String(issuesPrevented) },
                { tooltip: 'Average value of orders that contained an issue at this location',   title: 'Avg. affected order value', value: `£${avgAov.toFixed(2)}` },
                { tooltip: 'Estimated revenue protected by correcting PLU errors at this location', title: 'Revenue protected',       value: `£${revenueProtected.toFixed(2)}` },
              ] as { tooltip: string; title: string; value: string }[]).map(card => (
                <DataCard.Root key={card.title}>
                  <DataCard.Header>
                    <DataCard.Title tooltip={card.tooltip}>{card.title}</DataCard.Title>
                  </DataCard.Header>
                  <DataCard.Content>
                    <DataCard.Value>{card.value}</DataCard.Value>
                  </DataCard.Content>
                </DataCard.Root>
              ))}
            </div>

            {/* PLU breakdown table */}
            {records.length > 0 ? (
              <Table.Root width="full">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell noHover>Action type</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell noHover>PLU code</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell noHover><ColHeader label="Last Error" tip="Date the most recent error for this PLU was detected." /></Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell noHover><ColHeader label="Fix Applied" tip="Date the agent successfully applied the correction for this PLU." /></Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell noHover>Revenue protected</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {records.map(r => (
                    <Table.Row key={r.id}>
                      <Table.Cell>
                        <Badge size="sm" status="neutral">{ACTION_TYPE_LABELS[r.actionType] ?? r.actionType}</Badge>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="sm" style={{ fontFamily: 'monospace' }}>{r.affectedPlu}</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="sm" color="secondary">{formatDate(r.lastErrorDate)}</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="sm" color="secondary">{formatDate(r.fixAppliedDate)}</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="sm" weight="medium" style={{ color: vars.colors.text.success.default }}>
                          £{r.revenueSaved.toFixed(2)}
                        </Text>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            ) : (
              <Text size="sm" color="secondary">No fix records for this location.</Text>
            )}
          </Stack>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  )
}

// ─── AgentInsightsTab ─────────────────────────────────────────────────────────

import React from 'react'

export function AgentInsightsTab({ agent }: { agent: Agent }) {
  const today = new Date()
  const agentStartDate = new Date(agent.createdAt)

  const [dateRange, setDateRange] = useState<DateRange>({
    from: agentStartDate,
    to: today,
  })
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState<FixRecord | null>(null)

  const datePresets = [
    { label: 'Since agent start', from: agentStartDate, to: today },
    { label: 'Previous 7 days',   from: subDays(today, 7),    to: today },
    { label: 'Last 2 weeks',      from: subDays(today, 14),   to: today },
    { label: 'Last 30 days',      from: subDays(today, 30),   to: today },
    { label: 'Last 3 months',     from: subMonths(today, 3),  to: today },
    { label: 'Last 6 months',     from: subMonths(today, 6),  to: today },
  ]

  const dateFilter = (
    <Filter.Menu
      label="Filters"
      initialFilterKeys={['date']}
      filterConfigMap={{
        date: {
          label: 'Date',
          filter: (
            <Filter.CalendarWithPresets
              id="date"
              applyLabel="Apply"
              applyMode="deferred"
              presets={datePresets}
              customOptionLabel="Custom range"
              selected={dateRange ?? undefined}
              disabled={{ after: today }}
              isSameDate={isSameDay}
              onValueApplyChange={(from, to) => setDateRange({ from, to })}
            />
          ),
        },
      }}
    />
  )

  // ── ORDER_FIXER_AGENT ──────────────────────────────────────────────────────

  if (agent.agentType === 'ORDER_FIXER_AGENT') {
    const agentRecords = MOCK_FIX_RECORDS.filter(r => r.agentId === agent.id)
    const records = dateRange
      ? agentRecords.filter(r => {
          const d = new Date(r.lastErrorDate)
          return d >= dateRange.from && d <= dateRange.to
        })
      : agentRecords

    return (
      <>
        <Stack height="auto" space="250">
          {/* Date filter */}
          {dateFilter}

          {/* KPI cards */}
          <Inline space="150" width="full">
            {([
              { tooltip: 'Orders with issues that the agent successfully corrected',             title: 'Orders resolved',           value: '142'    },
              { tooltip: 'Potential issues detected and stopped before impacting the kitchen',   title: 'Issues prevented',          value: '89'     },
              { tooltip: 'Average value of orders that contained an issue',                      title: 'Avg. affected order value', value: '£28.50' },
              { tooltip: 'Estimated revenue protected from order errors and cancellations',      title: 'Revenue protected',         value: '£6,555' },
            ] as { tooltip: string; title: string; value: string }[]).map(card => (
              <DataCard.Root key={card.title} flex={1}>
                <DataCard.Header>
                  <DataCard.Title tooltip={card.tooltip}>{card.title}</DataCard.Title>
                </DataCard.Header>
                <DataCard.Content>
                  <DataCard.Value>{card.value}</DataCard.Value>
                </DataCard.Content>
              </DataCard.Root>
            ))}
          </Inline>

          {/* Fix records table */}
          <Table.Root width="full">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell noHover><ColHeader label="Location"               tip="The location where the PLU error was detected." /></Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell noHover><ColHeader label="Last Error"             tip="Date the most recent error for this PLU was detected." /></Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell noHover><ColHeader label="Fix Applied"            tip="Date the agent successfully applied the correction for this PLU." /></Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell noHover><ColHeader label="Action Type"            tip="The type of fix the agent applied, as configured during agent setup." /></Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell noHover><ColHeader label="Protected Orders (5d)"  tip="Orders containing this PLU in the 5 days after the fix, with no reported issues." /></Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell noHover><ColHeader label="Avg. Order Value"        tip="Average value of orders containing this PLU after the fix was applied." /></Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell noHover><ColHeader label="Revenue Protected"       tip="Estimated revenue protected by correcting this PLU error, based on recovered orders." /></Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {records.length === 0 ? (
                <Table.Row>
                  <Table.Cell colSpan={7}>
                    <Text size="sm" color="secondary" style={{ display: 'block', textAlign: 'center', padding: vars.spacing['300'] }}>
                      No records found for the selected date range.
                    </Text>
                  </Table.Cell>
                </Table.Row>
              ) : records.map(record => (
                <Table.Row
                  key={record.id}
                  style={{ cursor: 'pointer' }}
                  onClick={() => { setSelectedRecord(record); setDrawerOpen(true) }}
                >
                  <Table.RowHeaderCell>
                    <Text weight="medium" size="sm">{record.location}</Text>
                  </Table.RowHeaderCell>
                  <Table.Cell>
                    <Text size="sm" color="secondary">{formatDate(record.lastErrorDate)}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="sm" color="secondary">{formatDate(record.fixAppliedDate)}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge size="sm" status="neutral">{ACTION_TYPE_LABELS[record.actionType] ?? record.actionType}</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      variant="plain" status="neutral" size="sm"
                      onClick={e => { e.stopPropagation(); window.open('https://frontend.deliverect.com/orders', '_blank') }}
                    >
                      {record.ordersRecovered}
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="sm">£{record.avgOrderValue.toFixed(2)}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="sm" weight="medium" style={{ color: vars.colors.text.success.default }}>
                      £{record.revenueSaved.toFixed(2)}
                    </Text>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Stack>

        <FixRecordDrawer
          record={selectedRecord}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </>
    )
  }

  // ── MENU_AGENT ─────────────────────────────────────────────────────────────

  if (agent.agentType === 'MENU_AGENT') {
    const totalOrders  = agent.locations.reduce((s, l) => s + l.totalOrders, 0)
    const totalRevenue = agent.locations.reduce((s, l) => s + l.totalRevenue, 0)
    const avgAov       = agent.locations.length > 0
      ? agent.locations.reduce((s, l) => s + l.avgAov, 0) / agent.locations.length : 0
    const avgMulti     = agent.locations.length > 0
      ? agent.locations.reduce((s, l) => s + l.multiProductPct, 0) / agent.locations.length : 0

    return (
      <Stack height="auto" space="250">
        {dateFilter}

        <Inline space="150" width="full">
          <DataCard.Root flex={1}>
            <DataCard.Header><DataCard.Title tooltip="Total number of orders across all locations">Total orders</DataCard.Title></DataCard.Header>
            <DataCard.Content>
              <DataCard.Value>{totalOrders.toLocaleString()}</DataCard.Value>
              <Text color="secondary" size="sm">Across all locations</Text>
            </DataCard.Content>
          </DataCard.Root>
          <DataCard.Root flex={1}>
            <DataCard.Header><DataCard.Title tooltip="Total revenue generated">Total revenue</DataCard.Title></DataCard.Header>
            <DataCard.Content>
              <Inline space="xs" alignY="center">
                <DataCard.Value>£{totalRevenue.toLocaleString()}</DataCard.Value>
                <DataCard.ChangeIndicator relativeChange={8}>+8%</DataCard.ChangeIndicator>
              </Inline>
              <Text color="secondary" size="sm">vs. last period</Text>
            </DataCard.Content>
          </DataCard.Root>
          <DataCard.Root flex={1}>
            <DataCard.Header><DataCard.Title tooltip="Average order value">Avg. order value</DataCard.Title></DataCard.Header>
            <DataCard.Content>
              <Inline space="xs" alignY="center">
                <DataCard.Value>£{avgAov.toFixed(2)}</DataCard.Value>
                <DataCard.ChangeIndicator relativeChange={5}>+5%</DataCard.ChangeIndicator>
              </Inline>
              <Text color="secondary" size="sm">vs. last period</Text>
            </DataCard.Content>
          </DataCard.Root>
          <DataCard.Root flex={1}>
            <DataCard.Header><DataCard.Title tooltip="% of orders with 2+ items">Multi-product rate</DataCard.Title></DataCard.Header>
            <DataCard.Content>
              <DataCard.Value>{avgMulti.toFixed(0)}%</DataCard.Value>
              <Text color="secondary" size="sm">2+ items per order</Text>
            </DataCard.Content>
          </DataCard.Root>
        </Inline>

        <Table.Root width="full">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell noHover><ColHeader label="Location"            tip="Name of the location this agent is active on." /></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell noHover><ColHeader label="Total orders"        tip="Total number of orders at this location." /></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell noHover><ColHeader label="Total revenue"       tip="Total revenue generated at this location." /></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell noHover><ColHeader label="Avg. order value"    tip="Average order value at this location." /></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell noHover><ColHeader label="Multi-product rate"  tip="% of orders containing 2 or more items." /></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell noHover><ColHeader label="Status"              tip="Whether this location is currently active." /></Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {agent.locations.length === 0 ? (
              <Table.Row>
                <Table.Cell colSpan={6}>
                  <Text size="sm" color="secondary" style={{ display: 'block', textAlign: 'center', padding: vars.spacing['300'] }}>
                    No locations added yet.
                  </Text>
                </Table.Cell>
              </Table.Row>
            ) : agent.locations.map(loc => (
              <Table.Row key={loc.id}>
                <Table.RowHeaderCell><Text weight="medium" size="sm">{loc.name}</Text></Table.RowHeaderCell>
                <Table.Cell><Text size="sm">{loc.totalOrders.toLocaleString()}</Text></Table.Cell>
                <Table.Cell><Text size="sm">£{loc.totalRevenue.toLocaleString()}</Text></Table.Cell>
                <Table.Cell><Text size="sm">£{loc.avgAov.toFixed(2)}</Text></Table.Cell>
                <Table.Cell><Text size="sm">{loc.multiProductPct}%</Text></Table.Cell>
                <Table.Cell>
                  {loc.status === 'active'
                    ? <Badge size="sm" status="success">Active</Badge>
                    : <Badge size="sm" status="neutral">Inactive</Badge>
                  }
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Stack>
    )
  }

  // ── PROMOTION_AGENT ────────────────────────────────────────────────────────

  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: vars.spacing['500'],
        gap: vars.spacing['150'],
        border: `1px dashed ${vars.colors.border.neutral.default.default}`,
        borderRadius: vars.border.radius['150'],
      }}
    >
      <Text weight="medium">Insights coming soon</Text>
      <Text color="secondary" size="sm">Detailed analytics for Promotion Agents will be available in a future release.</Text>
    </div>
  )
}
