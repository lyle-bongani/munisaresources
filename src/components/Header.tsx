import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Partnership', href: '/partnership' },
  { name: 'Contact Us', href: '/contact' },
];

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header
      className="w-full flex items-center justify-between px-8 py-3 bg-white"
      style={{ fontFamily: 'Google Sans' }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={process.env.PUBLIC_URL + '/images/Munisa-Resources-Logo.webp'}
          alt="Munisa Resources Logo"
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Navigation - Centered */}
      <nav className="flex-1 flex items-center justify-center gap-8">
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

      {/* Contact Us Button */}
      <Link
        to="/contact"
        className="bg-[#f76c07] hover:bg-[#e55c00] text-white font-medium rounded-md px-6 py-2 text-[15px] transition-colors duration-150"
        style={{ fontFamily: 'Google Sans' }}
      >
        Contact Us
      </Link>
    </header>
  );
};

export default Header;