import { Link } from 'react-router-dom';
import { Home, Users, Award, Target } from 'lucide-react';
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  TypographyMuted,
  TypographyH4,
  TypographyH3,
  TypographyH1
} from '@/custom/Typography';

const stats = [
  { value: '1M+', label: 'Properties Listed' },
  { value: '500+', label: 'Cities Covered' },
  { value: '10M+', label: 'Monthly Users' },
  { value: '50K+', label: 'Partner Agents' },
];

const values = [
  {
    title: 'Innovation',
    icon: Target,
    description: 'We continuously strive to improve and innovate in the real estate technology space.',
  },
  {
    title: 'Customer First',
    icon: Users,
    description: 'Our customers are at the heart of everything we do, driving our decisions and innovations.',
  },
  {
    title: 'Excellence',
    icon: Award,
    description: 'We maintain the highest standards in our services and operations.',
  },
];

const leaders = [
  {
    name: 'Rahul Sharma',
    role: 'CEO & Co-founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
  },
  {
    name: 'Priya Patel',
    role: 'CTO',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
  },
  {
    name: 'Amit Kumar',
    role: 'COO',
    image: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg',
  },
];

const AboutPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 px-4">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto py-3 border-b">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-1">
                <Home size={14} /> Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto sm:py-12 pt-3 space-y-16">
        {/* Our Story */}
        <section className="max-w-4xl">
          <TypographyH3 className="font-bold mb-4">Our Story</TypographyH3>
          <TypographyMuted className="text-base mb-4">
            Founded in 2012, SpacesWala.com has grown from a small startup to India's leading full-stack real estate platform. Our mission is to make real estate transactions simple, efficient, and transparent for everyone involved.
          </TypographyMuted>
          <TypographyMuted className="text-base">
            We combine cutting-edge technology with deep industry expertise to provide comprehensive solutions for property buyers, sellers, and renters. Our platform features advanced search algorithms, detailed property insights, and a seamless user experience.
          </TypographyMuted>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Card key={idx} className="text-center grid gap-2">
              <TypographyH1 className='text-blue-600 font-bold'>
                {stat?.value}
              </TypographyH1>
              <TypographyMuted className='text-base'>
                {stat?.label}
              </TypographyMuted>
            </Card>
          ))}
        </section>

        {/* Values */}
        <section>
          <TypographyH3 className="font-bold mb-6 text-center tracking-normal">Our Values</TypographyH3>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ title, icon: Icon, description }, idx) => (
              <Card key={idx}>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <TypographyH4>{title}</TypographyH4>
                <TypographyMuted className='text-base mt-3'>{description}</TypographyMuted>
              </Card>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section>
          <TypographyH3 className="font-bold mb-6 text-center tracking-normal">Our Leadership</TypographyH3>
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3">
            {leaders.map(({ name, role, image }, idx) => (
              <div key={idx} className="text-center">
                <img src={image} alt={name} loading='lazy' className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <TypographyH4>
                  {name}
                </TypographyH4>
                <TypographyMuted className='text-base'>
                  {role}
                </TypographyMuted>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-50 rounded-lg p-8 text-center">
          <TypographyH3 className="font-bold mb-6 text-center tracking-normal">Join Our Journey</TypographyH3>
          <TypographyMuted className='text-base mb-6'>
            Be part of the revolution in Indian real estate. List your property or start your search today.
          </TypographyMuted>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
            >
              <Button>
                Contact Us
              </Button>
            </Link>
            <Link
              to="/careers"
            >
              <Button variant='outline'>
                View Careers
              </Button>
            </Link>
          </div>
        </section>
      </div >
    </div >
  );
};

export default AboutPage;
