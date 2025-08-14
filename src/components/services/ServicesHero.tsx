import React from 'react';

const ServicesHero: React.FC = () => (
  <section className="w-full flex justify-center items-center mt-12 py-6">
    <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-lg" style={{background: '#fff'}}>
      <div className="relative w-full h-[340px] md:h-[420px]">
        <img
          src={process.env.PUBLIC_URL + '/pics/services.png'}
          alt="Our Services"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.45)' }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#ff7900] mb-2 text-center">Our Services</h1>
          <p className="text-white text-base md:text-lg font-normal text-center max-w-xl">
            Building a Sustainable Future, Rooted in Zimbabwe's Resources.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesHero;
