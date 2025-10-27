import { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      username: "@username",
      image: "home/img4.png"
    },
    {
      username: "@username",
      image: "home/img5.png"
    },
    {
      username: "@username",
      image: "home/img6.png"
    },
    {
      username: "@username",
      image: "home/img7.png"
    },
    {
      username: "@username",
      image: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=600&h=700&fit=crop"
    },
    {
      username: "@username",
      image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=600&h=700&fit=crop"
    },
    {
      username: "@username",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=700&fit=crop"
    },
    {
      username: "@username",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=700&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-normal text-center mb-12 md:mb-16">
          Wat ouders over Moise zeggen
        </h2>

       {/* Mobile Slider - Center image with peek on sides */}
        <div className="md:hidden mb-8">
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 24}px))` }}
            >
              {testimonials.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-full px-3"
                >
                  <div
                    className="relative rounded-3xl overflow-hidden shadow-xl mx-auto"
                    style={{
                      transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
                      transition: 'all 0.3s ease',
                      maxWidth: '85%'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={`Customer testimonial ${index + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                    {/* Instagram Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full">
                      <Instagram size={16} className="text-white" />
                      <span className="text-white text-sm font-medium">{item.username}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Slider - Show 4 at a time */}
        <div className="hidden md:block overflow-hidden mb-12">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: 'calc(25% - 18px)' }}
              >
                <div
                  className="relative"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})`,
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow cursor-pointer hover:scale-105 transition-transform duration-300">
                    <img
                      src={item.image}
                      alt={`Customer testimonial ${index + 1}`}
                      className="w-full h-[350px] object-cover"
                    />
                    {/* Instagram Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full">
                      <Instagram size={16} className="text-white" />
                      <span className="text-white text-sm font-medium">{item.username}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}