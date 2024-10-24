"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Check system preference for dark mode
  useEffect(() => {
    const userTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // If a theme is set in localStorage, use that, otherwise use the system preference
    if (userTheme) {
      setDarkMode(userTheme === 'dark');
      document.documentElement.classList.toggle('dark', userTheme === 'dark');
    } else {
      setDarkMode(systemPrefersDark);
      document.documentElement.classList.toggle('dark', systemPrefersDark);
    }
  }, []);

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <header className=" w-screen  dark:bg-gray-800 shadow-xl">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold uppercase dark:text-white">
            Iboytech
          </Link>
        
          {/* Toggle Button for Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-gray-900 dark:text-white"
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-gray-900 dark:text-white"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
