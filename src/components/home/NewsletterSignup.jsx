import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      console.log('Email submitted:', email);
      alert('Bedankt voor je aanmelding!');
      setEmail('');
    }
  };

  return (
    <div className="w-full bg-[#f5f1ed] py-12 px-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex md:items-start md:justify-between md:gap-8">
          {/* Left Side - Text Content */}
          <div className="flex-1 max-w-3xl">
            <h2 className="text-[32px] lg:text-[40px] font-serif mb-4 text-gray-900">
              Ontvang 10% korting op je eerste bestelling
            </h2>
            <p className="text-base text-gray-800 leading-relaxed">
              Word deel van de Moise-familie. Meld je aan en ontvang 10% korting, inspiratie voor de dagelijkse routine en als eerste toegang tot onze nieuwste producten.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="flex-shrink-0 w-full max-w-md">
            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Voer e-mailadres in"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
              />
              <button
                onClick={handleSubmit}
                className="w-full py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
              >
                Word lid van Moise
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-700">
              Je ontvangt onze e-mails alleen als je dat wilt. Afmelden kan altijd met één klik.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <h2 className="text-[32px] font-serif mb-4 text-gray-900">
            Ontvang 10% korting op je eerste bestelling
          </h2>
          <p className="text-sm text-gray-800 leading-relaxed mb-6">
            Word deel van de Moise-familie. Meld je aan en ontvang 10% korting, inspiratie voor de dagelijkse routine en als eerste toegang tot onze nieuwste producten.
          </p>

          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Voer e-mailadres in"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
            />
            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
            >
              Word lid van Moise
            </button>
          </div>
          <p className="mt-3 text-xs text-gray-700">
            Je ontvangt onze e-mails alleen als je dat wilt. Afmelden kan altijd met één klik.
          </p>
        </div>
      </div>
    </div>
  );
}