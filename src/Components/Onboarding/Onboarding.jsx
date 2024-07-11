import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    location: '',
    school: '',
    major: '',
    classification: '' 
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 4) { 
      navigate('/homepage'); 
    } else {
      setStep(step + 1); 
    }
  };

  const renderForm = () => {
    switch(step) {
      case 1:
        return (
          <input
            name="location"
            value={userData.location}
            onChange={handleChange}
            placeholder="Enter your location"
          />
        );
      case 2:
        return (
          <input
            name="school"
            value={userData.school}
            onChange={handleChange}
            placeholder="Enter your school"
          />
        );
      case 3:
        return (
          <input
            name="major"
            value={userData.major}
            onChange={handleChange}
            placeholder="Enter your major"
          />
        );
      case 4:
        return (
          <input
            name="classification"
            value={userData.classification}
            onChange={handleChange}
            placeholder="Enter your classification"
          />
        );
      default:
        return <div>Form Completed</div>;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderForm()}
      <button type="submit">{step === 4 ? 'Finish' : 'Next'}</button>
    </form>
  );
};

export default Onboarding;
