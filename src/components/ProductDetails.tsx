



import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext.tsx"; // Import useCart

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Access addToCart from CartContext
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-gray-700">Product not found</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-contain rounded-md shadow-lg"
      />

        <div className="p-8">
          <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
          <p className="text-2xl text-green-600 font-bold">${product.price}</p>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-300"
            >
              Back to Products
            </button>
            <button
              onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 })}
              className="px-6 py-3 bg-[#84cc16] text-white rounded-md hover:bg-[#6dbb14] transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
