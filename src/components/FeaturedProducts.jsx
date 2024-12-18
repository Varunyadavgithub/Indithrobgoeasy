import React from "react";
import { products } from "../assets/assets.js";

const FeaturedProducts = () => {
  // Filter products by category
  const getProductsByCategory = (category) =>
    products.filter((product) => product.category === category).slice(0,3);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-48">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>

        {/* Product Categories */}
        {["Shirts", "Pants", "T-shirts", "Night Suits", "Scrub Suits"].map(
          (category) => (
            <div key={category} className="mb-12">
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-center mb-8">{category}</h3>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {getProductsByCategory(category).map((product) => (
                  <div
                    key={product.id}
                    className="border border-gray-300 shadow-lg p-4 flex flex-col items-center"
                  >
                    {/* Product Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-48 w-auto object-contain"
                    />

                    {/* Product Name */}
                    <h4 className="text-lg font-semibold text-center mt-4">
                      {product.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          )
        )}

        {/* Inquiry Button */}
        <div className="flex justify-center py-12">
          <button className="text-gray-900 font-semibold py-5 px-6 border-2 border-[#4cb65e] rounded-md hover:bg-[#41a752] hover:text-white transition duration-300">
            SEND INQUIRY FOR BULK ORDERS
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
