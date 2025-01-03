import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: ["+91 99243 33945"],
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: ["info@Indithrobgoeasy.com"],
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      details: ["Vadodara Gujarat India"],
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: ["Monday - Saturday:", "9:00 AM - 6:00 PM"],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help.
            Contact us using any of the methods below.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-[#41a752] text-3xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Map Section */}
          <div className="w-full lg:w-1/2">
            <div className="h-full min-h-[400px] bg-gray-300 rounded-lg">
              {/* Replace with your actual map component or iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=your-map-embed-url"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "0.5rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#41a752]"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#41a752]"
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#41a752]"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#41a752]"
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#41a752]"
                  onChange={handleChange}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#41a752] text-white py-3 rounded-md font-semibold hover:bg-[#32346a] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
