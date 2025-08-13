import React from 'react';

const HomeStrategicPartnerships: React.FC = () => {
  return (
    <section className="w-full flex justify-center mt-20 mb-8 overflow-x-hidden min-h-[420px]">
      <div className="w-[96vw] min-w-0 flex flex-col md:flex-row gap-8 bg-white rounded-xl p-6 md:p-10 items-center relative">
        {/* Image */}
        <img
          src={process.env.PUBLIC_URL + '/pics/homestratagic.jpg'}
          alt="Strategic Partnerships"
          className="w-full md:w-[640px] h-[320px] md:h-[420px] object-cover mb-6 md:mb-0 z-0"
        />
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center md:absolute md:right-0 md:top-0 md:h-full md:z-10 md:w-[56%] md:pr-12 md:translate-x-24">
          <h2 className="text-2xl md:text-3xl font-bold text-[#f76c07] mb-4 text-left">Collaborating to unlock Zimbabwe's resource potential and drive sustainable development.</h2>
          <p className="text-xs md:text-sm text-gray-900 mb-3 text-left">
            Munisa Resources believes in the power of collaboration. We actively seek strategic partnerships with investors, technical experts, and community organizations to maximize the impact of our operations.
          </p>
          <p className="text-xs md:text-sm text-gray-900 mb-3 text-left">
            By combining our local expertise with global insights and resources, we create mutually beneficial opportunities that drive economic growth and social progress.
          </p>
          <p className="text-xs md:text-sm text-gray-900 mb-3 text-left">
            We are committed to building long-term relationships based on transparency, trust, and shared values.
          </p>
          <p className="text-xs md:text-sm text-gray-900 mb-3 text-left">
            Through these partnerships, we aim to not only develop Zimbabwe's rich resources but also empower local communities, enhance environmental sustainability, and contribute to the nation's overall prosperity.
          </p>
          <p className="text-xs md:text-sm text-gray-900 mb-6 text-left">
            We welcome partners who share our vision of responsible resource management and sustainable development to join us in shaping a brighter future for Zimbabwe.
          </p>
          <div className="w-full flex justify-center">
            <button
              className="bg-[#f76c07] hover:bg-[#e55c00] text-white font-semibold rounded-[15px] px-8 py-3 text-sm md:text-base transition-colors duration-150 shadow-md"
              type="button"
            >
              Invester Registration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStrategicPartnerships;
