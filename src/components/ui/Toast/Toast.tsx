// src/components/ui/Toast/Toast.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";
import { ToastProps, ToastType } from "./Toast.types";
import { cn } from "@/utils/cn";

const iconMap: Record<ToastType, React.ReactNode> = {
  success: <CheckCircle size={20} />,
  error: <AlertCircle size={20} />,
  warning: <AlertTriangle size={20} />,
  info: <Info size={20} />,
};

const typeStyles: Record<ToastType, string> = {
  success: "bg-green-50 border-green-200 text-green-800",
  error: "bg-red-50 border-red-200 text-red-800",
  warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
  info: "bg-blue-50 border-blue-200 text-blue-800",
};

const iconStyles: Record<ToastType, string> = {
  success: "text-green-500",
  error: "text-red-500",
  warning: "text-yellow-500",
  info: "text-blue-500",
};

export const Toast: React.FC<ToastProps> = ({
  id,
  type = "info",
  title,
  message,
  duration = 5000,
  closable = true,
  onClose,
  action,
  className = "",
  "data-testid": dataTestId,
}) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );
  const toastRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    onClose?.(id);
  };

  useEffect(() => {
    // Auto-dismiss after duration
    if (duration > 0) {
      timeoutRef.current = setTimeout(() => {
        onClose?.(id);
      }, duration);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [duration, onClose, id]);

  const handleActionClick = () => {
    action?.onClick();
    onClose?.(id);
  };

  return (
    <div
      ref={toastRef}
      data-testid={dataTestId}
      className={cn(
        "flex items-start p-4 rounded-lg border shadow-lg max-w-md transition-all duration-300 ease-in-out z-50",
        "animate-in slide-in-from-right-full fade-in-0",
        typeStyles[type],
        className
      )}
      role="alert"
      aria-live="polite"
    >
      {/* Icon */}
      <div className={cn("flex-shrink-0 mr-3", iconStyles[type])}>
        {iconMap[type]}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && <p className="text-sm font-semibold mb-1">{title}</p>}
        <p className="text-sm">{message}</p>

        {/* Action Button */}
        {action && (
          <button
            onClick={handleActionClick}
            className={cn(
              "mt-2 text-sm font-medium underline hover:no-underline transition-all cursor-pointer",
              type === "success" && "text-green-700 hover:text-green-800",
              type === "error" && "text-red-700 hover:text-red-800",
              type === "warning" && "text-yellow-700 hover:text-yellow-800",
              type === "info" && "text-blue-700 hover:text-blue-800"
            )}
          >
            {action.label}
          </button>
        )}
      </div>

      {/* Close Button */}
      {closable && (
        <button
          onClick={handleClose}
          className={cn(
            "flex-shrink-0 ml-4 p-1 rounded-md transition-colors cursor-pointer",
            "hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2",
            type === "success" && "text-green-500 focus:ring-green-500",
            type === "error" && "text-red-500 focus:ring-red-500",
            type === "warning" && "text-yellow-500 focus:ring-yellow-500",
            type === "info" && "text-blue-500 focus:ring-blue-500"
          )}
          aria-label="Close notification"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};
