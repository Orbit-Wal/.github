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
| [`mobile`](https://github.com/Orbit-Wal/mobile) | iOS/Android wallet app | `TypeScript` | 14h ago |
| [`Globe-Wallet`](https://github.com/Orbit-Wal/Globe-Wallet) | Web app — dashboard, convert, off-ramp, savings | `TypeScript` · ⭐ 3 | 14h ago |
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
- **Globe-Wallet** [`c289b8a`](https://github.com/Orbit-Wal/Globe-Wallet/commit/c289b8a220ebe90beaf5db27133f8ef470284f3f) Merge pull request #152 from Orbit-Wal/feat/ux-testing-issues-78-91-94-1 — _ndii-dev, 14h ago_
- **Globe-Wallet** [`4a4926e`](https://github.com/Orbit-Wal/Globe-Wallet/commit/4a4926e5b0809a4a4ac34d0a7ad2ebbe23d92a4b) Merge remote-tracking branch 'origin/main' into feat/ux-testing-issues-7 — _Ndifreke000, 14h ago_
- **Globe-Wallet** [`2818d0f`](https://github.com/Orbit-Wal/Globe-Wallet/commit/2818d0f36d0a08ea7934e50789f1946f1b4f19a6) Add optimistic send UI, PWA offline support, chart perf tests, testnet t — _Ndifreke000, 14h ago_
- **Globe-Wallet** [`55bcae7`](https://github.com/Orbit-Wal/Globe-Wallet/commit/55bcae787d174b912e1daf767cbdeaba9a98df0e) Merge pull request #151 from Orbit-Wal/feat/chain-support-issues-92-142- — _ndii-dev, 14h ago_
- **Globe-Wallet** [`cce745b`](https://github.com/Orbit-Wal/Globe-Wallet/commit/cce745bfaecafb9d409f46cb7226cba5f7c6d692) Add Solana + Sui chain modules and Ledger hardware-wallet signing — _Ndifreke000, 14h ago_
- **mobile** [`cec84f1`](https://github.com/Orbit-Wal/mobile/commit/cec84f153feb6460576077fa6a07c469cabd73c5) Merge pull request #66 from Orbit-Wal/feat/account-mgmt-issues-9-10-18-2 — _ndii-dev, 14h ago_
- **mobile** [`7fc5118`](https://github.com/Orbit-Wal/mobile/commit/7fc5118afeee323439b70f3bf01e970cd303c497) Merge remote-tracking branch 'origin/main' into feat/account-mgmt-issues — _Ndifreke000, 14h ago_
- **mobile** [`a922b70`](https://github.com/Orbit-Wal/mobile/commit/a922b70851daee2df9a7ff0c2625d37dae8954ec) Merge pull request #65 from Orbit-Wal/feat/infra-issues-13-14-19-22 — _ndii-dev, 14h ago_
<!--RECENT_ACTIVITY:END-->

---

<div align="center">
<sub>Building the crypto ↔ fiat bridge on Stellar.</sub><br>
<sub><!--LAST_UPDATED:START-->
auto-updated · last refresh 2026-08-29 12:18 UTC
<!--LAST_UPDATED:END--></sub>
</div>
