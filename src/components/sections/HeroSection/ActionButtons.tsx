import { ExternalLink, Code, Zap, ArrowRight } from "lucide-react";

interface ActionButtonsProps {
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
  toast: { success: (message: string) => void };
}

export function ActionButtons({
  isHovered,
  setIsHovered,
  toast,
}: ActionButtonsProps) {
  return (
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
  );
}
