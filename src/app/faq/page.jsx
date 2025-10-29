'use client'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import React from 'react'
import FAQSection from '@/components/faq/FAQSection'
import NewsletterSignup from '@/components/faq/NewsletterSignup'

const FAQ = () => {
  return (
     <>
      <div className='max-w-[1440px] mx-auto'>
       <Header />
       <FAQSection />
       <NewsletterSignup />
         
      </div>
      <Footer />
    </>
  )
}

export default FAQ;



