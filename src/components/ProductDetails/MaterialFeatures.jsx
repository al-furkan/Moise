import React, { useState } from 'react';

export default function MaterialFeatures() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const materials = [
    {
      title: "Japanse SAP-kern",
      description: "De kern met Japanse technologie neemt vocht razendsnel op en houdt het veilig vast. Zo blijft de luier dun en licht, terwijl je baby langdurig droog en comfortabel blijft, zelfs 's nachts.",
      image: "fabric",
      gradient: "from-gray-100 to-gray-200"
    },
    {
      title: "ADL-laag",
      description: "De geavanceerde verdelingslaag zorgt ervoor dat vocht niet ophoopt op één plek, maar gelijkmatig wordt verspreid. Dit geeft je baby meer comfort, minder kans op lekkage en een huid die langer droog aanvoelt.",
      image: "leaf",
      gradient: "from-green-700 to-green-900"
    },
    {
      title: "Vochtindicator",
      description: "Twee subtiele lijntjes verkleuren zodra de luier vol is. Zo zie je in één oogopslag of het tijd is om te verschonen, zonder te hoeven gokken of controleren. Praktisch en gerustellend voor ouders.",
      image: "texture",
      gradient: "from-amber-50 to-amber-100"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % materials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + materials.length) % materials.length);
  };

  return (
    <div className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 text-center mb-12 md:mb-16 leading-tight">
          <span className="block md:hidden">Zachtheid die begint bij wat we erin stoppen</span>
          <span className="hidden md:block">Zachtheid die begint bij wat we erin stoppen</span>
        </h2>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {materials.map((material, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white rounded-2xl overflow-hidden">
                      {/* Image */}
                      <div className={`h-64 bg-gradient-to-br ${material.gradient} relative overflow-hidden`}>
                        {material.image === "fabric" && (
                          <div className="absolute inset-0 opacity-80">
                            <svg className="w-full h-full" viewBox="0 0 400 300">
                              <defs>
                                <pattern id="fabric-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                  <line x1="0" y1="20" x2="40" y2="20" stroke="#d1d5db" strokeWidth="8" opacity="0.5"/>
                                  <line x1="20" y1="0" x2="20" y2="40" stroke="#d1d5db" strokeWidth="8" opacity="0.3"/>
                                </pattern>
                              </defs>
                              <rect width="400" height="300" fill="url(#fabric-pattern)"/>
                              <path d="M0,100 Q100,80 200,100 T400,100" fill="none" stroke="white" strokeWidth="40" opacity="0.6"/>
                              <path d="M0,150 Q100,130 200,150 T400,150" fill="none" stroke="#e5e7eb" strokeWidth="40" opacity="0.7"/>
                              <path d="M0,200 Q100,180 200,200 T400,200" fill="none" stroke="white" strokeWidth="40" opacity="0.5"/>
                            </svg>
                          </div>
                        )}
                        {material.image === "leaf" && (
                          <div className="absolute inset-0">
                            <svg className="w-full h-full" viewBox="0 0 400 300">
                              <circle cx="150" cy="150" r="80" fill="#4ade80" opacity="0.3"/>
                              <circle cx="250" cy="180" r="60" fill="#22c55e" opacity="0.4"/>
                              <circle cx="200" cy="100" r="50" fill="#86efac" opacity="0.3"/>
                              {[...Array(20)].map((_, i) => (
                                <circle
                                  key={i}
                                  cx={100 + Math.random() * 200}
                                  cy={80 + Math.random() * 140}
                                  r={3 + Math.random() * 8}
                                  fill="white"
                                  opacity={0.6 + Math.random() * 0.4}
                                />
                              ))}
                            </svg>
                          </div>
                        )}
                        {material.image === "texture" && (
                          <div className="absolute inset-0 opacity-60">
                            <svg className="w-full h-full" viewBox="0 0 400 300">
                              <defs>
                                <pattern id="wave-pattern" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                                  <path d="M0,10 Q10,5 20,10 T40,10" fill="none" stroke="#d4a574" strokeWidth="1.5" opacity="0.4"/>
                                </pattern>
                              </defs>
                              <rect width="400" height="300" fill="url(#wave-pattern)"/>
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-normal text-gray-900 mb-3">
                          {material.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {material.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {materials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {materials.map((material, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden transition-shadow duration-300">
              {/* Image */}
              <div className={`h-72 bg-gradient-to-br ${material.gradient} relative overflow-hidden`}>
                {material.image === "fabric" && (
                  <div className="absolute inset-0 opacity-80">
                    <svg className="w-full h-full" viewBox="0 0 400 350">
                      <defs>
                        <pattern id={`fabric-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <line x1="0" y1="20" x2="40" y2="20" stroke="#d1d5db" strokeWidth="8" opacity="0.5"/>
                          <line x1="20" y1="0" x2="20" y2="40" stroke="#d1d5db" strokeWidth="8" opacity="0.3"/>
                        </pattern>
                      </defs>
                      <rect width="400" height="350" fill={`url(#fabric-${index})`}/>
                      <path d="M0,100 Q100,80 200,100 T400,100" fill="none" stroke="white" strokeWidth="40" opacity="0.6"/>
                      <path d="M0,150 Q100,130 200,150 T400,150" fill="none" stroke="#e5e7eb" strokeWidth="40" opacity="0.7"/>
                      <path d="M0,200 Q100,180 200,200 T400,200" fill="none" stroke="white" strokeWidth="40" opacity="0.5"/>
                      <path d="M0,250 Q100,230 200,250 T400,250" fill="none" stroke="#f3f4f6" strokeWidth="40" opacity="0.6"/>
                    </svg>
                  </div>
                )}
                {material.image === "leaf" && (
                  <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 400 350">
                      <circle cx="150" cy="175" r="90" fill="#4ade80" opacity="0.3"/>
                      <circle cx="250" cy="200" r="70" fill="#22c55e" opacity="0.4"/>
                      <circle cx="200" cy="120" r="60" fill="#86efac" opacity="0.3"/>
                      <ellipse cx="180" cy="220" rx="70" ry="50" fill="#16a34a" opacity="0.25"/>
                      {[...Array(30)].map((_, i) => (
                        <circle
                          key={i}
                          cx={80 + Math.random() * 240}
                          cy={60 + Math.random() * 230}
                          r={3 + Math.random() * 10}
                          fill="white"
                          opacity={0.6 + Math.random() * 0.4}
                        />
                      ))}
                    </svg>
                  </div>
                )}
                {material.image === "texture" && (
                  <div className="absolute inset-0 opacity-60">
                    <svg className="w-full h-full" viewBox="0 0 400 350">
                      <defs>
                        <pattern id={`wave-${index}`} x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                          <path d="M0,10 Q10,5 20,10 T40,10" fill="none" stroke="#d4a574" strokeWidth="1.5" opacity="0.4"/>
                          <path d="M0,15 Q10,10 20,15 T40,15" fill="none" stroke="#c9a57b" strokeWidth="1" opacity="0.3"/>
                        </pattern>
                      </defs>
                      <rect width="400" height="350" fill={`url(#wave-${index})`}/>
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-normal text-gray-900 mb-4">
                  {material.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {material.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}