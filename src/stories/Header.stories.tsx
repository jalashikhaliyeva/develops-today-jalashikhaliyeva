// src/components/layout/Header/Header.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Header } from '../components/layout/Header';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive header component with navigation menu toggle and GitHub link integration.'
      }
    }
  },
  argTypes: {
    onMenuClick: { action: 'menu clicked' }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onMenuClick: () => console.log('Menu clicked')
  }
};

export const WithPageContent: Story = {
  render: (args) => (
    <div className="min-h-screen bg-gray-50">
      <Header {...args} />
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Sample Page Content</h1>
          <p className="text-gray-600 mb-4">
            This demonstrates how the header looks in a typical page layout with content below it.
          </p>
          <p className="text-gray-600 mb-4">
            The header is sticky and will remain at the top when scrolling.
          </p>
        </div>
      </main>
    </div>
  ),
  args: {
    onMenuClick: () => console.log('Menu clicked')
  }
};

export const WithLongContent: Story = {
  render: (args) => (
    <div className="min-h-screen bg-gray-50">
      <Header {...args} />
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Long Page Content</h1>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="mb-4 p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Section {i + 1}</h2>
              <p className="text-gray-600">
                This is section {i + 1} to demonstrate the sticky header behavior when scrolling through long content.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  ),
  args: {
    onMenuClick: () => console.log('Menu clicked')
  }
}; 