import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConsentModal from './ConsentModal';

const ParticipantRegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    city: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showConsentModal, setShowConsentModal] = useState(false);

  const titles = ['Dr', 'Mr', 'Mrs', 'Ms'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing/selecting
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    validateField(name, formData[name]);
  };

  const validateField = (name, value) => {
    if (!value || !value.trim()) {
      setErrors(prev => ({
        ...prev,
        [name]: 'This field is required'
      }));
      return false;
    }
    return true;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      if (!formData[key] || !formData[key].trim()) {
        newErrors[key] = 'This field is required';
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (validateForm()) {
      // Show consent modal instead of submitting
      setShowConsentModal(true);
    }
  };

  const handleAgree = () => {
    console.log('Form submitted with consent:', formData);
    setShowConsentModal(false);
    // Navigate to photo capture page with participant data
    navigate('/photo', { state: { participantData: formData } });
  };

  return (
    <>
      <ConsentModal 
        isOpen={showConsentModal} 
        onAgree={handleAgree}
        onClose={() => setShowConsentModal(false)}
      />
      <div className="bg-[#DCEAB4] rounded-[30px] p-6 md:p-8 w-full max-w-[540px] shadow-xl">
      {/* Form Title */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#00796B] mb-8">
        Enter the participant's<br />details below.
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Dropdown */}
        <div>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 rounded-lg bg-white border-2 transition-colors
              text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00796B]/50
              ${errors.title && touched.title 
                ? 'border-red-400 focus:border-red-400' 
                : 'border-transparent focus:border-[#00796B]'
              }`}
          >
            <option value="">Select Title:</option>
            {titles.map(title => (
              <option key={title} value={title}>{title}</option>
            ))}
          </select>
          {errors.title && touched.title && (
            <p className="text-red-500 text-sm mt-1 ml-2">{errors.title}</p>
          )}
        </div>

        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name:"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 rounded-lg bg-white border-2 transition-colors
              placeholder:text-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00796B]/50
              ${errors.name && touched.name 
                ? 'border-red-400 focus:border-red-400' 
                : 'border-transparent focus:border-[#00796B]'
              }`}
          />
          {errors.name && touched.name && (
            <p className="text-red-500 text-sm mt-1 ml-2">{errors.name}</p>
          )}
        </div>

        {/* City Input */}
        <div>
          <input
            type="text"
            name="city"
            placeholder="City:"
            value={formData.city}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 rounded-lg bg-white border-2 transition-colors
              placeholder:text-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00796B]/50
              ${errors.city && touched.city 
                ? 'border-red-400 focus:border-red-400' 
                : 'border-transparent focus:border-[#00796B]'
              }`}
          />
          {errors.city && touched.city && (
            <p className="text-red-500 text-sm mt-1 ml-2">{errors.city}</p>
          )}
        </div>

        {/* Mandatory Fields Note */}
        <p className="text-black text-sm ml-1">(All fields are mandatory)</p>

        {/* Submit Button */}
        <div className="pt-4 flex justify-center">
          <button
            type="submit"
            className="bg-[#006D64] text-white px-12 py-3 rounded-[15px] font-semibold
              hover:bg-[#00564C]/90 hover:shadow-lg hover:scale-105
              active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Next
          </button>
        </div>
      </form>
      </div>
    </>
  );
};

export default ParticipantRegistrationForm;
