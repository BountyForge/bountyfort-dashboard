import React from 'react';
import { BountyStats } from '@/types/bounty';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { DollarSign, ListChecks, Users, Clock } from 'lucide-react';

export function DashboardStats({ stats }: { stats: BountyStats }) {
  const items = [
    {
      title: 'Total Rewards',
      value: `$${stats.totalRewardsUSD}`,
      description: 'Tracked across all bounties',
      icon: DollarSign,
    },
    {
      title: 'Active Bounties',
      value: stats.activeCount,
      description: 'Open for submissions',
      icon: ListChecks,
    },
    {
      title: 'Pending Reviews',
      value: stats.pendingSubmissions,
      description: 'Submissions awaiting approval',
      icon: Clock,
    },
    {
      title: 'Completed',
      value: stats.completedCount,
      description: 'Successfully paid out',
      icon: Users,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
