import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Star } from 'lucide-react';
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  TypographyMuted,
  TypographyH4,
  TypographyH3,
  TypographyH1,
  TypographyP,
  TypographySmall,
  TypographyBlockquote
} from '@/custom/Typography';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Mumbai',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    rating: 5,
    text: 'SpacesWala.com made my property search incredibly easy. The platform is user-friendly, and I found my dream apartment within weeks. The virtual tours saved me so much time!',
    date: 'March 10, 2024',
    type: 'Buyer'
  },
  {
    id: 2,
    name: 'Priya Patel',
    location: 'Bangalore',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    rating: 5,
    text: 'As a property owner, I was amazed by how quickly I could list and sell my property. The platforms reach is impressive, and the support team was always helpful.',
    date: 'March 8, 2024',
    type: 'Seller'
  },
  {
    id: 3,
    name: 'Amit Kumar',
    location: 'Delhi',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    rating: 4,
    text: 'The loan calculator and EMI tools helped me plan my finances better. Thanks to SpacesWala.com, Im now a proud homeowner!',
    date: 'March 5, 2024',
    type: 'Buyer'
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    location: 'Hyderabad',
    image: 'https://images.pexels.com/photos/3754438/pexels-photo-3754438.jpeg',
    rating: 5,
    text: 'Ive been using SpacesWala.com for my rental properties, and its been a game-changer. The tenant verification process is thorough, and the rental agreement service is excellent.',
    date: 'March 3, 2024',
    type: 'Landlord'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    location: 'Pune',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    rating: 4,
    text: 'The property insights and area guides were invaluable in my decision-making process. SpacesWala.com provides comprehensive information that you cant find elsewhere.',
    date: 'February 28, 2024',
    type: 'Buyer'
  },
  {
    id: 6,
    name: 'Meera Shah',
    location: 'Chennai',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
    rating: 5,
    text: 'Found my perfect rental apartment through SpacesWala.com. The filters are so detailed, and the photos are always high quality. Highly recommended!',
    date: 'February 25, 2024',
    type: 'Tenant'
  }
];

const TestimonialsPage = () => (
  <div className="pt-24 min-h-screen bg-gray-50">
    {/* Breadcrumb */}
    <div className="max-w-7xl mx-auto p-4 border-b">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="flex items-center gap-1">
              <Home size={14} /> Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Testimonial</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    {/* Hero Section */}
    <div className="bg-blue-600 py-16 text-center text-white px-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <TypographyH1>What Our Customers Say</TypographyH1>
          <TypographyP className='mt-3'>
            Real stories from people who found their perfect home with spaceswala.com
          </TypographyP>
        </div>
      </div>
    </div>

    {/* Stats Section */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-8 px-4 md:px-8 max-w-7xl mx-auto">
      {[
        { label: 'Happy Customers', value: '50K+' },
        { label: 'Average Rating', value: '4.8/5' },
        { label: 'Success Rate', value: '95%' },
        { label: 'Properties Sold', value: '30K+' }
      ].map((stat, i) => (
        <Card key={i} className="shadow-xl text-center">
          <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
          <p className="text-gray-600">{stat.label}</p>
        </Card>
      ))}
    </div>

    {/* Testimonials */}
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(({ id, name, location, image, rating, text, date, type }) => (
          <Card key={id} className="overflow-hidden">
            <div className="p-2">
              <div className="flex items-center mb-4">
                <img src={image} alt={name} loading='lazy' className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <TypographySmall>{name}</TypographySmall>
                  <TypographyMuted>{location}</TypographyMuted>
                </div>
              </div>
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} />
                ))}
                <TypographyMuted className="ml-2">{rating}/5</TypographyMuted>
              </div>
              <TypographyBlockquote className="text-gray-600 mb-4">"{text}"</TypographyBlockquote>
              <div className="flex justify-between text-sm text-gray-500">
                <TypographyMuted>{date}</TypographyMuted>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">{type}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>

    {/* Call to Action */}
    <div className="bg-gray-100 py-12 text-center px-4">
      <TypographyH3>
        Ready to Find Your Perfect Home?
      </TypographyH3>
      <TypographyMuted className="text-base my-4">Join thousands of satisfied customers who found their dream property with SpacesWala.com</TypographyMuted>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/search">
          <Button>
            Start Your Search
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline">
            Conatct Us
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default TestimonialsPage;
