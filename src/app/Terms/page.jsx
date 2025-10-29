'use client'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import React from 'react'
import TermsConditions from '@/components/Terms/TermsConditions'

const Terms = () => {
  return (
     <>
      <div className='max-w-[1440px] mx-auto'>
       <Header />
       <TermsConditions />   
      </div>
      <Footer />
    </>
  )
}

export default Terms;



