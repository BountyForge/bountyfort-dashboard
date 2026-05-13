import { LayoutDashboard, List, PlusCircle, History, Settings } from 'lucide-react';

export const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Bounties', href: '/bounties', icon: List },
  { name: 'Create Bounty', href: '/create', icon: PlusCircle },
  { name: 'Submissions', href: '/submissions', icon: History },
  { name: 'Settings', href: '/settings', icon: Settings },
];
