'use client'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import React from 'react'
import Banner from '@/components/home/Banner'
import TrustLogos from '@/components/home/TrustLogos'
import ProductCards from '@/components/home/ProductCards'

const Home = () => {
  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
        <Header />
        <Banner />
        <TrustLogos />
        <ProductCards />
      </div>
      <Footer />
    </>
  )
}

export default Home;