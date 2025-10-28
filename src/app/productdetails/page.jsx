'use client'
import CTABanner from '@/components/home/CTABanner';
import Testimonials from '@/components/home/Testimonials';
import Banner from '@/components/ProductDetails/Banner';
import Banner2 from '@/components/ProductDetails/Banner2';
import DiaperFAQ from '@/components/ProductDetails/DiaperFAQ';
import MaterialFeatures from '@/components/ProductDetails/MaterialFeatures';
import ProductDetails from '@/components/ProductDetails/productDetails';
import ProductShowcase from '@/components/ProductDetails/ProductShowcase';
import ProductStats from '@/components/ProductDetails/ProductStats';
import ReviewsComponent from '@/components/ProductDetails/ReviewsComponent';
import SafetyFeatures from '@/components/ProductDetails/SafetyFeatures';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import React from 'react'

const ProductDetail = () => {
  return (
   <>
      <div className='max-w-[1440px] mx-auto'>
        <Header />
        <ProductDetails />
        <Banner />
        <Banner2 />
        <ProductShowcase />
        <MaterialFeatures />
        <ProductStats />
        <SafetyFeatures />
        <CTABanner />
        <ReviewsComponent />
         <Testimonials />
         <DiaperFAQ />
      </div>
      <Footer />
    </>
  )
}

export default ProductDetail;