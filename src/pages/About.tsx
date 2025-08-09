
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrokerProfile from '@/components/BrokerProfile';
import PropertyVideos from '@/components/PropertyVideos';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">About Advantage Properties</h1>
            <p className="text-gray-600 max-w-3xl">
              Dedicated to providing exceptional real estate services in London and surrounding areas.
            </p>
          </div>
        </div>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <PropertyVideos />
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  At Advantage Properties, our mission is to help our clients achieve their real estate goals through expert guidance, personalized service, and integrity in every transaction.
                </p>
                <p className="text-gray-700 mb-4">
                  We believe that finding the right property is more than just a transaction—it's about finding a place to call home, build wealth, or grow your business.
                </p>
                <p className="text-gray-700">
                  With our deep knowledge of the London property market and commitment to excellence, we aim to make your real estate journey seamless and successful.
                </p>
              </div>
              
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Advantage Properties?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-advantage-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-700">Local market expertise and insights</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-advantage-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-700">Personalized service tailored to your needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-advantage-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-700">Professional negotiation for the best deals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-advantage-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-700">Comprehensive property marketing strategies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-advantage-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-700">Transparent communication throughout the process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
            <BrokerProfile />
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Work Together?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Whether you're looking to buy, sell, or rent, I'm here to provide expert guidance and support throughout your real estate journey.
            </p>
            <Button asChild className="bg-advantage-blue hover:bg-blue-800">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
