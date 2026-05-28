# Analytics Page — Dev Handoff

Live preview: https://ai-promo-agent-five.vercel.app/analytics

---

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | ≥ 20 | https://nodejs.org |
| pnpm | ≥ 9 | `npm install -g pnpm` |

---

## ⚠️ Design system dependency

The project uses **Deliverect Galaxy** (`@deliverect/galaxy-react` v2.5.0), which is currently referenced as a local `file:` path in `package.json`:

```json
"@deliverect/galaxy-react": "file:../Galaxy/packages/galaxy-react",
"@deliverect/galaxy-styles": "file:../Galaxy/packages/galaxy-styles",
```

Before running locally, update these two lines in `package.json` to point to the correct source for your setup — either the internal npm registry, a local clone of the Galaxy repo, or a tarball provided by the design system team.

---

## Setup & run

```bash
# 1. Install dependencies
pnpm install

# 2. Start dev server (http://localhost:5173)
pnpm dev

# 3. Navigate to the Analytics page
# http://localhost:5173/analytics
```

---

## Files that make up the Analytics page

```
src/
├── pages/
│   └── AnalyticsPage.tsx          ← Main file. All page logic lives here.
│
├── data/
│   └── mockAgents.ts              ← Agent types + mock data.
│                                    Replace with real API calls.
│
├── components/
│   ├── Page/
│   │   ├── index.tsx              ← Page layout wrapper (Root, Header, Body)
│   │   └── Page.css               ← Scroll shadow styles
│   └── AppLayout.tsx              ← App shell (sidebar + nav). Route /analytics
│                                    is already registered here.
│
├── App.tsx                        ← Route: <Route path="/analytics" element={<AnalyticsPage />} />
└── index.css                      ← Global override for Galaxy DataCard underline
```

---

## What AnalyticsPage.tsx contains

| Section | Description |
|---------|-------------|
| `FixRecord` interface | Type for each table row. Add real fields here. |
| `MOCK_FIX_RECORDS` | Replace with API call. Agent ID links rows to the selected agent. |
| `ACTION_TYPE_LABELS` | Maps agent permission IDs to display labels. Extend as needed. |
| `ColHeader` | Reusable table column header with tooltip (InfoOutline icon). |
| `FixRecordDrawer` | Right-side drawer shown when the user clicks a row. Contains PLU, fix details, and revenue impact. |
| `AgentMetricsCards` | Renders different DataCard tiles based on `agent.agentType` (`MENU_AGENT` or `ORDER_FIXER_AGENT`). |
| `AnalyticsPage` | Main component. Handles filters, URL params, date presets, and table. |

---

## Key data types

```ts
// src/data/mockAgents.ts
interface Agent {
  id: string
  name: string
  agentType: 'MENU_AGENT' | 'ORDER_FIXER_AGENT'
  createdAt: string          // ISO date — used as "Since agent start" preset
  locations: Location[]
}

// src/pages/AnalyticsPage.tsx
interface FixRecord {
  id: string
  agentId: string            // Links to Agent.id
  location: string
  affectedPlu: string        // Shown in drawer
  lastErrorDate: string      // ISO date
  fixAppliedDate: string     // ISO date
  ordersRecovered: number    // Protected Orders (5d)
  avgOrderValue: number
  revenueSaved: number
  actionType: string         // Key in ACTION_TYPE_LABELS
}
```

---

## URL parameters

The page reads two query params so other pages can deep-link into a pre-filtered state:

| Param | Example | Effect |
|-------|---------|--------|
| `agentId` | `?agentId=agent-2` | Pre-selects the agent filter |
| `from` | `?from=2026-02-12` | Pre-sets the date filter start date |

Example: `/analytics?agentId=agent-2&from=2026-02-12`

---

## What to replace with real API calls

1. **`MOCK_AGENTS`** in `src/data/mockAgents.ts` → fetch from agents endpoint
2. **`MOCK_FIX_RECORDS`** in `AnalyticsPage.tsx` → fetch from fix records endpoint, filtered by `agentId` and date range
3. **DataCard values** in `AgentMetricsCards` → currently hardcoded strings, wire to aggregated metrics from the API
4. **"View affected orders" / "Protected Orders" links** → currently point to `https://frontend.deliverect.com/orders`; pass real order IDs when available

---

## Tech stack

| | |
|-|-|
| Framework | React 18 + TypeScript |
| Bundler | Vite 8 |
| Routing | React Router v7 |
| Design system | Deliverect Galaxy React v2.5.0 |
| Charts | Recharts 3 (imported, currently hidden) |
