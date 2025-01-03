import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../assets/assets.js";

const ProductDetail = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(
      (p) => p.id === parseInt(id) && p.category.toLowerCase() === category.toLowerCase()
    );
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate("/products"); // Redirect if product not found
    }
  }, [id, category, navigate]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm">
            <span
              className="text-[#41a752] cursor-pointer"
              onClick={() => navigate("/products")}
            >
              Products
            </span>
            <span>/</span>
            <span className="text-gray-600">{product.category}</span>
            <span>/</span>
            <span className="text-gray-600">{product.title}</span>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">★</span>
                <span className="text-gray-600">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
              <p className="text-gray-600">{product.description}</p>

              {/* Manufacturing Details */}
              <div className="border-t pt-6">
                <h2 className="text-xl font-bold mb-4">Manufacturing Details</h2>
                <ul className="space-y-2">
                  <li>• Minimum Order Quantity: 100 pieces</li>
                  <li>• Customization Available</li>
                  <li>• Bulk Production Capacity</li>
                  <li>• Quality Assurance</li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-[#41a752] text-white py-3 rounded-md hover:bg-[#32346a] transition-colors duration-300"
                >
                  Request Quote
                </button>
                <button
                  onClick={() => window.open('tel:+1234567890')}
                  className="w-full border-2 border-[#41a752] text-[#41a752] py-3 rounded-md hover:bg-[#41a752] hover:text-white transition-colors duration-300"
                >
                  Call for Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;