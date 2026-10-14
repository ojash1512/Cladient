import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin, setShowSignUp, setUserName }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const finalUsername = username.trim() || email.split('@')[0] || 'User';
    const userObj = {
      username: finalUsername,
      email: email.trim()
    };
    localStorage.setItem('user', JSON.stringify(userObj));
    setUserName(finalUsername);
    setShowLogin(false);
  };

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={handleLogin}>
        <div className='login-popup-title'>
          <h2>Sign In</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          <input 
            type="text" 
            placeholder='Your Username' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder='Your Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Sign In</button>
        <p className="login-switch">
          Don't have an account? <span onClick={() => { setShowLogin(false); setShowSignUp(true); }}>Create account</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;

