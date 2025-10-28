import React from 'react'

const HeroSection = () => {
  return (
    <div>
     <section className="bg-[#f5f1ed]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-[400px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=800&fit=crop"
                alt="Moeder met baby"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center px-8 py-12 lg:px-16 lg:py-16">
              <h2 className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
                Ontwikkeld voor echte gezinnen
              </h2>
              <p className="text-gray-700 leading-relaxed mb-10 text-lg">
                Als ouders weten we hoe frustrerend doorlekken of huidirritatie kan zijn. Daarom combineren we zorg en innovatie om luiers en verzorgingsproducten te maken die doen wat ze beloven: betrouwbaar, comfortabel en afgestemd op wat jouw baby echt nodig heeft.
              </p>

              <h3 className="text-3xl lg:text-4xl font-light mb-4 text-gray-900">
                Zacht voor huid en planeet
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Onze formules en materialen zijn hypoallergeen, dermatologisch getest en vrij van schadelijke toevoegingen. Waar mogelijk gebruiken we duurzame, plantaardige ingrediënten en vezels: altijd zonder concessies te doen op zachtheid of kwaliteit. Zo zorgen we goed voor jouw baby én voor de wereld waarin hij of zij opgroeit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection;