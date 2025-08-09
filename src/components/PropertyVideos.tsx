
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PropertyVideos = () => {
  const videos = [
    {
      id: '1',
      title: 'Property Tour - Luxury London Home',
      youtubeId: '6pQuyn6wfGM',
      description: 'Take a virtual tour of this stunning London property'
    },
    {
      id: '2', 
      title: 'Property Tour - Modern Apartment',
      youtubeId: 'RprLj5WmApI',
      description: 'Explore this modern apartment in prime location'
    },
    {
      id: '3',
      title: 'Property Tour - Family Home',
      youtubeId: 'fZ2B_ba7fTw',
      description: 'Discover this perfect family home'
    },
    {
      id: '4',
      title: 'Property Tour - Investment Opportunity',
      youtubeId: 'L6Y-8cr8-Bw',
      description: 'Investment property with great potential'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Property Tour Videos</h2>
        <p className="text-gray-600 mb-8">Watch our virtual property tours to get a feel for these amazing homes</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
              <p className="text-gray-600 text-sm">{video.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PropertyVideos;
