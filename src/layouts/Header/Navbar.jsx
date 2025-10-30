"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  User,
  ShoppingCart,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import QuizModal from "./QuizModel";
import ShoppingCard from "./ShoppingCard";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const [quizStep, setQuizStep] = useState(1);
  const [quizData, setQuizData] = useState({
    diaperType: null,
    numChildren: 2,
    childNames: ["", ""],
    childWeights: [
      { gender: "", weight: "" },
      { gender: "", weight: "" },
    ],
    changeFrequency: null,
    recommendations: [],
  });

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Moise Luier",
      type: "Enkelvoudige verpakking",
      size: "Maat: 1 | 3-5 kg",
      price: 11.95,
      quantity: 1,
      image: "/Products/diaper.png",
      subscription: "Eenmalige bestelling",
    },
    {
      id: 2,
      name: "Moise Luierdoekjes",
      description: "4 pakketten",
      price: 11.8,
      quantity: 4,
      image: "/products/wipes.png",
      subscription: "Eenmalige bestelling",
    },
  ]);

  const [discountCode] = useState("DAGQQRJGAS24J2KK");
  const discountAmount = 4.0;
  const shippingCost = 6.0;
  const freeShippingThreshold = 26.0;

  const updateQuantity = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const currentShippingCost =
    subtotal >= freeShippingThreshold ? 0 : shippingCost;
  const total = subtotal + currentShippingCost - discountAmount;

  // Quiz
  const resetQuiz = () => {
    setQuizStep(1);
    setQuizData({
      diaperType: null,
      numChildren: 2,
      childNames: ["", ""],
      childWeights: [
        { gender: "", weight: "" },
        { gender: "", weight: "" },
      ],
      changeFrequency: null,
      recommendations: [],
    });
  };

  const openQuiz = () => {
    resetQuiz();
    setIsQuizOpen(true);
  };

  const closeQuiz = () => {
    setIsQuizOpen(false);
    resetQuiz();
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between px-6 py-4 border-b border-gray-200">
        {/* Left */}
        <div className="flex items-center gap-6">
          <button
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/" className="block w-40 h-8">
            <img
              src="/logo/logo.png"
              alt="Moise logo"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-8 text-sm">
          <NavLink text="LUIERS" href="/productdetails" />
          <NavLink text="DOEKJES" href="/productdetails" />
          <NavLink text="SHAMPOO" href="/productdetails" />
          <NavLink 
            text="HUIDVERZORGING" 
            onClick={() => setIsProductMenuOpen(!isProductMenuOpen)} 
            hasDropdown 
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <Link href="/myaccount" className="p-2 hover:bg-gray-100 rounded">
           <img src="/icons/user.png" alt=""  className=" w-6 h-6"/>
          </Link>

          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:bg-gray-100 rounded relative"
          >
            <ShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#A95A21] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>

          <button
            onClick={openQuiz}
            className="bg-[#A95A21] text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors text-sm tracking-widest"
          >
            SHOP NU
          </button>

          <div className="flex items-center gap-2">
            <ChevronDown size={16} />
            <span className="text-sm">NL</span>
            <img src="/icons/NL.png" alt="NL" className="w-5 h-5" />
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2"
        >
          <Menu size={24} />
        </button>
        <Link href="/" className="block w-32 h-8">
          <img
            src="/logo/logo.png"
            alt="Moise logo"
            className="w-full h-full object-contain"
          />
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/myaccount" className="p-2 hover:bg-gray-100 rounded">
             <img src="/icons/user.png" alt=""  className=" w-6 h-6"/>
          </Link>

          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 relative hover:bg-gray-100 rounded"
          >
            <ShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#A95A21] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 ">
          <div className="bg-white max-w-[430px] w-full h-screen p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <MobileNavLink text="Luiers" href="/productdetails" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink text="Luierdoekjes" href="/productdetails" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink text="Shampoo" href="/productdetails" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink text="Bodylotion" href="/productdetails" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink text="Luierspray" href="/productdetails" onClick={() => setIsMobileMenuOpen(false)} />

              <div className="pt-6 mt-20 space-y-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openQuiz();
                  }}
                  className="bg-[#A95A21] text-white w-full px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors text-sm tracking-widest"
                >
                  SHOP NU
                </button>
              </div>

              <div className="border-t pt-6 mt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <Link href="/aboutus" onClick={() => setIsMobileMenuOpen(false)} className="text-left hover:text-[#A95A21] transition-colors">Over</Link>
                  <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-left hover:text-[#A95A21] transition-colors">FAQ</Link>
                  <Link href="/home" onClick={() => setIsMobileMenuOpen(false)} className="text-left hover:text-[#A95A21] transition-colors">Waarom Moise?</Link>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-left hover:text-[#A95A21] transition-colors">Contact</Link>
                  <Link href="/productdetails" onClick={() => setIsMobileMenuOpen(false)} className="text-left hover:text-[#A95A21] transition-colors">Onze luiers</Link>
                  <Link href="/terms" onClick={() => setIsMobileMenuOpen(false)} className="text-left hover:text-[#A95A21] transition-colors">Algemene voorwaarden</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Section */}
      {isProductMenuOpen && (
        <div className="hidden md:block bg-white py-8 px-6 animate-fadeIn border-b">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

      {/* Quiz Modal */}
      {isQuizOpen && <QuizModal setIsQuizOpen={setIsQuizOpen} />}

      {/* Shopping Cart Sidebar */}
      {isCartOpen && <ShoppingCard setIsCartOpen={setIsCartOpen} />}
    </div>
  );
}

function NavLink({ text, hasDropdown, href, onClick }) {
  const content = (
    <span className="flex items-center gap-1 hover:text-gray-600 transition-colors cursor-pointer text-[14px] uppercase tracking-wider">
      {text}
      {hasDropdown && <ChevronDown size={16} />}
    </span>
  );

  // If there's an onClick handler, use a button
  if (onClick) {
    return (
      <button onClick={onClick} className="flex items-center gap-1">
        {content}
      </button>
    );
  }

  // If there's an href, use Link
  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  // Otherwise just return the content
  return content;
}

function MobileNavLink({ text, href, onClick }) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  const content = (
    <span className="flex items-center justify-between text-left hover:text-[#A95A21] transition-colors w-full py-2 text-[48px]">
      {text}
      <ChevronRight size={20} />
    </span>
  );

  if (href) {
    return (
      <Link href={href} onClick={handleClick}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={handleClick} className="w-full">
      {content}
    </button>
  );
}