'use client'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import React from 'react'
import Banner from '@/components/home/Banner'
import TrustLogos from '@/components/home/TrustLogos'
import ProductCards from '@/components/home/ProductCards'
import ProductSlider from '@/components/home/ProductSlider'
import QuizSection from '@/components/home/QuizSection'
import StorySection from '@/components/home/StorySection'
import HeroSection1 from '@/components/home/HeroSection1'
import ProductDetail from '@/components/home/ProductDetail'
import CTABanner from '@/components/home/CTABanner'
import ProductDetail1 from '@/components/home/ProductDetail1'
import CTABanner1 from '@/components/home/CTABanner1'
import ShampooSection from '@/components/home/ShampooSection'
import RoutineSection from '@/components/home/RoutineSection'
import Testimonials from '@/components/home/Testimonials'
import ComparisonTable from '@/components/home/ComparisonTable'
import FAQSection from '@/components/home/FAQSection'
import NewsletterSignup from '@/components/home/NewsletterSignup'

const Home = () => {
  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
        <Header />
        <Banner />
        <TrustLogos />
        <ProductCards />
        <ProductSlider/>
        <QuizSection />
        <StorySection />
        <HeroSection1 />
        <ProductDetail />
        <CTABanner />
        <ProductDetail1 />
        <CTABanner1 />
        <ShampooSection />
        <RoutineSection />
        <Testimonials />
        <ComparisonTable />
        <FAQSection />
        <NewsletterSignup />
      </div>
      <Footer />
    </>
  )
}

export default Home;