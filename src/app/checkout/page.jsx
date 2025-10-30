"use client";	
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import Checkout from '@/components/Checkout/Checkout';
export default function CheckoutPage() {
  return (
   <div className='max-w-[1440px] mx-auto'> 
   <Header />  
        <Checkout />
     <Footer />
      </div>
  );
}