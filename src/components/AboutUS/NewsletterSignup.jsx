import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="relative min-h-auto flex items-center justify-center overflow-hidden mt-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 z-10"></div>
        <img
          src="/about/bgn.png"
          alt="Baby feet"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-2xl mx-auto px-6 py-20 text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
          Sluit je aan bij Moise
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/90 mb-12 leading-relaxed max-w-xl mx-auto">
          Voor ouders die kiezen voor veilige, slimme en bewuste oplossingen.
        </p>

        {/* Form */}
        {!isSubmitted ? (
          <div className="space-y-4 max-w-md mx-auto">
            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Voer e-mailadres in"
                className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 text-lg"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading || !email}
              className="w-full bg-white text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                  <span>Bezig met inschrijven...</span>
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  <span>INSCHRIJVEN</span>
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-medium text-white mb-2">Bedankt voor je inschrijving!</h3>
            <p className="text-white/80">Je ontvangt binnenkort onze nieuwsbrief.</p>
          </div>
        )}

        {/* Footer Text */}
        <p className="text-sm text-white/70 mt-8 leading-relaxed max-w-lg mx-auto">
          Door je in te schrijven ontvang je updates van Moise.
          <br />
          Afmelden kan op elk moment.
        </p>
      </div>
    </section>
  );
}