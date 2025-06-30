// src/components/layout/Footer/Footer.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Footer } from '../components/layout/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive footer component with brand information, navigation links, and social media integration.'
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

export const WithDarkBackground: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-900">
      <div className="flex-1"></div>
      <Footer />
    </div>
  )
};

export const InPageContext: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50">
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Sample Page Content</h1>
          <p className="text-gray-600 mb-4">
            This is a sample page to demonstrate how the footer looks in a typical page layout.
          </p>
          <p className="text-gray-600 mb-4">
            The footer will appear at the bottom of the page with proper spacing and styling.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}; 