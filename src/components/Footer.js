// components/Footer.js

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="about">
        <p>
          Want to learn more about Aristelle Fashion? Check out our social media channels:
        </p>
      </div>
      <div className="social-links">
        <Link href="https://www.facebook.com/profile.php?id=61561870003784" target="_blank" aria-label="Facebook">
          <FaFacebook size={24} />
        </Link>
        <Link href="https://www.instagram.com/aristelle_fashion/" target="_blank" aria-label="Instagram">
          <FaInstagram size={24} />
        </Link>
        <Link href="https://github.com/JB-VERGARA/aristelle-fashion" target="_blank" aria-label="Github">
          <FaGithub size={24} />
        </Link>
      </div>
      <div className="credit">
        <p>
          Developed by{' '}
          <Link href="https://johnbryanvergara.vercel.app" target="_blank" rel="noopener noreferrer" className="developer-link">
            <strong>John Bryan Vergara</strong>
          </Link> using Next.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
