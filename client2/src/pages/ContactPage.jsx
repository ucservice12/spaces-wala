import React, { useState } from 'react';
import { Home, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    details: ["1800 41 99099", "+91 124 4866700"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@spaceswala.com", "careers@spaceswala.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: [
      "spaceswala.com, Locon Solutions Private Limited",
      "Building A, 5th Floor",
      "Unitech Business Park, Block - B",
      "South City 1, Gurugram, India",
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 9:00 AM - 2:00 PM",
      "Sunday: Closed",
    ],
  },
];

const faqs = [
  {
    question: "How do I list my property?",
    answer:
      'You can list your property by clicking on the "Post Property" button in the navigation menu. Follow the simple steps to create your listing.',
  },
  {
    question: "What are the charges for listing a property?",
    answer:
      "Basic listings are free. For premium features and better visibility, check our pricing page for different packages.",
  },
  {
    question: "How can I schedule a property visit?",
    answer:
      'You can schedule a visit directly from the property details page by clicking the "Schedule Visit" button and selecting your preferred time slot.',
  },
  {
    question: "Is my information secure?",
    answer:
      "Yes, we take data security seriously. All your personal information is encrypted and protected according to industry standards.",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
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
              <BreadcrumbPage>Conatct Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <div className="relative py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <TypographyH1>  Get in Touch</TypographyH1>
            <TypographyP className='mt-3'>
              We're here to help with all your real estate needs
            </TypographyP>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <Card >
                <TypographyH4 className="mb-6 font-bold text-gray-800 tracking-normal">Contact Information</TypographyH4>
                <div className="space-y-6">
                  {contactDetails.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <Icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <TypographySmall>{item?.title}</TypographySmall>
                          {item.details.map((line, i) => (
                            <TypographyMuted key={i}>{line}</TypographyMuted>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>


            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card>
                <h2 className="text-xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="business">Business Partnership</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>

              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <TypographyH3 className="font-bold mb-6 text-center tracking-normal">
              Frequently Asked Questions
            </TypographyH3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="grid gap-3">
                  <TypographySmall>{faq.question}</TypographySmall>
                  <TypographyMuted>{faq.answer}</TypographyMuted>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;