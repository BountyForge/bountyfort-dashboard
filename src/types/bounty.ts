export type BountyStatus = 'Open' | 'Active' | 'Completed' | 'Cancelled';

export interface Bounty {
  id: string;
  title: string;
  description: string;
  maintainer: string;
  reviewer: string;
  asset: string;
  amount: string;
  balance: string;
  deadline: number;
  metadataHash: string;
  category?: string;
  status: BountyStatus;
  createdAt: number;
}

export type SubmissionStatus = 'Pending' | 'Approved' | 'Rejected';

export interface Submission {
  id: string;
  bountyId: string;
  contributor: string;
  workHash: string;
  workUrl: string;
  summary: string;
  timestamp: number;
  status: SubmissionStatus;
}

export interface BountyStats {
  openCount: number;
  activeCount: number;
  completedCount: number;
  pendingSubmissions: number;
  totalRewardsUSD: string;
}
