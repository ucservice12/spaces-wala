import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home, Briefcase, MapPin, Clock, Users, Code, BarChart as ChartBar, Headphones, DollarSign, HeartPulse, Globe, GraduationCap
} from 'lucide-react';
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
  TypographySmall
} from '@/custom/Typography';

const CareersPage = () => {
  const departments = [
    {
      icon: <Code className="w-6 h-6" />,
      name: 'Engineering',
      description: 'Build the future of real estate technology',
      openings: 12
    },
    {
      icon: <ChartBar className="w-6 h-6" />,
      name: 'Sales & Marketing',
      description: 'Drive growth and customer acquisition',
      openings: 8
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: 'Operations',
      description: 'Ensure smooth business operations',
      openings: 5
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      name: 'Customer Support',
      description: 'Help customers succeed',
      openings: 7
    }
  ];

  const openPositions = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '5-8 years'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '4-7 years'
    },
    {
      title: 'Sales Manager',
      department: 'Sales',
      location: 'Delhi',
      type: 'Full-time',
      experience: '3-5 years'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Pune',
      type: 'Full-time',
      experience: '2-5 years'
    }
  ];

  const perks = [
    {
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
      title: 'Competitive Salary',
      description: 'Market-leading compensation packages',
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-blue-600" />,
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage',
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: 'Remote Friendly',
      description: 'Flexible working options available',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: 'Learning Budget',
      description: 'Annual budget for courses and development',
    }
  ];


  const featureCards = [
    {
      icon: Briefcase,
      title: "Growth Opportunities",
      description: "Fast-paced environment with plenty of opportunities to learn and grow.",
    },
    {
      icon: Users,
      title: "Great Culture",
      description: "Collaborative environment where innovation and creativity thrive.",
    },
    {
      icon: ChartBar,
      title: "Impact",
      description: "Make a real difference in how people find and secure their homes.",
    },
  ];

  return (
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
              <BreadcrumbPage>About Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <div className="relative py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <TypographyH1>Join Our Team</TypographyH1>
            <TypographyP className='mt-3'>
              Help us transform the real estate industry in India
            </TypographyP>
            <Link
              to="#openings"
              className="bg-white mt-3 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors duration-300 inline-block"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Why Join Us */}
        <TypographyH3 className="font-bold mb-6 tracking-normal">Why Join spaceswala.com?</TypographyH3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featureCards?.map((item, index) => (
            <Card key={index}>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <TypographyH4>{item?.title}</TypographyH4>
              <TypographyMuted className='text-base mt-3'>{item?.description}</TypographyMuted>
            </Card>
          ))}
        </div>

        {/* Departments */}
        <div className="mb-16">
          <TypographyH3 className="font-bold mb-6 text-center tracking-normal">Our Departments</TypographyH3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index}>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {dept.icon}
                </div>
                <TypographyH4>{dept?.name}</TypographyH4>
                <TypographyMuted className='text-base mt-3'>{dept?.description}</TypographyMuted>
                <TypographySmall className='pt-2 cursor-pointer text-blue-600'>
                  {dept.openings} open positions
                </TypographySmall>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div id="openings" className="mb-16">
          <TypographyH3 className="font-bold mb-6 text-center tracking-normal">Open Positions</TypographyH3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {openPositions?.map((position, index) => (
              <Card key={index} className="h-full flex flex-col justify-between">
                <div className="flex flex-col flex-1">
                  <div className="grid gap-3 mb-4">
                    <TypographyH4>{position?.title}</TypographyH4>
                    <div className="flex flex-wrap gap-2 text-gray-600">
                      <span className="flex items-center">
                        <Briefcase size={16} className="mr-1" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Button className="w-full">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>


        {/* Benefits & Perks */}
        <Card className="bg-blue-50 p-8">
          <TypographyH3 className="font-bold mb-6 text-center tracking-normal">Benefits & Perks</TypographyH3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <Card key={index} className="text-center">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {perk.icon}
                </div>
                <TypographyH4>{perk?.title}</TypographyH4>
                <TypographyMuted className='text-base mt-3'>{perk?.description}</TypographyMuted>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CareersPage;
