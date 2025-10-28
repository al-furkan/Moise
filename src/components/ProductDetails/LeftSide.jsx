import React, { useState } from 'react'
import { Play,  } from 'lucide-react';
const LeftSide = () => {
     const [selectedImage, setSelectedImage] = useState(0);
    const images = [
    '/Products/img1.png',
     '/Products/img2.png',
    '/Products/img3.png', 
    '/Products/img4.png', 
    '/Products/img5.png',
  ];

  return (
    <div> {/* Left Side - Images */}
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
            {/* Thumbnail Images - Left Side */}
            <div className="flex lg:flex-col gap-2 order-2 lg:order-1 overflow-x-auto lg:overflow-visible">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-15 h-15 lg:w-14 lg:h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-[#A0734F]' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative bg-gray-50 rounded  order-1 lg:order-2">
              {/* Product Image */}
              <div className="aspect-square flex items-center justify-center">
                <img 
                  src={images[selectedImage]} 
                  alt="Moise Luier" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Video Thumbnail */}
              <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 w-16 h-16 lg:w-25 lg:h-25 rounded-lg overflow-hidden cursor-pointer shadow-lg">
                <img src="/Products/vimg.png" alt="Video" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default LeftSide