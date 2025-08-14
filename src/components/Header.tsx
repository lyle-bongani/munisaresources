import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Partnership', href: '/partnership' },
  { name: 'Contact Us', href: '/contact' },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="w-full flex items-center justify-between px-4 md:px-8 py-3 bg-white relative z-30"
      style={{ fontFamily: 'Google Sans' }}
    >
      {/* Logo */}
      <div className="flex items-center z-20">
        <img
          src={process.env.PUBLIC_URL + '/images/Munisa-Resources-Logo.webp'}
          alt="Munisa Resources Logo"
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
        {navLinks.map(link => (
          <Link
            key={link.name}
            to={link.href}
            className={
              location.pathname === link.href
                ? 'text-[#ff9800] font-medium text-[15px]'
                : 'text-gray-700 hover:text-[#ff9800] transition-colors duration-150 text-[15px]'
            }
            style={{ fontFamily: 'Google Sans' }}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Desktop Contact Us Button */}
      <Link
        to="/contact"
        className="hidden md:inline-block bg-[#f76c07] hover:bg-[#e55c00] text-white font-medium rounded-md px-6 py-2 text-[15px] transition-colors duration-150"
        style={{ fontFamily: 'Google Sans' }}
      >
        Contact Us
      </Link>

      {/* Hamburger Icon on Mobile */}
      <button
        className="md:hidden flex items-center justify-center ml-auto z-20"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <CloseIcon sx={{ fontSize: 32, color: '#f76c07' }} /> : <MenuIcon sx={{ fontSize: 32, color: '#f76c07' }} />}
      </button>

      {/* Mobile Nav Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-10" onClick={() => setMenuOpen(false)}></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-200 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        tabIndex={-1}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col items-center mt-20 gap-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className={
                location.pathname === link.href
                  ? 'text-[#ff9800] font-medium text-lg'
                  : 'text-gray-700 hover:text-[#ff9800] transition-colors duration-150 text-lg'
              }
              style={{ fontFamily: 'Google Sans' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-[#f76c07] hover:bg-[#e55c00] text-white font-medium rounded-md px-6 py-2 text-lg transition-colors duration-150 mt-4"
            style={{ fontFamily: 'Google Sans' }}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;