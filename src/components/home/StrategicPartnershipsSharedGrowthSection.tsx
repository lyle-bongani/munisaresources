import React from 'react';

const StrategicPartnershipsSharedGrowthSection: React.FC = () => {
  return (
    <section className="w-full flex justify-center mt-10 mb-8">
      <div className="w-[90vw] max-w-7xl flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden">
        {/* Image */}
        <div className="md:w-[45%] w-full flex-shrink-0">
          <img
            src={process.env.PUBLIC_URL + '/pics/Strategic Partnerships for Shared Growth.jpg'}
            alt="Strategic Partnerships for Shared Growth"
            className="w-full h-full object-cover rounded-3xl md:min-h-[350px]"
            style={{ aspectRatio: '1.1/1' }}
          />
        </div>
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#f76c07] mb-1 leading-tight text-left" style={{ fontFamily: 'Google Sans' }}>
            Strategic Partnerships for<br className="hidden md:block" />Shared Growth
          </h2>
          <h3 className="text-base md:text-lg font-semibold text-[#191970] mb-3 text-left" style={{ fontFamily: 'Google Sans' }}>
            Collaborating to unlock Zimbabwe's resource potential and drive sustainable development.
          </h3>
          <p className="text-xs md:text-sm text-gray-900 mb-3 text-left" style={{ fontFamily: 'Google Sans' }}>
            Munisa Resources believes in the power of collaboration. We actively seek strategic partnerships with investors,<br />
            technical experts, and community organizations to maximize the impact of our operations.
          </p>
          <p className="text-xs md:text-sm text-gray-900 mb-3 text-left" style={{ fontFamily: 'Google Sans' }}>
            By combining our local expertise with global insights and resources, we create mutually beneficial opportunities<br />
            that drive economic growth and social progress.
          </p>
          <p className="text-xs md:text-sm text-gray-900 mb-3 text-left" style={{ fontFamily: 'Google Sans' }}>
            We are committed to building long-term relationships based on transparency, trust, and shared values.
          </p>
          <p className="text-xs md:text-sm text-gray-900 mb-3 text-left" style={{ fontFamily: 'Google Sans' }}>
            Through these partnerships, we aim to not only develop Zimbabwe's rich resources but also empower local<br />
            communities, enhance environmental sustainability, and contribute to the nation's overall prosperity.
          </p>
          <p className="text-xs md:text-sm text-gray-900 text-left" style={{ fontFamily: 'Google Sans' }}>
            We welcome partners who share our vision of responsible resource management and sustainable development to join<br />
            us in shaping a brighter future for Zimbabwe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategicPartnershipsSharedGrowthSection;
