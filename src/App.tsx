import React from 'react';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TechnicalSpecs } from './components/TechnicalSpecs';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f5e6dd]">
      <Hero />
      <WhyChooseUs />
      <TechnicalSpecs />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;