
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-gray-900 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          opacity: "0.5"
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className={`max-w-lg transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Property</h1>
          <p className="text-xl mb-8">
            Professional real estate services with Mesut Kaya, Broker Owner at Advantage Properties
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-advantage-blue hover:bg-blue-800 text-white animate-pulse">
              <Link to="/properties">Browse Properties</Link>
            </Button>
            <Button asChild variant="outline" className="bg-white text-advantage-blue hover:bg-gray-100">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
