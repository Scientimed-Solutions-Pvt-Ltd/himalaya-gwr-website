import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ecoLogo from '../assets/images/logo.png';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employeeCode: '',
    employeeName: '',
    hq: '',
    state: '',
    rmName: '',
    zmName: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
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
    if (!value.trim()) {
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
      if (!formData[key].trim()) {
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
      console.log('Form submitted:', formData);
      // Navigate to wellness registration page
      navigate('/wellness');
    }
  };

  const inputFields = [
    { name: 'employeeCode', placeholder: 'Employee Code:' },
    { name: 'employeeName', placeholder: 'Employee Name:' },
    { name: 'hq', placeholder: 'HQ:' },
    { name: 'state', placeholder: 'State:' },
    { name: 'rmName', placeholder: 'RM Name:' },
    { name: 'zmName', placeholder: 'ZM Name:' }
  ];

  return (
    <div className="bg-[#DCEAB4] rounded-[30px] p-6 md:p-8 w-full max-w-[540px] shadow-xl">
      {/* Eco Icon */}
      <div className="flex justify-center mb-4">
        <img 
          src={ecoLogo} 
          alt="Eco Wellness Logo" 
          className="w-40 h-32 md:w-48 md:h-32 object-contain"
        />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {inputFields.map(({ name, placeholder }) => (
          <div key={name}>
            <input
              type="text"
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 rounded-lg bg-white border-2 transition-colors
                placeholder:text-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00796B]/50
                ${errors[name] && touched[name] 
                  ? 'border-red-400 focus:border-red-400' 
                  : 'border-transparent focus:border-[#00796B]'
                }`}
            />
            {errors[name] && touched[name] && (
              <p className="text-red-500 text-sm mt-1 ml-2">{errors[name]}</p>
            )}
          </div>
        ))}

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
  );
};

export default RegistrationForm;
