import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Welke maten hebben de Moise luiers?',
      answer: 'Onze luiers zijn verkrijgbaar van Newborn (NB) tot en met maat 6. Zo is er altijd een maat die perfect aansluit bij de groeifase van jouw baby. Op de verpakking en op onze website vind je een handige maattabel om eenvoudig de juiste maat te kiezen.'
    },
    {
      question: 'Zijn Moise luiers geschikt voor een gevoelige huid?',
      answer: 'Ja, Moise luiers zijn speciaal ontwikkeld voor gevoelige babyhuid. Ze zijn hypoallergeen en vrij van schadelijke chemicaliën.'
    },
    {
      question: 'Zijn de Moise luiers milieuvriendelijk?',
      answer: 'Ja, wij hechten veel waarde aan duurzaamheid. Onze luiers zijn gemaakt van milieuvriendelijke materialen en we streven naar een zo klein mogelijke ecologische voetafdruk.'
    },
    {
      question: 'Voorkomen de Moise luiers doorlekken?',
      answer: 'Absoluut! Onze luiers zijn voorzien van een geavanceerd absorptiesysteem dat tot 12 uur droogte garandeert, zelfs tijdens de nacht.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-12 lg:items-center">
          {/* Left Side - FAQ */}
          <div>           
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base font-normal text-gray-900 pr-8">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-gray-900" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-900" />
                      )}
                    </span>
                  </button>
                  
                  {openIndex === index && (
                    <div className="pb-5 pr-12">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">

          {/* FAQ */}
          <div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-base font-medium text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-gray-900" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-900" />
                      )}
                    </span>
                  </button>
                  
                  {openIndex === index && (
                    <div className="pb-4 pr-8">
                      <p className="text-sm text-gray-700 leading-relaxed">
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
  );
}