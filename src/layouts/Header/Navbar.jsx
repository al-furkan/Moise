import React, { useState } from 'react';
import { Menu, X, Search, User, ShoppingCart, ChevronDown, Minus, Plus, Trash2 } from 'lucide-react';
import ProductCard from './ProductCard';
import Link from 'next/link';


export default function MoiseNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Cart state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Moise Luier",
      type: "Enkelvoudige verpakking",
      size: "Maat: 1 | 3-5 kg",
      price: 11.95,
      quantity: 1,
      image: "/products/diaper.png",
      subscription: "Eenmalige bestelling"
    },
    {
      id: 2,
      name: "Moise Luierdoekjes",
      description: "4 pakketten",
      price: 11.80,
      quantity: 4,
      image: "/products/wipes.png",
      subscription: "Eenmalige bestelling"
    }
  ]);

  const [discountCode, setDiscountCode] = useState("DAGQQRJGAS24J2KK");
  const discountAmount = 4.00;
  const shippingCost = 6.00;
  const freeShippingThreshold = 26.00;

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const currentShippingCost = subtotal >= freeShippingThreshold ? 0 : shippingCost;
  const total = subtotal + currentShippingCost - discountAmount;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div>
      {/* Desktop & Tablet Navigation */}
      <nav className="hidden md:flex items-center justify-between px-6 py-4 border-b border-gray-200">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
          >
            {isProductMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="text-2xl tracking-wider font-light">
             <Link href="/" className="block w-40 h-8 text-2xl tracking-wider">
              <img src="/logo/logo.png" alt="Moise logo" className='w-full h-full'/>
            </Link>
          </div>
        </div>

        {/* Center Navigation Links */}
        <div className="flex items-center gap-8">
          <NavLink text="LUIERS" />
          <NavLink text="DOEKJES" />
          <NavLink text="SHAMPOO" />
          <NavLink text="HUIDVERZORGING" hasDropdown />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded">
            <User size={20} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:bg-gray-100 rounded relative"
          >
            <ShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
          <button className="bg-[#A95A21] text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors text-sm tracking-widest">
            SHOP NU
          </button>
          <div className="flex items-center gap-2">
            <button>
              <ChevronDown size={16} />
            </button>
            <span className="text-sm">NL</span>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2"
        >
          <Menu size={24} />
        </button>
        <Link href="/" className="block w-40 h-8 text-2xl tracking-wider">
          <img src="/logo/logo.png" alt="Moise logo" className='w-full h-full'/>
        </Link>
        <div className="flex items-center gap-2">
          <button className="p-2">
            <Search size={20} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 relative"
          >
            <ShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white max-w-[790px] h-screen p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="text-xl tracking-wider font-light">
                MOISE
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              <MobileNavLink text="LUIERS" />
              <MobileNavLink text="DOEKJES" />
              <MobileNavLink text="SHAMPOO" />
              <MobileNavLink text="HUIDVERZORGING" hasDropdown />
              <div className="border-t pt-6 mt-6">
                <button className="bg-[#A95A21] text-white w-full px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors text-sm tracking-widest">
                    SHOP NU
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Section - Shows/Hides on Menu Click */}
      {isProductMenuOpen && (
        <div className="hidden md:block bg-white py-8 px-6 animate-fadeIn">
          <div className="max-w-[1440px] mx-auto grid grid-cols-3 gap-2 items-left">
            <ProductCard
              subtitle="Voor een zacht lichaam"
              title="Body Lotion"
              imageSrc="/Products/p1.png"
            />
            <ProductCard 
              subtitle="Voor een zachte huid"
              title="Skin Spray"
              imageSrc="/Products/p2.png"
            />
          </div>
        </div>
      )}

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-transparent bg-opacity-50 z-50"
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Cart Sidebar */}
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
                    Voeg €{amountToFreeShipping.toFixed(2)} toe voor gratis express-verzending
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-600 h-2 rounded-full transition-all"
                      style={{ width: `${(subtotal / freeShippingThreshold) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-xs text-gray-400">Image</span>
                    </div>

                    {/* Product Details */}
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
                      <p className="text-lg font-normal mt-2">€{item.price.toFixed(2)}</p>
                      <p className="text-xs text-gray-500">{item.subscription}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-gray-100"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 text-center min-w-[40px]">{item.quantity}</span>
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

              {/* Footer */}
              <div className="border-t p-6 space-y-4">
                {/* Discount Code */}
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Kortingscode invoeren"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button className="w-full py-3 border-2 border-gray-900 rounded-lg font-normal hover:bg-gray-50 transition-colors">
                    Toepassen
                  </button>
                </div>

                {/* Price Summary */}
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

                {/* Checkout Button */}
                <button className="w-full bg-[#A95A21] text-white py-4 rounded-lg hover:bg-orange-700 transition-colors font-normal tracking-wide">
                  VERDER MET BESTELLEN
                </button>

                {/* Payment Icons */}
                <div className="flex justify-center gap-2 pt-2">
                  <div className="w-8 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px]">iD</div>
                  <div className="w-8 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px]">BC</div>
                  <div className="w-8 h-6 bg-pink-100 rounded flex items-center justify-center text-[10px]">K</div>
                  <div className="w-8 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px]">M</div>
                  <div className="w-8 h-6 bg-blue-100 rounded flex items-center justify-center text-[10px]">M</div>
                  <div className="w-8 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px]">PP</div>
                  <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center text-[10px] text-white">V</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function NavLink({ text, hasDropdown }) {
  return (
    <button 
      className="flex items-center gap-1 hover:text-gray-600 transition-colors"
      style={{
        fontSize: '14px',
        lineHeight: '100%',
        letterSpacing: '0.03em',
        textTransform: 'uppercase',
        fontWeight: 400
      }}
    >
      {text}
      {hasDropdown && <ChevronDown size={16} />}
    </button>
  );
}

function MobileNavLink({ text, hasDropdown }) {
  return (
    <button 
      className="flex items-center justify-between text-left hover:text-gray-600 transition-colors"
      style={{
        fontSize: '14px',
        lineHeight: '100%',
        letterSpacing: '0.03em',
        textTransform: 'uppercase',
        fontWeight: 400
      }}
    >
      {text}
      {hasDropdown && <ChevronDown size={16} />}
    </button>
  );
}