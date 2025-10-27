export default function RoutineSection() {
return (
 <section className="relative w-full overflow-hidden">
      {/* Desktop Banner - Hidden on mobile */}
      <div className="hidden md:block relative w-full h-auto">
        <img
          src="/home/bgr.png"
          alt="MOISE Banner Desktop"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Banner - Hidden on desktop */}
      <div className="md:hidden relative w-full h-auto">
        <img
          src="/home/bgrm.png"
          alt="MOISE Banner Mobile"
          className="w-full h-full object-cover"
        />
      </div>
    </section>







//   const steps = [
//     {
//       step: "Stap 1",
//       title: "Moise Shampoo",
//       description: "Zachte 2-in-1 reiniger voor haar en huid, mild genoeg voor dagelijks gebruik.",
//       image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop"
//     },
//     {
//       step: "Stap 2",
//       title: "Moise Bodylotion",
//       description: "Hydraterende lotion die de huid soepel houdt en langdurig verzorgt.",
//       image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop"
//     },
//     {
//       step: "Stap 3",
//       title: "Moise Luierspra",
//       description: "Beschermende spray die roodheid helpt voorkomen en de huid comfortabel laat aanvoelen.",
//       image: "https://images.unsplash.com/photo-1584862620860-cf83be8b5486?w=400&h=400&fit=crop"
//     }
//   ];

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-slate-400 via-slate-500 to-blue-400 py-12 md:py-20">
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-black/10"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Mobile Layout */}
//         <div className="md:hidden">
//           {/* Header */}
//           <div className="text-white mb-8">
//             <h2 className="text-3xl font-normal mb-4 leading-tight">
//               Alles wat je baby nodig heeft
//             </h2>
//             <p className="text-sm leading-relaxed opacity-90">
//               De huid van je baby is nog zo nieuw en gevoelig. Daarom geloven wij in een eenvoudige, milde routine die verzorgt van top tot teen. Niet te weinig. Nooit te veel. Precies genoeg.
//             </p>
//           </div>

//           {/* Product Cards */}
//           <div className="space-y-4 mb-6">
//             {steps.map((item, index) => (
//               <div key={index} className="bg-white rounded-2xl p-4 shadow-lg">
//                 <div className="flex gap-4">
//                   {/* Product Image */}
//                   <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <p className="text-xs text-gray-600 mb-1">{item.step}</p>
//                     <h3 className="text-lg font-medium mb-2">{item.title}</h3>
//                     <p className="text-xs text-gray-700 leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <button className="w-full bg-white text-black py-4 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium tracking-wide">
//             MAAK JE ROUTINE COMPLEET
//           </button>
//         </div>

//         {/* Desktop Layout */}
//         <div className="hidden md:block">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="text-white">
//               <h2 className="text-5xl lg:text-6xl font-normal mb-6 leading-tight">
//                 Alles wat je baby nodig heeft
//               </h2>
//               <p className="text-lg leading-relaxed opacity-90 mb-8">
//                 De huid van je baby is nog zo nieuw en gevoelig. Daarom geloven wij in een eenvoudige, milde routine die verzorgt van top tot teen. Niet te weinig. Nooit te veel. Precies genoeg.
//               </p>

//               {/* CTA Button */}
//               <button className="bg-white text-black px-12 py-4 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium tracking-wide">
//                 MAAK JE ROUTINE COMPLEET
//               </button>
//             </div>

//             {/* Right Product Cards */}
//             <div className="grid grid-cols-1 gap-6">
//               {steps.map((item, index) => (
//                 <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
//                   <div className="flex gap-6">
//                     {/* Product Image */}
//                     <div className="w-32 h-32 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     {/* Content */}
//                     <div className="flex-1">
//                       <p className="text-sm text-gray-600 mb-2">{item.step}</p>
//                       <h3 className="text-xl font-medium mb-3">{item.title}</h3>
//                       <p className="text-sm text-gray-700 leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
  );
}