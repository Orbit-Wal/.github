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
| [`mobile`](https://github.com/Orbit-Wal/mobile) | iOS/Android wallet app | `TypeScript` | 19h ago |
| [`Globe-Wallet`](https://github.com/Orbit-Wal/Globe-Wallet) | Web app — dashboard, convert, off-ramp, savings | `TypeScript` · ⭐ 3 | 20h ago |
| [`backend`](https://github.com/Orbit-Wal/backend) | REST API — accounts, balances, payments, pricing | `TypeScript` | 20h ago |
| [`contract`](https://github.com/Orbit-Wal/contract) | On-chain wallet registry & token-transfer guardrails | `Rust` | 20h ago |
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
- **mobile** [`8d4d92e`](https://github.com/Orbit-Wal/mobile/commit/8d4d92eaeb286f40637574e725a54ffd75bb8334) Merge pull request #54 from Ndifreke000/feat/guardian-recovery-11 — _ndii-dev, 19h ago_
- **mobile** [`b471e47`](https://github.com/Orbit-Wal/mobile/commit/b471e4701435de496afda9b095067fa1f376ecdc) Merge branch 'main' into feat/guardian-recovery-11 — _ndii-dev, 19h ago_
- **mobile** [`ab51687`](https://github.com/Orbit-Wal/mobile/commit/ab51687f4e9cac742b098338acff8b7bd985a5a2) feat(recovery): guardian-based social/multi-sig recovery (fixes #11) — _yosemite01, 19h ago_
- **contract** [`a217687`](https://github.com/Orbit-Wal/contract/commit/a21768794fae4b332916d0b22bfba18c71e7b661) Merge pull request #19 from Orbit-Wal/fix/globe-wallet-admin-transfer-me — _ndii-dev, 20h ago_
- **contract** [`21fb0b0`](https://github.com/Orbit-Wal/contract/commit/21fb0b0cddb71589040bf59f3192d0925a58c41b) Merge branch 'main' into fix/globe-wallet-admin-transfer-merge — _ndii-dev, 20h ago_
- **contract** [`a917340`](https://github.com/Orbit-Wal/contract/commit/a9173400e0dea117528f3095b1586f1cf5f72530) Merge pull request #20 from Orbit-Wal/feat/guardian-recovery — _ndii-dev, 20h ago_
- **backend** [`8695b51`](https://github.com/Orbit-Wal/backend/commit/8695b513a29f19ec2247e1a0f018a4ee591c4b39) Merge pull request #55 from shepherd-001/feat/transaction-cursor-paginat — _ndii-dev, 20h ago_
- **Globe-Wallet** [`3454808`](https://github.com/Orbit-Wal/Globe-Wallet/commit/3454808cea65f87dc585217e253fe03cadb5972d) Merge pull request #124 from od-hunter/feat/multi-account-switching — _ndii-dev, 20h ago_
<!--RECENT_ACTIVITY:END-->

---

<div align="center">
<sub>Building the crypto ↔ fiat bridge on Stellar.</sub><br>
<sub><!--LAST_UPDATED:START-->
auto-updated · last refresh 2026-07-20 08:55 UTC
<!--LAST_UPDATED:END--></sub>
</div>
