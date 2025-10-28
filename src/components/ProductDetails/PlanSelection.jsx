import React, { useState } from 'react'

const PlanSelection = () => {
     const [selectedPlan, setSelectedPlan] = useState('abonnement');
  return (
     <div>
              <p className="font-semibold text-sm lg:text-base mb-3">Flexibel bestellen met Moise</p>
              <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
                {/* Subscription Plan */}
                <div
                  onClick={() => setSelectedPlan('abonnement')}
                  className={`relative p-4 lg:p-5 rounded-xl border-2 cursor-pointer transition-colors ${
                    selectedPlan === 'abonnement' ? 'border-[#936646] bg-gray-50' : 'border-gray-200'
                  }`}
                >
                  <div className="absolute -top-2.5 right-3 bg-[#D2691E] text-white text-[10px] lg:text-xs px-2.5 lg:px-3 py-1 rounded-full font-semibold">
                    Beste deal
                  </div>
                  <div className="mb-2">
                    <span className="font-bold text-lg lg:text-xl text-[#D2691E]">€10.75</span>
                    <span className="text-gray-400 line-through ml-2 text-sm">€11.95</span>
                  </div>
                  <p className="font-semibold mb-2 text-sm lg:text-base">ABONNEMENT</p>
                  <p className="text-xs lg:text-sm text-gray-600 mb-3">Ontvang je Moise luiers automatisch elke 4 weken.</p>
                  <div className="space-y-1.5 lg:space-y-2 text-xs lg:text-sm text-gray-700">
                    <div className="flex gap-2 items-start">
                      <span className="text-[#D2691E] mt-0.5">○</span>
                      <span>Op elk moment pauzeren of annuleren</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-[#D2691E] mt-0.5">○</span>
                      <span>Altijd de maat aanpassen wanneer je kindje groeit</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-[#D2691E] mt-0.5">○</span>
                      <span>Handig, flexibel en met korting</span>
                    </div>
                  </div>
                </div>

                {/* One-time Purchase */}
                <div
                  onClick={() => setSelectedPlan('eenmalig')}
                  className={`p-4 lg:p-5 rounded-xl border-2 cursor-pointer transition-colors ${
                    selectedPlan === 'eenmalig' ? 'border-[#936646] bg-gray-50' : 'border-gray-200'
                  }`}
                >
                  <div className="mb-2">
                    <span className="font-bold text-lg lg:text-xl">€11.95</span>
                  </div>
                  <p className="font-semibold mb-2 text-sm lg:text-base">EENMALIGE AANKOOP</p>
                  <p className="text-xs lg:text-sm text-gray-600 mb-3">Bestel je Moise luiers eenmalig, zonder abonnement.</p>
                  <div className="space-y-1.5 lg:space-y-2 text-xs lg:text-sm text-gray-700">
                    <div className="flex gap-2 items-start">
                      <span className="text-[#D2691E] mt-0.5">○</span>
                      <span>Bestel de juiste hoeveelheid wanneer je wilt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default PlanSelection;