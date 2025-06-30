# React Component Library 🎨

A modern, reusable React component library built with TypeScript and Storybook, featuring interactive UI components with smooth animations and comprehensive documentation.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn


## 🧩 Components Overview

This library includes three core components designed for modern web applications:

### 📥 Input Component
A versatile input field with advanced features:
- **Multi-type support**: text, password, number, email
- **Password visibility toggle**: Eye icon for secure password entry
- **Clearable functionality**: Quick clear button when needed
- **Validation states**: Error, success, and loading states
- **Customizable styling**: Flexible theming options

### 🔔 Toast Component  
Smart notification system for user feedback:
- **Multiple variants**: success, error, warning, info
- **Auto-dismiss**: Configurable duration with smooth fade-out
- **Manual close**: Optional close button for user control
- **Position control**: Bottom-right positioning with smooth animations
- **Queue management**: Multiple toasts stack gracefully

### 📚 Sidebar Menu Component
Responsive navigation with nested structure:
- **Smooth slide animations**: Enters from right with fluid motion
- **Nested menu support**: Multi-level accordion functionality
- **Click-outside closing**: Intuitive backdrop interaction
- **Responsive design**: Adapts to different screen sizes
- **Customizable icons**: Flexible icon integration

## 📸 Component Screenshots

### Input Component States
![Input Component - Default State](./images/screenshots/input-default.png)
*Default text input with placeholder*

![Input Component - Password Toggle](./images/screenshots/input-password.png)
*Password input with visibility toggle*

![Input Component - Clearable](./images/screenshots/input-clearable.png)
*Input with clear button functionality*

### Toast Component Variants
![Toast Component - Success](./images/screenshots/toast-success.png)
*Success toast notification*

![Toast Component - Error](./images/screenshots/toast-error.png)
*Error toast with manual close*

![Toast Component - Multiple](./images/screenshots/toast-multiple.png)
*Multiple toast notifications stacked*

### Sidebar Menu Component
![Sidebar Menu - Closed](./images/screenshots/sidebar-closed.png)
*Sidebar in closed state*

![Sidebar Menu - Open](./images/screenshots/sidebar-open.png)
*Sidebar with nested menu expanded*

![Sidebar Menu - Nested](./images/screenshots/sidebar-nested.png)
*Multi-level nested menu structure*

### Storybook Interface
![Storybook Overview](./images/screenshots/storybook-overview.png)
*Storybook interface showing all components*

![Storybook Controls](./images/screenshots/storybook-controls.png)
*Interactive controls panel for live editing*

## 🛠️ Technical Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development
- **Documentation**: Storybook 7.x
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: Framer Motion for smooth transitions
- **Code Quality**: ESLint + Prettier
- **Testing**: Jest + React Testing Library

## 📁 Project Structure

```
src/
├── components/
│   ├── Input/
│   │   ├── Input.tsx
│   │   ├── Input.types.ts
│   │   └── Input.stories.tsx
│   ├── Toast/
│   │   ├── Toast.tsx
│   │   ├── ToastProvider.tsx
│   │   ├── Toast.types.ts
│   │   └── Toast.stories.tsx
│   └── SidebarMenu/
│       ├── SidebarMenu.tsx
│       ├── MenuItem.tsx
│       ├── SidebarMenu.types.ts
│       └── SidebarMenu.stories.tsx
├── stories/
│   ├── Introduction.stories.mdx
│   └── assets/
├── hooks/
│   ├── useToast.ts
│   └── useOutsideClick.ts
├── utils/
│   └── animations.ts
└── index.ts
```

## 🎯 Component APIs

### Input Component
```typescript
interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  clearable?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
}
```

### Toast Component
```typescript
interface ToastProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
}
```

### Sidebar Menu Component
```typescript
interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  className?: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  onClick?: () => void;
}
```

## 🎨 Storybook Stories

Each component includes comprehensive Storybook stories:

- **Default states** - Basic component rendering
- **Interactive examples** - All prop combinations
- **Edge cases** - Error states and boundary conditions
- **Accessibility** - ARIA labels and keyboard navigation
- **Responsive** - Mobile and desktop viewports

### Running Storybook

```bash
# Start Storybook development server
npm run storybook

# Build static Storybook
npm run build-storybook
```

## ✨ Features & Highlights

### Advanced Functionality
- **Live prop editing** with Storybook Controls addon
- **Smooth animations** using Framer Motion
- **Accessibility first** with proper ARIA attributes
- **TypeScript support** for better developer experience
- **Responsive design** across all breakpoints

### Code Quality
- **ESLint** configuration for consistent code style
- **Prettier** for automatic code formatting
- **Husky** pre-commit hooks for quality assurance
- **Conventional commits** for clear git history

### Performance
- **Tree-shakable** exports for optimal bundle size
- **Lazy loading** for Storybook stories
- **Optimized animations** with transform-based CSS
- **Minimal re-renders** using React.memo and useCallback

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```




## 🔗 Links

- [Live Storybook Demo / Vercel Link](https://your-storybook-url.com)
- [GitHub Repository](https://github.com/jalashikhaliyeva/develops-today-jalashikhaliyeva)


---

**Built with ❤️ using React, TypeScript, and Storybook for DevelopsToday **