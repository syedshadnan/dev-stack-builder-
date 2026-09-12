import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky bg-white top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
        
        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-1 cursor-pointer text-2xl md:hidden"
        >
          <GiHamburgerMenu />
        </button>

        {/* Logo */}
        <img src={Logo} alt="Dev Stack" className="h-8" />

        {/* Desktop Links */}
        <ul className="hidden gap-6 md:flex">
          <li className="cursor-pointer text-secondary">Home</li>

          <li className="cursor-pointer text-gray-600 transition-colors hover:text-secondary">
            Technology
          </li>

          <li className="cursor-pointer text-gray-600 transition-colors hover:text-secondary">
            Projects
          </li>

          <li className="cursor-pointer text-gray-600 transition-colors hover:text-secondary">
            About
          </li>

          <li className="cursor-pointer text-gray-600 transition-colors hover:text-secondary">
            Contact
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:text-secondary">
            Sign in
          </button>

          <button className="btn btn-secondary rounded-3xl">Sign up</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="border-t border-gray-100 px-6 py-4 md:hidden">
          <li className="cursor-pointer py-2 text-secondary">Home</li>

          <li className="cursor-pointer py-2 text-gray-600 hover:text-secondary">
            Technology
          </li>

          <li className="cursor-pointer py-2 text-gray-600 hover:text-secondary">
            Projects
          </li>

          <li className="cursor-pointer py-2 text-gray-600 hover:text-secondary">
            About
          </li>

          <li className="cursor-pointer py-2 text-gray-600 hover:text-secondary">
            Contact
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;