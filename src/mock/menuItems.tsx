// src/data/menuItems.tsx
import { Home, Users, Settings, FileText } from 'lucide-react';
import { MenuItem } from '@/components/ui/SidebarMenu/SidebarMenu.types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    label: 'Dashboard',
    icon: <Home size={20} />,
    onClick: () => console.log('Dashboard clicked')
  },
  {
    id: '2',
    label: 'Users',
    icon: <Users size={20} />,
    badge: '12',
    children: [
      {
        id: '2-1',
        label: 'All Users',
        onClick: () => console.log('All Users clicked')
      },
      {
        id: '2-2',
        label: 'User Roles',
        children: [
          {
            id: '2-2-1',
            label: 'Administrators',
            onClick: () => console.log('Administrators clicked')
          },
          {
            id: '2-2-2',
            label: 'Moderators',
            onClick: () => console.log('Moderators clicked')
          },
          {
            id: '2-2-3',
            label: 'Regular Users',
            onClick: () => console.log('Regular Users clicked')
          }
        ]
      }
    ]
  },
  {
    id: '3',
    label: 'Documents',
    icon: <FileText size={20} />,
    children: [
      {
        id: '3-1',
        label: 'Recent Files',
        badge: 'new',
        onClick: () => console.log('Recent Files clicked')
      },
      {
        id: '3-2',
        label: 'Shared Documents',
        onClick: () => console.log('Shared clicked')
      }
    ]
  },
  {
    id: '4',
    label: 'Settings',
    icon: <Settings size={20} />,
    onClick: () => console.log('Settings clicked')
  }
];