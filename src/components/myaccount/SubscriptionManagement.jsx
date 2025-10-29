import React, { useState } from 'react';
import { X, ArrowLeft, RefreshCw, AlertCircle } from 'lucide-react';

const SubscriptionManagement = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPauseModal, setShowPauseModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showSkipModal, setShowSkipModal] = useState(false);
  const [showDetailedEditModal, setShowDetailedEditModal] = useState(false);

  const subscriptionItems = [
    {
      id: 1,
      name: 'Baby Diapers, 44 pieces',
      size: 'Maat: 1 | 3-5kg',
      quantity: 1,
      price: '€11.95',
      image: '/Products/p1.png',
      status: 'Maandelijkse bezorging'
    },
    {
      id: 2,
      name: 'Baby Diapers, 44 pieces',
      quantity: 1,
      price: '€2.95',
      image: '/Products/p2.png',
      status: 'Maandelijkse bezorging'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Mobile Layout */}
      <div className="lg:hidden px-4 py-6 space-y-4">
        {/* Subscription Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Mijn abonnement</h2>
          
          {subscriptionItems.map((item) => (
            <div key={item.id} className="flex gap-3 mb-4 pb-4 border-b last:border-b-0 last:mb-0 last:pb-0">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold mb-1">{item.name}</h3>
                {item.size && <p className="text-xs text-gray-600 mb-1">{item.size}</p>}
                <p className="text-xs text-gray-600 mb-1">Hoeveelheid: {item.quantity}</p>
                <p className="text-sm font-bold">{item.price}</p>
                <div className="flex items-center gap-1 mt-1">
                  <RefreshCw size={12} className="text-orange-600" />
                  <p className="text-xs text-orange-600">{item.status}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <span className="text-lg font-bold">TOTAAL</span>
            <span className="text-lg font-bold">€190/monthly</span>
          </div>

          <p className="text-sm text-gray-600 mt-3 mb-4">Subscription Terms</p>

          <button 
            onClick={() => setShowEditModal(true)}
            className="w-full bg-[#A95A21] text-white py-3 rounded-full font-semibold hover:bg-[#8d4a1a] transition-colors"
          >
            WIJZIGEN
          </button>
        </div>

        {/* Payment Method Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Betaalmethode</h2>
          
          <div className="border border-gray-200 rounded-xl p-4">
            <p className="text-sm font-semibold mb-2">Volgende betaling:</p>
            <p className="text-base font-bold mb-3">March 14, 2025</p>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">VISA</span>
              </div>
              <p className="text-sm font-semibold">**** **** **** 3421</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block px-8 py-8">
        <h1 className="text-2xl font-semibold mb-6">Mijn abonnement</h1>
        
        <div className="grid grid-cols-2 gap-6 max-w-6xl">
          {/* Subscription Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold">Mijn abonnement</h2>
              <button 
                onClick={() => setShowEditModal(true)}
                className="bg-[#A95A21] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#8d4a1a] transition-colors text-sm"
              >
                WIJZIGEN
              </button>
            </div>

            {subscriptionItems.map((item) => (
              <div key={item.id} className="flex gap-4 mb-4 pb-4 border-b last:border-b-0 last:mb-0 last:pb-0">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="text-base font-semibold mb-1">{item.name}</h3>
                  {item.size && <p className="text-sm text-gray-600 mb-1">{item.size}</p>}
                  <p className="text-sm text-gray-600 mb-1">Hoeveelheid: {item.quantity}</p>
                  <p className="text-base font-bold">{item.price}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <RefreshCw size={14} className="text-orange-600" />
                    <p className="text-sm text-orange-600">{item.status}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between mt-5 pt-5 border-t">
              <span className="text-xl font-bold">TOTAAL</span>
              <span className="text-xl font-bold">€190/monthly</span>
            </div>

            <p className="text-sm text-gray-600 mt-4">Subscription Terms</p>
          </div>

          {/* Payment Method Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold">Betaalmethode</h2>
              <button className="text-sm text-gray-900 hover:text-gray-700 font-normal">
                Edit Payment method
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="text-sm font-semibold mb-2">Volgende betaling:</p>
              <p className="text-lg font-bold mb-4">March 14, 2025</p>
              
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold">VISA</span>
                </div>
                <p className="text-base font-semibold">**** **** **** 3421</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Subscription Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Jouw Moise-abonnement</h2>
              <button onClick={() => setShowEditModal(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="p-5 space-y-4">
              {subscriptionItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex gap-3 mb-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold mb-1">{item.name}</h3>
                      {item.size && <p className="text-xs text-gray-600 mb-1">{item.size}</p>}
                      <p className="text-xs text-gray-600 mb-1">Hoeveelheid: {item.quantity}</p>
                      <p className="text-sm font-bold">{item.price}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <RefreshCw size={12} className="text-orange-600" />
                        <p className="text-xs text-orange-600">{item.status}</p>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setShowEditModal(false);
                      setShowDetailedEditModal(true);
                    }}
                    className="w-full border border-[#A95A21] text-[#A95A21] py-2 rounded-full text-sm font-semibold hover:bg-[#A95A21] hover:text-white transition-colors"
                  >
                    WIJZIGEN
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Pause Modal */}
      {showPauseModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Pauzeer voor één maand</h2>
              <button onClick={() => setShowPauseModal(false)}>
                <X size={24} />
              </button>
            </div>
            <p className="text-sm text-gray-700 mb-6">
              Met pauzeren behoud je al je instellingen. Je kunt altijd blijven rondkijken en het abonnement eenvoudig weer activeren.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-[#A95A21] text-white py-3 rounded-full font-semibold hover:bg-[#8d4a1a] transition-colors">
                PAUZEER VOOR ÉÉN MAAND
              </button>
              <button 
                onClick={() => setShowPauseModal(false)}
                className="w-full border-2 border-gray-300 text-gray-900 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
              >
                NEE, LIEVER NIET
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Abonnement opzeggen</h2>
              <button onClick={() => setShowCancelModal(false)}>
                <X size={24} />
              </button>
            </div>
            <p className="text-sm text-gray-700 mb-6">
              Weet je zeker dat je jouw abonnement wilt opzeggen? Na het opzeggen ontvang je geen levering meer, tenzij je een nieuw abonnement start.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition-colors">
                JA, ABONNEMENT OPZEGGEN
              </button>
              <button 
                onClick={() => setShowCancelModal(false)}
                className="w-full border-2 border-gray-300 text-gray-900 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
              >
                NEE, BEHOUDEN
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Skip Delivery Modal */}
      {showSkipModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Abonnement aanpassen</h2>
              <button onClick={() => setShowSkipModal(false)}>
                <X size={24} />
              </button>
            </div>
            <p className="text-sm text-gray-700 mb-6">
              Weet je zeker dat je wilt overstappen naar een nieuw luiertje? Je huidige abonnement wordt vanaf de volgende levering aangepast.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-[#A95A21] text-white py-3 rounded-full font-semibold hover:bg-[#8d4a1a] transition-colors">
                JA, AANPASSEN
              </button>
              <button 
                onClick={() => setShowSkipModal(false)}
                className="w-full border-2 border-gray-300 text-gray-900 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
              >
                NEE, BEHOUDEN
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Edit Modal with Full Form */}
      {showDetailedEditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Jouw Moise-abonnement</h2>
              <button onClick={() => setShowDetailedEditModal(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <button 
                onClick={() => {
                  setShowDetailedEditModal(false);
                  setShowEditModal(true);
                }}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
              >
                <ArrowLeft size={16} />
                <span>Terug</span>
              </button>

              <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
                <AlertCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-red-800">Elke wijziging in je abonnement gaat in bij de volgende levering.</p>
              </div>

              <div className="flex gap-3 p-4 border border-gray-200 rounded-xl">
                <img src="/Products/p1.png" alt="Baby Diapers" className="w-20 h-20 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold mb-1">Baby Diapers</h3>
                  <p className="text-sm font-bold mb-2">€11.95</p>
                  <p className="text-xs text-gray-600 mb-2">De ultra-dunne luier die comfort en bescherming samenbrengt</p>
                  <div className="flex gap-2 text-xs">
                    <button 
                      onClick={() => setShowPauseModal(true)}
                      className="text-gray-700 hover:text-gray-900 underline"
                    >
                      Pauzeer voor één maand
                    </button>
                    <button 
                      onClick={() => setShowCancelModal(true)}
                      className="text-red-600 hover:text-red-700 underline"
                    >
                      Abonnement opzeggen
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-sm font-semibold">Kies je maat</h3>
                  <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                    <span className="text-xs text-gray-600">?</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { size: '1', weight: '2-5kg', count: '44 luiers per verpakking' },
                    { size: '2', weight: '4-8kg', count: '40 luiers per verpakking' },
                    { size: '3', weight: '6-10kg', count: '34 luiers per verpakking' },
                    { size: '4', weight: '9-14kg', count: '30 luiers per verpakking' },
                    { size: '5', weight: '11-16kg', count: '26 luiers per verpakking' },
                    { size: '6', weight: '13kg+', count: '24 luiers per verpakking' }
                  ].map((item, index) => (
                    <button
                      key={index}
                      className={`border rounded-lg p-2 text-left hover:border-[#A95A21] transition-colors ${index === 0 ? 'border-[#A95A21] bg-orange-50' : 'border-gray-300'}`}
                    >
                      <div className="font-bold text-base">{item.size}</div>
                      <div className="text-xs text-gray-600">{item.weight}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2">Ontdek hoeveel je nodig heb</h3>
                <p className="text-xs text-gray-600 mb-3">
                  Niet zeker hoeveel luiers je nodig hebt? Met de Moise calculator ontdek je eenvoudig hoeveel verpakkingen je per maand nodig hebt, afgestemd op jouw kindje en jullie dagelijkse routine.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Voor hoeveel kinderen wil je berekenen?</label>
                    <input type="text" placeholder="Enter" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Hoe vaak verschoon je gemiddeld per dag?</label>
                    <input type="text" placeholder="Enter" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                  </div>
                </div>
                <button className="w-full border border-gray-900 text-gray-900 py-2 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors">
                  BEREKEN NU
                </button>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3">Kies het aantal verpakkingen</h3>
                <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3">
                  <button className="w-8 h-8 flex items-center justify-center text-xl text-gray-600 hover:text-gray-900">−</button>
                  <span className="text-base font-semibold">1</span>
                  <button className="w-8 h-8 flex items-center justify-center text-xl text-gray-600 hover:text-gray-900">+</button>
                  <span className="text-xs text-gray-600">44 luiers per verpakking</span>
                </div>
                <p className="text-xs text-gray-600 mt-2">Voeg er nog 5 toe om 10% korting te krijgen</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3">Bezorging</h3>
                <p className="text-sm mb-2">Volgende verzending - 1 november 2025</p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Kies bezorgdatum</label>
                    <input type="text" placeholder="DD/MM/YYYY" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Delivery time</label>
                    <input type="text" value="17:00 - 22:30" readOnly className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 p-3 border border-[#A95A21] rounded-lg bg-orange-50 cursor-pointer">
                    <input type="radio" name="address" defaultChecked className="w-4 h-4 text-[#A95A21]" />
                    <span className="text-sm">Zelfde als factuuradres</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400">
                    <input type="radio" name="address" className="w-4 h-4" />
                    <span className="text-sm">Ander bezorgadres</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-lg font-bold">TOTAAL</span>
                <span className="text-lg font-bold">€18.95/monthly</span>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setShowDetailedEditModal(false)}
                  className="flex-1 border-2 border-gray-300 text-gray-900 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                >
                  ANNULEREN
                </button>
                <button 
                  onClick={() => setShowDetailedEditModal(false)}
                  className="flex-1 bg-[#A95A21] text-white py-3 rounded-full font-semibold hover:bg-[#8d4a1a] transition-colors"
                >
                  OPSLAAN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default SubscriptionManagement;