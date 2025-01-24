import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const location = useLocation();

  const productCategories = [
    { name: "Shirts", path: "/products", filter: "Shirts" },
    { name: "Pants", path: "/products", filter: "Pants" },
    { name: "T-Shirts", path: "/products", filter: "T-Shirts" },
    { name: "Night Suits", path: "/products", filter: "Night Suits" },
    { name: "Scrub Suits", path: "/products", filter: "Scrub Suits" },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileDropdownOpen(false);
    setIsDesktopDropdownOpen(false);
  }, [location]);

  // Desktop dropdown handlers
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsDesktopDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsDesktopDropdownOpen(false);
    }
  };

  // Mobile dropdown handler
  const toggleMobileDropdown = (e) => {
    e.stopPropagation();
    if (window.innerWidth < 768) {
      setIsMobileDropdownOpen(!isMobileDropdownOpen);
    }
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsMobileDropdownOpen(false);
    setIsDesktopDropdownOpen(false);
  };

  return (
    <nav className="flex items-center bg-white shadow-md sticky top-0 z-50 h-20">
      {/* Left Section (80%) */}
      <div className="w-4/5 flex items-center justify-between md:px-4 py-2">
        {/* Logo Section */}
        <div className="ml-5 flex items-center">
          <Link to="/">
            <img src={assets.logo} alt="logo" className="h-16 md:h-24 w-auto" />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center mr-4">
          <button
            className="text-2xl text-[#32346a]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 fixed md:static top-0 right-0 h-full md:h-auto w-full md:w-auto bg-white md:bg-transparent shadow-2xl md:shadow-none transition-transform duration-300 z-40`}
        >
          {/* Mobile Menu Container */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8 pt-20 md:pt-0">
            {/* Mobile Close Button */}
            <div className="md:hidden absolute top-6 right-6">
              <button
                className="text-2xl text-[#32346a]"
                onClick={closeAll}
              >
                <FaTimes />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 w-full md:w-auto">
              {/* Regular Nav Links */}
              <NavLink to="/" label="Home" onClick={closeAll} />
              <NavLink to="/about" label="About Us" onClick={closeAll} />

              {/* Products Dropdown - Desktop */}
              <li
                className="hidden md:block relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="font-medium text-lg hover:text-[#41a752] transition-colors duration-300">
                  Products
                </button>
                {isDesktopDropdownOpen && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg overflow-hidden">
                    {productCategories.map((category, index) => (
                      <Link
                        key={index}
                        to={category.path}
                        state={{ category: category.filter }}
                        className="block px-6 py-3 hover:bg-gray-50 hover:text-[#41a752] transition-colors duration-300"
                        onClick={closeAll}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Products Dropdown - Mobile */}
              <li className="md:hidden w-full">
                <button
                  className="flex items-center justify-between w-full px-6 py-2 font-medium text-lg"
                  onClick={toggleMobileDropdown}
                >
                  Products
                  <span className={`transform transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`${isMobileDropdownOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-300`}>
                  {productCategories.map((category, index) => (
                    <Link
                      key={index}
                      to={category.path}
                      state={{ category: category.filter }}
                      className="block px-8 py-3 hover:bg-gray-50 hover:text-[#41a752] transition-colors duration-300"
                      onClick={closeAll}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </li>

              <NavLink to="/services" label="Services" onClick={closeAll} />
              <NavLink to="/contact" label="Contact Us" onClick={closeAll} />
            </ul>

            {/* Send Inquiry Button */}
            <div className="my-4 md:my-0 w-full md:w-auto px-4 md:px-0">
              <Link to="/contact" onClick={closeAll}>
                <button className="w-full md:w-auto px-6 py-2 bg-[#41a752] text-white rounded-md hover:bg-[#32346a] transition-colors duration-300">
                  SEND INQUIRY
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (20%) */}
      <div className="w-1/5 h-full hidden md:flex items-center justify-center py-2 bg-[#32346a]">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-[#4cb65e]">
            <IoMdCall size={24} className="text-white" />
          </div>
          <div className="text-white text-nowrap">
            <div className="text-sm font-semibold">CALL US NOW</div>
            <div className="text-sm sm:text-xl md:2xl font-bold">+91 99243 33945</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Helper component for nav links
const NavLink = ({ to, label, onClick }) => (
  <li className="w-full md:w-auto">
    <Link
      to={to}
      className="block w-full px-6 md:px-0 py-2 font-medium text-lg hover:text-[#41a752] transition-colors duration-300"
      onClick={onClick}
    >
      {label}
    </Link>
  </li>
);

export default Navbar;