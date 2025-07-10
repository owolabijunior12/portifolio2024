 "use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (userTheme) {
      setDarkMode(userTheme === "dark");
      document.documentElement.classList.toggle("dark", userTheme === "dark");
    } else {
      setDarkMode(systemPrefersDark);
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const linkClass = `block px-3 py-2 text-sm font-medium hover:underline`;

  const navLinks = [
    { path: "/Project", label: "Projects" },
    // { path: "/blog", label: "Blog" },
    { path: "/About", label: "About" },
  ];

  return (
    <header className="w-full shadow  ">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold uppercase  ">
          Iboytech
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ path, label }) =>
            pathname === path ? null : (
              <Link key={path} href={path} className={linkClass}>
                {label}
              </Link>
            )
          )}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full focus:outline-none  "
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full  "
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <MoonIcon /> : <SunIcon />}
          </button>
          <button onClick={toggleMenu} className="p-2">
            <svg className="w-6 h-6  " fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          {navLinks.map(({ path, label }) =>
            pathname === path ? null : (
              <Link key={path} href={path} className={linkClass} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}

function SunIcon() {
  return (
    <svg className="w-6 h-6  " fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-6 h-6  " fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}
