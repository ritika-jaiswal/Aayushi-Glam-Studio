import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import './Footer.css';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3 className="footer-title">Makeover With Aayushi</h3>
          <p className="footer-desc">
            Bridal makeup artist from Indore India. Makeup Educator. Conducts makeup and hairstyle courses.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com/makeover_with_aayushi" target="_blank" rel="noreferrer"><InstagramIcon /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-subtitle">Find Us</h4>
          <p className="footer-contact-item">
            <MapPin size={18} /> Nandbagh, D sector, gali no 9, Indore, Madhya Pradesh
          </p>
          <h4 className="footer-subtitle" style={{ marginTop: '1.5rem' }}>Contact</h4>
          <p className="footer-contact-item">
            <Phone size={18} /> +91 9617616674
          </p>
          <p className="footer-contact-item">
            <Mail size={18} /> <a href="mailto:aayushimakeover03@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}> aayushimakeover03@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Aayushi Jaiswal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
