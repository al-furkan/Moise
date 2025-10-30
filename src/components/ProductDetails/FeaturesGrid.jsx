import React from "react";
import Image from "next/image";

const FeaturesGrid = () => {
  const features = [
    {
      icon: "/icons/leaf.png",
      text: "Zacht en mild voor de gevoelige babyhuid",
    },
    {
      icon: "/icons/droplet.png",
      text: "Verrijkt met natuurlijke oliën voor dagelijkse verzorging",
    },
    {
      icon: "/icons/star.png",
      text: "Lichte, snel intrekkende textuur zonder plakkerig gevoel",
    },
    {
      icon: "/icons/testtube.png",
      text: "Dermatologisch getest en veilig voor dagelijks gebruik",
    },
  ];

  return (
    <div className="w-full bg-white text-black">
      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white rounded-lg p-2 sm:p-3"
          >
            <div className="flex-shrink-0 text-gray-600 mt-1">
              <Image
                src={feature.icon}
                alt="feature icon"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
