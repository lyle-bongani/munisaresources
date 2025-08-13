import React from 'react';
import ContactSection from '../components/contact/ContactSection';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section (background, full width) */}
      <div className="w-[90%] rounded-2xl overflow-hidden relative mx-auto mt-10" style={{zIndex: 1}}>
        <img
          src={process.env.PUBLIC_URL + '/pics/contactus.jpg'}
          alt="Contact Us Hero"
          className="w-full h-[440px] object-cover object-center rounded-2xl"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#f76c07] mb-2" style={{ fontFamily: 'Google Sans' }}>
            Contact Us
          </h1>
          <p className="text-base md:text-lg text-white font-medium text-center max-w-xl" style={{ fontFamily: 'Google Sans' }}>
            Building a Sustainable Future, Rooted in Zimbabwe's Resources.
          </p>
        </div>
      </div>
      {/* Contact Card (overlapping the image) */}
      <div className="z-10 w-full flex justify-center -mt-28 md:-mt-36">
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;
