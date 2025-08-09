
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-700 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              OUR PROJECTS
            </h1>
            <p className="text-xl text-purple-200 mb-8">Premium Developments in London</p>
          </div>
        </div>

        {/* TwelveTrees Park Bilgi Formu Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                TWELVETREES PARK
              </h2>
              <p className="text-xl text-gray-600 mb-8">LONDON E16</p>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                BILGI FORMU
              </h3>
            </div>
            
            <div className="mb-16">
              <img 
                src="/advantage-uploads/29ee5b72-590e-4f11-8f89-d0a5e1b0bff0.png" 
                alt="TwelveTrees Park Development Overview" 
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Project Information and Statistics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="/advantage-uploads/f1923f37-2126-4afe-9f5b-a72973c1232e.png" 
                  alt="TwelveTrees Park Information and Statistics" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div>
                <img 
                  src="/advantage-uploads/04ac58b6-e5d5-4de2-bfde-8ab5a71e8039.png" 
                  alt="TwelveTrees Park Development Details" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Location and Transport */}
            <div className="mb-16">
              <img 
                src="/advantage-uploads/9e997e03-0ed8-4ab0-a8b1-ebe941c79c67.png" 
                alt="TwelveTrees Park Location and Transport Links" 
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Interior Design and Quality */}
            <div className="mb-16">
              <img 
                src="/advantage-uploads/1c2d1623-4dcf-43f5-a487-c14f776995ff.png" 
                alt="TwelveTrees Park Interior Design and Quality" 
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <hr className="border-gray-300" />
          </div>
        </div>

        {/* The Redwood Project Section */}
        <section className="py-16 bg-gradient-to-br from-purple-900 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              TWELVETREES PARK
            </h1>
            <p className="text-xl text-purple-200 mb-8">LONDON E16</p>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                THE <span className="block">REDWOOD</span>
              </h2>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/advantage-uploads/da08bfe0-154a-4551-ab81-edbb9d865084.png" 
                  alt="The Redwood Building" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Welcome to<br />
                  <span className="text-yellow-600">The Redwood</span>
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Twelve Trees Park is an exciting new development in the heart of vibrant East London. Discover beautiful new homes surrounded by greenery, with exclusive amenities – all just minutes from the City, Canary Wharf, Stratford and the West End.
                  </p>
                  <p>
                    Named after the tallest trees in the world, 'The Redwood' is one of the highest buildings in Twelve Trees Park, boasting 34 storeys. With a striking design and a timeless bronze exterior, this collection of suites, 1, 2 & 3 bedroom apartments truly soars to new heights.
                  </p>
                  <p>
                    Everything about Twelve Trees Park is dedicated to your convenience and wellbeing. Beautifully landscaped gardens and open parkland occupy just under half of the development, creating a green and peaceful setting for you to unwind, just minutes from the fast pace of the City.
                  </p>
                  <p className="font-semibold text-gray-800">
                    Welcome to your connected life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  <span className="text-yellow-600">Designed</span><br />
                  with parks<br />
                  and open<br />
                  spaces<br />
                  at its heart
                </h2>
                <p className="text-gray-600 mb-6">
                  With 12 acres of landscaping covering just under half of the development, Twelve Trees Park provides a beautiful scale of landscaped open gardens and courtyards filled with mature trees and flowers.
                </p>
              </div>
              <div>
                <img 
                  src="/advantage-uploads/96d85dff-9eeb-4a74-ba58-3490aefef956.png" 
                  alt="Site Plan" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skyline Views */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/advantage-uploads/ad113fe1-cf68-4625-af1f-c58c13630170.png" 
                  alt="London Skyline Views" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Iconic London<br />
                  <span className="text-yellow-600">skyline views</span>
                </h2>
                <p className="text-gray-600">
                  Standing tall above the London skyline, The Redwood is 34 storeys, and includes suites, 1, 2, & 3 bedroom apartments and a collection of penthouses, all with high specification luxury interiors. Set right in the dynamic heart of Twelve Trees Park, next to the Cordova Club residents facilities, the building is perfectly placed for West Ham station and access to all that London has to offer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A flourishing place<br />
              to call home
            </h2>
            <div className="mt-12">
              <img 
                src="/advantage-uploads/52a21b01-2148-4a0f-a4df-b338e88503d5.png" 
                alt="Development Overview" 
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Green Space */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/advantage-uploads/7ef24800-1eab-47b0-bff1-bf59783007d7.png" 
                  alt="Green Spaces" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-yellow-600">12 acres of</span><br />
                  green space
                </h2>
                <div className="space-y-4 text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-800">
                    The aspiration for a truly unique green space
                  </h3>
                  <p>
                    Twelve Trees Park celebrates the heritage and distinctive character of the area. Taking the sites context, history and culture as our reference points, we have created open spaces and introduced play areas with structures that reflect local history.
                  </p>
                  <p>
                    Beautiful, sustainable water features glitter among the green hedges and flower beds, while 'urban pioneer' plant species have been strategically placed to establish new ecosystems around the park.
                  </p>
                  <div className="bg-yellow-50 p-6 rounded-lg mt-8">
                    <blockquote className="text-lg italic text-gray-800">
                      "Twelve Trees Park will be an amazing place to call home with a world-class park at your doorstep. We are making space for nature to return to this significant site on the Lea Valley, creating a unique destination for both people and wildlife."
                    </blockquote>
                    <cite className="text-sm text-gray-600 mt-2 block">
                      James East - Partner, LDA Landscape Design
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  World class<br />
                  <span className="text-teal-400">residents'</span><br />
                  <span className="text-teal-400">facilities</span>
                </h2>
                <div className="space-y-3 text-gray-600">
                  <p>The exclusive Cordova Club provides Twelve Trees Park residents with access to a range of residents only facilities including:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• 24 hour Concierge</li>
                    <li>• Residents Lounge</li>
                    <li>• Fully equipped gym</li>
                    <li>• Residents Business Lounge</li>
                    <li>• Screening Room</li>
                    <li>• Wellness Spa*</li>
                  </ul>
                  <p className="text-sm">*Future Phase</p>
                </div>
              </div>
              <div>
                <img 
                  src="/advantage-uploads/9d6c35c3-b613-4282-a4dc-3092bd2ec916.png" 
                  alt="Residents Facilities" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Interior Design */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                <span className="text-yellow-600">Inspired</span><br />
                interior<br />
                design
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="/advantage-uploads/bf126a1b-2f19-48d9-bad6-bdf63e21c641.png" 
                  alt="Modern Interior Design" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <blockquote className="text-lg text-gray-600 mb-6">
                  "Elegant and minimalist finishes to reflect and compliment the Twelve Trees Park lifestyle. Luxury and modern east London living."
                </blockquote>
                <cite className="text-sm text-gray-500">
                  Lauren Willis, interior designer at Berkeley Homes
                </cite>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Modern, fresh interiors</h3>
                  <p className="text-gray-600">
                    Elegant and minimalist interiors at Twelve Trees Park are designed and crafted from enduring materials that will age beautifully. Engineered flooring, porcelain tiles, kitchen units in subtle, timeless colours; contemporary taps and sanitaryware. All finished to Berkeley's high standard of quality and attention to detail.
                  </p>
                  <p className="text-gray-600 mt-4">
                    Three stylish finishes are available at The Redwood
                  </p>
                </div>
              </div>
            </div>

            {/* Style Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-yellow-600 mb-4">Willow</h3>
                <p className="text-gray-600 mb-6">
                  Timeless, minimalist and classic. If those words describe your ideal interiors, Willow is an excellent choice. The crisp colour scheme creates a sense of space and light within the home. It's also the perfect blank canvas for you to leave your mark, as it pairs with a variety of design styles and complementary colours.
                </p>
                <img 
                  src="/advantage-uploads/cbad4a38-6a77-4e55-8b90-626cb9d2cfe9.png" 
                  alt="Willow Style Interior" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">Forest</h3>
                <p className="text-gray-600 mb-6">
                  Welcome to your private oasis. Inspired by nature, this warm, earthy green makes every interior cosy and inviting. Forest green works beautifully with many other colours, including earthy tones like brown and beige, as well as contrasting shades such as gold, mustard, or coral. The complementary bathroom design features gorgeous emerald tiles.
                </p>
                <img 
                  src="/advantage-uploads/3ebc6f4e-cb03-48bb-b3aa-d035aa679565.png" 
                  alt="Forest Style Interior" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">Ebony</h3>
                <p className="text-gray-600 mb-6">
                  The beige and ebony colour combination is boldly contemporary, with a palpable air of luxury. The kitchen feels sleek, yet full of character at the same time. And the black marble tile with gold veining in the bathroom truly delivers the wow factor.
                </p>
                <img 
                  src="/advantage-uploads/dd9930df-ed19-435c-91be-133b13f78e84.png" 
                  alt="Ebony Style Interior" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Specification</h2>
              <p className="text-lg text-gray-300 mb-8">
                At Berkeley, we are committed to creating great places where people love to live, work and relax. Where the homes are light-filled, adaptable and finished to very high standards.
              </p>
            </div>
            
            <div className="mb-16">
              <img 
                src="/advantage-uploads/52c0fa37-3a2a-4bcd-ba9a-4544d9e7bb4e.png" 
                alt="Detailed Specifications" 
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Floorplates */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Floorplates</h2>
              <p className="text-lg text-gray-600 mb-8">
                Discover the variety of apartment layouts available in The Redwood
              </p>
            </div>
            
            <div className="mb-16">
              <img 
                src="/advantage-uploads/2c3805c7-534e-4c25-80ba-4d84ab5e2ad6.png" 
                alt="Building Floorplates" 
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Apartment Types */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Apartment Types</h2>
              <p className="text-lg text-gray-600 mb-8">
                From studio suites to spacious three-bedroom apartments, find your perfect home
              </p>
            </div>
            
            {/* One Bedroom Layouts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="/advantage-uploads/49f11ccf-3bc6-472a-87e9-14983d56b1f1.png" 
                  alt="One Bedroom Suite and Type 1" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div>
                <img 
                  src="/advantage-uploads/54d53da9-9238-4a7d-ab44-8fd75914c23e.png" 
                  alt="Premium One Bedroom Type 2 and Type 4" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="/advantage-uploads/5c180b68-7b5a-4358-bcdd-9c13a13cdd53.png" 
                  alt="Premium One Bedroom Type 5 and Type 6" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div>
                <img 
                  src="/advantage-uploads/d6178c59-8e40-4495-a902-b83deb34321e.png" 
                  alt="One Bedroom Type 7 and Two Bedroom Type 1" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Two Bedroom Layouts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="/advantage-uploads/9adcc80e-1416-4779-b134-7e3119e797c7.png" 
                  alt="Two Bedroom Type 2 and Type 4" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div>
                <img 
                  src="/advantage-uploads/29d76b1f-742c-40c2-8b4c-dad0b96bba81.png" 
                  alt="Two Bedroom Type 4B and Three Bedroom Type 1" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Building Exceptional Places */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <img 
                src="/advantage-uploads/e3937334-fadf-4dd0-8153-f1c8ff8bc3e3.png" 
                alt="Building Exceptional Places" 
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Designed for Life */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <img 
                src="/advantage-uploads/29a4dd59-d92f-445e-ac6d-e9cf423d8906.png" 
                alt="Designed for Life" 
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <img 
                src="/advantage-uploads/aff69a39-c864-461f-a112-ef1cd6696dfb.png" 
                alt="Sustainability at Twelve Trees Park" 
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Customer Service */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <img 
                src="/advantage-uploads/f727586c-7a4d-49a4-b288-4cdd391de347.png" 
                alt="With You Every Step of the Way" 
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* The Berkeley Difference */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <img 
                src="/advantage-uploads/8a15ab34-8acd-4710-a36c-4a580f9b5a14.png" 
                alt="The Berkeley Difference" 
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <img 
                src="/advantage-uploads/dbc2ca43-8d28-48cc-beb6-a42ee82a0cac.png" 
                alt="Contact Us Information" 
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Our Projects?</h2>
            <p className="text-gray-300 mb-8">
              Contact us today to learn more about TwelveTrees Park developments and arrange a viewing.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="/properties" 
                className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Properties
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
