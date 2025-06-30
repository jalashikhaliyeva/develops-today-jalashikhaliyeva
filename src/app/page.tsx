// app/page.tsx - SIMPLIFIED AND CLEAN
import { HeroSection } from '@/components/sections/HeroSection';
import { ComponentsShowcase } from '@/components/sections/ComponentsShowcase';
import { FeaturesSection } from '@/components/sections/FeaturesSection';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />
        <ComponentsShowcase />
        <FeaturesSection />
      </div>
    </div>
  );
}