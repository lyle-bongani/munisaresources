import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Tooltip from '@mui/material/Tooltip';

const whatsappNumber = '263775621090'; // change to your number if needed
const whatsappMessage = encodeURIComponent('Hello Munisa Resources! I would like to know more.');
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const WhatsAppFloatingButton: React.FC = () => (
  <Tooltip title="Chat with us on WhatsApp!" placement="left" arrow>
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg flex items-center justify-center p-3 transition-colors duration-200 transform transition-transform duration-300 animate-pulse hover:animate-none group-hover:scale-110"
      style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.18)' }}
    >
      <WhatsAppIcon style={{ fontSize: 32 }} />
    </a>
  </Tooltip>
);

export default WhatsAppFloatingButton;
