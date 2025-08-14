import React, { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-6 z-50 bg-[#f76c07] text-white p-3 rounded-full shadow-lg transition-opacity duration-200 ${visible ? 'opacity-100 animate-bounce' : 'opacity-0 pointer-events-none'}`}
      style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.18)' }}
    >
      <KeyboardArrowUpIcon style={{ fontSize: 28 }} />
    </button>
  );
};

export default ScrollToTopButton;
