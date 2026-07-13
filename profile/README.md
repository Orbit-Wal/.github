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
| [`mobile`](https://github.com/Orbit-Wal/mobile) | iOS/Android wallet app | `TypeScript` | 1m ago |
| [`Globe-Wallet`](https://github.com/Orbit-Wal/Globe-Wallet) | Web app — dashboard, convert, off-ramp, savings | `TypeScript` · ⭐ 3 | 1m ago |
| [`backend`](https://github.com/Orbit-Wal/backend) | REST API — accounts, balances, payments, pricing | `TypeScript` | 1m ago |
| [`contract`](https://github.com/Orbit-Wal/contract) | On-chain wallet registry & token-transfer guardrails | `Rust` | 1m ago |
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
- **mobile** [`424fe8e`](https://github.com/Orbit-Wal/mobile/commit/424fe8edcce891890770082c1513d3df237ee6aa) Add CONTRIBUTING.md and PR template requiring evidence of work — _yosemite01, 25m ago_
- **backend** [`7d417a8`](https://github.com/Orbit-Wal/backend/commit/7d417a8d7a3eb582613ed30833d56b3821c3cc5e) Add CONTRIBUTING.md and PR template requiring evidence of work — _yosemite01, 25m ago_
- **contract** [`326f54f`](https://github.com/Orbit-Wal/contract/commit/326f54ff6ae7b29420984bd126450de5b3692d45) Add CONTRIBUTING.md and PR template requiring evidence of work — _yosemite01, 25m ago_
- **Globe-Wallet** [`f5b506e`](https://github.com/Orbit-Wal/Globe-Wallet/commit/f5b506e8a03250f513efe663b98324cc419898c9) Add CONTRIBUTING.md and PR template requiring evidence of work — _yosemite01, 25m ago_
- **mobile** [`7b68616`](https://github.com/Orbit-Wal/mobile/commit/7b6861642025f3d02c2b04626ed4647740376d60) Merge pull request #1 from Orbit-Wal/feat/wallet-create-import-secure-st — _ndii-dev, 1d ago_
- **Globe-Wallet** [`74de564`](https://github.com/Orbit-Wal/Globe-Wallet/commit/74de5642f435312bd29b7840aafe2639661eb6f6) Merge pull request #60 from Orbit-Wal/fix/off-ramp-rate-duplication-and- — _ndii-dev, 1d ago_
- **Globe-Wallet** [`c6352cc`](https://github.com/Orbit-Wal/Globe-Wallet/commit/c6352cca01054b2c08310fe73b67330a6f58028a) Fix diverging off-ramp rate constants and duplicated CI job/JSON keys — _ndii-dev, 1d ago_
- **backend** [`439fea7`](https://github.com/Orbit-Wal/backend/commit/439fea7899c352e8deefcc0a4128bae9707eb4c7) Merge pull request #1 from Orbit-Wal/fix/auth-and-cors — _ndii-dev, 1d ago_
<!--RECENT_ACTIVITY:END-->

---

<div align="center">
<sub>Building the crypto ↔ fiat bridge on Stellar.</sub><br>
<sub><!--LAST_UPDATED:START-->
auto-updated · last refresh 2026-07-13 13:12 UTC
<!--LAST_UPDATED:END--></sub>
</div>
