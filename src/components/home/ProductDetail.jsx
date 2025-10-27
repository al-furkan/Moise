import { Leaf, Droplet, Sparkles, TestTube } from 'lucide-react';

export default function ProductDetail() {
  const features = [
    {
      icon: "/icons/leaf.png",
      text: "Zacht en mild voor de gevoelige babyhuid"
    },
    {
      icon: "/icons/droplet.png",  
      text: "Verrijkt met natuurlijke oliën voor dagelijkse verzorging"
    },
    {
      icon: "/icons/star.png",  
      text: "Lichte, snel intrekkende textuur zonder plakkerig gevoel"
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
        <div className="w-full h-[400px] bg-gradient-to-b from-amber-100 to-amber-50">
          <img
            src="/Products/p6.png"
            alt="Body Lotion Product"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-6 py-10 bg-gray-50">
          {/* Title */}
          <h2 className="text-3xl font-normal mb-3">Body Lotion</h2>

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
            De verzorgende bodylotion die je babyhuid voedt, beschermt en zacht laat aanvoelen, zonder plakkerig gevoel.
          </p>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 text-gray-600 mt-1">
                  <img src={feature.icon} alt="" className='w-5 h-5'/>
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
      <div className="hidden md:grid md:grid-cols-2 min-h-[700px]">
        {/* Content Side */}
        <div className="flex flex-col justify-center px-12 lg:px-20 py-16 bg-gray-50">
          {/* Title */}
          <h2 className="text-5xl font-normal mb-4">Body Lotion</h2>

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
            De verzorgende bodylotion die je babyhuid voedt, beschermt en zacht laat aanvoelen, zonder plakkerig gevoel
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 text-gray-600">
                 <img src={feature.icon} alt="" className='w-5 h-5'/>
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

        {/* Image Side */}
        <div className="relative bg-gradient-to-b from-amber-100 to-amber-50">
          <img
              src="/Products/p6.png"
             alt="Body Lotion Product"
             className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}