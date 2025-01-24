import React from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const stats = [
    { number: "18+", label: "Years Experience" },
    { number: "10K+", label: "Products Delivered" },
    { number: "100+", label: "Happy Clients" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* About-Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src={assets.about_us}
                alt="about-image"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-[#41a752] opacity-10 rounded-lg"></div>
            </div>
          </div>

          {/* About-Context */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-3xl md:text-4xl text-[#41a752] font-bold">
                About Us
              </h2>
              <div className="bg-[#41a752] h-1 w-16 md:w-20"></div>
            </div>
            <h1 className="text-3xl md:text-5xl text-gray-800 font-bold">
              T-Shirt Manufacturer
            </h1>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Established in 2025, We are an upcoming apparel brand in India,
                offering a comprehensive range of garments for both Men and
                Women, from Knitwear, Activewear, Leisurewear, Woven etc,
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in providing garments that gives great feel and
                comfort at the same time it looks trendy that goes with the
                current market requirement of the wearer. We wish to be the
                final destination for customer who wish to have comfortable and
                that uplifts your confidence at an affordable price.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our brand name IndiThrob is self-explanatory and reflects our
                thinking, we would like to develop our brand in coming future
                that becomes the heartbeat of the nation.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 py-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#41a752]">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <button className="bg-transparent px-8 py-3 border-2 border-[#41a752] text-[#41a752] rounded-md hover:bg-[#41a752] hover:text-white transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
              <Link to="/about">Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
