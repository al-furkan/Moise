export default function ShampooSection() {
  return (
    <section className="bg-[#F3EFEC] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Title */}
          <h2 className="text-3xl font-normal text-center mb-6 leading-tight">
            Zachtheid bij elk badmoment
          </h2>

          {/* Description */}
          <p className="text-sm text-center text-gray-800 leading-relaxed mb-8 px-2">
            De Moise 2-in-1 Shampoo & Shower Gel reinigt huid en haar mild, zonder de natuurlijke balans te verstoren. Zacht, veilig en vertrouwd vanaf de eerste dag, voor een fris en soepel resultaat dat goed voelt voor jou en je baby.
          </p>

          {/* Product Image */}
          <div className="mb-8">
            <img
              src="Products/p8.png"
              alt="Moise 2-in-1 Shampoo & Shower Gel"
              className="w-full h-auto rounded object-cover"
            />
          </div>

          {/* CTA Button */}
          <button className="w-full bg-[#A74A10] text-white py-3 rounded-full hover:bg-[#8A3D0D] transition-colors text-sm font-medium tracking-wide">
            ONTDEK DE SHAMPOO
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Title */}
          <h2 className="text-5xl lg:text-6xl font-normal text-center mb-8 leading-tight">
            Zachtheid bij elk badmoment
          </h2>

          {/* Description */}
          <p className="text-2xl text-center text-gray-800 leading-relaxed mb-10 max-w-4xl mx-auto">
            De Moise 2-in-1 Shampoo & Shower Gel reinigt huid en haar mild, zonder de natuurlijke balans te verstoren. Zacht, veilig en vertrouwd vanaf de eerste dag, voor een fris en soepel resultaat dat goed voelt voor jou en je baby.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <button className="bg-[#A74A10] text-white px-12 py-3 rounded-full hover:bg-[#8A3D0D] transition-colors text-sm font-medium tracking-wide">
              ONTDEK DE SHAMPOO
            </button>
          </div>

          {/* Product Image */}
          <div className="max-w-2xl mx-auto">
            <img
              src="Products/p8.png"
              alt="Moise 2-in-1 Shampoo & Shower Gel"
              className="w-full h-auto rounded object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}