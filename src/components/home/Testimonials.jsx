import { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      username: "@username",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=700&fit=crop"
    },
    {
      username: "@username",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=700&fit=crop"
    },
    {
      username: "@username",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=700&fit=crop"
    },
    {
      username: "@username",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=700&fit=crop"
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
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-normal text-center mb-12 md:mb-16">
          Wat ouders over Moise zeggen
        </h2>

        {/* Mobile Slider - Single centered image */}
        <div className="md:hidden">
          <div className="relative max-w-sm mx-auto mb-8">
            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ transform: 'rotate(-2deg)' }}>
              <img
                src={testimonials[currentSlide].image}
                alt="Customer testimonial"
                className="w-full h-[500px] object-cover"
              />
              {/* Instagram Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full">
                <Instagram size={16} className="text-white" />
                <span className="text-white text-sm font-medium">{testimonials[currentSlide].username}</span>
              </div>
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

        {/* Desktop Grid - 4 images with different rotations */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-6 mb-12">
            {testimonials.map((item, index) => (
              <div
                key={index}
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
                    className="w-full h-[450px] object-cover"
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
      </div>
    </section>
  );
}