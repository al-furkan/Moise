'use client'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import React from 'react'
import Banner from '@/components/AboutUS/Banner'
import HeaderTittle from '@/components/AboutUS/HeaderTittle'
import HeroSection from '@/components/AboutUS/HeroSection'

const AboutUs = () => {
  return (
     <>
      <div className='max-w-[1440px] mx-auto '>
        <Header />
         <Banner />
         <HeaderTittle />
         <HeroSection />
      </div>
      <Footer />
    </>
  )
}

export default AboutUs;



