// src/components/ui/Input/Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from '../components/ui/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile input component with multiple types, validation states, and interactive features.'
      }
    }
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard']
    },
    onChange: { action: 'changed' }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    label: 'Default Input'
  }
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
    label: 'Password'
  }
};

export const WithClearButton: Story = {
  args: {
    placeholder: 'Type something...',
    label: 'Clearable Input',
    clearable: true,
    defaultValue: 'Clear me!'
  }
};

export const WithError: Story = {
  args: {
    placeholder: 'Enter email...',
    label: 'Email',
    type: 'email',
    error: 'Please enter a valid email address',
    defaultValue: 'invalid-email'
  }
};

export const Success: Story = {
  args: {
    placeholder: 'Enter text...',
    label: 'Valid Input',
    success: true,
    defaultValue: 'Valid input!'
  }
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input...',
    label: 'Disabled',
    disabled: true,
    defaultValue: 'Cannot edit'
  }
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Input size="sm" label="Small" placeholder="Small input" />
      <Input size="md" label="Medium" placeholder="Medium input" />
      <Input size="lg" label="Large" placeholder="Large input" />
    </div>
  )
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Input variant="outlined" label="Outlined" placeholder="Outlined variant" />
      <Input variant="filled" label="Filled" placeholder="Filled variant" />
      <Input variant="standard" label="Standard" placeholder="Standard variant" />
    </div>
  )
};
