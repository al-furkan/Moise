import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop Banner - Hidden on mobile */}
      <div className="hidden md:block relative w-full h-auto">
        <Image
          src="/about/bg.png"
          alt="MOISE Banner Desktop"
          width={1920}
          height={800}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Banner - Hidden on desktop */}
      <div className="md:hidden relative w-full h-auto">
        <Image
          src="/about/bgm.png"
          alt="MOISE Banner Mobile"
          width={768}
          height={600}
          priority
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
