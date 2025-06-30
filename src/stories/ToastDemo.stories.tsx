// src/components/demos/ToastDemo.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ToastDemo } from "../components/demos/ToastDemo/index";
import { ToastProvider } from "@/components/ui/Toast";

const meta: Meta<typeof ToastDemo> = {
  title: "Demos/Toast Demo",
  component: ToastDemo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Interactive demonstration of the Toast notification system with different types, actions, and advanced features.",
      },
    },
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <div className="max-w-lg">
          <Story />
        </div>
      </ToastProvider>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Click the buttons to see different types of toast notifications. Each toast auto-dismisses after a set duration.",
      },
    },
  },
};

export const BasicToasts: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the four basic toast types:\n\n- **Success**: Green theme for positive actions\n- **Error**: Red theme for failures\n- **Warning**: Yellow theme for cautions\n- **Info**: Blue theme for information",
      },
    },
  },
};

export const AdvancedFeatures: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Advanced toast features:\n\n- **Action Buttons**: Toasts with clickable actions\n- **Multiple Toasts**: Sequential toast demonstration\n- **Dismiss All**: Clear all active toasts\n- **Custom Durations**: Different auto-dismiss timings",
      },
    },
  },
};

export const ToastStack: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Click "Show Multiple Toasts" to see how toasts stack and sequence. The system manages up to 5 toasts simultaneously with smooth animations.',
      },
    },
  },
};
