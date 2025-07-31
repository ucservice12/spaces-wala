import { motion } from 'framer-motion';
import { Smartphone, FileText, CreditCard } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: Smartphone,
      title: "Log in to the app",
      description: "Select 'House Rent Payment' to pay rent online",
      color: "from-blue-400 to-cyan-500"
    },
    {
      number: "2",
      icon: FileText,
      title: "Enter Rent Details",
      description: "Add rent amount & landlord info (saved for future use)",
      color: "from-purple-400 to-pink-500"
    },
    {
      number: "3",
      icon: CreditCard,
      title: "Secure Rent Payment",
      description: "Pay via credit card, verify OTP & get instant rent receipt",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it Works?</h2>
          <p className="text-xl text-gray-300"> {/* text-gray-300 is good for dark background */}
            Easy & Secure Process
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="text-center group relative"
              variants={itemVariants}
            >
              {/* Step Number */}
              <motion.div 
                className="relative mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  {step.number}
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Icon */}
              <motion.div 
                className="mb-4"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-12 h-12 mx-auto bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300"> {/* Good for dark theme */}
                  <step.icon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors duration-300" /> {/* Good for dark theme */}
                </div>
              </motion.div>

              {/* Content */}
              <motion.h3 
                className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {step.title}
              </motion.h3>
              <p className="text-gray-300 leading-relaxed"> {/* Good for dark theme */}
                {step.description}
              </p>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-0.5 bg-gradient-to-r from-gray-700 via-primary/30 to-gray-700 transform -translate-y-1/2 -z-10" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Security Badge */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-gray-800 border border-gray-700 rounded-full px-6 py-3 hover:border-primary/50 transition-colors duration-300"> {/* Changed background from bg-gray-900 to bg-gray-800 */}
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">✓</span>
            </div>
            <span className="text-lg font-semibold text-white">100% Secure</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;