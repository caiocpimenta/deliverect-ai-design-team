# Architecture

## Tech stack

| Layer | Library | Version |
|-------|---------|---------|
| UI framework | React | 18 |
| Language | TypeScript | 6 |
| Bundler | Vite | 8 |
| Routing | React Router | 7 |
| Design system | Deliverect Galaxy React | 2.5.0 |
| Charts | Recharts | 3 |

---

## Folder structure

```
src/
├── pages/                   All page-level components (one file per route)
│   └── create/              Agent creation wizard pages
├── components/              Shared UI components
│   ├── AppLayout.tsx        App shell: sidebar + nav panel + content area
│   ├── Page/                Page layout primitives (Root, Header, Body, Footer)
│   ├── ActivityLog.tsx      Activity log + report drawer (used in AgentDetailPage)
│   ├── CycleLog.tsx         Optimisation cycle log (used in AgentDetailPage)
│   ├── Step/                Wizard step layout (used in creation flows)
│   └── MultiDropdown/       Multi-select dropdown (used in creation flows)
├── context/
│   ├── AgentsContext.tsx    Global agent list state
│   └── CampaignsContext.tsx Global campaigns list state
├── data/
│   └── mockAgents.ts        All TypeScript types + mock data (agents, locations, channels)
├── App.tsx                  Route definitions
├── main.tsx                 Entry point
└── index.css                Global styles + Galaxy overrides
```

---

## Routing

All routes are defined in `src/App.tsx` and wrapped in `AppLayout`.

| Path | Component | Notes |
|------|-----------|-------|
| `/` | → redirect | Redirects to `/agents` |
| `/agents` | `MissionControlPage` | Agent list + launch new agent modal |
| `/agents/create` | `CreateOverviewPage` | Pick agent type |
| `/agents/create/menu-agent` | `MenuAgentPage` | 4-step wizard |
| `/agents/create/fixer-agent` | `FixerAgentPage` | 3-step wizard |
| `/agents/create/promotion-agent` | `PromotionAgentPage` | Promotion agent wizard |
| `/agents/:agentId` | `AgentDetailPage` | Agent detail — adapts by `agentType` |
| `/agents/:agentId/menu-preview` | `MenuPreviewPage` | Menu optimisation preview |
| `/analytics` | `AnalyticsPage` | Fix record analytics with filters and drawer |
| `/promo-agent` | `AIPromoAgentPage` | Promo agent standalone page |
| `/home-a` | `AIHomeAPage` | Home page variant A |
| `/dcm/campaigns` | `CampaignsPage` | Campaign Manager campaigns list |
| `/dcm/campaigns/new` | `CreateCampaignPage` | New campaign form |
| `/settings` | *(placeholder)* | Not yet implemented |

---

## State management

State is intentionally simple — no Redux or Zustand. Two React Context providers wrap the app:

### `AgentsContext` (`src/context/AgentsContext.tsx`)
Holds the live agent list. Initialised from `MOCK_AGENTS`.

```ts
const { agents, addAgent, removeAgent } = useAgents()
```

- `addAgent(agent)` — called when a creation wizard completes
- `removeAgent(id)` — called from the agent detail ellipsis menu

### `CampaignsContext` (`src/context/CampaignsContext.tsx`)
Holds the campaigns list for the Campaign Manager section.

All other state (filters, drawer open/close, tab selection, form inputs) is local `useState` inside each page component.

---

## App shell — `AppLayout`

`src/components/AppLayout.tsx` renders the persistent chrome around every page:

```
┌──────────────────────────────────────────────────────┐
│ Sidebar │ Nav panel (contextual) │ Page content      │
└──────────────────────────────────────────────────────┘
```

- **Sidebar** — Galaxy `Sidebar.*` components. Product logos on top, AI Suite / help / settings at the bottom. Active product drives which nav panel is shown.
- **Nav panel** — shown when `sidebarActive === 'deliverect-ai'` (AI Suite) or `'dcm'` (Campaign Manager). Built with Galaxy `Navigation.*`.
- **Page content** — `{children}` fills the remaining space.

The sidebar active state syncs from `location.pathname` via `useEffect`.

---

## Page layout — `Page` component

`src/components/Page/index.tsx` provides three building blocks used by every page:

| Component | Purpose |
|-----------|---------|
| `Page.Root` | Outer container; adds background + rounded card |
| `Page.Header` | Sticky top bar; shows a bottom border only when the body is scrolled |
| `Page.Body` | Scrollable content area |
| `Page.Footer` | Sticky bottom bar; shows a top border only when there's more content below |

---

## Galaxy design system patterns used

| Pattern | Component | Where used |
|---------|-----------|------------|
| Data cards | `DataCard.*` | AgentDetailPage, AnalyticsPage |
| Filters | `Filter.Menu`, `Filter.Select`, `Filter.CalendarWithPresets` | AnalyticsPage |
| Table | `Table.*` | AnalyticsPage, AgentDetailPage, MissionControlPage |
| Drawer | `Drawer.*` | AnalyticsPage (fix record), AgentDetailPage (report) |
| Tabs | `Tabs.*` | AgentDetailPage, AIPromoAgentPage |
| Dropdown menu | `DropdownMenu.*` | Row actions, sidebar user menu |
| Sidebar | `Sidebar.*` | AppLayout |
| Navigation | `Navigation.*` | AppLayout |
| Progress tracker | `ProgressTracker` | Creation wizards |
| Toggle | `Toggle` | Permission rows in MenuAgentPage |
| Badge | `Badge` | Status indicators throughout |
| Tooltip | `Tooltip.*` | Table column headers, DataCard titles |

---

## Global CSS overrides — `index.css`

```css
/* Galaxy's DataCard.Title base class always applies text-decoration: underline.
   Override globally — clickable titles restore it on hover via inline styles. */
.v250_1hrjdma3 {
  text-decoration: none;
}
```

This targets the internal generated class from Galaxy's `DataCard.Title` component. The class name is tied to Galaxy v2.5.0 — verify if the Galaxy version changes.
