import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage/LandingPage';
import Signup from './Components/auth/Signup/Signup';
import Onboarding from './Components/Onboarding/Onboarding';
import Login from './Components/auth/Login/Login';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/authenticate" element={<Signup/>} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </Router>
  );
}
export default App;
