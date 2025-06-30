// src/components/ui/SidebarMenu/MenuItem.tsx
'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { MenuItemProps } from './SidebarMenu.types';
import { cn } from '@/utils/cn';

export const MenuItem: React.FC<MenuItemProps> = ({
  item,
  level = 0,
  isActive = false,
  onItemClick,
  closeOnClick = false,
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (item.disabled) return;

    if (hasChildren) {
      setIsExpanded(!isExpanded);
    } else {
      item.onClick?.();
      onItemClick?.(item);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      
      if (item.disabled) return;

      if (hasChildren) {
        setIsExpanded(!isExpanded);
      } else {
        item.onClick?.();
        onItemClick?.(item);
      }
    }
  };

  const Component = item.href ? 'a' : 'button';
  const componentProps = item.href 
    ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined }
    : { type: 'button' as const };

  return (
    <div className={cn('w-full', className)}>
      <Component
        {...componentProps}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        disabled={item.disabled}
        className={cn(
          'w-full flex items-center justify-between px-4 py-3 text-left transition-all duration-200',
          'hover:bg-gray-50 focus:outline-none focus:bg-gray-50',
          'group relative',
          level > 0 && `pl-${4 + level * 4}`,
          isActive && 'bg-blue-50 text-blue-700 border-r-2 border-blue-500',
          item.disabled && 'opacity-50 cursor-not-allowed hover:bg-transparent',
          item.className
        )}
        aria-expanded={hasChildren ? isExpanded : undefined}
        role={hasChildren ? 'button' : 'menuitem'}
      >
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          {/* Icon */}
          {item.icon && (
            <span className={cn(
              'flex-shrink-0 transition-colors',
              isActive ? 'text-blue-600' : 'text-gray-600 group-hover:text-gray-900'
            )}>
              {item.icon}
            </span>
          )}
          
          {/* Label */}
          <span className={cn(
            'font-medium truncate transition-colors',
            isActive ? 'text-blue-700' : 'text-gray-900'
          )}>
            {item.label}
          </span>
          
          {/* Badge */}
          {item.badge && (
            <span className={cn(
              'ml-auto px-2 py-1 text-xs font-medium rounded-full',
              isActive 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-gray-100 text-gray-600'
            )}>
              {item.badge}
            </span>
          )}
        </div>

        {/* Chevron for expandable items */}
        {hasChildren && (
          <span className={cn(
            'flex-shrink-0 ml-2 transition-transform duration-200',
            isActive ? 'text-blue-600' : 'text-gray-500',
            isExpanded && 'transform rotate-0'
          )}>
            {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </span>
        )}
      </Component>

      {/* Submenu */}
      {hasChildren && (
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="border-l-2 border-gray-100 ml-4">
            {item.children!.map((child) => (
              <MenuItem
                key={child.id}
                item={child}
                level={level + 1}
                onItemClick={onItemClick}
                closeOnClick={closeOnClick}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
