import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeMenuAndDropdown = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="flex items-center bg-white shadow-md sticky top-0 z-50 h-20">
      {/* Left Section (80%) */}
      <div className="w-4/5 flex items-center justify-between md:px-4 py-2">
        {/* Logo Section */}
        <div className="ml-5 flex items-center">
          <Link to="/">
            <img
              src={assets.logo}
              alt="logo"
              className="h-16 md:h-24 w-auto"
            />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            className="text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links Section */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 fixed md:static top-0 right-0 h-full md:h-auto w-2/3 md:w-auto bg-green-800  md:bg-transparent shadow md:shadow-none px-4 md:px-0 transition-transform duration-300 z-40`}
        >
          <div className="flex flex-col md:flex-row items-center md:space-x-8 pt-20 md:pt-0">
            {/* Close Icon for Mobile Menu */}
            <div className="flex justify-end w-full md:hidden">
              <button
                className="text-2xl absolute top-5 right-5"
                onClick={closeMenuAndDropdown}
              >
                <FaTimes />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <li>
                <Link
                  to="/"
                  className="block font-medium text-xl py-2 md:py-0 hover:text-[#32346a]"
                  onClick={closeMenuAndDropdown}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block font-medium text-xl py-2 md:py-0 hover:text-[#32346a]"
                  onClick={closeMenuAndDropdown}
                >
                  About Us
                </Link>
              </li>
              <li className="relative">
                <button
                  className="block font-medium text-xl py-2 md:py-0 hover:text-[#32346a] focus:outline-none"
                  onClick={toggleDropdown}
                >
                  Products
                </button>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-40">
                    <li>
                      <Link
                        to="/products/shirts"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-[#32346a] font-semibold"
                        onClick={closeMenuAndDropdown}
                      >
                        Shirts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/pants"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-[#32346a] font-semibold"
                        onClick={closeMenuAndDropdown}
                      >
                        Pants
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/t-shirts"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-[#32346a] font-semibold"
                        onClick={closeMenuAndDropdown}
                      >
                        T-Shirts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/night-suits"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-[#32346a] font-semibold"
                        onClick={closeMenuAndDropdown}
                      >
                        Night Suits
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/scrub-suits"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-[#32346a] font-semibold"
                        onClick={closeMenuAndDropdown}
                      >
                        Scrub Suits
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/services"
                  className="block font-medium text-xl py-2 md:py-0 hover:text-[#32346a]"
                  onClick={closeMenuAndDropdown}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block font-medium text-xl py-2 md:py-0 hover:text-[#32346a]"
                  onClick={closeMenuAndDropdown}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Send Inquiry Button */}
            <div className="md:ml-4 bg-blue-700 text-white rounded-md">
              <Link to="/inquiry">
                <button
                  className="px-4 py-2 rounded-md shadow hover:bg-blue-800"
                  onClick={closeMenuAndDropdown}
                >
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
            <IoMdCall size={24} />
          </div>
          <div className="text-white">
            <div className="text-sm font-semibold">CALL US NOW</div>
            <div className="text-2xl font-bold">94281 18631</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
