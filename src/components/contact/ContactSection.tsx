import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const ContactSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
  <div className="w-[95vw] max-w-4xl min-h-[400px] bg-white rounded-2xl shadow-lg flex flex-col md:flex-row p-10 md:p-16">

        {/* Left: Contact Info */}
        <div className="flex-1 flex flex-col gap-6 pr-0 md:pr-8 justify-center">
          {/* Head Office */}
          <div className="flex items-start gap-3">
            <div className="mt-1"><LocationOnIcon sx={{ fontSize: 32, color: '#bdbdbd' }} /></div>
            <div>
              <div className="text-[#f76c07] font-semibold text-base mb-0.5 text-left">Head Office</div>
              <div className="text-sm text-gray-800 leading-tight text-left">6 Chelmsford Road, Belgravia Unit 11<br />Harare, Zimbabwe</div>
            </div>
          </div>
          {/* Email Us */}
          <div className="flex items-start gap-3">
            <div className="mt-1"><EmailIcon sx={{ fontSize: 32, color: '#bdbdbd' }} /></div>
            <div>
              <div className="text-[#f76c07] font-semibold text-base mb-0.5 text-left">Email Us</div>
              <div className="text-sm text-gray-800 leading-tight text-left">info@darkviolet-reindeer-</div>
            </div>
          </div>
          {/* Call Us */}
          <div className="flex items-start gap-3">
            <div className="mt-1"><CallIcon sx={{ fontSize: 32, color: '#bdbdbd' }} /></div>
            <div>
              <div className="text-[#f76c07] font-semibold text-base mb-0.5 text-left">Call Us</div>
              <div className="text-sm text-gray-800 leading-tight text-left">Phone : +263 77 562 1090</div>
            </div>
          </div>
          {/* Social Media */}
          <div className="mt-2">
            <div className="text-[#f76c07] font-semibold text-base mb-2 text-left">Follow our social media</div>
            <div className="flex gap-3 text-left">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon sx={{ fontSize: 28, color: '#f76c07' }} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon sx={{ fontSize: 28, color: '#f76c07' }} /></a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X"><XIcon sx={{ fontSize: 28, color: '#f76c07' }} /></a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><MusicNoteIcon sx={{ fontSize: 28, color: '#f76c07' }} /></a>
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="flex-1 flex flex-col justify-center mt-8 md:mt-0 md:pl-8">
          <div className="text-[#f76c07] font-bold text-2xl mb-3 text-left" style={{ fontFamily: 'Google Sans' }}>
            Send us a message
          </div>
          <form className="flex flex-col gap-2 w-full">
            <div className="flex gap-2">
              <input type="text" placeholder="Name" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
              <input type="text" placeholder="Company" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Phone" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
              <input type="email" placeholder="Email" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
            </div>
            <input type="text" placeholder="Subject" className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none" />
            <textarea placeholder="Message" className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none min-h-[70px]" />
            <button type="submit" className="mt-2 w-full bg-[#191970] text-white font-semibold rounded-full py-2 text-base hover:bg-[#2e3192] transition-colors duration-150">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
