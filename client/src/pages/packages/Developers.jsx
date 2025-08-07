import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Building, BarChart, Users, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom animation variants for a cleaner look
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Developer = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Hero Section with the new background image */}
      <section 
        className="relative py-32 text-center px-4 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://i.pinimg.com/1200x/c1/df/87/c1df875d53d18c0e8cd9ac21a20c035c.jpg')" }}
      >
        {/* Semi-transparent overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-md">
            List Your Project with <span className="text-blue-400">SpacesWala</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium drop-shadow">
            Reach thousands of serious buyers and close deals faster.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button className="px-10 py-6 text-lg font-bold bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Post Your Project
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose SpacesWala section with a refined layout and animations */}
      <section className="py-20 bg-white px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Why Choose <span className="text-blue-600">SpacesWala</span>
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { icon: <Users className="w-10 h-10" />, title: '10,000+ Verified Buyers' },
            { icon: <BarChart className="w-10 h-10" />, title: 'Real-Time Analytics' },
            { icon: <CheckCircle className="w-10 h-10" />, title: 'Instant Buyer Queries' },
            { icon: <Building className="w-10 h-10" />, title: 'Promote Projects Easily' },
            { icon: <PhoneCall className="w-10 h-10" />, title: 'Dedicated Developer Support' },
            { icon: <CheckCircle className="w-10 h-10" />, title: 'Boost Visibility & Branding' },
          ].map(({ icon, title }, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-600 mb-6 mx-auto w-fit">
                {icon}
              </div>
              <h3 className="font-semibold text-xl text-gray-900">{title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works section */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              'Sign Up & Verify',
              'Post Project Details',
              'Get Buyer Leads',
              'Manage & Track Performance',
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 w-full text-center flex flex-col items-center justify-center transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-3xl mb-4">
                  {index + 1}
                </div>
                <p className="font-medium text-lg text-gray-800">{step}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    

      {/* Footer CTA with a vibrant blue background */}
      <section className="bg-blue-600 text-white text-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Start Reaching Buyers Today</h2>
          <p className="text-lg mb-8 text-blue-100">Elevate your project's visibility and connect with the right audience.</p>
          <Button variant="secondary" className="px-10 py-6 text-lg font-bold text-blue-600 bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Post Your Project
          </Button>
        </motion.div>
      </section>
    </div>
  );
 };

export default Developer;