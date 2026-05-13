"use client";

import React from 'react';
import { useBounties } from '@/hooks/use-bounties';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatAmount, formatDeadline, formatAddress } from '@/lib/format';
import Link from 'next/link';
import { Search, Filter, ArrowRight } from 'lucide-react';

export default function BountiesPage() {
  const { bounties, loading } = useBounties();
  const [search, setSearch] = React.useState('');

  const filteredBounties = bounties.filter(b => 
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.category?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Bounties</h1>
        <div className="flex items-center gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search bounties..."
              className="pl-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex h-[40vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBounties.map((bounty) => (
            <Card key={bounty.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-md">
              <CardHeader className="bg-muted/50 pb-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                    {bounty.category}
                  </span>
                  <span className="text-xs text-muted-foreground">ID: #{bounty.id}</span>
                </div>
                <CardTitle className="mt-2 line-clamp-1 text-xl">{bounty.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-4">
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {bounty.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {formatAmount(bounty.amount)} {bounty.asset}
                    </p>
                    <p className="text-xs text-muted-foreground">Reward</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{formatDeadline(bounty.deadline)}</p>
                    <p className="text-xs text-muted-foreground">Deadline</p>
                  </div>
                </div>
              </CardContent>
              <div className="border-t p-4">
                <Link href={`/bounties/${bounty.id}`}>
                  <Button className="w-full gap-2" variant="secondary">
                    View Details <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
