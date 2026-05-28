# AI Suite Homepages — Design Spec
**Date:** 2026-05-13
**Status:** Approved

---

## Overview

Add three separate homepage variants to the AI Suite sidebar. Each is a distinct page with its own route and sidebar nav item, allowing the team to evaluate different homepage directions for the Deliverect AI product.

---

## Sidebar Changes

**File:** `src/components/AppLayout.tsx`

Add three new `Navigation.Item` entries at the top of the AI Suite nav panel (above the existing "Agents" item):

| Label  | Route     | Active match |
|--------|-----------|--------------|
| Home A | `/home-a` | `/home-a`    |
| Home B | `/home-b` | `/home-b`    |
| Home C | `/home-c` | `/home-c`    |

All three use `HomeOutline` (inactive) / `HomeFill` (active) icons. The existing `useEffect` that syncs `sidebarActive` to `deliverect-ai` must include these three routes.

---

## Routes

**File:** `src/App.tsx`

```
/home-a  → AIHomeAPage
/home-b  → AIHomeBPage
/home-c  → AIHomeCPage
```

---

## Page A — Marketing Hero

**File:** `src/pages/AIHomeAPage.tsx`
**Inspired by:** Figma rVS7GxdD7qc6oQRX6lXIBM, node 4337-5031

### Layout (top to bottom)

**1. Hero banner**
- Full-width dark panel using `vars.colors.background.navigation1` with 3 radial gradient circles (reuse the pattern from `DiscoveryBanner` in `MissionControlPage`)
- Left side: Deliverect AI logo mark (green ellipses SVG from `DeliverectAILogo`), headline `"Supercharge your sales with AI"` (`Heading` level 2), subtitle `"Deliverect AI is your digital workforce of agents that handle manual tasks to slash costs, boost revenue, and protect your margins at scale."`, primary `Button` "Get in touch now"
- Right side: a white card with heading "Fully own your experience" and 3 short feature labels stacked: "Revenue-aware pricing", "Always-on automation", "Privacy first"

**2. Feature cards row**
- `Inline` of 4 cards (equal flex), each `DataCard.Root`-style card with:
  - Icon (SparklesFill, GraphBarFill, ClockOutline, LockOutline)
  - Bold title
  - Short description
- Cards: "Always on" / "Revenue-aware" / "Zero manual work" / "Privacy first"

**3. Footer strip**
- Benefits list — 5 items in a horizontal row, each with a `CheckCircleFill` icon:
  1. "Reduce manual workload"
  2. "Protect your margins"
  3. "Boost revenue automatically"
  4. "Real-time performance data"
  5. "Full control over guardrails"
- Secondary `Button` "Learn more" (plain/neutral) + Primary `Button` "Get in touch now"

---

## Page B — Dashboard

**File:** `src/pages/AIHomeBPage.tsx`
**Inspired by:** Figma IOhGF6oebR5FnpA7Jbd8BX, node 8879-10716

### Layout

**Page header**
- `Heading` level 2: "Deliverect AI"
- Tab bar: "Overview" | "Activity" (Galaxy `Tabs`)

**Overview tab content (top to bottom)**

1. **DataCards row** — 4 cards identical to Mission Control:
   - Total actions (2,900, +12%)
   - Locations impacted (850, +5%)
   - Revenue uplift ($1,500, +8%)
   - Revenue loss prevented ($1,500, +3%)

2. **"My agents" section**
   - Section heading "My agents"
   - Extract a shared `AgentsTable` component from `MissionControlPage` into `src/components/AgentsTable.tsx` (same columns: Name, Objective with type icon, Active on, Status, row actions dropdown)
   - Both `MissionControlPage` and `AIHomeBPage` import and render `<AgentsTable />` — pulls from `useAgents()` context, no data duplication

**Activity tab content**
- Renders the shared `<ActivityLog logs={MOCK_LOGS} showAgentColumn showAgentTypeFilter />` component directly — no new code needed

---

## Page C — Educational

**File:** `src/pages/AIHomeCPage.tsx`
**Design:** Mix of Figma 1 & 2, education-first

### Layout (top to bottom)

**1. Welcome banner**
- Lighter version of the hero (no dark background) — just `Stack` with `Heading` level 2 "Welcome to Deliverect AI" and a subtitle: "Your digital workforce of AI agents that handle manual tasks to boost revenue and protect your margins."
- No hard CTA — low-pressure entry point

**2. "Available agents" section**
- Section label "Available agents"
- `Inline` of 3 equal-flex cards, one per agent type:

  | Agent | Icon | Pitch | Button |
  |-------|------|-------|--------|
  | Autonomous Menu | `MenuFill` | "Continuously optimise your menu pricing and layout." | "Create agent" → `/agents/create/menu-agent` |
  | Autonomous Support | `SettingsOutline` | "Automatically correct common order mistakes." | "Create agent" → `/agents/create/fixer-agent` |
  | Promotions | `MegaphoneOutline` | "Run smart promotions triggered by real performance data." | "Create agent" → `/agents/create/promotion-agent` |

- Each card: white background, border, icon + name + pitch text + button

**3. "How it works" section**
- Section label "How it works"
- 3 horizontal step cards connected by arrows:
  1. **Monitor** — "The agent watches your orders, revenue, and menu performance in real time."
  2. **Decide** — "It identifies opportunities and risks based on your goals and permissions."
  3. **Act** — "Changes are applied automatically — within the boundaries you set."
- Each step: numbered badge, title, description

**4. Quick-start tip banner**
- Galaxy `Banner.Root` status="info"
- Title: "Start with Mission Control"
- Body: "Head to Mission Control to see all your active agents and their live activity."
- Action button: "Go to Mission Control" → navigates to `/agents`

---

## Shared Patterns

- All three pages use `Page.Root` / `Page.Header` / `Page.Body` from `src/components/Page`
- DataCards and ActivityLog are reused from existing components — no new data layer needed
- All mock values match what's already in `src/data/mockAgents.ts` and `src/data/mockLogs.ts`

---

## Files to Create / Modify

| Action | File |
|--------|------|
| Create | `src/pages/AIHomeAPage.tsx` |
| Create | `src/pages/AIHomeBPage.tsx` |
| Create | `src/pages/AIHomeCPage.tsx` |
| Extract | `src/components/AgentsTable.tsx` — shared table used by Mission Control + Home B |
| Modify | `src/pages/MissionControlPage.tsx` — replace inline table with `<AgentsTable />` |
| Modify | `src/App.tsx` — add 3 routes |
| Modify | `src/components/AppLayout.tsx` — add 3 nav items + route sync |
