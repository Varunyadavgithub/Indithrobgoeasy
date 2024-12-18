import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center bg-white shadow-md sticky top-0 z-50 h-20">
      {/* Left Section (80%) */}
      <div className="w-4/5 flex items-center justify-between md:px-4 py-2">
        {/* Logo Section */}
        <div className="ml-5 flex items-center">
          <Link to="/">
          <img
            src={assets.logo} // Replace with your logo path
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
            isMenuOpen ? "block" : "hidden"
          } md:flex items-center gap-4 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none px-4 md:px-0`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <li>
              <Link
                to="/"
                className="block font-medium text-xl py-2 md:py-0 hover:text-green-800" onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block font-medium text-xl py-2 md:py-0 hover:text-green-800" onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block font-medium text-xl py-2 md:py-0 hover:text-green-800" onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block font-medium text-xl py-2 md:py-0 hover:text-green-800" onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block font-medium text-xl py-2 md:py-0 hover:text-green-800" onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Send Inquiry Button */}
          <div className="hidden md:flex ml-4 bg-blue-700 text-white rounded-md">
            <Link to="/inquiry">
              <button className="px-4 py-2 rounded-md shadow">
                SEND INQUIRY
              </button>
            </Link>
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
