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
| [`mobile`](https://github.com/Orbit-Wal/mobile) | iOS/Android wallet app | `TypeScript` | 16h ago |
| [`Globe-Wallet`](https://github.com/Orbit-Wal/Globe-Wallet) | Web app — dashboard, convert, off-ramp, savings | `TypeScript` · ⭐ 3 | 16h ago |
| [`backend`](https://github.com/Orbit-Wal/backend) | REST API — accounts, balances, payments, pricing | `TypeScript` | 16h ago |
| [`contract`](https://github.com/Orbit-Wal/contract) | On-chain wallet registry & token-transfer guardrails | `Rust` | 16h ago |
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
- **Globe-Wallet** [`ffc2fdf`](https://github.com/Orbit-Wal/Globe-Wallet/commit/ffc2fdfc10020fa9c98dfbd8d1febc6d71dfcd2a) Merge pull request #115 from heymide/round-trip-conversion — _ndii-dev, 16h ago_
- **Globe-Wallet** [`51b4e38`](https://github.com/Orbit-Wal/Globe-Wallet/commit/51b4e38f4656df75fe8f48edb683e2e7c469cc0d) Merge branch 'main' into round-trip-conversion — _ndii-dev, 16h ago_
- **mobile** [`1c2e0fd`](https://github.com/Orbit-Wal/mobile/commit/1c2e0fdd75de5cefa4087aa03c3220193aca8ef2) Merge pull request #53 from Ayinkx1/codex/issue-52-code-assistant — _ndii-dev, 16h ago_
- **contract** [`0b31b78`](https://github.com/Orbit-Wal/contract/commit/0b31b78cbb6c6870f9fb907b4912a708d2a4a4c0) Merge pull request #1 from Orbit-Wal/fix/spend-limit-storage-ttl — _ndii-dev, 16h ago_
- **contract** [`0cadc2b`](https://github.com/Orbit-Wal/contract/commit/0cadc2b8eba2feab69311dc0be475bfac41d1b42) Merge branch 'main' into fix/spend-limit-storage-ttl — _ndii-dev, 16h ago_
- **contract** [`f2c650e`](https://github.com/Orbit-Wal/contract/commit/f2c650e424f32a465fb159c4a1bdd5d6d4597eaf) Merge pull request #17 from mac-dubem/fix/unbounded-user-assets — _ndii-dev, 16h ago_
- **contract** [`f444286`](https://github.com/Orbit-Wal/contract/commit/f444286e7da555458b254e180f6919562d576c21) Merge branch 'main' into fix/unbounded-user-assets — _ndii-dev, 16h ago_
- **contract** [`275f01d`](https://github.com/Orbit-Wal/contract/commit/275f01dba0766449cf3ab48887a08a22402c6c73) Merge pull request #18 from mac-dubem/fix/unbounded-whitelist-vec — _ndii-dev, 16h ago_
<!--RECENT_ACTIVITY:END-->

---

<div align="center">
<sub>Building the crypto ↔ fiat bridge on Stellar.</sub><br>
<sub><!--LAST_UPDATED:START-->
auto-updated · last refresh 2026-07-19 08:13 UTC
<!--LAST_UPDATED:END--></sub>
</div>
