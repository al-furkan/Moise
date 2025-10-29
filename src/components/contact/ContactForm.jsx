import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isChecked, setIsChecked] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ code: 'NL', flag: '🇳🇱', dialCode: '+31' });

  const countries = [
    { code: 'NL', flag: '🇳🇱', dialCode: '+31', name: 'Netherlands' },
    { code: 'BE', flag: '🇧🇪', dialCode: '+32', name: 'Belgium' },
    { code: 'DE', flag: '🇩🇪', dialCode: '+49', name: 'Germany' },
    { code: 'FR', flag: '🇫🇷', dialCode: '+33', name: 'France' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData, 'Newsletter:', isChecked);
    alert('Bedankt voor je bericht!');
  };

  return (
    <div className="w-full min-h-auto bg-white py-8 px-4 lg:py-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Title */}
        <h1 className="text-3xl lg:text-5xl font-normal text-center mb-8 lg:mb-12">
          Wij staan voor je klaar
        </h1>

        {/* Mobile Layout */}
        <div className="block lg:hidden max-w-md mx-auto">
          <div className="space-y-6">
            {/* First Name */}
            <div>
              <label className="block text-sm text-gray-800 mb-2">Voornaam</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Voornaam"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm text-gray-800 mb-2">Achternaam</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Achternaam"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-800 mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@moise.nl"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-800 mb-2">Telefoonnummer</label>
              <div className="flex gap-2">
                <div className="relative">
                  <button
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    className="flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                  >
                    <span className="text-xl"><img src="/icons/NL.png" alt="NL"  className='w-5 h-5'/></span>
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </button>
                  
                  {showCountryDropdown && (
                    <div className="absolute top-full mt-2 left-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 min-w-[200px]">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => {
                            setSelectedCountry(country);
                            setShowCountryDropdown(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left"
                        >
                          <span className="text-xl">{country.flag}</span>
                          <span className="text-sm">{country.name}</span>
                          <span className="text-sm text-gray-600 ml-auto">{country.dialCode}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={selectedCountry.dialCode}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-800 mb-2">Bericht</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Bericht"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:outline-none focus:border-gray-400 resize-none"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <button
                onClick={() => setIsChecked(!isChecked)}
                className={`flex-shrink-0 w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                  isChecked ? 'bg-[#b57647] border-[#b57647]' : 'border-gray-400'
                }`}
              >
                {isChecked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
              </button>
              <label className="text-sm text-gray-800 leading-relaxed cursor-pointer" onClick={() => setIsChecked(!isChecked)}>
                Ik ontvang graag updates en exclusieve voordelen van Moise
              </label>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#b57647] hover:bg-[#a0643a] text-white font-medium py-3.5 rounded-lg transition-colors"
            >
              NEEM CONTACT OP
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="max-w-3xl mx-auto border border-gray-300 rounded-2xl p-10">
            <div className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-800 mb-2">Voornaam</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Voornaam"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-800 mb-2">Achternaam</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Achternaam"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-800 mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@moise.nl"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-800 mb-2">Telefoonnummer</label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <button
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className="flex items-center gap-2 px-3 py-3.5 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                      >
                        <span className="text-xl"><img src="/icons/NL.png" alt="NL"  className='w-5 h-5'/></span>
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      </button>
                      
                      {showCountryDropdown && (
                        <div className="absolute top-full mt-2 left-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 min-w-[200px]">
                          {countries.map((country) => (
                            <button
                              key={country.code}
                              onClick={() => {
                                setSelectedCountry(country);
                                setShowCountryDropdown(false);
                              }}
                              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left"
                            >
                              <span className="text-xl">{country.flag}</span>
                              <span className="text-sm">{country.name}</span>
                              <span className="text-sm text-gray-600 ml-auto">{country.dialCode}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={selectedCountry.dialCode}
                      className="flex-1 px-4 py-3.5 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-800 mb-2">Bericht</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Bericht"
                  rows="6"
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-base placeholder:text-gray-400 focus:outline-none focus:border-gray-400 resize-none"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <button
                  onClick={() => setIsChecked(!isChecked)}
                  className={`flex-shrink-0 w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                    isChecked ? 'bg-[#b57647] border-[#b57647]' : 'border-gray-400'
                  }`}
                >
                  {isChecked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                </button>
                <label className="text-sm text-gray-800 leading-relaxed cursor-pointer" onClick={() => setIsChecked(!isChecked)}>
                  Ik ontvang graag updates en exclusieve voordelen van Moise
                </label>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#b57647] hover:bg-[#a0643a] text-white font-medium py-3.5 rounded-lg transition-colors"
              >
                NEEM CONTACT OP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;