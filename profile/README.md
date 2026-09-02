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
| [`Globe-Wallet`](https://github.com/Orbit-Wal/Globe-Wallet) | Web app — dashboard, convert, off-ramp, savings | `TypeScript` · ⭐ 3 | 4d ago |
| [`backend`](https://github.com/Orbit-Wal/backend) | REST API — accounts, balances, payments, pricing | `TypeScript` | 4d ago |
| [`contract`](https://github.com/Orbit-Wal/contract) | On-chain wallet registry & token-transfer guardrails | `Rust` | 3d ago |
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
- **contract** [`fa6d92c`](https://github.com/Orbit-Wal/contract/commit/fa6d92c85eddfae8ed4ef6cb880dfd9d100a5093) Merge pull request #106 from christabel888/fix/timelock-minimum-delay-is — _ndii-dev, 3d ago_
- **contract** [`d78c396`](https://github.com/Orbit-Wal/contract/commit/d78c396037855e804a056d68c2cf527eb540ec43) test(globe-wallet): commit regenerated snapshots for the timelock fix — _Ndifreke000, 3d ago_
- **contract** [`b333423`](https://github.com/Orbit-Wal/contract/commit/b333423bca9d20dfa5b2c2222ec325d4afb2b80a) Merge pull request #107 from yosemite01/fix/issue-92-reentrancy-safe-wir — _ndii-dev, 3d ago_
- **contract** [`1e2ce7f`](https://github.com/Orbit-Wal/contract/commit/1e2ce7f1349a0e698f78d9e028a8d5ba2ebfb271) fix(globe-wallet): enforce minimum timelock delays for upgrades and reco — _Ndifreke000, 3d ago_
- **contract** [`077f191`](https://github.com/Orbit-Wal/contract/commit/077f1910a4993d2b84c9b0ddfd00e73f64837e10) fix: reentrancy-safe wiring of globe-wallet::send to token-wrapper::tran — _Ndifreke000, 3d ago_
- **Globe-Wallet** [`c289b8a`](https://github.com/Orbit-Wal/Globe-Wallet/commit/c289b8a220ebe90beaf5db27133f8ef470284f3f) Merge pull request #152 from Orbit-Wal/feat/ux-testing-issues-78-91-94-1 — _ndii-dev, 4d ago_
- **Globe-Wallet** [`4a4926e`](https://github.com/Orbit-Wal/Globe-Wallet/commit/4a4926e5b0809a4a4ac34d0a7ad2ebbe23d92a4b) Merge remote-tracking branch 'origin/main' into feat/ux-testing-issues-7 — _Ndifreke000, 4d ago_
- **Globe-Wallet** [`2818d0f`](https://github.com/Orbit-Wal/Globe-Wallet/commit/2818d0f36d0a08ea7934e50789f1946f1b4f19a6) Add optimistic send UI, PWA offline support, chart perf tests, testnet t — _Ndifreke000, 4d ago_
<!--RECENT_ACTIVITY:END-->

---

<div align="center">
<sub>Building the crypto ↔ fiat bridge on Stellar.</sub><br>
<sub><!--LAST_UPDATED:START-->
auto-updated · last refresh 2026-09-02 10:39 UTC
<!--LAST_UPDATED:END--></sub>
</div>
