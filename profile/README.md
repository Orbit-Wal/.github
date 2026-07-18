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
| [`mobile`](https://github.com/Orbit-Wal/mobile) | iOS/Android wallet app | `TypeScript` | 4d ago |
| [`Globe-Wallet`](https://github.com/Orbit-Wal/Globe-Wallet) | Web app — dashboard, convert, off-ramp, savings | `TypeScript` · ⭐ 3 | 18h ago |
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
- **Globe-Wallet** [`6a06d70`](https://github.com/Orbit-Wal/Globe-Wallet/commit/6a06d70e021d168631f1ebbab4646b4b8ccc940c) Merge pull request #113 from AbuJulaybeeb/fix/transaction-sync-110 — _ndii-dev, 18h ago_
- **Globe-Wallet** [`ad5760c`](https://github.com/Orbit-Wal/Globe-Wallet/commit/ad5760cb77ff93a2dba718874f09f3c33b70ecb1) Merge pull request #112 from shepherd-001/fix/csrf-protection — _ndii-dev, 18h ago_
- **Globe-Wallet** [`410ad72`](https://github.com/Orbit-Wal/Globe-Wallet/commit/410ad726eba30b3d72882ade440232b58894035d) fix: remove errant jest-environment comment causing build failure — _AbuJulaybeeb, 23h ago_
- **Globe-Wallet** [`a0c0d9c`](https://github.com/Orbit-Wal/Globe-Wallet/commit/a0c0d9c276ca83b9f7c4d85282dbdfd66d0a1a33) fix: integrate real Horizon polling and ledger settlement checks for tra — _AbuJulaybeeb, 23h ago_
- **Globe-Wallet** [`4000608`](https://github.com/Orbit-Wal/Globe-Wallet/commit/40006085357c84c08a3f295491f758aab7d8982d) feat: add bearer token auth — _Shepherd, 1d ago_
- **backend** [`335ab31`](https://github.com/Orbit-Wal/backend/commit/335ab319c9e45658b5626ef4c8ed71a5875ae825) Merge pull request #52 from shepherd-001/feat/environment-variable-valid — _ndii-dev, 1d ago_
- **contract** [`7a960b8`](https://github.com/Orbit-Wal/contract/commit/7a960b8f13d917f1387be7407c666fd2763785ca) Merge pull request #13 from TochukwuJustice/admin-transfer — _ndii-dev, 1d ago_
- **contract** [`697461b`](https://github.com/Orbit-Wal/contract/commit/697461b5266444adf775320a853f180666243267) Merge branch 'main' into admin-transfer — _ndii-dev, 1d ago_
<!--RECENT_ACTIVITY:END-->

---

<div align="center">
<sub>Building the crypto ↔ fiat bridge on Stellar.</sub><br>
<sub><!--LAST_UPDATED:START-->
auto-updated · last refresh 2026-07-18 07:46 UTC
<!--LAST_UPDATED:END--></sub>
</div>
