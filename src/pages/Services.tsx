import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesBgSection from '../components/services/ServicesBgSection';

const Services: React.FC = () => {
  return (
    <>
      <ServicesHero />
      <div className="my-16" />
      <ServicesBgSection />
      {/* TODO: Add Services content here */}
    </>
  );
};

export default Services;
