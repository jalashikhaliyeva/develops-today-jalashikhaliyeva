interface AnimatedHeadingProps {
  currentWordIndex: number;
  words: string[];
}

export function AnimatedHeading({
  currentWordIndex,
  words,
}: AnimatedHeadingProps) {
  return (
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
        <span className="inline-block animate-[slideInUp_0.8s_ease-out_0.4s_both] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-300 animate-gradient">
          React
        </span>
        <br />
        <span className="inline-block animate-[slideInUp_0.8s_ease-out_0.6s_both] relative">
          Components
          <div className="absolute -top-4 -right-8 w-8 h-8 bg-yellow-400 rounded-full animate-ping opacity-75" />
        </span>
      </h1>
    </div>
  );
}
