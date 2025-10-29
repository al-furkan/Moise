import { FileText, ShoppingCart, Package, Truck, RotateCcw, User, Shield, Edit } from 'lucide-react';

export default function TermsConditions() {
  const sections = [
    {
      number: 1,
      title: "Algemeen",
      icon: FileText,
      content: "Moise is een online winkel die luiers en babyverzorgingsproducten aanbiedt. Alle inhoud op onze site (zoals afbeeldingen, teksten en productinformatie) is eigendom van Moise en mag niet zonder toestemming worden gekopieerd of hergebruikt."
    },
    {
      number: 2,
      title: "Bestellingen & Betaling",
      icon: ShoppingCart,
      content: "Alle prijzen worden weergegeven in [valuta] en zijn inclusief belastingen, tenzij anders vermeld. We accepteren gangbare creditcards en andere betaalmethoden. Je bestelling is bevestigd zodra de betaling is geslaagd."
    },
    {
      number: 3,
      title: "Abonnementen",
      icon: Package,
      content: "Wanneer je een abonnement afsluit bij Moise, ga je akkoord met terugkerende betalingen op basis van het gekozen plan. Je kunt je abonnement op elk moment pauzeren, overslaan of annuleren via je account. Wijzigingen moeten minstens 48 uur vóór de volgende verzenddatum worden doorgegeven."
    },
    {
      number: 4,
      title: "Verzending",
      icon: Truck,
      content: "We leveren momenteel in [landen/regio's]. De geschatte levertijden worden weergegeven bij het afrekenen. We zijn niet verantwoordelijk voor vertragingen als gevolg van foutieve adressen of onvoorziene problemen bij de bezorgdienst."
    },
    {
      number: 5,
      title: "Retourneren & Terugbetaling",
      icon: RotateCcw,
      content: "Niet tevreden met je bestelling? Neem binnen 14 dagen na ontvangst contact met ons op. Om hygiënische redenen kunnen geopende verpakkingen niet worden geretourneerd. Bij schade of verkeerde maat zorgen we voor een passende oplossing."
    },
    {
      number: 6,
      title: "Gebruikersaccount",
      icon: User,
      content: "Wanneer je een account aanmaakt, ben je zelf verantwoordelijk voor de veiligheid van je inloggegevens. Deel je wachtwoord niet met anderen."
    },
    {
      number: 7,
      title: "Privacy",
      icon: Shield,
      content: "We respecteren jouw privacy. Bekijk ons [Privacybeleid] om te lezen hoe we je gegevens verzamelen, gebruiken en beschermen."
    },
    {
      number: 8,
      title: "Wijzigingen",
      icon: Edit,
      content: "We kunnen deze voorwaarden af en toe aanpassen. Bij een wijziging werken we de datum bovenaan bij. Door onze site te blijven gebruiken, ga je akkoord met de nieuwe voorwaarden."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f1ed] to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Algemene voorwaarden
          </h1>
          <p className="text-gray-600 text-lg">
            Laatst bijgewerkt: Oktober 2024
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.number}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      {section.number}. {section.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Notice */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center border border-gray-200">
          <p className="text-gray-700 text-lg leading-relaxed">
            Heb je vragen over onze algemene voorwaarden?
            <br />
            <a href="#" className="text-gray-900 font-semibold hover:underline">
              Neem contact met ons op
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}