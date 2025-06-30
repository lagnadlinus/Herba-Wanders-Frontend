import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';

const bannerImages = [banner1, banner2, banner3];

// Update CTA content with target routes for each slide
const ctaContents = [
  {
    title: "Discover Nature’s Best",
    description: "Shop premium herbal supplements and boost your wellness journey today.",
    buttonText: "Shop Now",
    targetRoute: "/products",  // 1st button target
  },
  {
    title: "Boost Your Immunity",
    description: "Explore our natural products to strengthen your body and mind.",
    buttonText: "Contact Us",
    targetRoute: "/contact",  // 2nd button target
  },
  {
    title: "Pure & Organic",
    description: "Experience the power of pure, organic ingredients for your health.",
    buttonText: "Tips & Resources",
    targetRoute: "/tipsandresources",  // 3rd button target
  }
];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + bannerImages.length) % bannerImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % bannerImages.length);
  };

  // Navigate to the route specific for the current slide
  const handleButtonClick = () => {
    const target = ctaContents[currentIndex].targetRoute;
    navigate(target);
  };

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        role="region"
        aria-live="polite"
      >
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className="min-w-full transition-opacity duration-1000 ease-in-out relative"
            style={{ opacity: currentIndex === index ? 1 : 0 }}
          >
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="w-full h-[400px] md:h-[500px] object-cover transition-opacity duration-1000 ease-in-out"
            />

            {currentIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {ctaContents[index].title}
                </h2>
                <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl">
                  {ctaContents[index].description}
                </p>
                <button
                  onClick={handleButtonClick}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
                >
                  {ctaContents[index].buttonText}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-green-500 scale-110' : 'bg-gray-300'
            } transition-all duration-300`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 opacity-0 group-hover:opacity-100 animate-[slideInLeft_0.5s_ease-out_forwards]"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 opacity-0 group-hover:opacity-100 animate-[slideInRight_0.5s_ease-out_forwards]"
        aria-label="Next Slide"
      >
        ❯
      </button>
    </div>
  );
};

export default Banner;
