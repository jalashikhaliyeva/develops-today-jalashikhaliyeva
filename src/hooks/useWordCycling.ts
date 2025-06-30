import { useState, useEffect } from "react";

export function useWordCycling(words: string[], intervalMs: number = 2500) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [words.length, intervalMs]);

  return currentWordIndex;
} 