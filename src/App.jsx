import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
