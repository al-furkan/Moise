import React from 'react'
import { Star } from 'lucide-react';

const TittleAndRating = () => {
  return (
    <div>{/* Title and Rating */}
<div className="flex flex-col items-center text-center">
  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
    Moise Luier
  </h1>

  <div className="flex items-center gap-2 mb-2">
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-gray-900 text-gray-900"
        />
      ))}
    </div>
    <span className="text-xs lg:text-sm text-gray-600">
      4,8/5 gebaseerd op 8332 beoordelingen
    </span>
  </div>

  <p className="text-sm lg:text-base text-gray-700 mb-2 max-w-md">
    De ultra-dunne luier die comfort en bescherming samenbrengt!
  </p>

  <p className="text-base lg:text-lg font-semibold">
    Vanaf €11.95/maand
  </p>
</div>
</div>
  )
}

export default TittleAndRating;