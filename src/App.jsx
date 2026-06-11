import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
