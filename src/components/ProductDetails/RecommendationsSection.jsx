"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

const RecommendationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const recommendations = [
    {
      id: 1,
      name: "Luierspray",
      price: "€14,95",
      image: "/Products/p1.png",
    },
    {
      id: 2,
      name: "Moise Luierdoekjes",
      subtitle: "54 doekjes",
      price: "€8,95",
      image: "/Products/p3.png",
    },
    {
      id: 3,
      name: "Baby Olie",
      price: "€12,50",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Luiertas",
      price: "€39,95",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=200&h=200&fit=crop",
    },
    {
      id: 5,
      name: "Baby Shampoo",
      price: "€9,95",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=200&h=200&fit=crop",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(recommendations.length - 1, prev + 1));
  };

  // Calculate card width and gap based on screen size
  const getCardWidth = () => {
    if (windowWidth < 500) {
      return (windowWidth - 48) * 0.75; // 75% of available width for better view
    } else if (windowWidth < 640) {
      return 280;
    } else if (windowWidth < 768) {
      return 280;
    } else if (windowWidth < 1024) {
      return 300;
    } else {
      return 320;
    }
  };

  const getGap = () => {
    if (windowWidth < 500) {
      return 12;
    } else if (windowWidth < 1024) {
      return 12;
    } else {
      return 16;
    }
  };

  const cardWidth = getCardWidth();
  const gap = getGap();

  return (
    <section className="max-w-[410px] sm:max-w-[600px] mx-auto mt-6 sm:mt-8 lg:mt-12 bg-[#F5F3F0] rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6">
        <h2 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900">
          Maak je routine compleet
        </h2>
        <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Scroll Left"
            className="p-1.5 sm:p-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === recommendations.length - 1}
            aria-label="Scroll Right"
            className="p-1.5 sm:p-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div 
        className="relative overflow-hidden -mx-3 sm:mx-0"
      >
        <div 
          className="flex transition-transform duration-500 ease-out px-3 sm:px-0"
          style={{
            gap: `${gap}px`,
            transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
          }}
        >
          {recommendations.map((item) => (
            <div
              key={item.id}
              className="product-card bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 flex-shrink-0 shadow-sm hover:shadow-md transition-shadow"
              style={{
                width: `${cardWidth}px`,
              }}
            >
              <div className="flex items-start gap-3 lg:gap-4">
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-cover rounded-lg sm:rounded-xl"
                  />
                </div>
                
                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-between min-h-[64px] sm:min-h-[80px] lg:min-h-[96px]">
                  <div className="flex-1">
                    <h3 className="font-semibold text-xs sm:text-sm lg:text-base text-gray-900 mb-1 line-clamp-2">
                      {item.name}
                    </h3>
                    {item.subtitle && (
                      <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mb-1">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                  
                  <div className="mt-auto pt-1">
                    <p className="font-bold text-sm sm:text-base lg:text-lg text-gray-900 mb-2">
                      {item.price}
                    </p>
                    <button className="bg-[#A95A21] text-white px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs lg:text-sm font-semibold hover:bg-[#8d6445] transition-colors uppercase whitespace-nowrap">
                      Voeg toe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;