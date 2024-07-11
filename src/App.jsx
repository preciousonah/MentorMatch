import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage/LandingPage';
import Signup from './Components/auth/Signup/Signup';
import Login from './Components/auth/Login/Login';

import './App.css';

function App() {
  return (
    <Router>
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
