import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import cameraImg from '../assets/images/camera.png';

const PhotoUploadForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const participantData = location.state?.participantData || { name: '' };
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [photo, setPhoto] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);

  const handleTakePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please use "Choose File" instead.');
    }
  };

  const handleCapturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, 640, 480);
      const photoData = canvasRef.current.toDataURL('image/jpeg');
      setPhoto(photoData);
      
      // Stop the video stream
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      setCameraActive(false);
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhoto(event.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRetakePhoto = () => {
    setPhoto(null);
    // If camera is still active, stop it
    if (videoRef.current?.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
    setCameraActive(false);
  };

  const handleBack = () => {
    navigate('/wellness');
  };

  const handleSubmit = () => {
    if (!photo) {
      alert('Please take or upload a photo first.');
      return;
    }
    console.log('Photo submitted with participant:', { photo, participantData });
    // Navigate to success page
    navigate('/success');
  };

  return (
    <div className="bg-[#DCEAB4] rounded-[30px] p-6 md:p-8 w-full max-w-[540px] shadow-xl">
      {/* Form Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#00796B] mb-8">
        Take Photo
      </h2>

      {/* Camera Icon or Photo Preview */}
      <div className="flex justify-center mb-2">
        {!cameraActive && !photo && (
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
            <img
              src={cameraImg}
              alt="Camera icon"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {cameraActive && (
          <div className="w-full">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full rounded-lg bg-black"
            />
            <button
              onClick={handleCapturePhoto}
              className="w-full mt-4 bg-[#F37021] text-white py-2 rounded-lg font-semibold
                hover:bg-[#E85E0F] transition-colors"
            >
              Capture Photo
            </button>
          </div>
        )}

        {photo && !cameraActive && (
          <div className="w-full">
            <img src={photo} alt="Captured" className="w-2/4 ml-[25%] rounded-lg" />
          </div>
        )}
      </div>

      {/* Participant Details - Shows when photo is captured */}
      {photo && !cameraActive && (
        <div className="p-4">
           <p className="text-gray-700 text-lg text-center font-bold">Name</p>
          {/* <p className="text-gray-700 text-lg text-center">{participantData.name}</p> */}
        </div>
      )}

      {/* Hidden Canvas for capturing */}
      <canvas ref={canvasRef} width={640} height={480} className="hidden" />

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Action Buttons */}
      {!cameraActive && !photo && (
        <div className="flex gap-4 mb-6">
          <button
            onClick={handleTakePhoto}
            className="flex-1 bg-[#F37021] text-white py-2 px-4 rounded-lg font-semibold
              hover:bg-[#E85E0F] transition-colors"
          >
            Take a photo
          </button>
          <button
            onClick={handleChooseFile}
            className="flex-1 bg-[#F37021] text-white py-2 px-4 rounded-lg font-semibold
              hover:bg-[#E85E0F] transition-colors"
          >
            Choose File
          </button>
        </div>
      )}

      {/* Instructions */}
      {!photo && !cameraActive && (
        <div className="mb-6 text-gray-800 text-sm">
          <p className="font-semibold mb-2">Photo Guidelines:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Keep face and full placard clearly visible.</li>
            <li>Face camera directly with proper lighting.</li>
            <li>Click a clear, non-blurry photo.</li>
          </ol>
        </div>
      )}

      {/* Retake Photo Link */}
      {photo && (
        <button
          onClick={handleRetakePhoto}
          className="w-full text-center text-[#00796B] font-semibold mb-2
            hover:underline flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Retake photo
        </button>
      )}

      {/* Bottom Buttons */}
      <div className="flex gap-4 pt-6">
        <button
          onClick={handleBack}
          className="flex-1 bg-[#9ACD32] text-white py-3 rounded-lg font-semibold
            hover:bg-[#7DB925] transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="flex-1 bg-[#006D64] text-white py-3 rounded-lg font-semibold
            hover:bg-[#00564C] transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PhotoUploadForm;
