import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../assets/assets.js";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  // Get unique categories from products
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products by category
  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "all" || product.category === selectedCategory
  );

  // Handle product click
  const handleProductClick = (category, id) => {
    navigate(`/product-detail/${category.toLowerCase()}/${id}`);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#32346a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl">
            Quality Wholesale Garments for Every Industry
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? "bg-[#41a752] text-white"
                    : "bg-white hover:bg-gray-100"
                } transition-colors duration-300 capitalize`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all" ? "All Products" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              onClick={() => handleProductClick(product.category, product.id)}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover"
                />
                {/* Overlay with quick info */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <p className="font-semibold mb-2">Click to view details</p>
                    <ul className="space-y-1">
                      <li>• Bulk Manufacturing</li>
                      <li>• Custom Designs</li>
                      <li>• Private Labeling</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-600">
                      {product.rating.rate} ({product.rating.count})
                    </span>
                  </div>
                  <button
                    className="bg-[#41a752] text-white px-4 py-2 rounded hover:bg-[#32346a] transition-colors duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/contact");
                    }}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing Info Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Manufacturing Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#41a752] mb-2">50K+</div>
              <p className="text-gray-600">Monthly Production Capacity</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#41a752] mb-2">100+</div>
              <p className="text-gray-600">Business Partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#41a752] mb-2">15+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Looking for Custom Manufacturing?
          </h2>
          <p className="text-gray-600 mb-8">
            We offer customized manufacturing solutions for your specific needs
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-block bg-[#41a752] text-white px-8 py-3 rounded-md hover:bg-[#32346a] transition-colors duration-300"
          >
            Contact Us for Bulk Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
