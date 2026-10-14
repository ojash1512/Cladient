import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="Men's Fashion" className="footer-logo" />
                    <p className="footer-about">
                        Men's Fashion is your premier destination for handcrafted leather wallets, stylish belts, modern sunglasses, luxury watches, and signature fragrances designed specifically for the discerning modern gentleman.
                    </p>
                    <div className="footer-social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">
                            <img src={assets.facebook_icon} alt="Facebook" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter">
                            <img src={assets.twitter_icon} alt="Twitter" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
                            <img src={assets.linkedin_icon} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>QUICK LINKS</h2>
                    <ul>
                        <li><Link to="/">Home Collection</Link></li>
                        <li onClick={() => scrollToSection('explore-menu')}>Explore Categories</li>
                        <li><Link to="/cart">Shopping Bag</Link></li>
                        <li><Link to="/order">Fast Checkout</Link></li>
                        <li onClick={() => alert("Free nationwide shipping on orders over $50. Standard delivery in 2-4 business days.")}>Delivery Info</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>📞 +91 98765 43210</li>
                        <li>✉️ support@mensfashion.com</li>
                        <li>📍 42 Fashion Boulevard, Mumbai, India</li>
                        <li>🕒 Mon - Sat: 9:00 AM - 8:00 PM</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-copyright">Copyright © {new Date().getFullYear()} Men's Fashion. All Rights Reserved.</p>
                <div className="footer-bottom-links">
                    <span>Privacy Policy</span>
                    <span>•</span>
                    <span>Terms of Service</span>
                    <span>•</span>
                    <span>Security</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;