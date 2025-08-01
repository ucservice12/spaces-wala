import { Link } from 'react-router-dom';
import React from 'react';
import PropertyCard from '@/components/property/PropertyCard';
import { sampleProperties, featuredCities } from '../data/sampleData';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Hero from '@/components/layout/Hero';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  TypographyBlockquote,
  TypographyH2,
  TypographyH4,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from '@/custom/Typography';
import AnimatedHome from '@/components/icons/AnimatedHome';
import AnimatedBuilding from '@/components/icons/AnimatedBuilding';
import AnimatedUsers from '@/components/icons/AnimatedUsers';

const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Mumbai',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    text: 'SpacesWala.com made finding my dream apartment so easy. The smart filters and instant map view saved me tons of time!',
  },
  {
    name: 'Priya Patel',
    location: 'Bangalore',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    text: 'I listed my property in minutes and got real inquiries within days. The team at SpacesWala was super helpful throughout the process!',
  },
  {
    name: 'Vikram Singh',
    location: 'Delhi',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    text: 'The loan & EMI tools on SpacesWala.com gave me complete clarity. I bought my first home with confidence thanks to their features.',
  },
];

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

const iconMap = {
  Home: <AnimatedHome />,
  Building: <AnimatedBuilding />,
  Users: <AnimatedUsers />,
};

const HomePage = () => {
  return (
    <>
      <Hero />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <TypographyH2>Featured Properties</TypographyH2>
            <Link to="/search" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
              View All <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sampleProperties.slice(0, 8).map((property) => (
              <motion.div
                key={property.id}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 150 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-100/30 blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-purple-100/30 blur-xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <TypographyH2 className="text-3xl sm:text-4xl font-bold text-center">
              Find Properties in Popular Cities
            </TypographyH2>
            <p className="mt-3 text-xl text-black text-center">
              Discover the perfect home for you with thousands of listings across the country.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {featuredCities?.slice(0, 6).map((city, index) => {
              const directions = [
                { x: 100, opacity: 0 },
                { x: -100, opacity: 0 },
                { y: -100, opacity: 0 },
              ];
              const direction = directions[index % directions.length];

              return (
                <motion.div
                  key={city?.id}
                  initial={direction}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 80 }}
                  whileHover={{ scale: 1.05, zIndex: 30 }}
                >
                  <Link to={`/search?city=${city?.name}`} className="group block h-full">
                    <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <div className="h-56 overflow-hidden relative">
                        <motion.img
                          src={city?.image}
                          alt={city?.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          initial={{ scale: 1, opacity: 0.8 }}
                          whileHover={{ scale: 1.1, opacity: 0.9 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                      <div className="p-6 space-y-1 bg-white">
                        <TypographySmall className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                          {city?.name}
                        </TypographySmall>
                        <TypographyMuted className="text-blue-600/80">
                          {city?.propertyCount}+ Properties
                        </TypographyMuted>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
      {/* Our Services Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-50px' }}
            className="text-center mb-12"
          >
            <TypographyH2 className="font-bold text-4xl md:text-4xl text-gray-900 drop-shadow-lg">
              Our Services
            </TypographyH2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => {
              // Real estate image URLs (buy/rent/sell)
              const serviceImages = [
                "https://i.pinimg.com/736x/5c/97/72/5c9772a5c0fac313ee66cd4410f89699.jpg", // Buy Home
                "https://i.pinimg.com/1200x/40/c4/cd/40c4cd938994f60d723b07e6ecd4f010.jpg", // Rent Home
                "https://i.pinimg.com/736x/c3/52/9d/c3529d726c3974cd23f9aabd0441bbd0.jpg"  // Sell Home
              ];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring', stiffness: 100 }}
                  viewport={{ once: true, margin: '-50px' }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                    <motion.div
                      className="mb-6 h-48 overflow-hidden rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Clean image without text overlay */}
                      <img
                        src={serviceImages[idx]}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <TypographyH4 className="mb-3 text-gray-900">{service?.title}</TypographyH4>
                    <TypographyMuted className="mb-4 text-gray-700 text-base">{service.desc}</TypographyMuted>

                    <motion.div whileHover={{ x: 2 }}>
                      <Link to={service.link} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 group-hover:text-blue-700 transition-colors duration-200">
                        {service.linkText}
                        <motion.span whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 500 }}>
                          <ArrowRight size={18} className="ml-2" />
                        </motion.span>
                      </Link>
                    </motion.div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <div
        className="border-t border-gray-700 pt-8 mt-8" // Removed duplicate border-t div and adjusted mt
      ></div>
      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <TypographyH2 className="font-bold text-center text-4xl md:text-5xl text-gray-800 mb-12">
            Trusted by Thousands of Happy Customers on <span className="text-blue-600">SpacesWala.com</span>
          </TypographyH2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: -0.5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    loading="lazy"
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-400 p-[2px]" // Added padding for border effect
                  />
                  <div>
                    <TypographySmall className="font-semibold text-lg text-gray-900">{review?.name}</TypographySmall>
                    <TypographyMuted className="text-gray-500">{review?.location}</TypographyMuted>
                  </div>
                </div>
                <TypographyBlockquote className="text-gray-700 text-base leading-relaxed">
                  "{review?.text}"
                </TypographyBlockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-teal-700 text-white"> {/* More vibrant and unique gradient */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 space-y-6 text-center md:text-left"
            >
              <TypographyH2 className="text-4xl md:text-5xl font-extrabold leading-tight">Download the <span className="text-white drop-shadow-md">SpacesWala.com</span> App</TypographyH2>
              <TypographyP className="text-blue-100 text-xl leading-relaxed">
                Get the full experience on the go. Search properties, connect with agents, and manage your favorite listings all from your phone.
              </TypographyP>
              <div className="flex justify-center md:justify-start gap-4 mt-6">
                <a href="#" aria-label="Download on Google Play">
                  <img
                    loading="lazy"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-14 transition-transform duration-200 hover:scale-105"
                  />
                </a>
                <a href="#" aria-label="Download on Apple App Store">
                  <img
                    loading="lazy"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-14 transition-transform duration-200 hover:scale-105"
                  />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/3 flex justify-center"
            >
              <img
                loading="lazy"
                src="https://i.ytimg.com/vi/F-PWkKt2mUU/maxresdefault.jpg"
                alt="Mobile App"
                className="rounded-xl shadow-2xl w-full max-w-sm md:max-w-none" // Responsive sizing
              />
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
};


export default HomePage;
