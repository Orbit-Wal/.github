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
| [`mobile`](https://github.com/Orbit-Wal/mobile) | iOS/Android wallet app | `TypeScript` | 2d ago |
| [`Globe-Wallet`](https://github.com/Orbit-Wal/Globe-Wallet) | Web app — dashboard, convert, off-ramp, savings | `TypeScript` · ⭐ 3 | 2d ago |
| [`backend`](https://github.com/Orbit-Wal/backend) | REST API — accounts, balances, payments, pricing | `TypeScript` | 11h ago |
| [`contract`](https://github.com/Orbit-Wal/contract) | On-chain wallet registry & token-transfer guardrails | `Rust` | 11h ago |
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
- **backend** [`f62e23b`](https://github.com/Orbit-Wal/backend/commit/f62e23be311ec1763e9992cacc33b3206079b99e) Merge pull request #109 from Opulencechuks/fix-stellar-path-finding-fall — _ndii-dev, 11h ago_
- **backend** [`f9ba806`](https://github.com/Orbit-Wal/backend/commit/f9ba806069a191c86718d42764568e7dd73e7f5c) Merge pull request #108 from Opulencechuks/refactor-stellar-retry — _ndii-dev, 11h ago_
- **contract** [`68ed3ce`](https://github.com/Orbit-Wal/contract/commit/68ed3cee21997c131624879cb4c3b552698cdddd) Merge pull request #66 from d3v-active/fix-soroban-sdk-pin-comment — _ndii-dev, 11h ago_
- **contract** [`733e7e5`](https://github.com/Orbit-Wal/contract/commit/733e7e50f8d8b3be17d84905d5799048815c077a) Merge pull request #65 from Opulencechuks/fix-migrate-user-assets-auth — _ndii-dev, 11h ago_
- **contract** [`3d50e2a`](https://github.com/Orbit-Wal/contract/commit/3d50e2a105f7f0da909d6dffd21f187f35d00896) Merge pull request #64 from VedantMadane/test/allowance-default-zero — _ndii-dev, 11h ago_
- **contract** [`81f542f`](https://github.com/Orbit-Wal/contract/commit/81f542fd3e59f77c9b20632be18650090744020d) Merge pull request #63 from Opulencechuks/fix-token-wrapper-expiry-bound — _ndii-dev, 11h ago_
- **contract** [`877c0d6`](https://github.com/Orbit-Wal/contract/commit/877c0d61ee3b9b95e69ddc0d11ad4638278ecab3) Merge pull request #62 from Prz-droid/fix/execute-upgrade-wasm-validatio — _ndii-dev, 11h ago_
- **backend** [`5a8aa65`](https://github.com/Orbit-Wal/backend/commit/5a8aa65b51e7135b27c3c9cbc73f02821cdb9501) test: add fallback tests for strict path finding helpers — _Opulencechuks, 13h ago_
<!--RECENT_ACTIVITY:END-->

---

<div align="center">
<sub>Building the crypto ↔ fiat bridge on Stellar.</sub><br>
<sub><!--LAST_UPDATED:START-->
auto-updated · last refresh 2026-08-24 06:54 UTC
<!--LAST_UPDATED:END--></sub>
</div>
