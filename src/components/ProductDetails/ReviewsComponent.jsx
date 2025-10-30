import React, { useState } from 'react';
import { ChevronDown, ThumbsUp, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showRatingDropdown, setShowRatingDropdown] = useState(false);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Hannah T.",
      rating: 5,
      date: "August 9, 2025",
      comment: "Ik vind ze geweldig!",
      likes: 0,
      comments: 0
    },
    {
      id: 2,
      name: "Zaal I.",
      rating: 5,
      date: "August 9, 2025",
      comment: "Zeer absorberend, baby slaapt de hele nacht door",
      likes: 0,
      comments: 0
    },
    {
      id: 3,
      name: "Brittany B.",
      rating: 5,
      date: "August 9, 2025",
      comment: "De luiers absorberen super goed, lekken niet en voelen altijd droog aan. Ik ben geobsedeerd.",
      likes: 0,
      comments: 0
    },
    {
      id: 4,
      name: "Jess S.",
      rating: 5,
      date: "August 9, 2025",
      comment: "De beste luiers!! Ik ben zo blij dat ik Coterie voor mijn dochter heb gekozen.",
      likes: 0,
      comments: 0
    },
    {
      id: 5,
      name: "Taylor-Lynne B.",
      rating: 5,
      date: "August 8, 2025",
      comment: "Aansluitend maar niet te strak! Geen zorgen over uitbarstingen. Super schattig en alles wat je baby nodig heeft voor waterpret!",
      likes: 0,
      comments: 0
    }
  ];

  const totalPages = 5;

  const StarRating = ({ rating }) => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-black text-base">★</span>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="p-4">
          {/* Mobile Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-normal mb-3 leading-tight">
              Waarom gezinnen<br />voor Moise kiezen
            </h1>
            <div className="flex items-center gap-2">
              <StarRating rating={5} />
              <span className="text-xs text-gray-700">4.8/5 based on 8332 reviews</span>
            </div>
          </div>

          {/* Mobile Reviews */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6">
                <h3 className="font-medium text-base mb-3">{review.name}</h3>
                
                <StarRating rating={review.rating} />
                <p className="text-xs text-gray-600 mt-2 mb-3">{review.date}</p>
                
                <p className="text-gray-800 text-sm mb-4 leading-relaxed">{review.comment}</p>
                
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <button className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{review.likes}</span>
                  </button>
                  <button className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>{review.comments}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-[1400px] mx-auto px-8 py-12">
          <div className="grid grid-cols-2 gap-16">
            {/* Left Column - Title and Rating */}
            <div>
              <h1 className="text-5xl font-normal mb-4 leading-tight">
                Waarom gezinnen<br />voor Moise kiezen
              </h1>
              <div className="flex items-center gap-2">
                <StarRating rating={5} />
                <span className="text-sm text-gray-700">4.8/5 based on 8332 reviews</span>
              </div>
            </div>

            {/* Right Column - Filters */}
            <div className="flex gap-4 justify-end items-start">
              <div className="relative">
                <button
                  onClick={() => {
                    setShowRatingDropdown(!showRatingDropdown);
                    setShowSizeDropdown(false);
                  }}
                  className="w-[340px] px-6 py-3 border border-gray-300 rounded-md flex items-center justify-between hover:border-gray-400 transition-colors bg-white"
                >
                  <span className="text-gray-700 text-base">Rating</span>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </button>
                {showRatingDropdown && (
                  <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <button className="w-full px-6 py-3 text-base text-left hover:bg-gray-50">All ratings</button>
                    <button className="w-full px-6 py-3 text-base text-left hover:bg-gray-50">5 stars</button>
                    <button className="w-full px-6 py-3 text-base text-left hover:bg-gray-50">4 stars</button>
                    <button className="w-full px-6 py-3 text-base text-left hover:bg-gray-50">3 stars</button>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => {
                    setShowSizeDropdown(!showSizeDropdown);
                    setShowRatingDropdown(false);
                  }}
                  className="w-[340px] px-6 py-3 border border-gray-300 rounded-md flex items-center justify-between hover:border-gray-400 transition-colors bg-white"
                >
                  <span className="text-gray-700 text-base">Size</span>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </button>
                {showSizeDropdown && (
                  <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <button className="w-full px-6 py-3 text-base text-left hover:bg-gray-50">All sizes</button>
                    <button className="w-full px-6 py-3 text-base text-left hover:bg-gray-50">Newborn</button>
                    <button className="w-full px-6 py-3 text-base text-left hover:bg-gray-50">Size 1</button>
                    <button className="w-full px-6 py-3 text-base text-left hover:bg-gray-50">Size 2</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-4  gap-4 justify-end items-end mt-12">
            <div></div>  <div></div>
            {/* Left Column - Reviewer Names */}
            <div className="space-y-8">
              {reviews.map((review, index) => (
                <div key={review.id} className={`${index !== reviews.length - 1 ? 'pb-8 border-b border-gray-200' : ''}`}>
                  <h3 className="font-medium text-base mb-3">{review.name}</h3>
                  <StarRating rating={review.rating} />
                  <p className="text-sm text-gray-600 mt-2">{review.date}</p>
                </div>
              ))}
            </div>

            {/* Right Column - Review Comments */}
            <div className="space-y-8">
              {reviews.map((review, index) => (
                <div key={review.id} className={`${index !== reviews.length - 1 ? 'pb-8 border-b border-gray-200' : ''}`}>
                  <p className="text-gray-800 text-base mb-4 leading-relaxed">{review.comment}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <button className="flex items-center gap-2 hover:text-gray-800 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{review.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-gray-800 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span>{review.comments}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded transition-colors ${
                  currentPage === page
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsComponent;