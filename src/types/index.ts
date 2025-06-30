// Form Demo Types
export interface FormData {
  username: string;
  email: string;
  password: string;
  phone: string;
}

export interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  phone?: string;
}

// Header Types
export interface HeaderProps {
  onMenuClick: () => void;
}

// Action Buttons Types
export interface ActionButtonsProps {
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
  toast: { success: (message: string) => void };
}

// Animated Background Types
export interface FloatingElementProps {
  delay: number;
  duration: number;
  children: React.ReactNode;
}

export interface AnimatedBackgroundProps {
  mousePosition: { x: number; y: number };
}

// Animated Heading Types
export interface AnimatedHeadingProps {
  currentWordIndex: number;
  words: string[];
}
