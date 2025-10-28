import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

const QuantitySelector = () => {
 const [quantity, setQuantity] = useState(1);
  return (
       <div>
              <p className="font-semibold text-sm lg:text-base mb-3">Kies het aantal verpakkingen</p>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 lg:p-3 hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 lg:px-6 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 lg:p-3 hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-xs lg:text-sm text-gray-600">44 luiers per verpakking</span>
              </div>
              <p className="text-xs lg:text-sm text-gray-600">Voeg er nog 5 toe om <span className="font-semibold">10%</span> korting te krijgen</p>
            </div>
  )
}

export default QuantitySelector