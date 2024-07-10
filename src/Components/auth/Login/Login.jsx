import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="login-btn">Log in</button>
        <p className="signup-link">Don't have an account? <a href="/authenticate">Sign up</a></p>
      </form>
    </div>
  );
};

export default Login;
