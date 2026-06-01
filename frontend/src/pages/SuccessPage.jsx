import React from 'react';
import Header from '../components/Header';
import SuccessMessage from '../components/SuccessMessage';
import Footer from '../components/Footer';

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <SuccessMessage />
      </main>
      
      <Footer />
    </div>
  );
};

export default SuccessPage;
