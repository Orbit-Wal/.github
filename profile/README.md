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
| [`mobile`](https://github.com/Orbit-Wal/mobile) | iOS/Android wallet app | `TypeScript` | 1d ago |
| [`Globe-Wallet`](https://github.com/Orbit-Wal/Globe-Wallet) | Web app — dashboard, convert, off-ramp, savings | `TypeScript` · ⭐ 3 | 14h ago |
| [`backend`](https://github.com/Orbit-Wal/backend) | REST API — accounts, balances, payments, pricing | `TypeScript` | 9h ago |
| [`contract`](https://github.com/Orbit-Wal/contract) | On-chain wallet registry & token-transfer guardrails | `Rust` | 19h ago |
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
- **backend** [`de69fe1`](https://github.com/Orbit-Wal/backend/commit/de69fe1626defaaffe69a3a9e905ced6043074de) Merge pull request #59 from yosemite01/feat/soroban-rpc-integration — _ndii-dev, 9h ago_
- **backend** [`bfa9a5c`](https://github.com/Orbit-Wal/backend/commit/bfa9a5c75d9ae4afa014d331e6a35d53105fac3e) feat: add Soroban RPC integration for the globe-wallet contract — _yosemite01, 12h ago_
- **backend** [`9a59028`](https://github.com/Orbit-Wal/backend/commit/9a590280d854dd0ed51e0304ab1ba1376210e4a4) Merge pull request #57 from mac-dubem/fix/add-keypair-audit-trail — _ndii-dev, 14h ago_
- **backend** [`c6e32ff`](https://github.com/Orbit-Wal/backend/commit/c6e32ffe3098149786f2df275d84a7c8d272e4bc) Merge branch 'main' into fix/add-keypair-audit-trail — _ndii-dev, 14h ago_
- **Globe-Wallet** [`4bacb8d`](https://github.com/Orbit-Wal/Globe-Wallet/commit/4bacb8dfdf13ef95538b763d5bc4e13abbd764e3) Merge pull request #130 from ebubeb683-ship-it/virtualization — _ndii-dev, 14h ago_
- **Globe-Wallet** [`4fb3fc9`](https://github.com/Orbit-Wal/Globe-Wallet/commit/4fb3fc98579f4b27ff7fb67dd41089f6ab9f0339) Add SSE stream endpoint and accessibility enhancements — _superman32432432, 14h ago_
- **backend** [`76e351b`](https://github.com/Orbit-Wal/backend/commit/76e351bc347eb2010365a03a03a7a99e207104e9) wallet: add audit trail for keypair issuance (#43) — _mac-dubem, 16h ago_
- **contract** [`c5cc58e`](https://github.com/Orbit-Wal/contract/commit/c5cc58e73f76680f7db0906ffbc65fa59ab37626) Merge pull request #21 from ONEONUORA/test-for-record_spend — _ndii-dev, 19h ago_
<!--RECENT_ACTIVITY:END-->

---

<div align="center">
<sub>Building the crypto ↔ fiat bridge on Stellar.</sub><br>
<sub><!--LAST_UPDATED:START-->
auto-updated · last refresh 2026-07-21 08:25 UTC
<!--LAST_UPDATED:END--></sub>
</div>
