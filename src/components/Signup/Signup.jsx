import React, { useState } from 'react';
import './Signup.css';
import { assets } from '../../assets/assets';

const Signup = ({ setShowSignUp, setShowLogin, setUserName }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match! Please re-enter.");
            return;
        }
        if (!agree) {
            alert("Please agree to the terms of use & privacy policy.");
            return;
        }
        const userObj = {
            username: username.trim(),
            email: email.trim()
        };
        localStorage.setItem('user', JSON.stringify(userObj));
        setUserName(userObj.username);
        setShowSignUp(false);
    };

    return (
        <div className='signup-popup'>
            <form className="signup-popup-container" onSubmit={handleSignup}>
                <div className='signup-popup-title'>
                    <h2>Create Account</h2>
                    <img onClick={() => setShowSignUp(false)} src={assets.cross_icon} alt="Close" />
                </div>
                <div className="signup-popup-inputs">
                    <input 
                        type="text" 
                        placeholder='Your Full Name / Username' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder='Your Email Address' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder='Password (min 6 characters)' 
                        minLength={6}
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder='Confirm Password' 
                        minLength={6}
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div className="signup-popup-condition">
                    <input 
                        type="checkbox" 
                        id="terms" 
                        checked={agree} 
                        onChange={(e) => setAgree(e.target.checked)} 
                    />
                    <label htmlFor="terms">By continuing, I agree to the terms of use & privacy policy.</label>
                </div>
                <button type="submit">Create Account</button>
                <p className="signup-switch">
                    Already have an account? <span onClick={() => { setShowSignUp(false); setShowLogin(true); }}>Sign In here</span>
                </p>
            </form>
        </div>
    );
};

export default Signup;


