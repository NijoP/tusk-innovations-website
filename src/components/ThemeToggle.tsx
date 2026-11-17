'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('tusk-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    if (next === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('tusk-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('tusk-theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <div className={`w-8 h-8 rounded-full border border-transparent ${className}`} />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`p-2 rounded-full border border-[#e6e4dc] dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 text-[#5a5a55] dark:text-neutral-400 hover:text-[#141413] dark:hover:text-white hover:border-[#da552f] dark:hover:border-[#ff5500] transition-all duration-200 shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#da552f] ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 transition-transform duration-200 hover:-rotate-12" />
      ) : (
        <Sun className="w-4 h-4 text-[#ff5500] transition-transform duration-200 hover:rotate-45" />
      )}
    </button>
  );
}
