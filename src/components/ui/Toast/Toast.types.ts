// src/components/ui/Toast/Toast.types.ts
export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface ToastProps {
  id?: string;
  type?: ToastType;
  title?: string;
  message: string;
  duration?: number;
  position?: ToastPosition;
  closable?: boolean;
  onClose?: (id?: string) => void;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  'data-testid'?: string;
}

export interface ToastContextValue {
  toasts: ToastInstance[];
  addToast: (toast: Omit<ToastInstance, 'id' | 'timestamp'>) => string;
  removeToast: (id?: string) => void;
  clearAll: () => void;
}

export interface ToastInstance extends ToastProps {
  id: string;
  timestamp: number;
}