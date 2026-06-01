import React from 'react';
import refImg from '../assets/images/ref-img.png';

const ReferencePhotoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-[30px] p-6 md:p-8 w-full max-w-[400px] shadow-2xl">
        {/* Modal Title */}
        <h2 className="text-center text-3xl font-bold text-[#00796B] mb-6">
          Reference Photo
        </h2>

        {/* Reference Image */}
        <div className="flex justify-center mb-6">
          <img
            src={refImg}
            alt="Reference photo example"
            className="w-auto h-auto border-2 border-[#F37021] rounded-lg object-cover"
          />
        </div>

        {/* Instruction Text */}
        <p className="text-center text-lg text-gray-800 mb-8 font-medium">
          Please click the photo similar to the sample shown above.
        </p>

        {/* Next Button */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-[#006D64] text-white px-12 py-3 rounded-[15px] font-semibold
              hover:bg-[#00564C]/90 hover:shadow-lg hover:scale-105
              active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferencePhotoModal;
