import React, { useState } from 'react';
import './Signup.css';
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle,
  doSignOut, 
} from '../../../firebase/auth'; 

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      console.log('User created successfully!');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await doSignInWithGoogle();
      console.log('Google sign in successful!');
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
        <p className="login-link">Already have an account? <a href="/login">Log in</a></p>
      </div>
      <div className="welcome-container">
        <h1>Welcome to our community</h1>
        <p>Personalized, updated daily, and beautifully presented. Create an account.</p>
      </div>
    </div>
  );
};

export default Signup;
