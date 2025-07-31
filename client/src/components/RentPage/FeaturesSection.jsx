import { motion } from 'framer-motion';
import { Shield, Gift, Receipt, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Gift,
      title: "Earn Rewards on Rent Payments",
      description: "Get bank reward points, cashback, airmiles & brand offers every time you pay rent",
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "Low Convenience Fee",
      description: "Enjoy secure rent payments with a nominal and affordable service fee",
      color: "text-yellow-400"
    },
    {
      icon: Receipt,
      title: "Instant Rent Receipts & Payments",
      description: "Pay rent online instantly and get auto-generated digital receipts for HRA claims",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Secure & Reliable Rent Payments with Complete Protection",
      color: "text-purple-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white"> {/* Changed background from bg-black to bg-gray-900 */}
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why use SpacesWala?</h2>
          <p className="text-xl text-gray-300"> {/* text-gray-300 is good on dark background */}
            Secure, rewarding, and seamless rent payments!
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-primary/50 transition-all duration-300 group" 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" // Adjusted shadow for dark background, still using black for shadow
              }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gray-950 border border-gray-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}> {/* Changed icon container background from bg-gray-800 to bg-gray-950 */}
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed"> {/* text-gray-300 is good on dark background */}
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;