import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { HeroSection } from '../components/sections/HeroSection/index';

const HeroSectionWithMockToast = () => {
  return <HeroSection />;
};

const meta = {
  title: 'Sections/HeroSection',
  component: HeroSectionWithMockToast,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A modern, animated hero section with interactive elements, floating animations, and call-to-action buttons. Features mouse tracking, gradient backgrounds, and responsive design.',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
        { name: 'gradient', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Since HeroSection doesn't take props, we can document its features
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HeroSectionWithMockToast>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The default hero section with all interactive features enabled.',
      },
    },
  },
};

// Story with dark background to show contrast
export const OnDarkBackground: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Hero section displayed on a dark background to showcase the gradient overlay.',
      },
    },
  },
};

// Story with custom gradient background
export const OnGradientBackground: Story = {
  parameters: {
    backgrounds: { default: 'gradient' },
    docs: {
      description: {
        story: 'Hero section on a gradient background showing how it adapts to different contexts.',
      },
    },
  },
};

// Mobile viewport story
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Hero section optimized for mobile devices with responsive typography and layout.',
      },
    },
  },
};

// Tablet viewport story
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Hero section on tablet-sized screens showing the responsive design.',
      },
    },
  },
};

// Desktop large story
export const DesktopLarge: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    docs: {
      description: {
        story: 'Hero section on large desktop screens showcasing the full typography scale.',
      },
    },
  },
};

// Reduced motion story for accessibility
export const ReducedMotion: Story = {
  decorators: [
    (Story) => (
      <div 
        style={{ 
          minHeight: '100vh', 
          position: 'relative',
        }}
      >
        <style>
          {`
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          `}
        </style>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Hero section with reduced motion for users who prefer less animation (accessibility consideration).',
      },
    },
  },
};

// Interactive elements showcase
export const InteractiveShowcase: Story = {
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <div 
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '10px',
            borderRadius: '8px',
            fontSize: '12px',
            zIndex: 1000,
            maxWidth: '300px',
          }}
        >
          <strong>Interactive Features:</strong>
          <ul style={{ margin: '5px 0', paddingLeft: '15px' }}>
            <li>Move mouse to see cursor trail</li>
            <li>Hover over buttons for animations</li>
            <li>Click &quot;Try Components&quot; for toast</li>
            <li>Click &quot;Explore Storybook&quot; to open localhost:6006</li>
          </ul>
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates all interactive features including mouse tracking, button hover effects, and click actions.',
      },
    },
  },
};

// Performance story (without animations for testing)
export const Performance: Story = {
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <style>
          {`
            .animate-bounce,
            .animate-pulse,
            .animate-ping,
            .animate-gradient {
              animation: none !important;
            }
          `}
        </style>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Hero section with animations disabled for performance testing and older devices.',
      },
    },
  },
};

// High contrast mode for accessibility
export const HighContrast: Story = {
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <style>
          {`
            .bg-gradient-to-br {
              background: white !important;
            }
            .text-gray-600 {
              color: #000000 !important;
            }
            .bg-white\\/80 {
              background: #000000 !important;
              color: #ffffff !important;
              border-color: #ffffff !important;
            }
          `}
        </style>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Hero section with high contrast colors for improved accessibility.',
      },
    },
  },
};