export default function CTABanner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop Banner - Hidden on mobile */}
      <div className="hidden md:block relative w-full h-auto">
        <img
          src="/home/ctabanner.png"
          alt="MOISE Banner Desktop"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Banner - Hidden on desktop */}
      <div className="md:hidden relative w-full h-auto">
        <img
          src="/home/ctabannerm.png"
          alt="MOISE Banner Mobile"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}




// export default function CTABanner() {
//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* Desktop Layout */}
//       <div className="hidden md:block relative min-h-[600px]">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src="/home/bg2.png"
//             alt="Baby comfort"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
//         </div>

//         {/* Large MOISE Text Overlay */}
//         <div className="absolute left-0 buttom-0 inset-0 flex  items-center justify-start pl-12">
//           <h2 className="text-[200px] lg:text-[280px] font-light tracking-wider text-white/30 leading-none">
//             MOISE
//           </h2>
//         </div>

//         {/* Content Box */}
//         <div className="relative z-10 flex items-center justify-end min-h-[600px] pr-12 lg:pr-20">
//           <div className="max-w-xl">
//             <h3 className="text-4xl lg:text-5xl font-normal text-black mb-6 leading-tight">
//               De standaard in babycomfort
//             </h3>
            
//             <p className="text-base lg:text-lg text-gray-800 leading-relaxed mb-8">
//               Moise luiers zijn ontwikkeld met één doel: het beste voor jouw baby. Superzacht op de huid, met betrouwbare bescherming tegen lekken en irritatie. Voor zorgeloze momenten en nachten vol rust.
//             </p>

//             <button className="bg-[#A74A10] text-white px-10 py-3 rounded-full hover:bg-[#8A3D0D] transition-colors text-sm font-medium tracking-wide">
//               ONTDEK DE COLLECTIE
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Layout */}
//       <div className="md:hidden relative">
//         {/* Background Image with Overlay */}
//         <div className="relative h-[500px]">
//           <img
//             src="/home/bg2.png"
//             alt="Baby comfort"
//             className="w-full h-full object-cover"
//           />
          
//           {/* Large MOISE Text Overlay */}
//           <div className="w-full absolute top-6 left-0 right-0">
//             <h2 className="text-[110px] font-light tracking-wider text-white/40 leading-none px-6">
//               MOISE
//             </h2>
//           </div>

//           {/* Dark Gradient Overlay at Bottom */}
//           <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
//         </div>

//         {/* Content */}
//         <div className="px-6 py-10 -mt-20 relative z-10"  style={{
//         background:
//           "linear-gradient(138.74deg, rgba(30, 22, 16, 0.5) -2.03%, rgba(30, 22, 16, 0.15) 76.64%)",
//       }}
// >
//           <h3 className="text-3xl font-normal text-white mb-4 leading-tight">
//             De standaard in babycomfort
//           </h3>
          
//           <p className="text-sm text-gray-200 leading-relaxed mb-8">
//             Moise luiers zijn ontwikkeld met één doel: het beste voor jouw baby. Superzacht op de huid, met betrouwbare bescherming tegen lekken en irritatie. Voor zorgeloze momenten en nachten vol rust.
//           </p>

//           <button className="w-full bg-[#A74A10] text-white py-3 rounded-full hover:bg-[#8A3D0D] transition-colors text-sm font-medium tracking-wide">
//             ONTDEK DE COLLECTIE
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }