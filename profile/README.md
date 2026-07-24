<div align="center">

# 🌐 GlobeWallet

**A self-custodial crypto wallet built on Stellar & Soroban — send, convert, and off-ramp XLM without giving up your keys.**

[![Stellar](https://img.shields.io/badge/Stellar-Horizon%20%2B%20Soroban-7D00FF?logo=stellar&logoColor=white)](https://stellar.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Rust](https://img.shields.io/badge/Rust-no__std-000000?logo=rust&logoColor=white)](https://www.rust-lang.org/)
[![License](https://img.shields.io/badge/license-see%20repos-lightgrey)](#)

</div>

---

## What we're building

GlobeWallet is a full-stack wallet for the Stellar network: hold and send XLM, convert to USDC/USDT at live rates, off-ramp to a bank account, and manage everything from a mobile app or the web — while spend limits and asset whitelisting are enforced on-chain by our own Soroban contracts, not a backend you have to trust.

## Repositories

<!--REPO_TABLE:START-->
| Repo | What it is | Language | Last push |
|---|---|---|---|
| [`mobile`](https://github.com/Orbit-Wal/mobile) | iOS/Android wallet app | `TypeScript` | 21h ago |
| [`Globe-Wallet`](https://github.com/Orbit-Wal/Globe-Wallet) | Web app — dashboard, convert, off-ramp, savings | `TypeScript` · ⭐ 3 | 1d ago |
| [`backend`](https://github.com/Orbit-Wal/backend) | REST API — accounts, balances, payments, pricing | `TypeScript` | 1d ago |
| [`contract`](https://github.com/Orbit-Wal/contract) | On-chain wallet registry & token-transfer guardrails | `Rust` | 3d ago |
<!--REPO_TABLE:END-->

## Architecture

```
┌─────────────┐     ┌─────────────┐
│   mobile    │     │ Globe-Wallet│
│ (Expo/RN)   │     │ (Next.js)   │
└──────┬──────┘     └──────┬──────┘
       │                   │
       └─────────┬─────────┘
                  │  REST
           ┌──────▼──────┐
           │   backend   │  Postgres + Redis
           │ (Express)   │
           └──────┬──────┘
                  │  Horizon / Soroban RPC
           ┌──────▼──────┐
           │  contract   │  Stellar network
           │  (Soroban)  │
           └─────────────┘
```

- **Clients** (`mobile`, `Globe-Wallet`) never touch secret keys through the backend — signing happens on-device.
- **`backend`** is a thin, stateless-ish API layer: account/balance lookups, transaction submission, price feeds.
- **`contract`** enforces the rules that matter (asset whitelists, spend limits, admin governance) directly on Stellar via Soroban, so the backend can't quietly overreach.

## Getting started

Each repo is independently runnable — see its README for full setup. Quick start:

```bash
# Smart contracts
git clone https://github.com/Orbit-Wal/contract && cd contract
cargo build --target wasm32-unknown-unknown --release && cargo test

# Backend API
git clone https://github.com/Orbit-Wal/backend && cd backend
cp .env.example .env && npm install && npm run dev

# Web app
git clone https://github.com/Orbit-Wal/Globe-Wallet && cd Globe-Wallet
npm install && npm run dev

# Mobile app
git clone https://github.com/Orbit-Wal/mobile && cd mobile
npm install && npm start
```

All apps default to **Stellar testnet** — see each repo's `.env.example` before pointing anything at mainnet.

## Tech stack

`Stellar` · `Soroban` · `Rust` · `TypeScript` · `Node.js` · `Express` · `Next.js` · `Expo / React Native` · `PostgreSQL` · `Redis`

## Recent activity

<!--RECENT_ACTIVITY:START-->
- **mobile** [`ea35512`](https://github.com/Orbit-Wal/mobile/commit/ea35512366912024373dfc989270a92a792ca4fe) Merge pull request #56 from Ayinkx1/codex/issue-8-root-detection — _ndii-dev, 21h ago_
- **mobile** [`d72b005`](https://github.com/Orbit-Wal/mobile/commit/d72b0054908af8a6f845be134e080a624e5b82b8) Fixes #8: Implement warn-only root detection — _Ayinkx1, 1d ago_
- **mobile** [`5915acc`](https://github.com/Orbit-Wal/mobile/commit/5915acc533f4ae67584569c617c8bb9022bce3df) fix: protect key-material screens from capture — _Ayinkx1, 1d ago_
- **Globe-Wallet** [`ae86d22`](https://github.com/Orbit-Wal/Globe-Wallet/commit/ae86d225fd21fc1a4f354213c840d4d557911139) Merge pull request #139 from shepherd-001/docs/transaction-query-perform — _ndii-dev, 1d ago_
- **Globe-Wallet** [`a3e75f9`](https://github.com/Orbit-Wal/Globe-Wallet/commit/a3e75f908d09ac7ca1a6fb0ebae1319555ad16d7) Docs: Add transaction query performance and indexing design — _Shepherd, 1d ago_
- **Globe-Wallet** [`26c188e`](https://github.com/Orbit-Wal/Globe-Wallet/commit/26c188e1916a410de2ab576e4d46f9ab390f72f5) Docs: Add transaction query performance and indexing design — _Shepherd, 1d ago_
- **backend** [`491f7cf`](https://github.com/Orbit-Wal/backend/commit/491f7cf31eea59ad6f9b35b58fedf8c7eb44b5c8) Merge pull request #60 from Debbys-design/fix/issues-4-5-6 — _ndii-dev, 1d ago_
- **backend** [`211b0a9`](https://github.com/Orbit-Wal/backend/commit/211b0a9b2593d223763c91b2640447d5f58d35ff) Merge branch 'main' into fix/issues-4-5-6 — _ndii-dev, 1d ago_
<!--RECENT_ACTIVITY:END-->

---

<div align="center">
<sub>Building the crypto ↔ fiat bridge on Stellar.</sub><br>
<sub><!--LAST_UPDATED:START-->
auto-updated · last refresh 2026-07-24 08:25 UTC
<!--LAST_UPDATED:END--></sub>
</div>
