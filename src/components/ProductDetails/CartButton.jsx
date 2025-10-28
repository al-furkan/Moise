import React from 'react'

const CartButton = () => {
  return (
    <div className='w-full space-y-4'>
      {/* Button */}
      <div className='flex justify-center items-center'>
        <button className="w-full lg:w-[80%] bg-[#A95A21] text-white font-semibold py-2.5 lg:py-3 rounded-full hover:bg-[#8d6445] transition-colors text-sm lg:text-base uppercase">
          Toevoegen aan winkelwagen
        </button>
      </div>
      
      {/* Payment Icons */}
      <div className="flex items-center justify-center gap-3 lg:gap-4 flex-wrap">
        {/* iDEAL */}
        <div className="h-5 lg:h-6 flex items-center">
          <svg className="h-full" viewBox="0 0 60 24" fill="none">
            <rect width="60" height="24" rx="4" fill="#CC0066"/>
            <text x="30" y="16" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">iDEAL</text>
          </svg>
        </div>

        {/* Klarna */}
        <div className="h-5 lg:h-6 flex items-center">
          <svg className="h-full" viewBox="0 0 60 24" fill="none">
            <text x="2" y="18" fontSize="16" fontWeight="bold" fill="#FFB3C7">klarna</text>
          </svg>
        </div>

        {/* Mastercard */}
        <div className="h-5 lg:h-6 flex items-center">
          <svg className="h-full" viewBox="0 0 48 30" fill="none">
            <circle cx="15" cy="15" r="12" fill="#EB001B"/>
            <circle cx="33" cy="15" r="12" fill="#F79E1B"/>
            <path d="M24 7.5c-2.5 2-4 5-4 7.5s1.5 5.5 4 7.5c2.5-2 4-5 4-7.5s-1.5-5.5-4-7.5z" fill="#FF5F00"/>
          </svg>
        </div>

        {/* Maestro */}
        <div className="h-5 lg:h-6 flex items-center">
          <svg className="h-full" viewBox="0 0 48 30" fill="none">
            <circle cx="15" cy="15" r="12" fill="#0099DF"/>
            <circle cx="33" cy="15" r="12" fill="#DC002E"/>
            <path d="M24 7.5c-2.5 2-4 5-4 7.5s1.5 5.5 4 7.5c2.5-2 4-5 4-7.5s-1.5-5.5-4-7.5z" fill="#6C6C6C"/>
          </svg>
        </div>

        {/* PayPal */}
        <div className="h-5 lg:h-6 flex items-center">
          <svg className="h-full" viewBox="0 0 60 24" fill="none">
            <path d="M18 4h-6c-.4 0-.8.3-.9.7L8 20h3l1.5-9.5c.1-.4.5-.7.9-.7h2.5c3.5 0 5.5-1.5 6-4.5.4-2.5-.5-4.3-3.9-4.3z" fill="#003087"/>
            <path d="M18 4h-6c-.4 0-.8.3-.9.7L8 20h3l1.5-9.5c.1-.4.5-.7.9-.7h2.5c3.5 0 5.5-1.5 6-4.5.4-2.5-.5-4.3-3.9-4.3z" fill="#0070E0" opacity="0.7"/>
            <text x="24" y="16" fontSize="11" fontWeight="bold" fill="#003087">PayPal</text>
          </svg>
        </div>

        {/* Visa */}
        <div className="h-5 lg:h-6 flex items-center">
          <svg className="h-full" viewBox="0 0 50 16" fill="none">
            <path d="M20.5 2L17 14h-3l3.5-12h3zm7 0l-4.5 12h-2.8l-2-8.5L14 14h-3l3.5-12h3l1.8 7.5L22.5 2h2.8zm10.5 7c0-1.5-.8-2.5-2.5-2.5s-3 1-3 2.5c0 1.5.8 2.5 2.5 2.5s3-1 3-2.5zm3 0c0 3-2.5 5.5-5.5 5.5s-5.5-2.5-5.5-5.5S30.5 3.5 33.5 3.5 39 6 39 9zm7-7h-2.8l-2 5.5L39 14h-2.8l2.3-6.5L36.5 2H39l2.2 5.5L43.2 2H46l-4 12h-2.8l2-5.5z" fill="#1434CB"/>
          </svg>
        </div>

        {/* American Express */}
        <div className="h-5 lg:h-6 flex items-center px-2 bg-[#006FCF] rounded">
          <svg className="h-4" viewBox="0 0 48 16" fill="none">
            <text x="0" y="12" fontSize="10" fontWeight="bold" fill="white">AMEX</text>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CartButton;