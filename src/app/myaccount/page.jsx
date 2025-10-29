'use client'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import React from 'react'
import AccountSettings from '@/components/myaccount/AccountSettings'

const MyAccount = () => {
  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
       <Header />
       <AccountSettings />
      </div>
      <Footer />
    </>
  )
}

export default MyAccount;

