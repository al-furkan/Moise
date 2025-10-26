import React from 'react';
import Image from 'next/image';

export default function ProductCard({ image, subtitle, title, imageSrc }) {
  return (
    <div className="max-w-[390px] h-[135px] flex items-center gap-4 bg-gray-50 p-4 rounded-lg flex-1">
      <div className="w-[134px] h-[134px] bg-white rounded flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            width={134}
            height={134}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-3xl">{image}</span>
        )}
      </div>
      <div>
        <p className="text-[20px] text-gray-600 mb-1">{subtitle}</p>
        <h3 
          className="text-[32px] font-normal"
          style={{
            letterSpacing: '0.03em'
          }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}