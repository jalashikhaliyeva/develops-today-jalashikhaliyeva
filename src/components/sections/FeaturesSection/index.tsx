// src/components/sections/FeaturesSection.tsx
import { Settings, ExternalLink, Users } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="mb-16">
      <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Built for Modern Development
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Settings className="text-blue-600" size={32} />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">TypeScript First</h4>
          <p className="text-gray-600">
            Fully typed components with comprehensive interfaces and excellent IntelliSense support.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ExternalLink className="text-green-600" size={32} />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Storybook Ready</h4>
          <p className="text-gray-600">
            Comprehensive stories with controls, documentation, and visual testing capabilities.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Users className="text-purple-600" size={32} />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Accessible</h4>
          <p className="text-gray-600">
            WCAG compliant with proper ARIA labels, keyboard navigation, and screen reader support.
          </p>
        </div>

      </div>
    </section>
  );
};