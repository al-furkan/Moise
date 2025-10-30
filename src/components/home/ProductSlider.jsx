import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

 const products = [
    {
      title: "Moise Luierdoekjes",
      description: "99% water + 6 schone ingrediënten: een essentiële reinigingsformule voor de gevoelige huid",
      image: "Products/p5.png"
    },
    {
      title: "Moise Shampoo",
      description: "De milde 2-in-1 shampoo en shower gel die huid en haar zacht reinigt zonder uit te drogen",
      image: "Products/p4.png"
    },
    {
      title: "Bodylotion 0,3 ML",
      description: "Diepe hydratatie voor een zachte, gladde en gezonde huid",
       image: "Products/p3.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="bg-white py-6 md:py-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 
            className="text-2xl md:text-4xl font-light"
            style={{ 
              fontFamily: 'serif',
              letterSpacing: '0.03em'
            }}
          >
            Maak de routine van je baby compleet
          </h2>
          
          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous product"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next product"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Slider - Single Card with peek */}
        <div className="md:hidden">
          <div className="overflow-visible -mx-6 px-6">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 85}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="flex-shrink-0 pr-4" style={{ width: '85%' }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Slider - Show 3 cards, center one elevated */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="overflow-visible flex items-center justify-center gap-6">
              {/* Left Card - Partial View */}
              <div className="w-[30%] opacity-60 transform scale-90">
                <ProductCard 
                  product={products[(currentSlide - 1 + products.length) % products.length]} 
                />
              </div>

              {/* Center Card - Full View & Elevated */}
              <div className="w-[40%] transform -translate-y-8 relative z-10 shadow-xl">
                <ProductCard product={products[currentSlide]} />
              </div>

              {/* Right Card - Partial View */}
              <div className="w-[30%] opacity-60 transform scale-90">
                <ProductCard 
                  product={products[(currentSlide + 1) % products.length]} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <div 
      className="rounded-[12px] overflow-hidden flex flex-col h-full"
      style={{
        background: 'linear-gradient(0deg, #F3EFEC, #F3EFEC), linear-gradient(0deg, #F0EBE8, #F0EBE8)'
      }}
    >
      {/* Header with Title and Button */}
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-start gap-4">
          <h3 
            className="text-2xl md:text-3xl font-light flex-1"
            style={{ 
              fontFamily: 'serif',
              letterSpacing: '0.03em'
            }}
          >
            {product.title}
          </h3>
          <button className="bg-[#A74A10] text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-[#8A3D0D] transition-colors text-xs md:text-sm font-medium whitespace-nowrap flex-shrink-0">
            BEKIJK PRODUCT
          </button>
        </div>
        
        {/* Description */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-5">
        <div className="w-full max-w-[280px] h-[212px] md:h-[350px] aspect-square">
          <Image
            src={`/${product.image}`}
            alt={product.title}
            width={350}
            height={350}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}