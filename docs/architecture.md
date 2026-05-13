# Frontend Architecture

BountyFort Dashboard is built with a modern, modular architecture using Next.js 14 and the App Router.

## Directory Structure

- `src/app`: Page components and layouts using the Next.js App Router.
- `src/components`: Reusable UI components. `src/components/ui` contains primitive primitives from shadcn/ui.
- `src/hooks`: Custom React hooks for state management and contract interaction.
- `src/lib`: Core logic, including the contract client, wallet abstraction, and formatting utilities.
- `src/types`: TypeScript definitions for domain models.
- `src/config`: Static configuration for navigation, chains, and contracts.

## Data Flow

The application follows a unidirectional data flow:
1. **Contract Layer**: `bounty-client.ts` abstracts Soroban contract calls.
2. **Hook Layer**: Custom hooks (e.g., `use-bounties.ts`) manage fetching and local state.
3. **UI Layer**: Components consume hooks to render data and trigger actions.

## Wallet & Contract Abstraction

To ensure flexibility, wallet interaction is abstracted through `src/lib/wallet.ts`. This allows the dashboard to support multiple Stellar wallets in the future. Contract interactions are similarly abstracted in `src/lib/bounty-client.ts`, which supports a mock-fallback mode for development without a live network.

## Routing

- `/`: Dashboard overview and stats.
- `/bounties`: Searchable and filterable bounty listing.
- `/bounties/[id]`: Detailed view of a single bounty and its submissions.
- `/create`: Multi-step form for bounty creation.
- `/submissions`: Global view of user's contributions.
- `/settings`: Network and profile configuration.
