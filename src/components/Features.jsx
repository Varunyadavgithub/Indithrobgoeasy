import React from 'react';
import { FaCheckCircle, FaDollarSign, FaTruck, FaBoxOpen } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaCheckCircle className="text-4xl text-black" />,
      title: "High Quality Selection",
      description: "Total Product Quality Control For Peace Of Mind",
    },
    {
      icon: <FaDollarSign className="text-4xl text-black" />,
      title: "Value for Money",
      description: "Factory Direct Prices For Maximum Savings",
    },
    {
      icon: <FaTruck className="text-4xl text-black" />,
      title: "Faster Delivery",
      description: "Fast, Reliable Delivery",
    },
    {
      icon: <FaBoxOpen className="text-4xl text-black" />,
      title: "Ready Stock",
      description: "Instant Supply From Ready Stock",
    },
  ];

  return (
    <div className="bg-[#fff6e5] py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            {feature.icon}
            <h3 className="mt-4 font-bold text-lg text-black">{feature.title}</h3>
            <p className="mt-2 text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
