import React, { useState } from 'react';
import { ChevronDown, Eye, EyeOff } from 'lucide-react';

export default function CheckoutPage() {
  const [orderType, setOrderType] = useState('particulier');
  const [deliveryOption, setDeliveryOption] = useState('same');
  const [paymentMethod, setPaymentMethod] = useState('ideal');
  const [showCVV, setShowCVV] = useState(false);

  const cartItems = [
    {
      name: 'De Luier',
      type: 'Enkelvoudige verpakking',
      size: '1 | 3-5 kg',
      quantity: 3,
      price: 30.00,
      originalPrice: 34.80,
      img:"Products/p3.png"
    },
    {
      name: 'De Luier',
      type: 'Enkelvoudige verpakking',
      size: '1 | 3-5 kg',
      quantity: 3,
      price: 30.00,
      originalPrice: 34.,
      img:"Products/p4.png"
    }
  ];

  const subtotal = 60.00;
  const shipping = 6.00;
  const discount = 4.00;
  const total = 64.00;

  return (
    <div className="min-h-screen bg-white py-4 md:py-8 px-3 md:px-4 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {/* Column 1 - Contact & Personal Info */}
          <div className="space-y-4 md:space-y-6">
            {/* Contact */}
            <div>
              <div className="flex flex-col gap-2 mb-3 md:mb-4">
                <h2 className="text-base md:text-lg font-medium">Contact</h2>
                <div className="text-xs md:text-sm">
                  <span className="text-gray-600">Heeft u al een account? </span>
                  <button className="text-[#A95A21] font-medium">Log in</button>
                </div>
              </div>
              <input
                type="email"
                placeholder="Voer je e-mailadres in"
                className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
              />
            </div>

            {/* Order Type */}
            <div>
              <h2 className="text-base md:text-lg font-medium mb-3 md:mb-4">Besteltype</h2>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <button
                  onClick={() => setOrderType('particulier')}
                  className={`flex items-center justify-center gap-2 px-2 md:px-5 py-2 md:py-2.5 border-2 rounded-md transition-colors ${
                    orderType === 'particulier'
                      ? 'border-[#A95A21] bg-orange-50'
                      : 'border-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    orderType === 'particulier' ? 'border-[#A95A21]' : 'border-gray-400'
                  }`}>
                    {orderType === 'particulier' && (
                      <div className="w-2 h-2 rounded-full bg-[#A95A21]" />
                    )}
                  </div>
                  <span className="text-xs md:text-sm font-medium">Particulier</span>
                </button>
                <button
                  onClick={() => setOrderType('zakelijk')}
                  className={`flex items-center justify-center gap-2 px-2 md:px-5 py-2 md:py-2.5 border-2 rounded-md transition-colors ${
                    orderType === 'zakelijk'
                      ? 'border-[#A95A21] bg-orange-50'
                      : 'border-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    orderType === 'zakelijk' ? 'border-[#A95A21]' : 'border-gray-400'
                  }`}>
                    {orderType === 'zakelijk' && (
                      <div className="w-2 h-2 rounded-full bg-[#A95A21]" />
                    )}
                  </div>
                  <span className="text-xs md:text-sm font-medium">Zakelijk</span>
                </button>
              </div>
            </div>

            {/* Personal Details */}
            <div>
              <h2 className="text-base md:text-lg font-medium mb-3 md:mb-4">Persoonlijke gegevens</h2>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <div>
                  <label className="block text-xs text-gray-700 mb-1.5">Voornaam</label>
                  <input
                    type="text"
                    placeholder="Vul in"
                    className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-700 mb-1.5">Achternaam</label>
                  <input
                    type="text"
                    placeholder="Vul in"
                    className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div>
              <h2 className="text-base md:text-lg font-medium mb-3 md:mb-4">Factuuradres</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-700 mb-1.5">Land</label>
                  <div className="w-full px-3 md:px-4 py-2 md:py-2.5 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-700">
                    Nederland
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  <div>
                    <label className="block text-xs text-gray-700 mb-1.5">Postcode</label>
                    <input
                      type="text"
                      placeholder="Vul in"
                      className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-700 mb-1.5">Huisnummer</label>
                    <input
                      type="text"
                      placeholder="Vul in"
                      className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-700 mb-1.5">Straatnaam</label>
                  <input
                    type="text"
                    placeholder="Vul in"
                    className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-700 mb-1.5">Stad</label>
                  <input
                    type="text"
                    placeholder="Vul in"
                    className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  <div>
                    <label className="block text-xs text-gray-700 mb-1.5">Telefoonnummer</label>
                    <div className="flex gap-1.5 md:gap-2">
                      <div className="w-12 md:w-16 px-1 md:px-2 py-2 md:py-2.5 border border-gray-300 rounded-md bg-white flex items-center justify-center gap-0.5 text-sm flex-shrink-0">
                        <span className="text-sm">🇳🇱</span>
                        <ChevronDown size={12} className="md:hidden" />
                        <ChevronDown size={14} className="hidden md:block" />
                      </div>
                      <input
                        type="tel"
                        placeholder="+31"
                        className="flex-1 px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-700 mb-1.5">Huisnummer</label>
                    <input
                      type="text"
                      placeholder="Vul in"
                      className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-700 mb-1.5">Toevoeging</label>
                  <input
                    type="text"
                    placeholder="Vul in"
                    className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Delivery & Payment */}
          <div className="space-y-4 md:space-y-6">
            {/* Delivery */}
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <h2 className="text-base md:text-lg font-medium">Bezorging</h2>
                <div className="bg-yellow-400 px-2 py-0.5 rounded text-xs font-bold text-red-600">DHL</div>
              </div>
              <div className="space-y-3 mb-3 md:mb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  <div>
                    <label className="block text-xs text-gray-700 mb-1.5">Kies bezorgdatum</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="DD/MM/YYYY"
                        className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
                      />
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-700 mb-1.5">Bezorgtijd</label>
                    <div className="w-full px-3 md:px-4 py-2 md:py-2.5 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-700">
                      17:00 - 22:30
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2 md:space-y-2.5">
                <button
                  onClick={() => setDeliveryOption('same')}
                  className={`w-full p-2.5 md:p-3 border-2 rounded-md text-left transition-colors ${
                    deliveryOption === 'same'
                      ? 'border-[#A95A21] bg-orange-50'
                      : 'border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2 md:gap-2.5">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      deliveryOption === 'same' ? 'border-[#A95A21]' : 'border-gray-400'
                    }`}>
                      {deliveryOption === 'same' && (
                        <div className="w-2 h-2 rounded-full bg-[#A95A21]" />
                      )}
                    </div>
                    <span className="text-xs md:text-sm font-medium">Zelfde als factuuradres</span>
                  </div>
                </button>
                <button
                  onClick={() => setDeliveryOption('other')}
                  className={`w-full p-2.5 md:p-3 border-2 rounded-md text-left transition-colors ${
                    deliveryOption === 'other'
                      ? 'border-[#A95A21] bg-orange-50'
                      : 'border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2 md:gap-2.5">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      deliveryOption === 'other' ? 'border-[#A95A21]' : 'border-gray-400'
                    }`}>
                      {deliveryOption === 'other' && (
                        <div className="w-2 h-2 rounded-full bg-[#A95A21]" />
                      )}
                    </div>
                    <span className="text-xs md:text-sm font-medium">Ander bezorgadres</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="text-base md:text-lg font-medium mb-3 md:mb-4">Betaalmethode</h2>
              <div className="space-y-2 md:space-y-2.5">
                {/* iDEAL */}
                <button
                  onClick={() => setPaymentMethod('ideal')}
                  className={`w-full p-2.5 md:p-3 border-2 rounded-md flex items-center justify-between transition-colors ${
                    paymentMethod === 'ideal'
                      ? 'border-[#A95A21] bg-orange-50'
                      : 'border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2 md:gap-2.5">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      paymentMethod === 'ideal' ? 'border-[#A95A21]' : 'border-gray-400'
                    }`}>
                      {paymentMethod === 'ideal' && (
                        <div className="w-2 h-2 rounded-full bg-[#A95A21]" />
                      )}
                    </div>
                    <span className="text-xs md:text-sm font-medium">iDEAL</span>
                  </div>
                  <div className="w-8 md:w-10 h-5 md:h-6 bg-pink-500 rounded flex items-center justify-center text-white text-[10px] md:text-xs font-bold">
                    iD
                  </div>
                </button>

                {/* Klarna */}
                <button
                  onClick={() => setPaymentMethod('klarna')}
                  className={`w-full p-3 border-2 rounded-md flex items-center justify-between transition-colors ${
                    paymentMethod === 'klarna'
                      ? 'border-[#A95A21] bg-orange-50'
                      : 'border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === 'klarna' ? 'border-[#A95A21]' : 'border-gray-400'
                    }`}>
                      {paymentMethod === 'klarna' && (
                        <div className="w-2 h-2 rounded-full bg-[#A95A21]" />
                      )}
                    </div>
                    <span className="text-sm font-medium">Klarna</span>
                  </div>
                  <div className="px-2.5 py-1 bg-pink-100 rounded text-pink-600 text-xs font-bold">
                    Klarna.
                  </div>
                </button>

                {/* Bancontact */}
                <button
                  onClick={() => setPaymentMethod('bancontact')}
                  className={`w-full p-3 border-2 rounded-md transition-colors ${
                    paymentMethod === 'bancontact'
                      ? 'border-[#A95A21] bg-orange-50'
                      : 'border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === 'bancontact' ? 'border-[#A95A21]' : 'border-gray-400'
                      }`}>
                        {paymentMethod === 'bancontact' && (
                          <div className="w-2 h-2 rounded-full bg-[#A95A21]" />
                        )}
                      </div>
                      <span className="text-sm font-medium">Bancontact</span>
                    </div>
                    <div className="w-8 h-5 bg-blue-400 rounded"></div>
                  </div>
                  <div className="text-left pl-6 text-xs">
                    <p className="font-medium">Joe Doe</p>
                    <p className="text-gray-600">**** **** **** 3421</p>
                    <p className="text-gray-600">12/28</p>
                  </div>
                  {paymentMethod === 'bancontact' && (
                    <button className="text-[#A95A21] text-xs font-medium underline mt-2 pl-6">
                      Edit
                    </button>
                  )}
                </button>

                {/* Credit Card */}
                <button
                  onClick={() => setPaymentMethod('creditcard')}
                  className={`w-full p-3 border-2 rounded-md transition-colors ${
                    paymentMethod === 'creditcard'
                      ? 'border-[#A95A21] bg-orange-50'
                      : 'border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === 'creditcard' ? 'border-[#A95A21]' : 'border-gray-400'
                      }`}>
                        {paymentMethod === 'creditcard' && (
                          <div className="w-2 h-2 rounded-full bg-[#A95A21]" />
                        )}
                      </div>
                      <span className="text-sm font-medium">Creditcard</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-7 h-5 bg-gradient-to-r from-red-500 to-orange-500 rounded"></div>
                      <div className="w-7 h-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
                      <div className="w-7 h-5 bg-blue-600 rounded"></div>
                    </div>
                  </div>
                  {paymentMethod === 'creditcard' && (
                    <div className="pl-6">
                      <div className="flex items-start justify-between">
                        <div className="text-left text-xs">
                          <p className="font-medium">Joe Doe</p>
                          <p className="text-gray-600">**** **** **** 3421</p>
                          <p className="text-gray-600">12/28</p>
                        </div>
                        <div className="flex gap-2">
                          <input
                            type={showCVV ? 'text' : 'password'}
                            placeholder="CVV"
                            maxLength={3}
                            className="w-16 px-2 py-1.5 border border-gray-300 rounded text-xs text-center"
                            onClick={(e) => e.stopPropagation()}
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowCVV(!showCVV);
                            }}
                            className="p-1.5 border border-gray-300 rounded"
                          >
                            {showCVV ? <EyeOff size={14} /> : <Eye size={14} />}
                          </button>
                        </div>
                      </div>
                      <button className="text-[#A95A21] text-xs font-medium underline mt-2">
                        Edit
                      </button>
                    </div>
                  )}
                </button>

                {/* PayPal */}
                <button
                  onClick={() => setPaymentMethod('paypal')}
                  className={`w-full p-3 border-2 rounded-md flex items-center justify-between transition-colors ${
                    paymentMethod === 'paypal'
                      ? 'border-[#A95A21] bg-orange-50'
                      : 'border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === 'paypal' ? 'border-[#A95A21]' : 'border-gray-400'
                    }`}>
                      {paymentMethod === 'paypal' && (
                        <div className="w-2 h-2 rounded-full bg-[#A95A21]" />
                      )}
                    </div>
                    <span className="text-sm font-medium">PayPal</span>
                  </div>
                  <span className="text-blue-600 font-bold text-xs">PayPal</span>
                </button>
              </div>
            </div>

            {/* Submit Button - Mobile/Tablet */}
            <button className="xl:hidden w-full bg-[#A95A21] text-white py-3 md:py-3.5 rounded-md font-medium hover:bg-orange-700 transition-colors text-sm md:text-base">
              Nu betalen
            </button>

            {/* Terms - Mobile/Tablet */}
            <div className="xl:hidden text-[10px] md:text-[11px] text-gray-600 leading-relaxed space-y-2">
              <p>
                Wanneer je een eenmalig product samen met een abonnement bestelt, wordt het eenmalige artikel alleen bij deze bestelling in rekening gebracht. Bij toekomstige leveringen betaal je alleen de abonnementsprijs.
              </p>
              <p>
                Moise werkt samen met betrouwbare externe koeriers voor alle leveringen. Zodra je bestelling is overgedragen aan onze bezorgpartners, zijn zij verantwoordelijk voor de afhandeling, transitijd en staat van het pakket. Natuurlijk ondersteunen we je altijd bij het oplossen van eventuele problemen, maar Moise is niet aansprakelijk voor vertragingen, schade of verlies tijdens verzending.
              </p>
            </div>
          </div>

          {/* Column 3 - Order Summary (Desktop Only) */}
          <div className="hidden xl:block">
            <div className="space-y-4">
              {/* Cart Items */}
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex gap-3 pb-4 border-b">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-gray-400">

                      <img src={item.img} alt="" />
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm mb-1">{item.name}</h3>
                    <p className="text-[11px] text-gray-600">Type: {item.type}</p>
                    <p className="text-[11px] text-gray-600 mb-1">Maat: {item.size}</p>
                    <p className="text-[11px] text-gray-600 mb-2">Hoeveelheid: {item.quantity}</p>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">€{item.price.toFixed(2)}</span>
                      <span className="text-xs text-gray-400 line-through">€{item.originalPrice.toFixed(2)}</span>
                      <span className="bg-[#A95A21] text-white text-[10px] px-1.5 py-0.5 rounded font-medium">Sale</span>
                    </div>
                    <p className="text-[11px] text-gray-600 mt-1">🔄 Wordt elke maand verzonden</p>
                  </div>
                </div>
              ))}

              {/* Price Summary */}
              <div className="space-y-2.5 pt-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotaal</span>
                  <span className="font-medium">€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Verzending</span>
                  <span className="font-medium">€{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-[#A95A21]">
                  <span className="text-xs">DAGQQRJGAS24J2KK</span>
                  <span className="font-medium">-€{discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-3 border-t">
                  <span className="font-bold text-base">TOTAAL</span>
                  <span className="font-bold text-xl">€{total}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#A95A21] text-white py-3.5 rounded-md font-medium hover:bg-orange-700 transition-colors">
                NU BETALEN
              </button>

              {/* Terms */}
              <div className="text-[11px] text-gray-600 leading-relaxed space-y-2 pt-2">
                <p>
                  Wanneer je een eenmalig product samen met een abonnement bestelt, wordt het eenmalige artikel alleen bij deze bestelling in rekening gebracht. Bij toekomstige leveringen betaal je alleen de abonnementsprijs.
                </p>
                <p>
                  Moise werkt samen met betrouwbare externe koeriers voor alle leveringen. Zodra je bestelling is overgedragen aan onze bezorgpartners, zijn zij verantwoordelijk voor de afhandeling, transitijd en staat van het pakket. Natuurlijk ondersteunen we je altijd bij het oplossen van eventuele problemen, maar Moise is niet aansprakelijk voor vertragingen, schade of verlies tijdens verzending.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}