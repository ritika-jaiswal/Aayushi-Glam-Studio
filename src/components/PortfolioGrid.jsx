import React from 'react';
import { motion } from 'framer-motion';
import './PortfolioGrid.css';

const portfolioItems = [
  { id: 1, title: 'North Indian Bridal', category: 'Bridal', image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, title: 'Haldi Makeup', category: 'Pre-Wedding', image: 'https://images.unsplash.com/photo-1620050858102-7a06a0ee57b2?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, title: 'Reception Glam', category: 'Bridal', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, title: 'Maharashtrian Bride', category: 'Bridal', image: 'https://images.unsplash.com/photo-1610427847953-faca08ad7649?q=80&w=1000&auto=format&fit=crop' },
];

const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="portfolio-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Bridal Work</span>
          <h2 className="section-title">Aayushi's Portfolio</h2>
        </div>
        
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="portfolio-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="portfolio-img-wrapper">
                <img src={item.image} alt={item.title} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <span className="portfolio-category">{item.category}</span>
                  <h3 className="portfolio-title">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a href="https://instagram.com/makeover_with_aayushi" target="_blank" rel="noreferrer" className="btn">View More on Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
