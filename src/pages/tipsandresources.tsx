



import React from "react";
import { Link } from "react-router-dom";

const TipsAndResources: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#042f2e] mb-4">
            Tips & Resources
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover expert advice, tips, and resources to enhance your wellness journey with Herba Wanders. 
            From how-to guides to sustainability practices, we provide valuable insights to guide you in making informed choices.
          </p>
        </div>

        {/* Tips Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tip 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#042f2e] mb-4">
              How to Use Our Products
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Learn how to get the best out of our natural products with step-by-step guides and tips.
            </p>
            <Link
              to="/products"
              className="text-green-500 font-semibold hover:underline"
            >
              Browse Products
            </Link>
          </div>

          {/* Tip 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#042f2e] mb-4">
              Herbal Care for Your Well-Being
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Discover how herbal products can support your health and wellness through natural remedies.
            </p>
            <Link
              to="/blog"
              className="text-green-500 font-semibold hover:underline"
            >
              Read Our Blog
            </Link>
          </div>

          {/* Tip 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#042f2e] mb-4">
              Sustainability Practices
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Learn more about our eco-friendly practices and how we ensure sustainability in every product.
            </p>
            <Link
              to="/sustainability"
              className="text-green-500 font-semibold hover:underline"
            >
              Our Sustainability Efforts
            </Link>
          </div>

          {/* Tip 4 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#042f2e] mb-4">
              Herbal Tea Benefits
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Explore the many health benefits of herbal teas and how they can improve your daily routine.
            </p>
            <Link
              to="/products"
              className="text-green-500 font-semibold hover:underline"
            >
              Explore Herbal Teas
            </Link>
          </div>

          {/* Tip 5 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#042f2e] mb-4">
              Customer Reviews
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Read what our satisfied customers have to say about our products and their benefits.
            </p>
            <Link
              to="/reviews"
              className="text-green-500 font-semibold hover:underline"
            >
              See Customer Reviews
            </Link>
          </div>

          {/* Tip 6 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#042f2e] mb-4">
              How to Store Your Herbs
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Learn the best practices for storing herbs to maintain their potency and freshness.
            </p>
            <Link
              to="/blog"
              className="text-green-500 font-semibold hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsAndResources;
