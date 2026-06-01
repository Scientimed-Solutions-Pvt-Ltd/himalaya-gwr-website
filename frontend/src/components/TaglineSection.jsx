import React from 'react';

const TaglineSection = () => {
  return (
    <div className="py-8 md:py-12 flex flex-col items-center">
      {/* Tagline Pill */}
      <div className="border-2 border-[#ffffff] rounded-full px-6 md:px-10 py-2 md:py-2 mb-2">
        <p className="text-[#ffffff] text-base md:text-lg font-medium tracking-wide">
          To plant a tree is to nurture wellness
        </p>
      </div>

      {/* Brand Name with Lines */}
      <div className="flex items-center gap-4 w-full max-w-md px-4">
        <div className="flex-1 h-0.5 bg-[#ffffff]"></div>
        <h3 className="text-[#ffffff] font-bold text-lg md:text-lg whitespace-nowrap">
          Himalaya Wellness
        </h3>
        <div className="flex-1 h-0.5 bg-[#ffffff]"></div>
      </div>
    </div>
  );
};

export default TaglineSection;
