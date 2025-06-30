import { ReactNode } from "react";

interface FloatingElementProps {
  delay: number;
  duration: number;
  children: ReactNode;
}

const FloatingElement = ({
  delay,
  duration,
  children,
}: FloatingElementProps) => (
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

interface AnimatedBackgroundProps {
  mousePosition: { x: number; y: number };
}

export function AnimatedBackground({ mousePosition }: AnimatedBackgroundProps) {
  return (
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
  );
}
