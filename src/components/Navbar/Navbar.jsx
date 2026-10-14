import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin, setShowSignUp, username, onSignOut }) => {
    const [menu, setMenu] = useState("home");
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { getTotalCartCount, searchTerm, setSearchTerm } = useContext(StoreContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (menuName, targetId) => {
        setMenu(menuName);
        setMobileMenuOpen(false);
        if (targetId) {
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const el = document.getElementById(targetId);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const el = document.getElementById(targetId);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="navbar">
            <Link to='/' onClick={() => setMenu("home")} className="navbar-logo-link">
                <img src={assets.logo} alt="Men's Fashion" className="logo" />
            </Link>

            <ul className={`navbar-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <li className={location.pathname === '/' && menu === 'home' ? 'active' : ''}>
                    <Link to='/' onClick={() => { setMenu("home"); setMobileMenuOpen(false); }}>Home</Link>
                </li>
                <li className={menu === 'collection' ? 'active' : ''}>
                    <a href="#explore-menu" onClick={(e) => { e.preventDefault(); handleNavClick("collection", "explore-menu"); }}>Collection</a>
                </li>
                <li className={location.pathname === '/order' ? 'active' : ''}>
                    <Link to='/order' onClick={() => { setMenu("order"); setMobileMenuOpen(false); }}>Place Order</Link>
                </li>
                <li className={menu === 'contact' ? 'active' : ''}>
                    <a href="#footer" onClick={(e) => { e.preventDefault(); handleNavClick("contact", "footer"); }}>Contact Us</a>
                </li>
            </ul>

            <div className="navbar-right">
                <div className={`navbar-search-container ${showSearchInput ? 'open' : ''}`}>
                    {showSearchInput && (
                        <input 
                            type="text" 
                            className="navbar-search-field"
                            placeholder="Search belts, shoes, watches..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            autoFocus
                        />
                    )}
                    <button 
                        type="button" 
                        className="navbar-search-btn"
                        onClick={() => {
                            setShowSearchInput(!showSearchInput);
                            if (showSearchInput && searchTerm) setSearchTerm("");
                        }}
                        title="Search Products"
                    >
                        <img src={assets.search_icon} alt="Search" />
                    </button>
                </div>

                <div className="navbar-basket-icon">
                    <Link to='/cart' title="View Cart">
                        <img src={assets.basket_icon} alt="Cart" />
                        {getTotalCartCount() > 0 && (
                            <span className="navbar-cart-count">{getTotalCartCount()}</span>
                        )}
                    </Link>
                </div>

                {username ? (
                    <div className="navbar-user-profile">
                        <div className="navbar-user-pill">
                            <img src={assets.profile_icon} alt="Profile" className="user-icon" />
                            <span className="user-name">{username}</span>
                        </div>
                        <button className="signout-btn" onClick={onSignOut} title="Sign Out">
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="navbar-auth-buttons">
                        <button className="signin-btn" onClick={() => setShowLogin(true)}>Sign In</button>
                        <button className="signup-btn" onClick={() => setShowSignUp(true)}>Sign Up</button>
                    </div>
                )}

                <button 
                    className="mobile-hamburger-btn" 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
