import Image from 'next/image';

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-black">
      {/* Desktop Banner - Hidden on mobile */}
      <div className="hidden md:block relative w-full h-auto">
        <Image
          src="/home/bgpd1.png"
          alt="MOISE Banner Desktop"
          width={1920}
          height={600}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Mobile Banner - Hidden on desktop */}
      <div className="md:hidden relative w-full h-auto">
        <Image
          src="/home/bgpdm.png"
          alt="MOISE Banner Mobile"
          width={768}
          height={600}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </section>
  );
}
