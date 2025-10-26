'use client'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import React from 'react'
import Banner from '@/components/home/Banner'

const Home = () => {
  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
        <Header />
        <Banner />
      </div>
      <Footer />
    </>
  )
}

export default Home;