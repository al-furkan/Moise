import React from 'react'

const QuantityCalculator = () => {
  return (
     <div className="bg-white text-black rounded-lg p-2 sm:p-2 max-w-[700px] mx-auto">
      {/* Title + Description */}
      <h3 className="font-semibold text-sm sm:text-base mb-1">
        Ontdek hoeveel je nodig heb
      </h3>
      <p className="text-xs sm:text-sm text-black mb-4 leading-relaxed">
        Niet zeker hoeveel luiers je nodig hebt? Met de Moise calculator ontdek
        je eenvoudig hoeveel verpakkingen je per maand nodig hebt, afgestemd op
        jouw kindje en jullie dagelijkse routine.
      </p>

      {/* Input + Button Row */}
      <div className="flex flex-col sm:flex-row items-end gap-4">
        {/* Input 1 */}
        <div className="flex-1 w-full">
          <label className="block text-xs text-black mb-1">
            Voor hoeveel kinderen wil je berekenen?
          </label>
          <input
            type="text"
            placeholder="Enter"
            className="w-full  border-1  text-gray-900 rounded px-5 py-3 text-sm placeholder-gray-500  transition"
          />
        </div>

        {/* Input 2 */}
        <div className="flex-1 w-full">
          <label className="block text-xs text-black mb-1">
            Hoe vaak verschoon je gemiddeld per dag?
          </label>
          <input
            type="text"
            placeholder="Enter"
            className="w-full border-1 text-gray-900 rounded px-5 py-3 text-sm placeholder-gray-500 transition"
          />
        </div>

        {/* Button */}
        <div className="flex-shrink-0 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 rounded-full border-1 border-[#A74A10] font-medium text-sm  hover:text-black transition">
            Bereken nu
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuantityCalculator;