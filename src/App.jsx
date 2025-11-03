import React from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="App relative">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Projects />
      <Internships />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
