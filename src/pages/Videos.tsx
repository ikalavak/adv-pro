
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoUpload from '@/components/VideoUpload';

const Videos = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Property Videos</h1>
        <p className="text-gray-600 mb-8">
          Upload and manage videos of your properties. Showcase virtual tours, property highlights, 
          or neighborhood features to attract potential buyers or renters.
        </p>
        
        <VideoUpload />
      </main>
      
      <Footer />
    </div>
  );
};

export default Videos;
