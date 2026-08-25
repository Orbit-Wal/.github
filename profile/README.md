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
| [`Globe-Wallet`](https://github.com/Orbit-Wal/Globe-Wallet) | Web app — dashboard, convert, off-ramp, savings | `TypeScript` · ⭐ 3 | 3d ago |
| [`backend`](https://github.com/Orbit-Wal/backend) | REST API — accounts, balances, payments, pricing | `TypeScript` | 19h ago |
| [`contract`](https://github.com/Orbit-Wal/contract) | On-chain wallet registry & token-transfer guardrails | `Rust` | 14h ago |
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
- **contract** [`4678a6c`](https://github.com/Orbit-Wal/contract/commit/4678a6c85a4939f2c1a6e3470758503f3e33b0e1) Merge pull request #71 from yosemite01/fix/issue-24-token-wrapper-orphan — _ndii-dev, 14h ago_
- **contract** [`e3aaa97`](https://github.com/Orbit-Wal/contract/commit/e3aaa97fb54843b63785fe427727cec369c7ae1d) Merge pull request #72 from yosemite01/fix/issue-23-walletError-discrimi — _ndii-dev, 14h ago_
- **contract** [`5f19b42`](https://github.com/Orbit-Wal/contract/commit/5f19b42116a9a71839b7bb560b69ef1930886c98) fix(globe-wallet): renumber WalletError to a single contiguous 1001+ sch — _Ndifreke000, 17h ago_
- **contract** [`58311be`](https://github.com/Orbit-Wal/contract/commit/58311bece275abf4bb31a793735d5fe5ce8e9358) fix(token-wrapper): remove orphaned enum fragment, fix WrapperError disc — _Ndifreke000, 17h ago_
- **contract** [`5bcc60d`](https://github.com/Orbit-Wal/contract/commit/5bcc60d18c359e84be158a4e8b6f6b1bac59b5f3) Merge pull request #70 from Ndifreke000/fix/issue-26-guardian-removal-st — _ndii-dev, 17h ago_
- **backend** [`c788f78`](https://github.com/Orbit-Wal/backend/commit/c788f7836c34e812edce075a257e27c45bf74b6d) Merge pull request #110 from Hollujay/fix-78-price-readme-accuracy — _ndii-dev, 19h ago_
- **backend** [`1d854f9`](https://github.com/Orbit-Wal/backend/commit/1d854f94e96976ea24d3201a18ab2eaeda1129df) Merge pull request #111 from ugoocreates-pixel/fix-api-key-comment — _ndii-dev, 19h ago_
- **backend** [`548ee26`](https://github.com/Orbit-Wal/backend/commit/548ee262b7e99b911235e487228d739a4d3992cd) docs: clarify API_KEY deprecation scope in .env.example — _ugoocreates-pixel, 22h ago_
<!--RECENT_ACTIVITY:END-->

---

<div align="center">
<sub>Building the crypto ↔ fiat bridge on Stellar.</sub><br>
<sub><!--LAST_UPDATED:START-->
auto-updated · last refresh 2026-08-25 06:42 UTC
<!--LAST_UPDATED:END--></sub>
</div>
