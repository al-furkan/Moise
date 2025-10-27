export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop Banner - Hidden on mobile */}
      <div className="hidden md:block relative w-full h-auto">
        <img
          src="/home/bg1.png"
          alt="MOISE Banner Desktop"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Banner - Hidden on desktop */}
      <div className="md:hidden relative w-full h-auto">
        <img
          src="/home/bgm1.png"
          alt="MOISE Banner Mobile"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}