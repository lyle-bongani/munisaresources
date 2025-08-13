import React from 'react';
import Header from './components/Header';
import HomeHero from './components/home/homehero';
import HomeAbout from './components/home/HomeAbout';
import VisionMissionValues from './components/home/VisionMissionValues';
import HomeStrategicPartnerships from './components/home/HomeStrategicPartnerships';
import ServicesSection from './components/home/ServicesSection';
import ReadyToPartnerSection from './components/home/ReadyToPartnerSection';
import StrategicPartnershipsSharedGrowthSection from './components/home/StrategicPartnershipsSharedGrowthSection';
import ContactSection from './components/home/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeHero />
      <HomeAbout />
      <VisionMissionValues />
      <HomeStrategicPartnerships />
      <ServicesSection />
      <ReadyToPartnerSection />
      <StrategicPartnershipsSharedGrowthSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
