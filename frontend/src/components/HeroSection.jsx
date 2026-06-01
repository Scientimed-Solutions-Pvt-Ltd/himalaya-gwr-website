import React from 'react';
import heroBgDesktop from '../assets/images/hero-bg.png';
import heroBgMobile from '../assets/images/hero-bg-sm.png';

const HeroSection = ({ children }) => {
  return (
    <section className="relative min-h-screen pt-[20px] md:pt-[30px]">
      {/* Background Image for Mobile */}
      <div 
        className="absolute inset-0 bg-contain bg-top-right bg-no-repeat block md:hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 91, 35, 0), rgba(15, 91, 35, 0)), url(${heroBgMobile})`
        }}
      />
      
      {/* Background Image for Tablet and Desktop */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 91, 35, 0), rgba(15, 91, 35, 0.85)), url(${heroBgDesktop})`
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Hero Text */}
          <div className="lg:w-1/2 text-center lg:text-left pt-4 lg:pt-8">
            <h1 
              className="text-2xl md:text-3xl lg:text-4xl leading-tight text-center lg:text-right"
              style={{ textShadow: 'rgb(0 0 0 / 92%) 2px 2px 8px' }}
            >
              <span className="text-white text-3xl md:text-4xl lg:text-5xl">United For</span>
              <br />
              <span className="text-[#F37021] text-5xl md:text-6xl lg:text-7xl  font-bold ">Wellness</span>
              <br />
              <span className="text-white text-3xl md:text-4xl lg:text-5xl">United For A</span>
              <br />
              <span className="text-white text-5xl md:text-6xl lg:text-7xl  font-bold ">Greener </span>
              <span className="text-[#F37021] text-3xl md:text-4xl lg:text-5xl font-bold">Tomorrow</span>
            </h1>
          </div>
          
          {/* Registration Form Area */}
          <div className="lg:w-1/2 w-full flex justify-center">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
