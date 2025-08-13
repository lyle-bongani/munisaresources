import React from 'react';
import HomeHero from '../components/home/homehero';
import About from '../components/home/HomeAbout';
import VisionMissionValues from '../components/home/VisionMissionValues';
import HomeStrategicPartnerships from '../components/home/HomeStrategicPartnerships';
import ServicesSection from '../components/home/ServicesSection';
import ReadyToPartnerSection from '../components/home/ReadyToPartnerSection';
import StrategicPartnershipsSharedGrowthSection from '../components/home/StrategicPartnershipsSharedGrowthSection';
import ContactSection from '../components/home/ContactSection';

const Home: React.FC = () => {
  return (
    <div>
            <HomeHero />
      <About />
      <VisionMissionValues />
      <HomeStrategicPartnerships />
      <ServicesSection />
      <ReadyToPartnerSection />
      <StrategicPartnershipsSharedGrowthSection />
      <ContactSection />
          </div>
  );
};

export default Home;
