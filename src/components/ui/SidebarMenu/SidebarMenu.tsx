// src/components/ui/SidebarMenu/SidebarMenu.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { MenuItem } from './MenuItem';
import { SidebarMenuProps, MenuItem as MenuItemType } from './SidebarMenu.types';
import { cn } from '@/utils/cn';
import { useClickOutside } from '@/hooks/useClickOutside';

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  onClose,
  items,
  title = 'Menu',
  position = 'right',
  width = '320px',
  overlay = true,
  closeOnItemClick = false,
  className = '',
  headerClassName = '',
  itemClassName = '',
  children,
  'data-testid': dataTestId
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useClickOutside(sidebarRef, () => {
    if (isOpen && overlay) {
      onClose();
    }
  });

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when sidebar is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleItemClick = (item: MenuItemType) => {
    console.log('Menu item clicked:', item.label);
    if (closeOnItemClick) {
      onClose();
    }
  };

  const positionClasses = {
    left: {
      sidebar: 'left-0',
      transform: isOpen ? 'translate-x-0' : '-translate-x-full'
    },
    right: {
      sidebar: 'right-0', 
      transform: isOpen ? 'translate-x-0' : 'translate-x-full'
    }
  };

  return (
    <>
      {/* Backdrop Overlay */}
      {overlay && (
        <div
          className={cn(
            'fixed inset-0 bg-black/50 z-40 transition-opacity duration-300',
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        data-testid={dataTestId}
        className={cn(
          'fixed top-0 h-full bg-white shadow-xl z-50',
          'transform transition-transform duration-300 ease-in-out',
          'flex flex-col',
          positionClasses[position].sidebar,
          positionClasses[position].transform,
          className
        )}
        style={{ width }}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Header */}
        <div className={cn(
          'flex items-center justify-between p-4 border-b border-gray-200 bg-white',
          'flex-shrink-0',
          headerClassName
        )}>
          <h2 className="text-lg font-semibold text-gray-900 truncate">
            {title}
          </h2>
          <button
            onClick={onClose}
            className={cn(
              'p-2 hover:bg-gray-100 rounded-lg transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            )}
            aria-label="Close menu"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Custom Children (if provided) */}
          {children && (
            <div className="p-4 border-b border-gray-200">
              {children}
            </div>
          )}

          {/* Menu Items */}
          <nav className="py-2" role="navigation">
            {items.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                onItemClick={handleItemClick}
                closeOnClick={closeOnItemClick}
                className={itemClassName}
              />
            ))}
          </nav>
        </div>

        {/* Footer (if needed) */}
        <div className="flex-shrink-0 p-4 border-t border-gray-200 bg-gray-50">
          <p className="text-xs text-gray-500 text-center">
            Component Library v1.0
          </p>
        </div>
      </div>
    </>
  );
};
