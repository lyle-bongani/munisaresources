import React from 'react';

const HomeAbout: React.FC = () => {
  return (
    <section className="w-full flex flex-col mt-40 mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#f76c07] mb-4 text-center">About Us</h2>
      <div className="w-[96vw] mx-auto bg-[#f5f6fa] rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-[520px]">
          <img
            src={process.env.PUBLIC_URL + '/pics/homeabout.jpg'}
            alt="About Munisa Resources"
            className="rounded-xl w-full object-cover h-[520px] md:h-[600px]"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-between items-start h-full">
          <div className="text-xs md:text-sm text-gray-900 space-y-4 mb-8 text-left">
            <p className="font-bold">
              A diversified, integrated resource company committed to responsible exploration, extraction, and trading, empowering communities and fostering sustainable growth
            </p>
            <p className="font-bold text-lg">
              Munisa Resources is a dynamic and forward-thinking organization operating at the heart of Zimbabwe’s rich natural resource landscape.
            </p>
            <p>
              We are more than just a resource company; we are partners in progress, dedicated to building a sustainable future for our nation and its people.
            </p>
            <p>
              Our integrated approach spans the entire resource value chain, from exploration and extraction to processing and global trading.
            </p>
            <p>
              Our commitment extends beyond the extraction of minerals and agricultural commodities. We believe in creating lasting value by empowering local communities, fostering environmentally responsible practices, and driving economic growth.
            </p>
            <p>
              Through strategic partnerships, innovative solutions, and a deep understanding of global markets, we connect Zimbabwe’s resources to the world, ensuring that our operations benefit both our stakeholders and the communities we serve.
            </p>
            <p>
              We are driven by a set of core values that guide our every action: sustainability, innovation, integrity, excellence, and a strong community focus. These principles are embedded in our operational strategies and our interactions with partners, employees, and the communities where we operate.
            </p>
            <p>
              At Munisa Resources, we are building a legacy of responsible resource management, creating a prosperous and sustainable future for Zimbabwe.
            </p>
          </div>
          <div className="flex w-full justify-center">
            <button className="bg-[#f76c07] hover:bg-[#e55c00] text-white font-semibold rounded-[15px] px-8 py-3 text-base transition-colors duration-150 shadow-md mx-auto">
              Claim Registration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
