import React from 'react';
import { Button } from '@/components/ui/button';
import { User, PhoneCall, Home, BarChart, Star, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

// Component for the pricing section, styled with modern UI
const PricingSection = () => {
  const plans = [
    {
      name: 'SpacesWala Expert Pro',
      badge: 'Recommended',
      badgeColor: 'bg-fuchsia-600',
      features: [
        'Highest visibility across all listing categories in every locality',
        'Reusable slots - allowing you to post multiple listings',
        'Have maximum impressions of the customers with larger cards and differentiated design',
        'Highlight your brand with "Housing Expert Pro" tag along with "Locality Champion" tag',
        'Visibility on Home Page and Search Result Page',
        'Access to on-ground property verification in Tier-I cities',
        'Unlimited self-verification of properties',
        'Unique feature to showcase 3 properties in one listing'
      ]
    },
    {
      name: 'SpacesWala Expert',
      badge: 'Enhanced',
      badgeColor: 'bg-orange-500',
      features: [
        'Preferential Visibility in Search Results in Every Locality you Deal',
        'Reusable slots - allowing you to post multiple listings',
        'Highlight your brand with "Housing Expert", "Authentic Listing" and "Trusted Agent" tag',
        'Visibility on Home Page and Search Result Page',
        'Access to on-ground property verification in Tier-I cities',
        'Unlimited self-verification of properties',
        'Unique feature to showcase 3 properties in one listing'
      ]
    },
    {
      name: 'Premier',
      badge: 'Value',
      badgeColor: 'bg-green-600',
      features: [
        'Reusable slots - allowing you to post multiple listings',
        'Highlight your brand with "Housing Prime Agent" tag',
        'Access to on-ground property verification in Tier-I cities',
        'Unlimited self-verification of properties',
        'Dedicate Agent Micro-Site'
      ]
    },
    {
      name: 'SpacesWala Select',
      badge: 'Starter',
      badgeColor: 'bg-gray-500',
      features: [
        'Showcase properties to attract buyers',
        'Reusable slots for multiple listings',
        'Unlimited self-verification',
        'User-friendly dashboard'
      ]
    }
  ];

  const additionalProducts = [
    {
      name: 'Audience Maximiser',
      features: [
        'Powerful retargeting tool for high-intent buyers',
        'Retarget through social media and Google ads',
        'Enhances visibility across channels',
        'Locality and Project level retargeting'
      ]
    },
    {
      name: 'New Project Planning',
      features: [
        'Generate leads for new bookings',
        'Promote specific configurations',
        'Showcase unique offers',
        'Promote multiple projects at low cost'
      ]
    },
    {
      name: 'Featured Agent',
      features: [
        'Top visibility in Contact Seller section',
        'Only 3 exclusive slots per project',
        'Unique design for premium visibility',
        'Highlighted as Featured Agent'
      ]
    },
    {
      name: 'New Project Highlight',
      features: [
        'Boosts project visibility',
        'Displays broker name with project',
        'Strategic positioning for maximum impact',
        'Ideal for competitive localities'
      ]
    }
  ];

  const videoProducts = [
    {
      name: 'SpacesWala Shorts',
      features: [
        'Interactive Property tour videos',
        'AI-guided narration',
        'Engaging virtual experience',
        'Ideal for unique properties'
      ]
    },
    {
      name: 'Rent Featured Billboard',
      features: [
        'Fixed slot on Rent Locality Page',
        'Displays up to 5 Rent properties',
        'Direct property selection',
        'Easy dashboard management'
      ]
    },
    {
      name: 'DigiLite',
      features: [
        '360 Degree panorama of property',
        'Platform integration with ads',
        'Easy distribution and access'
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex border-b border-gray-200">
            <button className="px-6 py-1 text-md font-medium text-fuchsia-600 border-b-6 border-fuchsia-900">
              Broker Plans
            </button>
          </div>
        </motion.div>

        {/* Main Plans Section */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Choose Your Plan</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-3 relative flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div>
                <div className={`inline-block px-3 py-1 rounded-full text-white text-xs font-medium mb-3 ${plan.badgeColor}`}>
                  {plan.badge}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3 text-md">Key Features:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <span className="text-fuchsia-500 mr-2 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <Button className="w-full py-2 text-sm bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
                  View Demo
                </Button>
                <Button variant="outline" className="w-full py-2 text-sm border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-50">
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Products Section */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Additional Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {additionalProducts.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{product.name}</h3>
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3 text-md">Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <span className="text-fuchsia-500 mr-2 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <Button className="w-full py-2 text-sm bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
                  View Demo
                </Button>
                <Button variant="outline" className="w-full py-2 text-sm border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-50">
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Products Section */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Video Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {videoProducts.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{product.name}</h3>
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3 text-md">Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <span className="text-fuchsia-500 mr-2 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <Button className="w-full py-2 text-sm bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
                  View Demo
                </Button>
                <Button variant="outline" className="w-full py-2 text-sm border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-50">
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Broker = () => {
  return (
    <div className="w-full overflow-hidden bg-slate-50 font-sans">
      {/* Hero Section */}
      <section
        className="relative py-48 text-center px-4 overflow-hidden"
        style={{ backgroundImage: `url('https://i.pinimg.com/1200x/b3/86/6b/b3866b72b32ea38037d8bb4e9338615b.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <motion.div
          className="relative z-10 text-white max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            Get More Leads. Close More Deals
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Join 5,000+ brokers growing with <span className="text-fuchsia-300 font-semibold">SpacesWala</span>
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button className="px-8 py-4 text-md font-semibold bg-fuchsia-600 hover:bg-fuchsia-700">
              Join as Broker
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Brokers Love SpacesWala */}
      {/* <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Why Brokers Love <span className="text-fuchsia-600">SpacesWala</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Home className="w-8 h-8" />, title: 'Post Properties for Free' },
              { icon: <BarChart className="w-8 h-8" />, title: 'Real-Time Lead Dashboard' },
              { icon: <PhoneCall className="w-8 h-8" />, title: 'Verified Buyer Enquiries' },
              { icon: <User className="w-8 h-8" />, title: 'Build Your Agent Profile' },
              { icon: <Star className="w-8 h-8" />, title: 'Get Client Ratings' },
              { icon: <FileText className="w-8 h-8" />, title: 'Track Performance & Inventory' },
            ].map(({ icon, title }, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="text-fuchsia-600 mb-4 mx-auto w-fit">
                  {icon}
                </div>
                <h3 className="font-medium text-gray-800">{title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* How It Works */}
      {/* <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
            How It <span className="text-fuchsia-600">Works</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Register as Broker',
              'Post Properties',
              'Get Buyer Leads',
              'Manage Leads',
              'Grow Business',
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-sm p-4 text-center flex flex-col items-center transition-all w-full sm:w-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-full bg-fuchsia-600 text-white flex items-center justify-center font-bold text-lg mb-3">
                  {index + 1}
                </div>
                <p className="font-medium text-gray-800">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      Testimonials
      <section className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
            What Brokers <span className="text-fuchsia-600">Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'SpacesWala gave me real buyer leads and helped grow my network. The dashboard is intuitive and powerful.',
              'Easy-to-use platform with great support for agents. The verified leads save me so much time.',
            ].map((quote, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="italic text-gray-700">"{quote}"</p>
                <p className="mt-4 text-sm text-gray-500">- Anisha</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Pricing / Plans */}
      <PricingSection />

      {/* Support & FAQ */}
      {/* <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Need <span className="text-fuchsia-600">Help</span>?
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-8">
            <p className="text-gray-700">Call us at <strong className="text-gray-800">+91-7709222331</strong></p>
            <p className="text-gray-700">or email <strong className="text-gray-800">support@spaceswala.com</strong></p>
            <Button className="px-6 py-3 text-sm font-medium bg-fuchsia-600 hover:bg-fuchsia-700 mt-4">
              Contact Support
            </Button>
          </div>
          <motion.div
            className="mt-8 bg-white p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Frequently Asked Questions</h3>
            <ul className="space-y-4">
              <li className="p-4 bg-gray-50 rounded-lg">
                <strong className="text-gray-800">How do I register?</strong>
                <p className="mt-1 text-gray-600 text-sm">Click "Join as Broker" and complete the quick signup form.</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <strong className="text-gray-800">Can I post both commercial and residential listings?</strong>
                <p className="mt-1 text-gray-600 text-sm">Yes, our platform supports both property types.</p>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg">
                <strong className="text-gray-800">What's the difference between Free and Elite plans?</strong>
                <p className="mt-1 text-gray-600 text-sm">Elite offers more listings and premium lead access.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section> */}

      {/* Footer CTA */}
      {/* <section className="bg-fuchsia-600 text-white text-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Start Growing Your Brokerage Today</h2>
          <p className="mb-6">Join the leading platform for real estate brokers.</p>
          <Button variant="secondary" className="px-8 py-3 text-md font-medium text-fuchsia-600 bg-white hover:bg-gray-100">
            Join as Broker
          </Button>
        </motion.div>
      </section> */}
    </div>
  );
};

export default Broker;