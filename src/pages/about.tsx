



import React from "react";

const About: React.FC = () => {
  return (
    <div className="about-page bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto space-y-12">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-[#042f2e] mb-6">
            About Herba Wanders
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Herba Wanders is your go-to destination for high-quality herbal products
            that nurture both body and mind. We bring nature’s best remedies, offering
            a wide range of wellness products carefully selected for their purity, sustainability,
            and effectiveness. Let nature guide your wellness journey.
          </p>
        </div>

        {/* Mission Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold text-[#042f2e] mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Herba Wanders, our mission is to empower individuals by offering holistic wellness
            solutions that foster a balanced, healthy lifestyle. We are committed to providing 
            education, resources, and premium herbal products that inspire confidence and vitality
            in your personal wellness journey.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold text-[#042f2e] mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-700">
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-8a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1v-1a1 1 0 011-1h2z"
                    clipRule="evenodd"
                  />
                </svg>
                Pure and high-quality ingredients from trusted suppliers.
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-8a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1v-1a1 1 0 011-1h2z"
                    clipRule="evenodd"
                  />
                </svg>
                Eco-friendly packaging and commitment to sustainability.
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-8a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1v-1a1 1 0 011-1h2z"
                    clipRule="evenodd"
                  />
                </svg>
                Holistic approach to health, wellness, and self-care.
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-8a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1v-1a1 1 0 011-1h2z"
                    clipRule="evenodd"
                  />
                </svg>
                Personalized customer service and support.
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-8a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1v-1a1 1 0 011-1h2z"
                    clipRule="evenodd"
                  />
                </svg>
                Products that align with ethical values and practices.
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#042f2e] mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Have any questions or want to learn more about our products? We’d love to hear from you.
          </p>
          <p className="text-lg text-gray-700">
            You can reach us at{" "}
            <a
              href="mailto:Everestregionenterprises@gmail.com"
              className="text-[#84cc16] hover:underline" target="_blank" rel="noopener noreferrer"
            >
              Everestregionenterprises@gmail.com
            </a>{" "}
            or call us at Mobile: {" "}
            <a href="tel:+977-9820234879" className="text-[#84cc16] hover:underline" target="_blank" rel="noopener noreferrer">
            +977-9820234879
            </a>
            {" "}
            | Phone: {" "}
            <a href="tel:01-5918290" className="text-[#84cc16] hover:underline" target="_blank" rel="noopener noreferrer">
             01-5918290
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
