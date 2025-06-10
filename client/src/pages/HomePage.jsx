import { Link } from 'react-router-dom';
import PropertyCard from '@/components/property/PropertyCard';
import { sampleProperties, featuredCities } from '../data/sampleData';
import {
  Home,
  Building,
  Users,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import Hero from '@/components/layout/Hero';
import { Card } from "@/components/ui/card"
import {
  TypographyBlockquote,
  TypographyH2,
  TypographyH4,
  TypographyMuted,
  TypographyP,
  TypographySmall
} from '@/custom/Typography';

const services = [
  {
    icon: 'Home',
    title: 'Buy a Home',
    desc: 'Find your place with immersive photos and most listings.',
    link: '/search?type=buy',
    linkText: 'Browse Homes',
  },
  {
    icon: 'Building',
    title: 'Rent a Home',
    desc: 'Seamless experience from search to rent payment.',
    link: '/search?type=rent',
    linkText: 'Find Rentals',
  },
  {
    icon: 'Users',
    title: 'Sell a Home',
    desc: 'We help you navigate a successful home sale.',
    link: '/sell',
    linkText: 'Sell Your Home',
  },
];

const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Mumbai',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    text: 'SpacesWala.com made finding my dream apartment so easy. The filters are intuitive and the virtual tours saved me so much time!',
  },
  {
    name: 'Priya Patel',
    location: 'Bangalore',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    text: 'I sold my property within a month of listing it on SpacesWala.com. The process was smooth and the team was very supportive.',
  },
  {
    name: 'Vikram Singh',
    location: 'Delhi',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    text: 'The loan calculator and EMI tools helped me plan my finances better. Thanks to SpacesWala.com, I\'m now a proud homeowner!',
  },
];

const iconMap = {
  Home: <Home className="w-8 h-8 text-blue-600" />,
  Building: <Building className="w-8 h-8 text-blue-600" />,
  Users: <Users className="w-8 h-8 text-blue-600" />,
};

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Properties */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <TypographyH2>
              Featured Properties
            </TypographyH2>
            <Link to="/search" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
              View All <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sampleProperties.slice(0, 8).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <TypographyH2>
            Find Properties in Popular Cities
          </TypographyH2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {featuredCities?.map((city) => (
              <Link key={city?.id} to={`/search?city=${city?.name}`} className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                  <div className="h-32 overflow-hidden">
                    <img
                      src={city?.image}
                      alt={city?.name}
                      loading='lazy'
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 space-y-1 bg-white">
                    <TypographySmall>{city?.name}</TypographySmall>
                    <TypographyMuted>{city?.propertyCount}+ Properties</TypographyMuted>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <TypographyH2 className="font-bold text-center mb-8">
            Our Services
          </TypographyH2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {iconMap[service.icon]}
                </div>
                <TypographyH4>{service?.title}</TypographyH4>
                <TypographyMuted>{service.desc}</TypographyMuted>
                <Link to={service.link} className="inline-flex mt-2 items-center text-blue-600 font-medium hover:text-blue-800">
                  {service.linkText} <ArrowRight size={16} className="ml-1" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <TypographyH2 className="font-bold text-center mb-8">
            What Our Customers Say
          </TypographyH2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((review, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    loading='lazy'
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <TypographySmall>{review?.name}</TypographySmall>
                    <TypographyMuted>{review?.location}</TypographyMuted>
                  </div>
                </div>
                <TypographyBlockquote className="text-muted-foreground">"{review?.text}"</TypographyBlockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-4">
              <TypographyH2>
                Download the spaceswala.com App
              </TypographyH2>
              <TypographyP>
                Get the full experience on the go. Search properties, connect with agents, and manage your favorite listings all from your phone.
              </TypographyP>
              <div className="flex gap-4">
                <a href="#">
                  <img
                    loading='lazy'
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-12"
                  />
                </a>
                <a href="#">
                  <img
                    loading='lazy'
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-12"
                  />
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <img
                loading='lazy'
                src="https://images.pexels.com/photos/6893562/pexels-photo-6893562.jpeg"
                alt="Mobile App"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
