// src/components/ui/Input/Input.tsx
'use client';

import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { Eye, EyeOff, X, AlertCircle, CheckCircle } from 'lucide-react';
import { InputProps } from './Input.types';
import { cn } from '@/utils/cn';

export interface InputRef {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  getValue: () => string;
}

export const Input = forwardRef<InputRef, InputProps>(({
  type = 'text',
  placeholder,
  value,
  defaultValue = '',
  onChange,
  onBlur,
  onFocus,
  clearable = false,
  disabled = false,
  required = false,
  readOnly = false,
  error,
  success = false,
  label,
  helperText,
  size = 'md',
  variant = 'outlined',
  fullWidth = false,
  autoFocus = false,
  maxLength,
  minLength,
  pattern,
  id,
  name,
  className = '',
  inputClassName = '',
  labelClassName = '',
  'data-testid': dataTestId,
  ...props
}, ref) => {
  const [inputValue, setInputValue] = useState(value || defaultValue);
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [inputType, setInputType] = useState(type);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync with external value changes
  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  // Handle password type toggle
  useEffect(() => {
    if (type === 'password') {
      setInputType(showPassword ? 'text' : 'password');
    } else {
      setInputType(type);
    }
  }, [type, showPassword]);

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    clear: () => handleClear(),
    getValue: () => inputValue
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const handleClear = () => {
    setInputValue('');
    onChange?.('');
    inputRef.current?.focus();
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Size variants
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg'
  };

  // Variant styles
  const variantClasses = {
    outlined: 'border-2 bg-white',
    filled: 'border-0 bg-gray-100',
    standard: 'border-0 border-b-2 bg-transparent rounded-none'
  };

  // State classes
  const getStateClasses = () => {
    if (error) {
      return 'border-red-500 focus:border-red-500 focus:ring-red-500/20';
    }
    if (success) {
      return 'border-green-500 focus:border-green-500 focus:ring-green-500/20';
    }
    return 'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20';
  };

  const hasIcon = type === 'password' || (clearable && inputValue) || error || success;
  const iconCount = [
    type === 'password',
    clearable && inputValue && type !== 'password',
    error,
    success && !error
  ].filter(Boolean).length;

  const rightPadding = iconCount > 0 ? `pr-${8 + iconCount * 6}` : '';

  return (
    <div className={cn('relative', fullWidth ? 'w-full' : 'w-auto', className)}>
      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className={cn(
            'block text-sm font-medium mb-1 transition-colors',
            error ? 'text-red-700' : success ? 'text-green-700' : 'text-gray-700',
            disabled && 'text-gray-400',
            labelClassName
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        <input
          ref={inputRef}
          type={inputType}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
          autoFocus={autoFocus}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          id={id}
          name={name}
          data-testid={dataTestId}
          className={cn(
            'w-full rounded-lg transition-all duration-200 focus:outline-none focus:ring-2',
            sizeClasses[size],
            variantClasses[variant],
            getStateClasses(),
            hasIcon && rightPadding,
            disabled && 'cursor-not-allowed opacity-50',
            isFocused && 'ring-2',
            inputClassName
          )}
          {...props}
        />

        {/* Icons Container */}
        {hasIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
            
            {/* Success Icon */}
            {success && !error && (
              <CheckCircle size={20} className="text-green-500" />
            )}

            {/* Error Icon */}
            {error && (
              <AlertCircle size={20} className="text-red-500" />
            )}

            {/* Clear Button */}
            {clearable && inputValue && type !== 'password' && !disabled && (
              <button
                type="button"
                onClick={handleClear}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded"
                tabIndex={-1}
              >
                <X size={16} />
              </button>
            )}

            {/* Password Toggle */}
            {type === 'password' && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Helper Text / Error Message */}
      {(helperText || error) && (
        <p className={cn(
          'mt-1 text-sm transition-colors',
          error ? 'text-red-600' : 'text-gray-500'
        )}>
          {error && typeof error === 'string' ? error : helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';