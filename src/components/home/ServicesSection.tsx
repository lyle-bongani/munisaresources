import React from 'react';
import ConstructionIcon from '@mui/icons-material/Construction';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const services = [
  {
    title: 'Mineral Resource Development',
    image: process.env.PUBLIC_URL + '/pics/Mineral Resource Development.jpg',
    icon: <ConstructionIcon sx={{ fontSize: 48, color: '#ff9800' }} />, // orange
    description: `Exploration, development, and\nmining to unlock Zimbabwe’s\nmineral potential.`,
    link: '#',
  },
  {
    title: 'Agricultural Commodity Trading',
    image: process.env.PUBLIC_URL + '/pics/Agricultural Commodity Trading.jpg',
    icon: <AgricultureIcon sx={{ fontSize: 48, color: '#ff9800' }} />, // orange
    description: `Connecting farmers to global\nmarkets through seamless\nagricultural commodity trade.`,
    link: '#',
  },
  {
    title: 'Value Addition and Processing',
    image: process.env.PUBLIC_URL + '/pics/Value Addition and Processing.png',
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 48, color: '#3f51b5' }} />, // blue
    description: `Enhancing resources through\ncomprehensive value addition\nand processing services.`,
    link: '#',
  },
  {
    title: 'Commodity Service Trading',
    image: process.env.PUBLIC_URL + '/pics/Commodity Service Trading.jpg',
    icon: <ShowChartIcon sx={{ fontSize: 48, color: '#3f51b5' }} />, // blue
    description: `Connecting buyers and sellers\nin the mineral commodity\ntrading industry.`,
    link: '#',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <>
      <div className="w-[90vw] max-w-7xl mx-auto bg-[#f5f6fa] rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#f76c07] mb-2" style={{ fontFamily: 'Google Sans' }}>
          Our Services
        </h2>
        <h3 className="text-lg md:text-2xl font-semibold text-center text-[#1a237e] mb-8" style={{ fontFamily: 'Google Sans' }}>
          End-to-End Resource Management & Trading Solutions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md flex flex-col items-center pb-7 overflow-hidden border border-[#e0e0e0]"
              style={{ minHeight: 420 }}
            >
              <div className="w-full h-[180px] md:h-[200px] flex items-center justify-center overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                  style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                />
              </div>
              <div className="-mt-8 mb-2 bg-white rounded-full border-4 border-[#23398c] shadow flex items-center justify-center" style={{ width: 64, height: 64 }}>
                {service.icon}
              </div>
              <div className="flex flex-col items-center px-4 flex-1">
                <h4 className="text-[16px] font-bold text-center mb-1 text-[#f76c07]" style={{ fontFamily: 'Google Sans' }}>{service.title}</h4>
                <p className="text-sm md:text-base text-center text-gray-800 mb-4 whitespace-pre-line" style={{ fontFamily: 'Google Sans' }}>{service.description}</p>
                <a
                  href={service.link}
                  className="text-[#1a237e] font-semibold text-sm no-underline hover:text-[#f76c07] transition-colors duration-150"
                  style={{ fontFamily: 'Google Sans' }}
                >
                  View Service
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
