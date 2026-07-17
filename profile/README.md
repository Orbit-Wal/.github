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
| [`mobile`](https://github.com/Orbit-Wal/mobile) | iOS/Android wallet app | `TypeScript` | 3d ago |
| [`Globe-Wallet`](https://github.com/Orbit-Wal/Globe-Wallet) | Web app — dashboard, convert, off-ramp, savings | `TypeScript` · ⭐ 3 | 1h ago |
| [`backend`](https://github.com/Orbit-Wal/backend) | REST API — accounts, balances, payments, pricing | `TypeScript` | 1h ago |
| [`contract`](https://github.com/Orbit-Wal/contract) | On-chain wallet registry & token-transfer guardrails | `Rust` | 1h ago |
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
- **Globe-Wallet** [`bd9d817`](https://github.com/Orbit-Wal/Globe-Wallet/commit/bd9d8173a48e481f08b24f9c2f9eb3adb5d199da) Merge pull request #111 from Ayinkx1/ui/bundle-size-audit — _ndii-dev, 1h ago_
- **backend** [`335ab31`](https://github.com/Orbit-Wal/backend/commit/335ab319c9e45658b5626ef4c8ed71a5875ae825) Merge pull request #52 from shepherd-001/feat/environment-variable-valid — _ndii-dev, 1h ago_
- **contract** [`7a960b8`](https://github.com/Orbit-Wal/contract/commit/7a960b8f13d917f1387be7407c666fd2763785ca) Merge pull request #13 from TochukwuJustice/admin-transfer — _ndii-dev, 1h ago_
- **contract** [`697461b`](https://github.com/Orbit-Wal/contract/commit/697461b5266444adf775320a853f180666243267) Merge branch 'main' into admin-transfer — _ndii-dev, 1h ago_
- **contract** [`9b1774a`](https://github.com/Orbit-Wal/contract/commit/9b1774a8032c8c3e4889a5681feaf79cc16c73f0) Merge pull request #12 from bamiebot-maker/feat/globe-wallet-upgrade-mec — _ndii-dev, 1h ago_
- **contract** [`781413b`](https://github.com/Orbit-Wal/contract/commit/781413b4b4fea146d8c73b624731e20fa34950b1) Merge branch 'main' into feat/globe-wallet-upgrade-mechanism — _ndii-dev, 1h ago_
- **contract** [`24b24bb`](https://github.com/Orbit-Wal/contract/commit/24b24bbe6ad8bc324e90dad384c14e3072c7e24b) Merge pull request #14 from TochukwuJustice/fix-clamps-turn — _ndii-dev, 1h ago_
- **backend** [`4701381`](https://github.com/Orbit-Wal/backend/commit/470138163a99686645ba0ed66ca14b19e5fd577f) feat: add environment variable  validation — _Shepherd, 12h ago_
<!--RECENT_ACTIVITY:END-->

---

<div align="center">
<sub>Building the crypto ↔ fiat bridge on Stellar.</sub><br>
<sub><!--LAST_UPDATED:START-->
auto-updated · last refresh 2026-07-17 08:07 UTC
<!--LAST_UPDATED:END--></sub>
</div>
