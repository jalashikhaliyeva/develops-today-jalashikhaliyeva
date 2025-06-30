// src/components/ui/Toast/Toast.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Toast, ToastProvider, useToast } from '../components/ui/Toast/index';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toast notifications for displaying temporary messages to users.'
      }
    }
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info']
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center']
    },
    onClose: { action: 'closed' }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Operation completed successfully!',
    duration: 0 // Prevent auto-dismiss in Storybook
  }
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    duration: 0
  }
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    message: 'This action cannot be undone.',
    duration: 0
  }
};

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Info',
    message: 'New update available!',
    duration: 0
  }
};

export const WithAction: Story = {
  args: {
    type: 'info',
    title: 'Update Available',
    message: 'A new version is ready to install.',
    action: {
      label: 'Update Now',
      onClick: () => alert('Updating...')
    },
    duration: 0
  }
};

export const NonClosable: Story = {
  args: {
    type: 'warning',
    message: 'This toast cannot be closed manually.',
    closable: false,
    duration: 0
  }
};

// Toast Provider Demo Component - ADD THIS HERE
const ToastDemo = () => {
  const toast = useToast();

  return (
    <div className="space-y-2">
      <button
        onClick={() => toast.success('Success message!')}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
      >
        Show Success
      </button>
      <button
        onClick={() => toast.error('Error message!')}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
      >
        Show Error
      </button>
      <button
        onClick={() => toast.warning('Warning message!')}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 cursor-pointer"
      >
        Show Warning
      </button>
      <button
        onClick={() => toast.info('Info message!')}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
      >
        Show Info
      </button>
    </div>
  );
};

export const InteractiveDemo: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  )
};