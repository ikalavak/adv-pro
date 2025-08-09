
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Advantage Properties</h3>
            <p className="text-gray-600 mb-4">
              Professional real estate services for buying, selling, and renting properties.
            </p>
            <div className="flex items-center">
              <img 
                src="/advantage-uploads/5aa0d1a0-f07b-4ccd-8515-3582cb99c8fc.png" 
                alt="Advantage Properties Logo" 
                className="h-8 w-auto"
              />
              <span className="ml-2 font-bold">
                <span className="text-advantage-blue">ADVANTAGE</span> 
                <span className="text-advantage-red">Properties</span>
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-advantage-blue">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-600 hover:text-advantage-blue">Properties</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-advantage-blue">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-advantage-blue">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-advantage-blue flex-shrink-0 mt-0.5" />
                <a href="tel:+447966197066" className="text-gray-600 hover:text-advantage-blue">+44 7966 197066</a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-advantage-blue flex-shrink-0 mt-0.5" />
                <a href="mailto:advantagepropertiesestate@gmail.com" className="text-gray-600 hover:text-advantage-blue break-all">
                  advantagepropertiesestate@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-advantage-blue flex-shrink-0 mt-0.5" />
                <address className="not-italic text-gray-600">
                  101 Kingsland High Street<br />
                  London, E8 2PB
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Advantage Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
