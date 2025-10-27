import React from 'react';

export default function ComparisonTable() {
  const brands = [
    { name: 'MOISE', logo: 'icons/logo1.png', highlight: true },
    { name: 'Huggies',  logo: 'icons/logo2.png' },
    { name: 'Pampers',  logo: 'icons/logo3.png' },
    { name: 'Kruidvat',  logo: 'icons/logo4.png' },
    { name: 'Etos',  logo: 'icons/logo5.png' }
  ];

  const features = [
    {
      title: 'Hypoallergeen',
      values: ['✓', '✓', '✓', '✓', '✓']
    },
    {
      title: 'Langere droogbescherming (tot 12 uur)',
      values: ['Ultra zacht', 'Standaard', 'Standaard', 'Extra zacht', 'Zacht']
    },
    {
      title: 'Abonnementsservice zonder verplichtingen',
      values: ['✓', '✗', '✗', '?Beperkt', '?Beperkt']
    },
    {
      title: 'Zachte cotton-touch top laag',
      values: ['✓', '?Beperkt', '?Beperkt', '✗', '✗']
    },
    {
      title: 'Betaalbare premium kwaliteit',
      values: ['✓', '◐Gedeeltelijk', '◐Gedeeltelijk', '✓', '✓']
    },
    {
      title: 'One-pull technologie bij doekjes',
      values: ['✓', '✗', '✗', '✗', '✗']
    }
  ];

  const renderIcon = (value) => {
    if (value === '✓') {
      return (
        <div className="flex justify-center">
          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      );
    } else if (value === '✗') {
      return (
        <div className="flex justify-center">
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      );
    } else if (value.includes('Beperkt')) {
      return (
        <div className="flex justify-center items-center gap-1 text-sm text-yellow-600">
          <div className="w-4 h-4 rounded-full border-2 border-yellow-600 flex items-center justify-center">
            <span className="text-xs">?</span>
          </div>
          <span>Beperkt</span>
        </div>
      );
    } else if (value.includes('Gedeeltelijk')) {
      return (
        <div className="flex justify-center items-center gap-1 text-sm text-gray-600">
          <div className="w-4 h-4 flex items-center justify-center">
           <img src="/icons/gedeeltelijk.png" alt="Gedeeltelijk" className='w-5 h-5' />
          </div>
          <span>Gedeeltelijk</span>
        </div>
      );
    }
    return <div className="text-center text-sm text-gray-700">{value}</div>;
  };

  return (
    <div className="w-full min-h-auto bg-white py-8 px-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-[48px] font-serif mb-2">De zekerheid van Moise</h1>
          <p className="text-base md:text-2xl text-gray-600">Zo ervaren gezinnen de zachtheid van Moise</p>
        </div>

        {/* Desktop Table - Hidden on mobile */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-6 px-6 text-left w-1/4"></th>
                {brands.map((brand, idx) => (
                  <th key={idx} className={`py-6 px-4 text-center ${brand.highlight ? 'bg-white' : ''}`}>
                    <div className={`flex justify-center items-center ${brand.highlight ? 'font-serif text-2xl text-amber-900' : ''}`}>
                      <img src={brand.logo} alt={brand.name}/>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-5 px-6 text-sm font-medium text-gray-900 border-t border-gray-200">
                    {feature.title}
                  </td>
                  {feature.values.map((value, vidx) => (
                    <td key={vidx} className={`py-5 px-4 border-t border-gray-200 ${vidx === 0 ? 'bg-amber-50/30' : ''}`}>
                      {renderIcon(value)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Horizontal Scroll Table */}
        <div className="md:hidden overflow-x-auto">
          <div className="inline-block min-w-full">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 bg-gray-50 py-4 px-4 text-left text-sm font-medium text-gray-900 border-b border-r border-gray-200 min-w-[180px]">
                    {/* Empty corner cell */}
                  </th>
                  {brands.map((brand, idx) => (
                    <th key={idx} className={`py-4 px-6 text-center border-b border-gray-200 min-w-[140px] ${brand.highlight ? 'bg-amber-50' : 'bg-gray-50'}`}>
                      <div className={`flex justify-center items-center ${brand.highlight ? 'font-serif text-lg text-amber-900' : ''}`}>
                         <img src={brand.logo} alt={brand.name}/>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="sticky left-0 z-10 py-4 px-4 text-xs font-medium text-gray-900 border-b border-r border-gray-200 bg-inherit">
                      {feature.title}
                    </td>
                    {feature.values.map((value, vidx) => (
                      <td key={vidx} className={`py-4 px-6 border-b border-gray-200 ${vidx === 0 ? 'bg-amber-50/30' : ''}`}>
                        {renderIcon(value)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}