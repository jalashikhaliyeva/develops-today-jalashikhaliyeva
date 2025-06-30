// src/components/sections/HeroSection.tsx
'use client';

import { ExternalLink } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

export const HeroSection: React.FC = () => {
  const toast = useToast();

  return (
    <section className="text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Modern React
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
          Component Library
        </span>
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Built with Next.js 14, TypeScript, Tailwind CSS, and Storybook. 
        Featuring fully reusable, accessible components with smooth animations.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => window.open('http://localhost:6006', '_blank')}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <ExternalLink className="mr-2" size={20} />
          View Storybook
        </button>
        <button
          onClick={() => toast.success('Welcome to our component library!')}
          className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          Try Components
        </button>
      </div>
    </section>
  );
};