
// src/components/ui/Input/Input.types.ts
export interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  clearable?: boolean;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  error?: string | boolean;
  success?: boolean;
  label?: string;
  helperText?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outlined' | 'filled' | 'standard';
  fullWidth?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  id?: string;
  name?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  'data-testid'?: string;
}