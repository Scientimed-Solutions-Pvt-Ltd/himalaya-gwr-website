import React from 'react';

const ConsentModal = ({ isOpen, onAgree, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-[30px] p-6 md:p-8 w-full max-w-[540px] shadow-2xl">
        {/* Consent Title */}
        <h2 className="text-center text-3xl font-bold text-[#00796B] mb-6">
          Consent:
        </h2>

        {/* Consent Text */}
        <p className="text-center text-lg md:text-xl leading-relaxed text-gray-800 mb-8">
          This event is independently organized by Himalaya Wellness Company. My participation is voluntary and is solely for the purpose of supporting the stated public wellness initiative.
        </p>

        {/* I Agree Button */}
        <div className="flex justify-center">
          <button
            onClick={onAgree}
            className="bg-[#006D64] text-white px-12 py-3 rounded-[15px] font-semibold
              hover:bg-[#00564C]/90 hover:shadow-lg hover:scale-105
              active:scale-95 transition-all duration-200 cursor-pointer"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentModal;
