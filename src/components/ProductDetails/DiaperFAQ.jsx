import { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function DiaperFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Maakt de Moise luier echt het verschil?",
      answer: `Doen onze luiers uw afwas en belastingaangifte? Waarschijnlijk niet. Een echt goede ervaring met babyluiers kan echter op een paar belangrijke manieren de overgang naar het nieuwe ouderschap verzachten.

Minimale lekkages en uitbarstingen zorgen ervoor dat u niet drie keer midden in de nacht wakker wordt om luiers, kleren en wieglakens te verschonen. Materialen van kledingkwaliteit, dermatologisch getest en schone luieringrediënten kunnen uw baby comfort en u een waardevolle gemoedstrust bieden.

En u mag het gemak van een luierabonnement niet onderschatten (vooral omdat sommige baby's een half dozijn luiers per dag nodig hebben). Ons luierabonnement betekent dat de luiers automatisch bij u thuis worden bezorgd volgens een schema dat voor u werkt - geen gehaast meer om 22.00 uur naar de winkel om u halverwege het verschonen te realiseren dat u eigenlijk geen luiers meer hebt.`
    },
    {
      question: "Wat veroorzaakt luieruitslag en hoe kan ik dit voorkomen?",
      answer: "Luieruitslag wordt meestal veroorzaakt door langdurig contact met vocht, wrijving of irritatie. Voorkom dit door regelmatig luiers te verschonen, de huid schoon en droog te houden, en een beschermende crème te gebruiken."
    },
    {
      question: "Wie bepaalt welke ingrediënten veilig zijn in luiers?",
      answer: "De veiligheid van luieringrediënten wordt bepaald door regelgevende instanties en onafhankelijke testorganisaties. Wij zorgen ervoor dat alle materialen dermatologisch getest zijn en voldoen aan de hoogste veiligheidsnormen."
    },
    {
      question: "Hoe kies ik de juiste luiermaat voor mijn baby?",
      answer: "De juiste luiermaat hangt af van het gewicht van uw baby. Controleer onze maattabel en let op tekenen zoals rode afdrukken of frequente lekkages, die kunnen aangeven dat een andere maat nodig is."
    },
    {
      question: "Hoe maak ik het verschonen prettiger voor mijn baby?",
      answer: "Maak verschonen aangenaam door rustig te praten, speeltjes te gebruiken voor afleiding, en zorg dat alle benodigdheden binnen handbereik zijn. Een warme kamer en zachte aanraking helpen ook."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-auto bg-[#F0EBE8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title */}
          <div className="lg:sticky lg:top-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-gray-900">
              Veelgestelde vragen over luiers
            </h1>
          </div>

          {/* Right side - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className=" shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-start justify-between text-left focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-lg"
                >
                  <span className="text-lg font-medium text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 ml-2">
                    {openIndex === index ? (
                      <X className="w-6 h-6 text-gray-900" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-900" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}