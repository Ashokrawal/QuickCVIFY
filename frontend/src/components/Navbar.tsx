import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200 py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-extrabold text-indigo-600 tracking-tight"
        >
          ResumeCraft Pro
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
          {[
            { name: "Templates", path: "/templates" },
            { name: "Features", path: "/features" },
            { name: "Blog", path: "/blog" },
            { name: "Pricing", path: "/pricing" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="ml-6 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Log In
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen py-4 opacity-100 bg-white shadow-md border-t border-gray-100"
            : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="px-6 flex flex-col space-y-4 text-base font-medium">
          {[
            { name: "Templates", path: "/templates" },
            { name: "Features", path: "/features" },
            { name: "Blog", path: "/blog" },
            { name: "Pricing", path: "/pricing" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
