import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      <ScrollToTopButton />
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;
