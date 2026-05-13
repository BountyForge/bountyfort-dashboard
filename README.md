# BountyFort Dashboard

BountyFort Dashboard is a professional web interface for managing decentralised bounty workflows on the Stellar network. It provides a comprehensive suite of tools for maintainers, reviewers, and contributors to interact with the BountyFort smart contracts.

## Features

- **Consolidated Dashboard**: High-level overview of bounty activity and escrow stats.
- **Bounty Management**: Create, fund, and manage bounties with custom assets and deadlines.
- **Contributor Workflow**: Submit work references and track submission status.
- **Review & Payout**: Dedicated interface for reviewers to approve work and trigger on-chain payouts.
- **Wallet Integration**: Support for Stellar wallet connections (Freighter-ready abstraction).
- **Responsive Design**: Mobile-optimised interface for on-the-go bounty tracking.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Stellar Interaction**: [@stellar/stellar-sdk](https://github.com/stellar/js-stellar-sdk)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A Stellar wallet (e.g., Freighter) for transaction signing

### Installation

```bash
npm install
```

### Development

1. Copy `.env.example` to `.env.local` and configure your RPC and contract IDs.
2. Run the development server:
   ```bash
   npm run dev
   ```

### Testing

```bash
# Run unit tests
npm test

# Run E2E tests
npm run test:e2e
```

## Security

Please refer to [SECURITY.md](SECURITY.md) for security guidelines. BountyFort Dashboard is an interface to smart contracts; always review transactions in your wallet before signing.

## License

MIT License - see [LICENSE](LICENSE) for details.
