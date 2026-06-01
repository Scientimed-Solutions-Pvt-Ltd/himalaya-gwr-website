import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PhotoUploadForm from '../components/PhotoUploadForm';
import ReferencePhotoModal from '../components/ReferencePhotoModal';
import TaglineSection from '../components/TaglineSection';
import Footer from '../components/Footer';

const PhotoCapture = () => {
  const [showReferenceModal, setShowReferenceModal] = useState(true);

  useEffect(() => {
    // Modal opens automatically on page load
    setShowReferenceModal(true);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <ReferencePhotoModal 
        isOpen={showReferenceModal}
        onClose={() => setShowReferenceModal(false)}
      />
      
      <Header />
      
      <main className="flex-1 bg-green-900">
        <HeroSection>
          <PhotoUploadForm />
        </HeroSection>
        
        <TaglineSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default PhotoCapture;
