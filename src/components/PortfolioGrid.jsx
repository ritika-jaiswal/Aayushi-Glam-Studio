import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './PortfolioGrid.css';

/* Bride Imports */
import b1 from '../assets/Bride/WhatsApp Image 2026-04-04 at 11.35.13 PM.jpeg';
import b2 from '../assets/Bride/WhatsApp Image 2026-04-04 at 11.35.15 PM.jpeg';
import b3 from '../assets/Bride/WhatsApp Image 2026-04-04 at 11.48.25 PM.jpeg';
import b4 from '../assets/Bride/WhatsApp Image 2026-04-04 at 11.48.26 PM.jpeg';
import b5 from '../assets/Bride/WhatsApp Image 2026-04-05 at 4.18.38 PM.jpeg';
import b6 from '../assets/Bride/WhatsApp Image 2026-04-05 at 4.18.39 PM.jpeg';
import b7 from '../assets/Bride/WhatsApp Image 2026-04-05 at 4.44.33 PM.jpeg';
import b8 from '../assets/Bride/WhatsApp Image 2026-04-05 at 4.44.34 PM (1).jpeg';
import b9 from '../assets/Bride/WhatsApp Image 2026-04-05 at 4.44.34 PM.jpeg';
import b10 from '../assets/Bride/WhatsApp Image 2026-04-05 at 4.44.35 PM.jpeg';

/* Creativity Imports */
import cr1 from '../assets/Creativity/WhatsApp Image 2026-04-04 at 11.49.02 PM (1).jpeg';
import cr2 from '../assets/Creativity/WhatsApp Image 2026-04-04 at 11.49.02 PM.jpeg';

/* High Fashion Imports */
import hf1 from '../assets/High_Fashion_Look/WhatsApp Image 2026-04-04 at 11.47.45 PM.jpeg';

/* Soft Look Imports */
import s1 from '../assets/Soft_Look/WhatsApp Image 2026-04-04 at 11.47.11 PM (1).jpeg';
import s2 from '../assets/Soft_Look/WhatsApp Image 2026-04-04 at 11.47.11 PM (2).jpeg';
import s3 from '../assets/Soft_Look/WhatsApp Image 2026-04-04 at 11.47.11 PM.jpeg';
import s4 from '../assets/Soft_Look/WhatsApp Image 2026-04-05 at 4.18.39 PM (1).jpeg';
import s5 from '../assets/Soft_Look/WhatsApp Image 2026-04-05 at 4.20.29 PM.jpeg';

/* Pre-Wedding Imports */
import pw1 from '../assets/Pre_wedding_Shoots/WhatsApp Image 2026-04-05 at 4.18.40 PM (1).jpeg';
import pw2 from '../assets/Pre_wedding_Shoots/WhatsApp Image 2026-04-05 at 4.18.40 PM.jpeg';
import pw3 from '../assets/Pre_wedding_Shoots/WhatsApp Image 2026-04-05 at 4.18.41 PM (1).jpeg';
import pw4 from '../assets/Pre_wedding_Shoots/WhatsApp Image 2026-04-05 at 4.18.42 PM.jpeg';

/* Rajputana Look Imports */
import rj1 from '../assets/Rajputana_Look/WhatsApp Image 2026-04-05 at 4.18.40 PM (2).jpeg';
import rj2 from '../assets/Rajputana_Look/WhatsApp Image 2026-04-05 at 4.18.41 PM.jpeg';

/* Aayushi's Pics Imports */
import ay1 from "../assets/Aayushi_pic's/WhatsApp Image 2026-04-04 at 11.37.11 PM.jpeg";
import ay2 from "../assets/Aayushi_pic's/WhatsApp Image 2026-04-05 at 4.44.35 PM (1).jpeg";

