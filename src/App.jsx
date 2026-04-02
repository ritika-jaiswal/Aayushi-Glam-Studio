import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPreview from './components/AboutPreview';
import PortfolioGrid from './components/PortfolioGrid';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPreview />
      <PortfolioGrid />
      <Footer />
    </>
  );
}

export default App;
