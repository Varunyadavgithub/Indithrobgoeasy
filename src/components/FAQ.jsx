import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of garments do you manufacture?",
      answer:
        "We manufacture a wide range of garments, including t-shirts, hoodies, sweatshirts, polo shirts, track pants, shorts, and more. We can also create custom-made garments according to your specific requirements.",
    },
    {
      question: "Why focus on quality and on-time delivery?",
      answer:
        "We prioritize quality to ensure that our garments meet your expectations, providing durability and comfort. On-time delivery is crucial to maintain customer satisfaction and ensure that you receive your order when promised.",
    },
    {
      question: "Why offer garments at highly affordable prices?",
      answer:
        "We believe that high-quality garments should be accessible to everyone. By offering competitive prices, we ensure that our products are affordable without compromising on quality or design.",
    },
    {
      question: "Why choose garments that appeal visually?",
      answer:
        "We design our garments with aesthetics in mind, as we understand the importance of looking good while feeling comfortable. Our visually appealing designs are tailored to meet the style preferences of our customers.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* FAQ Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-8 relative inline-block">
              Frequently Asked Questions
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#41a752] transform origin-left"></div>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-lg border-gray-200 shadow-sm"
                >
                  <button
                    className="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors duration-300"
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`transform transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="p-4 bg-gray-50 text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bulk Order Form */}
          <div className="w-full md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41a752]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41a752]"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41a752]"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41a752]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#41a752] text-white py-3 rounded-md font-semibold hover:bg-[#32346a] transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
