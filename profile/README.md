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
| [`mobile`](https://github.com/Orbit-Wal/mobile) | iOS/Android wallet app | `TypeScript` | 6d ago |
| [`Globe-Wallet`](https://github.com/Orbit-Wal/Globe-Wallet) | Web app — dashboard, convert, off-ramp, savings | `TypeScript` · ⭐ 3 | 6d ago |
| [`backend`](https://github.com/Orbit-Wal/backend) | REST API — accounts, balances, payments, pricing | `TypeScript` | 2h ago |
| [`contract`](https://github.com/Orbit-Wal/contract) | On-chain wallet registry & token-transfer guardrails | `Rust` | 2h ago |
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
- **contract** [`56ff3f5`](https://github.com/Orbit-Wal/contract/commit/56ff3f578c9c97364ccecaece0db6d2339e5c2f4) Merge pull request #81 from Orbit-Wal/fix/assets-tests-issues-29-31-33-3 — _ndii-dev, 2h ago_
- **contract** [`46b6178`](https://github.com/Orbit-Wal/contract/commit/46b617863f47dcdfc8a8fbbbd97db7138dadcf98) Merge remote-tracking branch 'origin/main' into fix/assets-tests-issues- — _Ndifreke000, 2h ago_
- **contract** [`72d9d18`](https://github.com/Orbit-Wal/contract/commit/72d9d188e4f6863f64226a3d205f9dcabbb3290b) fix(globe-wallet,token-wrapper): dedupe MAX_ASSETS, validate asset codes — _Ndifreke000, 2h ago_
- **contract** [`57149b9`](https://github.com/Orbit-Wal/contract/commit/57149b9920e003ace4bf92a278145cbec638d633) Merge pull request #80 from Orbit-Wal/fix/recovery-guardian-issues-27-28 — _ndii-dev, 2h ago_
- **contract** [`691a680`](https://github.com/Orbit-Wal/contract/commit/691a680497a24c6ea66d4cd3f962429741d18247) Cap guardian set, guard recovery config mid-flight, reject no-op recover — _Ndifreke000, 2h ago_
- **backend** [`086c393`](https://github.com/Orbit-Wal/backend/commit/086c3937c18098a6666607c58edd3f5994c9ae2c) Merge pull request #113 from Orbit-Wal/fix/auth-testing-issues-74-79-80- — _ndii-dev, 2h ago_
- **backend** [`ee9a0e4`](https://github.com/Orbit-Wal/backend/commit/ee9a0e45226863691882bc7bbbcd393c66d1fd47) Merge pull request #114 from Orbit-Wal/fix/payment-feebump-issues-65-66- — _ndii-dev, 2h ago_
- **backend** [`862bf9e`](https://github.com/Orbit-Wal/backend/commit/862bf9eaa0efa615a85ee37af4d3cdbdfb1ca187) Add login rate limit, Redis-backed refresh tokens, and test coverage for — _Ndifreke000, 2h ago_
<!--RECENT_ACTIVITY:END-->

---

<div align="center">
<sub>Building the crypto ↔ fiat bridge on Stellar.</sub><br>
<sub><!--LAST_UPDATED:START-->
auto-updated · last refresh 2026-08-28 18:12 UTC
<!--LAST_UPDATED:END--></sub>
</div>
