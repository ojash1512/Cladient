import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Signup from './components/Signup/Signup';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [username, setUserName] = useState(() => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      return user?.username || '';
    } catch {
      return '';
    }
  });

  const handleSignOut = () => {
    setUserName('');
    localStorage.removeItem('user');
  };

  return (
    <>
      {showLogin && (
        <LoginPopup setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} setUserName={setUserName} />
      )}
      {showSignUp && (
        <Signup setShowSignUp={setShowSignUp} setShowLogin={setShowLogin} setUserName={setUserName} />
      )}
      <div className='app'>
        <Navbar 
          setShowLogin={setShowLogin} 
          setShowSignUp={setShowSignUp} 
          username={username} 
          onSignOut={handleSignOut} 
        />
        <Routes>
          <Route path='/' element={<Home username={username} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