/* Wedding Functions Imports */
import wf1 from '../assets/wedding_Function_Looks/WhatsApp Image 2026-04-04 at 11.35.12 PM.jpeg';
import wf2 from '../assets/wedding_Function_Looks/WhatsApp Image 2026-04-05 at 3.37.03 PM (1).jpeg';
import wf3 from '../assets/wedding_Function_Looks/WhatsApp Image 2026-04-05 at 3.37.03 PM (2).jpeg';
import wf4 from '../assets/wedding_Function_Looks/WhatsApp Image 2026-04-05 at 3.37.03 PM (5).jpeg';
import wf5 from '../assets/wedding_Function_Looks/WhatsApp Image 2026-04-05 at 3.37.03 PM (6).jpeg';
import wf6 from '../assets/wedding_Function_Looks/WhatsApp Image 2026-04-05 at 3.37.03 PM (7).jpeg';

const portfolioItems = [
  { id: 101, title: 'Classic Bride', category: 'Bride', images: [b1, b2] },
  { id: 102, title: 'Royal Bride', category: 'Bride', images: [b3, b4] },
  { id: 103, title: 'Elegant Bride', category: 'Bride', images: [b5, b6] },
  { id: 104, title: 'Beautiful Bride', category: 'Bride', images: [b7, b8, b9, b10] },

  { id: 201, title: 'Creative Look', category: 'Creativity', images: [cr2, cr1] },
  { id: 301, title: 'High Fashion', category: 'High Fashion', images: [hf1] },

  { id: 401, title: 'Soft Glam', category: 'Soft Look', images: [s1, s2, s3] },
  { id: 402, title: 'Subtle Beauty', category: 'Soft Look', images: [s4, s5] },

  { id: 501, title: 'Haldi Function', category: 'Wedding Functions', images: [wf1] },
  { id: 502, title: 'Mehendi Function Green', category: 'Wedding Functions', images: [wf2, wf3, wf4, wf5, wf6] },

  { id: 601, title: 'Pre-Wedding Shoot', category: 'Pre-Wedding', images: [pw1, pw2, pw3, pw4] },

  { id: 701, title: 'Rajputana Look', category: 'Rajputana Look', images: [rj1, rj2] },

  { id: 801, title: 'Wedding Attendee Look', category: 'Wedding Functions', images: [ay2, ay1] }
];

const categories = ['All', 'Bride', 'Creativity', 'High Fashion', 'Soft Look', 'Wedding Functions', 'Pre-Wedding', 'Rajputana Look'];

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedLook, setSelectedLook] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const openLightbox = (item) => {
    setSelectedLook(item);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedLook(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedLook) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedLook.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedLook) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedLook.images.length) % selectedLook.images.length);
    }
  };

  return (
    <section id="portfolio" className="portfolio-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Bridal & Fashion Work</span>
          <h2 className="section-title">Aayushi's Portfolio</h2>
        </div>

        <div className="portfolio-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="portfolio-grid">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                className="portfolio-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(item)}
                style={{ cursor: 'pointer' }}
              >
                <div className="portfolio-img-wrapper">
                  <img src={item.images[0]} alt={item.title} className="portfolio-img" />
                  <div className="portfolio-overlay">
                    <span className="portfolio-category">{item.category}</span>
                    <h3 className="portfolio-title">{item.title}</h3>
                    {item.images.length > 1 && (
                      <span className="view-more-text">View {item.images.length} photos</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a href="https://instagram.com/makeover_with_aayushi" target="_blank" rel="noreferrer" className="btn">View More on Instagram</a>
        </div>
      </div>

      <AnimatePresence>
        {selectedLook && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={32} />
            </button>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={selectedLook.images[currentImageIndex]}
                  alt={`${selectedLook.title} - ${currentImageIndex + 1}`}
                  className="lightbox-img"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {selectedLook.images.length > 1 && (
                <>
                  <button className="lightbox-nav prev" onClick={prevImage}><ChevronLeft size={36} /></button>
                  <button className="lightbox-nav next" onClick={nextImage}><ChevronRight size={36} /></button>
                  <div className="lightbox-indicator">
                    {currentImageIndex + 1} / {selectedLook.images.length}
                  </div>
                </>
              )}
            </div>
            <div className="lightbox-title">{selectedLook.title}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGrid;
