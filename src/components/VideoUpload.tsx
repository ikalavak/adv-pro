
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Play, Pause } from 'lucide-react';

type VideoType = {
  id: string;
  title: string;
  url: string;
};

const VideoUpload = () => {
  // Pre-loaded videos - replace these URLs with your actual video URLs
  const [videos] = useState<VideoType[]>([
    {
      id: "1",
      title: "Property Tour Video 1",
      url: "YOUR_VIDEO_URL_1_HERE" // Replace with your video URL
    },
    {
      id: "2", 
      title: "Property Tour Video 2",
      url: "YOUR_VIDEO_URL_2_HERE" // Replace with your video URL
    },
    {
      id: "3",
      title: "Property Tour Video 3", 
      url: "YOUR_VIDEO_URL_3_HERE" // Replace with your video URL
    },
    {
      id: "4",
      title: "Property Tour Video 4",
      url: "YOUR_VIDEO_URL_4_HERE" // Replace with your video URL
    }
  ]);

  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);

  const togglePlay = (videoId: string) => {
    const video = document.getElementById(videoId) as HTMLVideoElement;
    
    if (currentPlaying && currentPlaying !== videoId) {
      const currentVideo = document.getElementById(currentPlaying) as HTMLVideoElement;
      if (currentVideo) {
        currentVideo.pause();
      }
    }

    if (video.paused) {
      video.play();
      setCurrentPlaying(videoId);
    } else {
      video.pause();
      setCurrentPlaying(null);
    }
  };

  return (
    <div className="space-y-8">
      {videos.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Your Videos ({videos.length})</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden">
                    <div className="relative">
                      <video
                        id={video.id}
                        className="w-full h-56 object-cover"
                        src={video.url}
                        onEnded={() => setCurrentPlaying(null)}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button 
                          variant="secondary" 
                          size="icon" 
                          className="bg-white/70 hover:bg-white"
                          onClick={() => togglePlay(video.id)}
                        >
                          {currentPlaying === video.id ? <Pause /> : <Play />}
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium truncate">{video.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
