import React from 'react';
import { Droplet, FlaskConical, Sparkles, Heart } from 'lucide-react';

export default function SafetyFeatures() {
  const features = [
    {
      icon: <Droplet className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
      text: "Geen parfum, parabenen, latex, lotion, chloorbleekmiddel, alcohol, ftalaten, VOC's of optische witmakers"
    },
    {
      icon: <FlaskConical className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
      text: "Getest door onafhankelijke laboratoria om de veiligheid voor de gevoelige babyhuid te garanderen"
    },
    {
      icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
      text: "Speciaal ontwikkeld om het risico op huidirritatie te minimaliseren"
    },
    {
      icon: <Heart className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
      text: "Omdat zachtheid niet alleen voor baby's geldt, maar ook voor de wereld om ons heen"
    }
  ];

  return (
    <div className="bg-white py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <h2 className="text-2xl font-normal text-gray-900 mb-6 leading-snug">
            Veilig vanaf de eerste dag
          </h2>
          
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Bij Moise doen we geen concessies als het gaat om veiligheid. Onze luiers zijn vrij van onnodige toevoegingen en ontwikkeld met de grootste zorg, zodat jij zeker weet dat de huid van je baby alleen het beste raakt.
          </p>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 text-gray-900">
                  {feature.icon}
                </div>
                <p className="text-xs text-gray-700 leading-relaxed pt-1">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* Left Column - Title (takes 3 columns) */}
          <div className="md:col-span-4 lg:col-span-4">
            <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
              Veilig vanaf de eerste dag
            </h2>
          </div>

          {/* Right Column - Description and Features (takes 9 columns) */}
          <div className="md:col-span-8 lg:col-span-8">
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-12 lg:mb-16 max-w-4xl">
              Bij Moise doen we geen concessies als het gaat om veiligheid. Onze luiers zijn vrij van onnodige toevoegingen en ontwikkeld met de grootste zorg, zodat jij zeker weet dat de huid van je baby alleen het beste raakt.
            </p>

            {/* Features Grid - 4 columns */}
            <div className="grid grid-cols-4 gap-6 lg:gap-10">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="text-gray-900 mb-4 lg:mb-6">
                    {feature.icon}
                  </div>
                  <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}