import React from 'react';

const AboutHero: React.FC = () => (
  <div className="w-[90%] h-[80vh] rounded-2xl overflow-hidden relative mx-auto mt-10">
    <img
      src={process.env.PUBLIC_URL + '/pics/contactus.jpg'}
      alt="About Us Hero"
      className="w-full h-full object-cover object-center rounded-2xl"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center rounded-2xl px-4">
      <div className="mt-32 w-full flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#f76c07] mb-4 text-center" style={{ fontFamily: 'Google Sans' }}>
          About Us
        </h1>
        <p className="text-white md:text-base font-normal text-center max-w-2xl mx-auto leading-normal tracking-normal" style={{ fontFamily: 'Google Sans' }}>
          Munisa Resources is a diversified resource value chain integrated company, deeply rooted in Zimbabwe's rich natural resource landscape. Founded on the principles of sustainability, innovation, and integrity, we've grown into a key player in both the mineral and agricultural sectors. Our journey began with a vision to not only extract and trade resources but to do so in a way that empowers local communities and contributes to the nation's economic growth. We're committed to building a legacy of responsible resource management and value creation.
        </p>
      </div>
    </div>
  </div>
);

export default AboutHero;
