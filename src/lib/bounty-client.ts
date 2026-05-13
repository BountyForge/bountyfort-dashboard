import { Bounty, Submission, BountyStats } from '@/types/bounty';
import { MOCK_BOUNTIES, MOCK_SUBMISSIONS, MOCK_STATS } from './mock-data';

/**
 * Abstraction for interacting with the BountyFort Soroban contract.
 * Currently uses mock data with a delay to simulate network latency.
 * This can be replaced with actual Soroban RPC calls.
 */
export class BountyClient {
  private useMocks: boolean;

  constructor(useMocks = true) {
    this.useMocks = useMocks;
  }

  async getStats(): Promise<BountyStats> {
    await this.delay(500);
    return MOCK_STATS;
  }

  async listBounties(): Promise<Bounty[]> {
    await this.delay(800);
    return MOCK_BOUNTIES;
  }

  async getBounty(id: string): Promise<Bounty | undefined> {
    await this.delay(400);
    return MOCK_BOUNTIES.find(b => b.id === id);
  }

  async listSubmissions(bountyId?: string): Promise<Submission[]> {
    await this.delay(600);
    if (bountyId) {
      return MOCK_SUBMISSIONS.filter(s => s.bountyId === bountyId);
    }
    return MOCK_SUBMISSIONS;
  }

  async createBounty(data: Partial<Bounty>): Promise<string> {
    console.log('Creating bounty:', data);
    await this.delay(1500);
    return Math.floor(Math.random() * 1000).toString();
  }

  async fundBounty(id: string): Promise<void> {
    console.log('Funding bounty:', id);
    await this.delay(2000);
  }

  async submitWork(bountyId: string, data: any): Promise<string> {
    console.log('Submitting work for bounty:', bountyId, data);
    await this.delay(1500);
    return Math.floor(Math.random() * 1000).toString();
  }

  async approveSubmission(bountyId: string, submissionId: string): Promise<void> {
    console.log('Approving submission:', submissionId, 'for bounty:', bountyId);
    await this.delay(2000);
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const bountyClient = new BountyClient();
