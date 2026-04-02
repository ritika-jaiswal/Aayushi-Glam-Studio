import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/Aayushi_Home_page_pic.jpeg';
import './Hero.css';

const Hero = () => {

  return (
    <section id="home" className="hero-section">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="hero-subtitle">Makeover by Aayushi Jaiswal</span>
          <h1 className="hero-title">Best Bridal Makeup Artist in Indore</h1>
          <p className="hero-description">Experience the 'Quiet Luxury' of flawless makeup artistry tailored exclusively for your special day. From soft glam to traditional majesty.</p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-outline">Explore Styles</a>
            <a href="#contact" className="btn">Book Now</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="image-frame">
            <img src={heroImage} alt="Elegant Bridal Makeup" className="hero-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
