import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ParticipantRegistrationForm from '../components/ParticipantRegistrationForm';
import TaglineSection from '../components/TaglineSection';
import Footer from '../components/Footer';

const WellnessRegistration = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-green-900">
        <HeroSection>
          <ParticipantRegistrationForm />
        </HeroSection>
        
        <TaglineSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default WellnessRegistration;
