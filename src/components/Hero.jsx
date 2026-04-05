import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ChevronDown } from 'lucide-react';

import heroImage1 from "../assets/Aayushi_pic's/Aayushi_Home_page_pic.jpeg";
import heroImage2 from '../assets/Bride/WhatsApp Image 2026-04-04 at 11.35.15 PM.jpeg';
import heroImage3 from '../assets/Soft_Look/WhatsApp Image 2026-04-04 at 11.47.11 PM.jpeg';
import heroImage4 from '../assets/High_Fashion_Look/WhatsApp Image 2026-04-04 at 11.47.45 PM.jpeg';

import './Hero.css';

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Bridal Makeup', date: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  const handleBookNow = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // NOTE: You must replace YOUR_WEB3FORMS_ACCESS_KEY_HERE with an actual access key.
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "a5599f76-2069-471b-aa0a-1f395af90694",
          subject: `New Booking Inquiry from ${formData.name}`,
          from_name: "Aayushi Glam Website",
          Name: formData.name,
          Phone: formData.phone,
          Service: formData.service,
          EventDate: formData.date
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          handleCloseModal();
          setSubmitStatus(null);
          setFormData({ name: '', phone: '', service: 'Bridal Makeup', date: '' });
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date();
  const todayDate = new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString().split('T')[0];

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
            <a href="#portfolio" className="btn btn-outline">Explore Styles</a>
            <button onClick={handleBookNow} className="btn">Book Now</button>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="image-frame">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={heroImages[currentImageIndex]}
                alt="Elegant Bridal Makeup"
                className="hero-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
            <button onClick={prevImage} className="carousel-btn left"><ChevronLeft size={24} /></button>
            <button onClick={nextImage} className="carousel-btn right"><ChevronRight size={24} /></button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="booking-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="booking-modal-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="booking-modal-close" onClick={handleCloseModal}><X size={24} /></button>
              <h2>Book an Appointment</h2>
              <p>Fill out the form below to inquire about dates and pricing.</p>

              {submitStatus === 'success' ? (
                <div style={{ padding: '2rem 0', textAlign: 'center', color: '#2ecc71' }}>
                  <h3 style={{ marginBottom: '1rem' }}>Message Sent Successfully!</h3>
                  <p>Aayushi will get back to you shortly.</p>
                  <p style={{ fontSize: '0.85rem', marginTop: '1rem', color: '#777' }}>You can expect a response via phone or email usually within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="booking-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="e.g. Aditi Sharma" />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" />
                  </div>

                  <div className="form-group">
                    <label>Service Required</label>
                    <div className="custom-dropdown">
                      <div
                        className={`dropdown-selected ${isDropdownOpen ? 'open' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsDropdownOpen(!isDropdownOpen);
                        }}
                      >
                        {formData.service}
                        <ChevronDown size={18} />
                      </div>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <>
                            <div
                              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsDropdownOpen(false);
                              }}
                            />
                            <motion.div
                              className="dropdown-options"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                            >
                              {["Bridal Makeup", "Pre-Wedding Shoot", "Party / Engagement Makeup", "Photoshoot / Editorial"].map(option => (
                                <div
                                  key={option}
                                  className="dropdown-option"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setFormData(prev => ({ ...prev, service: option }));
                                    setIsDropdownOpen(false);
                                  }}
                                >
                                  {option}
                                </div>
                              ))}
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Event Date</label>
                    <input type="date" name="date" required min={todayDate} value={formData.date} onChange={handleInputChange} />
                  </div>

                  {submitStatus === 'error' && (
                    <div style={{ color: '#e74c3c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Failed to send message. Please try again.</div>
                  )}

                  <button type="submit" className="btn btn-full" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
