import { Info } from 'lucide-react';
import React, { useState } from 'react'

const SizeSelection = () => {
const [selectedSize, setSelectedSize] = useState('1');


 const sizes = [
    { id: '1', weight: '2-5kg', luiers: '44 luiers' },
    { id: '2', weight: '6-8kg', luiers: '40 luiers' },
    { id: '3', weight: '6-10kg', luiers: '34 luiers' },
    { id: '4', weight: '9-14kg', luiers: '30 luiers' },
    { id: '5', weight: '11-16kg', luiers: '26 luiers' },
    { id: '6', weight: '13kg+', luiers: '24 luiers' }
  ];

  return (
        <div>
          <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-semibold text-sm lg:text-base">Kies je maat</span>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
              <div className="grid grid-cols-3 gap-2 lg:gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-2.5 lg:p-3 rounded-lg border-2 text-left transition-colors ${
                      selectedSize === size.id
                        ? 'border-gray-900 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-bold text-base lg:text-lg">{size.id}</div>
                    <div className="text-[10px] lg:text-xs text-gray-600">{size.weight}</div>
                    <div className="text-[10px] lg:text-xs text-gray-500 mt-0.5">{size.luiers} per verpakking</div>
                  </button>
                ))}
              </div>
            </div>
        </div>
  )
}

export default SizeSelection;