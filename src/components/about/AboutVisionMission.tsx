import React from 'react';

const AboutVisionMission: React.FC = () => (
  <div className="w-full flex flex-col md:flex-row gap-8 items-stretch justify-center px-2 md:px-8 py-8">
    {/* Left: Image Card */}
    <div className="flex-1 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg border-4 border-gray-200 p-2 w-full max-w-[546px] h-[680px] flex items-center justify-center">
        <img
          src={process.env.PUBLIC_URL + '/pics/aboutvissionmission.png'}
          alt="Vision and Mission"
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
    </div>
    {/* Right: Vision and Mission Cards */}
    <div className="flex flex-1 flex-col gap-8 justify-center md:-ml-8">
      {/* Vision Card */}
      <div className="bg-[#ff7900] rounded-2xl shadow-lg p-8 flex flex-col items-center text-white w-[95%]">
        <svg width="90" height="90" fill="none" viewBox="0 0 48 48" className="mb-2"><circle cx="24" cy="24" r="20" stroke="white" strokeWidth="3" /><ellipse cx="24" cy="24" rx="7" ry="7" stroke="white" strokeWidth="3" /><circle cx="24" cy="24" r="2.5" fill="white" /></svg>
        <h3 className="mt-2 mb-2 text-xl font-bold tracking-wide uppercase">Our Vision</h3>
        <p className="text-center text-base font-normal">
          We envision a future where Munisa Resources is synonymous with sustainable and diversified resource development, creating long-term value through responsible practices and forward-thinking strategies. We strive to be a catalyst for positive change, fostering economic prosperity and environmental stewardship.
        </p>
      </div>
      {/* Mission Card */}
      <div className="bg-[#ff7900] rounded-2xl shadow-lg p-8 flex flex-col items-center text-white w-[95%]">
        <svg width="90" height="90" fill="none" viewBox="0 0 48 48" className="mb-2"><circle cx="24" cy="24" r="20" stroke="#181e5a" strokeWidth="3" /><path d="M24 12v13l9 5" stroke="#181e5a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><circle cx="24" cy="24" r="7" stroke="#181e5a" strokeWidth="3" /></svg>
        <h3 className="mt-2 mb-2 text-xl font-bold tracking-wide uppercase">Our Mission</h3>
        <p className="text-center text-base font-normal">
          Our mission is to be a leading integrated resource company, delivering exceptional value to our stakeholders while driving sustainable development in the communities we serve. We aim to achieve this through strategic investments, operational excellence, and innovative solutions that maximize the potential of Zimbabwe's natural resources.
        </p>
      </div>
    </div>
  </div>
);

export default AboutVisionMission;
