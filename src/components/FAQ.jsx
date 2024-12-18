import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of garments do you manufacture?",
      answer:
        "We manufacture a wide range of garments, including t-shirts, hoodies, sweatshirts, polo shirts, track pants, shorts, and more. We can also create custom-made garments according to your specific requirements.",
    },
    {
      question: "What is your minimum order quantity?",
      answer:
        "Our minimum order quantity depends on the product type. Please contact us for details.",
    },
    {
      question: "What is your turnaround time for orders?",
      answer:
        "Turnaround time varies by order size and customization. Typically, it ranges between 2-4 weeks.",
    },
    {
      question: "Can you create garments with our branding?",
      answer:
        "Yes, we offer branding options, including logos, labels, and custom designs.",
    },
    {
      question: "What materials do you use for your garments?",
      answer:
        "We use high-quality fabrics, including cotton, polyester, and blends, based on your preferences.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:px-12 lg:px-24">
      {/* FAQ Section */}
      <div className="p-6 w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-6">FAQ’s</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-md border-[#41a752]">
              <button
                className="flex justify-between items-center w-full p-4 text-left font-semibold text-black"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span
                  className={`transition-transform ${activeIndex === index ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bulk Order Section */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-4">
        <div className="bg-[#41a752] p-6 rounded-md text-white w-full max-w-sm md:max-w-md">
          <h2 className="text-2xl font-bold mb-4">Bulk order now</h2>
          <p className="mb-6">Unlock the Best Deal for you only.</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 rounded-md text-black"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md text-black"
            />
            <input
              type="tel"
              placeholder="Enter your phone"
              className="w-full p-2 rounded-md text-black"
            />
            <textarea
              placeholder="Enter your message"
              className="w-full p-2 rounded-md text-black"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-[#32346a] text-white w-full py-2 rounded-md font-bold hover:bg-[#32346a]"
            >
              ORDER NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
