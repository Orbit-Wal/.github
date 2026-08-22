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
| [`mobile`](https://github.com/Orbit-Wal/mobile) | iOS/Android wallet app | `TypeScript` | 12h ago |
| [`Globe-Wallet`](https://github.com/Orbit-Wal/Globe-Wallet) | Web app — dashboard, convert, off-ramp, savings | `TypeScript` · ⭐ 3 | 11h ago |
| [`backend`](https://github.com/Orbit-Wal/backend) | REST API — accounts, balances, payments, pricing | `TypeScript` | 11h ago |
| [`contract`](https://github.com/Orbit-Wal/contract) | On-chain wallet registry & token-transfer guardrails | `Rust` | 1mo ago |
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
- **Globe-Wallet** [`4de1863`](https://github.com/Orbit-Wal/Globe-Wallet/commit/4de18631a33745c545ff5bd3b833e046a039ad50) Merge pull request #149 from shepherd-001/feat/auth_jwt_sessions — _ndii-dev, 11h ago_
- **backend** [`b23acd2`](https://github.com/Orbit-Wal/backend/commit/b23acd22a7bfe475dc8ab85cd7fcbfd11e10abb3) Merge pull request #62 from shepherd-001/feat/error_handler — _ndii-dev, 11h ago_
- **Globe-Wallet** [`55df44c`](https://github.com/Orbit-Wal/Globe-Wallet/commit/55df44c762072851b9aa495c041cc95003bd8b66) fix: retire unreachable Issue #15 analytics dashboard code — _yosemite01, 12h ago_
- **Globe-Wallet** [`9caa567`](https://github.com/Orbit-Wal/Globe-Wallet/commit/9caa5675a535c83266fb6a14de56dd7e30348b07) fix: remove dead countdownTimerRef and its unimplemented-UI tests — _yosemite01, 12h ago_
- **Globe-Wallet** [`2ba095e`](https://github.com/Orbit-Wal/Globe-Wallet/commit/2ba095e2a57eee5fe3d941626dffccbae7400d25) build: add Dockerfile + compose topology for production deployment — _yosemite01, 12h ago_
- **Globe-Wallet** [`817bf98`](https://github.com/Orbit-Wal/Globe-Wallet/commit/817bf98b3d4c07b2b519f4f9d686eaaab01dfcba) fix: coalesce concurrent rate-cache misses into a single upstream fetch — _yosemite01, 12h ago_
- **mobile** [`e3f16b5`](https://github.com/Orbit-Wal/mobile/commit/e3f16b5f5651c36161b12605ced17b7b653b19d1) Reduce secret key reference lifetime; document zeroization ceiling — _yosemite01, 12h ago_
- **mobile** [`53079b2`](https://github.com/Orbit-Wal/mobile/commit/53079b2ab6a848a37cce4fc9886d69c04c8e86f4) Use network-reported base fee instead of hardcoded BASE_FEE — _yosemite01, 12h ago_
<!--RECENT_ACTIVITY:END-->

---

<div align="center">
<sub>Building the crypto ↔ fiat bridge on Stellar.</sub><br>
<sub><!--LAST_UPDATED:START-->
auto-updated · last refresh 2026-08-22 06:36 UTC
<!--LAST_UPDATED:END--></sub>
</div>
