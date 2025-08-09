
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactInfo from '@/components/ContactInfo';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import NotFound from './NotFound';

// Mock properties data (in a real app, this would be fetched from an API)
const propertiesData = [
  {
    id: '1',
    title: 'Luxury Apartment in Kingsland',
    price: '£475,000',
    location: 'Hackney, London E8',
    bedrooms: 2,
    bathrooms: 1,
    size: '850 sq ft',
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    type: 'sale',
    description: 'This stunning luxury apartment is located in the heart of Kingsland, offering modern living in a vibrant area of East London. The property features a spacious open-plan kitchen and living area, two well-proportioned bedrooms, and a stylish bathroom. High-quality finishes throughout with wooden flooring, integrated appliances, and plenty of natural light. The building has secure entry and the apartment comes with a balcony overlooking the city.',
    features: [
      'Open-plan kitchen and living area',
      'Private balcony',
      'Wooden flooring',
      'Integrated appliances',
      'Secure entry system',
      'Bike storage',
      'Close to transport links'
    ]
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
    type: 'rent',
    description: 'A beautiful modern townhouse in the popular area of Dalston. This property offers three bedrooms, two bathrooms, and a private garden. The ground floor features a spacious kitchen-diner leading to the garden, perfect for entertaining. The first floor has a large living room and one bedroom, while the second floor houses two further bedrooms and a family bathroom. Excellently located for transport links and local amenities.',
    features: [
      'Private garden',
      'Spacious kitchen-diner',
      'Modern fixtures and fittings',
      'Large living room',
      'Close to Dalston Junction station',
      'Near shops and restaurants',
      'Available furnished'
    ]
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
    type: 'sale',
    description: 'An exceptional four-bedroom family home in the desirable area of Stoke Newington. The property has been recently renovated to a high standard while maintaining its period features. It offers a beautiful double reception room, a large eat-in kitchen with high-end appliances that opens onto a landscaped garden. Upstairs are four generously sized bedrooms and three bathrooms. The property benefits from excellent natural light throughout and is ideally located for schools, parks, and transport links.',
    features: [
      'Period features',
      'Double reception room',
      'High-end kitchen',
      'Landscaped garden',
      'Excellent natural light',
      'Close to schools and parks',
      'Good transport links',
      'Chain-free'
    ]
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
    type: 'rent',
    description: 'A stylish studio apartment in the heart of trendy Shoreditch. This modern space features a well-designed open-plan layout with a fully fitted kitchen, sleeping area, and living space. The apartment benefits from floor-to-ceiling windows providing excellent natural light, contemporary fixtures, and a sleek bathroom. The building offers a communal roof terrace with stunning views of the city. Perfectly located for the vibrant nightlife, restaurants, and creative businesses of East London.',
    features: [
      'Open-plan layout',
      'Floor-to-ceiling windows',
      'Modern fixtures',
      'Communal roof terrace',
      'City views',
      'Close to restaurants and bars',
      'Excellent transport links',
      'Available furnished'
    ]
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
    type: 'sale',
    description: 'A beautifully renovated Victorian terrace house in the popular area of Islington. This property offers the perfect blend of period features and modern design. The ground floor comprises a front reception room with original fireplace, and an extended kitchen-diner with bi-fold doors leading to a south-facing garden. Upstairs are three double bedrooms and two elegant bathrooms. The property has been finished to an exceptional standard throughout, with high ceilings, restored cornicing, and wooden flooring.',
    features: [
      'Period features',
      'Original fireplace',
      'Extended kitchen-diner',
      'Bi-fold doors',
      'South-facing garden',
      'High ceilings',
      'Wooden flooring',
      'Close to Angel station'
    ]
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
    type: 'rent',
    description: 'An exclusive penthouse apartment in a prestigious development in Canary Wharf. This luxury property features two double bedrooms, two bathrooms, and a spacious open-plan living area with floor-to-ceiling windows offering spectacular views of the London skyline. The apartment boasts high-quality finishes throughout, including a fully integrated kitchen with premium appliances. The highlight is the large private terrace perfect for entertaining. Residents benefit from a 24-hour concierge service, gym, and swimming pool.',
    features: [
      'Private terrace',
      'Spectacular views',
      'Premium appliances',
      'Floor-to-ceiling windows',
      '24-hour concierge',
      'Residents gym',
      'Swimming pool',
      'Secure parking available'
    ]
  }
];

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = propertiesData.find(p => p.id === id);
  
  if (!property) {
    return <NotFound />;
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link to="/properties" className="text-advantage-blue hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Properties
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img 
                    src={property.imageUrl} 
                    alt={property.title}
                    className="w-full h-96 object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${property.type === 'sale' ? 'bg-advantage-red' : 'bg-advantage-blue'}`}>
                    For {property.type === 'sale' ? 'Sale' : 'Rent'}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{property.title}</h1>
                  <p className="text-advantage-blue font-bold text-2xl mb-4">{property.price}</p>
                  
                  <div className="flex items-center mb-6 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{property.location}</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center border-y py-4 mb-6">
                    <div>
                      <div className="text-gray-600">Bedrooms</div>
                      <div className="font-semibold text-lg">{property.bedrooms}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Bathrooms</div>
                      <div className="font-semibold text-lg">{property.bathrooms}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Size</div>
                      <div className="font-semibold text-lg">{property.size}</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">Description</h2>
                    <p className="text-gray-700">{property.description}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {property.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-advantage-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactInfo />
              
              <div className="mt-8 bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Arrange a Viewing</h3>
                <p className="text-gray-700 mb-6">
                  Interested in this property? Contact Mesut Kaya to arrange a viewing or request more information.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full bg-advantage-blue hover:bg-blue-800">
                    <Link to="/contact">Request Information</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:+447966197066">Call Directly</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
