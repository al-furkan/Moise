import React, { useState, useRef, useEffect } from 'react';

export default function ProductStats() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const stats = [
    {
      value: "99%",
      label: "gezuiverd water"
    },
    {
      value: "5",
      label: "schone ingrediënten"
    },
    {
      value: "100%",
      label: "plantaardige vezels"
    },
    {
      value: "30%",
      label: "groter dan gemiddeld"
    }
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.6;
      const newPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white py-12 md:py-16 px-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-light text-gray-900 pr-4">
            Een luier die verder gaat dan gemiddeld
          </h2>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2 md:gap-3 flex-shrink-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center text-xl transition-all ${
                canScrollLeft 
                  ? 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50' 
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center text-xl transition-all ${
                canScrollRight 
                  ? 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50' 
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Scroll (2.5 items visible) */}
        <div className="md:hidden -mx-4">
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto gap-6 px-4 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 snap-start"
                style={{ width: 'calc(40% - 12px)' }}
              >
                <div className="text-left">
                  <div className="text-6xl font-light text-gray-900 mb-3 leading-none">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-700 leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid View (4 items) */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <div className="text-7xl lg:text-8xl font-light text-gray-900 mb-4 leading-none">
                {stat.value}
              </div>
              <p className="text-base lg:text-lg text-gray-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}