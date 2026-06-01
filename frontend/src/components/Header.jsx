import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import himalayaLogo from '../assets/images/Himalaya-logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Add New Participant', path: '/wellness' },
    { label: 'My Participant', path: '/myparticipant' },
    { label: 'Logout', path: '/' },
  ];

  return (
    <>
      <header className="bg-white shadow-sm relative top-0 left-0 right-0 z-9">
        <div className="h-[70px] md:h-[90px] flex items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={himalayaLogo} 
              alt="Himalaya Wellness" 
              className="h-18 md:h-20"
            />
          </div>

          {/* Hamburger Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 cursor-pointer z-[60] relative"
            aria-label="Toggle menu"
          >
            <span className={`w-7 h-0.5 bg-[#F37021] rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-7 h-0.5 bg-[#F37021] rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-7 h-0.5 bg-[#F37021] rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Side Menu */}
      <nav 
        className={`fixed top-0 right-0 h-full w-[280px] md:w-[320px] bg-white shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Menu Header */}
        <div className="h-[70px] md:h-[90px] flex items-center justify-between px-6 border-b border-gray-100">
          <span className="text-[#0F5B23] font-bold text-lg">Menu</span>
          <button 
            onClick={() => setMenuOpen(false)}
            className="p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-[#F37021]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className="py-6">
          {menuItems.map((item, index) => (
            <button 
              key={index}
              onClick={() => {
                navigate(item.path);
                setMenuOpen(false);
              }}
              className="w-full flex items-center px-6 py-4 text-[#0F5B23] hover:bg-[#DCEAB4]/50 hover:text-[#F37021] transition-all duration-200 border-b border-gray-50 group text-left"
            >
              <span className="w-2 h-2 bg-[#00796B] rounded-full mr-4 group-hover:bg-[#F37021] transition-colors"></span>
              <span className="font-medium text-lg">{item.label}</span>
            </button>
          ))}
        </div>

      
       
      </nav>
    </>
  );
};

export default Header;
