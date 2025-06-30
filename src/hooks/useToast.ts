// src/hooks/useToast.ts - REPLACE WITH THIS FIXED VERSION
import { useContext } from 'react';
import { ToastContext } from '@/components/ui/Toast/ToastProvider';
import { ToastType } from '@/components/ui/Toast/Toast.types';

export const useToast = () => {
  const context = useContext(ToastContext);
  
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  const { addToast, removeToast, clearAll } = context;

  const toast = {
    success: (message: string, options?: { title?: string; duration?: number; action?: { label: string; onClick: () => void } }) =>
      addToast({ type: 'success', message, ...options }),
    
    error: (message: string, options?: { title?: string; duration?: number; action?: { label: string; onClick: () => void } }) =>
      addToast({ type: 'error', message, ...options }),
    
    warning: (message: string, options?: { title?: string; duration?: number; action?: { label: string; onClick: () => void } }) =>
      addToast({ type: 'warning', message, ...options }),
    
    info: (message: string, options?: { title?: string; duration?: number; action?: { label: string; onClick: () => void } }) =>
      addToast({ type: 'info', message, ...options }),

    custom: (type: ToastType, message: string, options?: { title?: string; duration?: number; action?: { label: string; onClick: () => void } }) =>
      addToast({ type, message, ...options }),

    dismiss: removeToast,
    dismissAll: clearAll
  };

  return toast;
};