import React from 'react';
import { useBounty } from '@/hooks/use-bounties';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatAmount, formatDeadline, formatAddress } from '@/lib/format';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Shield, Clock, Wallet } from 'lucide-react';

export default function BountyDetailPage({ params }: { params: { id: string } }) {
  const { bounty, loading } = useBounty(params.id);

  if (loading) return <div>Loading...</div>;
  if (!bounty) return <div>Bounty not found</div>;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight">{bounty.title}</h1>
            <Badge variant={bounty.status === 'Active' ? 'default' : 'secondary'}>
              {bounty.status}
            </Badge>
          </div>
          <p className="text-muted-foreground">Bounty ID: {bounty.id}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            View Metadata
          </Button>
          <Button className="gap-2">
            Fund Bounty
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Description</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap text-muted-foreground">{bounty.description}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Reward</span>
              <span className="font-bold">{formatAmount(bounty.amount)} {bounty.asset}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Deadline</span>
              <span>{formatDeadline(bounty.deadline)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Maintainer</span>
              <span>{formatAddress(bounty.maintainer)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Reviewer</span>
              <span>{formatAddress(bounty.reviewer)}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
