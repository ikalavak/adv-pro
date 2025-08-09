
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <Phone className="h-5 w-5 mr-3 text-advantage-blue flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-gray-600 font-medium">Phone</p>
            <a href="tel:+447966197066" className="text-gray-800 hover:text-advantage-blue">
              +44 7966 197066
            </a>
          </div>
        </li>
        <li className="flex items-start">
          <Mail className="h-5 w-5 mr-3 text-advantage-blue flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-gray-600 font-medium">Email</p>
            <a href="mailto:mesut.kaya@hotmail.co.uk" className="text-gray-800 hover:text-advantage-blue break-all">
              mesut.kaya@hotmail.co.uk
            </a>
          </div>
        </li>
        <li className="flex items-start">
          <MapPin className="h-5 w-5 mr-3 text-advantage-blue flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-gray-600 font-medium">Office</p>
            <address className="not-italic text-gray-800">
              101 Kingsland High Street<br />
              London, E8 2PB
            </address>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
