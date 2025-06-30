// src/components/ui/SidebarMenu/SidebarMenu.types.ts
export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  children?: MenuItem[];
  disabled?: boolean;
  badge?: string | number;
  className?: string;
}

export interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  title?: string;
  position?: 'left' | 'right';
  width?: string;
  overlay?: boolean;
  closeOnItemClick?: boolean;
  className?: string;
  headerClassName?: string;
  itemClassName?: string;
  children?: React.ReactNode;
  'data-testid'?: string;
}

export interface MenuItemProps {
  item: MenuItem;
  level?: number;
  isActive?: boolean;
  onItemClick?: (item: MenuItem) => void;
  closeOnClick?: boolean;
  className?: string;
}
