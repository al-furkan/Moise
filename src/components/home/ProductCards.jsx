import Image from 'next/image';

export default function MoiseProductCards() {
  const products = [
    {
      title: "Moise Luier",
      description: "De ultra-dunne luier die comfort en bescherming samenbrengt",
      image: "/home/item.png"
    },
    {
      title: "Moise Luierbroekjes",
      description: "De luierbroekjes die optimale bescherming combineren met bewegingsvrijheid",
      image: "/home/item.png"
    }
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Mobile Layout - Stacked Cards */}
        <div className="md:hidden space-y-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <div 
      className="rounded-[12px] overflow-hidden flex flex-col"
      style={{
        background: 'linear-gradient(0deg, #F3EFEC, #F3EFEC), linear-gradient(0deg, #F0EBE8, #F0EBE8)'
      }}
    >
      {/* Content Section */}
      <div className="p-8 md:p-10">
        {/* Desktop: Title and Button in same row */}
        <div className="hidden md:flex justify-between items-start mb-3">
          <h3 
            className="text-3xl font-light"
            style={{ 
              fontFamily: 'serif',
              letterSpacing: '0.03em'
            }}
          >
            {product.title}
          </h3>
          <button className="bg-[#A74A10] text-white px-6 py-3 rounded-full hover:bg-orange-800 transition-colors text-sm font-medium whitespace-nowrap">
            BEKIJK PRODUCT
          </button>
        </div>

        {/* Mobile: Title only */}
        <h3 
          className="md:hidden text-[32px] font-light mb-4 text-center"
          style={{ 
            fontFamily: 'Begum Sans',
            letterSpacing: '0.03em'
          }}
        >
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center md:text-left mb-2 md:mb-0">
          {product.description}
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-5">
        <div className="w-full max-w-[500px] max-h-[250px] md:max-h-[350px] aspect-square">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={350}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Mobile: Button at bottom */}
      <div className="md:hidden p-8 pt-0">
        <button className="w-full bg-[#A74A10] text-white px-6 py-4 rounded-full hover:bg-orange-800 transition-colors text-sm font-medium">
          BEKIJK PRODUCT
        </button>
      </div>
    </div>
  );
}