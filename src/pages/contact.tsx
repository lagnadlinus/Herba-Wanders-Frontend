



import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus("Thank you for reaching out! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        {/* Title Section */}
        <h1 className="text-4xl font-extrabold text-center text-[#042f2e] mb-8">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          We'd love to hear from you! Fill out the form below to send us a message. Whether you have a question, feedback, or an inquiry, we’re here to help.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 shadow-xl rounded-lg space-y-6">
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-[#042f2e] mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-[#042f2e] mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your email"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-[#042f2e] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your message"
              rows={6}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-green-600 transition-all duration-300"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status && (
            <div className="mt-6 text-center">
              <p className="text-lg text-gray-700">{status}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
