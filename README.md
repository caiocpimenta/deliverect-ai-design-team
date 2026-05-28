# AI Suite — Prototype

A React prototype for Deliverect's AI Agent Hub. Covers agent creation, management, analytics, and campaign management — built using the Deliverect Galaxy design system.

Live preview: https://ai-promo-agent-five.vercel.app

---

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | ≥ 20 | https://nodejs.org |
| pnpm | ≥ 9 | `npm install -g pnpm` |

---

## ⚠️ Design system dependency

The project uses **Deliverect Galaxy** (`@deliverect/galaxy-react` v2.5.0). It is currently referenced as a local `file:` path in `package.json`:

```json
"@deliverect/galaxy-react": "file:../Galaxy/packages/galaxy-react",
"@deliverect/galaxy-styles": "file:../Galaxy/packages/galaxy-styles",
```

Update these two entries to point to the correct source for your environment (internal registry, local clone, or tarball) before running `pnpm install`.

---

## Setup

```bash
pnpm install
pnpm dev          # http://localhost:5173
```

Other scripts:

```bash
pnpm build        # Production build → dist/
pnpm preview      # Preview the production build locally
```

---

## Documentation

| Document | What it covers |
|----------|----------------|
| [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) | App structure, routing, state management, shared components |
| [docs/AGENT_MODEL.md](./docs/AGENT_MODEL.md) | Agent types, data model, creation flows, permission system |
| [docs/PAGES.md](./docs/PAGES.md) | Every page — purpose, route, key components, status |
| [HANDOFF_ANALYTICS.md](./HANDOFF_ANALYTICS.md) | Analytics page deep-dive — files, types, URL params, API swap guide |
