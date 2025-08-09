
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import BrokerProfile from '@/components/BrokerProfile';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Featured Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                FEATURED PROJECT
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8">
                TWELVETREES PARK
              </h3>
              <p className="text-xl text-gray-600 mb-8">Premium Development in London E16</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/advantage-uploads/da08bfe0-154a-4551-ab81-edbb9d865084.png" 
                  alt="TwelveTrees Park - The Redwood Building" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="text-gray-800">
                <h4 className="text-2xl md:text-3xl font-bold mb-6">
                  Welcome to<br />
                  <span className="text-advantage-blue">The Redwood</span>
                </h4>
                <div className="space-y-4">
                  <p>
                    Twelve Trees Park is an exciting new development in the heart of vibrant East London. Discover beautiful new homes surrounded by greenery, with exclusive amenities – all just minutes from the City, Canary Wharf, Stratford and the West End.
                  </p>
                  <p>
                    Named after the tallest trees in the world, 'The Redwood' is one of the highest buildings in Twelve Trees Park, boasting 34 storeys with suites, 1, 2 & 3 bedroom apartments.
                  </p>
                  <div className="pt-4">
                    <Button asChild className="bg-advantage-blue hover:bg-blue-700 text-white">
                      <Link to="/projects">Learn More About Our Projects</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Highlights */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose TwelveTrees Park?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src="/advantage-uploads/7ef24800-1eab-47b0-bff1-bf59783007d7.png" 
                    alt="12 Acres of Green Space" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">12 Acres of Green Space</h3>
                <p className="text-gray-600">
                  Beautiful landscaped gardens and open parkland covering just under half of the development.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src="/advantage-uploads/ad113fe1-cf68-4625-af1f-c58c13630170.png" 
                    alt="London Skyline Views" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Iconic London Views</h3>
                <p className="text-gray-600">
                  Standing 34 storeys tall with breathtaking views of the London skyline from high-specification luxury apartments.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src="/advantage-uploads/9d6c35c3-b613-4282-a4dc-3092bd2ec916.png" 
                    alt="World Class Facilities" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">World Class Facilities</h3>
                <p className="text-gray-600">
                  Exclusive Cordova Club with 24-hour concierge, gym, residents lounge, and wellness spa.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Meet Our Team</h2>
            
            <div className="flex justify-center">
              <BrokerProfile />
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-advantage-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Property?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're looking to buy, sell, or rent, I'm here to guide you through every step of the process.
            </p>
            <Button asChild className="bg-white text-advantage-blue hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              <Link to="/contact">Contact Me Today</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
