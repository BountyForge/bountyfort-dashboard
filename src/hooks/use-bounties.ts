import React from 'react';
import { Bounty, BountyStats } from '@/types/bounty';
import { bountyClient } from '@/lib/bounty-client';

export function useBounties() {
  const [bounties, setBounties] = React.useState<Bounty[]>([]);
  const [stats, setStats] = React.useState<BountyStats | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [bountyList, statsData] = await Promise.all([
          bountyClient.listBounties(),
          bountyClient.getStats(),
        ]);
        setBounties(bountyList);
        setStats(statsData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { bounties, stats, loading, error };
}

export function useBounty(id: string) {
  const [bounty, setBounty] = React.useState<Bounty | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    if (!id) return;

    async function fetchBounty() {
      try {
        setLoading(true);
        const data = await bountyClient.getBounty(id);
        setBounty(data || null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchBounty();
  }, [id]);

  return { bounty, loading, error };
}
