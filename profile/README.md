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
| [`Globe-Wallet`](https://github.com/Orbit-Wal/Globe-Wallet) | Web app — dashboard, convert, off-ramp, savings | `TypeScript` · ⭐ 3 | 15h ago |
| [`backend`](https://github.com/Orbit-Wal/backend) | REST API — accounts, balances, payments, pricing | `TypeScript` | 1d ago |
| [`contract`](https://github.com/Orbit-Wal/contract) | On-chain wallet registry & token-transfer guardrails | `Rust` | 1d ago |
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
- **Globe-Wallet** [`6f35a70`](https://github.com/Orbit-Wal/Globe-Wallet/commit/6f35a70d73cc7828eae06d11a511ed5618656601) Merge pull request #135 from christabel888/fix/issue-63-real-stellar-sub — _ndii-dev, 15h ago_
- **Globe-Wallet** [`fb7c3bb`](https://github.com/Orbit-Wal/Globe-Wallet/commit/fb7c3bb4d276aa46f24ab59203961d02ef43df24) Merge branch 'main' into fix/issue-63-real-stellar-submission — _christabel888, 15h ago_
- **Globe-Wallet** [`b734c1c`](https://github.com/Orbit-Wal/Globe-Wallet/commit/b734c1c25cfd2dce6a7a3a1b4323a6b36bf7e417) docs: note the alert.tsx duplicate-declaration fix in issue-63 write-up — _christabel888, 15h ago_
- **Globe-Wallet** [`6d411f3`](https://github.com/Orbit-Wal/Globe-Wallet/commit/6d411f36a85fcf9f826cc28a6c04b772eb3fed56) fix: remove duplicate AlertTitle declaration in components/ui/alert.tsx — _christabel888, 15h ago_
- **Globe-Wallet** [`d0bd647`](https://github.com/Orbit-Wal/Globe-Wallet/commit/d0bd6478618a5d97bef5e965463bf996e47c6f2b) fix: real Stellar submission for sendPayment (closes #63) — _christabel888, 15h ago_
- **backend** [`de69fe1`](https://github.com/Orbit-Wal/backend/commit/de69fe1626defaaffe69a3a9e905ced6043074de) Merge pull request #59 from yosemite01/feat/soroban-rpc-integration — _ndii-dev, 1d ago_
- **backend** [`bfa9a5c`](https://github.com/Orbit-Wal/backend/commit/bfa9a5c75d9ae4afa014d331e6a35d53105fac3e) feat: add Soroban RPC integration for the globe-wallet contract — _yosemite01, 1d ago_
- **backend** [`9a59028`](https://github.com/Orbit-Wal/backend/commit/9a590280d854dd0ed51e0304ab1ba1376210e4a4) Merge pull request #57 from mac-dubem/fix/add-keypair-audit-trail — _ndii-dev, 1d ago_
<!--RECENT_ACTIVITY:END-->

---

<div align="center">
<sub>Building the crypto ↔ fiat bridge on Stellar.</sub><br>
<sub><!--LAST_UPDATED:START-->
auto-updated · last refresh 2026-07-22 08:25 UTC
<!--LAST_UPDATED:END--></sub>
</div>
