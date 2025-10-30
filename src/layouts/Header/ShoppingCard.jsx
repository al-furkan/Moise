"use client";
import React, { useState } from "react";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import Link from "next/link";

const ShoppingCards = () => {
  // Define constants first
  const discountAmount = 4.0;
  const shippingCost = 6.0;
  const freeShippingThreshold = 26.0;

  // Cart state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Moise Luier",
      type: "Enkelvoudige verpakking",
      size: "Maat: 1 | 3-5 kg",
      price: 11.95,
      quantity: 1,
      image: "/Products/p1.png",
      subscription: "Eenmalige bestelling",
    },
    {
      id: 2,
      name: "Moise Luierdoekjes",
      description: "4 pakketten",
      price: 11.8,
      quantity: 4,
      image: "/Products/p2.png",
      subscription: "Eenmalige bestelling",
    },
  ]);

  const [discountCode, setDiscountCode] = useState("DAGQQRJGAS24J2KK");
  const [isCartOpen, setIsCartOpen] = useState(true);

  // Update quantity
  const updateQuantity = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const currentShippingCost =
    subtotal >= freeShippingThreshold ? 0 : shippingCost;
  const total = subtotal + currentShippingCost - discountAmount;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <>
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-md bg-opacity-50 z-40"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="fixed right-0 top-0 h-full w-full md:w-[420px] bg-white z-50 shadow-2xl overflow-y-auto">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-normal">Mijn winkelwagen</h2>
                <button onClick={() => setIsCartOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* Free Shipping Progress */}
              {amountToFreeShipping > 0 && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-sm text-gray-700 mb-2">
                    Voeg €{amountToFreeShipping.toFixed(2)} toe voor gratis
                    express-verzending
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-600 h-2 rounded-full transition-all"
                      style={{
                        width: `${Math.min(
                          100,
                          (subtotal / freeShippingThreshold) * 100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-contain w-20 h-20"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-normal text-lg mb-1">{item.name}</h3>
                      {item.type && (
                        <p className="text-sm text-gray-600">Type: {item.type}</p>
                      )}
                      {item.size && (
                        <p className="text-sm text-gray-600">{item.size}</p>
                      )}
                      {item.description && (
                        <p className="text-sm text-gray-600">{item.description}</p>
                      )}
                      <p className="text-base font-normal mt-2">
                        €{item.price.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.subscription}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex justify-between items-center gap-3 mt-3">
                        <div className="flex items-left border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-gray-100"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 text-center min-w-[40px]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-gray-100"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 hover:bg-gray-100 rounded"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className=" p-6 space-y-4">
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Kortingscode invoeren"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button className="w-full py-3 border-1 border-gray-900 rounded-lg font-normal hover:bg-gray-50 transition-colors">
                    Toepassen
                  </button>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotaal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Verzendkosten</span>
                    <span>€{currentShippingCost.toFixed(2)}</span>
                  </div>
                  {discountCode && (
                    <div className="flex justify-between text-orange-600">
                      <span className="flex items-center gap-2">
                        {discountCode}
                        <button className="text-gray-400 hover:text-gray-600">
                          <X size={14} />
                        </button>
                      </span>
                      <span>-€{discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-normal pt-2 border-t">
                    <span>TOTAAL</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                </div>

                <Link href="/checkout" className="block">
                  <button className="w-full bg-[#A95A21] text-white py-4 rounded-full hover:bg-orange-700 transition-colors font-normal tracking-wide">
                    VERDER MET BESTELLEN
                  </button>
                </Link>

                {/* Payment Icons */}
                <div className="flex justify-center gap-2 pt-2">
                  {["iD", "BC", "K", "M", "M", "PP", "V"].map((t, i) => (
                    <div
                      key={i}
                      className={`w-8 h-6 rounded flex items-center justify-center text-[10px] ${
                        t === "V"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-black"
                      }`}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShoppingCards;
