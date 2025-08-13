import React from 'react';

const ReadyToPartnerSection: React.FC = () => {
  return (
    <section className="w-full flex justify-center mt-10 mb-8">
      <div className="w-[90vw] max-w-7xl bg-[#f76c07] rounded-2xl flex flex-col md:flex-row items-center px-6 md:px-10 py-2 md:py-3 gap-2 md:gap-0">
        {/* Illustration */}
        <div className="flex-shrink-0 flex items-center h-12 md:h-16">
          <img
            src={process.env.PUBLIC_URL + '/pics/Ready to Partner.png'}
            alt="Ready to Partner Illustration"
            className="h-12 md:h-16 w-auto object-contain"
            style={{ minWidth: 56 }}
          />
        </div>
        {/* Text and Call */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between w-full">
          <span className="text-xl md:text-2xl font-bold text-[#191970] mr-0 md:mr-8 mb-2 md:mb-0" style={{ fontFamily: 'Google Sans' }}>
            Ready to Partner?
          </span>
          <div className="flex flex-col md:items-end md:ml-auto md:mr-8 mb-2 md:mb-0">
            <span className="text-xs md:text-sm font-semibold text-[#191970] leading-tight" style={{ fontFamily: 'Google Sans' }}>
              Call Us Today?
            </span>
            <span className="text-lg md:text-2xl font-extrabold text-white md:text-[#191970] mt-0.5" style={{ fontFamily: 'Google Sans' }}>
              +263 77 562 1090
            </span>
          </div>
          <a
            href="tel:+263775621090"
            className="ml-0 md:ml-4 bg-white text-[#191970] font-semibold rounded-full px-6 py-2 text-sm md:text-base shadow hover:bg-[#f5f6fa] transition-colors duration-150"
            style={{ fontFamily: 'Google Sans' }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadyToPartnerSection;
