import { Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 py-8 md:py-12">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
             <div className="w-40 h-8 text-2xl tracking-wider">
             <Link href="/">  <img src="/logo/logo.png" alt="" className='w-full h-full'/> </Link>   
             </div>
          </div>

          {/* Two Column Grid for Mobile */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Left Column */}
            <div>
              <ul className="space-y-3">
                  <li>
                  <Link href="/aboutus" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    Over
                  </Link>
                </li>
                <li>
                  <Link href="/aboutus" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    Waarom Moise?
                  </Link>
                </li>
                <li>
                  <Link href="/productdetails" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    Onze luiers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              
              <ul className="space-y-3">
                 <li>
                  <Link href="/faq" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    Algemene voorwaarden
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright - Mobile */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600">
              © 2025, Moise
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Logo Section */}
             <div className="flex items-center gap-2 mb-8">
             <div className="w-40 h-8 text-2xl tracking-wider">
                  <Link href="/">  <img src="/logo/logo.png" alt="" className='w-full h-full'/> </Link>   
             </div>
           </div>

           <div className='grid grid-cols-3 gap-8 mb-8'>
             {/* Over Section */}
            <div className="col-span-1">
              <ul className="space-y-3">

                <li>
                  <Link href="/aboutus" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    Over
                  </Link>
                </li>

                <li>
                  <Link href="/aboutus" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    Waarom Moise?
                  </Link>
                </li>
                <li>
                  <Link href="/productdetails" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    Onze luiers
                  </Link>
                </li>
              </ul>
            </div>

            {/* FAQ Section */}
            <div className="col-span-1">
              
              <ul className="space-y-3">
                 <li>
                  <Link href="/faq" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    Algemene voorwaarden
                  </Link>
                </li>
              </ul>
            </div>

            {/* Volg ons Section */}
            <div className="col-span-1">
              <h3 className="font-semibold mb-4 text-sm" style={{ letterSpacing: '0.03em' }}>
                Volg ons
              </h3>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/moise" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://facebook.com/moise" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
           </div>
          </div>

          {/* Copyright - Desktop */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600">
              © 2025, Moise
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}