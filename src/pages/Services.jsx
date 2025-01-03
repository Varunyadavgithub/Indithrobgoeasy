import React from "react";
import {
  FaTshirt,
  FaBoxOpen,
  FaCubes,
  FaClipboardCheck,
  FaRuler,
  FaPalette,
  FaTruck,
  FaHandshake,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  // Main services
  const mainServices = [
    {
      icon: <FaTshirt />,
      title: "Customized Orders",
      description:
        "Tailor-made garments according to your specific designs and requirements. We handle everything from pattern making to final production.",
      features: [
        "Custom designs and patterns",
        "Size customization",
        "Material selection",
        "Brand labeling",
      ],
    },
    {
      icon: <FaBoxOpen />,
      title: "Bulk Manufacturing",
      description:
        "Large-scale production capabilities with consistent quality and timely delivery for wholesale and retail businesses.",
      features: [
        "Competitive pricing",
        "Quality consistency",
        "Flexible quantities",
        "Quick turnaround",
      ],
    },
    {
      icon: <FaCubes />,
      title: "ODM Services",
      description:
        "Original Design Manufacturing services where we handle the entire process from design to manufacturing.",
      features: [
        "Trend analysis",
        "Design development",
        "Sample creation",
        "Production management",
      ],
    },
    {
      icon: <FaClipboardCheck />,
      title: "Ready Stock",
      description:
        "Immediate availability of popular styles and basic garments for quick delivery and smaller quantity needs.",
      features: [
        "Standard sizes",
        "Popular styles",
        "Quick shipping",
        "Minimum order flexibility",
      ],
    },
  ];

  // Additional services
  const additionalServices = [
    {
      icon: <FaRuler />,
      title: "Pattern Making",
      description:
        "Professional pattern making services using the latest CAD technology.",
    },
    {
      icon: <FaPalette />,
      title: "Design Consultation",
      description:
        "Expert guidance on designs, materials, and production methods.",
    },
    {
      icon: <FaTruck />,
      title: "Logistics Support",
      description: "Comprehensive shipping and delivery solutions worldwide.",
    },
    {
      icon: <FaHandshake />,
      title: "Quality Assurance",
      description: "Rigorous quality control at every production stage.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#32346a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive garment manufacturing solutions tailored to your
            needs. From design to delivery, we ensure quality at every step.
          </p>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Core Manufacturing Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl text-[#41a752] mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-[#41a752] mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:bg-[#41a752] hover:text-white transition-colors duration-300 group"
              >
                <div className="text-3xl text-[#41a752] group-hover:text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="group-hover:text-gray-100">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Production Process Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Production Process
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline items */}
            <div className="space-y-8">
              {[
                "Design & Pattern Making",
                "Sample Development",
                "Bulk Production",
                "Quality Control",
                "Packaging & Shipping",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 relative"
                >
                  <div className="w-8 h-8 bg-[#41a752] rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold">{step}</h3>
                  </div>
                </div>
              ))}
            </div>
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
            Contact us today to discuss your garment manufacturing needs
          </p>
          <div className="space-x-4">
            <button className="bg-white text-[#41a752] px-8 py-3 rounded-md font-bold hover:bg-[#32346a] hover:text-white transition-colors duration-300">
              <Link to="/contact">Get a Quote</Link>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-[#41a752] transition-colors duration-300">
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
