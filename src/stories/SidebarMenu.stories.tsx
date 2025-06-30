// src/components/ui/SidebarMenu/SidebarMenu.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { SidebarMenu } from '../components/ui/SidebarMenu/SidebarMenu';
import { Home, Settings, Users, FileText, Menu } from 'lucide-react';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A sliding sidebar menu with nested navigation items and smooth animations.'
      }
    }
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right']
    },
    onClose: { action: 'closed' }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleMenuItems = [
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
        label: 'User Groups',
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
        label: 'Shared',
        onClick: () => console.log('Shared clicked')
      },
      {
        id: '3-3',
        label: 'Archived',
        disabled: true,
        onClick: () => console.log('Archived clicked')
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

const SidebarDemo = ({ position = 'right' as const, ...args }: { position?: 'left' | 'right'; closeOnItemClick?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen bg-gray-100 relative">
      <div className="p-8">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Menu size={20} />
          <span>Open Sidebar ({position})</span>
        </button>
        
        <div className="mt-8">
          <h1 className="text-2xl font-bold text-gray-900">Page Content</h1>
          <p className="text-gray-600 mt-2">
            This is the main page content. Click the button above to open the sidebar menu.
          </p>
        </div>
      </div>

      <SidebarMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={sampleMenuItems}
        position={position}
        {...args}
      />
    </div>
  );
};

export const RightSidebar: Story = {
  render: (args) => <SidebarDemo {...args} position="right" />
};

export const LeftSidebar: Story = {
  render: (args) => <SidebarDemo {...args} position="left" />
};

export const WithCustomContent: Story = {
  render: (args) => (
    <SidebarDemo {...args}>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-900">Custom Content</h3>
        <p className="text-sm text-blue-700 mt-1">
          You can add any custom content here.
        </p>
      </div>
    </SidebarDemo>
  )
};

export const CloseOnItemClick: Story = {
  render: (args) => <SidebarDemo {...args} closeOnItemClick={true} />
};