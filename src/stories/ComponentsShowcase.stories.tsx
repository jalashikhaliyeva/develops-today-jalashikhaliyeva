import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ComponentsShowcase } from '../components/sections/ComponentsShowcase';

const meta: Meta<typeof ComponentsShowcase> = {
  title: 'Sections/ComponentsShowcase',
  component: ComponentsShowcase,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A showcase section that displays multiple component demos in a responsive grid layout, including FormDemo and ToastDemo components.'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const WithBackground: Story = {
  render: () => (
    <div className="bg-gray-50 p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <ComponentsShowcase />
      </div>
    </div>
  )
};

export const InPageLayout: Story = {
  render: () => (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto p-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Component Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our interactive components and see them in action.
          </p>
        </div>
        <ComponentsShowcase />
      </div>
    </div>
  )
};

export const Compact: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto p-4">
      <ComponentsShowcase />
    </div>
  )
};

export const WithCustomSpacing: Story = {
  render: () => (
    <div className="bg-white p-16">
      <div className="max-w-6xl mx-auto">
        <ComponentsShowcase />
      </div>
    </div>
  )
}; 