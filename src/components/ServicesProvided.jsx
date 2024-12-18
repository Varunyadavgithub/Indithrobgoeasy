import React from "react";
import { FaTshirt, FaBoxOpen, FaCubes, FaClipboardCheck } from "react-icons/fa"; // Importing react-icons

const ServicesProvided = () => {
  const services = [
    {
      id: 1,
      title: "Customized Orders",
      icon: <FaTshirt />, // Icon for Customized Orders
    },
    {
      id: 2,
      title: "Bulk Orders",
      icon: <FaBoxOpen />, // Icon for Bulk Orders
    },
    {
      id: 3,
      title: "ODM Orders",
      icon: <FaCubes />, // Icon for ODM Orders
    },
    {
      id: 4,
      title: "Ready Stock",
      icon: <FaClipboardCheck />, // Icon for Ready Stock
    },
  ];

  return (
    <section className="bg-amber-50 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Services Provided</h2>
        <p className="text-gray-600 mb-8 text-xl">
          As a garment manufacturer, we offer a range of services to meet your clothing needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="text-6xl text-gray-700">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProvided;
