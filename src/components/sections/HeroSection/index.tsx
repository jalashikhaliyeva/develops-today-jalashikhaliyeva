"use client";
import { ExternalLink, Sparkles, Code, Zap, ArrowRight } from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ["Modern", "Powerful", "Advanced", "Beautiful"];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Word cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  const toast = {
    success: (message: string) => {
      // Simple toast implementation for demo
      const toastEl = document.createElement("div");
      toastEl.textContent = message;
      toastEl.className =
        "fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg z-50";
      document.body.appendChild(toastEl);
      setTimeout(() => document.body.removeChild(toastEl), 3000);
    },
  };

  const FloatingElement = ({ delay, duration, children }: { delay: number; duration: number; children: ReactNode }) => (
    <div
      className="absolute animate-bounce opacity-20"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );

  return (
    <section className="overflow-hidden flex items-center justify-center -mx-4 sm:-mx-6 lg:-mx-8 -mt-12 py-12">
      {/* Animated Background */}
      <div className="absolute inset-0 w-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          <FloatingElement delay={0} duration={6}>
            <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl top-20 left-20" />
          </FloatingElement>
          <FloatingElement delay={2} duration={8}>
            <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-400 rounded-lg rotate-45 top-40 right-32 blur-lg" />
          </FloatingElement>
          <FloatingElement delay={4} duration={7}>
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full bottom-32 left-40 blur-lg" />
          </FloatingElement>
        </div>

        {/* Interactive cursor trail */}
        <div
          className="absolute w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none opacity-30 transition-all duration-100 ease-out blur-sm"
          style={{
            transform: `translate(${mousePosition.x - 12}px, ${
              mousePosition.y - 12
            }px)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full text-purple-700 text-sm font-normal mb-8 shadow-lg animate-pulse">
          <Sparkles className="mr-2" size={16} />
          Next.js 14 • TypeScript • Tailwind
        </div>

        {/* Main Heading with staggered animation */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-medium text-gray-900 mb-4">
            <span className="inline-block animate-[slideInUp_0.8s_ease-out_0.2s_both] relative overflow-hidden">
              <span
                className="inline-block transition-all duration-700 ease-in-out transform"
                style={{
                  opacity: 1,
                  transform: "translateY(0)",
                }}
                key={currentWordIndex}
              >
                {words[currentWordIndex]}
              </span>
            </span>
            <br />
            <span className="inline-block animate-[slideInUp_0.8s_ease-out_0.4s_both] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-300% animate-gradient">
              React
            </span>
            <br />
            <span className="inline-block animate-[slideInUp_0.8s_ease-out_0.6s_both] relative">
              Components
              <div className="absolute -top-4 -right-8 w-8 h-8 bg-yellow-400 rounded-full animate-ping opacity-75" />
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-[fadeInUp_1s_ease-out_0.8s_both]">
          Craft beautiful, accessible interfaces with our cutting-edge component
          library.
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-normal">
            {" "}
            Built for developers who demand excellence.
          </span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-[fadeInUp_1s_ease-out_1s_both]">
          <button
            onClick={() => window.open("http://localhost:6006", "_blank")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-normal text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

            <div className="relative flex items-center">
              <ExternalLink
                className="mr-3 transition-transform duration-300 group-hover:rotate-12"
                size={24}
              />
              Explore Storybook
              <ArrowRight
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                size={20}
              />
            </div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 -top-px bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          </button>

          <button
            onClick={() =>
              toast.success("🚀 Welcome to the future of React components!")
            }
            className="group inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 rounded-2xl font-normal text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:shadow-xl hover:border-purple-300"
          >
            <div className="mr-3 p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg transition-transform duration-300 group-hover:rotate-180">
              <Code className="text-white" size={20} />
            </div>
            Try Components
            <Zap
              className="ml-2 text-yellow-500 transition-transform duration-300 group-hover:scale-125"
              size={20}
            />
          </button>
        </div>

      
      </div>

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .bg-300% {
          background-size: 300% 300%;
        }

        @keyframes textSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-text-change {
          animation: textSlideIn 0.7s ease-in-out;
        }
      `}</style>
    </section>
  );
}
