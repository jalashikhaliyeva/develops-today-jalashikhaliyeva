import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ComponentsShowcase } from "@/components/sections/ComponentsShowcase";
import { FeaturesSection } from "@/components/sections/FeaturesSection";

export const metadata: Metadata = {
  title: "Jala Shikhaliyeva - DevelopsToday",
  description:
    "Welcome to my amazing application with cutting-edge features and components.",
  icons: {
    icon: "/images/developstoday-logo.jpeg",
  },
};

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
