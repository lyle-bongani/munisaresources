import React from 'react';

const navLinks = [
  { name: 'Home', href: '#', active: true },
  { name: 'About Us', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Partnership', href: '#' },
  { name: 'Contact Us', href: '#' },
];

const Header: React.FC = () => {
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
          <a
            key={link.name}
            href={link.href}
            className={
              link.active
                ? 'text-[#ff9800] font-medium text-[15px]'
                : 'text-gray-700 hover:text-[#ff9800] transition-colors duration-150 text-[15px]'
            }
            style={{ fontFamily: 'Google Sans' }}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Contact Us Button */}
      <button
        className="bg-[#f76c07] hover:bg-[#e55c00] text-white font-medium rounded-md px-6 py-2 text-[15px] transition-colors duration-150"
        style={{ fontFamily: 'Google Sans' }}
        type="button"
      >
        Contact Us
      </button>
    </header>
  );
};

export default Header;