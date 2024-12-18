import React from "react";
import { assets } from "../assets/assets.js";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24 px-6 md:px-12">
        {/* About-Image */}
        <div className="flex items-center justify-center md:justify-end w-full md:w-1/2 rounded-lg">
          <img
            src={assets.about_us}
            alt="about-image"
            className="py-10 object-cover w-full h-auto"
          />
        </div>

        {/* About-Context */}
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex items-center justify-start gap-4">
            <div className="text-3xl md:text-4xl text-[#41a752] font-semibold">
              About Us
            </div>
            <div className="bg-[#41a752] h-1 w-16 md:w-20"></div>
          </div>
          <h1 className="text-3xl md:text-5xl text-gray-600 font-bold py-3">
            T-Shirt Manufacturer
          </h1>
          <p className="text-lg md:text-xl py-2 text-justify">
            Established in 2005, we are on a mission to provide top-quality
            t-shirts to our customers in India and globally. Our fully owned
            SEDEX-approved facility is based in the garment hub of India,
            Tirupur, Tamil Nadu, where we have access to the latest technology
            and talent in the industry.
          </p>
          <p className="text-lg md:text-xl py-2 text-justify">
            At our factory, we use advanced garment-making machines from Juki,
            Brother, and Siruba to produce t-shirts that meet the highest
            standards of quality and durability. Our team of experienced
            professionals works tirelessly to ensure every t-shirt leaving our
            factory is made with the utmost care and attention to detail.
          </p>
          <div className="flex justify-start py-6">
            <button className="text-gray-900 font-semibold py-2 px-6 md:px-10 border-2 border-[#41a752] rounded-md hover:bg-[#41a752] hover:text-white transition duration-300">
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
