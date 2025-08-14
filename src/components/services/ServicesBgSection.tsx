import React from 'react';

import ServicesSection from '../home/ServicesSection';

const ServicesBgSection: React.FC = () => (
  <section
    className="w-full min-h-[340px] md:min-h-[420px] flex items-center justify-center relative"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/pics/services-bg.png'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 z-0 rounded-none md:rounded-none" />
    <div className="relative z-10 w-full max-w-6xl px-2 md:px-8 py-12 flex justify-center items-center">
      <ServicesSection />
    </div>
  </section>
);

export default ServicesBgSection;
