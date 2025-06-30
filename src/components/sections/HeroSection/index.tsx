"use client";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { AnimatedBackground } from "./AnimatedBackground";
import { AnimatedHeading } from "./AnimatedHeading";
import { ActionButtons } from "./ActionButtons";
import { useWordCycling } from "../../../hooks/useWordCycling";
import { useMousePosition } from "../../../hooks/useMousePosition";
import { useToast } from "@/hooks/useToast";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const words = ["Modern", "Powerful", "Advanced", "Beautiful"];

  const currentWordIndex = useWordCycling(words);
  const mousePosition = useMousePosition();
  const toast = useToast();

  return (
    <section className="overflow-hidden flex items-center justify-center -mx-4 sm:-mx-6 lg:-mx-8 -mt-12 py-12">
      <AnimatedBackground mousePosition={mousePosition} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full text-purple-700 text-sm font-normal mb-8 shadow-lg animate-pulse">
          <Sparkles className="mr-2" size={16} />
          Next.js 14 • TypeScript • Tailwind
        </div>

        <AnimatedHeading currentWordIndex={currentWordIndex} words={words} />

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-[fadeInUp_1s_ease-out_0.8s_both]">
          Craft beautiful, accessible interfaces with our cutting-edge component
          library.
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-normal">
            {" "}
            Built for developers who demand excellence.
          </span>
        </p>

        <ActionButtons
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          toast={toast}
        />
      </div>
    </section>
  );
}
