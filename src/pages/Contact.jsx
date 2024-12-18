import React from "react";

const ContactPage = () => {
  return (
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-gradient-to-tl from-[#32346a] to-[#41a752] p-4 md:p-12 min-h-screen">
        {/* Left Section: Map */}
        <div className="w-full md:w-1/2 h-96 md:h-screen p-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345086166!2d-122.41941508468116!3d37.77492927975978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c2d66f4f%3A0xcedd15c9ab226baf!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1696997311234!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
            className="rounded-md shadow-lg"
          ></iframe>
        </div>

        {/* Right Section: Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-4 md:p-8 shadow-lg rounded-md">
          <h2 className="text-3xl font-extrabold text-center mb-6">
            Get in Touch
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We'd love to hear from you! Fill out the form below, and we'll get
            back to you as soon as possible.
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-600">Or reach us directly at:</p>
            <a
              href="tel:+1234567890"
              className="text-blue-600 font-semibold hover:underline"
            >
              +1 (234) 567-890
            </a>
          </div>
        </div>
    </div>
  );
};

export default ContactPage;
