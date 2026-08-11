import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

import collegeLogo from "../assets/Logo/college-logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Gallery", path: "/gallery" },
    { name: "Admission", path: "/admission" },
    { name: "Contact Us", path: "/contact" },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b ${
        darkMode
          ? "border-gray-700 bg-[#0B1F3A]"
          : "border-gray-200 bg-white"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src={collegeLogo}
            alt="Punjab College Logo"
            className="h-14 w-auto object-contain"
          />

          <div className="hidden sm:block">
            <h1
              className={`text-lg font-bold ${
                darkMode ? "text-white" : "text-[#0B1F3A]"
              }`}
            >
              Punjab College
            </h1>

            <p
              className={`text-xs ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Ahmed Pur East
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors hover:text-[#D71920] ${
                darkMode ? "text-white" : "text-[#0B1F3A]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              darkMode
                ? "bg-white text-[#0B1F3A]"
                : "bg-[#0B1F3A] text-white"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Apply Now */}
          <Link
            to="/admission"
            className="rounded-lg bg-[#D71920] px-5 py-3 font-semibold text-white shadow-md hover:bg-[#b9151b] hover:shadow-lg"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 lg:hidden">

          <button
            onClick={toggleDarkMode}
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              darkMode
                ? "bg-white text-[#0B1F3A]"
                : "bg-[#0B1F3A] text-white"
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-2xl ${
              darkMode ? "text-white" : "text-[#0B1F3A]"
            }`}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`border-t px-5 py-5 lg:hidden ${
            darkMode
              ? "border-gray-700 bg-[#0B1F3A]"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex flex-col gap-4">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium hover:text-[#D71920] ${
                  darkMode ? "text-white" : "text-[#0B1F3A]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/admission"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg bg-[#D71920] px-5 py-3 text-center font-semibold text-white"
            >
              Apply Now
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;