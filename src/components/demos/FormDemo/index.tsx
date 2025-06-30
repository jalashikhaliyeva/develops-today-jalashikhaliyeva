// src/components/demos/FormDemo.tsx
"use client";

import { useState, useRef } from "react";
import { Input, useToast } from "@/components/ui";
import { InputRef } from "@/components/ui/Input/Input";

interface FormData {
  username: string;
  email: string;
  password: string;
  phone: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  phone?: string;
}

export const FormDemo: React.FC = () => {
  const toast = useToast();

  // Form state
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    username: false,
    email: false,
    password: false,
    phone: false,
  });

  // Refs for clearing inputs
  const usernameRef = useRef<InputRef>(null);
  const emailRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);
  const phoneRef = useRef<InputRef>(null);

  // Validation functions
  const validateEmail = (email: string): string | undefined => {
    if (!email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return undefined;
  };

  const validateUsername = (username: string): string | undefined => {
    if (!username) return "Username is required";
    if (username.length < 3) return "Username must be at least 3 characters";
    if (!/^[a-zA-Z0-9_]+$/.test(username))
      return "Username can only contain letters, numbers, and underscores";
    return undefined;
  };

  const validatePassword = (password: string): string | undefined => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      return "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone) return "Phone number is required";
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, "")))
      return "Please enter a valid phone number";
    return undefined;
  };

  // Handle input changes
  const handleInputChange = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Handle input blur (validation)
  const handleInputBlur = (field: keyof FormData) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    let error: string | undefined;
    const value = formData[field];

    switch (field) {
      case "username":
        error = validateUsername(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "password":
        error = validatePassword(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  // Check if field is valid (only show success after validation has run)
  const isFieldValid = (field: keyof FormData): boolean => {
    if (!touched[field] || formData[field].length === 0) return false;

    // Run validation to check if field is actually valid
    let isValid = false;
    const value = formData[field];

    switch (field) {
      case "username":
        isValid = validateUsername(value) === undefined;
        break;
      case "email":
        isValid = validateEmail(value) === undefined;
        break;
      case "password":
        isValid = validatePassword(value) === undefined;
        break;
      case "phone":
        isValid = validatePhone(value) === undefined;
        break;
    }

    return isValid;
  };

  // Submit form
  const handleSubmit = () => {
    // Validate all fields
    const newErrors: FormErrors = {
      username: validateUsername(formData.username),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      phone: validatePhone(formData.phone),
    };

    // Mark all fields as touched
    setTouched({
      username: true,
      email: true,
      password: true,
      phone: true,
    });

    setErrors(newErrors);

    // Check if form is valid
    const hasErrors = Object.values(newErrors).some(
      (error) => error !== undefined
    );

    if (hasErrors) {
      // Show error toast for each field with error
      const errorFields = Object.entries(newErrors)
        .filter(([_, error]) => error !== undefined)
        .map(([field, _]) => field);

      toast.error(`Please fix errors in: ${errorFields.join(", ")}`, {
        title: "Form Validation Failed",
        duration: 5000,
      });
    } else {
      // Form is valid - clear inputs and show success
      setFormData({ username: "", email: "", password: "", phone: "" });
      setErrors({});
      setTouched({
        username: false,
        email: false,
        password: false,
        phone: false,
      });

      // Clear input refs
      usernameRef.current?.clear();
      emailRef.current?.clear();
      passwordRef.current?.clear();
      phoneRef.current?.clear();

      toast.success("Form submitted successfully!", {
        title: "Success",
        duration: 4000,
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Smart Input Component
      </h3>
      <div className="space-y-6">
        <div>
          <Input
            ref={usernameRef}
            label="Username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleInputChange("username")}
            onBlur={handleInputBlur("username")}
            clearable
            error={touched.username ? errors.username : undefined}
            success={isFieldValid("username")}
            helperText={
              !touched.username ? "Choose a unique username" : undefined
            }
          />
        </div>

        <div>
          <Input
            ref={emailRef}
            type="email"
            label="Email Address"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleInputChange("email")}
            onBlur={handleInputBlur("email")}
            clearable
            error={touched.email ? errors.email : undefined}
            success={isFieldValid("email")}
            helperText={
              !touched.email ? "We'll never share your email" : undefined
            }
          />
        </div>

        <div>
          <Input
            ref={passwordRef}
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange("password")}
            onBlur={handleInputBlur("password")}
            error={touched.password ? errors.password : undefined}
            success={isFieldValid("password")}
            helperText={
              !touched.password
                ? "Must be at least 8 characters with mixed case and numbers"
                : undefined
            }
          />
        </div>

        <div>
          <Input
            ref={phoneRef}
            type="tel"
            label="Phone Number"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={handleInputChange("phone")}
            onBlur={handleInputBlur("phone")}
            clearable
            error={touched.phone ? errors.phone : undefined}
            success={isFieldValid("phone")}
            helperText={!touched.phone ? "Include country code" : undefined}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            onClick={handleSubmit}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
          >
            Submit Form
          </button>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Real-time validation on blur</li>
          <li>• Dynamic success/error states</li>
          <li>• Password visibility toggle</li>
          <li>• Clearable inputs with X button</li>
          <li>• Helper text and error messages</li>
          <li>• Form submission with toast feedback</li>
        </ul>
      </div>
    </div>
  );
};
