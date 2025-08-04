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
        'Highlight your brand with "SpacesWala Expert Pro" tag along with "Locality Champion" tag',
        'Visibility on Home Page and Search Result Page',
        'Access to on-ground property verification in Tier-I cities',
        'Unlimited self-verification of properties',
        'Unique feature to showcase 3 properties in one listing'
      ]
    },
    {
      name: 'SpacesWala Expert',
      badge: 'Enhanced',
      badgeColor: 'bg-orange-500', // Kept for variation, can be changed
      features: [
        'Preferential Visibility in Search Results in Every Locality you Deal',
        'Reusable slots - allowing you to post multiple listings',
        'Highlight your brand with "SpacesWala Expert", "Authentic Listing" and "Trusted Agent" tag',
        'Visibility on Home Page and Search Result Page',
        'Access to on-ground property verification in Tier-I cities',
        'Unlimited self-verification of properties',
        'Unique feature to showcase 3 properties in one listing'
      ]
    },
    {
      name: 'Premier',
      badge: 'Value',
      badgeColor: 'bg-green-600', // Kept for variation, can be changed
      features: [
        'Reusable slots - allowing you to post multiple listings',
        'Highlight your brand with "SpacesWala Prime Agent" tag',
        'Access to on-ground property verification in Tier-I cities',
        'Unlimited self-verification of properties',
        'Dedicate Agent Micro-Site'
      ]
    },
    {
      name: 'SpacesWala Select',
      badge: 'Starter',
      badgeColor: 'bg-gray-500', // Kept for variation, can be changed
      features: [
        'Showcase your properties to attract more buyers and tenants',
        'Reusable slots - allowing you to post multiple listings',
        'Unlimited self-verification of properties',
        'Easily manage listings with a simple, user-friendly dashboard'
      ]
    }
  ];

  const additionalProducts = [
    {
      name: 'Audience Maximiser',
      features: [
        'A powerful retargeting tool designed to connect with high-intent buyers',
        'Strategically retargets high-intent buyers through social media, Google\'s ad network, and the spaceswala platform',
        'Retargets engaged buyers, enhancing visibility and impressions across various online channels',
        'Choose between two targeting options of Locality and Project level retargeting to optimize your reach'
      ]
    },
    {
      name: 'New Project Planning',
      features: [
        'Opportunity to Generate Leads Interested in New Bookings',
        'Option to Choose Specific Individual Configurations to be Promoted in a New Project',
        'Promote Unique Offers to Users on Contact Request Form to Increase Lead Flow',
        'Get Promoted on Multiple New Projects at a Very Low Price & Generate Maximum ROI'
      ]
    },
    {
      name: 'Featured Agent',
      features: [
        'Ensures top visibility in the Contact Seller section across web and mobile platforms',
        'Only 3 exclusive slots available per project',
        'Stand out with a unique design for premium visibility',
        'Highlighted as a Featured Agent to enhance credibility and maximize visibility'
      ]
    },
    {
      name: 'New Project Highlight',
      features: [
        'Boosts project visibility and attracts buyers with prominent placement on locality search pages',
        'Enhances broker branding by displaying their name alongside the project',
        'Strategically positioned to maximize visibility and impact',
        'Ideal for brokers to stand out in competitive localities'
      ]
    }
  ];

  const videoProducts = [
    {
      name: 'SpacesWala Shorts',
      features: [
        'Interactive Property tour videos with AI-guided narration',
        'Custom scripts highlight key property features',
        'Explore properties similar to Browse social media content',
        'Engaging virtual experience for buyers',
        'Ideal for showcasing large or unique properties'
      ]
    },
    {
      name: 'Rent Featured Billboard',
      features: [
        'A fixed slot on the Rent Locality Page for maximum visibility',
        'Displays upto 5 Rent properties per slot within a locality',
        'Sellers can directly choose which properties to feature',
        'Manage and update featured properties easily through the dashboard'
      ]
    },
    {
      name: 'DigiLite',
      features: [
        'Content product that captures and displays a 360 Degree panorama of the property',
        'Platform integration with ad products driving user engagement',
        'Easy distribution and can be accessed anywhere and anytime'
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex border-b-2 border-gray-200">
            <button className="px-8 py-4 text-lg text-fuchsia-600 font-bold border-b-4 border-fuchsia-600 transition-colors duration-300">
              Broker
            </button>
            {/* Add more tabs if needed */}
          </div>
        </motion.div>

        {/* Main Plans Section */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Choose a Plan That Fits Your Needs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 relative flex flex-col justify-between shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <div>
                <div className={`inline-block px-4 py-1 rounded-full text-white text-sm font-semibold mb-4 ${plan.badgeColor}`}>
                  {plan.badge}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{plan.name}</h3>
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Key Features:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                        <span className="text-fuchsia-600 mr-3 mt-1 text-xl">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <Button className="w-full py-3 text-base bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold">
                  View Demo
                </Button>
                <Button variant="outline" className="w-full py-3 text-base border-fuchsia-600 text-fuchsia-600 font-semibold hover:bg-fuchsia-50">
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Products Section */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Additional Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {additionalProducts.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{product.name}</h3>
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Key Features:</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                        <span className="text-fuchsia-600 mr-3 mt-1 text-xl">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <Button className="w-full py-3 text-base bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold">
                  View Demo
                </Button>
                <Button variant="outline" className="w-full py-3 text-base border-fuchsia-600 text-fuchsia-600 font-semibold hover:bg-fuchsia-50">
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Products Section */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Video Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoProducts.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{product.name}</h3>
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Key Features:</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                        <span className="text-fuchsia-600 mr-3 mt-1 text-xl">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <Button className="w-full py-3 text-base bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold">
                  View Demo
                </Button>
                <Button variant="outline" className="w-full py-3 text-base border-fuchsia-600 text-fuchsia-600 font-semibold hover:bg-fuchsia-50">
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
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative py-48 text-center px-4 overflow-hidden"
        style={{ backgroundImage: `url('https://i.pinimg.com/1200x/b3/86/6b/b3866b72b32ea38037d8bb4e9338615b.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <motion.div
          className="relative z-10 text-white max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Get More Leads. Close More Deals
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow">
            Join 5,000+ brokers growing with <span className="text-fuchsia-400 font-bold">SpacesWala</span>
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button className="px-10 py-6 text-lg font-bold bg-fuchsia-600 hover:bg-fuchsia-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Join as Broker
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Brokers Love SpacesWala */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Why Brokers Love <span className="text-fuchsia-600">SpacesWala</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Home className="w-10 h-10" />, title: 'Post Properties for Free' },
              { icon: <BarChart className="w-10 h-10" />, title: 'Real-Time Lead Dashboard' },
              { icon: <PhoneCall className="w-10 h-10" />, title: 'Verified Buyer Enquiries' },
              { icon: <User className="w-10 h-10" />, title: 'Build Your Agent Profile' },
              { icon: <Star className="w-10 h-10" />, title: 'Get Client Ratings' },
              { icon: <FileText className="w-10 h-10" />, title: 'Track Performance & Inventory' },
            ].map(({ icon, title }, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-fuchsia-600 mb-6 mx-auto w-fit">
                  {icon}
                </div>
                <h3 className="font-semibold text-xl text-gray-800">{title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How It <span className="text-fuchsia-600">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              'Register as a Broker',
              'Post Properties Easily',
              'Get Direct Buyer Leads',
              'Manage & Convert Leads',
              'Grow Your Business',
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-xl p-6 w-full text-center flex flex-col items-center justify-center transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <div className="w-16 h-16 rounded-full bg-fuchsia-600 text-white flex items-center justify-center font-bold text-3xl mb-4">
                  {index + 1}
                </div>
                <p className="font-medium text-lg text-gray-800">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            What Brokers Are <span className="text-fuchsia-600">Saying</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'SpacesWala gave me real buyer leads and helped grow my network. The dashboard is intuitive and powerful.',
              'Easy-to-use platform with great support for agents. The verified leads save me so much time.',
            ].map((quote, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="italic text-lg text-gray-700 leading-relaxed">"{quote}"</p>
                <p className="mt-6 text-sm text-gray-500 font-medium">- anisha</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Plans */}
      <PricingSection />

      {/* Support & FAQ */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Need <span className="text-fuchsia-600">Assistance</span>?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700">Call us at <strong className="text-xl text-gray-900">+91-7709222331</strong></p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700">or email <strong className="text-xl text-gray-900">@spaceswala.com</strong></p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button className="px-8 py-4 text-base font-semibold bg-fuchsia-600 hover:bg-fuchsia-700">
                Contact Support
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="mt-16 bg-gray-50 p-8 rounded-2xl shadow-inner"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Frequently Asked Questions</h3>
            <ul className="space-y-6">
              <li className="p-4 bg-white rounded-xl shadow-sm">
                <strong className="text-lg text-gray-800">How do I register?</strong>
                <p className="mt-2 text-gray-600">Click “Join as Broker” and complete the quick signup form. It's a simple process that takes just a few minutes.</p>
              </li>
              <li className="p-4 bg-white rounded-xl shadow-sm">
                <strong className="text-lg text-gray-800">Can I post both commercial and residential listings?</strong>
                <p className="mt-2 text-gray-600">Yes, our platform is designed to support both commercial and residential property listings, giving you maximum flexibility.</p>
              </li>
              <li className="p-4 bg-white rounded-xl shadow-sm">
                <strong className="text-lg text-gray-800">What’s the difference between Free and Elite plans?</strong>
                <p className="mt-2 text-gray-600">Our Elite plan offers more listings, higher visibility for your properties, and access to a larger pool of premium, verified leads compared to the Free plan.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-fuchsia-600 text-white text-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Start Growing Your Brokerage Today</h2>
          <p className="text-lg mb-8">Join the leading platform for real estate brokers and elevate your business.</p>
          <Button variant="secondary" className="px-10 py-6 text-lg font-bold text-fuchsia-600 bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Join as Broker
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Broker;