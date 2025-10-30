import Image from 'next/image';

export default function MoiseStorySection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-7xl lg:text-[104px] md:leading-tight lg:leading-[108px] font-normal text-center mb-8 md:mb-12">
          De nieuwe standaard in babycare
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base lg:text-lg text-center text-gray-800 max-w-3xl mx-auto mb-12 md:mb-20">
          Moise staat voor een nieuwe, premium ervaring in babycare. Elk product is ontwikkeld met zorg, dermatologisch getest en hypoallergeen. Zacht en veilig voor de gevoelige huid van je baby, en vriendelijk voor de wereld waarin ze opgroeien.
        </p>

        {/* Images Layout - Follow Figma Design */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 lg:gap-16 md:items-start">
          {/* Left Image - Aligned left on all devices */}
          <div className="flex justify-start">
           <div className="w-full max-w-[200px] md:max-w-[300px] lg:max-w-[425px] max-h-[250px] md:max-h-[300px] lg:max-h-[555px]">
              <Image
                src="/home/img1.png"
                alt="Mother with baby"
                width={425}
                height={555}
                className="w-full h-auto rounded object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Right Image - Aligned right, offset down on all devices */}
          <div className="flex justify-end">
            <div className="w-full max-w-[200px] md:max-w-[300px] lg:max-w-[425px] max-h-[250px] md:max-h-[300px] lg:max-h-[555px]">
              <Image
                src="/home/img2.png"
                alt="Baby care moment"
                width={425}
                height={555}
                className="w-full h-auto rounded object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}