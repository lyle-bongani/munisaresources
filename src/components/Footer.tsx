import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function Footer() {
  return (
    <footer className="bg-black text-white pt-8 pb-2 px-2 md:px-0" style={{ fontFamily: 'Google Sans' }}>
      {/* Top Row: Logo and Socials */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-2">
        <img src={process.env.PUBLIC_URL + '/pics/footerlogo.png'} alt="Footer Logo" className="h-20 w-20 object-contain" />
        <div className="flex gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#f76c07] rounded-full p-2"><FacebookIcon sx={{ fontSize: 26 }}/></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#f76c07] rounded-full p-2"><InstagramIcon sx={{ fontSize: 26 }}/></a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="bg-[#f76c07] rounded-full p-2"><XIcon sx={{ fontSize: 26 }}/></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bg-[#f76c07] rounded-full p-2"><MusicNoteIcon sx={{ fontSize: 26 }}/></a>
        </div>
      </div>
      <hr className="border-gray-600 mb-6" />
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
        {/* Head Office */}
        <div>
          <div className="font-bold text-lg mb-2">Head Office</div>
          <div className="text-sm text-white/80 leading-tight">6 Chelmsford Road,<br />Belgravia Unit 11, Harare,<br />Zimbabwe</div>
        </div>
        {/* Quick Links */}
        <div>
          <div className="font-bold text-lg mb-2">Quick Links</div>
          <ul className="text-sm text-white/80 space-y-1">
            <li><a href="/privacy-policy" className="hover:text-[#f76c07]">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-[#f76c07]">Term Of Service</a></li>
            <li><a href="/disclaimer" className="hover:text-[#f76c07]">Disclaimer</a></li>
            <li><a href="/credits" className="hover:text-[#f76c07]">Credits</a></li>
          </ul>
        </div>
        {/* Pages */}
        <div>
          <div className="font-bold text-lg mb-2">Pages</div>
          <ul className="text-sm text-white/80 space-y-1">
            <li><a href="/" className="hover:text-[#f76c07]">Home</a></li>
            <li><a href="/about" className="hover:text-[#f76c07]">About Us</a></li>
            <li><a href="/services" className="hover:text-[#f76c07]">Services</a></li>
            <li><a href="/contact" className="hover:text-[#f76c07]">Contact Us</a></li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <div className="font-bold text-lg mb-2">Newsletter</div>
          <div className="text-sm text-white/80 mb-3">Get exclusive news by signing up to our Newsletter.</div>
          <form className="flex flex-col gap-2">
            <input type="email" placeholder="Email" className="rounded-full px-4 py-2 text-black text-sm focus:outline-none" />
            <button type="submit" className="bg-[#f76c07] hover:bg-[#ff9800] text-white font-semibold rounded-full py-2 flex items-center justify-center gap-2 transition-colors duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" /></svg>
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <hr className="border-gray-600 mb-4" />
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-white/70 gap-2 pb-2">
        <div>
          Copyright © 2025, All rights reserved. designed by <a href="http://spemedia.co.zw/" target="_blank" rel="noopener noreferrer" className="text-[#f76c07] hover:underline">SpeMedia</a>
        </div>
        <div className="flex gap-6">
          <a href="/terms-and-conditions" className="hover:text-[#f76c07]">Terms and conditions</a>
          <a href="/privacy-policy" className="hover:text-[#f76c07]">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}


export default Footer;