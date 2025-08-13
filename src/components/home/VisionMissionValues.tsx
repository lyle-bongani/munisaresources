import React from 'react';

const VisionMissionValues: React.FC = () => {
  return (
    <section className="w-full flex justify-center mt-20 mb-8">
      <div className="w-[96vw] flex flex-col md:flex-row justify-center items-stretch relative">
        {/* Vision */}
        <div className="flex-1 bg-[#f4f5f7] rounded-[32px] flex flex-col items-center p-6 md:p-8 text-center min-w-[260px] max-w-[380px] h-[370px] md:h-[420px] z-0">
          <div className="flex flex-col items-center w-full mt-16">
            <span className="text-5xl md:text-7xl text-[#f76c07] mb-4">
              {/* Eye Icon */}
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 48 48' className="inline w-16 h-16"><circle cx="24" cy="24" r="18" stroke="#f76c07" strokeWidth="3"/><circle cx="24" cy="24" r="6" stroke="#f76c07" strokeWidth="3"/><path d="M12 24c4-6 12-6 16 0" stroke="#f76c07" strokeWidth="3"/></svg>
            </span>
            <h3 className="text-[#222a67] font-bold text-lg md:text-xl mb-2 tracking-wide">VISION</h3>
            <p className="text-xs md:text-sm text-gray-900 mt-6">
              To be a leading integrated natural resources company, driving sustainable value creation through responsible exploration, extraction, processing, and global commodity trading.
            </p>
          </div>
        </div>
        {/* Mission */}
        <div className="flex-1 bg-[#d1d2d4] rounded-[32px] flex flex-col items-center p-6 md:p-8 text-center min-w-[260px] max-w-[420px] h-[420px] z-10 md:-mt-6 md:mx-[-40px] shadow-xl">
          <span className="text-5xl md:text-7xl text-[#f76c07] mb-4">
            {/* Target Icon */}
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 48 48' className="inline w-16 h-16"><circle cx="24" cy="24" r="18" stroke="#f76c07" strokeWidth="3"/><circle cx="24" cy="24" r="9" stroke="#f76c07" strokeWidth="3"/><circle cx="24" cy="24" r="3" fill="#f76c07"/><path d="M24 15v-6m0 30v-6m12-12h6m-24 0h6" stroke="#f76c07" strokeWidth="3"/></svg>
          </span>
          <h3 className="text-[#222a67] font-bold text-lg md:text-xl mb-4 tracking-wide">MISSION</h3>
          <div className="text-xs md:text-sm text-gray-900 text-center max-w-[340px] mx-auto flex flex-col justify-center h-full">
            <p>
              Munisa Resources is committed to unlocking the full potential of Africa’s mineral wealth by:<br />
              Conducting efficient and responsible mining operations,<br />
              Advancing the beneficiation of minerals and industrial commodities,<br />
              Delivering quality products including gold, antimony, mining chemicals, fertilisers, and grains,<br />
              Creating shared value for communities, stakeholders, and investors,<br />
              Embracing innovation, sustainability, and operational excellence in every aspect of our business.
            </p>
          </div>
        </div>
        {/* Values */}
        <div className="flex-1 bg-[#f4f5f7] rounded-[32px] flex flex-col items-center p-6 md:p-8 text-center min-w-[260px] max-w-[380px] h-[370px] md:h-[420px] z-0">
          <div className="flex flex-col items-center w-full mt-16">
            <span className="text-5xl md:text-7xl text-[#f76c07] mb-4">
              {/* Target Icon */}
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 48 48' className="inline w-16 h-16"><circle cx="24" cy="24" r="18" stroke="#f76c07" strokeWidth="3"/><circle cx="24" cy="24" r="3" fill="#f76c07"/><path d="M24 8v6m0 20v6m12-12h6m-24 0h6" stroke="#f76c07" strokeWidth="3"/></svg>
            </span>
            <h3 className="text-[#222a67] font-bold text-lg md:text-xl mb-2 tracking-wide">VALUES</h3>
            <p className="text-xs md:text-sm text-gray-900 mt-6">
              Sustainability, Innovation, Integrity, Excellence and Community Focus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
