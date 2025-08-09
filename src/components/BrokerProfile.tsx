
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Mail, User } from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Define a broker type for better type safety
type BrokerData = {
  name: string;
  role: string;
  phone: string;
  email: string;
  description: string;
  imageUrl: string;
};

// Fixed brokers to show in the first row
const fixedBrokers: BrokerData[] = [
  {
    name: "Mesut KAYA",
    role: "Broker Owner",
    phone: "+44 7966 197066",
    email: "mesut.kaya@hotmail.co.uk",
    description: "With years of experience in the London property market, I specialize in helping clients find their perfect homes and investment properties. I'm dedicated to providing exceptional service and making your real estate journey smooth and successful.",
    imageUrl: "/advantage-uploads/01ded356-44af-4ff0-8bfe-eb1640df141d.png"
  },
  {
    name: "Pranaydeep",
    role: "Senior Real Estate Advisor",
    phone: "+44 7825042415",
    email: "pranaydeep@advantageproperties.com",
    description: "Specializing in luxury properties and investment opportunities across London. With a keen eye for detail and extensive market knowledge, I help clients make informed decisions to achieve their real estate goals.",
    imageUrl: "/advantage-uploads/e32e6c8f-e8cd-4fb6-bc45-a373b84ec7af.png"
  }
];

// Scrollable brokers for the second row
const scrollableBrokers: BrokerData[] = [
  {
    name: "Aygun ALIYEVA",
    role: "Strategic Partnerships Director",
    phone: "+90 532 051 26 31",
    email: "av.aygunaliyeva@gmail.com",
    description: "Managing strategic partnerships and international client relations. With extensive experience in property investments across multiple markets, I help connect investors with the right opportunities.",
    imageUrl: "/advantage-uploads/a22529d2-ab83-4a34-b148-ff8fdce631d0.png"
  },
  {
    name: "Anil AKGUL",
    role: "Office Administrator",
    phone: "+44 7535 570 002",
    email: "anilakgul@gmail.com",
    description: "Managing the day-to-day operations of our London office. I ensure that all administrative processes run smoothly, supporting our clients and team members with efficient service and organization.",
    imageUrl: "/advantage-uploads/c2a089f8-995b-4872-a6a8-07b5cd89968e.png"
  },
  {
    name: "Gulper AKGUL",
    role: "Office Administrator",
    phone: "+44 7549 641349",
    email: "fgulperozdemir@gmail.com",
    description: "Supporting our team with administrative expertise and client service coordination. I help ensure that every client interaction is handled with professionalism and attention to detail.",
    imageUrl: "/advantage-uploads/bee5f4a1-7ae3-462a-bd39-6256966ec365.png"
  },
  {
    name: "Vakkas DEDE",
    role: "Sales Associate",
    phone: "+44 7398 827277",
    email: "vakkasdede@yahoo.com",
    description: "Experienced in property sales across Kazakhstan, Kyrgyzstan, Uzbekistan, and London. I specialize in helping international clients find their ideal properties and investments.",
    imageUrl: "/advantage-uploads/1d6a8bbc-22f9-4c16-94bc-46f5058f645a.png"
  },
  {
    name: "Erdogan Sokmen",
    role: "Sales Associate",
    phone: "+90 538 445 45 35",
    email: "erdogansokmen@icloud.com",
    description: "Based in Istanbul, I help clients find properties in Turkey and connect Turkish investors with opportunities in London. With extensive knowledge of both markets, I provide valuable insights for cross-border investments.",
    imageUrl: "/advantage-uploads/2f93df1e-858a-447d-ae22-b1517c3a5ce6.png"
  }
];

const BrokerCard: React.FC<{ broker: BrokerData }> = ({ broker }) => {
  const isMesut = broker.name === "Mesut KAYA";
  const isPranaydeep = broker.name === "Pranaydeep";
  const isAygun = broker.name === "Aygun ALIYEVA";
  const isErdogan = broker.name === "Erdogan Sokmen";
  const isVakkas = broker.name === "Vakkas DEDE";
  
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="bg-advantage-blue/5 relative pb-0">
        <div className="flex flex-col items-center">
          {isMesut || isPranaydeep || isAygun || isErdogan || isVakkas ? (
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-gray-100">
              <img 
                src={broker.imageUrl} 
                alt={`${broker.name} profile`}
                className={`w-full h-full object-cover ${
                  isVakkas ? 'object-top scale-110' : 'object-center'
                }`}
              />
            </div>
          ) : (
            <Avatar className="w-28 h-28 mb-4 bg-advantage-blue/10">
              <AvatarFallback className="text-3xl text-advantage-blue">
                {broker.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          )}
          <h2 className="text-2xl font-bold text-gray-800">{broker.name}</h2>
          <p className="text-md text-advantage-blue font-medium">{broker.role}</p>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4">
        <div className="space-y-3 mb-4">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-advantage-blue" />
            <a href={`tel:${broker.phone}`} className="text-gray-700 hover:text-advantage-blue">
              {broker.phone}
            </a>
          </div>
          
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-advantage-blue" />
            <a href={`mailto:${broker.email}`} className="text-gray-700 hover:text-advantage-blue break-all">
              {broker.email}
            </a>
          </div>
        </div>
        
        <ScrollArea className="h-24">
          <p className="text-gray-700 text-sm">
            {broker.description}
          </p>
        </ScrollArea>
      </CardContent>
      
      <CardFooter className="pt-2 border-t mt-auto">
        <Button asChild size="sm" className="bg-advantage-blue hover:bg-blue-800 transition-all w-full">
          <Link to="/contact">Contact Me</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const BrokerProfile: React.FC = () => {
  const [api, setApi] = useState<any>(null);

  // Create plugin with autoplay options
  const autoplayPlugin = React.useMemo(() => 
    Autoplay({ 
      delay: 4000, // 4 seconds between slides
      stopOnInteraction: false, // continue auto-scrolling even after user interaction
      stopOnMouseEnter: true, // pause when mouse hovers over carousel
    }),
  []);

  return (
    <div className="w-full space-y-8">
      {/* First row with fixed brokers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fixedBrokers.map((broker, index) => (
          <div key={index}>
            <BrokerCard broker={broker} />
          </div>
        ))}
      </div>
      
      {/* Second row with auto-scrolling carousel */}
      <div className="w-full mt-8">
        <h3 className="text-xl font-semibold mb-4 text-center">Our Team Members</h3>
        <Carousel 
          className="w-full" 
          plugins={[autoplayPlugin]} 
          setApi={setApi} 
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="-ml-4">
            {scrollableBrokers.map((broker, index) => (
              <CarouselItem key={index} className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <BrokerCard broker={broker} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default BrokerProfile;
