
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const allProperties = [
  {
    id: '1',
    title: 'Luxury Apartment in Kingsland',
    price: '£475,000',
    location: 'Hackney, London E8',
    bedrooms: 2,
    bathrooms: 1,
    size: '850 sq ft',
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    type: 'sale' as const
  },
  {
    id: '2',
    title: 'Modern Townhouse with Garden',
    price: '£2,100/month',
    location: 'Dalston, London E8',
    bedrooms: 3,
    bathrooms: 2,
    size: '1200 sq ft',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    type: 'rent' as const
  },
  {
    id: '3',
    title: 'Spacious Family Home',
    price: '£850,000',
    location: 'Stoke Newington, London N16',
    bedrooms: 4,
    bathrooms: 3,
    size: '1800 sq ft',
    imageUrl: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    type: 'sale' as const
  },
  {
    id: '4',
    title: 'Studio Apartment in City Center',
    price: '£1,400/month',
    location: 'Shoreditch, London E1',
    bedrooms: 1,
    bathrooms: 1,
    size: '450 sq ft',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    type: 'rent' as const
  },
  {
    id: '5',
    title: 'Renovated Victorian Terrace House',
    price: '£720,000',
    location: 'Islington, London N1',
    bedrooms: 3,
    bathrooms: 2,
    size: '1150 sq ft',
    imageUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    type: 'sale' as const
  },
  {
    id: '6',
    title: 'Luxury Penthouse with Terrace',
    price: '£3,200/month',
    location: 'Canary Wharf, London E14',
    bedrooms: 2,
    bathrooms: 2,
    size: '1100 sq ft',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    type: 'rent' as const
  }
];

const Properties = () => {
  const [propertyType, setPropertyType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [bedrooms, setBedrooms] = useState<string>("any");
  
  const filteredProperties = allProperties.filter(property => {
    // Filter by property type
    if (propertyType !== "all" && property.type !== propertyType) {
      return false;
    }
    
    // Filter by search query (location or title)
    if (searchQuery && !property.location.toLowerCase().includes(searchQuery.toLowerCase()) && !property.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by bedrooms
    if (bedrooms !== "any" && property.bedrooms !== parseInt(bedrooms)) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Properties</h1>
            <p className="text-gray-600 max-w-3xl">
              Browse our selection of properties for sale and rent across London. Find your perfect home with Advantage Properties.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Filter Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <Input 
                  id="search" 
                  placeholder="Location or property name" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger id="property-type">
                    <SelectValue placeholder="All Properties" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Properties</SelectItem>
                    <SelectItem value="sale">For Sale</SelectItem>
                    <SelectItem value="rent">For Rent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                <Select value={bedrooms} onValueChange={setBedrooms}>
                  <SelectTrigger id="bedrooms">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button 
                  className="w-full bg-advantage-blue hover:bg-blue-800"
                  onClick={() => {
                    setPropertyType("all");
                    setSearchQuery("");
                    setBedrooms("any");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700">
              Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
            </p>
          </div>
          
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No properties found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters to see more results.
              </p>
              <Button 
                onClick={() => {
                  setPropertyType("all");
                  setSearchQuery("");
                  setBedrooms("any");
                }}
                className="bg-advantage-blue hover:bg-blue-800"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Properties;
