import React from "react";
import { FaTshirt, FaBoxOpen, FaCubes, FaClipboardCheck } from "react-icons/fa";

const ServicesProvided = () => {
  const services = [
    {
      id: 1,
      title: "Customized Orders",
      description: "Tailored to your specific requirements",
      icon: <FaTshirt />,
    },
    {
      id: 2,
      title: "Bulk Orders",
      description: "Large quantity manufacturing",
      icon: <FaBoxOpen />,
    },
    {
      id: 3,
      title: "ODM Orders",
      description: "Original Design Manufacturing",
      icon: <FaCubes />,
    },
    {
      id: 4,
      title: "Ready Stock",
      description: "Immediate availability",
      icon: <FaClipboardCheck />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Services Provided
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#41a752] transform origin-left"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            As a garment manufacturer, we offer a range of services to meet your clothing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-6xl text-[#41a752] group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProvided;