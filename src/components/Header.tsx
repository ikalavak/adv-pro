
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useMobile from './useMobile';

const Header = () => {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Video Presentation', href: '/video-presentation' },
    { name: 'Properties', href: '/properties' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center w-full md:w-auto justify-between mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <img 
                src="/advantage-uploads/5aa0d1a0-f07b-4ccd-8515-3582cb99c8fc.png" 
                alt="Advantage Properties Logo" 
                className="h-10 w-auto"
              />
              <span className="ml-2 text-lg md:text-xl font-bold">
                <span className="text-advantage-blue">ADVANTAGE</span> 
                <span className="text-advantage-red">Properties</span>
              </span>
            </div>
          </Link>
          
          {isMobile && (
            <button 
              onClick={toggleMenu} 
              className="md:hidden text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          )}
        </div>
        
        <nav className={`${isMobile && !isMenuOpen ? 'hidden' : 'block'} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`block text-gray-800 hover:text-advantage-blue ${
                    location.pathname === item.href ? 'font-semibold text-advantage-blue' : ''
                  }`}
                  onClick={() => isMobile && setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
