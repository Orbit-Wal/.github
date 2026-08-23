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
| [`Globe-Wallet`](https://github.com/Orbit-Wal/Globe-Wallet) | Web app — dashboard, convert, off-ramp, savings | `TypeScript` · ⭐ 3 | 1d ago |
| [`backend`](https://github.com/Orbit-Wal/backend) | REST API — accounts, balances, payments, pricing | `TypeScript` | 15h ago |
| [`contract`](https://github.com/Orbit-Wal/contract) | On-chain wallet registry & token-transfer guardrails | `Rust` | 15h ago |
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
- **backend** [`a6a26c6`](https://github.com/Orbit-Wal/backend/commit/a6a26c699ec04a375b3365a316393b3431423fe3) Merge pull request #103 from Devadakene/fix/jwt-memory-leak — _ndii-dev, 15h ago_
- **backend** [`5c13037`](https://github.com/Orbit-Wal/backend/commit/5c1303715f899799fee9954bfdddebbf65a155a4) Merge pull request #102 from Devadakene/fix/jwt-sub-claim-document-ident — _ndii-dev, 15h ago_
- **backend** [`46a8324`](https://github.com/Orbit-Wal/backend/commit/46a8324d2cd75e8963668000a517b247efcfe2c7) Merge pull request #104 from Devadakene/fix/memo-required-error — _ndii-dev, 15h ago_
- **contract** [`2798652`](https://github.com/Orbit-Wal/contract/commit/27986526ba6ea8ebb6f347121c80db3c55d101be) Merge pull request #56 from Devadakene/fix-asset-info-validation — _ndii-dev, 15h ago_
- **contract** [`1de7967`](https://github.com/Orbit-Wal/contract/commit/1de7967349450a3a4d45101ff47beb65d4647b8e) Merge pull request #55 from LeoRicch/fix/45-guardian-membership-index — _ndii-dev, 15h ago_
- **contract** [`5ac4e30`](https://github.com/Orbit-Wal/contract/commit/5ac4e30c06f308273ca575fb928744b00b39051c) Merge pull request #54 from edochieblessing09-max/fix-propose-upgrade-au — _ndii-dev, 15h ago_
- **contract** [`3178198`](https://github.com/Orbit-Wal/contract/commit/31781981725b600225df15ca4e56a93c1dc7ca7e) fix(wallet): validate asset code and issuer consistency — _Devadakene, 16h ago_
- **backend** [`9368a4b`](https://github.com/Orbit-Wal/backend/commit/9368a4bd3659a49e8a5913b3dff59d809a1d6a72) fix: explicit 400 mapping for MemoRequiredError — _Devadakene, 16h ago_
<!--RECENT_ACTIVITY:END-->

---

<div align="center">
<sub>Building the crypto ↔ fiat bridge on Stellar.</sub><br>
<sub><!--LAST_UPDATED:START-->
auto-updated · last refresh 2026-08-23 06:37 UTC
<!--LAST_UPDATED:END--></sub>
</div>
