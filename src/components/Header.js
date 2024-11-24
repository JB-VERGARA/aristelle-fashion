import React from 'react';
import Image from 'next/image';

const Header = ({ businessName, businessDescription, logo }) => {
  return (
    <header className="header">
      {/* Logo and Business Info */}
      <div className="logo-info">
        {logo && logo.fields?.file?.url ? (
          <div className="logo">
            <Image 
              src={`https:${logo.fields.file.url}`} 
              alt="Business Logo" 
              width={50} 
              height={50} 
              layout="intrinsic"
            />
          </div>
        ) : (
          <div className="logo">No Logo Available</div>
        )}

        {/* Business Name */}
        {businessName && (
          <div className="business-info">
            <h1 className="business-name">{businessName}</h1>
            {businessDescription && <p className="business-description">{businessDescription}</p>}
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        
        {/* Cart Icon */}
        <ul className="cart-nav">
          <li>
            <a href="/cart" className="cart-icon">
              🛒
            </a>
          </li>
        </ul>
      </nav>

      {/* Floating Cart - Displayed only on mobile */}
      <div className="floating-cart">
        <a href="/cart" className="cart-icon">
          🛒
        </a>
      </div>
    </header>
  );
};

export default Header;
