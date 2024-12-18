import React from "react";
import { assets } from "../assets/assets.js";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-100 h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center object-cover"
        style={{
          backgroundImage: `url(${assets.Hero_image})`,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold">Customized</h1>
          <h1 className="text-6xl md:text-7xl font-bold">T Shirts</h1>
          <div className="bg-[#32346a] text-[#4cb65e] px-4 py-2 text-2xl font-bold rounded-md">
            With Your Logo
          </div>
        </div>

        {/* Second Section */}
        <div className="mt-6 md:mt-0">
          <div className="bg-[#32346a] text-[#4cb65e] px-4 py-2 text-2xl font-bold rounded-md">
            Ready Stock
          </div>
          <h1 className="text-6xl md:text-7xl font-bold">Blank</h1>
          <h1 className="text-2xl md:text-4xl font-bold">T Shirts</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
