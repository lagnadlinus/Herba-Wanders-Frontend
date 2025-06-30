import React, { useState, useEffect } from 'react';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';

const bannerImages = [banner1, banner2, banner3];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((i) => (i + 1) % bannerImages.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrevious = () =>
    setCurrentIndex((i) => (i - 1 + bannerImages.length) % bannerImages.length);
  const goToNext = () => setCurrentIndex((i) => (i + 1) % bannerImages.length);

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        role="region"
        aria-live="polite"
      >
        {bannerImages.map((image, idx) => (
          <div
            key={idx}
            className="min-w-full transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentIndex === idx ? 1 : 0 }}
          >
            <img
              src={image}
              alt={`Banner ${idx + 1}`}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* **Overlay CTA** */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Discover Nature’s Best
        </h2>
        <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl">
          Shop premium herbal supplements and boost your wellness journey today.
        </p>
        <button
          onClick={() => {
            document
              .getElementById('products')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
        >
          Shop Now
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {bannerImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx ? 'bg-green-500 scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition opacity-0 group-hover:opacity-100"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition opacity-0 group-hover:opacity-100"
        aria-label="Next Slide"
      >
        ❯
      </button>
    </div>
  );
};

export default Banner;
