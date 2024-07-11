import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle
} from '../../../firebase/auth'; 

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      console.log('User created successfully!');
      navigate('/onboarding'); 
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await doSignInWithGoogle();
      console.log('Google sign in successful!');
      navigate('/onboarding'); 
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        <h2>Sign up</h2>
        <button className="google-btn" onClick={handleGoogleSignIn}>Sign up with Google</button>
        <div className="or-divider">or</div>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="E-mail address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="create-account-btn" onClick={handleSignUp}>Create account</button>
        <p className="signup-link">Already have an account? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
};

export default Signup;
