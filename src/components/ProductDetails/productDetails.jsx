import React, { useState } from 'react';
import LeftSide from './LeftSide';
import TittleAndRating from './TittleAndRating';
import SizeSelection from './SizeSelection';
import QuantityCalculator from './QuantityCalculator';
import QuantitySelector from './QuantitySelector';
import PlanSelection from './PlanSelection';
import CartButton from './CartButton';
import RecommendationsSection from './RecommendationsSection';
import { Plus } from 'lucide-react';
import FeaturesGrid from './FeaturesGrid';
import Faq from './Faq';

export default function ProductDetails() {
 
  const recommendations = [
    { id: 1, name: 'Luierspray', price: '€14,95', image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=200' },
    { id: 2, name: 'Moise Luierdoekjes', subtitle: '54 doekjes', price: '€8,95', image: 'https://images.unsplash.com/photo-1584627388756-eb6f8799f245?w=200' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Left Side - Product Images */}
             <LeftSide  />
         
          {/* Right Side - Product Info */}
          <div className="space-y-5 lg:space-y-6">
            {/* Title and Rating */}
             <TittleAndRating />
            

            {/* Size Selection */}
             <SizeSelection />

            {/* Quantity Calculator */}
             <QuantityCalculator />

            {/* Quantity Selector */}
             <QuantitySelector />   

            {/* Plan Selection */}
             <PlanSelection />

            {/* Add to Cart Button */}
             <CartButton />

            {/* Recommendations Section */}
              <RecommendationsSection />
            

            {/* Features Grid */}  
             <FeaturesGrid />

             {/* Accordion Section */}
             <Faq />

          </div>
        </div>
      </div>
    </div>
  );
}