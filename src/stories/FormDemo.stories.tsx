// src/components/demos/FormDemo.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { FormDemo } from "../components/demos/FormDemo/index";
import { ToastProvider } from "@/components/ui/Toast";

const meta: Meta<typeof FormDemo> = {
  title: "Demos/Form Demo",
  component: FormDemo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Interactive form demonstration showcasing Input component with real-time validation, success/error states, and toast notifications.",
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
          "Complete form with validation for username, email, password, and phone fields. Try filling out the form to see validation in action.",
      },
    },
  },
};

export const ValidationStates: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the form's validation behavior:\n\n- Type invalid data and blur to see error states\n- Type valid data to see success states\n- Submit with errors to see toast notifications\n- Submit with valid data to see success toast and form reset",
      },
    },
  },
};

export const FormFeatures: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Key features showcased:\n\n- Real-time validation on blur\n- Dynamic success/error visual states\n- Password visibility toggle\n- Clearable inputs\n- Helper text guidance\n- Toast notifications for form feedback\n- Automatic form reset on success",
      },
    },
  },
};
