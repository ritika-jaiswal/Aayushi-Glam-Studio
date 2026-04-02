import React from 'react';
import { motion } from 'framer-motion';
import './AboutPreview.css';

const AboutPreview = () => {
  // Using an Unsplash professional headshot image as placeholder
  const profileImage = "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1000&auto=format&fit=crop";

  return (
    <section id="about" className="about-section section-padding">
      <div className="container about-container">
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src={profileImage} alt="Aayushi Jaiswal" className="about-image" />
        </motion.div>
        
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="section-subtitle">Meet The Artist</span>
          <h2 className="section-title">Aayushi Jaiswal</h2>
          <h4 className="section-role">Makeup Artist, Educator & Content Creator</h4>
          <p>
            Aayushi Jaiswal is a highly sought-after makeup artist based in Pune and Mumbai, celebrated for her ability to create flawless, elegant, and timeless bridal looks. She brings a 'Quiet Luxury' approach to her artistry, focusing on glowing skin and sophisticated details that enhance her clients' natural beauty.
          </p>
          <p>
            Whether it's a traditional Indian wedding, a glamorous reception, or an editorial photoshoot, Aayushi's expertise ensures every bride feels majestic. She also shares her knowledge through her popular YouTube channel and professional makeup courses.
          </p>
          <a href="#portfolio" className="btn btn-outline about-btn">Explore Portfolio</a>
        </motion.div>
      </div>
    </section>
  );
};
export default AboutPreview;
