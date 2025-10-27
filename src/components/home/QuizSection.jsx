import { ShoppingBag, RefreshCw, Truck } from 'lucide-react';

export default function QuizSection() {
  const features = [
    {
      icon: "icons/ShoppingBag.png",
      text: "Altijd de juiste producten voor jouw baby"
    },
    {
      icon: "icons/RefreshCw.png",
      text: "Zonder zorgen, zonder gedoe"
    },
    {
     icon: "icons/Truck.png",
      text: "Bezorgd op het moment dat het jou uitkomt"
    }
  ];

  return (
    <section className=" max-w-[1440px] py-12 md:py-20 bg-[#F3EFEC]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-[40px] md:leading-[50px] font-normal text-center mb-6 md:mb-8">
          Wil je altijd genoeg in huis hebben voor jouw baby?
        </h1>

        {/* Description */}
        <p className="text-base md:text-2xl leading-[140%] text-center text-gray-800 mb-8 md:mb-10 max-w-3xl mx-auto">
          Vertel ons iets over je kleintje en wij helpen je het juiste formaat, type en abonnement te vinden. Helemaal afgestemd op jullie dagelijkse ritme.
        </p>

        {/* Features - Mobile: Vertical, Desktop: Horizontal */}
        <div className="mb-8 md:mb-10">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-4 md:hidden">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-[#A74A10]">
                <div className="flex-shrink-0">
                  <img src={feature.icon} alt="" className='w-5 h-5'/>
                </div>
                <p className="text-sm text-gray-800">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-[#A74A10]">
                <div className="flex-shrink-0">
                  <img src={feature.icon} alt="" className='w-5 h-5'/>
                </div>
                <p className="text-base text-gray-800">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="w-full md:w-auto px-12 py-3 bg-[#A74A10] text-white text-base  rounded-full hover:opacity-90 transition-opacity">
            START DE QUIZ
          </button>
        </div>
      </div>
    </section>
  );
}