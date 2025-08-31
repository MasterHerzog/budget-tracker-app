"use client";

import { useTheme } from "@/contexts/themeContext";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="relative w-14 h-8 bg-background/80 backdrop-blur-sm rounded-full shadow-lg border border-emerald-200/50 dark:border-emerald-700/50">
        <div className="absolute top-0.5 left-0.5 w-7 h-7 bg-foreground rounded-full shadow-md flex items-center justify-center transition-all duration-300">
          <span className="text-sm">🌙</span>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-background/80 backdrop-blur-sm rounded-full shadow-lg border border-emerald-200/50 dark:border-emerald-700/50"
    >
      <div
        className={`absolute top-0.5 w-7 h-7 rounded-full shadow-md flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 ${
          theme === "light"
            ? "left-0.5 bg-gradient-to-br from-yellow-50 to-orange-50"
            : "left-6 bg-gradient-to-br from-emerald-50 to-green-50"
        }`}
      >
        <span
          className={`text-sm transition-all duration-300 ${
            theme === "light" ? "text-yellow-600" : "text-emerald-600"
          }`}
        >
          {theme === "light" ? "☀️" : "🌙"}
        </span>
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <span className="text-xs">☀️</span>
        <span className="text-xs">🌙</span>
      </div>
    </button>
  );
}
