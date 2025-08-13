import React from 'react';

const HomeHero: React.FC = () => {
  const heroImage = `${process.env.PUBLIC_URL}/pics/hero.jpg`;
  
  return (
    <div className="relative w-[90%] mx-auto mt-10 h-[90vh] min-h-[400px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 rounded-[15px] overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-[15px]"></div>
      </div>


      
      {/* Bottom Info Bar */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-[90%] max-w-5xl rounded-xl shadow-lg bg-[#f76c07] py-7 px-2 flex justify-center items-center z-20">
        <div className="flex flex-col md:flex-row w-full justify-between items-center text-white font-bold text-sm md:text-base">
          <div className="flex-1 flex items-center justify-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#f76c07] text-xl mr-2">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-5 h-5'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75z' /></svg>
            </span>
            +263 77 562 1980
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 mt-3 md:mt-0">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#f76c07] text-xl mr-2">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-5 h-5'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2.25 2.25 0 002.22 0L21 8' /><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 8v8.25A2.75 2.75 0 0118.25 19H5.75A2.75 2.75 0 013 16.25V8' /></svg>
            </span>
            info@munisaresources.com
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 mt-3 md:mt-0">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#f76c07] text-xl mr-2">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-5 h-5'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 2' /><circle cx='12' cy='12' r='9' stroke='currentColor' strokeWidth='2' fill='none' /></svg>
            </span>
            Mon - Fri: 0900 - 1700 Hrs
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
