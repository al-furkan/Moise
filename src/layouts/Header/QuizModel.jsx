import { X,  Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from "react";


const QuizModal = ({setIsQuizOpen}) => {
const [quizStep, setQuizStep] = useState(1);


// Quiz state
  const [quizData, setQuizData] = useState({
    diaperType: null,
    numChildren: 2,
    childNames: ['', ''],
    childWeights: [{gender: '', weight: ''}, {gender: '', weight: ''}],
    changeFrequency: null,
    recommendations: []
  });

  // Quiz functions
  const resetQuiz = () => {
    setQuizStep(1);
    setQuizData({
      diaperType: null,
      numChildren: 2,
      childNames: ['', ''],
      childWeights: [{gender: '', weight: ''}, {gender: '', weight: ''}],
      changeFrequency: null,
      recommendations: []
    });
  };

   const closeQuiz = () => {
    setIsQuizOpen(false);
    resetQuiz();
  };


   const nextQuizStep = () => {
    if (quizStep < 5) {
      setQuizStep(quizStep + 1);
    }
  };

  const prevQuizStep = () => {
    if (quizStep > 1) {
      setQuizStep(quizStep - 1);
    }
  };

  const updateNumChildren = (delta) => {
    const newNum = Math.max(1, Math.min(5, quizData.numChildren + delta));
    const newNames = Array(newNum).fill('').map((_, i) => quizData.childNames[i] || '');
    const newWeights = Array(newNum).fill(null).map((_, i) => quizData.childWeights[i] || {gender: '', weight: ''});
    
    setQuizData({
      ...quizData,
      numChildren: newNum,
      childNames: newNames,
      childWeights: newWeights
    });
  };

  const updateChildName = (index, name) => {
    const newNames = [...quizData.childNames];
    newNames[index] = name;
    setQuizData({...quizData, childNames: newNames});
  };

  const updateChildWeight = (index, field, value) => {
    const newWeights = [...quizData.childWeights];
    newWeights[index] = {...newWeights[index], [field]: value};
    setQuizData({...quizData, childWeights: newWeights});
  };


    const progress = (quizStep / 4) * 100;

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between rounded-t-2xl z-10">
            <button 
              onClick={prevQuizStep} 
              disabled={quizStep === 1} 
              className="p-2 disabled:opacity-30 hover:bg-gray-100 rounded transition-colors flex items-center gap-2"
            >
              <ChevronLeft size={20} />
              <span className="text-sm">Terug</span>
            </button>
            <button onClick={closeQuiz} className="p-2 hover:bg-gray-100 rounded transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-6 pt-6 pb-2">
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#A95A21] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 pt-4">
            {/* Step 1: Choose Diaper Type */}
            {quizStep === 1 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-light mb-2">Start de Moise Luierquiz</h2>
                  <p className="text-sm text-gray-600">Kies het type luier</p>
                </div>

                <div className=" max-w-100 grid grid-cols-2 gap-4 mx-auto">
                  <button
                    onClick={() => setQuizData({...quizData, diaperType: 'luier'})}
                    className={`p-4 border-2 rounded-xl text-center transition-all ${
                      quizData.diaperType === 'luier' 
                        ? 'border-[#A95A21] bg-white' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="w-auto h-40 bg-gray-100 rounded mb-3 flex items-center justify-center overflow-hidden">
                      <img src="/Products/p5.png" alt="Luier" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-medium text-sm">Moise Luier</p>
                  </button>

                  <button
                    onClick={() => setQuizData({...quizData, diaperType: 'luierbroekje'})}
                    className={`p-4 border-2 rounded-xl text-center transition-all ${
                      quizData.diaperType === 'luierbroekje' 
                        ? 'border-[#A95A21] bg-white' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                      <img src="/Products/p8.png" alt="Luierbroekje" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-medium text-sm">Moise Luierbroekje</p>
                  </button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-gray-600 mb-4">Hoeveel kindjes wil je meenemen in de quiz?</p>
                  <div className="flex items-center justify-center gap-4">
                    <button 
                      onClick={() => updateNumChildren(-1)}
                      className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="text-2xl font-light w-12 text-center">{quizData.numChildren}</span>
                    <button 
                      onClick={() => updateNumChildren(1)}
                      className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-3 text-center">Vertel ons de namen van je kinderen (optioneel)</p>
                  <div className="grid grid-cols-2 gap-3">
                    {Array.from({length: quizData.numChildren}).map((_, idx) => (
                      <input
                        key={idx}
                        type="text"
                        placeholder={`${idx + 1}. Naam`}
                        value={quizData.childNames[idx] || ''}
                        onChange={(e) => updateChildName(idx, e.target.value)}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    ))}
                  </div>
                </div>

                <div className="w-full mx-auto">
                   <button
                  onClick={nextQuizStep}
                  disabled={!quizData.diaperType}
                  className="w-full  md:w-[200px] lg:mx-auto bg-[#A95A21] text-white py-3 rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium transition-colors"
                >
                  VOLGENDE
                   <img src="/icons/icon1.png" alt="" className='w-4 h-3' />
                </button>

                <button 
                  onClick={resetQuiz}
                  className="w-full text-sm text-gray-600 flex items-center justify-center gap-2 hover:text-gray-900 transition-colors py-2"
                >
                   <img src="/icons/icon2.png" alt="" className='w-4 h-3' />
                  Opnieuw beginnen
                </button>
                </div>
              </div>
            )}

            {/* Step 2: Child Weights */}
            {quizStep === 2 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-light mb-2">Wat is het gewicht van elk kindje?</h2>
                  <p className="text-sm text-gray-600">Vul het gewicht van je kindje in (kg)</p>
                </div>

                <div className="space-y-4 max-w-md mx-auto">
                  {Array.from({length: quizData.numChildren}).map((_, idx) => (
                    <div key={idx}>
                      <label className="block text-sm text-gray-600 mb-2">
                        Gewicht van {quizData.childNames[idx] || `Kind ${idx + 1}`}
                      </label>
                      <input
                        type="number"
                        placeholder="Vul in"
                        value={quizData.childWeights[idx]?.weight || ''}
                        onChange={(e) => updateChildWeight(idx, 'weight', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  ))}
                </div>

                <button
                  onClick={nextQuizStep}
                  className="w-full lg:w-[200px] mx-auto bg-[#A95A21] text-white py-3 rounded-lg hover:bg-orange-700 flex items-center justify-center gap-2 font-medium transition-colors"
                >
                  VOLGENDE
                 <img src="/icons/icon1.png" alt="" className='w-4 h-3' />
                </button>

                <button 
                  onClick={resetQuiz}
                  className="w-full text-sm text-gray-600 flex items-center justify-center gap-2 hover:text-gray-900 transition-colors py-2"
                >
                  <img src="/icons/icon2.png" alt="" className='w-4 h-3' />
                  Opnieuw beginnen
                </button>
              </div>
            )}

            {/* Step 3: Change Frequency */}
            {quizStep === 3 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-light mb-2">Hoe vaak verschoon je luiers per dag?</h2>
                  <p className="text-sm text-gray-600">Kies hoe vaak je elk kindje verschoont</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                  <button
                    onClick={() => {
                      setQuizData({...quizData, changeFrequency: '4x'});
                    }}
                    className={`p-6 border-2 rounded-xl text-center transition-all ${
                      quizData.changeFrequency === '4x' 
                        ? 'border-[#A95A21] bg-orange-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <p className="text-lg font-medium mb-1">4 keer per dag</p>
                    <p className="text-xs text-gray-500">Kies hoe vaak je elk kindje verschoont</p>
                  </button>

                  <button
                    onClick={() => {
                      setQuizData({...quizData, changeFrequency: '4x+'});
                    }}
                    className={`p-6 border-2 rounded-xl text-center transition-all ${
                      quizData.changeFrequency === '4x+' 
                        ? 'border-[#A95A21] bg-orange-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <p className="text-lg font-medium mb-1">4 keer per dag</p>
                    <p className="text-xs text-gray-500">Aantal verschoningen voor {quizData.childNames[1] || 'Kind 2'}</p>
                  </button>
                </div>

                <button
                  onClick={nextQuizStep}
                  disabled={!quizData.changeFrequency}
                  className="w-full lg:w-[200px] mx-auto bg-[#A95A21] text-white py-3 rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium transition-colors"
                >
                  VOLGENDE
                 <img src="/icons/icon1.png" alt="" className='w-4 h-3' />
                </button>

                <button 
                  onClick={resetQuiz}
                  className="w-full text-sm text-gray-600 flex items-center justify-center gap-2 hover:text-gray-900 transition-colors py-2"
                >
                   <img src="/icons/icon2.png" alt="" className='w-4 h-3' />
                  Opnieuw beginnen
                </button>
              </div>
            )}

            {/* Step 4: Recommendations */}
            {quizStep === 4 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-light mb-2">Het luierplan dat bij jullie past</h2>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Dit is het maandplan dat we voor je hebben samengesteld, op basis van het gewicht van {quizData.childNames[0] || 'je kinderen'} {quizData.numChildren > 1 && `en ${quizData.childNames[1] || 'je andere kind'}`} en hoe vaak je ze per dag verschoont!
                  </p>
                </div>

                <div className="max-w-150 grid grid-cols-2 gap-4 mx-auto">
                  {/* Child 1 */}
                  <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="mb-3">
                      <p className="font-medium">{quizData.childNames[0] || 'Kind 1'} ({quizData.childWeights[0]?.weight || '3'} kg)</p>
                      <p className="text-xs text-gray-600">Maat 1 · 0-4dagers</p>
                      <p className="text-xs text-gray-600">Aantal 3 · (31 ml/pack) totaly</p>
                    </div>
                    
                    <div className="w-full h-auto bg-gray-50 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                      <img src="/Products/pdc.png" alt="Product" className="w-45 h-45 object-cover" />
                    </div>

                    <p className="font-medium mb-1">Moise Luier</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-[#A95A21]">€10.00</span>
                      <span className="text-sm text-gray-400 line-through">€11.95</span>
                    </div>
                  </div>

                  {/* Child 2 */}
                  {quizData.numChildren > 1 && (
                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <div className="mb-3">
                        <p className="font-medium">{quizData.childNames[1] || 'Kind 2'} ({quizData.childWeights[1]?.weight || '8'} kg)</p>
                        <p className="text-xs text-gray-600">Maat 3 · (9 luiers)</p>
                        <p className="text-xs text-gray-600">Aantal 3 · (31 ml/pack) totaly</p>
                      </div>
                      
                      <div className="w-full h-auto bg-gray-50 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                        <img src="/Products/pdc.png" alt="Product" className="w-45 h-45 object-cover" />
                      </div>

                      <p className="font-medium mb-1">Moise Luier</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-[#A95A21]">€10.00</span>
                        <span className="text-sm text-gray-400 line-through">€11.95</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Add-ons */}
                <div className="border border-gray-200 rounded-xl p-4">
                  <p className="font-medium mb-4">Maak je Baby Pack compleet</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
                        <img src="/Products/p5.png" alt="Wipes" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Maak je Baby Pack compleet</p>
                        <p className="text-sm text-[#A95A21] font-medium">€2.95</p>
                      </div>
                      <button className="px-4 py-2 bg-[#A95A21] text-white text-xs rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap">
                        TOEVOEGEN
                      </button>
                    </div>

                    <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
                        <img src="/Products/p8.png" alt="Lotion" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Moise Body Lotion</p>
                        <p className="text-sm text-[#A95A21] font-medium">€10.95</p>
                      </div>
                      <button className="px-4 py-2 bg-[#A95A21] text-white text-xs rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap">
                        TOEVOEGEN
                      </button>
                    </div>
                  </div> 
                </div>

                {/* Pricing */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{quizData.childNames[0] || 'Kind 1'} – 3 luierverpakkingen per maand</span>
                    <span className="font-medium">€30/month</span>
                  </div>
                  {quizData.numChildren > 1 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">{quizData.childNames[1] || 'Kind 2'} – 3 luierverpakkingen per maand</span>
                      <span className="font-medium">€30/month</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-base pt-2 border-t border-gray-300">
                    <span>Totaal</span>
                    <span className="text-[#A95A21]">€{quizData.numChildren * 30}/maand</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    closeQuiz();
                    alert('Abonnement wordt toegevoegd aan winkelwagen!');
                  }}
                  className="w-full lg:w-[300px] mx-auto bg-[#A95A21] text-white py-3 rounded-lg hover:bg-orange-700 flex items-center justify-center gap-2 font-medium transition-colors"
                >
                  START JE ABONNEMENT
                 <img src="/icons/icon1.png" alt="" className='w-4 h-3' />
                </button>

                <div className="bg-orange-50 border border-orange-200 rounded-full p-3 text-xs text-center text-gray-700">
                  ⚠️ Je kunt je abonnement op elk moment pauzeren of opzeggen.
                </div>

                <button 
                  onClick={resetQuiz}
                  className="w-full text-sm text-gray-600 flex items-center justify-center gap-2 hover:text-gray-900 transition-colors py-2"
                >
                  <img src="/icons/icon2.png" alt="" className='w-4 h-3' />
                  Opnieuw beginnen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

export default QuizModal;