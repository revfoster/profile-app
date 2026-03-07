import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Cta from './components/Cta';
import Footer from './components/Footer';

// Import all SCSS
import './assets/scss/style.scss';

function App() {
  useEffect(() => {
    document.body.classList.add('is-boxed', 'has-animations');
    
    return () => {
      document.body.classList.remove('is-boxed', 'has-animations');
    }
  }, []);

  return (
    <div className="body-wrap">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
