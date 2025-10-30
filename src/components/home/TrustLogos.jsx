import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TrustLogos() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const logos = [
    { name: "EGEN MAANDEN BEURS", src: "/home/logo1.png" },
    { name: "LINDA", src: "/home/logo2.png" },
    { name: "ELLE", src: "/home/logo3.png" },
    { name: "little dutch", src: "/home/logo4.png" },
    { name: "Ouders", src: "/home/logo5.png" },
    { name: "NOS", src: "/home/logo6.png" },
  ];

  // Auto slide for mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(logos.length / 3));
    }, 3000);
    return () => clearInterval(timer);
  }, [logos.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-4 md:py-6">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Heading */}
        <h2 
          className="text-center text-xl md:text-[40px] mb-8 md:mb-12 font-light"
          style={{ 
            fontFamily: 'Begum Sans',
            letterSpacing: '0.03em'
          }}
        >
          Vertrouwd door ouders, gezien bij:
        </h2>

        {/* Desktop Layout - All logos visible */}
        <div className="hidden md:flex items-center justify-center gap-10 lg:gap-12 flex-wrap">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile Layout - Slider with 3 logos */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(logos.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="flex items-center justify-center gap-6 px-4">
                    {logos.slice(slideIndex * 3, slideIndex * 3 + 3).map((logo, index) => (
                      <div 
                        key={index}
                        className="grayscale opacity-60 flex-1 flex justify-center"
                      >
                        <Image
                          src={logo.src}
                          alt={logo.name}
                          width={100}
                          height={40}
                          className="h-10 w-auto object-contain max-w-[100px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(logos.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[#A74A10] w-6' 
                    : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}