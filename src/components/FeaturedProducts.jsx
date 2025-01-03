import React, { useState } from "react";
import { products } from "../assets/assets.js";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("Shirts");

  // Filter products by category
  const getProductsByCategory = (category) =>
    products.filter((product) => product.category === category).slice(0, 3);

  const categories = ["Shirts", "Pants", "T-Shirts", "Night Suits", "Scrub Suits"];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of high-quality garments manufactured with precision and care
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#41a752] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Active Category Title */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 inline-block relative">
            {activeCategory}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#41a752] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
          </h3>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {getProductsByCategory(activeCategory).map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <p className="text-lg font-semibold mb-2">Available for:</p>
                    <ul className="space-y-1">
                      <li>• Bulk Orders</li>
                      <li>• Customization</li>
                      <li>• Private Labeling</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{product.title}</h4>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-600">
                      {product.rating.rate} ({product.rating.count})
                    </span>
                  </div>
                  <Link
                    to={`/products?category=${activeCategory}`}
                    className="text-[#41a752] hover:text-[#32346a] font-medium transition-colors duration-300"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Looking for Bulk Orders?
          </h3>
          <p className="text-gray-600 mb-8">
            Get in touch with us for custom manufacturing solutions
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[#41a752] text-white px-8 py-3 rounded-md hover:bg-[#32346a] transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              Send Inquiry
            </Link>
            <Link
              to="/products"
              className="border-2 border-[#41a752] text-[#41a752] px-8 py-3 rounded-md hover:bg-[#41a752] hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;