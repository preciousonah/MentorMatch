import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to MentorConnect</h1> 
      <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
      <button onClick={() => window.location.href = '/authenticate'}>Get Started</button>
    </div>
  );
};

export default LandingPage;