import React from "react";
import { FaCheckCircle, FaMedal, FaUsers, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  // Company statistics
  const stats = [
    {
      number: "18+",
      text: "Years Experience",
      icon: <FaMedal className="text-4xl text-[#41a752]" />,
    },
    {
      number: "500+",
      text: "Happy Clients",
      icon: <FaUsers className="text-4xl text-[#41a752]" />,
    },
    {
      number: "25+",
      text: "Countries Served",
      icon: <FaGlobe className="text-4xl text-[#41a752]" />,
    },
  ];

  // Core values
  const coreValues = [
    {
      title: "Quality First",
      description:
        "Premium materials and strict quality control in every product",
    },
    {
      title: "Customer Satisfaction",
      description: "Dedicated to exceeding customer expectations",
    },
    {
      title: "Innovation",
      description: "Constantly updating our technology and processes",
    },
    {
      title: "Sustainability",
      description: "Committed to eco-friendly manufacturing practices",
    },
  ];

  // Certifications
  const certifications = [
    "ISO 9001:2015",
    "SEDEX Certified",
    "GOTS Certified",
    "Fair Trade Certified",
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#32346a] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Garment Manufacturing Partner
            </h1>
            <p className="text-xl text-gray-300">
              Crafting Quality Apparel Since 2005
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-[#32346a] mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Story Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Founded in 2005, we began our journey with a simple mission: to
                provide high-quality garments to customers worldwide. Starting
                with a small facility in Tirupur, we have grown into a leading
                manufacturer in India's textile industry.
              </p>
              <p>
                Our state-of-the-art manufacturing facility spans over 50,000
                square feet and is equipped with the latest technology from
                industry leaders like Juki, Brother, and Siruba. We employ over
                200 skilled professionals who bring expertise and dedication to
                every garment we produce.
              </p>
              <p>
                Today, we serve clients across 25+ countries, maintaining our
                commitment to quality, innovation, and customer satisfaction.
                Our success is built on strong relationships with our clients,
                employees, and partners.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#41a752]">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Certifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-lg"
              >
                <FaCheckCircle className="text-[#41a752] mr-2" />
                <span className="font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#41a752] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Let's create exceptional garments together
          </p>
          <button className="bg-white text-[#41a752] px-8 py-3 rounded-md font-bold hover:bg-[#32346a] hover:text-white transition-colors duration-300">
            <Link to="/contact">Contact Us Today</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
