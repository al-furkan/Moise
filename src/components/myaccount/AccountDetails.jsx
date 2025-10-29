import React, { useState } from 'react';

const AccountDetails = ({activeModal,setActiveModal }) => {
 
  const [userDetails, setUserDetails] = useState({
    firstName: 'Carla',
    lastName: 'Bailano',
    email: 'bailano@gmail.com',
    phone: '+31 20 123 4567'
  });

  const [paymentMethods] = useState([
    { id: 1, type: 'card', last4: '3421', brand: 'Visa', expiry: '12/28', isDefault: true }
  ]);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleSave = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      {/* Mobile Layout */}
      <div className="lg:hidden space-y-4">
        {/* Personal Details Card - Mobile */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4 p-2 shadow-sm border-b border-gray-200">
            <h2 className="text-base font-semibold text-gray-900">Persoonlijke gegevens</h2>
            <button
              onClick={() => openModal('details')}
              className="text-base font-semibold text-gray-900 hover:text-gray-700"
            >
              Bewerk
            </button>
          </div>
          <div className="space-y-3">
            <div className='flex'>
              <p className="text-xs text-gray-500 mb-1">Voor- en achternaam :</p>
              <p className="text-sm font-semibold text-gray-900">{userDetails.firstName} {userDetails.lastName}</p>
            </div>
            <div className='flex'>
              <p className="text-xs text-gray-500 mb-1">Telefoonnummer :</p>
              <p className="text-sm font-semibold text-gray-900">{userDetails.phone}</p>
            </div>
          </div>
        </div>

        {/* Account Information Card - Mobile */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
          <div className="mb-4 shadow-sm border-b border-gray-200 py-2">
            <div className="flex items-center justify-between mb-3 ">
              <h2 className="text-base font-semibold text-gray-900">Accountinformatie</h2>
            </div>
            <div className="gap-2 text-sm ">
              <button
                onClick={() => openModal('email')}
                className="text-gray-900 hover:text-gray-700 font-semibold mr-5"
              >
                E-mailadres wijzigen
              </button>
              <button
                onClick={() => openModal('password')}
                className="text-gray-900 hover:text-gray-700 font-semibold"
              >
                Wachtwoord wijzigen
              </button>
            </div>
          </div>
          <div className="space-y-3">
            <div className='flex'>
              <p className="text-xs text-gray-500 mb-1">E-mailadres : </p>
              <p className="text-sm font-semibold text-gray-900">{userDetails.email}</p>
            </div>
            <div className='flex'>
              <p className="text-xs text-gray-500 mb-1">Wachtwoord :</p>
              <p className="text-sm font-semibold text-gray-900">************</p>
            </div>
          </div>
        </div>

        {/* Billing Information Card - Mobile */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 ">
          <div className="flex items-center justify-between mb-4 p-2 shadow-sm border-b border-gray-200">
            <h2 className="text-base font-semibold text-gray-900">My billing info</h2>
            <button
              onClick={() => openModal('payment')}
              className="text-sm text-gray-900 hover:text-gray-700 font-semibold"
            >
              Bewerk
            </button>
          </div>
          <div className="space-y-3">
            <div className='flex'>
              <p className="text-xs text-gray-500 mb-1">Naam kaarthouder</p>
              <p className="text-sm font-semibold text-gray-900">{userDetails.firstName} {userDetails.lastName}</p>
            </div>
            <div className='flex'>
              <p className="text-xs text-gray-500 mb-1">Vervaldatum : </p>
              <p className="text-sm font-semibold text-gray-900">{paymentMethods[0].expiry}</p>
            </div>
            <div className='flex'>
              <p className="text-xs text-gray-500 mb-1">Kaartnummer : </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">VISA</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">**** **** **** {paymentMethods[0].last4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Mijn account</h1>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-6xl">
          {/* Personal Details Card - Desktop */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-5  shadow-sm border-b border-gray-200 p-2">
              <h2 className="text-base font-semibold text-gray-900">Persoonlijke gegevens</h2>
              <button
                onClick={() => openModal('details')}
                className="text-sm text-gray-900 hover:text-gray-700 font-semibold"
              >
                Bewerk
              </button>
            </div>
            <div className="space-y-4">
              <div className='flex'>
                <p className="text-sm text-gray-500 mb-1.5">Voor- en achternaam :</p>
                <p className="text-base font-semibold text-gray-900">{userDetails.firstName} {userDetails.lastName}</p>
              </div>
              <div className='flex'>
                <p className="text-sm text-gray-500 mb-1.5">Telefoonnummer :</p>
                <p className="text-base font-semibold text-gray-900">{userDetails.phone}</p>
              </div>
            </div>
          </div>

          {/* Account Information Card - Desktop */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between mb-5 shadow-sm border-b border-gray-200 p-2">
              <h2 className="text-base font-semibold text-gray-900">Accountinformatie</h2>
              <div className="flex items-end gap-2">
                <button
                  onClick={() => openModal('email')}
                  className="text-sm text-gray-900 hover:text-gray-700 font-semibold whitespace-nowrap"
                >
                  E-mailadres wijzigen
                </button>
                <button
                  onClick={() => openModal('password')}
                  className="text-sm text-gray-900 hover:text-gray-700 font-semibold whitespace-nowrap"
                >
                  Wachtwoord wijzigen
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className='flex'>
                <p className="text-sm text-gray-500 mb-1.5">E-mailadres :</p>
                <p className="text-base font-semibold text-gray-900">{userDetails.email}</p>
              </div>
              <div className='flex'>
                <p className="text-sm text-gray-500 mb-1.5">Wachtwoord :</p>
                <p className="text-base font-semibold text-gray-900">************</p>
              </div>
            </div>
          </div>

          {/* Billing Information Card - Desktop */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-5 shadow-sm border-b border-gray-200 p-2">
              <h2 className="text-base font-semibold text-gray-900">My billing info</h2>
              <button
                onClick={() => openModal('payment')}
                className="text-sm text-gray-900 hover:text-gray-700 font-semibold"
              >
                Bewerk
              </button>
            </div>
            <div className="space-y-4">
              <div className='flex'>
                <p className="text-sm text-gray-500 mb-1.5">Naam kaarthouder</p>
                <p className="text-base font-semibold text-gray-900">{userDetails.firstName} {userDetails.lastName}</p>
              </div>
              <div className='flex'>
                <p className="text-sm text-gray-500 mb-1.5">Vervaldatum</p>
                <p className="text-base font-semibold text-gray-900">{paymentMethods[0].expiry}</p>
              </div>
              <div className='flex'>
                <p className="text-sm text-gray-500 mb-1.5">Kaartnummer</p>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-[9px] font-bold">VISA</span>
                  </div>
                  <p className="text-base font-semibold text-gray-900">**** **** **** {paymentMethods[0].last4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;