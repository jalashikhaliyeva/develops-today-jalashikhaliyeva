// src/components/ui/Toast/ToastProvider.tsx - REPLACE WITH THIS FIXED VERSION
'use client';

import React, { createContext, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Toast } from './Toast';
import { ToastContextValue, ToastInstance, ToastPosition } from './Toast.types';
import { cn } from '@/utils/cn';

// Export the context so it can be imported by useToast
export const ToastContext = createContext<ToastContextValue | null>(null);

const positionClasses: Record<ToastPosition, string> = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',  
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
  'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
};

interface ToastProviderProps {
  children: React.ReactNode;
  position?: ToastPosition;
  maxToasts?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ 
  children, 
  position = 'bottom-right',
  maxToasts = 5 
}) => {
  const [toasts, setToasts] = useState<ToastInstance[]>([]);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  const addToast = useCallback((toast: Omit<ToastInstance, 'id' | 'timestamp'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newToast: ToastInstance = {
      ...toast,
      id,
      timestamp: Date.now()
    };

    setToasts(current => {
      const updated = [newToast, ...current];
      // Limit the number of toasts
      return updated.slice(0, maxToasts);
    });

    return id;
  }, [maxToasts]);

  const removeToast = useCallback((id?: string) => {
    if (id) {
      setToasts(current => current.filter(toast => toast.id !== id));
    }
  }, []);

  const clearAll = useCallback(() => {
    setToasts([]);
  }, []);

  const contextValue: ToastContextValue = {
    toasts,
    addToast,
    removeToast,
    clearAll
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {mounted && createPortal(
        <div 
          className={cn(
            'fixed z-50 flex flex-col space-y-2 pointer-events-none',
            positionClasses[position]
          )}
          aria-live="polite"
          aria-label="Notifications"
        >
          {toasts.map((toast) => (
            <div key={toast.id} className="pointer-events-auto">
              <Toast
                {...toast}
                onClose={removeToast}
              />
            </div>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};