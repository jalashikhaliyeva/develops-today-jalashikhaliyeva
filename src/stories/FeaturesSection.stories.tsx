import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FeaturesSection } from '../components/sections/FeaturesSection';

const meta: Meta<typeof FeaturesSection> = {
  title: 'Sections/FeaturesSection',
  component: FeaturesSection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A features section component that showcases key features with icons, titles, and descriptions in a responsive grid layout.'
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
        <FeaturesSection />
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
            Why Choose Our Component Library?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with modern development practices and designed for the best developer experience.
          </p>
        </div>
        <FeaturesSection />
      </div>
    </div>
  )
};

export const Compact: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto p-4">
      <FeaturesSection />
    </div>
  )
};

export const WithCustomSpacing: Story = {
  render: () => (
    <div className="bg-white p-16">
      <div className="max-w-6xl mx-auto">
        <FeaturesSection />
      </div>
    </div>
  )
}; 