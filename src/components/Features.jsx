import React from 'react';
import { FaCheckCircle, FaDollarSign, FaTruck, FaBoxOpen } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaCheckCircle />,
      title: "High Quality Selection",
      description: "Total Product Quality Control For Peace Of Mind",
    },
    {
      icon: <FaDollarSign />,
      title: "Value for Money",
      description: "Factory Direct Prices For Maximum Savings",
    },
    {
      icon: <FaTruck />,
      title: "Faster Delivery",
      description: "Fast, Reliable Delivery",
    },
    {
      icon: <FaBoxOpen />,
      title: "Ready Stock",
      description: "Instant Supply From Ready Stock",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fff6e5] to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-[#41a752] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-[#41a752] transition-all duration-300">
                  <div className="text-4xl text-[#41a752] group-hover:text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;