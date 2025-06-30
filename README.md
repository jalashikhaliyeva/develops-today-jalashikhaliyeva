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

![Input Component - Default State]<img width="1470" alt="input-default" src="https://github.com/user-attachments/assets/cb67c479-55d6-4c26-a718-a4e55f026854" />

_Default text input with placeholder_

![Input Component - Password Toggle] <img width="1470" alt="Screenshot 2025-06-30 at 16 29 30" src="https://github.com/user-attachments/assets/cc58a58a-4978-4d36-8a21-dac940731dd9" />

_Password input with visibility toggle_

![Input Component - Clearable] <img width="1470" alt="Screenshot 2025-06-30 at 16 30 16" src="https://github.com/user-attachments/assets/89c5bef4-bd6a-43ac-969b-b9cd307d6b4c" />

_Input with clear button functionality_

### Toast Component Variants

![Toast Component - Success] 
_Success toast notification_<img width="1470" alt="Screenshot 2025-06-30 at 16 30 56" src="https://github.com/user-attachments/assets/553562ce-8eb3-41d2-bcd8-a33e8924dff6" />


![Toast Component - Error] <img width="1467" alt="Screenshot 2025-06-30 at 16 31 07" src="https://github.com/user-attachments/assets/402afaf2-d643-4228-8eac-cfabda766bf4" />

_Error toast with manual close_

![Toast Component - Multiple]<img width="1469" alt="Screenshot 2025-06-30 at 16 31 30" src="https://github.com/user-attachments/assets/672a77db-89a6-4ff2-b6c5-5683a2c9c011" />

_Multiple toast notifications stacked_

### Sidebar Menu Component
<img width="1470" alt="Screenshot 2025-06-30 at 16 31 48" src="https://github.com/user-attachments/assets/49d6ca64-c478-4236-8389-c48e8a10497e" />

![Sidebar Menu - Closed]
_Sidebar in closed state_

![Sidebar Menu - Open]<img width="1470" alt="Screenshot 2025-06-30 at 16 32 09" src="https://github.com/user-attachments/assets/b18340a2-e253-4dd6-a7b3-eb4bc849f9b4" />

_Sidebar with nested menu expanded_



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
  type?: "text" | "password" | "email" | "number";
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
  type: "success" | "error" | "warning" | "info";
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

- [Live Storybook Demo / Vercel Link](https://develops-today-jalashikhaliyeva.vercel.app/)
- [GitHub Repository](https://github.com/jalashikhaliyeva/develops-today-jalashikhaliyeva)

---

**Built with ❤️ using React, TypeScript, and Storybook for DevelopsToday **
