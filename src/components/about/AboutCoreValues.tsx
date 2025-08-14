import React from 'react';

const coreValues = [
  {
    title: 'Sustainability',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#fff"/><circle cx="24" cy="24" r="20" fill="#ff7900"/><path d="M24 32c-4-2-8-6-8-10a8 8 0 0116 0c0 4-4 8-8 10z" fill="#fff" stroke="#181e5a" strokeWidth="2"/></svg>
    ),
    desc: 'We manage resources responsibly.<br />We protect our environment.',
  },
  {
    title: 'Innovation',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#fff"/><circle cx="24" cy="24" r="20" fill="#ff7900"/><path d="M24 14v12m0 0l-4-4m4 4l4-4" stroke="#181e5a" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    desc: 'We use innovative technologies.<br />We create value efficiently.',
  },
  {
    title: 'Integrity',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#fff"/><circle cx="24" cy="24" r="20" fill="#ff7900"/><path d="M24 30c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0v4" stroke="#181e5a" strokeWidth="2"/></svg>
    ),
    desc: 'We uphold ethical standards.<br />We build trust and transparency.',
  },
  {
    title: 'Excellence',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#fff"/><circle cx="24" cy="24" r="20" fill="#ff7900"/><path d="M18 28l6-8 6 8" stroke="#181e5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    desc: 'We pursue operational excellence.<br />We deliver quality services.',
  },
  {
    title: 'Community Focus',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#fff"/><circle cx="24" cy="24" r="20" fill="#ff7900"/><path d="M24 26c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0v4m-6 2c0-2.21 3.58-4 8-4s8 1.79 8 4" stroke="#181e5a" strokeWidth="2"/></svg>
    ),
    desc: 'We empower local communities.<br />We support sustainable growth.',
  },
];

const AboutCoreValues: React.FC = () => (
  <section className="w-full bg-white py-8 px-2 md:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ff7900] mb-6 mt-2">Our Core Values</h2>
    <div className="flex flex-wrap gap-6 justify-center w-full">
      {/* Row 1 */}
      <div className="flex flex-row gap-6 w-full mb-0">
        <CoreValueCard {...coreValues[0]} className="flex-1" />
        <CoreValueCard {...coreValues[1]} className="flex-1" />
      </div>
      {/* Row 2 */}
      <div className="flex flex-row gap-6 w-full mb-0">
        <CoreValueCard {...coreValues[2]} className="flex-1" />
        <CoreValueCard {...coreValues[3]} className="flex-1" />
      </div>
      {/* Row 3 */}
      <div className="flex flex-row gap-6 w-full md:h-[180px]">
        <CoreValueCard {...coreValues[4]} className="flex-1 h-full" />
        <div className="flex-1 invisible" />
      </div>
    </div>
  </section>
);

interface CoreValueCardProps {
  title: string;
  icon: React.ReactNode;
  desc: string;
  className?: string;
}

const CoreValueCard: React.FC<CoreValueCardProps> = ({ title, icon, desc, className }) => (
  <div className={`bg-[#ededf3] rounded-xl shadow-md flex flex-col items-center px-4 py-4 md:px-6 md:py-5 min-h-[100px] h-full ${className ?? ''}`}
    style={{ boxShadow: '0 4px 8px 0 rgba(24,30,90,0.06)' }}>
    <div className="flex flex-col items-center mb-2">
      <div className="bg-white rounded-full p-2 shadow-md border-4 border-[#ff7900] mb-2 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-[#181e5a] text-lg md:text-xl font-bold text-center mt-1 mb-1" style={{textShadow: '0 1px 0 #fff'}}>{title}</span>
    </div>
    <p className="text-center text-[#181e5a] text-base md:text-[17px] font-normal max-w-xs" dangerouslySetInnerHTML={{ __html: desc }} />
  </div>
);

export default AboutCoreValues;
