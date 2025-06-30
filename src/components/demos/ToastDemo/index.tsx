// src/components/demos/ToastDemo.tsx
'use client';

import { useToast } from '@/components/ui';

export const ToastDemo: React.FC = () => {
  const toast = useToast();

  const showSuccessToast = () => {
    toast.success('Operation completed successfully!', {
      title: 'Success',
      duration: 4000
    });
  };

  const showErrorToast = () => {
    toast.error('Something went wrong!', {
      title: 'Error',
      duration: 5000
    });
  };

  const showWarningToast = () => {
    toast.warning('This action cannot be undone', {
      title: 'Warning',
      duration: 6000
    });
  };

  const showInfoToast = () => {
    toast.info('New update available!', {
      title: 'Info',
      action: { 
        label: 'Update', 
        onClick: () => alert('Updating...') 
      },
      duration: 7000
    });
  };

  const showCustomToast = () => {
    toast.success('User profile updated successfully!', {
      title: 'Profile Updated',
      action: {
        label: 'View Profile',
        onClick: () => console.log('Navigating to profile...')
      },
      duration: 5000
    });
  };

  const showMultipleToasts = () => {
    toast.info('Processing your request...', { duration: 2000 });
    setTimeout(() => {
      toast.warning('Almost done...', { duration: 2000 });
    }, 1000);
    setTimeout(() => {
      toast.success('Request completed!', { duration: 3000 });
    }, 2500);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Toast Notifications</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={showSuccessToast}
          className="px-4 py-3 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors font-medium"
        >
          Success Toast
        </button>
        
        <button
          onClick={showErrorToast}
          className="px-4 py-3 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors font-medium"
        >
          Error Toast
        </button>
        
        <button
          onClick={showWarningToast}
          className="px-4 py-3 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors font-medium"
        >
          Warning Toast
        </button>
        
        <button
          onClick={showInfoToast}
          className="px-4 py-3 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors font-medium"
        >
          Info with Action
        </button>
      </div>

      {/* Additional Demo Buttons */}
      <div className="grid grid-cols-1 gap-3 mb-6">
        <button
          onClick={showCustomToast}
          className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-colors font-medium"
        >
          Custom Success with Action
        </button>
        
        <button
          onClick={showMultipleToasts}
          className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-lg hover:bg-indigo-200 transition-colors font-medium"
        >
          Show Multiple Toasts (Sequence)
        </button>
        
        <button
          onClick={() => toast.dismissAll()}
          className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium"
        >
          Dismiss All Toasts
        </button>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Auto-dismiss with configurable duration</li>
          <li>• Multiple types (success, error, warning, info)</li>
          <li>• Smooth slide animations</li>
          <li>• Action buttons with callbacks</li>
          <li>• Flexible positioning</li>
          <li>• Stack management (max toasts)</li>
          <li>• Manual dismiss functionality</li>
          <li>• Custom titles and messages</li>
        </ul>
      </div>
    </div>
  );
};