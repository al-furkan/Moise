import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: "/Products/pdi1.png",
      text: "Laagjes die prettig aanvoelen op de gevoelige babyhuid."
    },
    {
      icon: "/Products/pdi2.png",
      text: "Materialen gekozen met zorg, voor huid en planeet."
    },
    {
      icon: "/Products/pdi3.png",
      text: "Voorkomt lekken zonder in te leveren op comfort."
    },
    {
      icon: "/Products/pdi4.png",
      text: "Flexibel en licht, zodat je baby vrij kan bewegen."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="min-h-auto bg-white text-black py-8 md:py-16 px-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-light mb-8 md:mb-16 text-gray-800 text-center">
          Elke laag ontworpen voor comfort
        </h1>

        {/* Mobile Layout (visible on small screens) */}
        <div className="md:hidden flex flex-col items-center">
          {/* Product Image */}
          <div className="relative mb-8">
            <div className="w-64 h-64 flex flex-col items-center justify-start pt-6 overflow-hidden relative">
             <div className="w-[247px] h-[247px]  flex flex-col items-center justify-start pt-8 overflow-hidden ">                 
                  <Image src="/Products/pd1.png" alt="pd1" width={247} height={247} className='w-full h-full'/>
                 </div>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative w-full max-w-sm">
            {/* Feature Slide */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex flex-col items-center text-center px-8"
                  >
                    <div className="mb-4"><Image src={feature.icon}  alt="" width={64} height={64} /></div>
                    <p className="text-gray-700 text-sm leading-relaxed min-h-[60px]">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-amber-400' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout (visible on medium screens and up) */}
        <div className="hidden md:block">
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-8 items-center">
              {/* Left Features */}
              <div className="flex flex-col space-y-32">
                {/* Left Top Feature */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image src={features[0].icon}  alt="" width={64} height={64} /> 
                  </div>
                  <div className="h-px flex-grow bg-gray-200"></div>
                </div>

                {/* Left Bottom Feature */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image src={features[2].icon}  alt="" width={64} height={64} />
                  </div>
                  <div className="h-px flex-grow bg-gray-200"></div>
                </div>
              </div>

              {/* Center Product */}
              <div className="flex justify-center">
                <div className="w-[564px] h-[564px]  flex flex-col items-center justify-start pt-8 overflow-hidden ">                 
                  <Image src="/Products/pd1.png" alt="pd1" width={564} height={564}  className='w-full h-full'/>
                 </div>
              </div>

              {/* Right Features */}
              <div className="flex flex-col space-y-32">
                {/* Right Top Feature */}
                <div className="flex items-center gap-4">
                  <div className="h-px flex-grow bg-gray-200"></div>
                  <div className="flex-shrink-0">
                   <Image src={features[1].icon}  alt="" width={64} height={64} /> 
                  </div>
                </div>

                {/* Right Bottom Feature */}
                <div className="flex items-center gap-4">
                  <div className="h-px flex-grow bg-gray-200"></div>
                  <div className="flex-shrink-0">
                   <Image src={features[3].icon}  alt="" width={64} height={64} /> 
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Text - Absolutely Positioned */}
            {/* Left Top Text */}
            <div className="absolute left-0 top-8 max-w-[220px]">
              <p className="text-gray-700 text-sm leading-relaxed">
                {features[0].text}
              </p>
            </div>

            {/* Left Bottom Text */}
            <div className="absolute left-0 bottom-8 max-w-[220px]">
              <p className="text-gray-700 text-sm leading-relaxed">
                {features[2].text}
              </p>
            </div>

            {/* Right Top Text */}
            <div className="absolute right-0 top-8 max-w-[220px] text-right">
              <p className="text-gray-700 text-sm leading-relaxed">
                {features[1].text}
              </p>
            </div>

            {/* Right Bottom Text */}
            <div className="absolute right-0 bottom-8 max-w-[220px] text-right">
              <p className="text-gray-700 text-sm leading-relaxed">
                {features[3].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}