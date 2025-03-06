import React, { useState } from "react";
import logo from "../assets/images/TC.png"
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white text-black text-ac shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        <a href="/" className="text-[#6DC5D1] text-4xl font-bold">
          <img className="h-16" src={logo} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg font-semibold">
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? "text-[#6DC5D1] underline" : "hover:underline"
    }
  >
    Home
  </NavLink>
  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive ? "text-[#6DC5D1] underline" : "hover:underline"
    }
  >
    About
  </NavLink>
  <NavLink
    to="/services"
    className={({ isActive }) =>
      isActive ? "text-[#6DC5D1] underline" : "hover:underline"
    }
  >
    Services
  </NavLink>
  <NavLink
    to="/industries"
    className={({ isActive }) =>
      isActive ? "text-[#6DC5D1] underline" : "hover:underline"
    }
  >
    Industries
  </NavLink>

  <NavLink
    to="/hr-internship"
    className={({ isActive }) =>
      isActive ? "text-[#6DC5D1] underline" : "hover:underline"
    }
  >
    HR Internship
  </NavLink>

  <NavLink
    to="/career"
    className={({ isActive }) =>
      isActive ? "text-[#6DC5D1] underline" : "hover:underline"
    }
  >
    Careers
  </NavLink>

  <NavLink
    to="/contact-us"
    className={({ isActive }) =>
      isActive ? "text-[#6DC5D1] underline" : "hover:underline"
    }
  >
    Contact Us
  </NavLink>

  <NavLink
    to="/faq"
    className={({ isActive }) =>
      isActive ? "text-[#6DC5D1] underline" : "hover:underline"
    }
  >
    FAQ
  </NavLink>
</nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white md:text-black shadow-md absolute w-full top-full left-0 py-4">
          <ul className="space-y-4 px-6">
            <li>
              <a href="/" className="block hover:underline">Home</a>
            </li>
            <li>
              <a href="/about" className="block hover:underline">About</a>
            </li>
            <li>
              <a href="/services" className="block hover:underline">Services</a>
            </li>
            <li>
              <a href="/industries" className="block hover:underline">Industries</a>
            </li>
            <li>
              <a href="/career" className="block hover:underline">Careers</a>
            </li>
            <li>
              <a href="/contact-us" className="block hover:underline">Contact Us</a>
            </li>
            <li>
              <a href="/faq" className="block hover:underline">FAQ</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
