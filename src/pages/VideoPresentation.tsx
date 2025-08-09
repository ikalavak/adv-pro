
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const VideoPresentation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Property Presentation</h1>
            <p className="text-gray-600 max-w-3xl">
              Watch our detailed property presentation starting from the key highlights.
            </p>
          </div>
        </div>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/iTd48A5ZYh0?start=2470&autoplay=1&mute=1"
                  title="Property Presentation"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Property Presentation Highlights</h2>
                <p className="text-gray-600">
                  This presentation covers the key features and benefits of our featured properties, 
                  starting directly from the most important highlights at 41:10.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VideoPresentation;
