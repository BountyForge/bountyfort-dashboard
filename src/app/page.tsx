"use client";

import React from 'react';
import { useBounties } from '@/hooks/use-bounties';
import { DashboardStats } from '@/components/dashboard-stats';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatAmount, formatDeadline, formatAddress } from '@/lib/format';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight, Plus } from 'lucide-react';

export default function DashboardPage() {
  const { bounties, stats, loading } = useBounties();

  if (loading || !stats) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  const recentBounties = bounties.slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground">
            Welcome to BountyFort. Here is what is happening across the protocol.
          </p>
        </div>
        <Link href="/create">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Bounty
          </Button>
        </Link>
      </div>

      <DashboardStats stats={stats} />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Recent Bounties</CardTitle>
            <Link href="/bounties">
              <Button variant="ghost" size="sm" className="gap-1">
                View All <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBounties.map((bounty) => (
                <div key={bounty.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="space-y-1">
                    <p className="font-medium">{bounty.title}</p>
                    <p className="text-sm text-muted-foreground">
                      By {formatAddress(bounty.maintainer)} • {bounty.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{formatAmount(bounty.amount)} {bounty.asset}</p>
                    <p className="text-xs text-muted-foreground">{formatDeadline(bounty.deadline)}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Protocol Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-[200px] items-center justify-center text-muted-foreground">
              {/* Activity chart placeholder */}
              <p className="text-sm italic">Activity visualization coming soon</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
