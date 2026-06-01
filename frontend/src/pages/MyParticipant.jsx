import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MyParticipantList from '../components/MyParticipantList';
import TaglineSection from '../components/TaglineSection';
import Footer from '../components/Footer';

const MyParticipant = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-green-900">
        <section className="relative min-h-screen ">
          {/* Custom Hero Section with MyParticipantList */}
          <HeroSection>
            <div className="w-full max-w-[540px]">
              <MyParticipantList />
            </div>
          </HeroSection>
        </section>
        
        <TaglineSection />
      </main>
      
      <Footer />
      
      {/* Disclaimer */}
      <div className="bg-gray-100 px-4 py-6 text-center border-t border-gray-300">
        <p className="text-gray-700 text-sm max-w-6xl mx-auto leading-relaxed">
          <span className="font-semibold">Disclaimer:</span> This event is independently organized by Himalaya Wellness Company. Participation is voluntary and is solely for the purpose of supporting the stated public wellness initiative.
        </p>
      </div>
    </div>
  );
};

export default MyParticipant;
