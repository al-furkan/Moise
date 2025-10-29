import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Email submitted:', email);
      alert('Bedankt voor het aanmelden!');
      setEmail('');
    }
  };

  return (
    <div className="w-full bg-[#f5f1ed] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-normal mb-4 leading-tight">
              Ontvang 10% korting op je eerste bestelling
            </h2>
            
            <p className="text-sm text-gray-800 mb-6 leading-relaxed">
              Word deel van de Moise-familie. Meld je aan en ontvang 10% korting, inspiratie voor de dagelijkse routine en als eerste toegang tot onze nieuwste producten.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Voer e-mailadres in"
                className="w-full px-4 py-3.5 border border-gray-300 rounded-md text-sm placeholder:text-gray-500 focus:outline-none focus:border-gray-400"
              />
              
              <button
                onClick={handleSubmit}
                className="w-full bg-[#A95A21] hover:bg-[#a0643a] text-white font-medium py-3.5 rounded-md transition-colors"
              >
                Word lid van Moise
              </button>
            </div>

            <p className="text-xs text-gray-700 mt-4 leading-relaxed">
              Je ontvangt onze e-mails alleen als je dat wilt. Afmelden kan altijd met één klik.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex items-start justify-between gap-12">
            {/* Left Column - Title and Description */}
            <div className="flex-1 max-w-2xl">
              <h2 className="text-5xl font-normal mb-6 leading-tight">
                Ontvang 10% korting op je eerste bestelling
              </h2>
              
              <p className="text-base text-gray-800 leading-relaxed">
                Word deel van de Moise-familie. Meld je aan en ontvang 10% korting, inspiratie voor de dagelijkse routine en als eerste toegang tot onze nieuwste producten.
              </p>
            </div>

            {/* Right Column - Form */}
            <div className="flex-shrink-0 w-full max-w-md">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Voer e-mailadres in"
                    className="flex-1 px-5 py-3.5 border border-gray-300 rounded-md text-base placeholder:text-gray-500 focus:outline-none focus:border-gray-400"
                  />
                  
                  <button
                    onClick={handleSubmit}
                    className="bg-[#A95A21] hover:bg-[#a0643a] text-white font-medium px-8 py-3.5 rounded-md transition-colors whitespace-nowrap"
                  >
                    Word lid van Moise
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                Je ontvangt onze e-mails alleen als je dat wilt. Afmelden kan altijd met één klik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;