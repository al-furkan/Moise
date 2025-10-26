
import { useState } from 'react';
import { Menu, X, Search, User, ShoppingCart, ChevronDown } from 'lucide-react';
import ProductCard from './ProductCard';

export default function MoiseNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

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
          <div className="w-40 h-8 text-2xl tracking-wider">
           <img src="/logo/logo.png" alt="" className='w-full h-full'/>
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
          <button className="p-2 hover:bg-gray-100 rounded">
            <ShoppingCart size={20} />
          </button>
          <button className="bg-[#A95A21] text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors text-sm tracking-widest">
            SHOP NU
          </button>
          <div className="flex items-center gap-2">
            <button>
              <ChevronDown size={16} />
            </button>
            <span className="text-sm">NL</span>
            <img src="/icons/NL.png" alt="NL"  className='w-5 h-5'/>
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
         <div className="w-40 h-8 text-2xl tracking-wider">
           <img src="/logo/logo.png" alt="" className='w-full h-full'/>
          </div>
        <div className="flex items-center gap-2">
          <button className="p-2">
            <Search size={20} />
          </button>
          <button className="p-2">
            <ShoppingCart size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white w-4/5 h-full p-6">
            <div className="flex justify-between items-center mb-8">
               <div className="w-40 h-8 text-2xl tracking-wider">
           <img src="/logo/logo.png" alt="" className='w-full h-full'/>
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
        <div className="hidden md:block bg-white  py-8 px-6 animate-fadeIn">
          <div className="max-w-[1440px] mx-auto grid grid-cols-3 gap-2 items-left">
            <ProductCard 
              subtitle="Voor een zacht lichaam"
              title="Body Lotion"
              imageSrc="/products/p1.png"
            />
            <ProductCard 
              subtitle="Voor een zachte huid"
              title="Skin Spray"
              imageSrc="/products/p2.png"
            />
          </div>
        </div>
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
