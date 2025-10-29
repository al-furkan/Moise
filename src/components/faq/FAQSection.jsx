import React, { useState } from 'react';
import { Plus, Minus, X } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  
  const truncateCategory = (category) => {
    const words = category.split(' ');
    if (words.length > 2) {
      return words.slice(0, 2).join(' ') + '...';
    }
    return category;
  };
  const [selectedCategory, setSelectedCategory] = useState('Over Onze Producten');

  const categories = [
    'Over Onze Producten',
    'Abonnement & Flexibiliteit',
    'Verzending & Bezorging',
    'Betalen & Retourneren'
  ];

  const faqData = {
    'Over Onze Producten': [
      {
        question: 'Welke maten zijn beschikbaar voor Moise luiers?',
        answer: 'Onze luiers zijn verkrijgbaar van maat Newborn (NB) tot maat 6. Kies de juiste maat op basis van het gewicht van je baby. De maattabel staat op de verpakking en op onze website.'
      },
      {
        question: 'Zijn Moise luiers geschikt voor de gevoelige huid van mijn baby?',
        answer: 'Ja, Moise luiers zijn speciaal ontwikkeld voor gevoelige babyhuid. Ze zijn hypoallergeen en dermatologisch getest.'
      },
      {
        question: 'Hoe helpen Moise luiers doorlekken te voorkomen?',
        answer: 'Onze luiers hebben een geavanceerd absorptiesysteem en elastische manchetten die doorlekken effectief voorkomen.'
      },
      {
        question: 'Hoe duurzaam en milieuvriendelijk zijn Moise luiers?',
        answer: 'Moise luiers zijn gemaakt met duurzame materialen en we streven naar minimale impact op het milieu in ons productieproces.'
      }
    ],
    'Abonnement & Flexibiliteit': [
      {
        question: 'Hoe werkt het abonnement?',
        answer: 'Met ons flexibel abonnement ontvang je regelmatig luiers thuis. Je kunt de frequentie en hoeveelheid naar wens aanpassen.'
      }
    ],
    'Verzending & Bezorging': [
      {
        question: 'Wat zijn de verzendkosten?',
        answer: 'Verzending is gratis bij bestellingen boven €25. Daaronder rekenen we €3,95 verzendkosten.'
      }
    ],
    'Betalen & Retourneren': [
      {
        question: 'Welke betaalmethoden accepteren jullie?',
        answer: 'We accepteren iDEAL, creditcard, PayPal en andere gangbare betaalmethoden.'
      }
    ]
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Mobile View */}
        <div className="md:hidden">
          <h2 className="text-3xl font-normal mb-6">
            Veelgestelde Vragen
          </h2>

          {/* Category Tabs - Horizontal Scroll */}
          <div className="overflow-x-auto -mx-4 px-4 mb-6 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedCategory(category);
                    setOpenIndex(-1);
                  }}
                  className={`pb-3 whitespace-nowrap text-sm transition-colors relative ${
                    selectedCategory === category
                      ? 'text-gray-900 font-normal'
                      : 'text-gray-500 font-normal'
                  }`}
                >
                  {category}
                  {selectedCategory === category && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
                  )}
                </button>
              ))}
            </div>
            <div className="border-b border-gray-300 -mt-3" />
          </div>

          {/* FAQ Items */}
          <div className="space-y-0">
            {faqData[selectedCategory].map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 flex items-start justify-between text-left gap-4"
                >
                  <span className="text-base font-normal leading-snug flex-1">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus size={24} className="flex-shrink-0 mt-0.5" />
                  ) : (
                    <Plus size={24} className="flex-shrink-0 mt-0.5" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="pb-6 pr-8 animate-fadeIn">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <h2 className="text-4xl lg:text-5xl font-normal text-center mb-12">
            Veelgestelde Vragen
          </h2>

          <div className="grid grid-cols-12 gap-8">
            {/* Left Sidebar - Categories */}
            <div className="col-span-3 space-y-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedCategory(category);
                    setOpenIndex(0);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-gray-100 font-medium'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-base">{category}</span>
                </button>
              ))}
            </div>

            {/* Right Content - FAQ Items */}
            <div className="col-span-9">
              <div className="space-y-4">
                {faqData[selectedCategory].map((faq, index) => (
                  <div key={index} className="border-b border-gray-300">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full py-5 flex items-start justify-between text-left gap-6 group"
                    >
                      <span className="text-lg font-normal leading-snug flex-1">
                        {faq.question}
                      </span>
                      {openIndex === index ? (
                        <Minus size={24} className="flex-shrink-0 mt-0.5 transition-transform" />
                      ) : (
                        <Plus size={24} className="flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                      )}
                    </button>
                    {openIndex === index && (
                      <div className="pb-6 pr-12 animate-fadeIn">
                        <p className="text-base text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}