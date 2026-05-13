# Contract Integration

BountyFort Dashboard interacts with the BountyFort Soroban smart contracts using the `@stellar/stellar-sdk`.

## Environment Variables

- `NEXT_PUBLIC_SOROBAN_RPC_URL`: The URL of the Soroban RPC provider (e.g., Testnet).
- `NEXT_PUBLIC_SOROBAN_NETWORK_PASSPHRASE`: The network passphrase for transaction signing.
- `NEXT_PUBLIC_BOUNTYFORT_CONTRACT_ID`: The deployed ID of the BountyFort contract.

## Contract Mapping

The dashboard maps contract data structures to UI-friendly TypeScript types:

| Contract State | Dashboard UI State |
|----------------|--------------------|
| `BountyStatus::Open` | Created / Pending Funding |
| `BountyStatus::Active` | Active / Accepting Submissions |
| `BountyStatus::Completed` | Completed / Paid |
| `BountyStatus::Cancelled` | Cancelled / Refunded |

## Transaction Workflow

1. **Build**: Use `bounty-client.ts` to build the transaction for a specific contract function.
2. **Sign**: Pass the transaction to the connected wallet via the wallet abstraction.
3. **Submit**: Submit the signed transaction to the Soroban RPC.
4. **Notify**: Use toast notifications to inform the user of success or failure.

## Development with Mocks

For local development, the `bounty-client.ts` can be configured to return data from `src/lib/mock-data.ts`. This allows UI development to proceed even when the network or contract is unavailable.
