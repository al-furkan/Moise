import { Leaf, Droplet, Sparkles, TestTube } from 'lucide-react';
import Image from 'next/image';

export default function ProductDetail1() {
  const features = [
    {
      icon: "/icons/leaf.png",
      text: "Vormt een beschermend laagje tegen vocht en wrijving"
    },
    {
      icon: "/icons/droplet.png",  
      text: "Verzacht en verzorgt met natuurlijke oliën en extracten"
    },
    {
      icon: "/icons/sparkles.png",  
      text: "Makkelijk en hygiënisch aan te brengen met sprayformule"
    },
    {
      icon: "/icons/testtube.png",  
      text: "Dermatologisch getest en veilig voor dagelijks gebruik"
    }
  ];

  return (
    <section className="bg-white">
      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Product Image */}
        <div className="w-full h-[334px] bg-gradient-to-b from-amber-100 to-amber-50">
          <Image
            src="/Products/p7.png"
            alt="Body Lotion Product"
            width={1200}
            height={334}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-6 py-10 bg-gray-50">
          {/* Title */}
          <h2 className="text-3xl font-normal mb-3">Luierspray</h2>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-1 text-black">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-sm text-gray-600">4.8/5 gebaseerd op 8332 beoordelingen</span>
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed text-gray-800 mb-8">
            De spray die de gevoelige luierzone beschermt en verzacht, zonder te wrijven.
          </p>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 text-gray-600 mt-1">
                  <Image src={feature.icon} alt="" width={20} height={20} className='w-5 h-5'/>
                </div>
                <p className="text-sm text-gray-800 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="w-full bg-[#A74A10] text-white py-3 rounded-full hover:bg-[#8A3D0D] transition-colors text-sm font-medium tracking-wide">
            BEKIJK PRODUCT
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 min-h-[640px]">
           {/* Image Side */}
        <div className="relative bg-gradient-to-b from-amber-100 to-amber-50">
          <Image
              src="/Products/p6.png"
             alt="Body Lotion Product"
             width={1200}
             height={640}
             className="w-full h-full object-cover"
          />
        </div>
        {/* Content Side */}
        <div className="flex flex-col justify-center px-12 lg:px-20 py-16 bg-gray-50">
          {/* Title */}
          <h2 className="text-5xl font-normal mb-4">Luierspray</h2>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex gap-1 text-black text-lg">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-base text-gray-600">4.8/5 gebaseerd op 8332 beoordelingen</span>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-800 mb-10">
            De spray die de gevoelige luierzone beschermt en verzacht, zonder te wrijven.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 text-gray-600">
                 <Image src={feature.icon} alt="" width={20} height={20} className='w-5 h-5'/>
                </div>
                <p className="text-sm text-gray-800 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <button className="bg-[#A74A10] text-white px-12 py-3 rounded-full hover:bg-[#8A3D0D] transition-colors text-sm font-medium tracking-wide">
              BEKIJK PRODUCT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}