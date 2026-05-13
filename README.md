# BountyFort Dashboard

[![Next.js](https://img.shields.io/badge/Framework-Next.js-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue.svg)](https://www.typescriptlang.org/)
[![Stellar](https://img.shields.io/badge/Network-Stellar-blue.svg)](https://stellar.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

BountyFort Dashboard is a high-performance, professional command center for the BountyFort protocol. Designed for the Stellar ecosystem, it provides project maintainers, reviewers, and contributors with a streamlined interface to manage decentralized bounty workflows with precision and clarity.

---

## ✨ Feature Highlights

- **Unified Command Center**: Real-time visualization of protocol-wide bounty activity and reward distribution.
- **Precision Management**: Sophisticated tools for creating, funding, and tracking bounties with custom assets.
- **Streamlined Submissions**: Dedicated workspace for contributors to submit verified work references and track payout progress.
- **Reviewer Workflow**: Optimized interface for designated reviewers to authorize on-chain distributions.
- **Wallet-Agnostic Core**: Robust abstraction layer prepared for Freighter and other Stellar-compatible wallets.
- **Institutional-Grade UI**: Responsive, accessible interface built with Tailwind CSS and shadcn/ui.

## 🛠️ Technology Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 14 (App Router), React 18 |
| **Logic** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS, Lucide Icons |
| **Components** | shadcn/ui (Radix UI Primitives) |
| **Stellar SDK** | `@stellar/stellar-sdk` |
| **Testing** | Vitest (Unit), Playwright (E2E) |

## 🚀 Getting Started

### Environment Configuration

1. **Clone & Install**:
   ```bash
   npm install
   ```
2. **Environment Variables**:
   Copy `.env.example` to `.env.local` and provide your specific RPC and Contract configurations:
   ```env
   NEXT_PUBLIC_SOROBAN_RPC_URL=https://soroban-testnet.stellar.org
   NEXT_PUBLIC_BOUNTYFORT_CONTRACT_ID=...
   ```

### Development Scripts

- **Development**: `npm run dev` — Launch the interactive local environment.
- **Build**: `npm run build` — Generate an optimized production bundle.
- **Test**: `npm run test` — Execute the Vitest unit testing suite.
- **E2E**: `npm run test:e2e` — Run Playwright end-to-end user flows.
- **Lint**: `npm run lint` — Enforce codebase consistency.

## 🛡️ Security & Integrity

- **Non-Custodial**: The dashboard is a pure interface; private keys are never requested or stored.
- **Verification**: Always verify transaction payloads in your connected wallet before signing.
- **Audit**: This dashboard has **not** been formally audited.
- **Guidance**: See [SECURITY.md](SECURITY.md) for detailed safety protocols.

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.

---
*Empowering the next generation of decentralized collaboration on Stellar.*
