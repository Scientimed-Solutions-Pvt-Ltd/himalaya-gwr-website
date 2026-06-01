import React, { useState, useEffect } from 'react';
import himalayaLogo from '../assets/images/Himalaya-logo.png';
import confettiImg from '../assets/images/confetti.png';
import confettiLgImg from '../assets/images/confetti-lg.png';

const SuccessMessage = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    // Simulate live count updates
    const interval = setInterval(() => {
      setCounts(prev => [
        prev[0],
        prev[1],
        prev[2],
        prev[3]
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#e9f7e3] to-[#8ad295] py-16 px-4 relative overflow-hidden">
      {/* Confetti Image - Mobile */}
      <img
        src={confettiImg}
        alt="Confetti"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none md:hidden"
      />

      {/* Confetti Image - Desktop and Tablet */}
      <img
        src={confettiLgImg}
        alt="Confetti"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none hidden md:block"
      />

      {/* Main Content Container */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#00796B] mt-20 mb-12">
          Live count of photo<br />submissions across India
        </h1>

        {/* Counter Display */}
        <div className="flex gap-4 justify-center mb-16 flex-wrap">
          {counts.map((count, index) => (
            <div
              key={index}
              className="w-20 h-20 md:w-20 md:h-20 bg-[#9ACD32] rounded-lg flex items-center justify-center shadow-lg" style={{ clipPath: 'border-box' }}>
              <div className="w-16 h-16 md:w-16 md:h-16 bg-white border-2 border-[#dedede] rounded-full flex items-center justify-center" style={{ boxShadow: '11px 17px 6px 7px #0000003d' }}>
                <span className="text-3xl md:text-4xl font-bold text-[#00796B]">
                  {count}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Thank You Message */}
        <div className="mb-16">
          <p className="text-xl md:text-3xl text-gray-800 mb-2">
            Thank you
          </p>
          <p className="text-xl md:text-3xl text-gray-800 mb-4">
            for your participation in this
          </p>
          <p className="text-2xl md:text-4xl font-bold text-gray-800">
            public wellness initiative
          </p>
        </div>

        {/* Awareness Initiative */}
        <div className="mb-8">
          <p className="text-lg md:text-2xl text-gray-700 mb-2">
            Awareness initiative by:
          </p>
          <img
            src={himalayaLogo}
            alt="Himalaya Wellness"
            className="h-28 md:h-40 mx-auto"
          />
        </div>
      </div>

    </div>
  );
};

export default SuccessMessage;
