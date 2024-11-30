import { FaFacebookMessenger } from 'react-icons/fa'; // Importing icons
import React, { useState } from "react";
import Image from "next/image";

const Header = ({ businessName, businessDescription, logo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { href: "/", label: "Shop" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

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

        {businessName && (
          <div className="business-info">
            <h1 className="business-name">{businessName}</h1>
            {businessDescription && (
              <p className="business-description">{businessDescription}</p>
            )}
          </div>
        )}
      </div>

      {/* Burger Menu Button */}
      <button
        className={`burger-menu ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <nav className={`navbar ${menuOpen ? "show-menu" : ""}`}>
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Cart Icon */}
        <ul className="cart-nav">
          <li>
          <a 
               href="https://m.me/61561870003784" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="cart-icon"
          >
          <FaFacebookMessenger style={{ marginRight: '8px' }} />
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
